import type { GrammarTopic } from '../types'

export const perfekt: GrammarTopic = {
  id: 'perfekt',
  title: 'Perfekt',
  english: 'The spoken past: haben or sein + Partizip II',
  level: 'A2',
  summary:
    'In speech and informal writing, Germans talk about the past with the **Perfekt**: **haben** or **sein** (conjugated, position 2) + **Partizip II** (at the end). Most verbs take haben. Verbs of **movement from A to B** and **change of state** take sein.',
  sections: [
    {
      heading: 'Forming the Partizip II',
      body: [
        'Regular verbs: **ge-** + stem + **-t**: machen → gemacht, arbeiten → gearbeitet.',
        'Irregular verbs: **ge-** + stem (often with a vowel change) + **-en**: fahren → gefahren, trinken → getrunken. Learn these with the verb.',
        'Separable verbs put ge- after the prefix: einkaufen → ein**ge**kauft, ankommen → an**ge**kommen.',
        'No ge- for verbs ending in **-ieren** (studiert, telefoniert) or with an unstressed prefix **be-, ver-, er-, ent-, zer-, ge-, emp-, miss-** (bezahlt, verstanden, erklärt).',
      ],
      table: {
        head: ['Type', 'Infinitive', 'Partizip II'],
        rows: [
          ['regular', 'kaufen', 'gekauft'],
          ['irregular', 'schreiben', 'geschrieben'],
          ['separable', 'aufstehen', 'aufgestanden'],
          ['-ieren', 'reparieren', 'repariert'],
          ['inseparable', 'vergessen', 'vergessen'],
        ],
      },
      examples: [{ de: 'Ich **habe** gestern lange **gearbeitet**.', en: 'I worked late yesterday.' }],
    },
    {
      heading: 'haben or sein?',
      body: [
        '**sein** for verbs without an accusative object that describe **movement** (gehen, fahren, fliegen, kommen, laufen, umziehen) or a **change of state** (aufstehen, einschlafen, aufwachen, sterben, werden, wachsen).',
        'Also always **sein**: sein, bleiben, passieren, gelingen.',
        '**haben** for everything else, including all reflexive verbs and all verbs with an accusative object.',
        'Some movement verbs switch: Ich **bin** nach Berlin gefahren, but Ich **habe** das Auto in die Werkstatt gefahren (accusative object).',
      ],
      examples: [
        { de: 'Wir **sind** um sechs **aufgestanden**.', en: 'We got up at six.' },
        { de: 'Sie **ist** zu Hause **geblieben**.', en: 'She stayed at home.' },
        { de: 'Ich **habe** mich **erkältet**.', en: 'I caught a cold.' },
        { de: 'Was **ist** **passiert**?', en: 'What happened?' },
      ],
    },
    {
      heading: 'Perfekt or Präteritum?',
      body: [
        'Use the Perfekt when speaking and in emails and messages. Use the Präteritum for **sein, haben** and the **modal verbs** even in speech (ich war, ich hatte, ich konnte), and in written narrative.',
      ],
      examples: [
        { de: 'Ich **war** krank, deshalb **habe** ich nicht **angerufen**.', en: "I was ill, so I didn't call." },
      ],
    },
  ],
  mistakes: [
    {
      wrong: 'Ich habe nach Hause gegangen.',
      right: 'Ich bin nach Hause gegangen.',
      why: 'gehen is movement from A to B, so sein.',
    },
    {
      wrong: 'Ich bin mich verletzt.',
      right: 'Ich habe mich verletzt.',
      why: 'Reflexive verbs always take haben.',
    },
    {
      wrong: 'Er hat gestudiert.',
      right: 'Er hat studiert.',
      why: 'No ge- for -ieren verbs.',
    },
    {
      wrong: 'Ich habe geeinkauft.',
      right: 'Ich habe eingekauft.',
      why: 'Separable verbs put ge- between prefix and stem.',
    },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: 'Wir ___ letztes Jahr nach Spanien geflogen.',
      answers: ['sind'],
      hint: 'haben or sein',
      explanation: 'fliegen is movement: sein.',
    },
    {
      kind: 'gap',
      prompt: 'Ich ___ gestern einen tollen Film gesehen.',
      answers: ['habe'],
      hint: 'haben or sein',
      explanation: 'sehen has an accusative object: haben.',
    },
    {
      kind: 'gap',
      prompt: 'Das Kind ___ sofort eingeschlafen.',
      answers: ['ist'],
      hint: 'haben or sein',
      explanation: 'einschlafen is a change of state: sein.',
    },
    {
      kind: 'gap',
      prompt: 'Wie lange ___ ihr in Wien geblieben?',
      answers: ['seid'],
      hint: 'haben or sein',
      explanation: 'bleiben always takes sein.',
    },
    {
      kind: 'gap',
      prompt: 'Hast du schon die Rechnung ___? (bezahlen)',
      answers: ['bezahlt'],
      explanation: 'be- is an unstressed prefix: no ge-.',
    },
    {
      kind: 'gap',
      prompt: 'Der Zug ist pünktlich ___. (ankommen)',
      answers: ['angekommen'],
      explanation: 'Separable: an + ge + kommen.',
    },
    {
      kind: 'gap',
      prompt: 'Der Techniker hat die Heizung ___. (reparieren)',
      answers: ['repariert'],
      explanation: '-ieren verbs have no ge-.',
    },
    {
      kind: 'gap',
      prompt: 'Ich habe dir eine E-Mail ___. (schreiben)',
      answers: ['geschrieben'],
      explanation: 'Irregular: schreiben → geschrieben.',
    },
    {
      kind: 'choice',
      prompt: 'Er ___ seinen Freund zum Flughafen gefahren.',
      options: ['ist', 'hat'],
      answer: 1,
      explanation:
        'With an accusative object (seinen Freund) fahren takes haben. Without one, it takes sein: Er ist zum Flughafen gefahren.',
    },
    {
      kind: 'choice',
      prompt: 'Was ___ denn passiert?',
      options: ['hat', 'ist'],
      answer: 1,
      explanation: 'passieren always takes sein.',
    },
    {
      kind: 'transform',
      instruction: 'Put into the Perfekt.',
      prompt: 'Ich stehe um sieben Uhr auf.',
      answers: ['Ich bin um sieben Uhr aufgestanden.'],
      explanation: 'aufstehen: sein + aufgestanden.',
    },
    {
      kind: 'transform',
      instruction: 'Put into the Perfekt.',
      prompt: 'Sie vergisst den Termin.',
      answers: ['Sie hat den Termin vergessen.'],
      explanation: 'ver- prefix: no ge-; the participle is vergessen.',
    },
    {
      kind: 'order',
      words: ['Am', 'Wochenende', 'haben', 'wir', 'unsere', 'Großeltern', 'besucht.'],
      english: 'At the weekend we visited our grandparents.',
      explanation: 'Auxiliary in position 2, participle at the end.',
    },
  ],
}

