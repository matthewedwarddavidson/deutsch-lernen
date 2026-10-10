import type { GrammarTopic } from '../types'

export const adjektivdeklination: GrammarTopic = {
  id: 'adjektivdeklination',
  title: 'Adjektivdeklination',
  english: 'Adjective endings',
  level: 'A2',
  summary:
    "An adjective before a noun needs an ending. The rule of thumb: **the gender and case must be shown once**. If the article already shows it (der, das, dem…), the adjective takes a weak **-e** or **-en**. If there is no article, or the article doesn't show it (ein, mein, kein in some forms), the adjective shows it with a strong ending.",
  sections: [
    {
      heading: 'After der, die, das (definite article)',
      body: [
        'Only two endings: **-e** and **-en**. -e in the five "easy" slots (all Nominativ singular, plus Akkusativ feminine and neuter); -en everywhere else.',
      ],
      table: {
        head: ['', 'Maskulin', 'Neutrum', 'Feminin', 'Plural'],
        rows: [
          ['Nominativ', 'der alt**e** Mann', 'das alt**e** Haus', 'die alt**e** Frau', 'die alt**en** Leute'],
          ['Akkusativ', 'den alt**en** Mann', 'das alt**e** Haus', 'die alt**e** Frau', 'die alt**en** Leute'],
          ['Dativ', 'dem alt**en** Mann', 'dem alt**en** Haus', 'der alt**en** Frau', 'den alt**en** Leuten'],
          ['Genitiv', 'des alt**en** Mannes', 'des alt**en** Hauses', 'der alt**en** Frau', 'der alt**en** Leute'],
        ],
      },
    },
    {
      heading: 'After ein, kein, mein … (indefinite and possessive)',
      body: [
        'Same as above, except in the three places where **ein** has no ending. There the adjective shows the gender: **-er** (masculine Nominativ), **-es** (neuter Nominativ and Akkusativ).',
      ],
      table: {
        head: ['', 'Maskulin', 'Neutrum', 'Feminin', 'Plural (meine)'],
        rows: [
          ['Nominativ', 'ein alt**er** Mann', 'ein alt**es** Haus', 'eine alt**e** Frau', 'meine alt**en** Freunde'],
          ['Akkusativ', 'einen alt**en** Mann', 'ein alt**es** Haus', 'eine alt**e** Frau', 'meine alt**en** Freunde'],
          [
            'Dativ',
            'einem alt**en** Mann',
            'einem alt**en** Haus',
            'einer alt**en** Frau',
            'meinen alt**en** Freunden',
          ],
        ],
      },
    },
    {
      heading: 'No article',
      body: [
        'The adjective takes the ending the definite article would have had: kalt**er** Kaffee (der), kalt**es** Wasser (das), kalt**e** Milch (die), mit kalt**em** Wasser (dem).',
        'Exception: masculine and neuter Genitiv take -en: wegen schlecht**en** Wetters.',
      ],
      examples: [
        { de: 'Ich trinke gern **heißen** Tee.', en: 'I like drinking hot tea. (den Tee)' },
        { de: 'Mit **freundlichen** Grüßen', en: 'With kind regards (Dativ plural)' },
      ],
    },
  ],
  mistakes: [
    {
      wrong: 'ein alte Mann',
      right: 'ein alter Mann',
      why: 'ein shows no gender, so the adjective must: -er for masculine.',
    },
    { wrong: 'mit dem neue Auto', right: 'mit dem neuen Auto', why: 'Dativ is always -en after an article.' },
    {
      wrong: 'Ich habe einen neues Job.',
      right: 'Ich habe einen neuen Job.',
      why: 'einen already shows masculine Akkusativ: -en.',
    },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: 'Das ist ein sehr gut___ Restaurant.',
      answers: ['es'],
      hint: 'das Restaurant, Nominativ, after ein',
      explanation: 'ein + neuter Nominativ: the adjective shows it: -es.',
    },
    {
      kind: 'gap',
      prompt: 'Ich wohne in einer klein___ Wohnung.',
      answers: ['en'],
      hint: 'Dativ',
      explanation: 'Dativ after an article: -en.',
    },
    {
      kind: 'gap',
      prompt: 'Der neu___ Kollege kommt aus Wien.',
      answers: ['e'],
      hint: 'der, Nominativ',
      explanation: 'After der in Nominativ singular: -e.',
    },
    {
      kind: 'gap',
      prompt: 'Hast du den rot___ Mantel gesehen?',
      answers: ['en'],
      hint: 'den, Akkusativ masculine',
      explanation: 'Masculine Akkusativ: -en.',
    },
    {
      kind: 'gap',
      prompt: 'Wir haben einen toll___ Urlaub gemacht.',
      answers: ['en'],
      hint: 'einen',
      explanation: 'einen already shows the case: -en.',
    },
    {
      kind: 'gap',
      prompt: 'Ich trinke morgens schwarz___ Kaffee.',
      answers: ['en'],
      hint: 'no article, der Kaffee, Akkusativ',
      explanation: 'No article: the adjective takes the article ending (den → -en).',
    },
    {
      kind: 'gap',
      prompt: 'Sie hat ein neu___ Fahrrad gekauft.',
      answers: ['es'],
      hint: 'ein, neuter Akkusativ',
      explanation: 'ein + neuter Akkusativ: -es.',
    },
    {
      kind: 'gap',
      prompt: 'Die alt___ Häuser in der Altstadt sind schön.',
      answers: ['en'],
      hint: 'Plural',
      explanation: 'Plural after die: -en.',
    },
    {
      kind: 'gap',
      prompt: 'Mein ält___ Bruder wohnt in Hamburg.',
      answers: ['erer'],
      hint: 'comparative alt → älter + ending',
      explanation: 'älter + masculine Nominativ after mein: älterer.',
    },
    {
      kind: 'gap',
      prompt: 'Bei schön___ Wetter gehen wir wandern.',
      answers: ['em'],
      hint: 'no article, Dativ neuter',
      explanation: 'No article, dem Wetter → -em.',
    },
    {
      kind: 'choice',
      prompt: 'Ich suche eine ___ Wohnung.',
      options: ['günstig', 'günstige', 'günstigen', 'günstiger'],
      answer: 1,
      explanation: 'eine + feminine Akkusativ: -e.',
    },
    {
      kind: 'choice',
      prompt: 'Er arbeitet mit ___ Kollegen zusammen.',
      options: ['nette', 'netten', 'netter', 'nettes'],
      answer: 1,
      explanation: 'mit + Dativ plural, no article: -en (den → -en).',
    },
  ],
}

