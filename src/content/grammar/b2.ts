import type { GrammarTopic } from '../types'

export const konjunktiv1: GrammarTopic = {
  id: 'konjunktiv-i',
  title: 'Konjunktiv I',
  english: 'Reported speech in news and formal writing',
  level: 'B2',
  summary:
    'News reports and formal texts use **Konjunktiv I** to report what someone said without vouching for it: *Der Minister sagte, er **sei** zufrieden.* In practice you mostly need the **er/sie/es** forms. Where Konjunktiv I looks the same as the indicative, use Konjunktiv II instead.',
  sections: [
    {
      heading: 'Forms',
      body: [
        'Stem + **-e**: er komm**e**, er hab**e**, er könn**e**, er werd**e**. **sein** is irregular: ich sei, du sei(e)st, er **sei**, wir seien, sie **seien**.',
        'For ich, wir, sie the Konjunktiv I usually equals the indicative (sie haben), so use Konjunktiv II: sie **hätten**, sie **würden** kommen.',
      ],
      table: {
        head: ['Infinitiv', 'er/sie/es (K I)', 'sie (Plural)'],
        rows: [
          ['sein', 'sei', 'seien'],
          ['haben', 'habe', 'hätten (K II)'],
          ['können', 'könne', 'könnten (K II)'],
          ['werden', 'werde', 'würden (K II)'],
          ['kommen', 'komme', 'würden kommen / kämen (K II)'],
        ],
      },
    },
    {
      heading: 'Tenses',
      body: [
        'Present: er **sei** krank. Past: er **sei** krank **gewesen** / er **habe** angerufen. Future: er **werde** kommen.',
      ],
      examples: [
        {
          de: 'Die Sprecherin erklärte, das Unternehmen **habe** keine Fehler **gemacht**.',
          en: 'The spokeswoman stated that the company had made no mistakes.',
        },
        { de: 'Laut Polizei **sei** niemand verletzt worden.', en: 'According to the police, nobody was injured.' },
        {
          de: 'Die Gewerkschaft fordert, die Löhne **müssten** steigen.',
          en: 'The union demands that wages must rise. (K II because K I = müssen)',
        },
      ],
    },
  ],
  mistakes: [
    {
      wrong: 'Er sagte, er ist krank. (in a news report)',
      right: 'Er sagte, er sei krank.',
      why: 'Formal reported speech: Konjunktiv I.',
    },
    {
      wrong: 'Sie sagten, sie haben keine Zeit.',
      right: 'Sie sagten, sie hätten keine Zeit.',
      why: 'Plural K I = indicative, so switch to K II.',
    },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: 'Der Politiker sagte, er ___ mit dem Ergebnis zufrieden. (sein)',
      answers: ['sei'],
      hint: 'K I of sein',
      explanation: 'er sei.',
    },
    {
      kind: 'gap',
      prompt: 'Sie behauptet, sie ___ von nichts gewusst. (haben)',
      answers: ['habe'],
      hint: 'K I past',
      explanation: 'habe gewusst.',
    },
    {
      kind: 'gap',
      prompt: 'Der Trainer erklärte, die Mannschaft ___ das Spiel noch gewinnen. (können)',
      answers: ['könne'],
      hint: 'K I of können',
      explanation: 'er/sie/es könne.',
    },
    {
      kind: 'gap',
      prompt: 'Die Firmen sagen, sie ___ keine Fachkräfte. (finden)',
      answers: ['fänden'],
      hint: 'Plural: K I = indicative, so use K II',
      explanation: 'sie finden (K I) looks like the indicative, so use K II: fänden (in speech: würden … finden).',
    },
    {
      kind: 'gap',
      prompt: 'Laut Bericht ___ der Zug wegen eines Defekts ausgefallen. (sein)',
      answers: ['sei'],
      hint: 'K I past with sein',
      explanation: 'sei ausgefallen.',
    },
    {
      kind: 'gap',
      prompt: 'Die Ministerin kündigte an, sie ___ zurücktreten. (werden)',
      answers: ['werde'],
      hint: 'K I future',
      explanation: 'sie werde zurücktreten.',
    },
    {
      kind: 'choice',
      prompt: 'Der Zeuge gab an, er ___ den Täter genau gesehen.',
      options: ['hat', 'habe', 'hätte', 'sei'],
      answer: 1,
      explanation: 'K I past: habe gesehen.',
    },
    {
      kind: 'transform',
      instruction: 'Report in Konjunktiv I, starting "Er sagte, …".',
      prompt: 'Er sagte: „Ich bin seit Montag krank."',
      answers: ['Er sagte, er sei seit Montag krank.'],
      explanation: 'ich bin → er sei.',
    },
    {
      kind: 'transform',
      instruction: 'Report in Konjunktiv I, starting "Sie erklärte, …".',
      prompt: 'Sie erklärte: „Ich habe die E-Mail nie bekommen."',
      answers: ['Sie erklärte, sie habe die E-Mail nie bekommen.'],
      explanation: 'ich habe … bekommen → sie habe … bekommen.',
    },
  ],
}

