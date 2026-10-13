import type { ListeningText } from '../types'

export const SCRIPTS_A1: ListeningText[] = [
  {
    id: 'im-cafe',
    title: 'Im Café',
    level: 'A1',
    theme: 'essen',
    genre: 'dialogue',
    voices: { Kellner: 'jonas', Gast: 'lena' },
    situation: 'A woman orders in a café. Listen for what she orders and how much she pays.',
    lines: [
      { speaker: 'Kellner', text: 'Guten Tag! Was möchten Sie trinken?' },
      { speaker: 'Gast', text: 'Guten Tag. Ich hätte gern einen Kaffee mit Milch, bitte.' },
      { speaker: 'Kellner', text: 'Gern. Möchten Sie auch etwas essen?' },
      { speaker: 'Gast', text: 'Ja. Haben Sie Kuchen?' },
      { speaker: 'Kellner', text: 'Ja, wir haben Apfelkuchen und Schokoladenkuchen.' },
      { speaker: 'Gast', text: 'Dann nehme ich ein Stück Apfelkuchen.' },
      { speaker: 'Kellner', text: 'Ein Kaffee mit Milch und ein Apfelkuchen. Kommt sofort.' },
      { speaker: 'Gast', text: 'Entschuldigung, ich möchte bitte zahlen.' },
      { speaker: 'Kellner', text: 'Das macht sechs Euro achtzig.' },
      { speaker: 'Gast', text: 'Sieben Euro. Stimmt so.' },
      { speaker: 'Kellner', text: 'Vielen Dank! Einen schönen Tag noch.' },
    ],
    questions: [
      {
        kind: 'choice',
        question: 'Was trinkt die Frau?',
        options: ['Tee', 'Kaffee mit Milch', 'Kaffee ohne Milch'],
        answer: 1,
      },
      {
        kind: 'choice',
        question: 'Was isst sie?',
        options: ['Apfelkuchen', 'Schokoladenkuchen', 'Ein Brötchen'],
        answer: 0,
      },
      {
        kind: 'choice',
        question: 'Wie viel kostet alles?',
        options: ['6,80 €', '7,00 €', '8,60 €'],
        answer: 0,
        explanation: 'Sie gibt sieben Euro: „Stimmt so" heißt, der Rest ist Trinkgeld (a tip).',
      },
    ],
  },
  {
    id: 'neue-nachbarn',
    title: 'Neue Nachbarn',
    level: 'A1',
    theme: 'wohnen',
    genre: 'dialogue',
    voices: { 'Frau Becker': 'katrin', 'Herr Yilmaz': 'markus' },
    situation: 'Two neighbours meet on the stairs for the first time.',
    lines: [
      { speaker: 'Frau Becker', text: 'Guten Morgen! Sind Sie neu hier?' },
      {
        speaker: 'Herr Yilmaz',
        text: 'Guten Morgen! Ja, ich wohne seit Montag im zweiten Stock. Mein Name ist Yilmaz, Emre Yilmaz.',
      },
      { speaker: 'Frau Becker', text: 'Freut mich. Ich bin Helga Becker. Ich wohne im ersten Stock, links.' },
      { speaker: 'Herr Yilmaz', text: 'Freut mich auch, Frau Becker.' },
      { speaker: 'Frau Becker', text: 'Woher kommen Sie, Herr Yilmaz?' },
      {
        speaker: 'Herr Yilmaz',
        text: 'Ich komme aus Izmir, aus der Türkei. Aber ich wohne schon zehn Jahre in Deutschland. Vorher war ich in Köln.',
      },
      { speaker: 'Frau Becker', text: 'Und was machen Sie beruflich?' },
      { speaker: 'Herr Yilmaz', text: 'Ich bin Ingenieur. Ich arbeite bei einer Firma hier in der Stadt.' },
      { speaker: 'Frau Becker', text: 'Schön. Wenn Sie etwas brauchen, klingeln Sie einfach!' },
      { speaker: 'Herr Yilmaz', text: 'Danke, das ist sehr nett. Auf Wiedersehen!' },
    ],
    questions: [
      {
        kind: 'truefalse',
        statement: 'Herr Yilmaz wohnt im ersten Stock.',
        answer: false,
        explanation: 'Im zweiten Stock.',
      },
      {
        kind: 'choice',
        question: 'Woher kommt Herr Yilmaz?',
        options: ['Aus Köln', 'Aus der Türkei', 'Aus Griechenland'],
        answer: 1,
      },
      {
        kind: 'choice',
        question: 'Was ist er von Beruf?',
        options: ['Lehrer', 'Arzt', 'Ingenieur'],
        answer: 2,
      },
      { kind: 'truefalse', statement: 'Er lebt seit zehn Jahren in Deutschland.', answer: true },
    ],
  },
  {
    id: 'durchsage-gleis',
    title: 'Am Bahnhof',
    level: 'A1',
    theme: 'reisen',
    genre: 'announcement',
    voices: { Durchsage: 'katrin' },
    situation: 'You are waiting for a train to Hamburg. Listen to the announcement.',
    lines: [
      {
        speaker: 'Durchsage',
        text: 'Achtung an Gleis 4. Der Intercity nach Hamburg, Abfahrt 14.25 Uhr, kommt heute zehn Minuten später.',
      },
      {
        speaker: 'Durchsage',
        text: 'Der Zug fährt heute nicht von Gleis 4, sondern von Gleis 6. Ich wiederhole: Der Intercity nach Hamburg fährt heute von Gleis 6.',
      },
      { speaker: 'Durchsage', text: 'Wir bitten um Entschuldigung.' },
    ],
    questions: [
      {
        kind: 'choice',
        question: 'Wann fährt der Zug heute?',
        options: ['Um 14.25 Uhr', 'Um 14.35 Uhr', 'Um 14.15 Uhr'],
        answer: 1,
        explanation: 'Zehn Minuten später als 14.25 Uhr.',
      },
      {
        kind: 'choice',
        question: 'Von welchem Gleis fährt der Zug?',
        options: ['Gleis 4', 'Gleis 6', 'Gleis 14'],
        answer: 1,
      },
    ],
  },
  {
    id: 'anruf-arztpraxis',
    title: 'Eine Nachricht von der Arztpraxis',
    level: 'A1',
    theme: 'gesundheit',
    genre: 'announcement',
    voices: { Praxis: 'lena' },
    situation: "The doctor's surgery leaves a message on your phone. Listen for the new appointment.",
    lines: [
      {
        speaker: 'Praxis',
        text: 'Guten Tag, hier ist die Praxis Dr. Wolf. Das ist eine Nachricht für Herrn Novak. Sie haben morgen, am Dienstag, um neun Uhr einen Termin.',
      },
      {
        speaker: 'Praxis',
        text: 'Leider ist Dr. Wolf morgen krank. Wir haben einen neuen Termin für Sie: am Donnerstag um halb elf. Bitte bringen Sie Ihre Versichertenkarte mit.',
      },
      {
        speaker: 'Praxis',
        text: 'Passt Ihnen der Termin nicht? Dann rufen Sie uns bitte an. Unsere Nummer ist 0221 34 56 78. Vielen Dank und auf Wiederhören!',
      },
    ],
    questions: [
      {
        kind: 'truefalse',
        statement: 'Der Termin am Dienstag findet statt.',
        answer: false,
        explanation: 'Dr. Wolf ist krank.',
      },
      {
        kind: 'choice',
        question: 'Wann ist der neue Termin?',
        options: ['Donnerstag, 10.30 Uhr', 'Donnerstag, 11.30 Uhr', 'Dienstag, 9 Uhr'],
        answer: 0,
        explanation: 'Halb elf = 10.30 Uhr.',
      },
      {
        kind: 'choice',
        question: 'Was soll Herr Novak mitbringen?',
        options: ['Seinen Pass', 'Seine Versichertenkarte', 'Ein Formular'],
        answer: 1,
      },
    ],
  },
]
