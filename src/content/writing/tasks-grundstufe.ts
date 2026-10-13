import type { WritingTask } from '../types'

/** More A1 and A2 writing tasks. */
export const TASKS_GRUNDSTUFE: WritingTask[] = [
  {
    id: 'einladung-annehmen',
    title: 'Eine Einladung annehmen',
    level: 'A1',
    theme: 'beziehungen',
    format: 'informal-email',
    instructions:
      'Ihr Freund Ben lädt Sie zu seiner Party am Samstag ein. Sie kommen gern. Schreiben Sie Ben eine kurze Nachricht (circa 30 Wörter).',
    points: ['Bedanken Sie sich.', 'Fragen Sie, wann die Party beginnt.', 'Fragen Sie, was Sie mitbringen sollen.'],
    minWords: 30,
    phrases: [
      { de: 'Lieber Ben, …', en: 'Dear Ben, …' },
      { de: 'Vielen Dank für die Einladung!', en: 'Thanks for the invitation!' },
      { de: 'Ich komme gern.', en: "I'd love to come." },
      { de: 'Wann beginnt die Party?', en: 'When does the party start?' },
      { de: 'Soll ich etwas mitbringen?', en: 'Shall I bring anything?' },
      { de: 'Bis Samstag!', en: 'See you on Saturday!' },
    ],
    model:
      'Lieber Ben,\n\nvielen Dank für die Einladung! Ich komme sehr gern. Wann beginnt die Party? Und soll ich etwas mitbringen? Ich kann einen Kuchen backen oder Getränke kaufen.\n\nBis Samstag!\nSam',
  },
  {
    id: 'heizung-kaputt',
    title: 'Die Heizung ist kaputt',
    level: 'A2',
    theme: 'wohnen',
    format: 'formal-email',
    instructions:
      'In Ihrer Wohnung funktioniert die Heizung nicht. Schreiben Sie eine E-Mail an Ihre Vermieterin, Frau Krüger (circa 50 Wörter).',
    points: [
      'Beschreiben Sie das Problem.',
      'Sagen Sie, seit wann Sie das Problem haben.',
      'Bitten Sie um einen Termin mit dem Handwerker.',
    ],
    minWords: 50,
    phrases: [
      { de: 'Sehr geehrte Frau Krüger,', en: 'Dear Mrs Krüger,' },
      { de: 'In meiner Wohnung funktioniert … nicht.', en: "… isn't working in my flat." },
      { de: 'Seit Montag ist es sehr kalt.', en: 'It has been very cold since Monday.' },
      { de: 'Könnten Sie bitte einen Handwerker schicken?', en: 'Could you please send a tradesman?' },
      { de: 'Ich bin am … ab … Uhr zu Hause.', en: "I'm at home on … from … o'clock." },
      { de: 'Vielen Dank im Voraus.', en: 'Thank you in advance.' },
    ],
    model:
      'Sehr geehrte Frau Krüger,\n\nin meiner Wohnung funktioniert die Heizung nicht. Seit Montag ist es im Wohnzimmer und im Schlafzimmer sehr kalt, nur 15 Grad. Ich habe schon den Hausmeister angerufen, aber er war nicht da.\n\nKönnten Sie bitte einen Handwerker schicken? Ich bin am Donnerstag und Freitag ab 14 Uhr zu Hause.\n\nVielen Dank im Voraus.\n\nMit freundlichen Grüßen\nSam Taylor',
  },
  {
    id: 'urlaubsgruss',
    title: 'Grüße aus dem Urlaub',
    level: 'A2',
    theme: 'reisen',
    format: 'informal-email',
    instructions: 'Sie sind im Urlaub. Schreiben Sie Ihrer Kollegin Anna eine Nachricht (circa 50 Wörter).',
    points: ['Wo sind Sie und mit wem?', 'Was haben Sie schon gemacht?', 'Wie ist das Wetter und das Essen?'],
    minWords: 50,
    phrases: [
      { de: 'Viele Grüße aus …!', en: 'Greetings from …!' },
      { de: 'Ich bin seit … Tagen in …', en: "I've been in … for … days." },
      { de: 'Gestern haben wir … besichtigt.', en: 'Yesterday we visited …' },
      { de: 'Das Wetter ist super / leider schlecht.', en: 'The weather is great / unfortunately bad.' },
      { de: 'Das Essen schmeckt sehr gut.', en: 'The food is very good.' },
      { de: 'Bis bald im Büro!', en: 'See you soon at the office!' },
    ],
    model:
      'Liebe Anna,\n\nviele Grüße aus Portugal! Ich bin seit fünf Tagen mit meiner Schwester in Lissabon. Gestern haben wir eine alte Burg besichtigt und sind mit der Straßenbahn durch die Stadt gefahren. Das Wetter ist super: jeden Tag Sonne und 25 Grad. Das Essen schmeckt sehr gut, besonders der Fisch.\n\nBis bald im Büro!\nSam',
  },
  {
    id: 'termin-verschieben',
    title: 'Einen Termin verschieben',
    level: 'A2',
    theme: 'arbeit',
    format: 'informal-email',
    instructions:
      'Sie haben am Mittwoch ein Treffen mit Ihrem Kollegen Daniel. Sie können nicht kommen. Schreiben Sie Daniel eine E-Mail (circa 50 Wörter).',
    points: [
      'Entschuldigen Sie sich.',
      'Erklären Sie, warum Sie nicht kommen können.',
      'Schlagen Sie einen neuen Termin vor.',
    ],
    minWords: 50,
    phrases: [
      { de: 'Hallo Daniel,', en: 'Hi Daniel,' },
      { de: 'Es tut mir leid, aber …', en: "I'm sorry, but …" },
      { de: 'Ich kann am Mittwoch leider nicht, weil …', en: "Unfortunately I can't make Wednesday because …" },
      { de: 'Hast du am … Zeit?', en: 'Are you free on …?' },
      { de: 'Passt dir … um … Uhr?', en: 'Does … at … suit you?' },
      { de: 'Sag mir bitte Bescheid.', en: 'Please let me know.' },
    ],
    model:
      'Hallo Daniel,\n\nes tut mir leid, aber ich kann am Mittwoch leider nicht zu unserem Treffen kommen, weil ich zum Zahnarzt muss. Der Termin ist erst heute gekommen.\n\nHast du am Donnerstag oder Freitag Zeit? Passt dir Donnerstag um zehn Uhr? Dann können wir das Projekt in Ruhe besprechen.\n\nSag mir bitte Bescheid.\n\nViele Grüße\nSam',
  },
]