export const passivErsatz: GrammarTopic = {
  id: 'passiv-ersatz',
  title: 'Passiversatz',
  english: 'Alternatives to the passive: sein + zu, sich lassen, -bar',
  level: 'B2',
  summary:
    'Formal German often expresses "can be done" or "must be done" without werden. **sein + zu + infinitive** (must / can be done), **sich lassen + infinitive** (can be done), and adjectives in **-bar / -lich** (machbar = doable).',
  sections: [
    {
      heading: 'The alternatives',
      body: [],
      table: {
        head: ['Construction', 'Meaning', 'Example'],
        rows: [
          ['sein + zu + Inf.', 'must / can be done', 'Der Antrag **ist** bis Freitag **einzureichen**.'],
          ['sich lassen + Inf.', 'can be done', 'Das Problem **lässt sich** leicht **lösen**.'],
          ['-bar', 'can be done', 'Das Problem ist **lösbar**.'],
          ['-lich', 'can be done (some verbs)', 'Seine Erklärung ist kaum **verständlich**.'],
        ],
      },
      examples: [
        {
          de: 'Die Rechnung **ist** innerhalb von 14 Tagen **zu bezahlen**.',
          en: 'The invoice must be paid within 14 days.',
        },
        { de: 'Der Fehler **lässt sich** nicht mehr **korrigieren**.', en: 'The mistake can no longer be corrected.' },
        { de: 'Das Wasser ist nicht **trinkbar**.', en: 'The water is not drinkable.' },
      ],
    },
  ],
  mistakes: [
    {
      wrong: 'Das Formular ist auszufüllen werden.',
      right: 'Das Formular ist auszufüllen.',
      why: 'sein + zu replaces the passive; no werden.',
    },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: 'Das Medikament ist kühl ___. (lagern)',
      answers: ['zu lagern'],
      hint: 'sein + zu',
      explanation: 'must be stored: ist kühl zu lagern.',
    },
    {
      kind: 'gap',
      prompt: 'Die Tür ___ sich nur mit einem Code öffnen.',
      answers: ['lässt'],
      hint: 'sich lassen',
      explanation: 'lässt sich öffnen = can be opened.',
    },
    {
      kind: 'gap',
      prompt: 'Diese Aufgabe ist in zwei Stunden mach___.',
      answers: ['bar'],
      hint: 'can be done',
      explanation: 'machbar.',
    },
    {
      kind: 'gap',
      prompt: 'Die Formulare sind vollständig ___. (ausfüllen)',
      answers: ['auszufüllen'],
      hint: 'separable + zu',
      explanation: 'aus|füllen → auszufüllen.',
    },
    {
      kind: 'transform',
      instruction: 'Rewrite with sich lassen.',
      prompt: 'Das Problem kann leicht gelöst werden.',
      answers: ['Das Problem lässt sich leicht lösen.'],
      explanation: 'kann … gelöst werden → lässt sich … lösen.',
    },
    {
      kind: 'transform',
      instruction: 'Rewrite with sein + zu.',
      prompt: 'Die Gebühr muss vor Kursbeginn bezahlt werden.',
      answers: ['Die Gebühr ist vor Kursbeginn zu bezahlen.'],
      explanation: 'muss … bezahlt werden → ist … zu bezahlen.',
    },
    {
      kind: 'transform',
      instruction: 'Rewrite with an adjective ending in -bar.',
      prompt: 'Der Text kann kaum gelesen werden.',
      answers: ['Der Text ist kaum lesbar.'],
      explanation: 'gelesen werden können → lesbar.',
    },
  ],
}