export const dativAkkusativ: GrammarTopic = {
  id: 'dativ-akkusativ',
  title: 'Akkusativ und Dativ',
  english: 'Direct and indirect objects: articles, pronouns, word order',
  level: 'A2',
  summary:
    'The **Akkusativ** marks the direct object (what is given, seen, bought). The **Dativ** marks the indirect object, usually a person (to whom). Only the masculine changes in the Akkusativ (**der → den**); in the Dativ everything changes (**dem, der, dem, den + -n**).',
  sections: [
    {
      heading: 'Articles',
      body: ['Learn the columns. Plural Dativ adds **-n** to the noun if it does not already end in -n or -s.'],
      table: {
        head: ['', 'masculine', 'feminine', 'neuter', 'plural'],
        rows: [
          ['Nominativ', 'der / ein', 'die / eine', 'das / ein', 'die / –'],
          ['Akkusativ', '**den / einen**', 'die / eine', 'das / ein', 'die / –'],
          ['Dativ', '**dem / einem**', '**der / einer**', '**dem / einem**', '**den** + -n'],
        ],
      },
      examples: [
        { de: 'Ich gebe **dem** Kind **einen** Apfel.', en: 'I give the child an apple.' },
        { de: 'Sie hilft **den** Kinder**n**.', en: 'She helps the children.' },
      ],
    },
    {
      heading: 'Pronouns',
      body: ['Personal pronouns change in both cases. Learn mir/mich and dir/dich as pairs.'],
      table: {
        head: ['Nominativ', 'Akkusativ', 'Dativ'],
        rows: [
          ['ich', 'mich', 'mir'],
          ['du', 'dich', 'dir'],
          ['er / sie / es', 'ihn / sie / es', 'ihm / ihr / ihm'],
          ['wir', 'uns', 'uns'],
          ['ihr', 'euch', 'euch'],
          ['sie / Sie', 'sie / Sie', 'ihnen / Ihnen'],
        ],
      },
      examples: [
        {
          de: 'Kannst du **mir** helfen? Ich rufe **dich** morgen an.',
          en: "Can you help me? I'll call you tomorrow.",
        },
      ],
    },
    {
      heading: 'Verbs that take the Dativ',
      body: [
        'Some common verbs take only a Dativ object: **helfen, danken, gefallen, gehören, passen, schmecken, gratulieren, antworten, folgen, fehlen, wehtun, zuhören, glauben** (a person).',
        'Verbs of giving and telling have both: **geben, schenken, schicken, zeigen, erklären, empfehlen, bringen** + Dativ (person) + Akkusativ (thing).',
      ],
      examples: [
        { de: 'Das Kleid **gefällt mir**.', en: 'I like the dress.' },
        { de: 'Ich **gratuliere dir** zum Geburtstag.', en: 'Happy birthday.' },
      ],
    },
    {
      heading: 'Word order of two objects',
      body: [
        'Two nouns: **Dativ before Akkusativ**. Ich schenke **meiner Mutter** **einen Schal**.',
        'Two pronouns: **Akkusativ before Dativ**. Ich schenke **ihn ihr**.',
        'One pronoun and one noun: the **pronoun first**. Ich schenke **ihr** einen Schal. Ich schenke **ihn** meiner Mutter.',
      ],
    },
  ],
  mistakes: [
    { wrong: 'Ich helfe dich.', right: 'Ich helfe dir.', why: 'helfen takes the Dativ.' },
    {
      wrong: 'Ich habe ein Bruder.',
      right: 'Ich habe einen Bruder.',
      why: 'haben takes the Akkusativ: masculine ein → einen.',
    },
    { wrong: 'Ich gebe es meinem Vater es.', right: 'Ich gebe es meinem Vater.', why: 'Pronoun first, then the noun.' },
    { wrong: 'mit den Kinder', right: 'mit den Kindern', why: 'Dativ plural adds -n.' },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: 'Ich brauche ___ neuen Computer.',
      answers: ['einen'],
      hint: 'ein, der Computer',
      explanation: 'brauchen + Akkusativ, masculine: einen.',
    },
    {
      kind: 'gap',
      prompt: 'Kannst du ___ bitte helfen? (ich)',
      answers: ['mir'],
      explanation: 'helfen + Dativ: mir.',
    },
    {
      kind: 'gap',
      prompt: 'Die Schuhe gehören ___ Nachbarin.',
      answers: ['der'],
      hint: 'die Nachbarin',
      explanation: 'gehören + Dativ, feminine: der.',
    },
    {
      kind: 'gap',
      prompt: 'Wie gefällt ___ die Stadt? (du)',
      answers: ['dir'],
      explanation: 'gefallen + Dativ: dir.',
    },
    {
      kind: 'gap',
      prompt: 'Ich habe ___ Lehrer eine Frage gestellt.',
      answers: ['dem'],
      hint: 'der Lehrer',
      explanation: 'The person asked is the Dativ object: dem Lehrer.',
    },
    {
      kind: 'gap',
      prompt: 'Wir danken ___ für die Einladung. (Sie)',
      answers: ['Ihnen'],
      explanation: 'danken + Dativ; formal Sie → Ihnen.',
    },
    {
      kind: 'gap',
      prompt: 'Ich kenne ___ nicht. Wer ist er?',
      answers: ['ihn'],
      explanation: 'kennen + Akkusativ: er → ihn.',
    },
    {
      kind: 'gap',
      prompt: 'Sie spielt mit den ___. (Kind)',
      answers: ['Kindern'],
      explanation: 'Dativ plural: die Kinder → den Kindern.',
    },
    {
      kind: 'choice',
      prompt: 'Hast du deiner Schwester das Buch gegeben? – Ja, ich habe ___ gegeben.',
      options: ['ihr es', 'es ihr', 'sie ihm'],
      answer: 1,
      explanation: 'Two pronouns: Akkusativ (es) before Dativ (ihr).',
    },
    {
      kind: 'choice',
      prompt: 'Der Kuchen schmeckt ___ sehr gut.',
      options: ['mich', 'mir', 'ich'],
      answer: 1,
      explanation: 'schmecken + Dativ.',
    },
    {
      kind: 'order',
      words: ['Ich', 'schenke', 'meinem', 'Vater', 'eine', 'Uhr.'],
      english: "I'm giving my father a watch.",
      explanation: 'Two nouns: Dativ before Akkusativ.',
    },
    {
      kind: 'order',
      words: ['Kannst', 'du', 'ihn', 'mir', 'leihen?'],
      english: 'Can you lend it to me?',
      explanation: 'Two pronouns: Akkusativ (ihn) before Dativ (mir).',
    },
  ],
}

