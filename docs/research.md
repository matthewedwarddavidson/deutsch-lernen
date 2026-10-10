# Research notes

What the evidence says about learning a language, and how each finding shapes this app.

## 1. Balance four strands

Paul Nation's "four strands" model: a good course gives roughly equal time to

1. **Meaning-focused input**: reading and listening to material you mostly understand.
2. **Meaning-focused output**: writing (and speaking) to get a message across.
3. **Language-focused learning**: deliberate study of words and grammar.
4. **Fluency development**: using what you already know, faster, with no new items.

**In the app:** Reading and Listening cover strand 1. Writing covers strand 2. Words and Grammar cover strand 3. Fluency drills (fast reading and listening of familiar material) cover strand 4. The Today page mixes all four rather than letting flashcards take over.

Sources: [Nation, "The four strands"](https://cunningham.acer.edu.au/inted/eaconf95/nation2.pdf), [Paul Nation (Wikipedia)](https://en.wikipedia.org/wiki/Paul_Nation).

## 2. Retrieve, don't reread

Recalling an item from memory strengthens it more than looking at it again (the testing effect). Productive recall (L1 → German, typed) builds active vocabulary better than recognition, but is harder, so it should come after recognition. Typing the word helps spelling, and typos close to correct still count for something.

**In the app:** every word becomes two cards: recognition (German → English) and production (English → German, typed, with the article). Production is often a gap in a real sentence, so the word is recalled in context, inflected.

Sources: [Receptive vs productive testing](https://doaj.org/article/a2d22ede589945d2987d226b178e3840), [Word writing and vocabulary learning](https://uwe-repository.worktribe.com/OutputFile/869189).

## 3. Space it with FSRS

Spaced repetition beats massed study. FSRS (Free Spaced Repetition Scheduler) models stability and retrievability per card and needs 20–30% fewer reviews than the older SM-2 algorithm for the same retention. It also avoids SM-2's "low interval hell" after repeated failures.

**In the app:** all cards (words and grammar items) are scheduled with FSRS via `ts-fsrs`, aiming for 90% retention.

Sources: [Anki FAQ: FSRS](https://docs.ankiweb.net/faqs/what-spaced-repetition-algorithm), [SM-2 vs FSRS](https://l-m-sherlock.notion.site/What-are-the-main-differences-between-SM-2-and-FSRS-135c250163a180ca9029ea460136254c).

## 4. Teach grammar explicitly, then practise it

Norris and Ortega's meta-analysis (2000) found explicit grammar instruction more effective than implicit exposure, with durable effects. Instruction beats exposure alone. Adults benefit from being told the rule.

**In the app:** each grammar topic starts with a short explanation, tables and contrasting examples, then common mistakes, then practice.

Sources: [COERLL: elements of grammar instruction](https://coerll.utexas.edu/methods/modules/grammar/02), [Norris & Ortega summary](https://journals.library.columbia.edu/index.php/SALT/article/download/1533/583/3835).

## 5. Interleave grammar practice

Nakata and Suzuki (2019) found mixing grammar exercise types (interleaving) gave better long-term retention than blocking them by topic, even though it feels harder. It is most useful for telling similar forms apart (als/wenn, Dativ/Akkusativ).

**In the app:** after a lesson, its exercises enter the spaced-repetition queue and come back mixed with other topics and with vocabulary.

Sources: [Nakata & Suzuki 2019 (seminar summary)](https://sciences-du-langage.univ-tlse2.fr/accueil/manifestations/seminaire-lnpl-interleaving-for-l2-grammar-learning-is-mixing-structures-beneficial-maud-pelissier-altae-urp-3967-universite-paris-cite), [Practice type and schedule (SSLA)](https://www.cambridge.org/core/journals/studies-in-second-language-acquisition/article/dynamic-interplay-between-practice-type-and-practice-schedule-in-a-second-language/C01D682D82EDBD00AF29965FCA57BAF3).

## 6. Read at 95–98% known words

Readers need about 95% of words known to follow a text and 98% for comfortable reading and picking up new words from context (Hu & Nation 2000; Laufer). Glosses on unknown words help both comprehension and incidental learning.

**In the app:** graded texts at A2+/B1 with tap-to-gloss for every word in the text's glossary, and one tap to turn a word into flashcards.

Sources: [Schmitt et al. 2011](https://www.lextutor.ca/cover/papers/schmitt_etal_2011.pdf), [Coverage and comprehension (ERIC)](https://files.eric.ed.gov/fulltext/EJ1317203.pdf).

## 7. Listening: dictation helps perception

Evidence on dictation is mixed, but it does train learners to segment fast speech into words, a known weak point between A2 and B1. It also gives exact, checkable feedback.

**In the app:** dictation at normal and slow speed with word-by-word feedback, plus listening comprehension where the transcript stays hidden until after the questions.

Sources: [Dictation and listening (TESL Canada)](https://teslcanadajournal.ca/index.php/tesl/article/download/938/757/965).

## 8. Written corrective feedback works, especially focused

Meta-analyses find written corrective feedback improves accuracy over time. Direct correction and metalinguistic explanation both work. Focusing on a few error types works better than marking everything.

**In the app:** writing tasks follow the Goethe B1 format (informal email, forum post, formal message) with a model answer and checklist. You compare your text with the model and note your errors; each becomes a review card, so feedback stays focused on the errors you actually make.

Sources: [WCF Bayesian meta-analysis](https://todoele.net/node/271041), [Metalinguistic knowledge and WCF](https://nau.edu/wp-content/uploads/sites/117/Metalinguistic_Knowledge_Corrective_Feedback.pdf).

## Levels: A2 and beyond

All content is tagged with a CEFR level (A2, B1, B2, C1). You set your current level, and new material is introduced from that level, with review of the level below. The first target is B1, so A2/B1 content is densest, but the grammar syllabus continues to B2 and C1 (Konjunktiv I, Partizipialattribute, Nominalstil, Funktionsverbgefüge and so on).

Exam formats shape the writing tasks: Goethe B1 Schreiben has an informal email, a forum post and a short formal message. B2 has an argumentative forum post (about 150 words) and a formal email. Speaking is out of scope.

Your own words, imported from a course or saved from reading, keep the app useful beyond its built-in content.

Source: [Goethe B1 Durchführungsbestimmungen](https://www.goethe.de/resources/files/pdf325/durchfuehrungsbestimmungen_b1-1.pdf).

## What the app avoids

No streaks, hearts, leagues or XP. No tapping word tiles to translate trivial sentences. Progress is measured as words you can produce, grammar you can apply and texts you can understand.
