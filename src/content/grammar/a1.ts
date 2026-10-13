import type { GrammarTopic } from '../types'

export const praesens: GrammarTopic = {
  id: 'praesens',
  title: 'Präsens',
  english: 'The present tense: personal pronouns, verb endings, sein and haben',
  level: 'A1',
  summary:
    'German verbs change their ending for each person: ich wohn**e**, du wohn**st**, er wohn**t**. The present tense covers both "I live" and "I am living", and often the future too: Morgen **fahre** ich nach Berlin. **sein** and **haben** are irregular and worth learning first.',
  sections: [
    {
      heading: 'Personal pronouns and endings',
      body: [
        'Take the infinitive (wohnen), remove **-en** to get the stem (wohn-), then add the ending.',
        '**Sie** with a capital S is the polite "you", for one person or several. It takes the same form as sie (they).',
        'Stems ending in **-t** or **-d** add an **e** before -st and -t: du arbeit**e**st, er find**e**t.',
        'Stems ending in **-s, -ß, -z** only add **-t** for du: du heißt, du tanzt.',
      ],
      table: {
        head: ['Person', 'wohnen', 'arbeiten', 'heißen'],
        rows: [
          ['ich', 'wohne', 'arbeite', 'heiße'],
          ['du', 'wohnst', 'arbeitest', 'heißt'],
          ['er / sie / es', 'wohnt', 'arbeitet', 'heißt'],
          ['wir', 'wohnen', 'arbeiten', 'heißen'],
          ['ihr', 'wohnt', 'arbeitet', 'heißt'],
          ['sie / Sie', 'wohnen', 'arbeiten', 'heißen'],
        ],
      },
      examples: [
        { de: 'Ich **wohne** in Köln.', en: 'I live in Cologne.' },
        { de: 'Wo **arbeitest** du?', en: 'Where do you work?' },
        { de: 'Wie **heißen** Sie?', en: "What's your name? (formal)" },
      ],
    },
    {
      heading: 'sein and haben',
      body: ['These two are irregular. You need them in almost every sentence, so learn them by heart.'],
      table: {
        head: ['Person', 'sein', 'haben'],
        rows: [
          ['ich', 'bin', 'habe'],
          ['du', 'bist', 'hast'],
          ['er / sie / es', 'ist', 'hat'],
          ['wir', 'sind', 'haben'],
          ['ihr', 'seid', 'habt'],
          ['sie / Sie', 'sind', 'haben'],
        ],
      },
      examples: [
        { de: 'Ich **bin** müde.', en: "I'm tired." },
        { de: '**Hast** du Zeit?', en: 'Do you have time?' },
        { de: 'Wir **sind** aus Brasilien.', en: "We're from Brazil." },
      ],
    },
    {
      heading: 'Verbs that change their vowel',
      body: [
        'Some verbs change their vowel for **du** and **er/sie/es** only: **e → i** (sprechen → du sprichst), **e → ie** (lesen → du liest), **a → ä** (fahren → du fährst).',
        'The word lists show this form first: fahren, *fährt*, fuhr, ist gefahren.',
      ],
      table: {
        head: ['', 'sprechen', 'lesen', 'fahren'],
        rows: [
          ['ich', 'spreche', 'lese', 'fahre'],
          ['du', 'sprichst', 'liest', 'fährst'],
          ['er / sie / es', 'spricht', 'liest', 'fährt'],
          ['wir', 'sprechen', 'lesen', 'fahren'],
        ],
      },
      examples: [{ de: '**Sprichst** du Englisch?', en: 'Do you speak English?' }],
    },
  ],
  mistakes: [
    {
      wrong: 'Ich bin wohne in Berlin.',
      right: 'Ich wohne in Berlin.',
      why: 'German has no "am …ing" form: one verb is enough.',
    },
    { wrong: 'Du arbeitst viel.', right: 'Du arbeitest viel.', why: 'Stems ending in -t add e before -st.' },
    { wrong: 'Er fahrt nach Hause.', right: 'Er fährt nach Hause.', why: 'fahren changes a → ä for du and er/sie/es.' },
    { wrong: 'Sie ist Studenten.', right: 'Sie sind Studenten.', why: 'Plural sie (they) takes sind.' },
  ],
  exercises: [
    { kind: 'gap', prompt: 'Ich ___ aus Italien. (kommen)', answers: ['komme'], explanation: 'ich: stem + -e.' },
    { kind: 'gap', prompt: 'Wo ___ du? (wohnen)', answers: ['wohnst'], explanation: 'du: stem + -st.' },
    {
      kind: 'gap',
      prompt: 'Er ___ in einem Café. (arbeiten)',
      answers: ['arbeitet'],
      explanation: 'Stem ends in -t: arbeit + e + t.',
    },
    {
      kind: 'gap',
      prompt: 'Wie ___ Sie? (heißen)',
      answers: ['heißen'],
      explanation: 'Sie (formal) takes the infinitive form.',
    },
    { kind: 'gap', prompt: 'Wir ___ müde. (sein)', answers: ['sind'], explanation: 'sein: wir sind.' },
    { kind: 'gap', prompt: '___ du Kinder? (haben)', answers: ['Hast'], explanation: 'haben: du hast.' },
    { kind: 'gap', prompt: 'Ihr ___ sehr nett. (sein)', answers: ['seid'], explanation: 'sein: ihr seid.' },
    {
      kind: 'gap',
      prompt: 'Sie ___ gut Deutsch. (sprechen)',
      answers: ['spricht'],
      hint: 'sie = she',
      explanation: 'e → i for er/sie/es: spricht.',
    },
    { kind: 'gap', prompt: 'Was ___ du gern? (lesen)', answers: ['liest'], explanation: 'e → ie for du: liest.' },
    {
      kind: 'gap',
      prompt: 'Er ___ mit dem Bus. (fahren)',
      answers: ['fährt'],
      explanation: 'a → ä for er/sie/es: fährt.',
    },
    {
      kind: 'choice',
      prompt: 'Meine Eltern ___ in Spanien.',
      options: ['wohnt', 'wohnen', 'wohnst'],
      answer: 1,
      explanation: 'Meine Eltern = sie (they): wohnen.',
    },
    {
      kind: 'order',
      words: ['Woher', 'kommst', 'du?'],
      english: 'Where are you from?',
      explanation: 'Question word first, then the verb.',
    },
  ],
}

