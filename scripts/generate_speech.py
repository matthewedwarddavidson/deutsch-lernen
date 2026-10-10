"""
Records natural German audio for built-in content with Piper (neural TTS),
then compresses it to AAC with macOS's afconvert.

Setup (once):
  python3 -m venv .venv-tts && .venv-tts/bin/pip install piper-tts
  cd audio-build && for v in de_DE-thorsten-high de_DE-kerstin-low de_DE-thorsten_emotional-medium; do
    ../.venv-tts/bin/python -m piper.download_voices $v; done

Run:
  npx tsx scripts/collect-speech.ts > audio-build/requests.json
  .venv-tts/bin/python scripts/generate_speech.py

Only missing recordings are made, so re-running after content edits is quick.
Recordings no longer requested are deleted, and public/audio/manifest.json
lists the ones that exist.
"""
import json
import os
import subprocess
import sys
import tempfile
import wave

from piper import PiperVoice, SynthesisConfig

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BUILD = os.path.join(ROOT, 'audio-build')
OUTPUT = os.path.join(ROOT, 'public', 'audio')

# All three voices are CC0.
VOICES = {
    'thorsten': ('de_DE-thorsten-high', None),
    'kerstin': ('de_DE-kerstin-low', None),
    'thorsten-emotional': ('de_DE-thorsten_emotional-medium', 4),  # speaker 4 = neutral
}


def load_voices():
    loaded = {}
    for name, (model, speaker) in VOICES.items():
        loaded[name] = (PiperVoice.load(os.path.join(BUILD, f'{model}.onnx')), speaker)
    return loaded


def record(voice, speaker, text, path):
    with tempfile.NamedTemporaryFile(suffix='.wav', delete=False) as handle:
        wav_path = handle.name
    try:
        with wave.open(wav_path, 'wb') as wav_file:
            voice.synthesize_wav(text, wav_file, syn_config=SynthesisConfig(speaker_id=speaker))
        subprocess.run(['afconvert', '-f', 'm4af', '-d', 'aac', '-b', '40000', wav_path, path], check=True)
    finally:
        os.remove(wav_path)


def main():
    with open(os.path.join(BUILD, 'requests.json'), encoding='utf-8') as handle:
        requests = json.load(handle)
    os.makedirs(OUTPUT, exist_ok=True)

    missing = [r for r in requests if not os.path.exists(os.path.join(OUTPUT, f"{r['key']}.m4a"))]
    print(f'{len(requests)} sentences, {len(missing)} to record', flush=True)
    voices = load_voices() if missing else {}
    for index, request in enumerate(missing, 1):
        voice, speaker = voices[request['voice']]
        record(voice, speaker, request['text'], os.path.join(OUTPUT, f"{request['key']}.m4a"))
        if index % 50 == 0:
            print(f'{index}/{len(missing)}', flush=True)

    wanted = {r['key'] for r in requests}
    for name in os.listdir(OUTPUT):
        if name.endswith('.m4a') and name[:-4] not in wanted:
            os.remove(os.path.join(OUTPUT, name))

    with open(os.path.join(OUTPUT, 'manifest.json'), 'w', encoding='utf-8') as handle:
        json.dump(sorted(wanted), handle)
    print('done', file=sys.stderr)


if __name__ == '__main__':
    main()
