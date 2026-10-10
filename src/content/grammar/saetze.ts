import type { GrammarTopic } from '../types'

export const finalsaetze: GrammarTopic = {
  id: 'finalsaetze',
  title: 'um … zu und damit',
  english: 'Saying why: in order to / so that',
  level: 'B1',
  summary:
    'Both express purpose. Use **um … zu** + infinitive when the subject is the **same** in both parts. Use **damit** + full clause (verb at the end) when the subjects are **different**. With the same subject, damit is also possible but um … zu is more natural.',
  sections: [
    {
      heading: 'Same subject: um … zu',
      body: [
        '**um** starts the clause, **zu** + infinitive go at the end. No subject and no conjugated verb in the um-clause.',
        'Separable verbs put zu in the middle: um früh **aufzustehen**.',
      ],
      examples: [
        {
          de: 'Ich lerne Deutsch, **um** in Deutschland **zu arbeiten**.',
          en: 'I am learning German (in order) to work in Germany.',
        },
        {
          de: 'Sie steht früh auf, **um** den Bus nicht **zu verpassen**.',
          en: 'She gets up early so as not to miss the bus.',
        },
        { de: 'Er spart, **um** sich ein Auto **zu kaufen**.', en: 'He is saving to buy himself a car.' },
      ],
    },
    {
      heading: 'Different subjects: damit',
      body: ['**damit** + subject + … + verb at the end.'],
      examples: [
        {
          de: 'Ich spreche langsam, **damit** du mich **verstehst**.',
          en: 'I am speaking slowly so that you understand me.',
        },
        {
          de: 'Die Eltern arbeiten viel, **damit** ihre Kinder studieren **können**.',
          en: 'The parents work a lot so that their children can study.',
        },
      ],
    },
    {
      heading: 'No modal verb in purpose clauses',
      body: [
        'Don\'t add wollen or können to an um-clause: the purpose is already in "um". Not *um arbeiten zu können* when you simply mean "to work". (With damit, können is common: damit sie studieren können.)',
      ],
    },
  ],
  mistakes: [
    {
      wrong: 'Ich lerne, um ich die Prüfung bestehe.',
      right: 'Ich lerne, um die Prüfung zu bestehen.',
      why: 'No subject and no conjugated verb after um.',
    },
    {
      wrong: 'Ich erkläre es, um du es verstehst.',
      right: 'Ich erkläre es, damit du es verstehst.',
      why: 'Different subjects (ich / du): damit.',
    },
    {
      wrong: 'um früh zu aufstehen',
      right: 'um früh aufzustehen',
      why: 'Separable verbs: zu goes between prefix and verb.',
    },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: 'Ich gehe in die Bibliothek, ___ in Ruhe zu lernen.',
      answers: ['um'],
      hint: 'same subject',
      explanation: 'Same subject, infinitive with zu: um … zu.',
    },
    {
      kind: 'gap',
      prompt: 'Ich schreibe dir die Adresse auf, ___ du sie nicht vergisst.',
      answers: ['damit'],
      hint: 'different subjects',
      explanation: 'ich ≠ du: damit.',
    },
    {
      kind: 'gap',
      prompt: 'Sie fährt nach Spanien, um ihre Freunde zu ___. (besuchen)',
      answers: ['besuchen'],
      hint: 'infinitive',
      explanation: 'zu + infinitive: zu besuchen.',
    },
    {
      kind: 'gap',
      prompt: 'Wir stehen um fünf auf, um den ersten Zug ___. (erreichen)',
      answers: ['zu erreichen'],
      hint: 'zu + infinitive',
      explanation: 'um … zu erreichen.',
    },
    {
      kind: 'gap',
      prompt: 'Er macht einen Kurs, um sich beruflich ___. (weiterbilden)',
      answers: ['weiterzubilden'],
      hint: 'separable verb',
      explanation: 'weiter|bilden → weiterzubilden.',
    },
    {
      kind: 'gap',
      prompt: 'Mach das Fenster zu, ___ die Katze nicht rausläuft.',
      answers: ['damit'],
      hint: 'different subjects',
      explanation: 'du (implied) ≠ die Katze: damit.',
    },
    {
      kind: 'gap',
      prompt: 'Ich brauche einen Schlüssel, um die Tür ___. (aufschließen)',
      answers: ['aufzuschließen'],
      hint: 'separable',
      explanation: 'auf|schließen → aufzuschließen.',
    },
    {
      kind: 'choice',
      prompt: 'Der Lehrer wiederholt die Regel, ___ alle sie verstehen.',
      options: ['um', 'damit', 'dass', 'weil'],
      answer: 1,
      explanation: 'Der Lehrer ≠ alle: damit.',
    },
    {
      kind: 'choice',
      prompt: 'Ich trinke Kaffee, ___.',
      options: ['um wach bleibe', 'um wach zu bleiben', 'damit wach zu bleiben', 'um ich wach bleibe'],
      answer: 1,
      explanation: 'Same subject: um + … + zu + infinitive.',
    },
    {
      kind: 'order',
      words: ['Ich', 'spare', 'Geld,', 'um', 'im', 'Sommer', 'nach', 'Japan', 'zu', 'fliegen.'],
      english: 'I am saving money to fly to Japan in the summer.',
      explanation: 'um at the start, zu + infinitive at the end.',
    },
    {
      kind: 'transform',
      instruction: 'Join with um … zu.',
      prompt: 'Ich lerne jeden Tag. Ich will die B1-Prüfung bestehen.',
      answers: ['Ich lerne jeden Tag, um die B1-Prüfung zu bestehen.'],
      explanation: 'Same subject; drop "will" and use um … zu bestehen.',
    },
    {
      kind: 'transform',
      instruction: 'Join with damit.',
      prompt: 'Ich gebe dir meine Nummer. Du kannst mich anrufen.',
      answers: ['Ich gebe dir meine Nummer, damit du mich anrufen kannst.'],
      explanation: 'Different subjects: damit + du … anrufen kannst.',
    },
  ],
}