export const wechselpraepositionen: GrammarTopic = {
  id: 'wechselpraepositionen',
  title: 'Wechselpräpositionen',
  english: 'Two-way prepositions: Akkusativ for movement, Dativ for location',
  level: 'A2',
  summary:
    'Nine prepositions take either case: **in, an, auf, über, unter, vor, hinter, neben, zwischen**. Ask the question: **Wohin?** (where to: movement towards) → Akkusativ. **Wo?** (where: position) → Dativ.',
  sections: [
    {
      heading: 'Wohin? or Wo?',
      body: [],
      examples: [
        { de: 'Ich lege das Buch **auf den** Tisch. (Wohin? → Akk)', en: 'I put the book on the table.' },
        { de: 'Das Buch liegt **auf dem** Tisch. (Wo? → Dat)', en: 'The book is lying on the table.' },
        { de: 'Wir gehen **ins** Kino. (in das)', en: 'We are going to the cinema.' },
        { de: 'Wir sind **im** Kino. (in dem)', en: 'We are at the cinema.' },
      ],
    },
    {
      heading: 'Verb pairs',
      body: ['German has separate verbs for "put" (movement, Akk) and "be" (position, Dat).'],
      table: {
        head: ['Movement + Akkusativ', 'Position + Dativ'],
        rows: [
          ['legen (lay) – legte – hat gelegt', 'liegen (lie) – lag – hat gelegen'],
          ['stellen (stand upright) – stellte – hat gestellt', 'stehen (stand) – stand – hat gestanden'],
          ['setzen (sit someone down) – setzte – hat gesetzt', 'sitzen (sit) – saß – hat gesessen'],
          ['hängen – hängte – hat gehängt', 'hängen – hing – hat gehangen'],
        ],
      },
    },
    {
      heading: 'Contractions',
      body: ['in dem → **im**, in das → **ins**, an dem → **am**, an das → **ans**.'],
    },
  ],
  mistakes: [
    {
      wrong: 'Ich lege das Handy auf dem Tisch.',
      right: 'Ich lege das Handy auf den Tisch.',
      why: 'legen = movement → Akkusativ.',
    },
    { wrong: 'Das Bild hängt an die Wand.', right: 'Das Bild hängt an der Wand.', why: 'hängen (position) → Dativ.' },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: 'Ich stelle die Flasche in ___ Kühlschrank.',
      answers: ['den'],
      hint: 'Wohin?',
      explanation: 'Movement → Akkusativ: in den Kühlschrank.',
    },
    {
      kind: 'gap',
      prompt: 'Die Milch steht im Kühlschrank. — Die Butter liegt auch in ___ Kühlschrank.',
      answers: ['dem'],
      hint: 'Wo?',
      explanation: 'Position → Dativ: in dem (= im) Kühlschrank.',
    },
    {
      kind: 'gap',
      prompt: 'Häng die Jacke bitte an ___ Garderobe.',
      answers: ['die'],
      hint: 'die Garderobe, Wohin?',
      explanation: 'Movement → Akkusativ feminine: die.',
    },
    {
      kind: 'gap',
      prompt: 'Die Katze schläft unter ___ Bett.',
      answers: ['dem'],
      hint: 'das Bett, Wo?',
      explanation: 'Position → Dativ neuter: dem.',
    },
    {
      kind: 'gap',
      prompt: 'Wir fahren am Wochenende an ___ Meer.',
      answers: ['das'],
      hint: 'das Meer, Wohin?',
      explanation: 'Movement → Akkusativ: an das (ans) Meer.',
    },
    {
      kind: 'gap',
      prompt: 'Das Auto steht vor ___ Haus.',
      answers: ['dem'],
      hint: 'Wo?',
      explanation: 'Position → Dativ: vor dem Haus.',
    },
    {
      kind: 'gap',
      prompt: 'Ich habe das Buch auf den Tisch ___. (legen, Partizip)',
      answers: ['gelegt'],
      hint: 'movement verb',
      explanation: 'legen → gelegt (movement, Akkusativ).',
    },
    {
      kind: 'gap',
      prompt: 'Das Buch hat den ganzen Tag auf dem Tisch ___. (liegen, Partizip)',
      answers: ['gelegen'],
      hint: 'position verb',
      explanation: 'liegen → gelegen.',
    },
    {
      kind: 'choice',
      prompt: 'Setz dich doch neben ___!',
      options: ['mir', 'mich', 'meinem', 'ich'],
      answer: 1,
      explanation: 'sich setzen = movement → Akkusativ: neben mich.',
    },
    {
      kind: 'choice',
      prompt: 'Er sitzt den ganzen Tag vor ___ Computer.',
      options: ['den', 'dem', 'der', 'das'],
      answer: 1,
      explanation: 'sitzen = position → Dativ masculine: dem.',
    },
  ],
}