export const artikel: GrammarTopic = {
  id: 'artikel',
  title: 'Artikel und Plural',
  english: 'der, die, das, ein, eine and plural nouns',
  level: 'A1',
  summary:
    'Every German noun is **masculine (der)**, **feminine (die)** or **neuter (das)**, and nouns always start with a capital letter. The gender is often not logical, so learn each noun with its article: **der** Tisch, **die** Lampe, **das** Bett. In the plural the article is always **die**.',
  sections: [
    {
      heading: 'Definite and indefinite articles',
      body: ['**der, die, das** mean "the". **ein, eine** mean "a". There is no plural of ein: you just leave it out.'],
      table: {
        head: ['', 'masculine', 'feminine', 'neuter', 'plural'],
        rows: [
          ['the', 'der Tisch', 'die Lampe', 'das Bett', 'die Tische'],
          ['a', 'ein Tisch', 'eine Lampe', 'ein Bett', 'Tische'],
        ],
      },
      examples: [
        { de: '**Der** Tisch ist neu.', en: 'The table is new.' },
        { de: 'Das ist **eine** Lampe.', en: 'That is a lamp.' },
      ],
    },
    {
      heading: 'Clues to the gender',
      body: [
        'Some endings tell you the gender. Nouns ending in **-ung, -heit, -keit, -schaft, -ion** are feminine: die Wohnung, die Zeitung.',
        'Nouns ending in **-chen** and **-lein** are neuter: das Mädchen, das Brötchen.',
        'Male people are usually der, female people die: der Lehrer, die Lehrerin.',
        'In compound nouns the **last part** decides: das Haus + die Tür = **die** Haustür.',
      ],
      examples: [{ de: '**Die** Wohnung ist hell.', en: 'The flat is bright.' }],
    },
    {
      heading: 'Plural forms',
      body: [
        'There are several plural patterns, so learn the plural with the noun. The word lists show it: das Kind, *Kinder*.',
        'Common patterns: **-e** (der Tag → die Tage), **-(e)n** (die Frau → die Frauen), **-er** with umlaut (das Haus → die Häuser), **-s** for many foreign words (das Auto → die Autos), and no change (der Lehrer → die Lehrer).',
      ],
      table: {
        head: ['Singular', 'Plural'],
        rows: [
          ['der Tag', 'die Tage'],
          ['die Lampe', 'die Lampen'],
          ['das Kind', 'die Kinder'],
          ['der Apfel', 'die Äpfel'],
          ['das Hotel', 'die Hotels'],
        ],
      },
    },
  ],
  mistakes: [
    {
      wrong: 'Ich habe ein Auto. Die Auto ist rot.',
      right: 'Ich habe ein Auto. Das Auto ist rot.',
      why: 'Auto is neuter: das.',
    },
    { wrong: 'Das sind eine Kinder.', right: 'Das sind Kinder.', why: 'No indefinite article in the plural.' },
    {
      wrong: 'das Mädchen ist nett.',
      right: 'Das Mädchen ist nett.',
      why: 'Sentences start with a capital letter, and so do all nouns.',
    },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: '___ Tisch ist groß.',
      answers: ['Der'],
      hint: 'der, die or das',
      explanation: 'Tisch is masculine.',
    },
    {
      kind: 'gap',
      prompt: '___ Lampe ist neu.',
      answers: ['Die'],
      hint: 'der, die or das',
      explanation: 'Lampe is feminine.',
    },
    {
      kind: 'gap',
      prompt: '___ Buch ist gut.',
      answers: ['Das'],
      hint: 'der, die or das',
      explanation: 'Buch is neuter.',
    },
    {
      kind: 'gap',
      prompt: '___ Zeitung liegt auf dem Tisch.',
      answers: ['Die'],
      hint: 'der, die or das',
      explanation: 'Nouns ending in -ung are feminine.',
    },
    {
      kind: 'gap',
      prompt: '___ Brötchen ist frisch.',
      answers: ['Das'],
      hint: 'der, die or das',
      explanation: 'Nouns ending in -chen are neuter.',
    },
    {
      kind: 'gap',
      prompt: 'Das ist ___ Stuhl.',
      answers: ['ein'],
      hint: 'ein or eine',
      explanation: 'Stuhl is masculine: ein.',
    },
    {
      kind: 'gap',
      prompt: 'Das ist ___ Tasche.',
      answers: ['eine'],
      hint: 'ein or eine',
      explanation: 'Tasche is feminine: eine.',
    },
    {
      kind: 'gap',
      prompt: 'Ich habe zwei ___. (das Kind)',
      answers: ['Kinder'],
      explanation: 'das Kind → die Kinder.',
    },
    {
      kind: 'gap',
      prompt: 'Wir kaufen drei ___. (der Apfel)',
      answers: ['Äpfel'],
      explanation: 'der Apfel → die Äpfel.',
    },
    {
      kind: 'choice',
      prompt: '___ Kinder spielen im Garten.',
      options: ['Der', 'Die', 'Das'],
      answer: 1,
      explanation: 'The plural article is always die.',
    },
    {
      kind: 'choice',
      prompt: 'Wie heißt der Artikel von „Haustür"?',
      options: ['der', 'die', 'das'],
      answer: 1,
      explanation: 'The last part decides: die Tür, so die Haustür.',
    },
  ],
}

