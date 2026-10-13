"""
Records German audio for built-in content and compresses it to AAC with macOS's afconvert.

Voices come from Chatterbox Multilingual (MIT), cloned from the public-domain LibriVox readers
in scripts/voices/. The model's built-in voice is not used: its pitch and accent drift. Chatterbox
sometimes garbles short or unusual input, so every sentence is transcribed with Whisper and
regenerated if the words don't match. After five failures it falls back to Piper (CC0) in a
voice of the same gender, and the sentence is listed in audio-build/fallbacks.txt.

Setup and run: see README, "Recorded voices".

Only missing recordings are made, so re-running after content edits is quick. Recordings no
longer requested are deleted, and public/audio/manifest.json lists the ones that exist.
"""
import difflib
import json
import os
import re
import subprocess
import sys
import tempfile
import time
import wave

import gc

import numpy as np

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BUILD = os.path.join(ROOT, 'audio-build')
PRIORITY = os.path.join(BUILD, 'priority.json')
OUTPUT = os.path.join(ROOT, 'public', 'audio')
REFERENCES = os.path.join(ROOT, 'scripts', 'voices')

# Voice name → reference recording to clone (None: the model's built-in voice).
VOICES = {'lena': 'bl.wav', 'katrin': 'ke.wav', 'jonas': 'kn.wav', 'markus': 'mr.wav'}
FEMALE = {'lena', 'katrin'}
PIPER_FALLBACK = {True: 'de_DE-kerstin-low', False: 'de_DE-thorsten-high'}

# One attempt per temperature; varying it makes a repeat of the same garble less likely.
TEMPERATURES = (0.8, 0.6, 0.9, 0.7, 0.5)
# GPU memory builds up over a long run until the Mac starts swapping, so each run records
# at most this many clips and exits with code 3; scripts/record_all.sh restarts it.
CLIPS_PER_RUN = 25
PAUSE_SECONDS = 0.25
# Abbreviations that end in a full stop without ending the sentence.
ABBREVIATIONS = ('z.', 'B.', 'd.', 'h.', 'u.', 'a.', 'Dr.', 'Prof.', 'Nr.', 'St.', 'ca.', 'bzw.', 'usw.', 'etc.', 'vgl.')


def sentences(text):
    """Splits text into sentences of at least three words, so each can be generated and checked alone."""
    pieces = re.split(r'(?<=[.!?…])\s+(?=[A-ZÄÖÜ„"])', text)
    merged = []
    for piece in pieces:
        previous = merged[-1] if merged else ''
        joins = previous.endswith(ABBREVIATIONS) or re.search(r'\d\.$', previous) or len(previous.split()) < 3
        if merged and joins:
            merged[-1] = f'{previous} {piece}'
        else:
            merged.append(piece)
    if len(merged) > 1 and len(merged[-1].split()) < 3:
        last = merged.pop()
        merged[-1] = f'{merged[-1]} {last}'
    return merged


def normalise(text):
    text = text.lower().replace('ß', 'ss')
    return re.sub(r'[^a-zäöü0-9]+', ' ', text).strip()


def sounds_right(text, transcript, seconds):
    """The transcript matches the text closely, with no extra words, and the length is plausible."""
    expected, heard = normalise(text), normalise(transcript)
    letters = len(expected.replace(' ', ''))
    if not (letters * 0.03 <= seconds <= letters * 0.12 + 1.5):
        return False
    if len(heard.split()) > len(expected.split()) + 1:
        return False
    threshold = 0.75 if re.search(r'\d', text) else 0.85
    return difflib.SequenceMatcher(None, expected, heard).ratio() >= threshold


def end_of_text(text, words):
    """
    When the last word of the text ends, from Whisper's word timings. Chatterbox often says
    the sentence correctly and then babbles on; cutting there keeps the good part.
    """
    expected = normalise(text).split()
    if not expected:
        return None
    last = expected[-1]
    for index, word in enumerate(words):
        if index < len(expected) - 3:
            continue
        if difflib.SequenceMatcher(None, normalise(word.word), last).ratio() >= 0.7:
            return word.end
    return None