export const praepositionenKasus: GrammarTopic = {
  id: 'praepositionen-kasus',
  title: 'Präpositionen mit Dativ oder Akkusativ',
  english: 'Prepositions that always take one case',
  level: 'A2',
  summary:
    'Most prepositions always take the same case. Learn two short lists: **Dativ**: aus, bei, mit, nach, seit, von, zu (and gegenüber). **Akkusativ**: durch, für, gegen, ohne, um (and bis). Only the nine two-way prepositions (in, an, auf …) can take either.',
  sections: [
    {
      heading: 'Always Dativ',
      body: [
        '**aus** (from, out of), **bei** (at, near, with), **mit** (with, by), **nach** (after, to a place name), **seit** (since, for), **von** (from, of, by), **zu** (to), **gegenüber** (opposite).',
        'Contractions: bei dem → **beim**, von dem → **vom**, zu dem → **zum**, zu der → **zur**.',
      ],
      examples: [
        {
          de: 'Ich komme gerade **vom** Arzt und gehe jetzt **zur** Arbeit.',
          en: "I've just come from the doctor and I'm going to work now.",
        },
        { de: '**Seit einem** Jahr wohne ich **bei meiner** Tante.', en: "I've been living with my aunt for a year." },
      ],
    },
    {
      heading: 'Always Akkusativ',
      body: [
        '**durch** (through), **für** (for), **gegen** (against, around a time), **ohne** (without), **um** (around, at a time), **bis** (until, as far as; usually without an article).',
        'Contractions: durch das → **durchs**, für das → **fürs**, um das → **ums**.',
      ],
      examples: [
        { de: 'Wir gehen **durch den** Park.', en: 'We walk through the park.' },
        { de: 'Das Geschenk ist **für meinen** Bruder.', en: 'The present is for my brother.' },
        { de: 'Ich trinke Kaffee **ohne** Zucker.', en: 'I drink coffee without sugar.' },
      ],
    },
    {
      heading: 'zu or nach? in or zu?',
      body: [
        '**nach** + towns, countries without an article, directions: nach Berlin, nach Italien, nach Hause, nach links.',
        '**in** + countries with an article: in **die** Schweiz, in **die** USA.',
        '**zu** + people, shops, buildings, events: zum Arzt, zu meiner Oma, zum Bahnhof, zur Party.',
        '**zu Hause** = at home; **nach Hause** = (going) home.',
      ],
    },
  ],
  mistakes: [
    { wrong: 'mit meinen Freund', right: 'mit meinem Freund', why: 'mit always takes the Dativ.' },
    { wrong: 'für mir', right: 'für mich', why: 'für always takes the Akkusativ.' },
    { wrong: 'Ich gehe zu Hause.', right: 'Ich gehe nach Hause.', why: 'Movement home is nach Hause.' },
    { wrong: 'Ich fahre zu Berlin.', right: 'Ich fahre nach Berlin.', why: 'Towns take nach.' },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: 'Ich fahre mit ___ Bus zur Arbeit.',
      answers: ['dem'],
      hint: 'der Bus',
      explanation: 'mit + Dativ: dem.',
    },
    {
      kind: 'gap',
      prompt: 'Das Geschenk ist für ___ Mutter.',
      answers: ['meine'],
      hint: 'meine Mutter',
      explanation: 'für + Akkusativ: feminine stays meine.',
    },
    {
      kind: 'gap',
      prompt: 'Seit ___ Monat lerne ich Deutsch.',
      answers: ['einem'],
      hint: 'ein Monat',
      explanation: 'seit + Dativ: einem.',
    },
    {
      kind: 'gap',
      prompt: 'Wir laufen durch ___ Wald.',
      answers: ['den'],
      hint: 'der Wald',
      explanation: 'durch + Akkusativ: den.',
    },
    {
      kind: 'gap',
      prompt: 'Ich muss heute noch ___ Apotheke.',
      answers: ['zur'],
      hint: 'zu + die Apotheke',
      explanation: 'zu der → zur.',
    },
    {
      kind: 'gap',
      prompt: 'Nach der Arbeit gehe ich direkt ___ Hause.',
      answers: ['nach'],
      explanation: 'Going home: nach Hause.',
    },
    {
      kind: 'gap',
      prompt: 'Er wohnt noch bei ___ Eltern.',
      answers: ['seinen'],
      hint: 'seine Eltern',
      explanation: 'bei + Dativ plural: seinen.',
    },
    {
      kind: 'gap',
      prompt: 'Ich bin gegen ___ Plan.',
      answers: ['diesen'],
      hint: 'dieser Plan',
      explanation: 'gegen + Akkusativ, masculine: diesen.',
    },
    {
      kind: 'choice',
      prompt: 'Wir fliegen im Sommer ___ Türkei.',
      options: ['nach', 'in die', 'zu der'],
      answer: 1,
      explanation: 'die Türkei has an article, so in die Türkei.',
    },
    {
      kind: 'choice',
      prompt: 'Ich komme gerade ___ Supermarkt.',
      options: ['aus dem', 'aus den', 'von den'],
      answer: 0,
      explanation: 'aus + Dativ, masculine: aus dem.',
    },
    {
      kind: 'choice',
      prompt: 'Ohne ___ wäre ich verloren.',
      options: ['dir', 'dich', 'du'],
      answer: 1,
      explanation: 'ohne + Akkusativ: dich.',
    },
  ],
}