export const satzstellungA1: GrammarTopic = {
  id: 'satzstellung-a1',
  title: 'Aussagesätze und Fragen',
  english: 'Word order: the verb in position 2, and questions',
  level: 'A1',
  summary:
    'In a German statement the verb is always the **second element**. Something else can come first (a time, a place) but then the subject moves after the verb. In **W-questions** (wer, was, wo …) the verb is also second. In **yes/no questions** the verb comes first.',
  sections: [
    {
      heading: 'The verb in position 2',
      body: [
        "Position 1 can be the subject, a time phrase or something else. The verb stays in position 2 and the subject follows if it isn't first.",
      ],
      table: {
        head: ['Position 1', 'Verb', 'Rest'],
        rows: [
          ['Ich', 'fahre', 'morgen nach Berlin.'],
          ['Morgen', 'fahre', 'ich nach Berlin.'],
          ['Nach Berlin', 'fahre', 'ich morgen.'],
        ],
      },
      examples: [{ de: 'Heute **habe** ich keine Zeit.', en: "I don't have time today." }],
    },
    {
      heading: 'Questions',
      body: [
        '**W-questions**: question word, verb, subject: **Wo wohnst** du?',
        '**Yes/no questions**: verb first: **Wohnst** du in Berlin? Answer with ja, nein or doch.',
      ],
      examples: [
        { de: '**Was** machst du am Wochenende?', en: 'What are you doing at the weekend?' },
        { de: '**Kommst** du mit?', en: 'Are you coming along?' },
      ],
    },
  ],
  mistakes: [
    {
      wrong: 'Morgen ich fahre nach Berlin.',
      right: 'Morgen fahre ich nach Berlin.',
      why: 'The verb is second, so the subject moves after it.',
    },
    {
      wrong: 'Wo du wohnst?',
      right: 'Wo wohnst du?',
      why: 'In questions the verb comes straight after the question word.',
    },
    { wrong: 'Du hast Zeit?', right: 'Hast du Zeit?', why: 'Yes/no questions start with the verb.' },
  ],
  exercises: [
    {
      kind: 'order',
      words: ['Heute', 'gehe', 'ich', 'ins', 'Kino.'],
      alternatives: ['Ich gehe heute ins Kino.'],
      english: "I'm going to the cinema today.",
      explanation: 'Verb second; if the time comes first, the subject follows the verb.',
    },
    {
      kind: 'order',
      words: ['Wo', 'arbeitet', 'dein', 'Bruder?'],
      english: 'Where does your brother work?',
      explanation: 'W-question: question word, verb, subject.',
    },
    {
      kind: 'order',
      words: ['Sprechen', 'Sie', 'Englisch?'],
      english: 'Do you speak English?',
      explanation: 'Yes/no question: verb first.',
    },
    {
      kind: 'order',
      words: ['Am', 'Samstag', 'kaufe', 'ich', 'ein.'],
      alternatives: ['Ich kaufe am Samstag ein.'],
      english: 'I go shopping on Saturday.',
      explanation: 'Am Samstag is position 1, so the verb comes next.',
    },
    {
      kind: 'gap',
      prompt: '___ heißt du? – Ich heiße Ana.',
      answers: ['Wie'],
      hint: 'question word',
      explanation: 'Asking for a name: Wie heißt du?',
    },
    {
      kind: 'gap',
      prompt: '___ kommst du? – Aus Portugal.',
      answers: ['Woher'],
      hint: 'question word',
      explanation: 'Asking where someone is from: woher.',
    },
    {
      kind: 'gap',
      prompt: '___ beginnt der Film? – Um acht.',
      answers: ['Wann'],
      hint: 'question word',
      explanation: 'Asking about time: wann.',
    },
    {
      kind: 'gap',
      prompt: '___ ist das? – Das ist mein Kollege.',
      answers: ['Wer'],
      hint: 'question word',
      explanation: 'Asking about a person: wer.',
    },
    {
      kind: 'choice',
      prompt: 'Which sentence is correct?',
      options: ['Am Abend ich sehe fern.', 'Am Abend sehe ich fern.', 'Am Abend sehe fern ich.'],
      answer: 1,
      explanation: 'Verb second, subject straight after it.',
    },
    {
      kind: 'transform',
      instruction: 'Make a yes/no question.',
      prompt: 'Du hast heute Zeit.',
      answers: ['Hast du heute Zeit?'],
      explanation: 'Put the verb first.',
    },
  ],
}

