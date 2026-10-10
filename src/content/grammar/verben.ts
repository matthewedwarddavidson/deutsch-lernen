import type { GrammarTopic } from '../types'

export const reflexiveVerben: GrammarTopic = {
  id: 'reflexive-verben',
  title: 'Reflexive Verben',
  english: 'Reflexive verbs: sich freuen, sich waschen, sich etwas wünschen',
  level: 'A2',
  summary:
    'Reflexive verbs take a pronoun that refers back to the subject. Usually it is **Akkusativ** (ich freue **mich**). If the sentence already has an Akkusativ object, the reflexive pronoun becomes **Dativ** (ich wasche **mir** die Hände). Only ich and du change: mich/mir, dich/dir.',
  sections: [
    {
      heading: 'Pronouns',
      body: [],
      table: {
        head: ['', 'Akkusativ', 'Dativ'],
        rows: [
          ['ich', 'mich', 'mir'],
          ['du', 'dich', 'dir'],
          ['er/sie/es', 'sich', 'sich'],
          ['wir', 'uns', 'uns'],
          ['ihr', 'euch', 'euch'],
          ['sie/Sie', 'sich', 'sich'],
        ],
      },
      examples: [
        { de: 'Ich **ziehe mich** an.', en: 'I get dressed.' },
        { de: 'Ich **ziehe mir** eine Jacke an.', en: 'I put a jacket on. (eine Jacke is the Akkusativ object)' },
        { de: 'Ich **wünsche mir** ein Fahrrad.', en: 'I would like a bike (as a present).' },
      ],
    },
    {
      heading: 'Position',
      body: [
        'The reflexive pronoun comes as early as possible after the verb, and before most other parts of the Mittelfeld.',
        'In a subordinate clause: …, weil ich **mich** sehr auf die Reise freue.',
      ],
    },
  ],
  mistakes: [
    {
      wrong: 'Ich freue auf das Wochenende.',
      right: 'Ich freue mich auf das Wochenende.',
      why: 'sich freuen is reflexive.',
    },
    {
      wrong: 'Ich wasche mich die Hände.',
      right: 'Ich wasche mir die Hände.',
      why: 'die Hände is the Akkusativ object, so the pronoun is Dativ.',
    },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: 'Ich interessiere ___ für Musik.',
      answers: ['mich'],
      hint: 'ich, Akkusativ',
      explanation: 'No other object: Akkusativ mich.',
    },
    {
      kind: 'gap',
      prompt: 'Hast du ___ schon die Zähne geputzt?',
      answers: ['dir'],
      hint: 'die Zähne = Akk object',
      explanation: 'Akkusativ object present: Dativ dir.',
    },
    {
      kind: 'gap',
      prompt: 'Wir treffen ___ um acht vor dem Kino.',
      answers: ['uns'],
      hint: 'wir',
      explanation: 'wir → uns.',
    },
    {
      kind: 'gap',
      prompt: 'Er hat ___ beim Sport verletzt.',
      answers: ['sich'],
      hint: 'er',
      explanation: 'er → sich.',
    },
    {
      kind: 'gap',
      prompt: 'Ich kaufe ___ einen neuen Laptop.',
      answers: ['mir'],
      hint: 'einen Laptop = Akk',
      explanation: 'Akkusativ object present: Dativ mir.',
    },
    {
      kind: 'gap',
      prompt: 'Beeilt ___, der Film fängt gleich an!',
      answers: ['euch'],
      hint: 'ihr (imperative)',
      explanation: 'ihr → euch.',
    },
    {
      kind: 'gap',
      prompt: 'Kannst du ___ vorstellen, in Japan zu leben?',
      answers: ['dir'],
      hint: 'sich etwas vorstellen',
      explanation: 'sich (D) etwas vorstellen: dir.',
    },
    {
      kind: 'choice',
      prompt: 'Ich ziehe ___ schnell um und komme dann.',
      options: ['mir', 'mich', 'sich', 'mein'],
      answer: 1,
      explanation: 'sich umziehen with no other object: Akkusativ mich.',
    },
    {
      kind: 'order',
      words: ['Ich', 'freue', 'mich', 'sehr', 'auf', 'die', 'Ferien.'],
      english: 'I am really looking forward to the holidays.',
      explanation: 'Reflexive pronoun directly after the verb.',
    },
  ],
}