export const partizipialattribute: GrammarTopic = {
  id: 'partizipialattribute',
  title: 'Partizipien als Adjektive',
  english: 'Participles as adjectives: das schlafende Kind, das reparierte Auto',
  level: 'B2',
  summary:
    'Participles can sit before a noun like adjectives, with normal adjective endings. **Partizip I** (infinitive + **d**) is active and simultaneous: *das weinende Kind* (the child who is crying). **Partizip II** is usually passive or completed: *das reparierte Auto* (the car that has been repaired). In written German they compress whole relative clauses.',
  sections: [
    {
      heading: 'Partizip I and II',
      body: [],
      examples: [
        { de: 'das **schlafende** Baby = das Baby, das schläft', en: 'the sleeping baby' },
        { de: 'die **steigenden** Preise = die Preise, die steigen', en: 'the rising prices' },
        { de: 'das **gestohlene** Fahrrad = das Fahrrad, das gestohlen wurde', en: 'the stolen bike' },
        { de: 'die **angekommenen** Gäste = die Gäste, die angekommen sind', en: 'the guests who have arrived' },
      ],
    },
    {
      heading: 'Extended attributes',
      body: ['Newspapers put whole phrases between article and noun. Read them from the noun backwards.'],
      examples: [
        { de: 'die **seit Jahren steigenden** Mieten', en: 'the rents that have been rising for years' },
        { de: 'der **von der Regierung geplante** Ausbau', en: 'the expansion planned by the government' },
      ],
    },
  ],
  mistakes: [
    { wrong: 'das geweinte Kind', right: 'das weinende Kind', why: 'Active and ongoing: Partizip I.' },
    { wrong: 'die steigende Preisen', right: 'die steigenden Preise', why: 'Normal adjective endings apply.' },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: 'Vorsicht vor dem bell___ Hund!',
      answers: ['enden'],
      hint: 'Partizip I + Dativ ending',
      explanation: 'bellend + -en: dem bellenden Hund.',
    },
    {
      kind: 'gap',
      prompt: 'Die ___ Unterlagen liegen auf dem Tisch. (unterschreiben, Partizip II)',
      answers: ['unterschriebenen'],
      hint: 'passive, done',
      explanation: 'unterschrieben + -en.',
    },
    {
      kind: 'gap',
      prompt: 'Wegen der stark ___ Nachfrage ist das Produkt ausverkauft. (steigen, Partizip I)',
      answers: ['steigenden'],
      hint: 'ongoing',
      explanation: 'steigend + -en (Genitiv feminine).',
    },
    {
      kind: 'gap',
      prompt: 'Das gestern ___ Paket ist beschädigt. (liefern, Partizip II)',
      answers: ['gelieferte'],
      hint: 'passive, done',
      explanation: 'geliefert + -e.',
    },
    {
      kind: 'transform',
      instruction: 'Replace the relative clause with a participle.',
      prompt: 'Das Kind, das schläft, darf nicht geweckt werden.',
      answers: ['Das schlafende Kind darf nicht geweckt werden.'],
      explanation: 'das schläft → schlafende.',
    },
    {
      kind: 'transform',
      instruction: 'Replace the relative clause with a participle.',
      prompt: 'Die Wohnung, die renoviert wurde, ist jetzt teurer.',
      answers: ['Die renovierte Wohnung ist jetzt teurer.'],
      explanation: 'die renoviert wurde → renovierte.',
    },
    {
      kind: 'transform',
      instruction: 'Turn the attribute back into a relative clause.',
      prompt: 'Die seit Monaten geplante Reise fällt aus.',
      answers: [
        'Die Reise, die seit Monaten geplant ist, fällt aus.',
        'Die Reise, die seit Monaten geplant war, fällt aus.',
        'Die Reise, die seit Monaten geplant wurde, fällt aus.',
      ],
      explanation: 'seit Monaten geplante → die seit Monaten geplant ist.',
    },
  ],
}