export const negation: GrammarTopic = {
  id: 'negation',
  title: 'nicht und kein',
  english: 'Saying no: nicht and kein',
  level: 'A1',
  summary:
    'Use **kein** to negate a noun that would have **ein** or no article: Ich habe **kein** Auto. Use **nicht** for everything else: verbs, adjectives, names and nouns with der/die/das. Answer a negative question with **doch** to mean "yes".',
  sections: [
    {
      heading: 'kein',
      body: [
        'kein replaces ein, or stands where there is no article. It takes the same endings as ein, and **keine** in the plural.',
      ],
      table: {
        head: ['', 'masculine', 'feminine', 'neuter', 'plural'],
        rows: [
          ['nominative', 'kein', 'keine', 'kein', 'keine'],
          ['accusative', 'keinen', 'keine', 'kein', 'keine'],
        ],
      },
      examples: [
        { de: 'Das ist **kein** Problem.', en: "That's no problem." },
        { de: 'Ich habe **keine** Zeit.', en: "I don't have time." },
        { de: 'Wir haben **keinen** Hund.', en: "We don't have a dog." },
      ],
    },
    {
      heading: 'nicht',
      body: [
        'nicht negates a verb, an adjective, an adverb or a noun with der/die/das or a name.',
        'nicht usually comes at the end, but **before** adjectives, places and separable prefixes: Das ist **nicht** teuer. Ich wohne **nicht** in Berlin.',
      ],
      examples: [
        { de: 'Ich komme heute **nicht**.', en: "I'm not coming today." },
        { de: 'Der Kaffee ist **nicht** heiß.', en: "The coffee isn't hot." },
      ],
    },
    {
      heading: 'doch',
      body: ['To answer "yes" to a negative question, say **doch**.'],
      examples: [{ de: 'Hast du keinen Hunger? – **Doch**, ich habe Hunger!', en: "Aren't you hungry? – Yes, I am!" }],
    },
  ],
  mistakes: [
    { wrong: 'Ich habe nicht ein Auto.', right: 'Ich habe kein Auto.', why: 'Nouns with ein are negated with kein.' },
    {
      wrong: 'Ich habe nicht Zeit.',
      right: 'Ich habe keine Zeit.',
      why: 'Nouns without an article are negated with kein.',
    },
    { wrong: 'Ich nicht komme.', right: 'Ich komme nicht.', why: 'The verb stays in position 2; nicht goes after it.' },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: 'Ich habe ___ Auto.',
      answers: ['kein'],
      hint: 'nicht or kein',
      explanation: 'das Auto, neuter, accusative: kein.',
    },
    {
      kind: 'gap',
      prompt: 'Das Wetter ist heute ___ gut.',
      answers: ['nicht'],
      hint: 'nicht or kein',
      explanation: 'Adjective: nicht.',
    },
    {
      kind: 'gap',
      prompt: 'Wir haben ___ Kinder.',
      answers: ['keine'],
      hint: 'nicht or kein',
      explanation: 'Plural: keine.',
    },
    {
      kind: 'gap',
      prompt: 'Er arbeitet heute ___.',
      answers: ['nicht'],
      hint: 'nicht or kein',
      explanation: 'Verb: nicht at the end.',
    },
    {
      kind: 'gap',
      prompt: 'Ich trinke ___ Kaffee.',
      answers: ['keinen'],
      hint: 'nicht or kein',
      explanation: 'der Kaffee, masculine accusative, no article: keinen.',
    },
    {
      kind: 'gap',
      prompt: 'Das ist ___ Problem.',
      answers: ['kein'],
      hint: 'nicht or kein',
      explanation: 'das Problem, neuter: kein.',
    },
    {
      kind: 'gap',
      prompt: 'Ich habe heute ___ Zeit.',
      answers: ['keine'],
      hint: 'nicht or kein',
      explanation: 'die Zeit, feminine: keine.',
    },
    {
      kind: 'gap',
      prompt: 'Sie wohnt ___ in Hamburg.',
      answers: ['nicht'],
      hint: 'nicht or kein',
      explanation: 'Place: nicht before it.',
    },
    {
      kind: 'choice',
      prompt: 'Kommst du nicht mit? – ___, ich komme mit!',
      options: ['Ja', 'Doch', 'Nein'],
      answer: 1,
      explanation: 'Yes to a negative question: doch.',
    },
    {
      kind: 'transform',
      instruction: 'Make the sentence negative.',
      prompt: 'Ich habe einen Bruder.',
      answers: ['Ich habe keinen Bruder.'],
      explanation: 'einen → keinen.',
    },
  ],
}