export const komparativ: GrammarTopic = {
  id: 'komparativ',
  title: 'Komparativ und Superlativ',
  english: 'Comparing: bigger, the biggest, as … as',
  level: 'A2',
  summary:
    'Comparative: adjective + **-er** (+ **als**). Superlative: **am** + adjective + **-sten**, or before a noun der/die/das + **-ste**. Many short adjectives add an umlaut: alt → **ä**lter, groß → **grö**ßer. Equality: **so … wie**.',
  sections: [
    {
      heading: 'Forms',
      body: [],
      table: {
        head: ['Positiv', 'Komparativ', 'Superlativ'],
        rows: [
          ['schnell', 'schnell**er**', 'am schnell**sten**'],
          ['alt', '**ä**lt**er**', 'am **ä**lt**esten**'],
          ['groß', 'gr**ö**ß**er**', 'am gr**ö**ß**ten**'],
          ['gut', '**besser**', 'am **besten**'],
          ['viel', '**mehr**', 'am **meisten**'],
          ['gern', '**lieber**', 'am **liebsten**'],
          ['hoch', '**höher**', 'am **höchsten**'],
          ['nah', '**näher**', 'am **nächsten**'],
        ],
      },
    },
    {
      heading: 'als and wie',
      body: ['Different: comparative + **als**. Same: **so** + adjective + **wie**.'],
      examples: [
        { de: 'Berlin ist größer **als** München.', en: 'Berlin is bigger than Munich.' },
        { de: 'Ich bin **so** alt **wie** du.', en: 'I am as old as you.' },
        { de: 'Das ist **der höchste** Berg Deutschlands.', en: 'That is the highest mountain in Germany.' },
      ],
    },
  ],
  mistakes: [
    {
      wrong: 'Er ist größer wie ich.',
      right: 'Er ist größer als ich.',
      why: 'Comparative + als (wie is for equality).',
    },
    { wrong: 'mehr gut', right: 'besser', why: 'German never builds comparatives with mehr + adjective.' },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: 'Mein Bruder ist zwei Jahre ___ als ich. (alt)',
      answers: ['älter'],
      hint: 'umlaut',
      explanation: 'alt → älter.',
    },
    {
      kind: 'gap',
      prompt: 'Ich trinke ___ Tee als Kaffee. (gern)',
      answers: ['lieber'],
      hint: 'irregular',
      explanation: 'gern → lieber.',
    },
    {
      kind: 'gap',
      prompt: 'Im Winter ist es hier ___ kalt wie in Schottland.',
      answers: ['so'],
      hint: 'equality',
      explanation: 'so … wie.',
    },
    {
      kind: 'gap',
      prompt: 'Dieser Kuchen schmeckt am ___. (gut)',
      answers: ['besten'],
      hint: 'irregular superlative',
      explanation: 'gut → am besten.',
    },
    {
      kind: 'gap',
      prompt: 'Die Zugspitze ist der ___ Berg Deutschlands. (hoch)',
      answers: ['höchste'],
      hint: 'superlative before a noun',
      explanation: 'hoch → der höchste Berg.',
    },
    {
      kind: 'gap',
      prompt: 'Heute ist es wärmer ___ gestern.',
      answers: ['als'],
      hint: 'comparison',
      explanation: 'Comparative + als.',
    },
    {
      kind: 'choice',
      prompt: 'Wer hat ___ Geld, du oder ich?',
      options: ['mehr', 'vieler', 'meist', 'mehrere'],
      answer: 0,
      explanation: 'viel → mehr.',
    },
    {
      kind: 'transform',
      instruction: 'Rewrite with a comparative.',
      prompt: 'Das Auto ist schnell. Das Fahrrad ist nicht so schnell.',
      answers: ['Das Auto ist schneller als das Fahrrad.'],
      explanation: 'schneller als.',
    },
  ],
}

