import type { GrammarTopic } from '../types'

export const passiv: GrammarTopic = {
  id: 'passiv',
  title: 'Passiv',
  english: 'The passive',
  level: 'B1',
  summary:
    'The passive puts the action first and the person doing it in the background: "The house **is being built**." German forms it with **werden** + Partizip II. It is everywhere in news, instructions and official letters.',
  sections: [
    {
      heading: 'Forming the passive',
      body: [
        'Take **werden** in the tense you need and put the **Partizip II** at the end.',
        'The accusative object of the active sentence becomes the subject (Nominativ) of the passive sentence.',
      ],
      table: {
        head: ['Tense', 'Passive', 'English'],
        rows: [
          ['Präsens', 'Das Haus **wird** gebaut.', 'is being built'],
          ['Präteritum', 'Das Haus **wurde** gebaut.', 'was built'],
          ['Perfekt', 'Das Haus **ist** gebaut **worden**.', 'has been / was built'],
          ['mit Modalverb', 'Das Haus **muss** gebaut **werden**.', 'must be built'],
        ],
      },
      examples: [
        { de: 'Aktiv: Der Mechaniker repariert das Auto.', en: 'The mechanic is repairing the car.' },
        {
          de: 'Passiv: Das Auto **wird** (vom Mechaniker) **repariert**.',
          en: 'The car is being repaired (by the mechanic).',
        },
      ],
    },
    {
      heading: 'Who did it: von and durch',
      body: [
        'Usually the doer is left out: that is the point of the passive. If you need it, use **von** + Dativ for people and agents. **durch** + Akkusativ is used for a means or cause.',
      ],
      examples: [
        {
          de: 'Das Bild wurde **von** einem unbekannten Künstler gemalt.',
          en: 'The picture was painted by an unknown artist.',
        },
        { de: 'Die Stadt wurde **durch** ein Erdbeben zerstört.', en: 'The town was destroyed by an earthquake.' },
      ],
    },
    {
      heading: 'Perfekt: worden, not geworden',
      body: [
        'In the passive Perfekt, the participle of werden is **worden** (without ge-). The auxiliary is always **sein**.',
        '**geworden** is only for werden as a full verb, meaning "become": Er ist Arzt geworden.',
      ],
      examples: [{ de: 'Der Dieb **ist** gestern verhaftet **worden**.', en: 'The thief was arrested yesterday.' }],
    },
    {
      heading: 'Passive with modal verbs',
      body: [
        'Modal verb (conjugated) + Partizip II + **werden** (infinitive) at the end.',
        'In subordinate clauses the modal verb goes last: …, dass das Formular unterschrieben werden **muss**.',
      ],
      examples: [
        {
          de: 'Die Medikamente **müssen** kühl gelagert **werden**.',
          en: 'The medicines must be stored somewhere cool.',
        },
        { de: 'Hier **darf** nicht geraucht **werden**.', en: 'Smoking is not allowed here.' },
      ],
    },
    {
      heading: 'Passive without a subject',
      body: [
        'Verbs without an accusative object can still go into the passive. There is no subject; **es** fills position one, or another element does and es disappears.',
      ],
      examples: [
        { de: 'Am Wochenende **wird** viel **gefeiert**.', en: "There's a lot of partying at the weekend." },
        { de: '**Es wird** gebeten, nicht zu rauchen.', en: 'You are requested not to smoke.' },
      ],
    },
  ],
  mistakes: [
    {
      wrong: 'Das Haus ist gebaut geworden.',
      right: 'Das Haus ist gebaut worden.',
      why: 'Passive Perfekt uses worden, never geworden.',
    },
    {
      wrong: 'Das Auto wird repariert von dem Mechaniker.',
      right: 'Das Auto wird von dem Mechaniker repariert.',
      why: 'The participle goes to the end of the clause.',
    },
    {
      wrong: 'Das Paket hat geliefert worden.',
      right: 'Das Paket ist geliefert worden.',
      why: 'Passive Perfekt always takes sein.',
    },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: 'Die Briefe ___ jeden Morgen um 10 Uhr gebracht.',
      answers: ['werden'],
      hint: 'Präsens, Plural',
      explanation: 'Präsens passive: werden (plural, because die Briefe) + Partizip II.',
    },
    {
      kind: 'gap',
      prompt: 'Das Rathaus ___ im 16. Jahrhundert gebaut.',
      answers: ['wurde'],
      hint: 'Präteritum',
      explanation: 'Past passive in writing: wurde + Partizip II.',
    },
    {
      kind: 'gap',
      prompt: 'Der Täter ist gestern Abend festgenommen ___.',
      answers: ['worden'],
      hint: 'Perfekt',
      explanation: 'Passive Perfekt: ist … Partizip II + worden.',
    },
    {
      kind: 'gap',
      prompt: 'Der Antrag muss bis Freitag ___ werden.',
      answers: ['eingereicht'],
      hint: 'einreichen',
      explanation: 'Modal + Partizip II + werden: muss eingereicht werden.',
    },
    {
      kind: 'gap',
      prompt: 'In Deutschland ___ viel Bier getrunken.',
      answers: ['wird'],
      hint: 'Präsens, no real subject',
      explanation: 'Impersonal passive: wird + Partizip II. Bier is uncountable singular.',
    },
    {
      kind: 'gap',
      prompt: 'Die Kirche wurde ___ einen Brand zerstört.',
      answers: ['durch'],
      hint: 'cause, not a person',
      explanation: 'For a cause or means use durch + Akkusativ.',
    },
    {
      kind: 'gap',
      prompt: 'Das Fenster wurde ___ den Kindern kaputt gemacht.',
      answers: ['von'],
      hint: 'by (people)',
      explanation: 'The people doing it: von + Dativ.',
    },
    {
      kind: 'choice',
      prompt: 'Die Brücke ___ letztes Jahr renoviert.',
      options: ['wird', 'wurde', 'ist', 'hat'],
      answer: 1,
      explanation: 'letztes Jahr points to the past: Präteritum passive wurde.',
    },
    {
      kind: 'choice',
      prompt: 'Mein Fahrrad ist gestohlen ___.',
      options: ['geworden', 'worden', 'werden', 'wurde'],
      answer: 1,
      explanation: 'Passive Perfekt: ist + Partizip II + worden.',
    },
    {
      kind: 'order',
      words: ['Die', 'Rechnung', 'muss', 'sofort', 'bezahlt', 'werden.'],
      english: 'The bill must be paid immediately.',
      explanation: 'Modal verb second, Partizip II + werden at the end.',
    },
    {
      kind: 'transform',
      instruction: 'Rewrite in the passive (Präsens). Leave out the doer.',
      prompt: 'Man spricht hier Deutsch.',
      answers: ['Hier wird Deutsch gesprochen.', 'Deutsch wird hier gesprochen.'],
      explanation: 'man disappears; Deutsch becomes the subject: Hier wird Deutsch gesprochen.',
    },
    {
      kind: 'transform',
      instruction: 'Rewrite in the passive (Präteritum). Keep the doer with von.',
      prompt: 'Der Chef unterschrieb den Vertrag.',
      answers: ['Der Vertrag wurde vom Chef unterschrieben.', 'Der Vertrag wurde von dem Chef unterschrieben.'],
      explanation: 'den Vertrag → der Vertrag (subject). der Chef → vom Chef (von + Dativ).',
    },
    {
      kind: 'transform',
      instruction: 'Rewrite in the passive (Perfekt).',
      prompt: 'Man hat das Problem gelöst.',
      answers: ['Das Problem ist gelöst worden.'],
      explanation: 'Perfekt passive: ist + gelöst + worden.',
    },
    {
      kind: 'transform',
      instruction: 'Rewrite in the passive with the modal verb.',
      prompt: 'Man muss die Tür abschließen.',
      answers: ['Die Tür muss abgeschlossen werden.'],
      explanation: 'muss + Partizip II + werden.',
    },
  ],
}