export const akkusativA1: GrammarTopic = {
  id: 'akkusativ-a1',
  title: 'Der Akkusativ',
  english: 'The accusative: den, einen, keinen',
  level: 'A1',
  summary:
    'The **object** of most verbs is in the accusative: Ich habe **einen** Bruder. Only the **masculine** article changes: der → **den**, ein → **einen**, kein → **keinen**. Feminine, neuter and plural stay the same. Common verbs with an accusative: haben, brauchen, kaufen, möchten, nehmen, sehen, suchen, es gibt.',
  sections: [
    {
      heading: 'Only masculine changes',
      body: ['The subject is in the nominative. The object is in the accusative.'],
      table: {
        head: ['', 'masculine', 'feminine', 'neuter', 'plural'],
        rows: [
          ['nominative', 'der / ein', 'die / eine', 'das / ein', 'die / –'],
          ['accusative', '**den / einen**', 'die / eine', 'das / ein', 'die / –'],
        ],
      },
      examples: [
        { de: 'Ich brauche **einen** Stift.', en: 'I need a pen.' },
        { de: 'Siehst du **den** Bus?', en: 'Can you see the bus?' },
        { de: 'Ich nehme **die** Suppe.', en: "I'll have the soup." },
      ],
    },
    {
      heading: 'es gibt',
      body: ['**es gibt** (there is, there are) always takes the accusative.'],
      examples: [{ de: 'Im Park **gibt es einen** Spielplatz.', en: "There's a playground in the park." }],
    },
  ],
  mistakes: [
    {
      wrong: 'Ich habe ein Bruder.',
      right: 'Ich habe einen Bruder.',
      why: 'der Bruder is masculine: einen in the accusative.',
    },
    { wrong: 'Ich kaufe einen Lampe.', right: 'Ich kaufe eine Lampe.', why: "Feminine doesn't change: eine." },
    { wrong: 'Der Kaffee möchte ich.', right: 'Den Kaffee möchte ich.', why: 'Kaffee is the object here, so den.' },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: 'Ich brauche ___ Computer.',
      answers: ['einen'],
      hint: 'ein / eine / einen',
      explanation: 'der Computer, masculine object: einen.',
    },
    {
      kind: 'gap',
      prompt: 'Wir kaufen ___ Tisch.',
      answers: ['einen'],
      hint: 'ein / eine / einen',
      explanation: 'der Tisch: einen.',
    },
    {
      kind: 'gap',
      prompt: 'Sie hat ___ Katze.',
      answers: ['eine'],
      hint: 'ein / eine / einen',
      explanation: 'die Katze: eine (no change).',
    },
    {
      kind: 'gap',
      prompt: 'Ich möchte ___ Glas Wasser.',
      answers: ['ein'],
      hint: 'ein / eine / einen',
      explanation: 'das Glas: ein (no change).',
    },
    {
      kind: 'gap',
      prompt: 'Siehst du ___ Mann dort?',
      answers: ['den'],
      hint: 'der / die / das / den',
      explanation: 'der Mann, masculine object: den.',
    },
    {
      kind: 'gap',
      prompt: 'Ich nehme ___ Bus um acht.',
      answers: ['den'],
      hint: 'der / die / das / den',
      explanation: 'der Bus: den.',
    },
    {
      kind: 'gap',
      prompt: 'Wir suchen ___ Wohnung.',
      answers: ['eine'],
      hint: 'ein / eine / einen',
      explanation: 'die Wohnung: eine.',
    },
    {
      kind: 'gap',
      prompt: 'Hier gibt es ___ Supermarkt.',
      answers: ['einen'],
      hint: 'ein / eine / einen',
      explanation: 'es gibt + accusative; der Supermarkt: einen.',
    },
    {
      kind: 'choice',
      prompt: '___ Film finde ich langweilig.',
      options: ['Der', 'Den'],
      answer: 1,
      explanation: 'The subject is ich; Film is the object, so den.',
    },
    {
      kind: 'choice',
      prompt: '___ Film ist langweilig.',
      options: ['Der', 'Den'],
      answer: 0,
      explanation: 'Film is the subject here, so der.',
    },
  ],
}