export const nominalisierung: GrammarTopic = {
  id: 'nominalisierung',
  title: 'Nominalstil',
  english: 'Turning verbs into nouns: the style of formal German',
  level: 'B2',
  summary:
    'Formal and academic German packs information into nouns: *nach der Ankunft* rather than *nachdem wir angekommen waren*. Knowing the common conversions helps you read news and write formal letters, and each clause type has a matching preposition.',
  sections: [
    {
      heading: 'Clause ↔ preposition',
      body: [],
      table: {
        head: ['Verbal style', 'Nominal style'],
        rows: [
          ['weil es regnete', '**wegen** des Regens'],
          ['obwohl er krank war', '**trotz** seiner Krankheit'],
          ['nachdem sie angekommen war', '**nach** ihrer Ankunft'],
          ['bevor wir abreisen', '**vor** unserer Abreise'],
          ['während wir aßen', '**während** des Essens'],
          ['damit / um … zu verbessern', '**zur** Verbesserung'],
          ['wenn man es benutzt', '**bei** der Benutzung'],
          ['indem man spart', '**durch** Sparen'],
        ],
      },
    },
    {
      heading: 'Making the noun',
      body: [
        'Infinitive as noun (always neuter): das Lesen, beim Kochen.',
        '**-ung** (feminine): verbessern → die Verbesserung, entscheiden → die Entscheidung.',
        'Stem forms: ankommen → die Ankunft, beginnen → der Beginn, abfahren → die Abfahrt.',
        'The subject becomes a possessive or genitive: *er kommt an* → *seine Ankunft*; *der Zug kommt an* → *die Ankunft des Zuges*.',
      ],
    },
  ],
  mistakes: [
    {
      wrong: 'Nach wir angekommen sind, …',
      right: 'Nach unserer Ankunft … / Nachdem wir angekommen sind, …',
      why: 'nach is a preposition (+ noun); nachdem is the conjunction.',
    },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: '___ des schlechten Wetters wurde das Spiel abgesagt.',
      answers: ['Wegen', 'Aufgrund'],
      hint: 'because of',
      explanation: 'weil das Wetter schlecht war → wegen des schlechten Wetters.',
    },
    {
      kind: 'gap',
      prompt: 'Nach ___ Ankunft in Berlin rufe ich dich an. (ich)',
      answers: ['meiner'],
      hint: 'possessive, die Ankunft',
      explanation: 'nach + Dativ: meiner Ankunft.',
    },
    {
      kind: 'gap',
      prompt: 'Bei der ___ des Geräts ist Vorsicht geboten. (benutzen)',
      answers: ['Benutzung'],
      hint: '-ung',
      explanation: 'benutzen → die Benutzung.',
    },
    {
      kind: 'gap',
      prompt: 'Zur ___ meiner Deutschkenntnisse mache ich einen Kurs. (verbessern)',
      answers: ['Verbesserung'],
      hint: '-ung',
      explanation: 'verbessern → die Verbesserung.',
    },
    {
      kind: 'transform',
      instruction: 'Rewrite in nominal style with trotz.',
      prompt: 'Obwohl sie krank war, ging sie zur Arbeit.',
      answers: ['Trotz ihrer Krankheit ging sie zur Arbeit.'],
      explanation: 'obwohl sie krank war → trotz ihrer Krankheit.',
    },
    {
      kind: 'transform',
      instruction: 'Rewrite in nominal style with vor.',
      prompt: 'Bevor wir abreisen, müssen wir die Wohnung putzen.',
      answers: ['Vor unserer Abreise müssen wir die Wohnung putzen.'],
      explanation: 'bevor wir abreisen → vor unserer Abreise.',
    },
    {
      kind: 'transform',
      instruction: 'Rewrite in verbal style with nachdem.',
      prompt: 'Nach dem Essen gingen wir spazieren.',
      answers: ['Nachdem wir gegessen hatten, gingen wir spazieren.'],
      explanation: 'nach dem Essen → nachdem wir gegessen hatten (Plusquamperfekt).',
    },
  ],
}

