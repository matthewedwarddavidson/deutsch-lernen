import type { WritingTask } from '../types'

export const TASKS_MORE: WritingTask[] = [
  {
    id: 'einladung-hochzeit',
    title: 'Glückwunsch zur Hochzeit',
    level: 'B1',
    theme: 'beziehungen',
    format: 'informal-email',
    instructions:
      'Ihre Freundin Clara heiratet im Juni und hat Sie zur Hochzeit eingeladen. Schreiben Sie ihr eine E-Mail (circa 80 Wörter).',
    points: [
      'Gratulieren Sie und bedanken Sie sich für die Einladung.',
      'Sagen Sie, dass Sie kommen, und fragen Sie, ob Sie Ihren Partner / Ihre Partnerin mitbringen dürfen.',
      'Bieten Sie Hilfe bei der Vorbereitung an.',
      'Fragen Sie nach einem Geschenkwunsch.',
    ],
    minWords: 80,
    phrases: [
      { de: 'Herzlichen Glückwunsch!', en: 'Congratulations!' },
      { de: 'Vielen Dank für die Einladung, ich komme sehr gern.', en: "Thanks for the invitation, I'd love to come." },
      { de: 'Wäre es in Ordnung, wenn …?', en: 'Would it be OK if …?' },
      { de: 'Kann ich dir bei … helfen?', en: 'Can I help you with …?' },
      { de: 'Habt ihr einen besonderen Wunsch?', en: 'Is there anything in particular you would like?' },
    ],
    model:
      'Liebe Clara,\n\nherzlichen Glückwunsch! Ich habe mich riesig über eure Einladung gefreut und komme natürlich sehr gern. Wäre es in Ordnung, wenn ich meinen Freund Tom mitbringe? Ihr habt ihn ja schon einmal kennengelernt.\n\nIch weiß, dass so eine Hochzeit viel Arbeit ist. Kann ich dir bei der Vorbereitung helfen? Ich könnte zum Beispiel einen Kuchen backen oder am Tag vorher beim Dekorieren helfen.\n\nUnd noch eine Frage: Habt ihr einen besonderen Wunsch für ein Geschenk?\n\nLiebe Grüße und bis bald\nAlex',
  },
  {
    id: 'forum-online-einkaufen',
    title: 'Forumsbeitrag: Online einkaufen',
    level: 'B1',
    theme: 'einkaufen',
    format: 'forum',
    instructions:
      'In einem Forum wird diskutiert: „Kaufen Sie lieber online oder im Geschäft ein?" Schreiben Sie Ihre Meinung (circa 80 Wörter).',
    points: [
      'Sagen Sie, wo Sie meistens einkaufen.',
      'Nennen Sie Vorteile und Nachteile des Online-Einkaufs.',
      'Begründen Sie Ihre Meinung.',
    ],
    minWords: 80,
    phrases: [
      { de: 'Ich kaufe meistens … ein, weil …', en: 'I mostly shop … because …' },
      { de: 'Ein großer Vorteil ist, dass …', en: 'A big advantage is that …' },
      { de: 'Auf der anderen Seite …', en: 'On the other hand …' },
      { de: 'Meiner Meinung nach …', en: 'In my opinion …' },
      { de: 'Deshalb finde ich …', en: "That's why I think …" },
    ],
    model:
      'Ich kaufe Kleidung und Lebensmittel meistens im Geschäft, aber Bücher und Elektronik bestelle ich oft online.\n\nEin großer Vorteil beim Online-Einkauf ist, dass man Zeit spart und die Preise leicht vergleichen kann. Außerdem ist die Auswahl viel größer. Auf der anderen Seite kann man die Sachen nicht anprobieren, und oft muss man viel zurückschicken. Das ist schlecht für die Umwelt.\n\nMeiner Meinung nach sollte man die Geschäfte in der Stadt unterstützen, weil sie sonst schließen müssen. Deshalb kaufe ich nur online, wenn ich etwas im Laden nicht finde.',
  },
  {
    id: 'kursleiterin-absage',
    title: 'Nachricht an die Kursleiterin',
    level: 'B1',
    theme: 'bildung',
    format: 'formal-email',
    instructions:
      'Sie können morgen nicht zum Deutschkurs kommen. Schreiben Sie Ihrer Kursleiterin, Frau Schröder, eine kurze Nachricht (circa 40 Wörter).',
    points: ['Entschuldigen Sie sich und nennen Sie den Grund.', 'Fragen Sie nach den Hausaufgaben.'],
    minWords: 40,
    phrases: [
      { de: 'Liebe Frau Schröder,', en: 'Dear Ms Schröder, (friendly-formal)' },
      {
        de: 'leider kann ich morgen nicht am Kurs teilnehmen, weil …',
        en: "unfortunately I can't attend tomorrow because …",
      },
      { de: 'Könnten Sie mir bitte sagen, …?', en: 'Could you please tell me …?' },
      { de: 'Viele Grüße', en: 'Kind regards' },
    ],
    model:
      'Liebe Frau Schröder,\n\nleider kann ich morgen nicht zum Kurs kommen, weil ich einen wichtigen Termin beim Arzt habe. Es tut mir leid. Könnten Sie mir bitte sagen, welche Hausaufgaben wir für nächste Woche machen sollen?\n\nVielen Dank und viele Grüße\nAlex Morgan',
  },
  {
    id: 'praktikum-anfrage-b2',
    title: 'Anfrage: Praktikumsplatz',
    level: 'B2',
    theme: 'arbeit',
    format: 'formal-email',
    instructions:
      'Sie haben auf der Website eines Verlags gelesen, dass dort Praktika angeboten werden. Schreiben Sie eine E-Mail an die Personalabteilung (circa 100 Wörter).',
    points: [
      'Stellen Sie sich kurz vor und erklären Sie Ihr Interesse.',
      'Fragen Sie nach Dauer, Zeitraum und Bezahlung.',
      'Erkundigen Sie sich nach den Bewerbungsunterlagen.',
      'Beschreiben Sie, was Sie mitbringen.',
    ],
    minWords: 100,
    phrases: [
      {
        de: 'Mit großem Interesse habe ich auf Ihrer Website gelesen, dass …',
        en: 'I read with great interest on your website that …',
      },
      { de: 'Ich würde mich gern nach … erkundigen.', en: 'I would like to enquire about …' },
      { de: 'Darüber hinaus wüsste ich gern, …', en: "In addition, I'd like to know …" },
      { de: 'Ich verfüge über …', en: 'I have (skills, experience) …' },
      { de: 'Über eine Antwort würde ich mich sehr freuen.', en: 'I would be very pleased to hear from you.' },
    ],
    model:
      'Sehr geehrte Damen und Herren,\n\nmit großem Interesse habe ich auf Ihrer Website gelesen, dass Ihr Verlag Praktika im Lektorat anbietet. Ich studiere Germanistik im vierten Semester und möchte gern praktische Erfahrungen in der Verlagsarbeit sammeln.\n\nDaher würde ich mich gern nach den Bedingungen erkundigen: Wie lange dauert ein Praktikum, und ab wann wäre ein Beginn möglich? Darüber hinaus wüsste ich gern, ob das Praktikum vergütet wird. Welche Unterlagen benötigen Sie für eine Bewerbung?\n\nIch verfüge über sehr gute Deutsch- und Englischkenntnisse, arbeite sorgfältig und habe bereits für unsere Studierendenzeitung geschrieben.\n\nÜber eine Antwort würde ich mich sehr freuen.\n\nMit freundlichen Grüßen\nAlex Morgan',
  },
  {
    id: 'forum-kuenstliche-intelligenz-b2',
    title: 'Forumsbeitrag: KI in der Schule',
    level: 'B2',
    theme: 'medien',
    format: 'forum',
    instructions:
      'In einem Online-Forum wird diskutiert, ob Schülerinnen und Schüler künstliche Intelligenz für Hausaufgaben nutzen dürfen. Schreiben Sie einen Beitrag (circa 150 Wörter).',
    points: [
      'Nennen Sie Chancen von KI beim Lernen.',
      'Nennen Sie Risiken.',
      'Machen Sie einen Vorschlag, wie Schulen damit umgehen sollten.',
      'Formulieren Sie eine begründete Meinung.',
    ],
    minWords: 150,
    phrases: [
      { de: 'Die Frage, ob …, wird zurzeit heftig diskutiert.', en: 'Whether … is currently hotly debated.' },
      { de: 'Einerseits bietet … die Chance, …', en: 'On the one hand … offers the chance to …' },
      { de: 'Andererseits besteht die Gefahr, dass …', en: 'On the other hand there is a risk that …' },
      { de: 'Statt … zu verbieten, sollte man …', en: 'Instead of banning …, one should …' },
      { de: 'Alles in allem bin ich der Ansicht, dass …', en: 'All in all, I am of the view that …' },
    ],
    model:
      'Die Frage, ob Schüler KI für ihre Hausaufgaben nutzen dürfen, wird zurzeit heftig diskutiert. Ich möchte dazu meine Sicht schildern.\n\nEinerseits bietet KI große Chancen. Sie kann schwierige Themen geduldig erklären, Fragen beantworten und Texte korrigieren. Gerade Kinder, deren Eltern nicht helfen können, könnten davon profitieren.\n\nAndererseits besteht die Gefahr, dass Schüler die Aufgaben einfach von der KI erledigen lassen und selbst nichts mehr lernen. Außerdem sind die Antworten nicht immer richtig, und viele Jugendliche können das nicht erkennen.\n\nStatt KI zu verbieten, sollten Schulen den Umgang damit unterrichten: Wie formuliere ich eine gute Frage? Wie prüfe ich, ob eine Antwort stimmt? Gleichzeitig sollten wichtige Leistungen wieder häufiger in der Schule geschrieben werden.\n\nAlles in allem bin ich der Ansicht, dass KI ein nützliches Werkzeug ist, wenn man gelernt hat, kritisch damit umzugehen.',
  },
]