export const possessivartikel: GrammarTopic = {
  id: 'possessivartikel',
  title: 'Possessivartikel',
  english: 'my, your, his, her: mein, dein, sein, ihr',
  level: 'A1',
  summary:
    'Possessive articles say who something belongs to. They take the same endings as **ein**: mein Bruder, mein**e** Schwester, mein**en** Bruder (accusative). **sein** means his (or its), **ihr** means her or their, and **Ihr** with a capital I is the polite "your".',
  sections: [
    {
      heading: 'The forms',
      body: [
        'Choose the word by the owner, then add the ending for the noun that follows, exactly as with ein.',
        'euer drops its e when it has an ending: eu**re** Wohnung.',
      ],
      table: {
        head: ['Owner', 'masculine / neuter', 'feminine / plural', 'masculine accusative'],
        rows: [
          ['ich', 'mein', 'meine', 'meinen'],
          ['du', 'dein', 'deine', 'deinen'],
          ['er / es', 'sein', 'seine', 'seinen'],
          ['sie (she)', 'ihr', 'ihre', 'ihren'],
          ['wir', 'unser', 'unsere', 'unseren'],
          ['ihr', 'euer', 'eure', 'euren'],
          ['sie (they) / Sie', 'ihr / Ihr', 'ihre / Ihre', 'ihren / Ihren'],
        ],
      },
      examples: [
        { de: 'Das ist **meine** Schwester.', en: 'This is my sister.' },
        { de: 'Wie ist **Ihr** Name?', en: 'What is your name? (formal)' },
        { de: 'Ich besuche **meinen** Vater.', en: "I'm visiting my father." },
      ],
    },
  ],
  mistakes: [
    { wrong: 'Das ist mein Schwester.', right: 'Das ist meine Schwester.', why: 'Schwester is feminine: meine.' },
    { wrong: 'Anna und ihre Bruder', right: 'Anna und ihr Bruder', why: 'Bruder is masculine: ihr, not ihre.' },
    { wrong: 'Ich rufe mein Vater an.', right: 'Ich rufe meinen Vater an.', why: 'Masculine object: meinen.' },
  ],
  exercises: [
    { kind: 'gap', prompt: 'Das ist ___ Mutter. (ich)', answers: ['meine'], explanation: 'die Mutter: meine.' },
    {
      kind: 'gap',
      prompt: 'Wie heißt ___ Bruder? (du)',
      answers: ['dein'],
      explanation: 'der Bruder, nominative: dein.',
    },
    {
      kind: 'gap',
      prompt: 'Tom und ___ Frau wohnen in Bonn.',
      answers: ['seine'],
      hint: 'his',
      explanation: "Tom's wife: seine (die Frau).",
    },
    {
      kind: 'gap',
      prompt: 'Lisa besucht ___ Oma.',
      answers: ['ihre'],
      hint: 'her',
      explanation: "Lisa's grandma: ihre (die Oma).",
    },
    { kind: 'gap', prompt: 'Das ist ___ Haus. (wir)', answers: ['unser'], explanation: 'das Haus: unser.' },
    {
      kind: 'gap',
      prompt: 'Wo ist ___ Wohnung? (ihr)',
      answers: ['eure'],
      explanation: 'die Wohnung: eure (euer drops e).',
    },
    {
      kind: 'gap',
      prompt: 'Wie ist ___ Telefonnummer, Frau Klein?',
      answers: ['Ihre'],
      explanation: 'Polite your, feminine noun: Ihre.',
    },
    {
      kind: 'gap',
      prompt: 'Ich suche ___ Schlüssel. (ich)',
      answers: ['meinen'],
      explanation: 'der Schlüssel, accusative: meinen.',
    },
    {
      kind: 'choice',
      prompt: 'Max ruft ___ Schwester an.',
      options: ['ihre', 'seine', 'sein'],
      answer: 1,
      explanation: 'The owner is Max (his), and Schwester is feminine: seine.',
    },
    {
      kind: 'choice',
      prompt: 'Die Kinder suchen ___ Hund.',
      options: ['ihren', 'seinen', 'ihr'],
      answer: 0,
      explanation: 'Their dog: ihr-; der Hund is a masculine object, so ihren.',
    },
  ],
}

export const trennbareVerben: GrammarTopic = {
  id: 'trennbare-verben',
  title: 'Trennbare Verben',
  english: 'Separable verbs: aufstehen, einkaufen, anrufen',
  level: 'A1',
  summary:
    'Many verbs have a prefix that **splits off** and goes to the **end** of the sentence: aufstehen → Ich **stehe** um sieben **auf**. Common separable prefixes: **ab-, an-, auf-, aus-, ein-, mit-, vor-, zu-, zurück-, fern-**. In the infinitive, with a modal verb, they stay together: Ich muss früh **aufstehen**.',
  sections: [
    {
      heading: 'The sentence bracket',
      body: [
        'The verb goes in position 2 and the prefix at the very end. Everything else sits between them.',
        'The stress is on the prefix: **AUF**stehen, **EIN**kaufen.',
      ],
      table: {
        head: ['Position 1', 'Verb', 'Middle', 'End'],
        rows: [
          ['Ich', 'stehe', 'jeden Tag um sieben', 'auf.'],
          ['Wann', 'kommst', 'du', 'zurück?'],
          ['Ich', 'muss', 'heute noch', 'einkaufen.'],
        ],
      },
      examples: [
        { de: 'Der Zug **kommt** um acht **an**.', en: 'The train arrives at eight.' },
        { de: '**Rufst** du mich morgen **an**?', en: 'Will you call me tomorrow?' },
      ],
    },
  ],
  mistakes: [
    { wrong: 'Ich aufstehe um sieben.', right: 'Ich stehe um sieben auf.', why: 'The prefix goes to the end.' },
    {
      wrong: 'Ich stehe auf um sieben.',
      right: 'Ich stehe um sieben auf.',
      why: 'The prefix goes to the very end, after the time.',
    },
    {
      wrong: 'Ich muss früh stehe auf.',
      right: 'Ich muss früh aufstehen.',
      why: 'With a modal verb the infinitive stays together at the end.',
    },
  ],
  exercises: [
    {
      kind: 'order',
      words: ['Ich', 'stehe', 'um', 'sechs', 'Uhr', 'auf.'],
      english: 'I get up at six.',
      explanation: 'stehe in position 2, auf at the end.',
    },
    {
      kind: 'order',
      words: ['Wir', 'kaufen', 'am', 'Samstag', 'ein.'],
      alternatives: ['Am Samstag kaufen wir ein.'],
      english: 'We go shopping on Saturday.',
      explanation: 'kaufen in position 2, ein at the end.',
    },
    {
      kind: 'order',
      words: ['Wann', 'fährt', 'der', 'Zug', 'ab?'],
      english: 'When does the train leave?',
      explanation: 'W-question: verb second, prefix at the end.',
    },
    {
      kind: 'gap',
      prompt: 'Ich ___ dich heute Abend an. (anrufen)',
      answers: ['rufe'],
      explanation: 'anrufen: ich rufe … an.',
    },
    {
      kind: 'gap',
      prompt: 'Der Film fängt um acht ___. (anfangen)',
      answers: ['an'],
      explanation: 'The prefix an goes to the end.',
    },
    {
      kind: 'gap',
      prompt: '___ du mit? (mitkommen)',
      answers: ['Kommst'],
      explanation: 'Yes/no question: verb first, mit at the end.',
    },
    {
      kind: 'gap',
      prompt: 'Am Abend ___ wir fern. (fernsehen)',
      answers: ['sehen'],
      explanation: 'fernsehen: wir sehen … fern.',
    },
    {
      kind: 'gap',
      prompt: 'Ich muss morgen früh ___. (aufstehen)',
      answers: ['aufstehen'],
      explanation: 'With müssen the infinitive stays together.',
    },
    {
      kind: 'transform',
      instruction: 'Write the sentence with "ich".',
      prompt: 'einkaufen – heute – im Supermarkt',
      answers: ['Ich kaufe heute im Supermarkt ein.', 'Heute kaufe ich im Supermarkt ein.'],
      explanation: 'kaufe in position 2, ein at the end.',
    },
  ],
}