export const alsOb: GrammarTopic = {
  id: 'als-ob',
  title: 'als ob und irreale Vergleiche',
  english: 'As if: unreal comparisons',
  level: 'B2',
  summary:
    '**als ob** / **als wenn** + Konjunktiv II (or I) describes how something seems, though it is not, or may not be, true. The verb goes to the end. In written German you also see **als** + verb directly after it: *als wäre nichts passiert*.',
  sections: [
    {
      heading: 'als ob + verb at the end',
      body: [
        'Use Konjunktiv II: **wäre, hätte, würde** + infinitive, or **hätte/wäre** + Partizip II for the past. In formal texts Konjunktiv I is also used (als ob er krank sei).',
        'Common introductions: Es sieht so aus, als ob … · Er tut so, als ob … · Mir ist, als ob … · Es klingt, als ob …',
      ],
      examples: [
        { de: 'Er tut so, **als ob** er mich nicht **kennen würde**.', en: "He's acting as if he didn't know me." },
        { de: 'Es sieht aus, **als ob** es gleich **regnen würde**.', en: "It looks as if it's going to rain." },
        {
          de: 'Sie redet, **als ob** sie alles allein **gemacht hätte**.',
          en: 'She talks as if she had done it all herself.',
        },
      ],
    },
    {
      heading: 'als + verb immediately after',
      body: ['Drop ob and move the verb straight after als. Same meaning, more literary.'],
      examples: [
        { de: 'Er lächelte, **als wäre** nichts **passiert**.', en: 'He smiled as if nothing had happened.' },
        { de: 'Du siehst aus, **als hättest** du nicht geschlafen.', en: "You look as if you hadn't slept." },
      ],
    },
  ],
  mistakes: [
    {
      wrong: 'Er tut so, als ob er ist krank.',
      right: 'Er tut so, als ob er krank wäre.',
      why: 'Verb at the end, and in Konjunktiv II.',
    },
    {
      wrong: 'Es sieht aus, als es regnen würde.',
      right: 'Es sieht aus, als würde es regnen. / … als ob es regnen würde.',
      why: 'Without ob, the verb comes straight after als.',
    },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: 'Er tut so, als ob er keine Zeit ___.',
      answers: ['hätte'],
      hint: 'haben',
      explanation: 'als ob + Konjunktiv II: hätte, at the end.',
    },
    {
      kind: 'gap',
      prompt: 'Du siehst aus, als ___ du krank.',
      answers: ['wärst', 'wärest'],
      hint: 'sein',
      explanation: 'als + verb directly after it: als wärst du krank.',
    },
    {
      kind: 'gap',
      prompt: 'Sie lachte, als ob nichts passiert ___.',
      answers: ['wäre'],
      hint: 'past',
      explanation: 'Past: wäre + passiert (passieren takes sein).',
    },
    {
      kind: 'gap',
      prompt: 'Es klingt, als ob er schon alles ___ hätte.',
      answers: ['gewusst'],
      hint: 'wissen',
      explanation: 'Past Konjunktiv II: hätte + gewusst.',
    },
    {
      kind: 'choice',
      prompt: 'Er sprach so laut, ___ wir alle schwerhörig.',
      options: ['als ob wären', 'als wären', 'als ob sind'],
      answer: 1,
      explanation: 'Without ob, the verb follows als directly.',
    },
    {
      kind: 'transform',
      instruction: 'Rewrite without ob.',
      prompt: 'Es sieht aus, als ob es schneien würde.',
      answers: ['Es sieht aus, als würde es schneien.'],
      explanation: 'als + verb + subject + rest.',
    },
    {
      kind: 'order',
      words: ['Er', 'tut', 'so,', 'als', 'ob', 'er', 'alles', 'wüsste.'],
      english: 'He acts as if he knew everything.',
      explanation: 'als ob clause: verb (wüsste) at the end.',
    },
  ],
}