export const genitiv: GrammarTopic = {
  id: 'genitiv',
  title: 'Genitiv',
  english: 'The genitive: possession and genitive prepositions',
  level: 'B1',
  summary:
    'The Genitiv shows belonging ("the colleague\'s car") and follows prepositions like **wegen, trotz, während, statt, innerhalb, außerhalb**. In speech, von + Dativ often replaces it, but written German and exams expect the Genitiv.',
  sections: [
    {
      heading: 'Forms',
      body: [
        "Masculine and neuter nouns add **-s** or **-es** (des Mann**es**, des Auto**s**). Feminine and plural nouns don't change.",
        'n-declension nouns take -n: des Kollege**n**, des Studente**n**.',
      ],
      table: {
        head: ['', 'Maskulin', 'Neutrum', 'Feminin', 'Plural'],
        rows: [
          ['Artikel', '**des** Vaters', '**des** Kindes', '**der** Mutter', '**der** Eltern'],
          ['ein / kein', '**eines** Freundes', '**eines** Hauses', '**einer** Freundin', '**keiner** Freunde'],
          [
            'Adjektiv',
            'des neu**en** Chefs',
            'des klein**en** Kindes',
            'der neu**en** Chefin',
            'der neu**en** Nachbarn',
          ],
        ],
      },
    },
    {
      heading: 'Belonging',
      body: ['The owner comes **after** the thing owned. With names, add -s without an apostrophe: **Annas** Auto.'],
      examples: [
        { de: 'Das ist das Auto **meines Kollegen**.', en: "That is my colleague's car." },
        { de: 'Die Kosten **der Reise** waren hoch.', en: 'The cost of the trip was high.' },
      ],
    },
    {
      heading: 'Prepositions',
      body: [],
      examples: [
        { de: '**Wegen des Streiks** fahren keine Züge.', en: 'Because of the strike, no trains are running.' },
        { de: '**Trotz des Regens** sind wir gewandert.', en: 'Despite the rain we went hiking.' },
        { de: '**Während der Ferien** arbeite ich im Café.', en: 'During the holidays I work in the café.' },
        { de: '**Innerhalb einer Woche** bekommen Sie eine Antwort.', en: 'You will get an answer within a week.' },
      ],
    },
  ],
  mistakes: [
    {
      wrong: 'wegen dem Regen (in writing)',
      right: 'wegen des Regens',
      why: 'Spoken German often uses the Dativ, but written German expects the Genitiv.',
    },
    { wrong: "Anna's Auto", right: 'Annas Auto', why: 'No apostrophe for the genitive -s in German.' },
    {
      wrong: 'des Kollegen Auto (in speech)',
      right: 'das Auto des Kollegen',
      why: 'The genitive normally follows the noun it describes.',
    },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: 'Wegen ___ Wetters bleiben wir zu Hause.',
      answers: ['des'],
      hint: 'das Wetter',
      explanation: 'wegen + Genitiv: des Wetters.',
    },
    {
      kind: 'gap',
      prompt: 'Trotz ___ Verspätung kamen wir pünktlich an.',
      answers: ['der'],
      hint: 'die Verspätung',
      explanation: 'Feminine Genitiv: der.',
    },
    {
      kind: 'gap',
      prompt: 'Das ist die Wohnung meines ___. (Bruder)',
      answers: ['Bruders'],
      hint: 'masculine + s',
      explanation: 'Masculine Genitiv adds -s: meines Bruders.',
    },
    {
      kind: 'gap',
      prompt: 'Während ___ Sommers war es sehr heiß.',
      answers: ['des'],
      hint: 'der Sommer',
      explanation: 'während + Genitiv masculine: des Sommers.',
    },
    {
      kind: 'gap',
      prompt: 'Die Meinung ___ Experten ist eindeutig.',
      answers: ['der', 'des'],
      hint: 'Plural or singular',
      explanation: 'der Experten (plural) or des Experten (singular, n-declension).',
    },
    {
      kind: 'gap',
      prompt: 'Das Büro des neu___ Chefs ist im dritten Stock.',
      answers: ['en'],
      hint: 'adjective in Genitiv',
      explanation: 'Adjectives after des: -en.',
    },
    {
      kind: 'gap',
      prompt: 'Innerhalb ___ Monats müssen Sie umziehen.',
      answers: ['eines'],
      hint: 'ein Monat',
      explanation: 'innerhalb + Genitiv: eines Monats.',
    },
    {
      kind: 'choice',
      prompt: 'Das Fahrrad ___ ist kaputt.',
      options: ['von meiner Schwester', 'meiner Schwester', 'meines Schwester', 'meine Schwesters'],
      answer: 1,
      explanation: 'Feminine Genitiv: meiner Schwester (von meiner Schwester is spoken style).',
    },
    {
      kind: 'transform',
      instruction: 'Rewrite with the Genitiv.',
      prompt: 'Das ist das Auto von meinem Vater.',
      answers: ['Das ist das Auto meines Vaters.'],
      explanation: 'von meinem Vater → meines Vaters.',
    },
    {
      kind: 'transform',
      instruction: 'Rewrite with wegen + Genitiv.',
      prompt: 'Weil es einen Unfall gab, war die Straße gesperrt.',
      answers: ['Wegen eines Unfalls war die Straße gesperrt.', 'Wegen des Unfalls war die Straße gesperrt.'],
      explanation: 'The weil-clause becomes wegen + Genitiv: wegen eines Unfalls.',
    },
  ],
}

