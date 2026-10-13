import type { WritingTask } from '../types'

export const TASKS_A1: WritingTask[] = [
  {
    id: 'kurs-absagen',
    title: 'Nicht zum Kurs kommen',
    level: 'A1',
    theme: 'bildung',
    format: 'informal-email',
    instructions:
      'Sie sind krank und können morgen nicht zum Deutschkurs kommen. Schreiben Sie Ihrer Freundin Julia aus dem Kurs eine kurze Nachricht (circa 30 Wörter).',
    points: [
      'Sagen Sie, warum Sie nicht kommen.',
      'Fragen Sie nach den Hausaufgaben.',
      'Sagen Sie, wann Sie wieder kommen.',
    ],
    minWords: 30,
    phrases: [
      { de: 'Liebe Julia, …', en: 'Dear Julia, …' },
      { de: 'Ich bin leider krank.', en: "I'm afraid I'm ill." },
      { de: 'Ich kann morgen nicht kommen.', en: "I can't come tomorrow." },
      { de: 'Was sind die Hausaufgaben?', en: 'What is the homework?' },
      { de: 'Am Montag komme ich wieder.', en: "I'll be back on Monday." },
      { de: 'Viele Grüße', en: 'Best wishes' },
    ],
    model:
      'Liebe Julia,\n\nich bin leider krank und habe Fieber. Ich kann morgen nicht zum Kurs kommen. Was sind die Hausaufgaben? Kannst du mir bitte eine Nachricht schreiben? Am Montag komme ich wieder.\n\nViele Grüße\nSam',
  },
  {
    id: 'sich-vorstellen',
    title: 'Sich vorstellen',
    level: 'A1',
    theme: 'beziehungen',
    format: 'forum',
    instructions:
      'Sie sind neu in einem Deutschkurs. Die Lehrerin bittet alle, sich im Kursforum vorzustellen. Schreiben Sie einen kurzen Text (circa 30 Wörter).',
    points: ['Name, Alter und Herkunft', 'Wohnort und Beruf', 'Hobbys: Was machen Sie gern?'],
    minWords: 30,
    phrases: [
      { de: 'Ich heiße …', en: 'My name is …' },
      { de: 'Ich bin … Jahre alt.', en: "I'm … years old." },
      { de: 'Ich komme aus …', en: "I'm from …" },
      { de: 'Ich wohne in …', en: 'I live in …' },
      { de: 'Ich bin … von Beruf.', en: "I'm a … by profession." },
      { de: 'In meiner Freizeit … ich gern.', en: 'In my free time I like …' },
    ],
    model:
      'Hallo zusammen!\n\nIch heiße Sam und bin 31 Jahre alt. Ich komme aus England, aus Leeds. Jetzt wohne ich in Hamburg. Ich bin Programmierer von Beruf. In meiner Freizeit spiele ich gern Fußball und ich lese gern.\n\nBis bald im Kurs!\nSam',
  },
  {
    id: 'anfrage-sprachschule',
    title: 'Eine Frage an die Sprachschule',
    level: 'A1',
    theme: 'bildung',
    format: 'formal-email',
    instructions:
      'Sie möchten bei der Sprachschule „Lingua" einen Deutschkurs machen. Schreiben Sie eine E-Mail an die Schule (circa 30 Wörter).',
    points: ['Sagen Sie, welchen Kurs Sie suchen.', 'Fragen Sie nach den Kurszeiten.', 'Fragen Sie nach dem Preis.'],
    minWords: 30,
    phrases: [
      { de: 'Sehr geehrte Damen und Herren,', en: 'Dear Sir or Madam,' },
      { de: 'Ich suche einen Deutschkurs für Anfänger.', en: "I'm looking for a German course for beginners." },
      { de: 'Wann beginnt der Kurs?', en: 'When does the course start?' },
      { de: 'Wie viel kostet der Kurs?', en: 'How much does the course cost?' },
      { de: 'Vielen Dank für Ihre Antwort.', en: 'Thank you for your reply.' },
      { de: 'Mit freundlichen Grüßen', en: 'Yours faithfully / Kind regards' },
    ],
    model:
      'Sehr geehrte Damen und Herren,\n\nich suche einen Deutschkurs für Anfänger am Abend. Ich arbeite bis 17 Uhr. Wann beginnen die Kurse und an welchen Tagen sind sie? Wie viel kostet ein Kurs?\n\nVielen Dank für Ihre Antwort.\n\nMit freundlichen Grüßen\nSam Taylor',
  },
]