export const infinitivMitZu: GrammarTopic = {
  id: 'infinitiv-mit-zu',
  title: 'Infinitiv mit zu',
  english: 'Infinitives with zu: "I try to…", "it is important to…"',
  level: 'B1',
  summary:
    'After many verbs, adjectives and nouns, German uses **zu + infinitive** at the end of the clause, much like English "to". Modal verbs (können, müssen, …) never take zu. Also: **ohne … zu** (without doing) and **(an)statt … zu** (instead of doing).',
  sections: [
    {
      heading: 'Where zu + infinitive appears',
      body: [
        'After verbs like **versuchen, vergessen, anfangen, aufhören, beschließen, vorhaben, sich freuen, hoffen, empfehlen, erlauben, bitten**.',
        'After **es ist + adjective**: es ist wichtig / schwer / schön / verboten, … zu …',
        'After nouns like **Lust, Zeit, Angst, Gelegenheit, Möglichkeit**: Ich habe keine Lust, heute zu kochen.',
      ],
      examples: [
        { de: 'Ich **versuche**, jeden Tag Deutsch **zu sprechen**.', en: 'I try to speak German every day.' },
        { de: '**Es ist wichtig**, regelmäßig **zu üben**.', en: 'It is important to practise regularly.' },
        { de: 'Hast du **Lust**, heute Abend ins Kino **zu gehen**?', en: 'Do you fancy going to the cinema tonight?' },
        { de: 'Vergiss nicht, die Tür **abzuschließen**.', en: "Don't forget to lock the door." },
      ],
    },
    {
      heading: 'ohne … zu and statt … zu',
      body: ['Both work like um … zu: same subject, zu + infinitive at the end.'],
      examples: [
        { de: 'Er ist gegangen, **ohne** sich **zu verabschieden**.', en: 'He left without saying goodbye.' },
        { de: '**Statt** zu lernen, hat sie den ganzen Tag gespielt.', en: 'Instead of studying, she played all day.' },
      ],
    },
    {
      heading: 'No zu',
      body: [
        'Never after **modal verbs**: Ich muss arbeiten (not *zu arbeiten*).',
        'Not after **werden, lassen, gehen, bleiben, sehen, hören** used with an infinitive: Ich gehe schwimmen. Ich höre ihn singen.',
        '**brauchen** in negative sentences does take zu: Du brauchst nicht **zu** kommen.',
      ],
    },
  ],
  mistakes: [
    { wrong: 'Ich muss zu arbeiten.', right: 'Ich muss arbeiten.', why: 'Modal verbs never take zu.' },
    {
      wrong: 'Ich habe vergessen, zu anrufen dich.',
      right: 'Ich habe vergessen, dich anzurufen.',
      why: 'zu + infinitive goes at the very end; separable verbs put zu inside.',
    },
    {
      wrong: 'Es ist schwer Deutsch zu lernen.',
      right: 'Es ist schwer, Deutsch zu lernen.',
      why: 'A comma before the infinitive group is recommended, especially when it has its own objects.',
    },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: 'Ich habe keine Zeit, dir ___. (helfen)',
      answers: ['zu helfen'],
      hint: 'zu + infinitive',
      explanation: 'keine Zeit, … zu helfen.',
    },
    {
      kind: 'gap',
      prompt: 'Es ist verboten, hier ___. (parken)',
      answers: ['zu parken'],
      hint: 'es ist + adjective',
      explanation: 'es ist verboten, … zu parken.',
    },
    {
      kind: 'gap',
      prompt: 'Hast du daran gedacht, die Heizung ___? (ausschalten)',
      answers: ['auszuschalten'],
      hint: 'separable',
      explanation: 'aus|schalten → auszuschalten.',
    },
    {
      kind: 'gap',
      prompt: 'Ich kann heute leider nicht ___. (kommen)',
      answers: ['kommen'],
      hint: 'modal verb!',
      explanation: 'After können: no zu.',
    },
    {
      kind: 'gap',
      prompt: 'Er hat aufgehört ___. (rauchen)',
      answers: ['zu rauchen'],
      hint: 'aufhören',
      explanation: 'aufhören + zu + infinitive.',
    },
    {
      kind: 'gap',
      prompt: 'Sie ging aus dem Haus, ___ einen Schirm mitzunehmen.',
      answers: ['ohne'],
      hint: 'without',
      explanation: 'ohne … zu: without taking an umbrella.',
    },
    {
      kind: 'gap',
      prompt: '___ mit dem Auto zu fahren, nehme ich das Rad.',
      answers: ['Statt', 'Anstatt'],
      hint: 'instead of',
      explanation: '(an)statt … zu: instead of driving.',
    },
    {
      kind: 'gap',
      prompt: 'Du brauchst nicht ___ warten. Ich komme später.',
      answers: ['zu'],
      hint: 'brauchen + nicht',
      explanation: 'nicht brauchen + zu + infinitive.',
    },
    {
      kind: 'choice',
      prompt: 'Ich freue mich darauf, dich bald ___.',
      options: ['sehen', 'zu sehen', 'zusehen', 'gesehen'],
      answer: 1,
      explanation: 'sich freuen darauf + zu + infinitive.',
    },
    {
      kind: 'choice',
      prompt: 'Wir gehen heute Abend ___.',
      options: ['tanzen', 'zu tanzen', 'getanzt', 'tanzt'],
      answer: 0,
      explanation: 'gehen + infinitive, no zu.',
    },
    {
      kind: 'order',
      words: ['Es', 'ist', 'nicht', 'leicht,', 'eine', 'Wohnung', 'in', 'München', 'zu', 'finden.'],
      english: 'It is not easy to find a flat in Munich.',
      explanation: 'The infinitive group comes after the comma, with zu + infinitive last.',
    },
    {
      kind: 'transform',
      instruction: 'Rewrite with ohne … zu.',
      prompt: 'Er hat den Vertrag unterschrieben. Er hat ihn nicht gelesen.',
      answers: ['Er hat den Vertrag unterschrieben, ohne ihn zu lesen.'],
      explanation: 'ohne + object + zu + infinitive. The negation disappears into ohne.',
    },
  ],
}

