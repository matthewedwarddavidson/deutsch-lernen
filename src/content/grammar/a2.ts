import type { GrammarTopic } from '../types'

export const nebensaetzeA2: GrammarTopic = {
  id: 'nebensaetze-a2',
  title: 'Nebensätze mit weil, dass und wenn',
  english: 'Your first subordinate clauses: the verb goes to the end',
  level: 'A2',
  summary:
    'After **weil** (because), **dass** (that) and **wenn** (if, when) the conjugated verb goes to the **end** of the clause, after a comma: Ich bleibe zu Hause, weil ich krank **bin**. **denn** also means because, but keeps normal word order: …, denn ich **bin** krank.',
  sections: [
    {
      heading: 'Verb to the end',
      body: [
        'The main clause is normal. The subordinate clause starts with weil, dass or wenn, and its conjugated verb moves to the very end.',
        'With a separable verb the prefix joins up again: …, weil ich früh **aufstehe**. With a modal verb, the modal goes last: …, weil ich arbeiten **muss**.',
      ],
      table: {
        head: ['Main clause', 'Conjunction', 'Middle', 'Verb'],
        rows: [
          ['Ich lerne Deutsch,', 'weil', 'ich in Berlin', 'wohne.'],
          ['Ich glaube,', 'dass', 'der Bus gleich', 'kommt.'],
          ['Ich komme mit,', 'wenn', 'ich Zeit', 'habe.'],
        ],
      },
      examples: [
        { de: 'Er ist müde, weil er schlecht geschlafen **hat**.', en: "He's tired because he slept badly." },
        { de: 'Ich weiß, dass du recht **hast**.', en: "I know that you're right." },
      ],
    },
    {
      heading: 'weil, denn or deshalb?',
      body: [
        '**weil** + verb at the end. **denn** + normal order (verb second). Both mean because.',
        "**deshalb** (so, that's why) starts a main clause, so the verb comes straight after it: Ich bin krank, deshalb **bleibe** ich zu Hause.",
      ],
      examples: [
        { de: 'Ich bleibe zu Hause, **weil** ich krank bin.', en: "I'm staying at home because I'm ill." },
        { de: 'Ich bleibe zu Hause, **denn** ich bin krank.', en: "I'm staying at home, because I'm ill." },
        { de: 'Ich bin krank, **deshalb** bleibe ich zu Hause.', en: "I'm ill, so I'm staying at home." },
      ],
    },
  ],
  mistakes: [
    {
      wrong: 'Ich lerne Deutsch, weil ich wohne in Berlin.',
      right: 'Ich lerne Deutsch, weil ich in Berlin wohne.',
      why: 'After weil the verb goes to the end.',
    },
    {
      wrong: 'Ich bin krank, deshalb ich bleibe zu Hause.',
      right: 'Ich bin krank, deshalb bleibe ich zu Hause.',
      why: 'deshalb takes position 1, so the verb comes next.',
    },
    {
      wrong: 'Ich denke dass er kommt.',
      right: 'Ich denke, dass er kommt.',
      why: 'German always puts a comma before dass, weil and wenn.',
    },
  ],
  exercises: [
    {
      kind: 'order',
      words: ['Ich', 'gehe', 'nicht', 'mit,', 'weil', 'ich', 'keine', 'Zeit', 'habe.'],
      english: "I'm not coming because I don't have time.",
      explanation: 'weil sends habe to the end.',
    },
    {
      kind: 'order',
      words: ['Ich', 'hoffe,', 'dass', 'du', 'bald', 'kommst.'],
      english: "I hope that you'll come soon.",
      explanation: 'dass sends kommst to the end.',
    },
    {
      kind: 'order',
      words: ['Wenn', 'es', 'regnet,', 'bleiben', 'wir', 'zu', 'Hause.'],
      alternatives: ['Wir bleiben zu Hause, wenn es regnet.'],
      english: "If it rains, we'll stay at home.",
      explanation:
        'When the wenn clause comes first, it counts as position 1, so the main verb (bleiben) follows straight after the comma.',
    },
    {
      kind: 'gap',
      prompt: 'Ich lerne Deutsch, weil ich in Wien ___. (arbeiten)',
      answers: ['arbeite'],
      explanation: 'Verb at the end after weil.',
    },
    {
      kind: 'gap',
      prompt: 'Ich finde, dass das Essen sehr gut ___. (schmecken)',
      answers: ['schmeckt'],
      explanation: 'Verb at the end after dass.',
    },
    {
      kind: 'gap',
      prompt: 'Er kommt nicht, weil er arbeiten ___. (müssen)',
      answers: ['muss'],
      explanation: 'The modal verb goes last.',
    },
    {
      kind: 'gap',
      prompt: 'Ich bin müde, weil ich um fünf ___. (aufstehen)',
      answers: ['aufstehe', 'aufgestanden bin'],
      explanation: 'The separable verb joins up again at the end: aufstehe.',
    },
    {
      kind: 'choice',
      prompt: 'Ich trinke Tee, ___ ich mag keinen Kaffee.',
      options: ['weil', 'denn', 'dass'],
      answer: 1,
      explanation: 'The verb (mag) is second, so denn.',
    },
    {
      kind: 'choice',
      prompt: 'Es ist sehr kalt, ___ trage ich eine Mütze.',
      options: ['weil', 'deshalb', 'dass'],
      answer: 1,
      explanation: 'The verb (trage) comes straight after, so deshalb.',
    },
    {
      kind: 'transform',
      instruction: 'Join the sentences with weil.',
      prompt: 'Ich gehe zum Arzt. Ich habe Fieber.',
      answers: ['Ich gehe zum Arzt, weil ich Fieber habe.'],
      explanation: 'weil + verb at the end: …, weil ich Fieber habe.',
    },
  ],
}