export const futur: GrammarTopic = {
  id: 'futur',
  title: 'Futur I',
  english: 'The future with werden: plans, promises and guesses',
  level: 'B1',
  summary:
    'German usually uses the **present tense** for the future when a time word makes it clear: *Morgen fahre ich nach Köln.* The **Futur I** (werden + infinitive) is used for promises and firm intentions, for predictions, and very often for **guesses about the present**: *Er wird wohl krank sein.*',
  sections: [
    {
      heading: 'Form',
      body: ['**werden** (conjugated) + infinitive at the end. In subordinate clauses werden goes last.'],
      table: {
        head: ['', 'werden', ''],
        rows: [
          ['ich', 'werde', 'ich werde kommen'],
          ['du', 'wirst', 'du wirst sehen'],
          ['er/sie/es', 'wird', 'es wird regnen'],
          ['wir', 'werden', 'wir werden es schaffen'],
          ['ihr', 'werdet', 'ihr werdet staunen'],
          ['sie/Sie', 'werden', 'sie werden anrufen'],
        ],
      },
    },
    {
      heading: 'Uses',
      body: [],
      examples: [
        {
          de: 'Ich **werde** ab morgen weniger Zucker **essen**.',
          en: 'I will eat less sugar from tomorrow. (resolution)',
        },
        {
          de: 'Keine Sorge, ich **werde** dich nicht **vergessen**.',
          en: "Don't worry, I won't forget you. (promise)",
        },
        {
          de: 'Bis 2050 **wird** sich das Klima stark **verändern**.',
          en: 'By 2050 the climate will change considerably. (prediction)',
        },
        {
          de: 'Sie geht nicht ans Telefon. Sie **wird** wohl noch **schlafen**.',
          en: "She isn't answering. She's probably still asleep. (guess about now)",
        },
      ],
    },
  ],
  mistakes: [
    {
      wrong: 'Ich will morgen nach Köln fahren. (for plain future)',
      right: 'Ich fahre morgen nach Köln.',
      why: 'wollen means "want to", not "will".',
    },
    {
      wrong: 'Ich werde morgen kommen werden.',
      right: 'Ich werde morgen kommen.',
      why: 'Only one werden, then the infinitive.',
    },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: 'Ich ___ dir morgen das Geld zurückgeben. Versprochen!',
      answers: ['werde'],
      hint: 'werden, ich',
      explanation: 'Promise: ich werde + infinitive.',
    },
    {
      kind: 'gap',
      prompt: 'Es ___ heute Abend bestimmt regnen.',
      answers: ['wird'],
      hint: 'werden, es',
      explanation: 'es wird regnen.',
    },
    {
      kind: 'gap',
      prompt: 'Du ___ sehen, das klappt schon!',
      answers: ['wirst'],
      hint: 'werden, du',
      explanation: 'du wirst.',
    },
    {
      kind: 'gap',
      prompt: 'Tom ist nicht da. Er wird wohl im Büro ___.',
      answers: ['sein'],
      hint: 'guess about now',
      explanation: 'Futur I for a guess: wird … sein.',
    },
    {
      kind: 'gap',
      prompt: 'Ich glaube, dass wir den Zug nicht mehr erreichen ___.',
      answers: ['werden'],
      hint: 'subordinate clause',
      explanation: 'werden goes to the end in a dass-clause.',
    },
    {
      kind: 'choice',
      prompt: 'Which sentence is a guess about the present?',
      options: ['Er wird Arzt.', 'Er wird nächstes Jahr 30.', 'Er wird wohl beim Arzt sein.', 'Er wurde Arzt.'],
      answer: 2,
      explanation: 'wird + wohl + infinitive = probably is. (Er wird Arzt = he is becoming a doctor.)',
    },
    {
      kind: 'transform',
      instruction: 'Rewrite as a promise in the Futur I.',
      prompt: 'Ich rufe dich an.',
      answers: ['Ich werde dich anrufen.'],
      explanation: 'werde + anrufen at the end.',
    },
  ],
}

