# Deutsch lernen

**[Open the app →](https://matthewedwarddavidson.github.io/deutsch-lernen/)**

A web app for learning German from A2 upwards: vocabulary, grammar, reading, listening and writing. No speaking, no streaks, no points.

The design follows the research summarised in [docs/research.md](docs/research.md): Nation's four strands, retrieval practice, FSRS spaced repetition, explicit grammar with interleaved practice, graded reading at 95–98% known words, dictation, and focused written corrective feedback.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
```

Other scripts:

```bash
npm test           # unit and content tests (Vitest)
npm run test:e2e   # end-to-end smoke tests (Playwright)
npm run build      # type-check and production build into dist/
npm run format     # Prettier
```

Built-in words, examples, grammar sentences, texts and dialogues come with recordings made by a neural voice (see below). Generated texts and your own words use the browser's voice: Microsoft Edge has free natural German voices (Katja, Conrad); on macOS a Premium voice (Anna, Petra) helps in other browsers.

## What's in it

| Area | What it does |
| --- | --- |
| **Today** | Reviews due, new words, the next grammar topic, a text to read and listen to, a writing task, and how your week splits across input, output, study and fluency. |
| **Words** | ~870 words across 16 themes, A2–C1, each with article, plural or verb forms, usage and an example. Learn in batches of five: study, then recall from English. Add your own, or import a course word list. A timed speed round on known words trains fluency. |
| **Reviews** | One FSRS queue for everything: recognition (German → English), production (English → German, typed, with article; alternates with gap-fills in context), irregular verb forms, grammar exercises and your own writing mistakes. Marking forgives typos but not wrong endings or auxiliaries. |
| **Grammar** | 30 topics from A2 review to C1: explanation, tables, examples, common mistakes, then exercises (gap, choice, word order, transformation). Finished topics feed their exercises into reviews. |
| **Reading** | 16 graded texts across genres. Tap any word for a gloss or to save it with its sentence. Comprehension questions, read-aloud, and a timed fluency re-read. |
| **Listening** | 11 dialogues, announcements, interviews and talks with distinct recorded voices; questions first, transcript after. Dictation with word-by-word feedback. |
| **Writing** | Goethe-style tasks (A2–C1) with useful phrases, live word and connector counts, model answers, and corrections from Claude. |
| **Progress** | Words known by level, recall rate, review forecast, study time, grammar mastery. |

## Privacy

The hosted app is a static site with no server and no accounts. Progress, writing, your own words and any API key are stored only in your browser's localStorage, so nobody else visiting the site can see them. Nothing leaves the browser except what you send to Claude yourself (pasted into claude.ai, or sent to Anthropic's API if you add a key).

Storage is per browser and per address, so the hosted app and a local copy keep separate progress. Use Settings → Download backup / Restore to move between them.

## Claude, at no extra cost

Corrections, new texts, listening scripts, writing tasks and word-list imports use Claude. By default this goes through **claude.ai**, covered by a Pro or Max plan:

1. The app copies a prompt.
2. Paste it into a new chat at claude.ai.
3. Paste Claude's reply back into the app.

Optionally, an API key in Settings makes it one click. API use is billed separately from claude.ai plans.

## Recorded voices

Recordings are made offline with [Piper](https://github.com/rhasspy/piper) using the CC0 voices Thorsten (male) and Kerstin (female), and stored in `public/audio/` as AAC. After changing built-in content, record the new sentences (macOS, needs `afconvert`):

```bash
python3 -m venv .venv-tts && .venv-tts/bin/pip install piper-tts      # once
mkdir -p audio-build && cd audio-build && for v in de_DE-thorsten-high de_DE-kerstin-low de_DE-thorsten_emotional-medium; do
  ../.venv-tts/bin/python -m piper.download_voices $v; done && cd ..   # once
npx tsx scripts/collect-speech.ts > audio-build/requests.json
.venv-tts/bin/python scripts/generate_speech.py
```

Only missing sentences are recorded. Anything without a recording falls back to the browser voice.

## Code map

```
src/
  content/       words (pipe-separated lists), grammar topics, texts, tasks
  lib/           check (answer marking), srs (FSRS), cards (queue), store (state),
                 speech (recordings + browser voices), verbForms,
                 generation (Claude jobs), manual (claude.ai route), claude (API route)
  components/    shared UI
  pages/         one file per section
scripts/         speech collection and recording, screenshots
e2e/             Playwright smoke tests
docs/research.md
```

Word lists use one line per word:

```
KIND | german | grammar | usage | english | example with {target} | example in English
N | die Wohnung | Wohnungen | | flat | Wir suchen eine größere {Wohnung}. | We're looking for a bigger flat.
```

Content tests check ids, articles, verb forms, gaps, glossaries and answer indexes, so run `npm test` after editing content.
