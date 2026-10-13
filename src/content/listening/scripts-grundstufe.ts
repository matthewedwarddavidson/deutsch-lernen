import type { ListeningText } from '../types'

/** More A1 and A2 listening. */
export const SCRIPTS_GRUNDSTUFE: ListeningText[] = [
  {
    id: 'termin-friseur',
    title: 'Ein Termin beim Friseur',
    level: 'A1',
    theme: 'alltag',
    genre: 'dialogue',
    voices: { Friseurin: 'katrin', Kunde: 'jonas' },
    situation: 'A man phones the hairdresser to make an appointment. Listen for the day and time.',
    lines: [
      { speaker: 'Friseurin', text: 'Salon Schick, guten Tag!' },
      { speaker: 'Kunde', text: 'Guten Tag, hier ist Martin Weber. Ich möchte einen Termin zum Haareschneiden.' },
      { speaker: 'Friseurin', text: 'Gern. Wann haben Sie Zeit?' },
      { speaker: 'Kunde', text: 'Geht es morgen, am Donnerstag?' },
      { speaker: 'Friseurin', text: 'Morgen ist leider alles voll. Am Freitag um zehn Uhr ist noch etwas frei.' },
      { speaker: 'Kunde', text: 'Um zehn muss ich arbeiten. Geht es auch später?' },
      { speaker: 'Friseurin', text: 'Ja, um halb sechs.' },
      { speaker: 'Kunde', text: 'Halb sechs ist gut.' },
      { speaker: 'Friseurin', text: 'Gut, dann Freitag um 17.30 Uhr. Wie ist Ihr Name, bitte?' },
      { speaker: 'Kunde', text: 'Weber. W-E-B-E-R.' },
      { speaker: 'Friseurin', text: 'Danke, Herr Weber. Bis Freitag!' },
    ],
    questions: [
      {
        kind: 'choice',
        question: 'Wann hat Herr Weber seinen Termin?',
        options: ['Donnerstag, 10 Uhr', 'Freitag, 10 Uhr', 'Freitag, 17.30 Uhr'],
        answer: 2,
      },
      {
        kind: 'truefalse',
        statement: 'Am Donnerstag ist kein Termin frei.',
        answer: true,
        explanation: '„Morgen ist leider alles voll."',
      },
      {
        kind: 'choice',
        question: 'Warum geht zehn Uhr nicht?',
        options: ['Er muss arbeiten.', 'Er ist beim Arzt.', 'Er hat Deutschkurs.'],
        answer: 0,
      },
    ],
  },
  {
    id: 'auf-dem-markt',
    title: 'Auf dem Markt',
    level: 'A1',
    theme: 'einkaufen',
    genre: 'dialogue',
    voices: { Verkäufer: 'markus', Kundin: 'lena' },
    situation: 'A woman buys fruit and vegetables at the market. Note what she buys and how much she pays.',
    lines: [
      { speaker: 'Verkäufer', text: 'Guten Morgen! Was darf es sein?' },
      { speaker: 'Kundin', text: 'Guten Morgen. Ich hätte gern ein Kilo Tomaten.' },
      { speaker: 'Verkäufer', text: 'Ein Kilo Tomaten, bitte schön. Sonst noch etwas?' },
      { speaker: 'Kundin', text: 'Ja, was kosten die Äpfel?' },
      { speaker: 'Verkäufer', text: 'Die Äpfel kosten zwei Euro fünfzig das Kilo.' },
      { speaker: 'Kundin', text: 'Dann nehme ich zwei Kilo. Und haben Sie auch Bananen?' },
      { speaker: 'Verkäufer', text: 'Nein, Bananen haben wir heute leider nicht.' },
      { speaker: 'Kundin', text: 'Schade. Das ist dann alles.' },
      { speaker: 'Verkäufer', text: 'Das macht zusammen acht Euro.' },
      { speaker: 'Kundin', text: 'Hier sind zehn Euro.' },
      { speaker: 'Verkäufer', text: 'Und zwei Euro zurück. Vielen Dank und einen schönen Tag!' },
    ],
    questions: [
      {
        kind: 'choice',
        question: 'Wie viele Äpfel kauft die Frau?',
        options: ['Ein Kilo', 'Zwei Kilo', 'Keine'],
        answer: 1,
      },
      {
        kind: 'truefalse',
        statement: 'Die Frau kauft auch Bananen.',
        answer: false,
        explanation: 'Es gibt heute keine Bananen.',
      },
      {
        kind: 'choice',
        question: 'Wie viel bezahlt sie?',
        options: ['2 Euro', '8 Euro', '10 Euro'],
        answer: 1,
      },
    ],
  },
  {
    id: 'weg-zum-bahnhof',
    title: 'Der Weg zum Bahnhof',
    level: 'A2',
    theme: 'reisen',
    genre: 'dialogue',
    voices: { Touristin: 'lena', Passant: 'markus' },
    situation: 'A tourist asks for directions to the station. Follow the route in your head.',
    lines: [
      { speaker: 'Touristin', text: 'Entschuldigung, können Sie mir helfen? Ich suche den Bahnhof.' },
      {
        speaker: 'Passant',
        text: 'Ja, gern. Das ist nicht weit, ungefähr zehn Minuten zu Fuß. Gehen Sie hier geradeaus bis zur Ampel.',
      },
      { speaker: 'Touristin', text: 'Bis zur Ampel, ja.' },
      {
        speaker: 'Passant',
        text: 'An der Ampel gehen Sie links. Dann kommen Sie zu einem großen Platz mit einer Kirche. Gehen Sie über den Platz, an der Kirche vorbei.',
      },
      { speaker: 'Touristin', text: 'Und dann?' },
      {
        speaker: 'Passant',
        text: 'Dann nehmen Sie die zweite Straße rechts, das ist die Bahnhofstraße. Der Bahnhof ist am Ende der Straße. Sie können ihn nicht verpassen.',
      },
      { speaker: 'Touristin', text: 'Kann ich auch mit dem Bus fahren?' },
      {
        speaker: 'Passant',
        text: 'Ja, der Bus Nummer 5 fährt direkt zum Bahnhof. Die Haltestelle ist da drüben, gegenüber der Bäckerei. Aber zu Fuß sind Sie wahrscheinlich schneller.',
      },
      { speaker: 'Touristin', text: 'Vielen Dank!' },
    ],
    questions: [
      {
        kind: 'choice',
        question: 'Wie lange braucht man zu Fuß?',
        options: ['Fünf Minuten', 'Zehn Minuten', 'Zwanzig Minuten'],
        answer: 1,
      },
      {
        kind: 'choice',
        question: 'Wohin geht man an der Ampel?',
        options: ['Nach links', 'Nach rechts', 'Geradeaus'],
        answer: 0,
      },
      {
        kind: 'truefalse',
        statement: 'Der Bahnhof ist in der ersten Straße rechts.',
        answer: false,
        explanation: 'Die zweite Straße rechts.',
      },
      {
        kind: 'choice',
        question: 'Wo ist die Bushaltestelle?',
        options: ['Neben der Kirche', 'Gegenüber der Bäckerei', 'An der Ampel'],
        answer: 1,
      },
    ],
  },
  {
    id: 'im-hotel',
    title: 'An der Rezeption',
    level: 'A2',
    theme: 'reisen',
    genre: 'dialogue',
    voices: { Rezeptionistin: 'katrin', Gast: 'jonas' },
    situation: 'A guest checks into a hotel. Listen for the room, breakfast and wifi details.',
    lines: [
      {
        speaker: 'Rezeptionistin',
        text: 'Guten Abend, herzlich willkommen im Hotel Linde. Wie kann ich Ihnen helfen?',
      },
      {
        speaker: 'Gast',
        text: 'Guten Abend. Ich habe ein Einzelzimmer für zwei Nächte reserviert. Mein Name ist Hoffmann.',
      },
      {
        speaker: 'Rezeptionistin',
        text: 'Einen Moment, bitte … Ja, Herr Hoffmann, bis Sonntag. Sie haben Zimmer 214 im zweiten Stock. Der Aufzug ist dort links.',
      },
      { speaker: 'Gast', text: 'Danke. Wann gibt es Frühstück?' },
      {
        speaker: 'Rezeptionistin',
        text: 'Von Montag bis Freitag von halb sieben bis zehn, am Wochenende bis halb elf. Das Frühstück ist im Erdgeschoss, neben der Rezeption.',
      },
      { speaker: 'Gast', text: 'Gibt es hier WLAN?' },
      {
        speaker: 'Rezeptionistin',
        text: 'Ja, das WLAN ist kostenlos. Das Passwort steht auf Ihrer Schlüsselkarte. Brauchen Sie einen Parkplatz?',
      },
      { speaker: 'Gast', text: 'Nein, danke, ich bin mit dem Zug gekommen.' },
      { speaker: 'Rezeptionistin', text: 'Sehr gut. Dann wünsche ich Ihnen einen schönen Aufenthalt!' },
    ],
    questions: [
      {
        kind: 'choice',
        question: 'Wie lange bleibt Herr Hoffmann?',
        options: ['Eine Nacht', 'Zwei Nächte', 'Eine Woche'],
        answer: 1,
      },
      {
        kind: 'choice',
        question: 'Wo ist sein Zimmer?',
        options: ['Im Erdgeschoss', 'Im ersten Stock', 'Im zweiten Stock'],
        answer: 2,
      },
      {
        kind: 'truefalse',
        statement: 'Am Wochenende gibt es länger Frühstück.',
        answer: true,
        explanation: 'Bis halb elf statt bis zehn.',
      },
      {
        kind: 'truefalse',
        statement: 'Das WLAN kostet extra.',
        answer: false,
        explanation: '„Das WLAN ist kostenlos."',
      },
    ],
  },
  {
    id: 'wetterbericht',
    title: 'Der Wetterbericht',
    level: 'A2',
    theme: 'freizeit',
    genre: 'announcement',
    voices: { Sprecher: 'jonas' },
    situation:
      'The weather forecast for the weekend. You want to go hiking on one of the two days. Which day is better?',
    lines: [
      {
        speaker: 'Sprecher',
        text: 'Und jetzt das Wetter für das Wochenende. Am Samstag ist es im Norden bewölkt und es regnet immer wieder. Im Süden scheint am Vormittag noch die Sonne, aber am Nachmittag kommen auch hier Gewitter. Die Temperaturen liegen zwischen 14 und 18 Grad.',
      },
      {
        speaker: 'Sprecher',
        text: 'Am Sonntag wird es besser: Im ganzen Land ist es trocken und meistens sonnig. Es bleibt aber windig, besonders an der Küste. Die Temperaturen steigen auf 20 bis 24 Grad. Am Montag wird es dann wieder kühler.',
      },
    ],
    questions: [
      {
        kind: 'choice',
        question: 'An welchem Tag kann man am besten wandern?',
        options: ['Am Samstag', 'Am Sonntag', 'Am Montag'],
        answer: 1,
      },
      {
        kind: 'truefalse',
        statement: 'Am Samstag gibt es im Süden am Nachmittag Gewitter.',
        answer: true,
      },
      {
        kind: 'choice',
        question: 'Wie warm wird es am Sonntag?',
        options: ['14 bis 18 Grad', '20 bis 24 Grad', 'Über 25 Grad'],
        answer: 1,
      },
    ],
  },
  {
    id: 'einladung-grillen',
    title: 'Eine Einladung zum Grillen',
    level: 'A2',
    theme: 'freizeit',
    genre: 'announcement',
    voices: { Tobias: 'markus' },
    situation: 'A friend leaves you a voicemail with an invitation. What should you bring?',
    lines: [
      {
        speaker: 'Tobias',
        text: 'Hallo, hier ist Tobias. Du, ich habe am Samstag Geburtstag und ich möchte im Garten grillen. Kommst du? Wir fangen so um vier Uhr an.',
      },
      {
        speaker: 'Tobias',
        text: 'Fleisch und Würstchen kaufe ich, aber kannst du vielleicht einen Salat mitbringen? Getränke haben wir genug. Wenn es regnet, feiern wir in der Wohnung, das ist also kein Problem.',
      },
      {
        speaker: 'Tobias',
        text: 'Ach ja, und meine Schwester kommt auch. Sie wollte dich schon lange kennenlernen. Sag mir bitte bis Donnerstag Bescheid, ja? Tschüss!',
      },
    ],
    questions: [
      {
        kind: 'choice',
        question: 'Was soll man mitbringen?',
        options: ['Getränke', 'Einen Salat', 'Fleisch'],
        answer: 1,
      },
      {
        kind: 'truefalse',
        statement: 'Bei Regen fällt die Party aus.',
        answer: false,
        explanation: 'Dann feiern sie in der Wohnung.',
      },
      {
        kind: 'choice',
        question: 'Bis wann soll man antworten?',
        options: ['Bis Mittwoch', 'Bis Donnerstag', 'Bis Samstag'],
        answer: 1,
      },
    ],
  },
]