export const lassen: GrammarTopic = {
  id: 'lassen',
  title: 'lassen',
  english: 'lassen: have something done, let, leave',
  level: 'B1',
  summary:
    '**lassen** + infinitive means having someone else do something (*Ich lasse mein Auto reparieren* = I am having my car repaired) or allowing it (*Lass mich schlafen!* = Let me sleep). On its own it means "leave": *Ich habe den Schlüssel zu Hause gelassen.*',
  sections: [
    {
      heading: 'Forms',
      body: [
        'Present: ich lasse, du **lässt**, er **lässt**, wir lassen, ihr lasst, sie lassen.',
        'Präteritum: ließ. Perfekt with another infinitive: **hat … reparieren lassen** (double infinitive, not *gelassen*).',
      ],
      examples: [
        { de: 'Ich **lasse** mir die Haare **schneiden**.', en: "I'm having my hair cut." },
        { de: 'Wir **haben** die Küche **renovieren lassen**.', en: 'We had the kitchen renovated.' },
        { de: 'Meine Eltern **ließen** mich nie lange **ausgehen**.', en: 'My parents never let me stay out late.' },
        { de: '**Lass** das!', en: 'Stop that! / Leave it!' },
      ],
    },
    {
      heading: 'sich lassen = can be done',
      body: [
        "**sich lassen** + infinitive is an alternative to the passive with können: *Das Fenster lässt sich nicht öffnen* = The window can't be opened.",
      ],
    },
  ],
  mistakes: [
    {
      wrong: 'Ich habe mein Auto reparieren gelassen.',
      right: 'Ich habe mein Auto reparieren lassen.',
      why: 'With another infinitive, the Perfekt uses lassen, not gelassen.',
    },
    {
      wrong: 'Ich repariere mein Auto (when a mechanic does it)',
      right: 'Ich lasse mein Auto reparieren.',
      why: 'lassen shows someone else does the work.',
    },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: 'Ich ___ meine Jacke reinigen.',
      answers: ['lasse'],
      hint: 'ich',
      explanation: 'ich lasse + infinitive.',
    },
    {
      kind: 'gap',
      prompt: 'Er ___ sich jeden Monat die Haare schneiden.',
      answers: ['lässt'],
      hint: 'er, umlaut',
      explanation: 'er lässt.',
    },
    {
      kind: 'gap',
      prompt: 'Wir haben das Dach reparieren ___.',
      answers: ['lassen'],
      hint: 'Perfekt, double infinitive',
      explanation: 'haben … reparieren lassen.',
    },
    {
      kind: 'gap',
      prompt: '___ mich bitte in Ruhe!',
      answers: ['Lass'],
      hint: 'imperative, du',
      explanation: 'Imperative: Lass!',
    },
    {
      kind: 'gap',
      prompt: 'Ich habe meinen Regenschirm im Zug ___.',
      answers: ['gelassen', 'liegen lassen'],
      hint: 'left (no other infinitive)',
      explanation: 'Without another infinitive: gelassen (or liegen lassen).',
    },
    {
      kind: 'gap',
      prompt: 'Die Tür ___ sich nicht schließen.',
      answers: ['lässt'],
      hint: 'sich lassen = can be',
      explanation: 'sich lassen + infinitive = can be closed.',
    },
    {
      kind: 'choice',
      prompt: 'Sie hat ihren Laptop ___.',
      options: ['reparieren gelassen', 'reparieren lassen', 'gelassen reparieren', 'reparieren lässt'],
      answer: 1,
      explanation: 'Double infinitive: reparieren lassen.',
    },
    {
      kind: 'transform',
      instruction: 'Rewrite with lassen: someone else does it.',
      prompt: 'Ein Mechaniker repariert mein Auto.',
      answers: ['Ich lasse mein Auto reparieren.'],
      explanation: 'Subject is the person who arranges it: Ich lasse … reparieren.',
    },
  ],
}