export const praeteritumA2: GrammarTopic = {
  id: 'praeteritum-a2',
  title: 'war, hatte und Modalverben',
  english: 'The past of sein, haben and modal verbs',
  level: 'A2',
  summary:
    'For most verbs, spoken German uses the Perfekt. But **sein**, **haben** and the **modal verbs** almost always use the Präteritum, even in speech: Ich **war** krank. Wir **hatten** keine Zeit. Ich **musste** arbeiten. Note that ich and er/sie/es have the same form, with no ending.',
  sections: [
    {
      heading: 'sein and haben',
      body: ['These two are used constantly. ich and er/sie/es look the same.'],
      table: {
        head: ['', 'sein', 'haben'],
        rows: [
          ['ich', 'war', 'hatte'],
          ['du', 'warst', 'hattest'],
          ['er / sie / es', 'war', 'hatte'],
          ['wir', 'waren', 'hatten'],
          ['ihr', 'wart', 'hattet'],
          ['sie / Sie', 'waren', 'hatten'],
        ],
      },
      examples: [
        { de: 'Gestern **war** ich im Kino.', en: 'I was at the cinema yesterday.' },
        { de: '**Hattest** du einen schönen Urlaub?', en: 'Did you have a nice holiday?' },
      ],
    },
    {
      heading: 'Modal verbs',
      body: [
        'Modal verbs add **-te** to the stem and drop the umlaut: können → konn**te**, müssen → muss**te**, dürfen → durf**te**, wollen → woll**te**, sollen → soll**te**.',
        'möchten has no past of its own: use **wollte**.',
      ],
      table: {
        head: ['', 'können', 'müssen', 'wollen'],
        rows: [
          ['ich', 'konnte', 'musste', 'wollte'],
          ['du', 'konntest', 'musstest', 'wolltest'],
          ['er / sie / es', 'konnte', 'musste', 'wollte'],
          ['wir', 'konnten', 'mussten', 'wollten'],
        ],
      },
      examples: [
        { de: 'Ich **konnte** nicht kommen, ich **musste** arbeiten.', en: "I couldn't come; I had to work." },
        { de: 'Als Kind **wollte** ich Pilot werden.', en: 'As a child I wanted to be a pilot.' },
      ],
    },
  ],
  mistakes: [
    {
      wrong: 'Ich habe krank gewesen.',
      right: 'Ich war krank.',
      why: 'In everyday speech use war, not the Perfekt of sein (and that would be ich bin … gewesen).',
    },
    { wrong: 'Er warte zu Hause.', right: 'Er war zu Hause.', why: 'sein: er war.' },
    {
      wrong: 'Ich musste gestern zum Arzt gehen gemusst.',
      right: 'Ich musste gestern zum Arzt gehen.',
      why: 'The modal in the Präteritum plus an infinitive at the end.',
    },
    {
      wrong: 'Ich könnte nicht kommen.',
      right: 'Ich konnte nicht kommen.',
      why: 'No umlaut in the past: konnte. (könnte means "could", a possibility.)',
    },
  ],
  exercises: [
    { kind: 'gap', prompt: 'Gestern ___ ich krank. (sein)', answers: ['war'], explanation: 'sein, ich: war.' },
    { kind: 'gap', prompt: 'Wo ___ du am Wochenende? (sein)', answers: ['warst'], explanation: 'sein, du: warst.' },
    { kind: 'gap', prompt: 'Wir ___ keine Zeit. (haben)', answers: ['hatten'], explanation: 'haben, wir: hatten.' },
    { kind: 'gap', prompt: 'Das Wetter ___ schön. (sein)', answers: ['war'], explanation: 'sein, es: war.' },
    { kind: 'gap', prompt: '___ ihr Glück? (haben)', answers: ['Hattet'], explanation: 'haben, ihr: hattet.' },
    {
      kind: 'gap',
      prompt: 'Ich ___ leider nicht kommen. (können)',
      answers: ['konnte'],
      explanation: 'können → konnte (no umlaut).',
    },
    {
      kind: 'gap',
      prompt: 'Sie ___ lange warten. (müssen)',
      answers: ['musste'],
      hint: 'sie = she',
      explanation: 'müssen → musste.',
    },
    {
      kind: 'gap',
      prompt: 'Als Kind ___ ich nie früh ins Bett gehen. (wollen)',
      answers: ['wollte'],
      explanation: 'wollen → wollte.',
    },
    {
      kind: 'gap',
      prompt: 'Früher ___ man hier rauchen. (dürfen)',
      answers: ['durfte'],
      explanation: 'dürfen → durfte.',
    },
    {
      kind: 'transform',
      instruction: 'Put the sentence in the past.',
      prompt: 'Ich habe Kopfschmerzen.',
      answers: ['Ich hatte Kopfschmerzen.'],
      explanation: 'haben → hatte.',
    },
  ],
}

