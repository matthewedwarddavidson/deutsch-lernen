import type { GrammarTopic } from '../types'

export const relativsaetze: GrammarTopic = {
  id: 'relativsaetze',
  title: 'Relativsätze',
  english: 'Relative clauses',
  level: 'B1',
  summary:
    'A relative clause describes a noun: "the man **who** lives next door". The relative pronoun takes its gender and number from the noun, but its case from its job in the relative clause. The verb goes to the end.',
  sections: [
    {
      heading: 'The pattern',
      body: [
        'The relative pronoun usually looks like the definite article. Only the dative plural (**denen**) and the genitive (**dessen**, **deren**) differ.',
        'Two questions decide the form: **What is the noun\'s gender and number?** That comes from the main clause. **What job does the pronoun do in its own clause?** That gives the case.',
      ],
      table: {
        head: ['', 'Maskulin', 'Neutrum', 'Feminin', 'Plural'],
        rows: [
          ['Nominativ', 'der', 'das', 'die', 'die'],
          ['Akkusativ', 'den', 'das', 'die', 'die'],
          ['Dativ', 'dem', 'dem', 'der', '**denen**'],
          ['Genitiv', '**dessen**', '**dessen**', '**deren**', '**deren**'],
        ],
      },
      examples: [
        { de: 'Der Mann, **der** neben mir wohnt, ist Arzt.', en: 'The man who lives next to me is a doctor. (subject → Nominativ)' },
        { de: 'Der Mann, **den** ich gestern getroffen habe, ist Arzt.', en: 'The man (whom) I met yesterday is a doctor. (object → Akkusativ)' },
        { de: 'Der Mann, **dem** ich geholfen habe, ist Arzt.', en: 'The man I helped is a doctor. (helfen + Dativ)' },
        { de: 'Die Kinder, **denen** ich Deutsch beibringe, sind sehr motiviert.', en: 'The children I teach German to are very motivated.' },
      ],
    },
    {
      heading: 'Word order',
      body: [
        'A relative clause is a subordinate clause: the conjugated verb goes to the **end**. Commas surround it.',
        'In English you can drop "who" or "that". In German you never can.',
      ],
      examples: [
        { de: 'Das ist das Buch, das ich dir empfohlen **habe**.', en: 'That is the book (that) I recommended to you.' },
        { de: 'Die Frau, die gerade **anruft**, ist meine Chefin.', en: 'The woman who is calling now is my boss.' },
      ],
    },
    {
      heading: 'With prepositions',
      body: [
        'If the verb needs a preposition, the preposition goes **in front of** the relative pronoun, and it decides the case.',
      ],
      examples: [
        { de: 'Das ist die Kollegin, **mit der** ich das Projekt mache.', en: 'That is the colleague I am doing the project with.' },
        { de: 'Der Urlaub, **auf den** ich mich so gefreut hatte, war eine Katastrophe.', en: 'The holiday I had been so looking forward to was a disaster.' },
        { de: 'Die Stadt, **in der** ich geboren bin, ist sehr klein.', en: 'The town I was born in is very small.' },
      ],
    },
    {
      heading: 'Genitive: dessen and deren',
      body: [
        '**dessen** / **deren** mean "whose". They refer back to the owner; the noun that follows takes no article.',
      ],
      examples: [
        { de: 'Das ist der Nachbar, **dessen** Hund immer bellt.', en: 'That is the neighbour whose dog always barks.' },
        { de: 'Ich kenne eine Frau, **deren** Kinder in London studieren.', en: 'I know a woman whose children study in London.' },
      ],
    },
    {
      heading: 'wo and was',
      body: [
        'After places you can use **wo** instead of "in dem / in der". After **alles, etwas, nichts, vieles, das** and superlatives, use **was**. Use **was** too when the clause refers to the whole previous sentence.',
      ],
      examples: [
        { de: 'Die Stadt, **wo** ich wohne, ist schön.', en: 'The town where I live is nice.' },
        { de: 'Das ist **alles, was** ich weiß.', en: 'That is all (that) I know.' },
        { de: 'Er hat die Prüfung bestanden, **was** mich sehr freut.', en: 'He passed the exam, which makes me very happy.' },
      ],
    },
  ],
  mistakes: [
    { wrong: 'Der Mann, der ich getroffen habe …', right: 'Der Mann, den ich getroffen habe …', why: 'ich is the subject, so the pronoun is the object: Akkusativ.' },
    { wrong: 'Die Leute, die ich helfe …', right: 'Die Leute, denen ich helfe …', why: 'helfen takes the dative; dative plural is denen.' },
    { wrong: 'Das Buch, das ich habe gelesen …', right: 'Das Buch, das ich gelesen habe …', why: 'The conjugated verb goes last in a relative clause.' },
    { wrong: 'Alles, das ich weiß …', right: 'Alles, was ich weiß …', why: 'After alles, etwas, nichts use was.' },
  ],
  exercises: [
    { kind: 'gap', prompt: 'Der Film, ___ wir gestern gesehen haben, war langweilig.', answers: ['den'], hint: 'der Film; sehen + Akk', explanation: 'wir is the subject; the film is the object, so masculine Akkusativ: den.' },
    { kind: 'gap', prompt: 'Die Frau, ___ dort drüben steht, ist meine Lehrerin.', answers: ['die'], hint: 'die Frau; subject', explanation: 'The woman is the subject of "steht": feminine Nominativ die.' },
    { kind: 'gap', prompt: 'Das Kind, ___ ich das Buch geschenkt habe, hat sich sehr gefreut.', answers: ['dem'], hint: 'das Kind; schenken + Dat (to whom?)', explanation: 'You give something to someone: the child is the dative object. Neuter Dativ: dem.' },
    { kind: 'gap', prompt: 'Die Nachbarn, ___ ich manchmal helfe, sind schon über 90.', answers: ['denen'], hint: 'Plural; helfen + Dat', explanation: 'helfen takes the dative. Dative plural relative pronoun is denen, not den.' },
    { kind: 'gap', prompt: 'Das ist der Kollege, ___ Frau aus Brasilien kommt.', answers: ['dessen'], hint: 'whose (der Kollege)', explanation: 'whose + masculine owner: dessen.' },
    { kind: 'gap', prompt: 'Ich habe eine Freundin, ___ Eltern in Spanien leben.', answers: ['deren'], hint: 'whose (die Freundin)', explanation: 'whose + feminine owner: deren.' },
    { kind: 'gap', prompt: 'Die Wohnung, in ___ wir wohnen, ist zu klein.', answers: ['der'], hint: 'die Wohnung; in + Dat (wo?)', explanation: 'wohnen in answers "wo?", so Dativ. Feminine Dativ: der.' },
    { kind: 'gap', prompt: 'Das ist das Thema, über ___ wir gestern diskutiert haben.', answers: ['das'], hint: 'das Thema; über + Akk', explanation: 'diskutieren über + Akkusativ. Neuter Akkusativ: das.' },
    { kind: 'gap', prompt: 'Es gibt nichts, ___ mich mehr ärgert als Unpünktlichkeit.', answers: ['was'], hint: 'after nichts', explanation: 'After nichts, alles, etwas the relative pronoun is was.' },
    { kind: 'gap', prompt: 'Die Freunde, mit ___ ich in den Urlaub fahre, kenne ich seit der Schule.', answers: ['denen'], hint: 'Plural; mit + Dat', explanation: 'mit always takes the dative; dative plural: denen.' },
    {
      kind: 'choice',
      prompt: 'Der Arzt, ___ ich vertraue, hat seine Praxis geschlossen.',
      options: ['der', 'den', 'dem', 'dessen'],
      answer: 2,
      explanation: 'vertrauen takes the dative: jemandem vertrauen. Masculine Dativ: dem.',
    },
    {
      kind: 'choice',
      prompt: 'Er hat endlich angerufen, ___ mich sehr erleichtert hat.',
      options: ['das', 'was', 'der', 'wo'],
      answer: 1,
      explanation: 'The clause refers to the whole previous sentence, not a noun: was.',
    },
    {
      kind: 'order',
      words: ['Das', 'ist', 'die', 'Stadt,', 'in', 'der', 'ich', 'aufgewachsen', 'bin.'],
      english: 'That is the town I grew up in.',
      explanation: 'Preposition + pronoun start the relative clause; the conjugated verb (bin) goes last.',
    },
    {
      kind: 'order',
      words: ['Kennst', 'du', 'den', 'Mann,', 'der', 'neben', 'Anna', 'sitzt?'],
      english: 'Do you know the man sitting next to Anna?',
      explanation: 'der is the subject of the relative clause; sitzt goes to the end.',
    },
    {
      kind: 'transform',
      instruction: 'Join the sentences with a relative clause.',
      prompt: 'Ich habe einen Freund. Er wohnt in Wien.',
      answers: ['Ich habe einen Freund, der in Wien wohnt.'],
      explanation: 'Er is the subject: masculine Nominativ der, verb at the end.',
    },
    {
      kind: 'transform',
      instruction: 'Join the sentences with a relative clause.',
      prompt: 'Das ist die Firma. Ich habe mich bei der Firma beworben.',
      answers: ['Das ist die Firma, bei der ich mich beworben habe.'],
      explanation: 'sich bewerben bei + Dativ. The preposition comes first: bei der … beworben habe.',
    },
  ],
}
