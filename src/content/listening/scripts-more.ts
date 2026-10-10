import type { ListeningText } from '../types'

export const SCRIPTS_MORE: ListeningText[] = [
  {
    id: 'tisch-reservieren',
    title: 'Einen Tisch reservieren',
    level: 'A2',
    theme: 'essen',
    genre: 'dialogue',
    voices: { Restaurant: 'kerstin', Gast: 'thorsten' },
    situation: 'A man phones an Italian restaurant to book a table.',
    lines: [
      { speaker: 'Restaurant', text: 'Trattoria Da Marco, guten Abend!' },
      { speaker: 'Gast', text: 'Guten Abend. Ich möchte gern einen Tisch für Samstag reservieren.' },
      { speaker: 'Restaurant', text: 'Gern. Für wie viele Personen?' },
      { speaker: 'Gast', text: 'Für sechs Personen. Wir feiern den Geburtstag von meiner Frau.' },
      { speaker: 'Restaurant', text: 'Oh, wie schön. Um wie viel Uhr möchten Sie kommen?' },
      { speaker: 'Gast', text: 'Um halb acht, wenn das geht.' },
      {
        speaker: 'Restaurant',
        text: 'Um halb acht ist leider schon alles voll. Ich habe aber um acht Uhr noch einen großen Tisch am Fenster frei.',
      },
      { speaker: 'Gast', text: 'Acht Uhr ist auch in Ordnung. Am Fenster ist sogar besser.' },
      { speaker: 'Restaurant', text: 'Wunderbar. Auf welchen Namen bitte?' },
      { speaker: 'Gast', text: 'Auf den Namen Hoffmann. Ach, und eine Person isst vegetarisch. Ist das ein Problem?' },
      {
        speaker: 'Restaurant',
        text: 'Überhaupt nicht, wir haben viele vegetarische Gerichte. Also: Samstag, acht Uhr, sechs Personen, Hoffmann. Bis Samstag!',
      },
    ],
    questions: [
      {
        kind: 'choice',
        question: 'Für wie viele Personen reserviert Herr Hoffmann?',
        options: ['vier', 'sechs', 'acht'],
        answer: 1,
      },
      { kind: 'truefalse', statement: 'Um halb acht ist noch ein Tisch frei.', answer: false },
      {
        kind: 'choice',
        question: 'Wann kommen die Gäste?',
        options: ['um 19:30 Uhr', 'um 20:00 Uhr', 'um 20:30 Uhr'],
        answer: 1,
      },
      { kind: 'truefalse', statement: 'Es gibt im Restaurant vegetarisches Essen.', answer: true },
    ],
  },
  {
    id: 'radio-wetter-verkehr',
    title: 'Radio: Wetter und Verkehr',
    level: 'B1',
    theme: 'reisen',
    genre: 'announcement',
    voices: { Sprecherin: 'kerstin' },
    situation: 'You are driving to Stuttgart on Friday afternoon and listen to the radio.',
    lines: [
      {
        speaker: 'Sprecherin',
        text: 'Und jetzt das Wetter für das Wochenende. Heute Nachmittag ziehen von Westen Gewitter auf, örtlich mit Starkregen und Hagel. Die Temperaturen fallen von 31 auf 22 Grad.',
      },
      {
        speaker: 'Sprecherin',
        text: 'Am Samstag bleibt es wechselhaft mit einzelnen Schauern. Erst am Sonntag setzt sich die Sonne wieder durch, bei angenehmen 24 Grad – ideales Wetter für einen Ausflug.',
      },
      {
        speaker: 'Sprecherin',
        text: 'Nun zum Verkehr. Auf der A8 zwischen Pforzheim und Stuttgart staut sich der Verkehr nach einem Unfall auf acht Kilometern. Rechnen Sie mit etwa einer Stunde Verzögerung.',
      },
      {
        speaker: 'Sprecherin',
        text: 'Die A81 in Richtung Heilbronn ist wegen Bauarbeiten am Wochenende nachts zwischen 22 und 6 Uhr gesperrt. Eine Umleitung ist ausgeschildert.',
      },
      {
        speaker: 'Sprecherin',
        text: 'Und eine Warnung für die B10: Dort liegen nach dem Gewitter Äste auf der Fahrbahn. Bitte fahren Sie besonders vorsichtig.',
      },
    ],
    questions: [
      {
        kind: 'choice',
        question: 'Wie wird das Wetter am Sonntag?',
        options: ['Gewitter und Hagel', 'wechselhaft mit Schauern', 'sonnig und angenehm'],
        answer: 2,
      },
      {
        kind: 'truefalse',
        statement: 'Auf der A8 gibt es einen Stau wegen Bauarbeiten.',
        answer: false,
        explanation: 'Wegen eines Unfalls.',
      },
      {
        kind: 'choice',
        question: 'Wie lange dauert die Verzögerung auf der A8 ungefähr?',
        options: ['acht Minuten', 'eine halbe Stunde', 'eine Stunde'],
        answer: 2,
      },
      {
        kind: 'truefalse',
        statement: 'Die A81 ist das ganze Wochenende rund um die Uhr gesperrt.',
        answer: false,
        explanation: 'Nur nachts zwischen 22 und 6 Uhr.',
      },
      {
        kind: 'open',
        question: 'Warum soll man auf der B10 vorsichtig fahren?',
        model: 'Weil nach dem Gewitter Äste auf der Fahrbahn liegen.',
      },
    ],
  },
  {
    id: 'buergeramt',
    title: 'Auf dem Bürgeramt',
    level: 'B1',
    theme: 'behoerden',
    genre: 'dialogue',
    voices: { Sachbearbeiter: 'thorsten', 'Frau Lindqvist': 'kerstin' },
    situation: 'A woman who has just moved to Hamburg registers her new address.',
    lines: [
      {
        speaker: 'Sachbearbeiter',
        text: 'Guten Morgen. Die Nummer 47? Bitte nehmen Sie Platz. Was kann ich für Sie tun?',
      },
      {
        speaker: 'Frau Lindqvist',
        text: 'Guten Morgen. Ich bin vor einer Woche nach Hamburg gezogen und möchte meine neue Adresse anmelden.',
      },
      { speaker: 'Sachbearbeiter', text: 'Gut. Haben Sie die Wohnungsgeberbestätigung von Ihrem Vermieter dabei?' },
      { speaker: 'Frau Lindqvist', text: 'Die … Entschuldigung, was genau ist das?' },
      {
        speaker: 'Sachbearbeiter',
        text: 'Das ist ein Formular, auf dem Ihr Vermieter bestätigt, dass Sie eingezogen sind. Ohne dieses Formular kann ich Sie leider nicht anmelden.',
      },
      { speaker: 'Frau Lindqvist', text: 'Ach so, ja, das habe ich. Hier, bitte. Und hier ist mein Reisepass.' },
      { speaker: 'Sachbearbeiter', text: 'Danke. Sie kommen aus Schweden, sehe ich. Leben Sie allein in der Wohnung?' },
      { speaker: 'Frau Lindqvist', text: 'Nein, mit meinem Sohn. Er ist acht. Muss ich ihn auch anmelden?' },
      {
        speaker: 'Sachbearbeiter',
        text: 'Ja, natürlich. Dafür brauche ich seine Geburtsurkunde oder seinen Pass. Haben Sie die dabei?',
      },
      { speaker: 'Frau Lindqvist', text: 'Nein, leider nicht. Kann ich die nachreichen?' },
      {
        speaker: 'Sachbearbeiter',
        text: 'Ich melde Sie heute an. Für Ihren Sohn kommen Sie bitte innerhalb von zwei Wochen noch einmal vorbei. Sie können online einen Termin buchen, dann müssen Sie nicht warten.',
      },
      { speaker: 'Frau Lindqvist', text: 'Das mache ich. Vielen Dank für Ihre Hilfe!' },
    ],
    questions: [
      {
        kind: 'truefalse',
        statement: 'Frau Lindqvist wohnt seit einem Monat in Hamburg.',
        answer: false,
        explanation: 'Seit einer Woche.',
      },
      {
        kind: 'choice',
        question: 'Was ist die Wohnungsgeberbestätigung?',
        options: ['ein Mietvertrag', 'ein Formular vom Vermieter über den Einzug', 'eine Rechnung für die Miete'],
        answer: 1,
      },
      {
        kind: 'choice',
        question: 'Warum kann der Sohn heute nicht angemeldet werden?',
        options: ['Er ist nicht dabei.', 'Seine Dokumente fehlen.', 'Er ist zu jung.'],
        answer: 1,
      },
      { kind: 'truefalse', statement: 'Frau Lindqvist soll innerhalb von zwei Wochen wiederkommen.', answer: true },
      {
        kind: 'open',
        question: 'Was empfiehlt der Sachbearbeiter, damit sie nicht warten muss?',
        model: 'Online einen Termin buchen.',
      },
    ],
  },
  {
    id: 'vortrag-mehrsprachigkeit',
    title: 'Vortrag: Mehrsprachigkeit im Alltag',
    level: 'C1',
    theme: 'bildung',
    genre: 'report',
    voices: { Referentin: 'kerstin' },
    situation: 'An excerpt from a public lecture by a linguist about growing up with several languages.',
    lines: [
      {
        speaker: 'Referentin',
        text: 'Lange Zeit galt Mehrsprachigkeit als Risiko. Noch in den Achtzigerjahren rieten Kinderärzte Eltern davon ab, mit ihren Kindern mehr als eine Sprache zu sprechen – aus Sorge, die Kinder könnten verwirrt werden oder keine der Sprachen richtig lernen.',
      },
      {
        speaker: 'Referentin',
        text: 'Diese Befürchtung hat sich als unbegründet erwiesen. Zwar mischen mehrsprachige Kinder in einer bestimmten Phase ihre Sprachen, doch das ist kein Zeichen von Verwirrung, sondern im Gegenteil ein Hinweis auf eine bemerkenswerte Fähigkeit: Sie greifen gezielt auf das Wort zurück, das ihnen im Moment am schnellsten zur Verfügung steht.',
      },
      {
        speaker: 'Referentin',
        text: 'Interessanter als die Frage, ob Mehrsprachigkeit schadet, ist ohnehin die Frage, unter welchen Bedingungen sie gelingt. Entscheidend scheint weniger zu sein, wie früh ein Kind eine Sprache lernt, als vielmehr, wie viel und in welchen Situationen es sie tatsächlich braucht.',
      },
      {
        speaker: 'Referentin',
        text: 'Eine Sprache, die nur am Küchentisch gesprochen wird, entwickelt sich anders als eine, in der ein Kind spielt, streitet und Geschichten hört. Eltern, die ihre Familiensprache erhalten möchten, sollten daher nicht nur sprechen, sondern Anlässe schaffen: Bücher, Freundschaften, Ferien im Herkunftsland.',
      },
      {
        speaker: 'Referentin',
        text: 'Und schließlich, meine Damen und Herren, ein Gedanke für die Erwachsenen unter Ihnen: Es ist nie zu spät. Das Gehirn bleibt bis ins hohe Alter lernfähig – es lernt nur anders.',
      },
    ],
    questions: [
      { kind: 'truefalse', statement: 'Früher hielten manche Ärzte Mehrsprachigkeit für schädlich.', answer: true },
      {
        kind: 'choice',
        question: 'Wie deutet die Referentin das Mischen von Sprachen?',
        options: ['als Zeichen von Verwirrung', 'als Hinweis auf eine besondere Fähigkeit', 'als Grund zur Sorge'],
        answer: 1,
      },
      {
        kind: 'choice',
        question: 'Was ist laut Referentin entscheidend für erfolgreiche Mehrsprachigkeit?',
        options: [
          'ein möglichst früher Beginn',
          'wie viel und in welchen Situationen die Sprache gebraucht wird',
          'die Intelligenz des Kindes',
        ],
        answer: 1,
      },
      {
        kind: 'open',
        question: 'Was sollten Eltern tun, um ihre Familiensprache zu erhalten?',
        model: 'Anlässe schaffen, die Sprache zu benutzen: Bücher, Freundschaften, Ferien im Herkunftsland.',
      },
      {
        kind: 'truefalse',
        statement: 'Die Referentin meint, Erwachsene könnten keine neue Sprache mehr lernen.',
        answer: false,
      },
    ],
  },
]