export const datum: GrammarTopic = {
  id: 'ordinalzahlen-datum',
  title: 'Ordinalzahlen und Datum',
  english: 'First, second, third and dates',
  level: 'A2',
  summary:
    'Ordinal numbers add **-te** up to 19 (der zwei**te**, der fünf**te**) and **-ste** from 20 (der zwanzig**ste**). Irregular: der **erste**, der **dritte**, der **siebte**, der **achte**. Dates: Heute ist **der** erste Mai. Ich habe **am** ersten Mai Geburtstag. In writing, a full stop marks an ordinal: der 1. Mai.',
  sections: [
    {
      heading: 'Forming ordinals',
      body: [
        '1–19: number + **-te**: zwei → zweite, vier → vierte. Irregular: **erste, dritte, siebte, achte**.',
        'From 20: number + **-ste**: zwanzigste, einunddreißigste.',
        'They take adjective endings. With dates you need two forms: **der** erst**e** (Heute ist der erste Mai) and **am** erst**en** (am ersten Mai).',
      ],
      table: {
        head: ['', 'Heute ist der …', 'am …'],
        rows: [
          ['1.', 'erste', 'ersten'],
          ['3.', 'dritte', 'dritten'],
          ['7.', 'siebte', 'siebten'],
          ['20.', 'zwanzigste', 'zwanzigsten'],
          ['31.', 'einunddreißigste', 'einunddreißigsten'],
        ],
      },
      examples: [
        { de: 'Heute ist **der dritte** Oktober.', en: 'Today is the third of October.' },
        { de: 'Wir fliegen **am zwölften** Juli.', en: "We're flying on the twelfth of July." },
      ],
    },
    {
      heading: 'From … to, and years',
      body: [
        '**vom** … **bis zum**: vom ersten bis zum fünften Mai.',
        'Years up to 1999 are said in hundreds: 1989 = neunzehnhundertneunundachtzig. From 2000: zweitausendvierundzwanzig.',
      ],
      examples: [
        {
          de: 'Der Kurs geht **vom** zehnten **bis zum** zwanzigsten März.',
          en: 'The course runs from the tenth to the twentieth of March.',
        },
      ],
    },
  ],
  mistakes: [
    { wrong: 'der dreite', right: 'der dritte', why: 'dritte is irregular.' },
    { wrong: 'am erste Mai', right: 'am ersten Mai', why: 'After am the ending is -en.' },
    { wrong: 'der zwanzigte', right: 'der zwanzigste', why: 'From 20 the ending is -ste.' },
  ],
  exercises: [
    { kind: 'gap', prompt: 'Heute ist der ___ Juni. (1.)', answers: ['erste'], explanation: 'Irregular: erste.' },
    {
      kind: 'gap',
      prompt: 'Ich habe am ___ April Geburtstag. (3.)',
      answers: ['dritten'],
      explanation: 'Irregular dritte; after am: dritten.',
    },
    { kind: 'gap', prompt: 'Heute ist der ___ Mai. (7.)', answers: ['siebte'], explanation: 'Irregular: siebte.' },
    {
      kind: 'gap',
      prompt: 'Wir kommen am ___ August zurück. (20.)',
      answers: ['zwanzigsten'],
      explanation: 'From 20: -ste; after am: zwanzigsten.',
    },
    {
      kind: 'gap',
      prompt: 'Das ist mein ___ Besuch in Berlin. (2.)',
      answers: ['zweiter'],
      explanation: 'mein + masculine noun: zweiter.',
    },
    {
      kind: 'gap',
      prompt: 'Der Kurs beginnt am ___ September. (8.)',
      answers: ['achten'],
      explanation: 'Irregular achte; after am: achten.',
    },
    {
      kind: 'choice',
      prompt: 'Welcher Tag ist heute? – Heute ist ___ zehnte März.',
      options: ['der', 'am', 'den'],
      answer: 0,
      explanation: 'Heute ist der …',
    },
    {
      kind: 'choice',
      prompt: 'Wann ist die Party? – ___ zehnten März.',
      options: ['Der', 'Am', 'Im'],
      answer: 1,
      explanation: 'For "on" a date: am.',
    },
    {
      kind: 'choice',
      prompt: 'Der Urlaub geht vom ersten ___ zum zehnten Juli.',
      options: ['bis', 'nach', 'an'],
      answer: 0,
      explanation: 'vom … bis zum.',
    },
  ],
}