export const verbenMitPraepositionen: GrammarTopic = {
  id: 'verben-mit-praepositionen',
  title: 'Verben mit Präpositionen',
  english: 'Verbs with fixed prepositions, and da-/wo- words',
  level: 'B1',
  summary:
    'Many verbs need a fixed preposition, often not the one English uses: *warten **auf***, *sich interessieren **für***, *Angst haben **vor***. Learn verb, preposition and case together. To refer back to a thing, use **da(r)- + preposition** (darauf, dafür); to ask about a thing, **wo(r)- + preposition** (worauf, wofür).',
  sections: [
    {
      heading: 'Common verbs',
      body: [],
      table: {
        head: ['Verb', 'Preposition + case', 'Example'],
        rows: [
          ['warten', 'auf + A', 'Ich warte **auf den** Bus.'],
          ['sich freuen', 'auf + A (future) / über + A (now)', 'Ich freue mich **auf die** Ferien.'],
          ['sich interessieren', 'für + A', 'Er interessiert sich **für** Politik.'],
          ['denken', 'an + A', 'Ich denke oft **an dich**.'],
          ['sich erinnern', 'an + A', 'Erinnerst du dich **an den** Urlaub?'],
          ['sich kümmern', 'um + A', 'Wer kümmert sich **um die** Katze?'],
          ['Angst haben', 'vor + D', 'Sie hat Angst **vor** Hunden.'],
          ['teilnehmen', 'an + D', 'Ich nehme **an dem** Kurs teil.'],
          ['sprechen', 'mit + D / über + A', 'Ich spreche **mit ihr über das** Problem.'],
          ['sich beschweren', 'bei + D / über + A', 'Er beschwert sich **beim** Chef **über den** Lärm.'],
          ['abhängen', 'von + D', 'Das hängt **vom** Wetter ab.'],
          ['sich bewerben', 'um + A / bei + D', 'Sie bewirbt sich **um die** Stelle.'],
        ],
      },
    },
    {
      heading: 'da- and wo- words',
      body: [
        'For **things and ideas**, replace "preposition + it/that" with **da-** + preposition, and "preposition + what?" with **wo-** + preposition. Add **r** before a vowel: dar**auf**, wor**über**.',
        'For **people**, keep the preposition + pronoun: Ich warte auf **ihn**. Auf **wen** wartest du?',
        'da-words can also point forward to a dass-clause or infinitive: Ich freue mich **darauf**, dich zu sehen.',
      ],
      examples: [
        {
          de: '**Worauf** wartest du? – Auf den Bus. Ich warte schon lange **darauf**.',
          en: "What are you waiting for? – For the bus. I've been waiting for it for ages.",
        },
        {
          de: '**Auf wen** wartest du? – Auf Lisa. Ich warte schon lange **auf sie**.',
          en: "Who are you waiting for? – For Lisa. I've been waiting for her for ages.",
        },
        { de: 'Ich habe keine Lust **darauf**, heute zu kochen.', en: "I don't feel like cooking today." },
      ],
    },
  ],
  mistakes: [
    { wrong: 'Ich warte für den Bus.', right: 'Ich warte auf den Bus.', why: 'warten auf, not für.' },
    {
      wrong: 'Ich denke über dich.',
      right: 'Ich denke an dich.',
      why: 'denken an = think of; nachdenken über = think about (consider).',
    },
    {
      wrong: 'Auf was wartest du?',
      right: 'Worauf wartest du?',
      why: 'Auf was is colloquial; written German uses wo(r)-.',
    },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: 'Ich interessiere mich sehr ___ Geschichte.',
      answers: ['für'],
      hint: 'sich interessieren …',
      explanation: 'sich interessieren für + A.',
    },
    {
      kind: 'gap',
      prompt: 'Wir freuen uns schon ___ den Urlaub.',
      answers: ['auf'],
      hint: 'future',
      explanation: 'sich freuen auf = look forward to.',
    },
    {
      kind: 'gap',
      prompt: 'Hast du Angst ___ der Prüfung?',
      answers: ['vor'],
      hint: 'Angst haben …',
      explanation: 'Angst haben vor + D.',
    },
    {
      kind: 'gap',
      prompt: 'Ich denke oft ___ meine Kindheit.',
      answers: ['an'],
      hint: 'denken …',
      explanation: 'denken an + A.',
    },
    {
      kind: 'gap',
      prompt: '___ denkst du gerade? – An das Wochenende.',
      answers: ['Woran'],
      hint: 'wo + an',
      explanation: 'Thing: wo + r + an = woran.',
    },
    {
      kind: 'gap',
      prompt: 'Freust du dich auf die Party? – Ja, ich freue mich sehr ___.',
      answers: ['darauf'],
      hint: 'da + auf',
      explanation: 'Refers back to a thing: darauf.',
    },
    {
      kind: 'gap',
      prompt: 'Sie hat sich ___ den Lärm beschwert.',
      answers: ['über'],
      hint: 'sich beschweren … (about)',
      explanation: 'sich beschweren über + A.',
    },
    {
      kind: 'gap',
      prompt: '___ wartest du? – Auf meinen Bruder.',
      answers: ['Auf wen'],
      hint: 'a person',
      explanation: 'For people: preposition + wen.',
    },
    {
      kind: 'gap',
      prompt: 'Ob wir grillen, hängt ___ Wetter ab.',
      answers: ['vom', 'von dem'],
      hint: 'abhängen …',
      explanation: 'abhängen von + D: vom Wetter.',
    },
    {
      kind: 'choice',
      prompt: 'Ich habe keine Lust ___, heute aufzuräumen.',
      options: ['dafür', 'darauf', 'daran', 'davon'],
      answer: 1,
      explanation: 'Lust haben auf → darauf.',
    },
    {
      kind: 'choice',
      prompt: '___ sprecht ihr? – Über den neuen Film.',
      options: ['Worüber', 'Über was', 'Wovon', 'Woran'],
      answer: 0,
      explanation: 'sprechen über → worüber.',
    },
    {
      kind: 'transform',
      instruction: 'Replace "an den Termin" with a da-word.',
      prompt: 'Ich habe nicht an den Termin gedacht.',
      answers: ['Ich habe nicht daran gedacht.'],
      explanation: 'an + thing → daran.',
    },
  ],
}

