import type { GrammarExplanationSection } from './types'

/** A grammar idea explained through English, linked to the German topics that use it. */
export interface BridgeSection extends GrammarExplanationSection {
  id: string
  /** Grammar topic ids this section explains. */
  topicIds: string[]
}

export const BRIDGE_SECTIONS: BridgeSection[] = [
  {
    id: 'terms',
    heading: 'The basic terms',
    topicIds: ['praesens', 'artikel', 'akkusativ-a1'],
    body: [
      'Grammar names the job each word does. In the sentence below, find the **verb** (the action) first, then ask who does it (the **subject**) and who or what it is done to (the **object**).',
      '*The old man gave his daughter a book because she was bored.*',
    ],
    table: {
      head: ['English term', 'German term', 'Meaning', 'In the sentence'],
      rows: [
        ['Verb', 'Verb', 'The action or state', 'gave, was'],
        ['Subject', 'Subjekt', 'Who or what does the action', 'The old man, she'],
        ['Direct object', 'Akkusativobjekt', 'What the action is done to', 'a book'],
        ['Indirect object', 'Dativobjekt', 'Who receives it or benefits', 'his daughter'],
        ['Noun', 'Nomen, Substantiv', 'A thing, person or idea', 'man, daughter, book'],
        ['Pronoun', 'Pronomen', 'A word standing in for a noun', 'she'],
        ['Article', 'Artikel', 'the (definite), a (indefinite)', 'The, a'],
        ['Adjective', 'Adjektiv', 'Describes a noun', 'old, bored'],
        ['Adverb', 'Adverb', 'Describes a verb or adjective', '(e.g. *quickly*, *very*)'],
        ['Preposition', 'Präposition', 'Links a noun to the rest: in, with, for', '(e.g. *with* a book)'],
        ['Main clause', 'Hauptsatz', 'A clause that makes sense alone', 'The old man gave his daughter a book'],
        ['Subordinate clause', 'Nebensatz', 'A clause that depends on another', 'because she was bored'],
        ['Conjunction', 'Konjunktion', 'Joins clauses', 'because'],
        ['Infinitive', 'Infinitiv', 'The base form of a verb', 'to give = *geben*'],
        ['Conjugation', 'Konjugation', 'Changing the verb to match the subject', 'I give, she give**s**'],
      ],
    },
  },
  {
    id: 'cases',
    heading: 'Cases',
    topicIds: [
      'akkusativ-a1',
      'dativ-akkusativ',
      'genitiv',
      'praepositionen-kasus',
      'wechselpraepositionen',
      'n-deklination',
    ],
    body: [
      'A **case** is the form a word takes to show its job in the sentence. German has four. English has the same four jobs, but only pronouns still change form: *he* becomes *him* or *his*. Nouns stopped changing centuries ago, so English relies on word order instead.',
      'English uses *him* for both the accusative and the dative. German keeps them apart, so you have to ask which job the word is doing.',
      '*Who / whom / whose* is the last full set of cases English still has.',
    ],
    table: {
      head: ['Case', 'Job', 'Question to ask', 'English example'],
      rows: [
        ['Nominativ', 'Subject', 'Who or what does it?', '**He** sees the dog.'],
        ['Akkusativ', 'Direct object', 'Whom or what?', 'The dog sees **him**.'],
        ['Dativ', 'Indirect object', 'To or for whom?', 'I give **him** a bone.'],
        ['Genitiv', 'Owner', 'Whose?', '**his** dog, the man**’s** dog, the dog **of** the man'],
      ],
    },
    examples: [
      {
        de: '**Der Mann** gibt **dem Hund** **einen Knochen**.',
        en: 'The man (Nom) gives the dog (Dat) a bone (Acc).',
      },
      {
        de: '**Wer** kommt? **Wen** siehst du? **Wem** hilfst du?',
        en: 'Who is coming? Whom do you see? Whom are you helping?',
      },
    ],
  },
  {
    id: 'gender',
    heading: 'Gender',
    topicIds: ['artikel', 'adjektivdeklination', 'possessivartikel'],
    body: [
      'English nouns have no gender. Only *he*, *she* and *it* show it, and they follow meaning: a man is *he*, a table is *it*.',
      'Every German noun is **masculine**, **feminine** or **neuter**, and it mostly has nothing to do with meaning. *Der Tisch* (table) is masculine, so it is *er*, not *es*. Learn each noun with its article.',
    ],
    examples: [
      {
        de: 'Wo ist der Tisch? **Er** ist in der Küche.',
        en: 'Where is the table? It (literally "he") is in the kitchen.',
      },
      { de: 'Das Mädchen ist nett. **Es** ist zehn.', en: 'The girl is nice. She (literally "it") is ten.' },
    ],
  },
  {
    id: 'participles',
    heading: 'Participles',
    topicIds: ['perfekt', 'passiv', 'partizipialattribute'],
    body: [
      'A **participle** is a verb form that works with a helping verb or as an adjective.',
      'The **past participle** (Partizip II) is the form after *have*: I have *played*, I have *eaten*. English regular verbs add **-ed**; German adds **ge- … -t**. Many irregular verbs end in **-en** in both languages, because they come from the same ancestor.',
      'The **present participle** (Partizip I) is the **-ing** form. German uses it only as an adjective or adverb (*das laufende Kind*, "the running child"). German has no "I am going" tense: *ich gehe* covers both "I go" and "I am going".',
    ],
    table: {
      head: ['German name', 'English name', 'English', 'German'],
      rows: [
        [
          'Partizip II',
          'Past participle',
          'play**ed**, eat**en**, gone',
          '**ge**spiel**t**, **ge**gess**en**, **ge**gangen',
        ],
        ['Partizip I', 'Present participle', 'runn**ing**', 'lauf**end**'],
      ],
    },
  },
  {
    id: 'strong-weak',
    heading: 'Strong and weak verbs',
    topicIds: ['praeteritum', 'praeteritum-a2'],
    body: [
      'English has the same split as German. **Weak** (regular) verbs add an ending. **Strong** (irregular) verbs change their vowel. **Mixed** verbs do both.',
      'If a verb is irregular in English, its German relative often is too, sometimes with the same vowels.',
    ],
    table: {
      head: ['Type', 'Pattern', 'English', 'German'],
      rows: [
        ['Weak', 'add an ending', 'walk, walk**ed**, walk**ed**', 'mach**en**, mach**te**, **ge**mach**t**'],
        ['Strong', 'vowel changes', 's**i**ng, s**a**ng, s**u**ng', 's**i**ngen, s**a**ng, ges**u**ngen'],
        ['Strong', 'vowel changes', 'dr**i**nk, dr**a**nk, dr**u**nk', 'tr**i**nken, tr**a**nk, getr**u**nken'],
        ['Mixed', 'both', 'bring, br**ought**', 'bringen, br**achte**, gebr**acht**'],
        ['Mixed', 'both', 'think, th**ought**', 'denken, d**achte**, ged**acht**'],
      ],
    },
  },
  {
    id: 'tenses',
    heading: 'Tenses',
    topicIds: ['praesens', 'perfekt', 'praeteritum', 'plusquamperfekt', 'futur'],
    body: [
      'German tenses are built like English ones, but they are used differently. The Perfekt looks like "I have eaten" yet usually means "I ate".',
      'In speech and informal writing Germans use the **Perfekt** for the past. In formal writing (news, novels, reports) they use the **Präteritum**. *sein*, *haben* and the modal verbs take the Präteritum even in speech: *ich war*, *ich hatte*, *ich konnte*.',
    ],
    table: {
      head: ['German', 'English name', 'Form', 'Usual meaning'],
      rows: [
        ['Präsens', 'Present', 'ich esse', 'I eat / I am eating'],
        ['Perfekt', 'Present perfect', 'ich habe gegessen = I have eaten', 'I ate'],
        ['Präteritum', 'Simple past', 'ich aß', 'I ate'],
        ['Plusquamperfekt', 'Past perfect', 'ich hatte gegessen', 'I had eaten'],
        ['Futur I', 'Future', 'ich werde essen', 'I will eat'],
      ],
    },
    examples: [
      {
        de: 'Ich **wohne** seit zwei Jahren in Berlin.',
        en: 'I have lived in Berlin for two years. (German uses the present)',
      },
      { de: 'Ich **fahre** morgen nach Hamburg.', en: 'I am going to Hamburg tomorrow. (present for the future)' },
    ],
  },
  {
    id: 'haben-sein',
    heading: 'haben or sein in the Perfekt',
    topicIds: ['perfekt', 'plusquamperfekt'],
    body: [
      'A **transitive** verb takes a direct object: "I ate **the cake**". An **intransitive** verb doesn’t: "I went", "it happened".',
      'Verbs with a direct object always take *haben*. Verbs that take *sein* are intransitive: movement from A to B (*gehen*, *fahren*) or a change of state (*aufwachen*, *sterben*), plus *sein* and *bleiben*.',
      'English used to do the same. Older phrases such as "he **is** gone", "Christ **is** risen" and "the time **is** come" are leftovers of a *be* perfect.',
    ],
    examples: [
      { de: 'Ich **habe** den Kuchen gegessen.', en: 'I ate the cake. (direct object: haben)' },
      { de: 'Ich **bin** nach Hause gegangen.', en: 'I went home. (movement: sein)' },
    ],
  },
  {
    id: 'modal-verbs',
    heading: 'Modal verbs',
    topicIds: ['modalverben', 'modalverben-subjektiv', 'doppelter-infinitiv'],
    body: [
      'Modal verbs add ability, permission, need or wish to another verb. In both languages the other verb goes in the infinitive: "I **can** swim" = *ich **kann** schwimmen*. In German the infinitive goes to the end.',
      'Two false friends: *ich will* means "I want", not "I will". *Ich muss nicht* means "I don’t have to"; "I mustn’t" is *ich darf nicht*.',
    ],
    table: {
      head: ['German', 'English'],
      rows: [
        ['können', 'can, be able to'],
        ['müssen', 'must, have to'],
        ['dürfen', 'may, be allowed to'],
        ['sollen', 'should, be supposed to'],
        ['wollen', 'want to'],
        ['mögen / möchten', 'like / would like'],
      ],
    },
    examples: [{ de: 'Ich **kann** heute nicht **kommen**.', en: 'I can’t come today.' }],
  },
  {
    id: 'word-order',
    heading: 'Word order and separable verbs',
    topicIds: ['satzstellung-a1', 'nebensaetze-a2', 'satzbau', 'trennbare-verben'],
    body: [
      'English is mostly subject, verb, object. German keeps the conjugated verb in **position 2**, whatever comes first. English does this only in a few set phrases: "**Here comes** the bus", "**Never have** I seen that".',
      'In a subordinate clause (after *weil*, *dass*, *wenn*) the German verb goes to the **end**. English has no equivalent.',
      '**Separable verbs** are like English phrasal verbs (*pick up*, *get up*), where the small word can move to the end: "I’ll pick you **up**". In German the prefix always goes to the end of a main clause.',
    ],
    examples: [
      { de: 'Morgen **fahre** ich nach Berlin.', en: 'Tomorrow I’m going to Berlin. (verb second, then the subject)' },
      { de: '…, weil ich morgen nach Berlin **fahre**.', en: '…, because I’m going to Berlin tomorrow. (verb last)' },
      { de: 'Ich **hole** dich um acht **ab**.', en: 'I’ll pick you up at eight.' },
    ],
  },
  {
    id: 'reflexive',
    heading: 'Reflexive verbs',
    topicIds: ['reflexive-verben'],
    body: [
      'A **reflexive** verb’s object is its own subject: "I wash **myself**". German uses *mich, dich, sich, uns, euch*.',
      'German uses reflexives far more often than English. Many have no "-self" in English: *sich freuen* (to be pleased), *sich erinnern* (to remember), *sich setzen* (to sit down).',
    ],
    examples: [
      { de: 'Ich **freue mich** auf das Wochenende.', en: 'I’m looking forward to the weekend.' },
      { de: 'Er **wäscht sich**.', en: 'He washes (himself).' },
    ],
  },
  {
    id: 'passive',
    heading: 'The passive',
    topicIds: ['passiv', 'passiv-ersatz'],
    body: [
      'In the **active** the subject does the action: "They build the house". In the **passive** the subject receives it: "The house **is built**". The doer can be left out or added with "by" (*von*).',
      'English builds the passive with *be*. German uses *werden* for the action and *sein* for the finished state.',
    ],
    table: {
      head: ['English', 'German'],
      rows: [
        ['The house **is being built**.', 'Das Haus **wird** gebaut.'],
        ['The house **was built** (in 1900).', 'Das Haus **wurde** (1900) gebaut.'],
        ['The house **is built** (it’s finished).', 'Das Haus **ist** gebaut.'],
      ],
    },
  },
  {
    id: 'subjunctive',
    heading: 'The subjunctive (Konjunktiv)',
    topicIds: ['konjunktiv-ii', 'als-ob', 'konjunktiv-i'],
    body: [
      'The **subjunctive** is the verb form for things that are imagined, wished for or reported, rather than stated as fact.',
      '**Konjunktiv II** matches English "would", "could" and "if I were": *ich würde*, *ich könnte*, *wenn ich … wäre*. English "were" in "if I were you" is a leftover subjunctive.',
      '**Konjunktiv I** reports what someone said, mostly in the news. English shifts the tense back instead: "She said she **was** ill" = *Sie sagte, sie **sei** krank*.',
    ],
    examples: [
      { de: 'Wenn ich Zeit **hätte**, **würde** ich mitkommen.', en: 'If I had time, I would come along.' },
      { de: 'Ich an deiner Stelle **wäre** vorsichtig.', en: 'If I were you, I’d be careful.' },
    ],
  },
  {
    id: 'relative-clauses',
    heading: 'Relative clauses',
    topicIds: ['relativsaetze'],
    body: [
      'A **relative clause** describes a noun: "the man **who lives next door**". English uses *who*, *which* or *that*, and can often drop them: "the book (that) I read".',
      'German uses *der, die, das* (and their case forms), never drops them, puts a comma before them, and sends the verb to the end. The pronoun takes its gender from the noun and its case from its job in the relative clause, just as English chooses *who* or *whom*.',
    ],
    examples: [
      {
        de: 'Der Mann, **der** nebenan wohnt, ist Arzt.',
        en: 'The man who lives next door is a doctor. (subject: der)',
      },
      { de: 'Das Buch, **das** ich lese, ist gut.', en: 'The book (that) I’m reading is good.' },
      {
        de: 'Die Frau, **der** ich helfe, ist neu.',
        en: 'The woman (whom) I’m helping is new. (helfen takes the dative)',
      },
    ],
  },
  {
    id: 'comparison',
    heading: 'Comparing',
    topicIds: ['komparativ'],
    body: [
      'English says *bigger, biggest* for short adjectives but *more interesting, most interesting* for long ones. German always adds the ending, however long the word: *interessanter*, *am interessantesten*.',
      'Many short German adjectives add an umlaut: *alt, älter, am ältesten* (old, older, oldest). Like English *good, better, best*, a few are irregular: *gut, besser, am besten*.',
    ],
    examples: [
      { de: 'Dieses Buch ist **interessanter** als der Film.', en: 'This book is more interesting than the film.' },
      { de: 'Mein Bruder ist **älter** als ich.', en: 'My brother is older than me.' },
    ],
  },
]

/** The bridge sections that explain a grammar topic. */
export function bridgesForTopic(topicId: string): BridgeSection[] {
  return BRIDGE_SECTIONS.filter((section) => section.topicIds.includes(topicId))
}