export const welcherWasFuerEin: GrammarTopic = {
  id: 'welcher-was-fuer-ein',
  title: 'welcher? und was für ein?',
  english: 'Asking "which?" and "what kind of?"',
  level: 'A2',
  summary:
    '**welcher** asks which one from a known group and takes the endings of der, die, das: **Welches** Kleid nimmst du? **was für ein** asks what kind and takes the endings of ein: **Was für ein** Auto hast du? – Ein kleines.',
  sections: [
    {
      heading: 'welcher',
      body: [
        'Endings like der/die/das: welch**er** (masculine), welch**e** (feminine, plural), welch**es** (neuter), welch**en** (masculine accusative).',
      ],
      table: {
        head: ['', 'masculine', 'feminine', 'neuter', 'plural'],
        rows: [
          ['nominative', 'welcher', 'welche', 'welches', 'welche'],
          ['accusative', 'welchen', 'welche', 'welches', 'welche'],
          ['dative', 'welchem', 'welcher', 'welchem', 'welchen'],
        ],
      },
      examples: [
        { de: '**Welcher** Bus fährt zum Bahnhof?', en: 'Which bus goes to the station?' },
        { de: 'In **welchem** Stock wohnst du?', en: 'Which floor do you live on?' },
      ],
    },
    {
      heading: 'was für ein',
      body: [
        'Only ein changes: was für **ein** Hund, was für **eine** Wohnung, was für **einen** Job. In the plural, just **was für**: Was für Filme magst du?',
        'The answer often uses an adjective: Was für ein Auto? – Ein **rotes**.',
      ],
      examples: [
        { de: '**Was für eine** Wohnung suchst du?', en: 'What kind of flat are you looking for?' },
        { de: '**Was für** Musik hörst du gern?', en: 'What kind of music do you like?' },
      ],
    },
  ],
  mistakes: [
    { wrong: 'Welche Bus fährt nach Köln?', right: 'Welcher Bus fährt nach Köln?', why: 'der Bus: welcher.' },
    { wrong: 'Was für ein Wohnung?', right: 'Was für eine Wohnung?', why: 'die Wohnung: eine.' },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: '___ Zug fährt nach Hamburg? (der Zug)',
      answers: ['Welcher'],
      explanation: 'Masculine nominative: welcher.',
    },
    { kind: 'gap', prompt: '___ Farbe magst du? (die Farbe)', answers: ['Welche'], explanation: 'Feminine: welche.' },
    {
      kind: 'gap',
      prompt: '___ Buch liest du gerade? (das Buch)',
      answers: ['Welches'],
      explanation: 'Neuter: welches.',
    },
    {
      kind: 'gap',
      prompt: '___ Pullover kaufst du, den roten oder den blauen?',
      answers: ['Welchen'],
      explanation: 'Masculine accusative: welchen.',
    },
    {
      kind: 'gap',
      prompt: 'Was für ___ Auto hast du? – Ein kleines.',
      answers: ['ein'],
      explanation: 'das Auto: ein.',
    },
    {
      kind: 'gap',
      prompt: 'Was für ___ Job suchst du? – Einen Teilzeitjob.',
      answers: ['einen'],
      explanation: 'der Job, accusative: einen.',
    },
    {
      kind: 'choice',
      prompt: '___ Bücher liest du gern? – Krimis.',
      options: ['Was für', 'Was für ein', 'Welcher'],
      answer: 0,
      explanation: 'Plural, asking what kind: was für (no ein).',
    },
    {
      kind: 'choice',
      prompt: '___ Kleid nimmst du, das rote oder das grüne?',
      options: ['Was für ein', 'Welches'],
      answer: 1,
      explanation: 'Choosing from known options: welches.',
    },
  ],
}