export const satzbau: GrammarTopic = {
  id: 'satzbau',
  title: 'Satzbau im Mittelfeld',
  english: 'Word order in the middle of the sentence: time, cause, manner, place; pronouns before nouns',
  level: 'B1',
  summary:
    'Between the verb and the end of the clause (the Mittelfeld) German has a typical order: **pronouns first**, then **Te-Ka-Mo-Lo**: temporal (when), kausal (why), modal (how), lokal (where). For two objects: **Dativ before Akkusativ** if both are nouns, but **Akkusativ pronoun before Dativ**.',
  sections: [
    {
      heading: 'TeKaMoLo',
      body: [
        'A guideline, not a law: you can move one element to the front for emphasis, but the default order sounds most natural.',
      ],
      examples: [
        {
          de: 'Ich fahre **morgen** (Te) **wegen eines Termins** (Ka) **mit dem Zug** (Mo) **nach Berlin** (Lo).',
          en: "Tomorrow I'm going to Berlin by train because of an appointment.",
        },
      ],
    },
    {
      heading: 'Two objects',
      body: [
        'Two nouns: **Dativ before Akkusativ**: Ich gebe **dem Kind** **den Ball**.',
        'One pronoun: **pronoun first**: Ich gebe **ihn** dem Kind. / Ich gebe **ihm** den Ball.',
        'Two pronouns: **Akkusativ before Dativ**: Ich gebe **ihn ihm**.',
      ],
    },
    {
      heading: 'nicht',
      body: [
        '**nicht** negating the whole sentence goes late, after objects and time, but before manner, place and the verb parts at the end: Ich habe das Buch gestern **nicht** gelesen.',
        'To negate one element, put nicht right before it: Ich fahre **nicht** heute, sondern morgen.',
      ],
    },
  ],
  mistakes: [
    { wrong: 'Ich gebe dem Kind ihn.', right: 'Ich gebe ihn dem Kind.', why: 'Pronouns come before nouns.' },
    { wrong: 'Ich fahre nach Berlin morgen.', right: 'Ich fahre morgen nach Berlin.', why: 'Time before place.' },
  ],
  exercises: [
    {
      kind: 'order',
      words: ['Ich', 'fahre', 'morgen', 'mit', 'dem', 'Rad', 'zur', 'Arbeit.'],
      english: 'Tomorrow I am cycling to work.',
      explanation: 'Time (morgen) – manner (mit dem Rad) – place (zur Arbeit).',
    },
    {
      kind: 'order',
      words: ['Sie', 'hat', 'ihrer', 'Mutter', 'einen', 'Brief', 'geschrieben.'],
      english: 'She wrote her mother a letter.',
      explanation: 'Two nouns: Dativ (ihrer Mutter) before Akkusativ (einen Brief).',
    },
    {
      kind: 'order',
      words: ['Kannst', 'du', 'es', 'mir', 'erklären?'],
      english: 'Can you explain it to me?',
      explanation: 'Two pronouns: Akkusativ (es) before Dativ (mir).',
    },
    {
      kind: 'order',
      words: ['Wir', 'sind', 'gestern', 'wegen', 'des', 'Regens', 'zu', 'Hause', 'geblieben.'],
      english: 'We stayed at home yesterday because of the rain.',
      explanation: 'Te (gestern) – Ka (wegen des Regens) – Lo (zu Hause).',
    },
    {
      kind: 'order',
      words: ['Ich', 'habe', 'den', 'Film', 'noch', 'nicht', 'gesehen.'],
      english: "I haven't seen the film yet.",
      explanation: 'nicht after the object, before the participle.',
    },
    {
      kind: 'choice',
      prompt: 'Gibst du mir das Buch? – Ja, ich gebe ___.',
      options: ['dir es', 'es dir', 'dir das', 'es du'],
      answer: 1,
      explanation: 'Two pronouns: Akkusativ (es) before Dativ (dir).',
    },
    {
      kind: 'choice',
      prompt: 'Which order sounds most natural?',
      options: [
        'Ich treffe in der Stadt heute meine Freunde.',
        'Ich treffe heute meine Freunde in der Stadt.',
        'Ich treffe meine Freunde in der Stadt heute.',
        'Heute ich treffe meine Freunde in der Stadt.',
      ],
      answer: 1,
      explanation: 'Time before object, place towards the end.',
    },
  ],
}