export const indirekteFragen: GrammarTopic = {
  id: 'indirekte-fragen',
  title: 'Indirekte Fragen',
  english: 'Indirect questions: "Do you know where…?", "I wonder if…"',
  level: 'B1',
  summary:
    'Indirect questions are subordinate clauses, so the verb goes to the **end**. W-questions keep their question word (wo, wann, warum…). Yes/no questions are introduced with **ob** ("whether, if"). They sound more polite than direct questions.',
  sections: [
    {
      heading: 'W-questions',
      body: ['Keep the question word; move the verb to the end.'],
      examples: [
        {
          de: 'Wo ist der Bahnhof? → Können Sie mir sagen, **wo** der Bahnhof **ist**?',
          en: 'Can you tell me where the station is?',
        },
        {
          de: 'Wann fängt der Kurs an? → Wissen Sie, **wann** der Kurs **anfängt**?',
          en: 'Do you know when the course starts?',
        },
      ],
    },
    {
      heading: 'Yes/no questions: ob',
      body: ['If the direct question has no question word, use **ob**. Never use *wenn* here.'],
      examples: [
        {
          de: 'Kommt er heute? → Ich weiß nicht, **ob** er heute **kommt**.',
          en: "I don't know if he's coming today.",
        },
        {
          de: 'Darf ich hier parken? → Ich frage mich, **ob** ich hier parken **darf**.',
          en: 'I wonder whether I may park here.',
        },
      ],
    },
    {
      heading: 'Useful openers',
      body: [
        'Können Sie mir sagen, … · Wissen Sie, … · Ich möchte wissen, … · Ich frage mich, … · Ich bin nicht sicher, … · Weißt du zufällig, …',
      ],
    },
  ],
  mistakes: [
    {
      wrong: 'Wissen Sie, wo ist die Post?',
      right: 'Wissen Sie, wo die Post ist?',
      why: 'Indirect question: verb at the end.',
    },
    {
      wrong: 'Ich weiß nicht, wenn er kommt.',
      right: 'Ich weiß nicht, ob er kommt.',
      why: 'Yes/no → ob. wenn means "if/when" in conditions.',
    },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: 'Weißt du, ___ der Supermarkt sonntags offen hat?',
      answers: ['ob'],
      hint: 'yes/no question',
      explanation: 'Hat der Supermarkt offen? → ob.',
    },
    {
      kind: 'gap',
      prompt: 'Können Sie mir sagen, ___ der nächste Bus fährt?',
      answers: ['wann'],
      hint: 'when',
      explanation: 'W-question: wann.',
    },
    {
      kind: 'gap',
      prompt: 'Ich habe keine Ahnung, ___ sie so wütend ist.',
      answers: ['warum', 'wieso', 'weshalb'],
      hint: 'why',
      explanation: 'W-question: warum.',
    },
    {
      kind: 'gap',
      prompt: 'Ich frage mich, ___ ich das Formular wirklich unterschreiben muss.',
      answers: ['ob'],
      hint: 'whether',
      explanation: 'Muss ich das unterschreiben? is a yes/no question → ob.',
    },
    {
      kind: 'gap',
      prompt: 'Wissen Sie, wie viel die Fahrkarte ___?',
      answers: ['kostet'],
      hint: 'kosten',
      explanation: 'Verb at the end: kostet.',
    },
    {
      kind: 'gap',
      prompt: 'Sag mir bitte, ob du morgen Zeit ___.',
      answers: ['hast'],
      hint: 'haben, du',
      explanation: 'Verb at the end: hast.',
    },
    {
      kind: 'choice',
      prompt: 'Können Sie mir sagen, wo ___?',
      options: ['ist die Toilette', 'die Toilette ist', 'ist Toilette', 'die Toilette sein'],
      answer: 1,
      explanation: 'Verb at the end of the indirect question.',
    },
    {
      kind: 'order',
      words: ['Ich', 'weiß', 'nicht,', 'ob', 'ich', 'am', 'Wochenende', 'arbeiten', 'muss.'],
      english: "I don't know whether I have to work at the weekend.",
      explanation: 'ob … conjugated verb (muss) last.',
    },
    {
      kind: 'transform',
      instruction: 'Make it an indirect question starting "Können Sie mir sagen, …".',
      prompt: 'Wo kann ich hier Fahrkarten kaufen?',
      answers: ['Können Sie mir sagen, wo ich hier Fahrkarten kaufen kann?'],
      explanation: 'wo + subject + … + kaufen kann.',
    },
    {
      kind: 'transform',
      instruction: 'Make it an indirect question starting "Weißt du, …".',
      prompt: 'Ist das Restaurant heute geöffnet?',
      answers: ['Weißt du, ob das Restaurant heute geöffnet ist?'],
      explanation: 'Yes/no question → ob; verb at the end.',
    },
  ],
}

