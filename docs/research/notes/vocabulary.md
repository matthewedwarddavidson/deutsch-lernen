# Vocabulary learning for adult L2 self-study: evidence for a German app (A2 → B1 → C1)

Notes on sources. "Verified" means I read the primary text or the authors' own abstract. "Secondary" means the figure comes from another paper or a search summary citing it, and should be checked before it is quoted as fact. Single-study claims are marked **[single study]**.

## 1. Spaced repetition and retrieval practice: meta-analyses, and FSRS vs SM-2

### Takeaway
Spacing is the best-supported factor in L2 vocabulary learning. Kim & Webb's (2022) L2 meta-analysis reports medium-to-large effects, larger on delayed tests (g ≈ 0.80) than on immediate tests (g ≈ 0.58). The best gap between reviews grows with how long you need to remember: about 20% of the retention interval for a few weeks, falling to about 5–10% for a year (Cepeda et al. 2008). FSRS predicts recall much better than older schedulers in a benchmark of 10,000 Anki users. That benchmark measures prediction accuracy, not learning gains, and its SM-2 comparisons come from the FSRS developers.

### Cited Findings
**Spacing: meta-analytic and review evidence**
- Kim & Webb (2022), *Language Learning* 72(1), 269–319: a meta-analysis of 37 experimental L2 studies. It confirms that spacing helps in general, with effects that differ by L2 area, learner type and practice activity. Some moderator analyses are inconclusive because they rest on few studies. — [Serrano 2022, SSLLT state-of-the-art review (verified text)](https://diposit.ub.edu/server/api/core/bitstreams/911f8da8-9666-4917-9411-c9ae6754cd7b/content)
- Kim & Webb (2022) overall effect: g = 0.58 on immediate posttests and g = 0.80 on delayed posttests (secondary citation; that paper calls the 37 studies "vocabulary studies", but Kim & Webb also covered grammar). — [Abdurahmonov & Kim 2026, *Modern English Education* (verified text)](https://journal.kci.go.kr/meeso/archive/articlePdf?artiId=ART003314179)
- Search summaries attributed further numbers to Kim & Webb that I could not check against the paper (paywalled): 98 effect sizes from 48 experiments (n = 3,411); immediate feedback g = 1.04 [0.59, 1.49]; longer vs shorter spacing g = 0.34 [0.04, 0.64] for vocabulary and 0.56 for grammar; longer spacing in test–restudy trials g = 1.27 [0.75, 1.78] for vocabulary; larger effects for intermediate than for elementary or advanced learners. **Treat as unverified.** — [ResearchGate record of Kim & Webb 2022](https://www.researchgate.net/publication/358406370_The_Effects_of_Spaced_Practice_on_Second_Language_Learning_A_Meta-Analysis)
- Cepeda et al. (2006) meta-analysis of verbal-recall studies (described as 254 studies): spaced practice beat massed practice across ages and materials. — [Abdurahmonov & Kim 2026 (secondary)](https://journal.kci.go.kr/meeso/archive/articlePdf?artiId=ART003314179)
- Cepeda et al. (2008), *Psychological Science* 19(11): over 1,350 participants, review gaps up to 3.5 months, final tests up to 1 year later. The best gap was about 20–40% of a 1-week test delay and about 5–10% of a 1-year delay. A gap that is too short hurts more than one that is too long. — [PubMed 19076480](https://pubmed.ncbi.nlm.nih.gov/19076480/); [PDF](https://www.evullab.org/pdf/CepedaVulRohrerWixtedPashler-PS-2008.pdf)
- The lag effect (longer gaps beat shorter ones) is less consistent than the basic spacing effect, and classroom studies across multiple sessions often fail to show it. Küpper-Tetzel et al. (2014a), German–English word pairs: a 1-day lag was best at 7 days, but by 5 weeks the 1-day and 10-day lags no longer differed (both beat massed). Rogers & Cheung: a 1-day lag beat an 8-day lag in one study, but the replication found no difference. — [Serrano 2022](https://diposit.ub.edu/server/api/core/bitstreams/911f8da8-9666-4917-9411-c9ae6754cd7b/content)
- Expanding vs equal intervals: Nakata (2015) found expanding intervals better within a single session. Studies across several sessions conflict: Küpper-Tetzel 2014b found equal or expanding better at 35 days; Schuetze & Weimer-Stuckmann 2011 found equal intervals better for retention; Schuetze 2015 found no difference. — [Serrano 2022](https://diposit.ub.edu/server/api/core/bitstreams/911f8da8-9666-4917-9411-c9ae6754cd7b/content)
- Spacing helps explicit form–meaning knowledge (recall and recognition tests) but showed no advantage for tacit knowledge measured by semantic priming (Nakata & Elgort 2021) **[single study]**. — [Abdurahmonov & Kim 2026](https://journal.kci.go.kr/meeso/archive/articlePdf?artiId=ART003314179)
- Spacing in an L2 word-pair study: 1 week after learning, spaced items were recalled 1.6 times as often as massed items (26.62% vs 16.87%). — [Nakata & Suzuki 2019, SSLA 41 (verified, open access)](https://www.cambridge.org/core/journals/studies-in-second-language-acquisition/article/effects-of-massing-and-spacing-on-the-learning-of-semantically-related-and-unrelated-words/F58BA8D70385603B9C42E408BFCB8A10)

**Retrieval practice in L2**
- Number of retrievals: 98 learners, 16 word pairs, retrieved 1, 3, 5 or 7 times in one session. Five and seven retrievals beat one and three on all three posttests. Five and seven did not differ, and neither did one and three (Nakata 2017, SSLA) **[single study]**. — [Cambridge](https://resolve.cambridge.org/core/journals/studies-in-second-language-acquisition/article/does-repeated-practice-make-perfect-the-effects-of-withinsession-repeated-retrieval-on-second-language-vocabulary-learning/F14BA8A576CD2563D14CEA46E35D842E)
- Cumulative testing (each quiz includes old as well as new items) beat non-cumulative testing: d = 1.10, 95% CrI [0.63, 1.57] (Maie 2025, TESOL Quarterly) **[single study]**. — [Wiley](https://onlinelibrary.wiley.com/doi/full/10.1002/tesq.3391)
- I found no L2-specific meta-analysis of retrieval practice that I could read in full. See Gaps.

**FSRS vs other schedulers (open-spaced-repetition srs-benchmark)**
- Dataset: 10,000 Anki users and about 727 million reviews (anki-revlogs-10k). Evaluated on 349.9 million reviews when same-day reviews are excluded. Metrics: log loss (calibration), RMSE(bins), and AUC (how well it separates recalled from forgotten). — [srs-benchmark README](https://github.com/open-spaced-repetition/srs-benchmark)
- Results without same-day reviews (log loss ↓ / RMSE(bins) ↓ / AUC ↑):

  | Scheduler | Log loss | RMSE(bins) | AUC |
  |---|---|---|---|
  | FSRS-7 recency | 0.337 | 0.059 | 0.722 |
  | FSRS-6 | 0.346 | 0.065 | 0.703 |
  | FSRS-5 | 0.356 | 0.074 | 0.701 |
  | FSRS-4.5 | 0.363 | 0.076 | 0.689 |
  | DASH | 0.368 | 0.084 | 0.631 |
  | ACT-R | 0.403 | 0.107 | 0.523 |
  | HLR (Duolingo) | 0.469 | 0.128 | 0.637 |
  | Ebisu v2 | 0.499 | 0.163 | 0.605 |

  Baselines: AVG (always predicts the user's mean retention) scores 0.395 / 0.103 / 0.500. MOVING-AVG scores 0.337 / 0.059 / 0.700. GRU and LSTM neural networks score about 0.333 log loss. RWKV, a large neural model trained across users, scores 0.277. — [srs-benchmark README](https://github.com/open-spaced-repetition/srs-benchmark)
- The current README table has no SM-2 row. The repo says SuperMemo comparisons live in separate repos (fsrs-vs-sm15, fsrs-vs-sm17). — [srs-benchmark](https://github.com/open-spaced-repetition/srs-benchmark)
- The FSRS developer (L-M-Sherlock) reports that FSRS-5 beats trainable SM-2 for 97.4% of users, and needs 30–50% fewer reviews than SM-2 for 90% retention. These figures come from the algorithm's author, not an independent source. — [What are the main differences between SM-2 and FSRS (Notion)](https://l-m-sherlock.notion.site/What-are-the-main-differences-between-SM-2-and-FSRS-135c250163a180ca9029ea460136254c)
- FSRS-6 adds a per-user parameter for how flat the forgetting curve is. FSRS-7 supports intervals of less than a day. Scheduling penalties trade a little predictive accuracy for more sensible intervals at very high or very low target retention. — [srs-benchmark README](https://github.com/open-spaced-repetition/srs-benchmark)

### Inferences
- Use a modern, trainable scheduler (FSRS-6 or later, via the open-source `fsrs` libraries) rather than fixed SM-2 intervals. The gain is in review efficiency (fewer reviews for the same retention). The benchmark does not show that FSRS teaches words better.
- The benchmark's grades come from self-graded Anki reviews. If the app uses typed answers, its grade data will be cleaner, but FSRS's default parameters were fitted on self-grades. Retrain parameters on the user's own logs once a few thousand reviews exist.
- A MOVING-AVG baseline nearly matches FSRS-6 on log loss. Much of the remaining predictive gain is small in absolute terms. Do not over-engineer the scheduler; content and retrieval format probably matter more.
- With a goal of C1 over years, retention intervals are long. Cepeda's ridgeline suggests gaps should keep growing; FSRS does this automatically.
- Within the first session, have each new word retrieved successfully several times (Nakata 2017 suggests about 5). Then hand it to the scheduler.

### Gaps
- I could not read Kim & Webb (2022) in full (paywalled). Moderator effect sizes need checking against the paper.
- No current, independent head-to-head of FSRS vs SM-2 on learning outcomes (as opposed to prediction accuracy). No randomised trial showing FSRS users learn more.
- No verified L2-specific retrieval-practice meta-analysis. General testing-effect meta-analyses (e.g. Rowland 2014; Adesope et al. 2017) were not fetched in this session.

## 2. Recognition (L2→L1) vs production (L1→L2) retrieval

### Takeaway
Direction matters, and each direction transfers only partly to the other. Productive (L1→L2) retrieval is harder but tends to give larger and longer-lasting gains, especially for learners past beginner level. Recent evidence suggests the better direction depends on proficiency. At A2/B1 the learner should practise both, with productive retrieval growing as words stabilise.

### Cited Findings
- Terai, Yamashita & Pasich (2021, SSLA): for lower-proficiency learners, L2→L1 retrieval was more effective; for higher-proficiency learners, L1→L2 was more effective. Small sample (n = 28 Japanese EFL learners) **[single study]**. — [Cambridge abstract](https://www.cambridge.org/core/journals/studies-in-second-language-acquisition/article/abs/effects-of-learning-direction-in-retrieval-practice-on-efl-vocabulary-learning/159EE50F4B8835207764FB1B11077F29)
- Schneider, Healy & Bourne (2002): L2→L1 learning is better in the short term, but L1→L2 learning is better in the longer term (secondary, from a search summary of the direction literature). — [ResearchGate: Effects of learning direction in retrieval practice](https://www.researchgate.net/publication/353247937_Effects_of_Learning_Direction_in_Retrieval_Practice_on_EFL_Vocabulary_Learning_Journal_Studies_in_Second_Language_Acquisition)
- Productive retrieval beat receptive retrieval on immediate and delayed productive tests (effect size 1.38), and improved both receptive and productive knowledge compared with control and receptive conditions **[single study; author and design not verified]**. — [Academia: The effects of receptive and productive word retrieval practice on L2 vocabulary learning](https://www.academia.edu/26098629/The_Effects_of_Receptive_and_Productive_Word_Retrieval_Practice_on_Second_Language_Vocabulary_Learning)
- Webb (2009), "The effects of receptive and productive learning of word pairs on vocabulary knowledge": the search summary says each learning direction mainly built knowledge of the same type, with limited transfer. The full text was not read, so the strength of the transfer claim is unverified. — [ResearchGate](https://www.researchgate.net/publication/249769008_The_Effects_of_Receptive_and_Productive_Learning_of_Word_Pairs_on_Vocabulary_Knowledge)

### Inferences
- Use two cards per word, one in each direction, scheduled independently. Do not assume that knowing a word one way means knowing it the other way.
- At A2, introduce new words with recognition (L2→L1) first. Add the production card once recognition is stable, or after a short delay. For B1+ words, production should carry more weight.
- Because the learner does no speaking practice, typed L1→L2 production is the app's main route to productive knowledge. That raises its priority.

### Gaps
- No meta-analysis on learning direction was found. Evidence rests on a few studies with small samples, mostly Japanese EFL learners.
- I found no study of direction effects specifically for German learners, or covering gender and plural as part of the production target.

## 3. Typing answers vs self-grading (covert retrieval); metacognitive accuracy

### Takeaway
For simple word pairs, covert retrieval ("think, then reveal") can match overt retrieval. For more complex targets, overt retrieval wins (pooled d = 0.43 in Tauber et al. 2018). Learners' self-judgements are unreliable: they overrate massed, easy practice and can mistake familiarity for recall. Typed answers give objective grading and better calibration.

### Cited Findings
- Smith, Roediger & Karpicke (2013), *JEP:LMC*: "Covert retrieval practice benefits retention as much as overt retrieval practice". For word pairs, final recall was similar after covert and overt practice, and both beat restudy. — [PDF](http://psychnet.wustl.edu/memory/wp-content/uploads/2018/04/Smith-et-al-2013_JEPLMC.pdf)
- Tauber et al. (2018), *JARMAC* 7(1), 106–115, key-term definitions: final recall was higher after overt than after covert retrieval or restudy. A continuously cumulating meta-analysis across their experiments gave pooled d = 0.43. Proposed mechanism: in covert retrieval, learners stop early on items that merely feel familiar. — [PDF](https://www.adamlputnam.com/uploads/8/3/5/6/83563830/tauber_et_al._2017.pdf); [Matuschak notes](https://notes.andymatuschak.org/zNZma1KB7n87sB2tWGz8kDU)
- Lindsey (2014, PhD thesis, Swahili word pairs): no clear advantage for overt or covert retrieval, at intervals of up to one week. — [Matuschak notes](https://notes.andymatuschak.org/zNZma1KB7n87sB2tWGz8kDU)
- Flashcards alone vs with a partner: similar learning. Students working alone gave overall judgements of learning about 20% higher than their actual immediate test scores. The paired condition, which forces overt answers, was better calibrated. — [Metacognition and Learning 2024](https://link.springer.com/article/10.1007/s11409-024-09406-w)
- L2 word pairs (Nakata & Suzuki 2019): after spaced practice, learners recalled significantly more 1 week later than after massed practice. Yet both groups predicted similar retention (massed 31.70%, spaced 28.63%). The massed group significantly overestimated retention. During learning, spaced practice had lower accuracy (37.78%) than massed practice (70.32%), so learners misread its value. — [Nakata & Suzuki 2019](https://www.cambridge.org/core/journals/studies-in-second-language-acquisition/article/effects-of-massing-and-spacing-on-the-learning-of-semantically-related-and-unrelated-words/F58BA8D70385603B9C42E408BFCB8A10)

### Inferences
- Make typed recall the default for production cards (L1→German). It checks the details covert recall lets learners skip in German: article, plural, umlauts, spelling, and the separable prefix. Use a lenient checker, for example accepting "ss" for "ß", and flagging a wrong article separately from a wrong noun.
- Covert flip-cards are acceptable for recognition (German→English) on simple pairs, where the evidence shows parity, and they are quicker.
- Do not rely on the learner's self-rating for the scheduler grade on production cards; derive it from correctness and response time. Show calibration feedback (e.g. "you rated 'Good' but typed it wrong 30% of the time").
- Tell the learner that spaced practice feels worse while it is working (the desirable-difficulty framing in Nakata & Suzuki), to reduce drop-off.

### Gaps
- No L2-specific study found that compares typed and covert retrieval for vocabulary with delayed tests.
- No data on how accurately Anki users' self-grades reflect knowledge. The benchmark treats grades as ground truth.

## 4. Words in context: cloze/sentences vs isolated words; collocations

### Takeaway
Decontextualised word-pair learning is as good as, or better than, single-sentence context for form–meaning learning. Context adds knowledge of how words are used (grammatical behaviour, associations). The two are complementary. Incidental learning from reading alone is slow.

### Cited Findings
- Webb (2007), *Language Teaching Research* 11(1), 63–81: a single glossed sentence had little effect compared with word pairs, with no significant differences across several knowledge aspects (grammatical function, syntagmatic and paradigmatic association, orthography, meaning and form). — [SAGE](https://journals.sagepub.com/doi/10.1177/1362168806072463)
- Research summaries conclude that context gives little extra help for form–meaning learning, and that decontextualised tasks are equally or more effective. Explicit tests favour word-focused instruction, while context helps meaning-related knowledge; the two work together. — [Semantic Scholar: Webb 2007](https://www.semanticscholar.org/paper/Learning-word-pairs-and-glossed-sentences:-the-of-a-Webb/4fc37801a1417de587ac685374b135e796dd1695); [SSLA: contextualised input and word-focused instruction](https://www.cambridge.org/core/journals/studies-in-second-language-acquisition/article/abs/combining-explicit-and-sensitive-indices-for-measuring-l2-vocabulary-learning-through-contextualized-input-and-wordfocused-instruction/6A39C54FA3C9BDF77D5CF2647C30EB0A)
- A meta-analysis of incidental L2 vocabulary learning exists (Uchihara et al., *Language Teaching*, 2023). Its effect sizes were not extracted in this session. — [Cambridge](https://www.cambridge.org/core/journals/language-teaching/article/how-effective-is-second-language-incidental-vocabulary-learning-a-metaanalysis/E38E3468FD2090B1FA3051051DE8E70C)
- Spacing may affect fill-in-the-blanks and flashcards differently (title of a recent study; not read). — [ResearchGate](https://www.researchgate.net/publication/376584142_Does_spaced_practice_have_the_same_effects_on_different_second_language_vocabulary_learning_activities_Fill-in-the-blanks_versus_flashcards)

### Inferences
- Core card: a decontextualised form–meaning pair, for speed and efficiency. Show an example sentence on the answer side.
- Add sentence cloze cards once a word is known, so the learner practises how German words behave: verb plus preposition (*warten auf* + accusative), separable-verb word order, and case after prepositions. These are things isolated cards do not teach.
- Treat common fixed phrases (*Bescheid sagen*, *eine Rolle spielen*) as their own items rather than splitting them into words.

### Gaps
- No verified meta-analytic effect size for cloze vs isolated retrieval.
- Collocation and multi-word-unit learning evidence (e.g. Boers, Webb) was not fetched in this session.

## 5. Vocabulary size targets per CEFR level; text coverage

### Takeaway
Rough receptive targets: A2 ≈ 1,000–2,500 words; B1 ≈ 2,000–3,250; B2 ≈ 3,250–4,000; C1 ≈ 3,750–6,000, depending on source and unit counted. Goethe lists cover about 650 (A1), 1,300 (A2) and 2,400 (B1) items for production. Reading authentic text comfortably (98% coverage) needs about 8,000–9,000 English word families. German probably needs more lemmas for the same coverage because of compounding and inflection.

### Cited Findings
- Milton (2009) / Milton & Alexiou (2020), EFL vocabulary sizes on the X_Lex test (out of the 5,000 most frequent lemmas): A1 < 1,500; A2 1,500–2,500; B1 2,500–3,250; B2 3,250–3,750; C1 3,750–4,500; C2 4,500–5,000. — [Nation, "Vocabulary, the CEFR levels, and word family size"](https://wgtn.ac.nz/lals/resources/paul-nations-resources/vocabulary-lists/vocabulary-cefr-and-word-family-size/vocabulary-and-the-cefr-docx)
- Nation's own allocation: A2 = the first 1,000 word families; B1 = the 2,000–3,000 most frequent words; B2 ≈ 4,000; C1 ≈ 5,000–6,000; C2 ≈ 7,000–9,000. He notes that his B2–C2 numbers are higher than Milton's. Laufer (2020) suggests B1 involves about 4,000 words. — [Nation](https://wgtn.ac.nz/lals/resources/paul-nations-resources/vocabulary-lists/vocabulary-cefr-and-word-family-size/vocabulary-and-the-cefr-docx)
- Milton & Alexiou (2009) for Greek as a foreign language: test estimates fit size estimates at CEFR levels in other languages. Elementary learners know fewer than 3,000 of the 5,000 most frequent words, intermediate learners 3,000–4,000, advanced over 4,000. — [Milton & Alexiou, GALA paper](https://www.enl.auth.gr/gala/14th/Papers/English%20papers/Milton&Alexiou.pdf)
- Goethe-Zertifikat word lists: A1 about 650 words, A2 about 1,300 lexical units, B1 about 2,400 (some sources say 2,400–3,000 cumulative). These counts are from secondary summaries; the official B1 PDF exists but was not counted. — [Goethe B1 Wortliste PDF](https://www.goethe.de/pro/relaunch/prf/da/Goethe-Zertifikat_B1_Wortliste.pdf); [Goethe A1 Wortliste PDF](https://www.goethe.de/pro/relaunch/prf/sw/Goethe-Zertifikat_A1_Fit1_Wortliste.pdf)
- German frequency data: Jones & Tschirner, *A Frequency Dictionary of German* (4.2 million-word corpus: one-third spoken, one-third fiction, one-third non-fiction). The 10 most frequent words cover about 27% of tokens and the top 20 about 35%. The 4,034 headwords cover about 80–90% of the corpus depending on register (Jones 2005). — [Dictionary introduction (PDF)](https://esakademi.com/wp-content/uploads/2020/05/RANDAL1.pdf); [Routledge, 2nd edn (Tschirner & Möhring)](https://www.routledge.com/A-Frequency-Dictionary-of-German-Core-Vocabulary-for-Learners/Tschirner-Mohring/p/book/9781138659780)
- Coverage and comprehension: Schmitt, Jiang & Grabe (2011) found a linear relationship between coverage and comprehension from 90% to 100% coverage. Reaching 60% comprehension needs about 98% coverage. — [Schmitt et al. 2011 PDF](https://www.lextutor.ca/cover/papers/schmitt_etal_2011.pdf)
- Laufer & Ravenhorst-Kalovski (2010): 95% coverage ("reading with support") ≈ 4,000–5,000 word families; 98% ("independent reading") ≈ 6,000–8,000. Current consensus: 98% is optimal and 95% is the minimum. For authentic text, 98% needs about 8,000–9,000 families (Nation 2006) and 95% about 5,000. — [JALT *The Language Teacher* 37.4](https://jalt-publications.org/sites/default/files/pdf-article/37.4tlt_art1.pdf); [replication in *Language Teaching*](https://www.cambridge.org/core/journals/language-teaching/article/how-much-vocabulary-is-needed-to-use-english-replication-of-van-zeeland-schmitt-2012-nation-2006-and-cobb-2007/1D217A56A2E0056E67802A6A8360FDDE)

### Inferences
- A2 → B1: fill the Goethe B1 list (about 2,400 items). Most A2 vocabulary should already be known; the gap is about 1,100 new items.
- B1 → C1: aim for about 4,000–6,000 lemmas or families receptively. Use German frequency ranks (Jones/Tschirner 4,034, then a large frequency list such as DeReWo) to choose words beyond the Goethe B1 list.
- English word-family counts do not convert one-to-one to German lemmas. Compounds (*Krankenhaus*) and derivations inflate lemma counts. Teaching word-formation (prefixes, *-ung*, *-heit*, *-keit*, *-lich*, compounding) increases effective size cheaply.
- Since the 4,034 most frequent German words reach only 80–90% coverage, the app alone will not reach 98%. Extensive reading or listening is needed to go from B2 to C1.

### Gaps
- No German-specific study linking lemma counts to CEFR levels was found. Milton's data are mostly from EFL and Greek.
- DeReWo (IDS Mannheim) coverage figures were not retrieved.
- No German-specific coverage-to-comprehension study was found.

## 6. Frequency-based vs thematic lists; semantic clustering

### Takeaway
Frequency should drive word selection. Teaching close semantic sets together (colours, body parts, synonyms, antonyms) does not lower overall recall on average. It does cause more confusion errors between related words, and spacing helps unrelated sets more than related ones. Loose thematic grouping (a story or situation) is a safer way to group words than a semantic category.

### Cited Findings
- Nakata & Suzuki (2019), SSLA: 133 learners, 48 word pairs, massed vs spaced. Related and unrelated items did not differ significantly in posttest scores. Related items produced more within-set interference errors (e.g. *teacher* for *student*). Contrary to the authors' hypothesis, spacing helped unrelated items more than related ones. Their meta-analysis of earlier studies (online Appendix A) also found no overall difference. The authors still recommend avoiding semantic clustering because of the confusion errors. — [Nakata & Suzuki 2019](https://www.cambridge.org/core/journals/studies-in-second-language-acquisition/article/effects-of-massing-and-spacing-on-the-learning-of-semantically-related-and-unrelated-words/F58BA8D70385603B9C42E408BFCB8A10)
- Prior literature (13 studies): 6 found harm (Erten & Tekin 2008; Finkbeiner & Nicol 2003; Tinkham 1993, 1997; Waring 1997; Wilcox & Medina 2013); 2 found harm only under certain conditions (Higa 1963; Papathanasiou 2009); 1 found no effect (Ishii 2015); 4 found benefits (e.g. Hashemi & Gowdasiaei 2005; Hoshino 2010). — [Nakata & Suzuki 2019](https://www.cambridge.org/core/journals/studies-in-second-language-acquisition/article/effects-of-massing-and-spacing-on-the-learning-of-semantically-related-and-unrelated-words/F58BA8D70385603B9C42E408BFCB8A10)
- Frequency is the rationale of the Routledge frequency dictionaries: learn first the words you will meet most often. Textbooks distort real frequencies. — [Frequency Dictionary of German introduction](https://esakademi.com/wp-content/uploads/2020/05/RANDAL1.pdf)

### Inferences
- Choose words by frequency (within the Goethe list, ordered by corpus rank). Do not introduce a whole semantic field in one session.
- Spread near-synonyms, antonyms and co-hyponyms across days: *rechts/links*, *leihen/borgen/ausleihen*, *Montag–Sonntag*, *legen/liegen/stellen/stehen*. Watch for confusions between them (e.g. log which wrong answer was typed) and add contrast cards for pairs the learner actually confuses.
- Thematic grouping (words from one text or situation) is acceptable.

### Gaps
- The effect size in Nakata & Suzuki's appendix meta-analysis was not extracted.
- No German-specific clustering study was found.

## 7. German-specific learning burden: gender, plurals, separable verbs, irregular forms

### Takeaway
Gender is one of the biggest burdens for adult learners of German. The best-designed study found that colour coding did not beat learning the article with the noun. Images that encode both meaning and gender did best, though that is a single study. No intervention evidence was found for plurals, separable verbs or strong verbs. Design decisions there rest on general principles: learn the form as a unit, and retrieve it overtly.

### Cited Findings
- Language Teaching Research (2015), "Can colors, voices, and images help learners acquire the grammatical gender of German nouns?", n = 283, described as one of the largest studies of its kind. The colour condition did not beat the control condition (article given with the noun). Images that encoded both meaning and gender gave the best results on two posttests, without significantly hurting recall of meaning **[single study]**. — [ERIC EJ1065542](https://eric.ed.gov/?id=EJ1065542); [ResearchGate](https://www.researchgate.net/publication/280206673_Can_colors_voices_and_images_help_learners_acquire_the_grammatical_gender_of_German_nouns)
- Arzt (2016), *Die Unterrichtspraxis/Teaching German*: colour coding and gendered actors in a vocabulary activity for beginning learners showed no significant differences between conditions on an immediate posttest **[single study]**. — [Wiley](https://onlinelibrary.wiley.com/doi/abs/10.1111/tger.10207)
- Learning nouns' gender, the matching articles and their inflected forms is described as one of the biggest challenges for adult learners of German. — [ResearchGate (2015 study)](https://www.researchgate.net/publication/280206673_Can_colors_voices_and_images_help_learners_acquire_the_grammatical_gender_of_German_nouns)
- Experimental evidence on lexical constraints in L2 German gender exists (PMC4554762); it was not read in detail. — [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC4554762/)

### Inferences
- Always store and test nouns as article + noun + plural (*die Stadt, Städte*). Grade the article and the plural separately, so the scheduler knows which part failed.
- Colour coding is cheap and harmless as a visual cue, but do not expect it to do the work. Do not make colour a substitute for retrieving the article.
- Add optional gender-cue hints such as *-ung/-heit/-keit* → *die* and *-chen* → *das*. These rules are linguistic facts; I found no intervention evidence for teaching them.
- Separable verbs: show and test the infinitive and a sentence with the separated prefix (*anrufen → Ich rufe dich an*). Strong verbs: test the principal parts (*fahren – fährt – fuhr – ist gefahren*) as separate, later-introduced cards, so new learners are not overloaded.

### Gaps
- No studies found on teaching German plurals, separable verbs or strong-verb forms in vocabulary apps.
- Gender evidence rests on two studies that differ in size and design. No meta-analysis exists.

## 8. Daily new-word load and session length

### Takeaway
No direct experimental evidence was found on the best number of new words per day for self-study adults. Indirect evidence: words need several successful retrievals when first met (about 5), and spacing beats massing. Review load builds up, so the new-word rate should be capped by the size of the review queue rather than fixed.

### Cited Findings
- Five or more retrievals per word in the first session beat one to three (Nakata 2017) **[single study]**. — [Cambridge](https://resolve.cambridge.org/core/journals/studies-in-second-language-acquisition/article/does-repeated-practice-make-perfect-the-effects-of-withinsession-repeated-retrieval-on-second-language-vocabulary-learning/F14BA8A576CD2563D14CEA46E35D842E)
- Learners misjudge which schedules work. Massed, high-accuracy sessions feel more productive than they are. — [Nakata & Suzuki 2019](https://www.cambridge.org/core/journals/studies-in-second-language-acquisition/article/effects-of-massing-and-spacing-on-the-learning-of-semantically-related-and-unrelated-words/F58BA8D70385603B9C42E408BFCB8A10)
- Under FSRS, the target retention setting trades review load against retention. The scheduler includes penalties for extreme targets (97–99%, or very low). — [srs-benchmark README](https://github.com/open-spaced-repetition/srs-benchmark)

### Inferences
- Arithmetic, not evidence: about 1,100 new items to B1 at 10–15 per day is 3–4 months. Reaching about 5,000 lemmas for C1 at 10 per day is about 1.4 years of daily study, before allowing for words learned by reading.
- Set new items per day from the review queue: pause new words when due reviews pass a threshold. Default to about 85–90% target retention. Raising it sharply increases workload.
- Keep sessions short and daily rather than long and occasional. That is what the spacing evidence favours.

### Gaps
- No peer-reviewed study was found on the best number of new words per day, or on session length and burnout, in self-study apps.
- Anki's default of 20 new cards a day and the usual rule that daily reviews end up about ten times the new cards were not verified from Anki documentation in this session.