export const modalverbenSubjektiv: GrammarTopic = {
  id: 'modalverben-subjektiv',
  title: 'Modalverben: Vermutungen',
  english: 'Modal verbs for guesses and claims: muss, dürfte, kann, soll, will',
  level: 'B2',
  summary:
    'Modal verbs can express how sure the speaker is, or that a claim comes from someone else. **muss** (must be: very sure), **dürfte** (is probably), **könnte / kann** (might be), **soll** (is said to be), **will** (claims to be).',
  sections: [
    {
      heading: 'Degrees of certainty',
      body: [],
      table: {
        head: ['Modal', 'Certainty', 'Example'],
        rows: [
          ['muss', '~90%', 'Das **muss** ein Fehler sein.'],
          ['dürfte', '~75%', 'Er **dürfte** schon zu Hause sein.'],
          ['kann / könnte', '~50%', 'Sie **könnte** im Stau stehen.'],
          ['kann nicht', 'ruled out', 'Das **kann nicht** stimmen.'],
        ],
      },
    },
    {
      heading: 'Reported claims',
      body: ['**sollen**: others say so. **wollen**: the subject claims it about themselves.'],
      examples: [
        { de: 'Der Film **soll** sehr gut sein.', en: 'The film is supposed to be very good (people say).' },
        { de: 'Er **will** den Unfall nicht gesehen haben.', en: 'He claims not to have seen the accident.' },
      ],
    },
    {
      heading: 'About the past',
      body: [
        'Modal + Partizip II + haben/sein: Sie **muss** den Zug **verpasst haben**. Er **soll** sehr reich **gewesen sein**.',
      ],
    },
  ],
  mistakes: [
    {
      wrong: 'Er will sehr reich sein. (meaning: people say)',
      right: 'Er soll sehr reich sein.',
      why: 'soll = others claim; will = he claims.',
    },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: 'Das Licht ist an. Sie ___ zu Hause sein.',
      answers: ['muss'],
      hint: 'very sure',
      explanation: 'Strong evidence: muss.',
    },
    {
      kind: 'gap',
      prompt: 'Das Restaurant ___ sehr gut sein, habe ich gehört.',
      answers: ['soll'],
      hint: 'people say',
      explanation: 'Hearsay: soll.',
    },
    {
      kind: 'gap',
      prompt: 'Der Angeklagte ___ zur Tatzeit zu Hause gewesen sein.',
      answers: ['will'],
      hint: 'he claims',
      explanation: "The subject's own claim: will.",
    },
    {
      kind: 'gap',
      prompt: 'Es ist acht Uhr. Er ___ jetzt im Büro sein. (probably)',
      answers: ['dürfte'],
      hint: 'probably',
      explanation: 'dürfte = probably.',
    },
    {
      kind: 'gap',
      prompt: 'Sie ist nicht gekommen. Sie muss den Termin vergessen ___.',
      answers: ['haben'],
      hint: 'past guess',
      explanation: 'muss + vergessen + haben.',
    },
    {
      kind: 'choice',
      prompt: 'Das ___ nicht wahr sein! Ich habe ihn gestern noch gesehen.',
      options: ['muss', 'kann', 'soll', 'will'],
      answer: 1,
      explanation: 'kann nicht = impossible.',
    },
  ],
}