export const adjektiveMitPraepositionen: GrammarTopic = {
  id: 'adjektive-mit-praepositionen',
  title: 'Adjektive mit Präpositionen',
  english: 'Adjectives with fixed prepositions',
  level: 'B1',
  summary:
    'Like verbs, many adjectives take a fixed preposition, and you must learn it with the adjective: **stolz auf** + Akk, **zufrieden mit** + Dat. Two-way prepositions (auf, an, in, über) have a fixed case here too. To refer back to a thing, use **da(r)- + preposition**: Ich bin stolz **darauf**.',
  sections: [
    {
      heading: 'The most useful ones',
      body: ['Learn them in a short sentence, not as pairs on a list.'],
      table: {
        head: ['Adjective', 'Preposition', 'Example'],
        rows: [
          ['stolz', 'auf + A', 'Ich bin stolz auf dich.'],
          ['neugierig', 'auf + A', 'Ich bin neugierig auf das Ergebnis.'],
          ['böse / sauer', 'auf + A', 'Bist du sauer auf mich?'],
          ['zufrieden', 'mit + D', 'Sind Sie mit dem Zimmer zufrieden?'],
          ['fertig', 'mit + D', 'Bist du schon fertig mit der Arbeit?'],
          ['einverstanden', 'mit + D', 'Ich bin mit dem Vorschlag einverstanden.'],
          ['interessiert', 'an + D', 'Er ist sehr an Politik interessiert.'],
          ['froh / glücklich', 'über + A', 'Ich bin froh über deine Hilfe.'],
          ['traurig / enttäuscht', 'über + A', 'Sie ist enttäuscht über das Ergebnis.'],
          ['verantwortlich', 'für + A', 'Wer ist für die Kasse verantwortlich?'],
          ['bekannt', 'für + A', 'Die Stadt ist für ihr Bier bekannt.'],
          ['abhängig', 'von + D', 'Das ist abhängig vom Wetter.'],
          ['überzeugt', 'von + D', 'Ich bin von der Idee überzeugt.'],
          ['verliebt', 'in + A', 'Er ist in seine Kollegin verliebt.'],
          ['gut / schlecht', 'in + D', 'Sie ist gut in Mathe.'],
          ['bereit', 'zu + D', 'Bist du zu einem Kompromiss bereit?'],
        ],
      },
    },
    {
      heading: 'darauf, damit, worüber …',
      body: [
        'For things, replace preposition + noun with **da-** + preposition (**dar-** before a vowel): darauf, damit, darüber, dafür, davon, daran.',
        'For people, keep the preposition and use a pronoun: stolz auf **ihn**, not darauf.',
        'A whole clause can follow: Ich bin froh **darüber**, **dass** du da bist.',
        'Questions about things use **wo(r)-**: **Worauf** bist du stolz? About people: **Auf wen** bist du stolz?',
      ],
      examples: [
        {
          de: 'Bist du mit dem Hotel zufrieden? – Ja, ich bin sehr **damit** zufrieden.',
          en: 'Are you happy with the hotel? – Yes, very.',
        },
        { de: 'Ich bin **davon** überzeugt, **dass** wir es schaffen.', en: "I'm convinced we'll make it." },
        { de: '**Worüber** bist du so froh?', en: 'What are you so happy about?' },
      ],
    },
  ],
  mistakes: [
    { wrong: 'Ich bin stolz von dir.', right: 'Ich bin stolz auf dich.', why: 'stolz takes auf + Akkusativ.' },
    {
      wrong: 'Ich bin interessiert in Kunst.',
      right: 'Ich bin an Kunst interessiert.',
      why: 'interessiert takes an + Dativ (English "in" misleads).',
    },
    {
      wrong: 'Das Auto? Ich bin sehr zufrieden mit ihm.',
      right: 'Das Auto? Ich bin sehr zufrieden damit.',
      why: 'For things use da- + preposition; mit ihm suggests a person.',
    },
    {
      wrong: 'Auf was bist du stolz?',
      right: 'Worauf bist du stolz?',
      why: 'In writing, use wo(r)- + preposition for things.',
    },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: 'Meine Eltern sind sehr stolz ___ mich.',
      answers: ['auf'],
      explanation: 'stolz auf + Akkusativ.',
    },
    {
      kind: 'gap',
      prompt: 'Sind Sie ___ Ihrer neuen Wohnung zufrieden?',
      answers: ['mit'],
      explanation: 'zufrieden mit + Dativ.',
    },
    {
      kind: 'gap',
      prompt: 'Er ist sehr ___ Geschichte interessiert.',
      answers: ['an'],
      explanation: 'interessiert an + Dativ.',
    },
    {
      kind: 'gap',
      prompt: 'Wir sind froh ___ die gute Nachricht.',
      answers: ['über'],
      explanation: 'froh über + Akkusativ.',
    },
    {
      kind: 'gap',
      prompt: 'Die Region ist ___ ihren Wein bekannt.',
      answers: ['für'],
      explanation: 'bekannt für + Akkusativ.',
    },
    {
      kind: 'gap',
      prompt: 'Der Preis ist ___ der Saison abhängig.',
      answers: ['von'],
      explanation: 'abhängig von + Dativ.',
    },
    {
      kind: 'gap',
      prompt: 'Bist du immer noch sauer ___ mich?',
      answers: ['auf'],
      explanation: 'sauer auf + Akkusativ.',
    },
    {
      kind: 'gap',
      prompt: 'Freust du dich auf den Urlaub? – Ja, ich bin schon ganz neugierig ___.',
      answers: ['darauf'],
      explanation: 'neugierig auf → darauf for a thing.',
    },
    {
      kind: 'gap',
      prompt: '___ bist du so enttäuscht? (about what)',
      answers: ['Worüber'],
      explanation: 'enttäuscht über → worüber.',
    },
    {
      kind: 'gap',
      prompt: 'Ich bin ___ überzeugt, dass das richtig ist.',
      answers: ['davon'],
      explanation: 'überzeugt von → davon + dass-clause.',
    },
    {
      kind: 'choice',
      prompt: 'Sie ist in ihren Nachbarn verliebt. – In ___ ?',
      options: ['wen', 'was', 'worin'],
      answer: 0,
      explanation: 'For a person: preposition + wen.',
    },
    {
      kind: 'choice',
      prompt: 'Bist du ___ einverstanden?',
      options: ['damit', 'davon', 'darauf'],
      answer: 0,
      explanation: 'einverstanden mit → damit.',
    },
  ],
}