export const nDeklination: GrammarTopic = {
  id: 'n-deklination',
  title: 'n-Deklination',
  english: 'Weak masculine nouns: der Kollege → den Kollegen',
  level: 'B1',
  summary:
    'A group of masculine nouns adds **-n** or **-en** in every case except the Nominativ singular. They are mostly people and animals ending in **-e** (der Kollege, der Kunde, der Junge, der Löwe), plus nouns ending in **-ent, -ant, -ist, -at, -oge** (der Student, der Praktikant, der Tourist, der Soldat, der Biologe), and a few others: der Mensch, der Herr, der Nachbar, der Bauer.',
  sections: [
    {
      heading: 'Forms',
      body: [],
      table: {
        head: ['', 'Singular', 'Plural'],
        rows: [
          ['Nominativ', 'der Kollege', 'die Kollege**n**'],
          ['Akkusativ', 'den Kollege**n**', 'die Kollege**n**'],
          ['Dativ', 'dem Kollege**n**', 'den Kollege**n**'],
          ['Genitiv', 'des Kollege**n**', 'der Kollege**n**'],
        ],
      },
      examples: [
        { de: 'Kennst du **den neuen Kollegen**?', en: 'Do you know the new colleague?' },
        { de: 'Ich habe **dem Kunden** eine E-Mail geschrieben.', en: 'I wrote the customer an email.' },
        {
          de: 'Sehr geehrter **Herr** Müller, … – Ich habe **Herrn** Müller angerufen.',
          en: 'Dear Mr Müller … – I called Mr Müller.',
        },
      ],
    },
  ],
  mistakes: [
    { wrong: 'Ich frage den Nachbar.', right: 'Ich frage den Nachbarn.', why: 'Nachbar is an n-noun: Akkusativ -n.' },
    {
      wrong: 'Ich habe Herr Schmidt geschrieben.',
      right: 'Ich habe Herrn Schmidt geschrieben.',
      why: 'Herr → Herrn outside the Nominativ.',
    },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: 'Ich habe gestern den neuen Praktikant___ kennengelernt.',
      answers: ['en'],
      hint: '-ant noun',
      explanation: 'Akkusativ: den Praktikanten.',
    },
    {
      kind: 'gap',
      prompt: 'Kannst du bitte Herr___ Weber anrufen?',
      answers: ['n'],
      hint: 'Herr',
      explanation: 'Akkusativ: Herrn Weber.',
    },
    {
      kind: 'gap',
      prompt: 'Der Verkäufer hat dem Kunde___ geholfen.',
      answers: ['n'],
      hint: 'Dativ',
      explanation: 'dem Kunden.',
    },
    {
      kind: 'choice',
      prompt: 'Der ___ fragt nach dem Weg.',
      options: ['Tourist', 'Touristen', 'Touristes', 'Touristn'],
      answer: 0,
      explanation: 'Nominativ singular: no ending, even for n-nouns.',
    },
    {
      kind: 'gap',
      prompt: 'Das Büro des Student___ ist im Keller.',
      answers: ['en'],
      hint: 'Genitiv',
      explanation: 'des Studenten.',
    },
    {
      kind: 'gap',
      prompt: 'Ich habe mit dem Nachbar___ gesprochen.',
      answers: ['n'],
      hint: 'Dativ',
      explanation: 'dem Nachbarn.',
    },
    {
      kind: 'choice',
      prompt: 'Jeder ___ braucht Freunde.',
      options: ['Mensch', 'Menschen', 'Menschn', 'Menschens'],
      answer: 0,
      explanation: 'Nominativ singular: no ending.',
    },
    {
      kind: 'choice',
      prompt: 'Die Ärztin hat den ___ untersucht.',
      options: ['Junge', 'Jungen', 'Junges', 'Jung'],
      answer: 1,
      explanation: 'Akkusativ: den Jungen.',
    },
  ],
}