export const konnektorenB2: GrammarTopic = {
  id: 'konnektoren-b2',
  title: 'Konnektoren B2',
  english: 'indem, sodass, falls, sofern, ohne dass, anstatt dass, je nachdem',
  level: 'B2',
  summary:
    'More subordinating connectors (verb at the end) for precise argument: means (**indem**), consequence (**sodass**, **so … dass**), condition (**falls, sofern**), absence (**ohne dass**), alternatives (**anstatt dass**) and dependence (**je nachdem, ob / wie**).',
  sections: [
    {
      heading: 'Meanings',
      body: [],
      examples: [
        {
          de: 'Man lernt Vokabeln am besten, **indem** man sie regelmäßig wiederholt.',
          en: 'The best way to learn vocabulary is by revising it regularly.',
        },
        {
          de: 'Es regnete so stark, **dass** die Straßen überflutet wurden.',
          en: 'It rained so heavily that the streets flooded.',
        },
        { de: '**Falls** du Hilfe brauchst, ruf an.', en: 'In case you need help, call.' },
        {
          de: '**Sofern** nichts dazwischenkommt, treffen wir uns um acht.',
          en: "Provided nothing comes up, we'll meet at eight.",
        },
        { de: 'Er ging, **ohne dass** es jemand bemerkte.', en: 'He left without anyone noticing.' },
        {
          de: '**Je nachdem, wie** das Wetter ist, grillen wir oder gehen ins Kino.',
          en: "Depending on the weather, we'll barbecue or go to the cinema.",
        },
      ],
    },
    {
      heading: 'ohne dass vs ohne … zu',
      body: [
        'Same subject: **ohne … zu**. Different subjects: **ohne dass**. Likewise **anstatt … zu** / **anstatt dass**.',
      ],
    },
  ],
  mistakes: [
    {
      wrong: 'Er ging, ohne dass er sich verabschiedete.',
      right: 'Er ging, ohne sich zu verabschieden.',
      why: 'Same subject: ohne … zu is more natural.',
    },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: 'Sie hat ihr Englisch verbessert, ___ sie viele Serien auf Englisch geschaut hat.',
      answers: ['indem'],
      hint: 'by (means)',
      explanation: 'Means: indem.',
    },
    {
      kind: 'gap',
      prompt: '___ es morgen regnet, fällt das Konzert aus.',
      answers: ['Falls', 'Wenn', 'Sofern'],
      hint: 'condition',
      explanation: 'falls / wenn / sofern.',
    },
    {
      kind: 'gap',
      prompt: 'Er hat das Auto genommen, ___ seine Frau davon wusste.',
      answers: ['ohne dass'],
      hint: 'different subjects',
      explanation: 'er ≠ seine Frau: ohne dass.',
    },
    {
      kind: 'gap',
      prompt: 'Die Musik war so laut, ___ wir uns nicht unterhalten konnten.',
      answers: ['dass'],
      hint: 'so … dass',
      explanation: 'so + adjective + dass.',
    },
    {
      kind: 'gap',
      prompt: '___ nachdem, wie viel Zeit ich habe, komme ich mit.',
      answers: ['Je'],
      hint: 'depending on',
      explanation: 'je nachdem, wie …',
    },
    {
      kind: 'transform',
      instruction: 'Rewrite with indem.',
      prompt: 'Man kann Energie sparen. Man schaltet das Licht aus.',
      answers: ['Man kann Energie sparen, indem man das Licht ausschaltet.'],
      explanation: 'indem + … + verb at the end.',
    },
  ],
}

export const modalpartikeln: GrammarTopic = {
  id: 'modalpartikeln',
  title: 'Modalpartikeln',
  english: 'Small words with big effects: doch, ja, mal, eben, halt, denn, wohl',
  level: 'B2',
  summary:
    'Modal particles colour a sentence: friendlier, more insistent, more surprised. They are untranslatable but everywhere in spoken German and informal writing. They go in the Mittelfeld, usually after pronouns and before new information, and are never stressed.',
  sections: [
    {
      heading: 'The most useful ones',
      body: [],
      table: {
        head: ['Particle', 'Effect', 'Example'],
        rows: [
          ['mal', 'softens a request', 'Kannst du **mal** kurz kommen?'],
          ['doch', 'urges, or reminds of something known', 'Komm **doch** mit! / Das weißt du **doch**!'],
          ['ja', 'shared knowledge; surprise', 'Das ist **ja** interessant! / Du weißt **ja**, wie er ist.'],
          ['denn', 'interest in questions', 'Was machst du **denn** hier?'],
          ['eben / halt', "it's just how it is", 'Das ist **halt** so.'],
          ['wohl', 'assumption', 'Er ist **wohl** krank.'],
          ['schon', 'reassurance', 'Das klappt **schon**.'],
        ],
      },
    },
  ],
  mistakes: [
    { wrong: 'Doch komm mit!', right: 'Komm doch mit!', why: 'Particles go in the Mittelfeld, not at the start.' },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: 'Kannst du mir ___ das Salz geben? (softening)',
      answers: ['mal'],
      hint: 'friendly request',
      explanation: 'mal softens requests.',
    },
    {
      kind: 'gap',
      prompt: 'Wo warst du ___ so lange? (interested question)',
      answers: ['denn'],
      hint: 'in questions',
      explanation: 'denn in questions shows interest.',
    },
    {
      kind: 'gap',
      prompt: 'Bleib ___ noch ein bisschen! (urging)',
      answers: ['doch'],
      hint: 'encouraging',
      explanation: 'doch urges.',
    },
    {
      kind: 'gap',
      prompt: 'Keine Sorge, das wird ___ wieder. (reassurance)',
      answers: ['schon'],
      hint: 'reassurance',
      explanation: 'schon reassures.',
    },
    {
      kind: 'gap',
      prompt: 'Das ist ___ eine tolle Idee! (surprise)',
      answers: ['ja'],
      hint: 'surprise',
      explanation: 'ja expresses surprise in exclamations.',
    },
    {
      kind: 'choice',
      prompt: 'Warum hast du nichts gesagt? – Ich war ___ müde. (just was)',
      options: ['halt', 'denn', 'mal', 'doch'],
      answer: 0,
      explanation: "halt/eben: that's just how it was.",
    },
  ],
}

