import type { ListeningText } from '../types'

/**
 * Unscripted-sounding speech: fillers, self-corrections, contractions (hab, 'ne, gibt's)
 * and particles (halt, eben, mal, ja). Real conversations sound like this, exam scripts rarely do.
 */
export const SCRIPTS_SPOKEN: ListeningText[] = [
  {
    id: 'gespraech-wg-kueche',
    title: 'In der WG-Küche',
    level: 'B1',
    theme: 'wohnen',
    genre: 'dialogue',
    voices: { Tim: 'jonas', Sophie: 'lena' },
    situation:
      "Two flatmates talk in the kitchen. It sounds like real speech: listen for halt, eben and mal, for shortened words (hab, 'ne, gibt's) and for sentences that change direction halfway.",
    lines: [
      { speaker: 'Sophie', text: "Na? Hast du mal 'ne Minute? Ich muss dir was sagen." },
      {
        speaker: 'Tim',
        text: "Klar, was gibt's? Oh, warte, geht's um den Abwasch? Ich hab's halt gestern total vergessen.",
      },
      {
        speaker: 'Sophie',
        text: 'Nee, nee, das ist es nicht. Also, das auch, aber egal. Es geht um Weihnachten. Meine Eltern kommen, und ich wollte fragen, ob die vielleicht zwei Nächte hier schlafen können. In meinem Zimmer, natürlich.',
      },
      { speaker: 'Tim', text: 'Ach so. Ja, klar, warum nicht? Wann denn genau?' },
      {
        speaker: 'Sophie',
        text: 'Vom dreiundzwanzigsten bis zum, äh, fünfundzwanzigsten. Also zwei Nächte. Ich schlaf dann auf dem Sofa im Wohnzimmer. Wenn das für dich okay ist.',
      },
      {
        speaker: 'Tim',
        text: "Das ist eben das Problem. Am dreiundzwanzigsten wollten Jonas und ich hier 'nen Spieleabend machen. Mit fünf, sechs Leuten. Im Wohnzimmer.",
      },
      { speaker: 'Sophie', text: 'Echt jetzt? Mist. Kann man das nicht irgendwie verschieben?' },
      {
        speaker: 'Tim',
        text: "Hm. Ich frag mal die anderen. Vielleicht machen wir's einfach bei Jonas. Der hat sowieso 'ne größere Wohnung. Aber dann musst du mir einen Gefallen tun.",
      },
      { speaker: 'Sophie', text: 'Oh je. Was denn?' },
      { speaker: 'Tim', text: 'Du übernimmst den Abwasch bis Silvester.' },
      { speaker: 'Sophie', text: "Bis Silvester? Spinnst du? Na gut, 'ne Woche. Mehr nicht." },
      { speaker: 'Tim', text: 'Deal.' },
    ],
    questions: [
      {
        kind: 'choice',
        question: 'Worum geht es Sophie eigentlich?',
        options: ['Um den Abwasch', 'Um den Besuch ihrer Eltern', 'Um einen Spieleabend'],
        answer: 1,
      },
      {
        kind: 'truefalse',
        statement: 'Sophies Eltern sollen im Wohnzimmer schlafen.',
        answer: false,
        explanation: 'Sie schlafen in Sophies Zimmer; Sophie schläft auf dem Sofa.',
      },
      {
        kind: 'choice',
        question: 'Warum ist der dreiundzwanzigste ein Problem?',
        options: [
          'Tim hat dann Geburtstag.',
          'Tim will mit Freunden im Wohnzimmer spielen.',
          'Jonas zieht an diesem Tag ein.',
        ],
        answer: 1,
      },
      {
        kind: 'choice',
        question: 'Worauf einigen sich die beiden am Ende?',
        options: [
          'Sophie macht eine Woche lang den Abwasch.',
          'Sophie macht bis Silvester den Abwasch.',
          'Tim macht den Abwasch.',
        ],
        answer: 0,
      },
      {
        kind: 'open',
        question: 'Was bedeutet „Ich hab\'s halt gestern total vergessen"? Was zeigt das Wort „halt"?',
        model:
          '„Ich habe es gestern einfach vergessen." Halt zeigt, dass man daran nichts mehr ändern kann: So ist es eben.',
      },
    ],
  },
  {
    id: 'sprachnachricht-ausflug',
    title: 'Eine Sprachnachricht',
    level: 'B1',
    theme: 'freizeit',
    genre: 'announcement',
    voices: { Katrin: 'katrin' },
    situation:
      'A friend leaves you a rambling voice message about a trip. She corrects herself several times: note the final plan, not the first one.',
    lines: [
      {
        speaker: 'Katrin',
        text: "Hi, ich bin's, Katrin. Du, ich wollte nur kurz wegen Samstag Bescheid sagen. Also, wir fahren ja an den See, ne? Wir treffen uns um neun am Bahnhof. Nee, warte, Quatsch, um halb neun, weil der Zug schon um zehn vor neun fährt.",
      },
      {
        speaker: 'Katrin',
        text: 'Und, äh, Essen müssen wir nicht mitnehmen, also, nicht viel. Lisa macht Nudelsalat und ich bring was zum Grillen mit. Kannst du vielleicht Getränke besorgen? Aber kein Bier, Max fährt ja abends mit dem Auto zurück. Ach nee, der kommt ja gar nicht mit. Egal, nimm einfach, was du willst.',
      },
      {
        speaker: 'Katrin',
        text: "Ja, und wenn's regnet, dann gehen wir halt ins Museum am See, das hat auch samstags offen. Ruf mich mal zurück, wenn du das hörst. Oder schreib mir einfach. Tschüss!",
      },
    ],
    questions: [
      {
        kind: 'choice',
        question: 'Wann soll man am Bahnhof sein?',
        options: ['Um 8:30 Uhr', 'Um 8:50 Uhr', 'Um 9:00 Uhr'],
        answer: 0,
      },
      {
        kind: 'choice',
        question: 'Was soll der Hörer mitbringen?',
        options: ['Nudelsalat', 'Etwas zum Grillen', 'Getränke'],
        answer: 2,
      },
      {
        kind: 'truefalse',
        statement: 'Max fährt am Abend mit dem Auto zurück.',
        answer: false,
        explanation: 'Katrin korrigiert sich: Max kommt gar nicht mit.',
      },
      {
        kind: 'truefalse',
        statement: 'Bei Regen besuchen sie ein Museum.',
        answer: true,
        explanation: '„Wenn\'s regnet, dann gehen wir halt ins Museum am See."',
      },
    ],
  },
]