export const modalverben: GrammarTopic = {
  id: 'modalverben',
  title: 'Modalverben',
  english: 'Modal verbs: können, müssen, dürfen, sollen, wollen, mögen/möchten',
  level: 'A2',
  summary:
    'Modal verbs take a bare infinitive at the end of the clause. Watch the false friends: **müssen nicht** = don\'t have to (not "mustn\'t"; that is **nicht dürfen**), and **wollen** = want, not "will".',
  sections: [
    {
      heading: 'Meanings',
      body: [],
      table: {
        head: ['Verb', 'Meaning', 'Example'],
        rows: [
          ['können', 'can, be able to', 'Ich **kann** gut kochen.'],
          ['müssen', 'must, have to', 'Ich **muss** morgen früh aufstehen.'],
          ['nicht müssen', "don't have to", 'Du **musst nicht** kommen.'],
          ['dürfen', 'may, be allowed to', 'Hier **darf** man parken.'],
          ['nicht dürfen', "mustn't", 'Hier **darf** man **nicht** rauchen.'],
          ['sollen', 'should, be supposed to', 'Der Arzt sagt, ich **soll** mehr schlafen.'],
          ['wollen', 'want to', 'Ich **will** nächstes Jahr nach Kanada.'],
          ['möchten', 'would like to', 'Ich **möchte** einen Kaffee.'],
        ],
      },
    },
    {
      heading: 'Präteritum and Perfekt',
      body: [
        'Use the Präteritum for modal verbs in the past, even in speech: ich konnte, musste, durfte, sollte, wollte, mochte.',
        'With another verb, the Perfekt uses a double infinitive: Ich habe gestern arbeiten **müssen**. The Präteritum is simpler: Ich **musste** gestern arbeiten.',
      ],
    },
  ],
  mistakes: [
    {
      wrong: "Du musst nicht rauchen hier. (meaning: it's forbidden)",
      right: 'Du darfst hier nicht rauchen.',
      why: "mustn't = nicht dürfen.",
    },
    {
      wrong: 'Ich will dich morgen anrufen. (meaning: I will)',
      right: 'Ich rufe dich morgen an.',
      why: 'wollen expresses wanting; future is usually the present tense.',
    },
    { wrong: 'Ich kann zu schwimmen.', right: 'Ich kann schwimmen.', why: 'No zu after modal verbs.' },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: 'Im Museum ___ man nicht fotografieren.',
      answers: ['darf'],
      hint: 'forbidden',
      explanation: 'Prohibition: nicht dürfen.',
    },
    {
      kind: 'gap',
      prompt: 'Du ___ nicht kommen, wenn du keine Zeit hast.',
      answers: ['musst'],
      hint: 'not necessary',
      explanation: "nicht müssen = don't have to.",
    },
    {
      kind: 'gap',
      prompt: 'Als Kind ___ ich nicht schwimmen. (können, Präteritum)',
      answers: ['konnte'],
      hint: 'Präteritum',
      explanation: 'können → konnte.',
    },
    {
      kind: 'gap',
      prompt: 'Meine Ärztin sagt, ich ___ weniger Kaffee trinken.',
      answers: ['soll'],
      hint: "someone else's advice",
      explanation: 'sollen reports advice or instructions from someone else.',
    },
    {
      kind: 'gap',
      prompt: 'Gestern ___ ich lange arbeiten. (müssen, Präteritum)',
      answers: ['musste'],
      hint: 'Präteritum',
      explanation: 'müssen → musste.',
    },
    {
      kind: 'gap',
      prompt: '___ Sie noch etwas trinken? (polite offer)',
      answers: ['Möchten'],
      hint: 'would like',
      explanation: 'Polite: Möchten Sie …?',
    },
    {
      kind: 'choice',
      prompt: 'Ich habe gestern nicht kommen ___.',
      options: ['gekonnt', 'können', 'konnte', 'zu können'],
      answer: 1,
      explanation: 'Perfekt with another verb: double infinitive (kommen können).',
    },
  ],
}