export const funktionsverbgefuege: GrammarTopic = {
  id: 'funktionsverbgefuege',
  title: 'Funktionsverbgefüge',
  english: 'Noun–verb phrases of formal German: in Kraft treten, zur Verfügung stellen',
  level: 'C1',
  summary:
    'Formal German often replaces a simple verb with a noun plus a "light" verb: *eine Entscheidung treffen* (entscheiden), *zur Verfügung stellen* (bereitstellen), *in Frage kommen*. They are fixed: the verb and preposition can\'t be swapped, so learn them as units.',
  sections: [
    {
      heading: 'Common phrases',
      body: [],
      table: {
        head: ['Phrase', 'Simple verb / meaning'],
        rows: [
          ['eine Entscheidung treffen', 'entscheiden'],
          ['eine Frage stellen', 'fragen'],
          ['Kritik üben an + D', 'kritisieren'],
          ['zur Verfügung stellen', 'bereitstellen, provide'],
          ['in Kraft treten', 'gültig werden, come into force'],
          ['in Frage kommen', 'possible, be an option'],
          ['zum Ausdruck bringen', 'ausdrücken, express'],
          ['Rücksicht nehmen auf + A', 'berücksichtigen, be considerate of'],
          ['in Anspruch nehmen', 'nutzen, make use of'],
          ['zur Sprache bringen', 'ansprechen, raise (a topic)'],
          ['Bescheid geben / sagen', 'informieren, let know'],
          ['einen Antrag stellen', 'beantragen'],
        ],
      },
    },
  ],
  mistakes: [
    { wrong: 'eine Entscheidung machen', right: 'eine Entscheidung treffen', why: 'Fixed combination: treffen.' },
    { wrong: 'eine Frage fragen', right: 'eine Frage stellen', why: 'Fixed combination: stellen.' },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: 'Wir müssen bis Freitag eine Entscheidung ___.',
      answers: ['treffen'],
      hint: 'make a decision',
      explanation: 'eine Entscheidung treffen.',
    },
    {
      kind: 'gap',
      prompt: 'Das neue Gesetz tritt am 1. Januar in ___.',
      answers: ['Kraft'],
      hint: 'come into force',
      explanation: 'in Kraft treten.',
    },
    {
      kind: 'gap',
      prompt: 'Die Firma stellt den Mitarbeitern Laptops zur ___.',
      answers: ['Verfügung'],
      hint: 'provide',
      explanation: 'zur Verfügung stellen.',
    },
    {
      kind: 'gap',
      prompt: 'Darf ich noch eine Frage ___?',
      answers: ['stellen'],
      hint: 'ask',
      explanation: 'eine Frage stellen.',
    },
    {
      kind: 'gap',
      prompt: 'Bitte nehmen Sie ___ auf die Nachbarn und seien Sie leise.',
      answers: ['Rücksicht'],
      hint: 'be considerate',
      explanation: 'Rücksicht nehmen auf.',
    },
    {
      kind: 'gap',
      prompt: 'Diese Wohnung kommt für uns leider nicht in ___.',
      answers: ['Frage'],
      hint: 'be an option',
      explanation: 'in Frage kommen.',
    },
    {
      kind: 'gap',
      prompt: 'In ihrer Rede brachte sie ihre Enttäuschung zum ___.',
      answers: ['Ausdruck'],
      hint: 'express',
      explanation: 'zum Ausdruck bringen.',
    },
    {
      kind: 'choice',
      prompt: 'Sag mir bitte ___, ob du kommst.',
      options: ['Bescheid', 'Auskunft', 'Antwort', 'Nachricht'],
      answer: 0,
      explanation: 'Bescheid sagen / geben.',
    },
  ],
}
