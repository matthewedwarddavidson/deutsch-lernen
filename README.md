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
npm run build      # type-check and production build into dist/
npm run format     # Prettier
```

Use Chrome, Edge or Safari for listening. On macOS, install a better German voice under System Settings → Accessibility → Spoken Content → System voice → Manage voices (Anna or Petra, Premium).

## What's in it

| Area | What it does |
| --- | --- |
| **Today** | Reviews due, new words, the next grammar topic, a text to read and listen to, a writing task, and how your week splits across input, output, study and fluency. |
| **Words** | ~580 words across 15 themes, A2–C1, each with article, plural or verb forms, usage and an example. Learn in batches of five: study, then recall from English. Add your own, or import a course word list. |
| **Reviews** | One FSRS queue for everything: recognition (German → English), production (English → German, typed, with article; alternates with gap-fills in context), grammar exercises and your own writing mistakes. |
| **Grammar** | 30 topics from A2 review to C1: explanation, tables, examples, common mistakes, then exercises (gap, choice, word order, transformation). Finished topics feed their exercises into reviews. |
| **Reading** | Graded texts across genres. Tap any word for a gloss or to save it with its sentence. Comprehension questions, read-aloud, and a timed fluency re-read. |
| **Listening** | Dialogues, announcements and interviews read by the browser's German voices, with questions first and the transcript after. Dictation with word-by-word feedback. |
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

## Code map

```
src/
  content/       words (pipe-separated lists), grammar topics, texts, tasks
  lib/           check (answer marking), srs (FSRS), cards (queue), store (state),
                 generation (Claude jobs), manual (claude.ai route), claude (API route)
  components/    shared UI
  pages/         one file per section
docs/research.md
```

Word lists use one line per word:

```
KIND | german | grammar | usage | english | example with {target} | example in English
N | die Wohnung | Wohnungen | | flat | Wir suchen eine größere {Wohnung}. | We're looking for a bigger flat.
```

Content tests check ids, articles, verb forms, gaps, glossaries and answer indexes, so run `npm test` after editing content.