class Recorder:
    def __init__(self):
        import torch
        from chatterbox.mtl_tts import ChatterboxMultilingualTTS
        from faster_whisper import WhisperModel

        device = 'mps' if torch.backends.mps.is_available() else 'cpu'
        self.model = ChatterboxMultilingualTTS.from_local(os.path.join(BUILD, 'chatterbox'), device)
        self.whisper = WhisperModel(os.path.join(BUILD, 'whisper-small'), device='cpu', compute_type='int8')
        self.piper = {}
        self.voice = None
        self.limit_generation_length()

    def limit_generation_length(self):
        """Caps speech tokens per sentence (25 a second) so a garbled attempt can't run on for 40 seconds."""
        inference = self.model.t3.inference
        self.token_limit = 1000

        def limited(*args, **kwargs):
            kwargs['max_new_tokens'] = self.token_limit
            return inference(*args, **kwargs)

        self.model.t3.inference = limited

    def use_voice(self, voice):
        if voice == self.voice:
            return
        self.model.prepare_conditionals(os.path.join(REFERENCES, VOICES[voice]))
        self.voice = voice

    def transcribe(self, samples):
        """Words heard, with timings."""
        segments, _ = self.whisper.transcribe(samples, language='de', beam_size=1, word_timestamps=True)
        return [word for segment in segments for word in segment.words]

    def chatterbox(self, text):
        """One sentence as float samples at the model rate, checked by Whisper, or None after five failures."""
        import librosa
        import torch

        self.token_limit = int(len(text) * 2.5) + 60
        for temperature in TEMPERATURES:
            try:
                with torch.inference_mode():
                    wav = self.model.generate(text, language_id='de', temperature=temperature)
            except IndexError:
                # Chatterbox's end-of-speech check crashes on some very short inputs.
                continue
            samples = wav.squeeze().cpu().numpy()
            samples, _ = librosa.effects.trim(samples, top_db=40)
            words = self.transcribe(librosa.resample(samples, orig_sr=self.model.sr, target_sr=16000))
            end = end_of_text(text, words)
            if end is not None:
                samples = samples[: int((end + 0.15) * self.model.sr)]
                words = [word for word in words if word.end <= end + 0.01]
            heard = ' '.join(word.word for word in words)
            if sounds_right(text, heard, len(samples) / self.model.sr):
                return samples
        return None

    def piper_voice(self, female):
        from piper import PiperVoice

        model = PIPER_FALLBACK[female]
        if model not in self.piper:
            self.piper[model] = PiperVoice.load(os.path.join(BUILD, f'{model}.onnx'))
        return self.piper[model]

    def piper_samples(self, text, female):
        """Piper audio for a sentence, resampled to the Chatterbox rate."""
        import librosa

        voice = self.piper_voice(female)
        with tempfile.NamedTemporaryFile(suffix='.wav') as handle:
            with wave.open(handle.name, 'wb') as wav_file:
                voice.synthesize_wav(text, wav_file)
            samples, _ = librosa.load(handle.name, sr=self.model.sr)
        return samples

    def record(self, voice, text, path, fallbacks):
        self.use_voice(voice)
        parts = []
        for sentence in sentences(text):
            samples = self.chatterbox(sentence)
            if samples is None:
                fallbacks.write(f'{voice}\t{sentence}\n')
                fallbacks.flush()
                samples = self.piper_samples(sentence, voice in FEMALE)
            parts.append(samples)
            parts.append(np.zeros(int(PAUSE_SECONDS * self.model.sr), dtype=np.float32))
        audio = np.concatenate(parts[:-1])
        write_m4a(audio, self.model.sr, path)
        self.free_memory()

    def free_memory(self):
        import torch

        gc.collect()
        if torch.backends.mps.is_available():
            torch.mps.empty_cache()


def write_m4a(samples, rate, path):
    pcm = (np.clip(samples, -1, 1) * 32767).astype(np.int16)
    with tempfile.NamedTemporaryFile(suffix='.wav', delete=False) as handle:
        wav_path = handle.name
    try:
        with wave.open(wav_path, 'wb') as wav_file:
            wav_file.setnchannels(1)
            wav_file.setsampwidth(2)
            wav_file.setframerate(rate)
            wav_file.writeframes(pcm.tobytes())
        subprocess.run(['afconvert', '-f', 'm4af', '-d', 'aac', '-b', '48000', wav_path, path], check=True)
    finally:
        os.remove(wav_path)


def main():
    with open(os.path.join(BUILD, 'requests.json'), encoding='utf-8') as handle:
        requests = json.load(handle)
    os.makedirs(OUTPUT, exist_ok=True)

    missing = [r for r in requests if not os.path.exists(os.path.join(OUTPUT, f"{r['key']}.m4a"))]
    # Keys listed in audio-build/priority.json come first; then grouped by voice, so each reference is prepared once.
    priority = set()
    if os.path.exists(PRIORITY):
        with open(PRIORITY, encoding='utf-8') as handle:
            priority = set(json.load(handle))
    missing.sort(key=lambda request: (request['key'] not in priority, request['voice']))
    print(f'{len(requests)} sentences, {len(missing)} to record', flush=True)
    more_left = len(missing) > CLIPS_PER_RUN
    missing = missing[:CLIPS_PER_RUN]
    if missing:
        recorder = Recorder()
        start = time.time()
        with open(os.path.join(BUILD, 'fallbacks.txt'), 'a', encoding='utf-8') as fallbacks:
            for index, request in enumerate(missing, 1):
                recorder.record(request['voice'], request['text'], os.path.join(OUTPUT, f"{request['key']}.m4a"), fallbacks)
                if index % 25 == 0:
                    print(f'{index}/{len(missing)} this run, {(time.time() - start) / index:.0f} s per clip', flush=True)
    wanted = {r['key'] for r in requests}
    write_manifest(wanted)
    if more_left:
        sys.exit(3)

    for name in os.listdir(OUTPUT):
        if name.endswith('.m4a') and name[:-4] not in wanted:
            os.remove(os.path.join(OUTPUT, name))
    print('done', file=sys.stderr)


def write_manifest(wanted):
    """Lists the wanted clips recorded so far, so the app can play them before the run finishes."""
    recorded = [key for key in wanted if os.path.exists(os.path.join(OUTPUT, f'{key}.m4a'))]
    with open(os.path.join(OUTPUT, 'manifest.json'), 'w', encoding='utf-8') as handle:
        json.dump(sorted(recorded), handle)


if __name__ == '__main__':
    main()