export const imperativ: GrammarTopic = {
  id: 'imperativ',
  title: 'Der Imperativ',
  english: 'Giving instructions: Komm! Kommt! Kommen Sie!',
  level: 'A1',
  summary:
    'The imperative gives instructions and requests. There are three forms: **du** (Komm!), **ihr** (Kommt!) and **Sie** (Kommen Sie!). Add **bitte** to sound polite: Komm **bitte**!',
  sections: [
    {
      heading: 'The three forms',
      body: [
        '**du**: the du form without -st and without du: du kommst → **Komm!**',
        'Verbs with e → i keep the change: du sprichst → **Sprich!**, du liest → **Lies!** But a → ä does not: du fährst → **Fahr!**',
        '**ihr**: the ihr form without ihr: ihr kommt → **Kommt!**',
        '**Sie**: verb first, then Sie: **Kommen Sie!**',
        '**sein** is irregular: **Sei** leise! **Seid** leise! **Seien Sie** leise!',
      ],
      table: {
        head: ['', 'kommen', 'sprechen', 'aufstehen'],
        rows: [
          ['du', 'Komm!', 'Sprich!', 'Steh auf!'],
          ['ihr', 'Kommt!', 'Sprecht!', 'Steht auf!'],
          ['Sie', 'Kommen Sie!', 'Sprechen Sie!', 'Stehen Sie auf!'],
        ],
      },
      examples: [
        { de: '**Mach** bitte das Fenster zu!', en: 'Please shut the window!' },
        { de: '**Sprechen Sie** bitte langsam.', en: 'Please speak slowly.' },
      ],
    },
  ],
  mistakes: [
    { wrong: 'Kommst bitte!', right: 'Komm bitte!', why: 'The du imperative drops -st.' },
    { wrong: 'Fähr langsam!', right: 'Fahr langsam!', why: 'a → ä does not happen in the imperative.' },
    { wrong: 'Sie kommen bitte!', right: 'Kommen Sie bitte!', why: 'In the Sie imperative the verb comes first.' },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: '___ bitte langsam! (sprechen, du)',
      answers: ['Sprich'],
      explanation: 'du sprichst → Sprich!',
    },
    { kind: 'gap', prompt: '___ das Buch! (lesen, du)', answers: ['Lies'], explanation: 'du liest → Lies!' },
    { kind: 'gap', prompt: '___ bitte leise! (sein, ihr)', answers: ['Seid'], explanation: 'sein, ihr: Seid!' },
    { kind: 'gap', prompt: '___ Sie bitte hier! (warten)', answers: ['Warten'], explanation: 'Sie form: Warten Sie!' },
    {
      kind: 'gap',
      prompt: '___ nicht so schnell! (fahren, du)',
      answers: ['Fahr'],
      explanation: 'No umlaut in the imperative: Fahr!',
    },
    {
      kind: 'gap',
      prompt: 'Steh bitte ___! (aufstehen, du)',
      answers: ['auf'],
      explanation: 'The prefix goes to the end: Steh auf!',
    },
    { kind: 'gap', prompt: '___ mir bitte das Salz! (geben, du)', answers: ['Gib'], explanation: 'du gibst → Gib!' },
    {
      kind: 'transform',
      instruction: 'Make a polite request (Sie).',
      prompt: 'das Formular ausfüllen',
      answers: [
        'Füllen Sie bitte das Formular aus!',
        'Füllen Sie das Formular aus!',
        'Füllen Sie bitte das Formular aus.',
        'Füllen Sie das Formular bitte aus!',
      ],
      explanation: 'Verb first, Sie, then the prefix at the end.',
    },
    {
      kind: 'choice',
      prompt: 'Kinder, ___ eure Hände!',
      options: ['wasch', 'wascht', 'waschen Sie'],
      answer: 1,
      explanation: 'Talking to several children you say du to: ihr form, wascht.',
    },
  ],
}

