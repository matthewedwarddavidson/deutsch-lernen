import type { GrammarExercise } from '../types'

/**
 * Exercises you can only answer by understanding the sentence: who does what to whom
 * when the object comes first, and combining two sentences with a connector.
 */
export const MEANING_EXERCISES: Record<string, GrammarExercise[]> = {
  'dativ-akkusativ': [
    {
      kind: 'choice',
      prompt: 'Den Hund sieht der Mann. Wer sieht wen?',
      options: ['Der Mann sieht den Hund.', 'Der Hund sieht den Mann.'],
      answer: 0,
      explanation: 'Den Hund is Akkusativ, so it is the object, even at the start. Der Mann is the subject.',
    },
    {
      kind: 'choice',
      prompt: 'Die Lehrerin hat dem Kind das Buch gegeben. Wer hat das Buch bekommen?',
      options: ['Die Lehrerin', 'Das Kind'],
      answer: 1,
      explanation: 'Dem Kind is Dativ: the person who receives.',
    },
    {
      kind: 'choice',
      prompt: 'Den neuen Kollegen hat die Chefin gestern angerufen. Wer hat angerufen?',
      options: ['Der neue Kollege', 'Die Chefin'],
      answer: 1,
      explanation: 'Den neuen Kollegen is Akkusativ (masculine -en), so die Chefin is the subject.',
    },
    {
      kind: 'choice',
      prompt: 'Diesen Film hat mir mein Bruder empfohlen. Wer hat den Film empfohlen?',
      options: ['Mein Bruder', 'Ich'],
      answer: 0,
      explanation: 'Mein Bruder is Nominativ, the subject. Mir is Dativ: the person the film was recommended to.',
    },
    {
      kind: 'choice',
      prompt: 'Dem Vermieter gefällt der neue Mieter. Wer mag wen?',
      options: ['Der Vermieter mag den Mieter.', 'Der Mieter mag den Vermieter.'],
      answer: 0,
      explanation:
        'With gefallen, the person who likes is in the Dativ (dem Vermieter); the thing liked is the subject.',
    },
    {
      kind: 'choice',
      prompt: 'Den Brief hat der Postbote der Nachbarin gebracht. Wer hat den Brief bekommen?',
      options: ['Der Postbote', 'Die Nachbarin'],
      answer: 1,
      explanation: 'Der Nachbarin is Dativ here: the receiver. Der Postbote is the subject.',
    },
  ],
  relativsaetze: [
    {
      kind: 'choice',
      prompt: 'Das ist der Mann, den die Polizei sucht. Wer sucht?',
      options: ['Der Mann', 'Die Polizei'],
      answer: 1,
      explanation: 'Den is Akkusativ: the man is being looked for. Die Polizei is the subject of the relative clause.',
    },
    {
      kind: 'choice',
      prompt: 'Das ist die Frau, der ich geholfen habe. Wer hat geholfen?',
      options: ['Ich', 'Die Frau'],
      answer: 0,
      explanation: 'Der is Dativ (helfen + Dativ): the woman was helped.',
    },
    {
      kind: 'transform',
      instruction: 'Join with a relative clause.',
      prompt: 'Ich habe eine Freundin. Sie wohnt in Wien.',
      answers: ['Ich habe eine Freundin, die in Wien wohnt.'],
      explanation: 'die (Nominativ, feminine) + verb at the end.',
    },
    {
      kind: 'transform',
      instruction: 'Join with a relative clause.',
      prompt: 'Das ist das Buch. Ich habe dir von dem Buch erzählt.',
      answers: ['Das ist das Buch, von dem ich dir erzählt habe.'],
      explanation: 'The preposition comes before the relative pronoun: von dem.',
    },
  ],
  konnektoren: [
    {
      kind: 'transform',
      instruction: 'Combine with weil.',
      prompt: 'Ich bleibe heute zu Hause. Ich bin erkältet.',
      answers: ['Ich bleibe heute zu Hause, weil ich erkältet bin.'],
      explanation: 'weil sends the verb to the end: … weil ich erkältet bin.',
    },
    {
      kind: 'transform',
      instruction: 'Combine with obwohl.',
      prompt: 'Er geht spazieren. Es regnet.',
      answers: ['Er geht spazieren, obwohl es regnet.', 'Obwohl es regnet, geht er spazieren.'],
      explanation: 'obwohl + verb at the end. If the obwohl clause comes first, the main clause starts with the verb.',
    },
    {
      kind: 'transform',
      instruction: 'Combine with deshalb.',
      prompt: 'Der Zug hatte Verspätung. Ich bin zu spät gekommen.',
      answers: [
        'Der Zug hatte Verspätung, deshalb bin ich zu spät gekommen.',
        'Der Zug hatte Verspätung. Deshalb bin ich zu spät gekommen.',
      ],
      explanation: 'deshalb takes position 1, so the verb comes straight after it: deshalb bin ich …',
    },
    {
      kind: 'transform',
      instruction: 'Combine with trotzdem.',
      prompt: 'Die Wohnung ist teuer. Wir nehmen sie.',
      answers: ['Die Wohnung ist teuer, trotzdem nehmen wir sie.', 'Die Wohnung ist teuer. Trotzdem nehmen wir sie.'],
      explanation: 'trotzdem is an adverb in position 1: verb next.',
    },
  ],
  finalsaetze: [
    {
      kind: 'transform',
      instruction: 'Combine with damit.',
      prompt: 'Ich spreche langsam. Alle verstehen mich.',
      answers: ['Ich spreche langsam, damit alle mich verstehen.', 'Ich spreche langsam, damit mich alle verstehen.'],
      explanation: 'Different subjects (ich / alle): damit, not um … zu.',
    },
    {
      kind: 'transform',
      instruction: 'Combine with um … zu.',
      prompt: 'Sie lernt Deutsch. Sie will in Berlin studieren.',
      answers: ['Sie lernt Deutsch, um in Berlin zu studieren.'],
      explanation: 'Same subject (sie): um … zu, and drop wollen.',
    },
  ],
  'temporale-nebensaetze': [
    {
      kind: 'transform',
      instruction: 'Combine with nachdem.',
      prompt: 'Wir haben gegessen. Danach sind wir spazieren gegangen.',
      answers: [
        'Nachdem wir gegessen hatten, sind wir spazieren gegangen.',
        'Wir sind spazieren gegangen, nachdem wir gegessen hatten.',
      ],
      explanation: 'The earlier action goes into the Plusquamperfekt: nachdem wir gegessen hatten.',
    },
    {
      kind: 'transform',
      instruction: 'Combine with als.',
      prompt: 'Ich war zehn. Wir sind nach Hamburg gezogen.',
      answers: ['Als ich zehn war, sind wir nach Hamburg gezogen.', 'Wir sind nach Hamburg gezogen, als ich zehn war.'],
      explanation: 'als for a single event in the past; verb at the end of the als clause.',
    },
  ],
  'indirekte-fragen': [
    {
      kind: 'transform',
      instruction: 'Combine into one question with ob.',
      prompt: 'Weißt du es? Kommt Lisa morgen?',
      answers: ['Weißt du, ob Lisa morgen kommt?'],
      explanation: 'A yes/no question becomes ob + verb at the end.',
    },
    {
      kind: 'transform',
      instruction: 'Combine into one sentence.',
      prompt: 'Können Sie mir sagen? Wann fährt der nächste Bus?',
      answers: ['Können Sie mir sagen, wann der nächste Bus fährt?'],
      explanation: 'The question word stays; the verb goes to the end.',
    },
  ],
}