export const zweiteiligeKonnektoren: GrammarTopic = {
  id: 'zweiteilige-konnektoren',
  title: 'Zweiteilige Konnektoren',
  english: 'Two-part connectors: both … and, neither … nor, the more … the more',
  level: 'B1',
  summary:
    'Pairs like **sowohl … als auch**, **weder … noch**, **entweder … oder**, **nicht nur … sondern auch**, **zwar … aber** and **je … desto** make writing sound more advanced. Most leave word order unchanged; **je … desto** has its own pattern.',
  sections: [
    {
      heading: 'The pairs',
      body: [],
      table: {
        head: ['Pair', 'Meaning', 'Example'],
        rows: [
          ['sowohl … als auch', 'both … and', 'Sie spricht **sowohl** Englisch **als auch** Spanisch.'],
          ['weder … noch', 'neither … nor', 'Ich habe **weder** Zeit **noch** Geld.'],
          ['entweder … oder', 'either … or', '**Entweder** wir fahren mit dem Zug **oder** wir fliegen.'],
          ['nicht nur … sondern auch', 'not only … but also', 'Er ist **nicht nur** klug, **sondern auch** witzig.'],
          ['zwar … aber', 'admittedly … but', 'Das Hotel ist **zwar** teuer, **aber** sehr schön.'],
          ['je … desto / umso', 'the … the', '**Je** mehr ich lese, **desto** besser verstehe ich.'],
        ],
      },
    },
    {
      heading: 'je … desto',
      body: [
        '**je** + comparative starts a subordinate clause (verb at the end). **desto** + comparative is followed by the verb.',
        'Pattern: Je + comparative + subject + … + verb, desto + comparative + verb + subject …',
      ],
      examples: [
        { de: 'Je **älter** man **wird**, desto **weiser wird** man.', en: 'The older you get, the wiser you become.' },
        {
          de: 'Je früher wir losfahren, desto weniger Stau gibt es.',
          en: 'The earlier we set off, the less traffic there is.',
        },
      ],
    },
    {
      heading: 'weder … noch replaces nicht',
      body: ["weder … noch is already negative. Don't add nicht or kein."],
    },
  ],
  mistakes: [
    {
      wrong: 'Ich habe weder keine Zeit noch kein Geld.',
      right: 'Ich habe weder Zeit noch Geld.',
      why: 'weder … noch already negates.',
    },
    {
      wrong: 'Je mehr ich lerne, desto ich verstehe besser.',
      right: 'Je mehr ich lerne, desto besser verstehe ich.',
      why: 'desto + comparative, then the verb.',
    },
    {
      wrong: 'sowohl Englisch und Spanisch',
      right: 'sowohl Englisch als auch Spanisch',
      why: 'sowohl pairs with als auch.',
    },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: 'Ich trinke weder Kaffee ___ Tee.',
      answers: ['noch'],
      hint: 'neither … nor',
      explanation: 'weder … noch.',
    },
    {
      kind: 'gap',
      prompt: 'Sie kann sowohl Klavier ___ Gitarre spielen.',
      answers: ['als auch'],
      hint: 'both … and',
      explanation: 'sowohl … als auch.',
    },
    {
      kind: 'gap',
      prompt: '___ du kommst mit, oder du bleibst zu Hause.',
      answers: ['Entweder'],
      hint: 'either … or',
      explanation: 'entweder … oder.',
    },
    {
      kind: 'gap',
      prompt: 'Die Wohnung ist nicht nur groß, ___ auch günstig.',
      answers: ['sondern'],
      hint: 'not only … but also',
      explanation: 'nicht nur … sondern auch.',
    },
    {
      kind: 'gap',
      prompt: 'Der Film war ___ lang, aber sehr spannend.',
      answers: ['zwar'],
      hint: 'admittedly … but',
      explanation: 'zwar … aber.',
    },
    {
      kind: 'gap',
      prompt: 'Je länger ich in Berlin wohne, ___ besser gefällt es mir.',
      answers: ['desto', 'umso'],
      hint: 'the … the',
      explanation: 'je … desto (or umso).',
    },
    {
      kind: 'gap',
      prompt: 'Je mehr man übt, desto ___ wird man. (gut)',
      answers: ['besser'],
      hint: 'comparative',
      explanation: 'desto + comparative: besser.',
    },
    {
      kind: 'choice',
      prompt: 'Je früher du anfängst, ___.',
      options: [
        'desto du bist schneller fertig',
        'desto schneller bist du fertig',
        'desto schneller du fertig bist',
        'schneller desto bist du fertig',
      ],
      answer: 1,
      explanation: 'desto + comparative + verb + subject.',
    },
    {
      kind: 'order',
      words: ['Ich', 'habe', 'weder', 'Hunger', 'noch', 'Durst.'],
      english: 'I am neither hungry nor thirsty.',
      explanation: 'weder and noch go before each item.',
    },
    {
      kind: 'transform',
      instruction: 'Combine with sowohl … als auch.',
      prompt: 'Mein Bruder spielt Fußball. Er spielt auch Tennis.',
      answers: ['Mein Bruder spielt sowohl Fußball als auch Tennis.'],
      explanation: 'sowohl before the first item, als auch before the second.',
    },
    {
      kind: 'transform',
      instruction: 'Combine with je … desto.',
      prompt: 'Ich schlafe wenig. Ich bin müde. (wenig → weniger, müde → müder)',
      answers: ['Je weniger ich schlafe, desto müder bin ich.', 'Je weniger ich schlafe, umso müder bin ich.'],
      explanation: 'Je + comparative + … + verb last, desto + comparative + verb + subject.',
    },
  ],
}
