# Research notes

What the evidence says about learning a language, and how each finding shapes this app. The full review, with effect sizes and sources, is in [research/evidence-review.md](research/evidence-review.md); its source notes are in [research/notes](research/notes). Most of the research is on learners of English, so German-specific choices (gender, plurals, case) rest on general principles.

## 1. Balance four strands

Paul Nation's "four strands": roughly equal time for meaning-focused input (reading, listening), meaning-focused output (writing), language-focused study (words, grammar) and fluency (using known material faster). Flashcards easily crowd out the rest.

**In the app:** the Today page plans all four and shows the week's balance, and how many of the last seven days you studied. It isn't a streak, so a missed day costs nothing. An if-then study plan ("after dinner, at my desk…") sits on Today, because concrete plans make follow-through much more likely (Gollwitzer & Sheeran 2006, d ≈ 0.65).

## 2. Retrieve, and type it

Recalling beats rereading. Typed recall beats silent recall for complex material, and learners overrate how well they know things, so self-grading alone is unreliable (Tauber et al. 2018; Nakata & Suzuki 2019). Recognition and production transfer only partly, so both need practice.

**In the app:**
- Every word has a German→English card (typed meaning, with a self-grade override for synonyms) and an English→German card (typed, with the article and plural).
- The answer checker suggests the grade, and marks article, word and plural separately.
- New words are recalled three times on the day they are learned, switching between translation and filling the gap in their example sentence. The evidence for this is one study (Nakata 2017).

## 3. Space it with FSRS

Spacing has a medium-to-large effect on L2 vocabulary (Kim & Webb 2022). FSRS predicts forgetting better than older schedulers in the open benchmark, though that measures prediction, not learning, and the savings figures come from its developer.

**In the app:**
- All cards use FSRS (`ts-fsrs`) with a target recall you can set (90% by default).
- New words pause while more than 100 reviews are due, so the backlog doesn't grow.
- Training FSRS on your own history needs multithreaded WebAssembly, which GitHub Pages can't serve without breaking Google sign-in, so it isn't done.

## 4. Choose words by frequency, not just theme

The Goethe B1 list has about 2,400 entries. Estimates for C1 range from 3,750 to 6,000 words. Learning near-synonyms or near-pairs together (einziehen/umziehen) increases confusion between them.

**In the app:**
- About 2,100 words from A1 to C1: about 640 at A1 and 560 at A2, close to the Goethe lists. B1 (about 670) is still well short of its list; your course's word lists fill the gap.
- New words come from your target level and the one below first, most common first (ranked by German subtitle frequencies), after your own course words. Lower levels come last, as you probably know them.
- Near-pairs are spread over different days.

## 5. Teach grammar explicitly, then practise output

Explicit instruction beats implicit exposure (Norris & Ortega 2000; Spada & Tomita 2010). Output practice gives more durable productive gains than input alone (Shintani, Li & Ellis 2013). Mixing topics helps most when forms are easily confused; for new vocabulary, blocked practice did better (Brunmair & Richter 2019).

**In the app:**
- Short explanations, then exercises that return through spaced review, mixed with other topics.
- Some items can only be answered by understanding the sentence: who did what in *Den Hund sieht der Mann*, and combining two sentences with a connector.

## 6. Read a lot, at 95–98% known words, with English glosses

Single texts teach few words: about 9–18% of new words per text. Volume and meeting words repeatedly matter most. Glosses roughly double incidental learning; English glosses beat German ones, and guessing before the meaning is shown helps most (Yanagisawa, Webb & Uchihara 2020). Comfortable reading needs about 98% of words known.

**In the app:**
- Glossed phrases ask you to guess the meaning first.
- Every looked-up word can be sent to reviews in one go.
- Each text shows an estimate of the share of words you know.
- Texts can be filtered by topic, since texts on one topic repeat vocabulary.
- From B1, links point to free outside reading, because no app can hold enough text.

## 7. Listening: questions first, transcript after, many voices

Previewing questions helps, and replaying helps stronger listeners more. Captions help most after a first listen. Training with many speakers transfers better than one voice.

**In the app:**
- Questions come before the audio and the transcript after it.
- Five recorded voices: Chatterbox, cloned from public-domain readers and checked with speech recognition.
- Some scripts use real spoken features: *halt*, *eben*, contractions, self-corrections.
- Links point to human audio (Easy German, Slow German, public radio).

## 8. Writing: compare with a model, guided, then rewrite

Written corrective feedback works, with moderate, lasting effects. Lower-level learners do better with direct correction (Brown, Liu & Norouzian 2023; Kang & Han 2015). Comparing your text with a model works, but learners mostly notice vocabulary unless guided towards grammar.

**In the app:**
- Before the model is shown, you note what you couldn't say.
- You then compare using a grammar checklist (verb position, case after prepositions, adjective endings) and log mistakes by kind; each becomes a review card.
- You rewrite from memory, and again two weeks later.
- Progress shows mistakes per 100 words by kind: the accuracy measure that reflects real writing.

## 9. Practise the exam, and check your predictions

Practice tests beat restudying (Adesope et al. 2017). Self-assessment matches real scores only moderately (r ≈ .45), so readiness should come from timed, exam-format scores.

**In the app:**
- Goethe-style B1 Lesen and Hören papers, scored out of 100 against the pass mark of 60.
- Lesen has a 65-minute timer. In Hören, each recording plays only as often as in the exam.
- You predict your score first and see how it compares.
- Timed re-reads of finished texts chart your reading speed.

## What the app avoids

No streaks, hearts, leagues or XP: rewards for simply finishing a session lower intrinsic motivation (Deci et al. 1999). No colour-coded genders (no better than learning the article with the noun), no German-only glosses, and no picture or audio glosses (no gain over text). Speaking is out of scope.