export const zeitangaben: GrammarTopic = {
  id: 'zeitangaben',
  title: 'Uhrzeit und Zeitangaben',
  english: 'Telling the time, and am, um, im',
  level: 'A1',
  summary:
    'For times use **um**: um acht Uhr. For days and parts of the day use **am**: am Montag, am Abend (but **in der** Nacht). For months, seasons and years use **im**: im Mai, im Winter. In everyday speech, **halb drei** means 2:30, half an hour *before* three.',
  sections: [
    {
      heading: 'Telling the time',
      body: [
        'Official time uses 24 hours: **14.30 Uhr** = vierzehn Uhr dreißig.',
        'Everyday time uses 12 hours: **Viertel nach** zwei (2:15), **halb** drei (2:30), **Viertel vor** drei (2:45), fünf **nach** drei (3:05), zehn **vor** vier (3:50).',
      ],
      table: {
        head: ['Time', 'Official', 'Everyday'],
        rows: [
          ['8:00', 'acht Uhr', 'acht'],
          ['8:15', 'acht Uhr fünfzehn', 'Viertel nach acht'],
          ['8:30', 'acht Uhr dreißig', 'halb neun'],
          ['8:45', 'acht Uhr fünfundvierzig', 'Viertel vor neun'],
          ['20:10', 'zwanzig Uhr zehn', 'zehn nach acht'],
        ],
      },
      examples: [{ de: 'Wie spät ist es? – Es ist **halb sieben**.', en: "What time is it? – It's half past six." }],
    },
    {
      heading: 'am, um, im',
      body: [
        '**um** + clock time: um 9 Uhr, um halb acht.',
        '**am** + day, date, part of the day: am Freitag, am Wochenende, am Morgen, am 3. Mai.',
        '**im** + month, season: im Juli, im Sommer.',
        'Exceptions: **in der** Nacht; years with no preposition: 2024 or im Jahr 2024.',
      ],
      examples: [
        { de: 'Der Kurs beginnt **am** Montag **um** neun.', en: 'The course starts on Monday at nine.' },
        { de: '**Im** August fahren wir ans Meer.', en: "We're going to the seaside in August." },
      ],
    },
  ],
  mistakes: [
    { wrong: 'halb drei = 3:30', right: 'halb drei = 2:30', why: 'halb counts towards the next hour.' },
    { wrong: 'im Montag', right: 'am Montag', why: 'Days take am.' },
    { wrong: 'am Juli', right: 'im Juli', why: 'Months take im.' },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: 'Der Film beginnt ___ acht Uhr.',
      answers: ['um'],
      hint: 'am, um or im',
      explanation: 'Clock time: um.',
    },
    {
      kind: 'gap',
      prompt: 'Ich habe ___ Dienstag frei.',
      answers: ['am'],
      hint: 'am, um or im',
      explanation: 'Day: am.',
    },
    {
      kind: 'gap',
      prompt: '___ Sommer ist es warm.',
      answers: ['Im'],
      hint: 'am, um or im',
      explanation: 'Season: im.',
    },
    {
      kind: 'gap',
      prompt: 'Wir fahren ___ Dezember nach Hause.',
      answers: ['im'],
      hint: 'am, um or im',
      explanation: 'Month: im.',
    },
    {
      kind: 'gap',
      prompt: '___ Abend sehe ich fern.',
      answers: ['Am'],
      hint: 'am, um or im',
      explanation: 'Part of the day: am.',
    },
    {
      kind: 'gap',
      prompt: 'Was machst du ___ Wochenende?',
      answers: ['am'],
      hint: 'am, um or im',
      explanation: 'Wochenende: am.',
    },
    {
      kind: 'choice',
      prompt: 'Es ist 7:30. Es ist …',
      options: ['halb sieben', 'halb acht', 'sieben halb'],
      answer: 1,
      explanation: 'halb counts towards the next hour: 7:30 = halb acht.',
    },
    {
      kind: 'choice',
      prompt: 'Es ist 10:45. Es ist …',
      options: ['Viertel nach elf', 'Viertel vor elf', 'Viertel vor zehn'],
      answer: 1,
      explanation: 'A quarter before eleven.',
    },
    {
      kind: 'choice',
      prompt: 'Es ist 4:15. Es ist …',
      options: ['Viertel nach vier', 'Viertel vor vier', 'halb fünf'],
      answer: 0,
      explanation: 'A quarter after four.',
    },
  ],
}

export const A1_TOPICS: GrammarTopic[] = [
  praesens,
  artikel,
  satzstellungA1,
  negation,
  akkusativA1,
  possessivartikel,
  trennbareVerben,
  imperativ,
  zeitangaben,
]