export const indefinitpronomen: GrammarTopic = {
  id: 'indefinitpronomen',
  title: 'man, jemand, niemand, alle',
  english: 'Indefinite pronouns: people and things in general',
  level: 'A2',
  summary:
    '**man** means "people in general" or "you": Hier **darf man** nicht parken. It always takes the er/sie/es form of the verb. **jemand** (someone) and **niemand** (no one) are for people; **etwas** (something) and **nichts** (nothing) for things. **alle** (everyone, all) is plural.',
  sections: [
    {
      heading: 'The forms',
      body: [
        'man → verb like er: man **spricht**, man **kann**. In the accusative man becomes **einen**, in the dative **einem**, but at A2 you mostly need the nominative.',
        'jemand / niemand: Ist **jemand** zu Hause? – Nein, **niemand**.',
        'etwas / nichts: Möchtest du **etwas** trinken? – Nein, danke, **nichts**.',
        'alle + plural verb: **Alle sind** da. jeder + singular verb: **Jeder hat** ein Buch.',
      ],
      table: {
        head: ['', 'positive', 'negative'],
        rows: [
          ['people', 'jemand, alle, jeder', 'niemand'],
          ['things', 'etwas, alles', 'nichts'],
          ['general', 'man', '–'],
        ],
      },
      examples: [
        { de: 'Wie sagt **man** das auf Deutsch?', en: 'How do you say that in German?' },
        { de: 'Hat **jemand** meinen Schlüssel gesehen?', en: 'Has anyone seen my key?' },
        { de: '**Niemand** war zu Hause.', en: 'Nobody was at home.' },
      ],
    },
  ],
  mistakes: [
    {
      wrong: 'Hier man darf nicht rauchen.',
      right: 'Hier darf man nicht rauchen.',
      why: 'man is the subject: the verb stays second and man follows it.',
    },
    { wrong: 'Man müssen hier warten.', right: 'Man muss hier warten.', why: 'man takes the er/sie/es form.' },
    { wrong: 'Alle ist müde.', right: 'Alle sind müde.', why: 'alle is plural.' },
    {
      wrong: 'Ich habe nicht nichts gesagt.',
      right: 'Ich habe nichts gesagt.',
      why: 'One negative word is enough in German.',
    },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: 'In der Bibliothek ___ man leise sein. (müssen)',
      answers: ['muss'],
      explanation: 'man + er form: muss.',
    },
    {
      kind: 'gap',
      prompt: 'Wie ___ man das? (schreiben)',
      answers: ['schreibt'],
      explanation: 'man + er form: schreibt.',
    },
    { kind: 'gap', prompt: 'Ist ___ da? – Nein, niemand.', answers: ['jemand'], explanation: 'Someone: jemand.' },
    {
      kind: 'gap',
      prompt: 'Ich habe Hunger, aber im Kühlschrank ist ___.',
      answers: ['nichts'],
      explanation: 'Nothing: nichts.',
    },
    {
      kind: 'gap',
      prompt: 'Hast du ___ gehört? – Ja, ein Geräusch.',
      answers: ['etwas'],
      explanation: 'Something: etwas.',
    },
    {
      kind: 'gap',
      prompt: 'Die Party war toll. ___ haben getanzt.',
      answers: ['Alle'],
      explanation: 'Everyone, plural verb: alle.',
    },
    {
      kind: 'gap',
      prompt: '___ kennt das Problem. Es ist ganz normal.',
      answers: ['Jeder'],
      explanation: 'Everyone, singular verb: jeder.',
    },
    {
      kind: 'choice',
      prompt: 'Ich habe geklingelt, aber ___ hat aufgemacht.',
      options: ['nichts', 'niemand', 'jemand'],
      answer: 1,
      explanation: 'No person: niemand.',
    },
    {
      kind: 'order',
      words: ['Hier', 'darf', 'man', 'nicht', 'parken.'],
      alternatives: ['Man darf hier nicht parken.'],
      english: "You can't park here.",
      explanation: 'Verb second; man is the subject.',
    },
  ],
}

export const A2_TOPICS: GrammarTopic[] = [nebensaetzeA2, praeteritumA2, datum, welcherWasFuerEin, indefinitpronomen]
