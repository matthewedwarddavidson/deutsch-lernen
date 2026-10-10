import type { ListeningText } from '../types'

/** Scripts modelled on Goethe B1 Hören parts 2–4, plus a B2 lecture. */
export const SCRIPTS_EXAM: ListeningText[] = [
  {
    id: 'fuehrung-schokoladenfabrik',
    title: 'Führung durch die Schokoladenfabrik',
    level: 'B1',
    theme: 'freizeit',
    genre: 'announcement',
    voices: { Führerin: 'kerstin' },
    situation: 'A group visits a chocolate factory. Listen to the guide at the start of the tour (Hören Teil 2).',
    lines: [
      {
        speaker: 'Führerin',
        text: 'Herzlich willkommen in der Schokoladenfabrik Sommer! Mein Name ist Julia Brandt, und ich begleite Sie heute durch unser Haus. Die Führung dauert etwa neunzig Minuten.',
      },
      {
        speaker: 'Führerin',
        text: 'Bevor wir anfangen, ein paar wichtige Hinweise. In der Produktion ist Fotografieren leider nicht erlaubt, weil wir unsere Rezepte schützen möchten. Im Museum und im Shop dürfen Sie natürlich so viele Fotos machen, wie Sie wollen.',
      },
      {
        speaker: 'Führerin',
        text: 'Aus hygienischen Gründen bekommen alle gleich eine Haube für die Haare. Bitte lassen Sie Ihre Jacken und Taschen hier in den Schließfächern. Die Schlüssel geben Sie am Ende bei mir ab.',
      },
      {
        speaker: 'Führerin',
        text: 'Wir beginnen im Museum im Erdgeschoss. Dort erfahren Sie, wie die Kakaobohne vor über hundert Jahren nach Europa kam. Danach gehen wir in den ersten Stock, wo Sie durch große Fenster sehen können, wie unsere Tafeln hergestellt werden.',
      },
      {
        speaker: 'Führerin',
        text: 'Der Höhepunkt kommt zum Schluss: In unserer Schokoladenwerkstatt dürfen Sie Ihre eigene Tafel machen. Sie wählen eine Sorte und dekorieren sie mit Nüssen, Früchten oder Gewürzen. Die Schokolade muss dann etwa zwanzig Minuten im Kühlschrank fest werden. In der Zeit können Sie im Café eine heiße Schokolade trinken – die ist im Eintrittspreis enthalten.',
      },
      {
        speaker: 'Führerin',
        text: 'Ach ja, und noch etwas: Heute bekommen alle Besucher im Shop zehn Prozent Rabatt. Zeigen Sie einfach Ihre Eintrittskarte an der Kasse. So, haben Sie noch Fragen? Nein? Dann folgen Sie mir bitte!',
      },
    ],
    questions: [
      {
        kind: 'choice',
        question: 'Wo darf man nicht fotografieren?',
        options: ['Im Museum', 'In der Produktion', 'Im Shop'],
        answer: 1,
      },
      {
        kind: 'choice',
        question: 'Was sollen die Besucher mit ihren Taschen machen?',
        options: ['Mitnehmen', 'Bei der Führerin abgeben', 'In ein Schließfach legen'],
        answer: 2,
      },
      {
        kind: 'choice',
        question: 'Was sieht man im ersten Stock?',
        options: ['Die Geschichte des Kakaos', 'Wie Schokolade hergestellt wird', 'Das Café'],
        answer: 1,
      },
      {
        kind: 'choice',
        question: 'Was ist im Eintrittspreis enthalten?',
        options: ['Eine heiße Schokolade', 'Eine Tafel aus dem Shop', 'Ein Foto'],
        answer: 0,
      },
      {
        kind: 'choice',
        question: 'Wie bekommt man heute Rabatt im Shop?',
        options: ['Mit einem Gutschein', 'Mit der Eintrittskarte', 'Ab zwei Tafeln'],
        answer: 1,
      },
    ],
  },
  {
    id: 'gespraech-urlaubsplaene',
    title: 'Im Zug: Pläne für den Sommer',
    level: 'B1',
    theme: 'reisen',
    genre: 'dialogue',
    voices: { Lisa: 'kerstin', Daniel: 'thorsten' },
    situation: 'Two colleagues meet on the train home and talk about the summer holidays (Hören Teil 3).',
    lines: [
      {
        speaker: 'Lisa',
        text: 'Daniel! Hallo, was machst du denn in diesem Zug? Du fährst doch sonst immer mit dem Auto.',
      },
      {
        speaker: 'Daniel',
        text: 'Hallo Lisa! Ja, das Auto ist seit Montag in der Werkstatt. Irgendwas mit der Kupplung. Und ehrlich gesagt ist Zugfahren gar nicht so schlecht. Ich kann lesen und muss nicht im Stau stehen.',
      },
      { speaker: 'Lisa', text: 'Sag ich doch! Und, habt ihr schon Pläne für den Sommer?' },
      {
        speaker: 'Daniel',
        text: 'Eigentlich wollten wir nach Kroatien, so wie letztes Jahr. Aber meine Frau hat vorgeschlagen, dass wir dieses Mal in Deutschland bleiben. Die Flüge sind einfach zu teuer geworden.',
      },
      { speaker: 'Lisa', text: 'Und wohin geht es dann?' },
      {
        speaker: 'Daniel',
        text: 'An die Ostsee, nach Rügen. Wir haben ein Ferienhaus für zwei Wochen gemietet, direkt am Strand. Die Kinder freuen sich schon riesig. Und du?',
      },
      {
        speaker: 'Lisa',
        text: 'Ich mache dieses Jahr etwas ganz anderes: Ich fahre mit dem Fahrrad von Passau nach Wien, immer an der Donau entlang. Mit meiner Schwester.',
      },
      { speaker: 'Daniel', text: 'Wow! Wie weit ist das denn?' },
      {
        speaker: 'Lisa',
        text: 'Ungefähr dreihundert Kilometer. Wir wollen jeden Tag so fünfzig, sechzig Kilometer fahren. Das Gepäck wird von Hotel zu Hotel transportiert, wir müssen also nur kleine Rucksäcke tragen.',
      },
      { speaker: 'Daniel', text: 'Das klingt toll. Aber hast du keine Angst, dass es regnet?' },
      {
        speaker: 'Lisa',
        text: 'Ein bisschen schon. Aber wir haben gute Regenjacken. Und wenn es zu schlimm wird, nehmen wir eben den Zug bis zum nächsten Hotel.',
      },
      { speaker: 'Daniel', text: 'Ach, schau mal, ich muss hier schon raus. Schick mir mal ein Foto aus Wien!' },
      { speaker: 'Lisa', text: 'Mach ich. Und dir viel Spaß auf Rügen!' },
    ],
    questions: [
      {
        kind: 'truefalse',
        statement: 'Daniel fährt normalerweise mit dem Zug zur Arbeit.',
        answer: false,
        explanation: 'Er fährt sonst mit dem Auto; es ist in der Werkstatt.',
      },
      {
        kind: 'truefalse',
        statement: 'Daniels Familie fährt dieses Jahr nicht nach Kroatien, weil die Flüge zu teuer sind.',
        answer: true,
      },
      { kind: 'truefalse', statement: 'Daniel hat ein Hotel auf Rügen gebucht.', answer: false },
      { kind: 'truefalse', statement: 'Lisa macht eine Radtour mit ihrer Schwester.', answer: true },
      {
        kind: 'truefalse',
        statement: 'Lisa muss ihr ganzes Gepäck auf dem Fahrrad transportieren.',
        answer: false,
        explanation: 'Das Gepäck wird von Hotel zu Hotel gebracht.',
      },
      {
        kind: 'truefalse',
        statement: 'Bei sehr schlechtem Wetter wollen sie ein Stück mit dem Zug fahren.',
        answer: true,
      },
    ],
  },
  {
    id: 'diskussion-handy-schule',
    title: 'Radiodiskussion: Handyverbot an Schulen?',
    level: 'B1',
    theme: 'bildung',
    genre: 'interview',
    voices: { Moderatorin: 'kerstin', 'Herr Becker': 'thorsten', 'Herr Yilmaz': 'thorsten-emotional' },
    situation:
      'A radio presenter talks to a head teacher, Herr Becker, and a father, Herr Yilmaz, about banning phones at school. For each statement: who says it? (Hören Teil 4)',
    lines: [
      {
        speaker: 'Moderatorin',
        text: 'Guten Abend und willkommen zu „Thema des Tages". Immer mehr Schulen verbieten Smartphones, nicht nur im Unterricht, sondern auch in den Pausen. Bei mir im Studio sind Thomas Becker, Schulleiter eines Gymnasiums in Kassel, und Mehmet Yilmaz, Vater von zwei Kindern. Herr Becker, an Ihrer Schule gilt seit einem Jahr ein komplettes Handyverbot. Warum?',
      },
      {
        speaker: 'Herr Becker',
        text: 'Wir haben gesehen, dass die Kinder in den Pausen kaum noch miteinander gesprochen haben. Jeder saß allein mit seinem Handy in der Ecke. Außerdem gab es immer wieder Probleme mit Fotos und Videos, die ohne Erlaubnis gemacht und dann im Netz geteilt wurden.',
      },
      { speaker: 'Moderatorin', text: 'Und hat sich seitdem etwas verändert?' },
      {
        speaker: 'Herr Becker',
        text: 'Sehr viel. Die Schüler spielen wieder Fußball oder Tischtennis, und die Lehrkräfte berichten, dass die Kinder nach der Pause konzentrierter sind. Am Anfang gab es natürlich Protest, aber inzwischen akzeptieren es die meisten.',
      },
      { speaker: 'Moderatorin', text: 'Herr Yilmaz, Sie sehen das kritischer.' },
      {
        speaker: 'Herr Yilmaz',
        text: 'Ja. Verstehen Sie mich nicht falsch: Im Unterricht hat das Handy nichts zu suchen, da bin ich völlig einverstanden. Aber ein komplettes Verbot geht mir zu weit. Meine Tochter hat einen langen Schulweg, und ich möchte sie erreichen können, wenn der Bus ausfällt.',
      },
      {
        speaker: 'Herr Becker',
        text: 'Das verstehe ich gut. Deshalb dürfen die Kinder ihr Handy ja auch mitbringen. Es muss nur ausgeschaltet im Schrank bleiben. Im Notfall kann man jederzeit im Sekretariat anrufen.',
      },
      {
        speaker: 'Herr Yilmaz',
        text: 'Trotzdem. Die Kinder müssen doch lernen, vernünftig mit dem Smartphone umzugehen. Das lernen sie nicht, wenn man es einfach verbietet. Ich wünsche mir, dass die Schule das Thema im Unterricht behandelt, zum Beispiel: Wie lange bin ich online? Was teile ich, und was lieber nicht?',
      },
      { speaker: 'Moderatorin', text: 'Herr Becker, ist das nicht ein guter Punkt?' },
      {
        speaker: 'Herr Becker',
        text: 'Absolut, und das machen wir auch. In der siebten Klasse gibt es ein Projekt zur Mediennutzung. Aber dafür braucht man meiner Meinung nach nicht in jeder Pause ein Handy in der Hand.',
      },
      {
        speaker: 'Moderatorin',
        text: 'Wir sehen: Ganz einig sind sich unsere Gäste nicht. Vielen Dank Ihnen beiden. Und Sie, liebe Hörerinnen und Hörer, können uns gern Ihre Meinung schreiben.',
      },
    ],
    questions: [
      {
        kind: 'choice',
        question: 'Wer sagt das? „Seit dem Verbot spielen die Kinder in den Pausen wieder zusammen."',
        options: ['Moderatorin', 'Herr Becker', 'Herr Yilmaz'],
        answer: 1,
      },
      {
        kind: 'choice',
        question: 'Wer sagt das? „Im Unterricht sollte das Handy nicht benutzt werden."',
        options: ['Moderatorin', 'Herr Becker', 'Herr Yilmaz'],
        answer: 2,
        explanation: 'Herr Yilmaz: „Im Unterricht hat das Handy nichts zu suchen."',
      },
      {
        kind: 'choice',
        question: 'Wer sagt das? „Eltern sollten ihre Kinder unterwegs anrufen können."',
        options: ['Moderatorin', 'Herr Becker', 'Herr Yilmaz'],
        answer: 2,
      },
      {
        kind: 'choice',
        question: 'Wer sagt das? „Die Schule spricht im Unterricht schon über Medien."',
        options: ['Moderatorin', 'Herr Becker', 'Herr Yilmaz'],
        answer: 1,
      },
      {
        kind: 'choice',
        question: 'Wer sagt das? „Ein Verbot bringt den Kindern nicht bei, wie man das Handy richtig nutzt."',
        options: ['Moderatorin', 'Herr Becker', 'Herr Yilmaz'],
        answer: 2,
      },
    ],
  },
  {
    id: 'vortrag-hitze-in-der-stadt',
    title: 'Vortrag: Wie Städte sich gegen Hitze wappnen',
    level: 'B2',
    theme: 'umwelt',
    genre: 'report',
    voices: { Referent: 'thorsten' },
    situation: 'An urban planner gives a short public talk about heat in cities. Take notes, then answer.',
    lines: [
      {
        speaker: 'Referent',
        text: 'Meine Damen und Herren, vielen Dank für die Einladung. Ich möchte heute über ein Thema sprechen, das uns in den nächsten Jahrzehnten immer stärker beschäftigen wird: Hitze in der Stadt.',
      },
      {
        speaker: 'Referent',
        text: 'Vielleicht haben Sie es selbst schon bemerkt: An einem heißen Sommerabend ist es in der Innenstadt oft um mehrere Grad wärmer als im Umland. Fachleute sprechen vom sogenannten Wärmeinseleffekt. Asphalt und Beton speichern tagsüber die Wärme und geben sie nachts wieder ab. Gleichzeitig fehlen Pflanzen, die durch Verdunstung kühlen.',
      },
      {
        speaker: 'Referent',
        text: 'Das ist nicht nur unangenehm, sondern gefährlich. In Hitzesommern sterben in Deutschland mehrere Tausend Menschen zusätzlich, vor allem ältere und chronisch kranke Menschen. Besonders belastend ist, dass sich die Wohnungen nachts nicht mehr abkühlen und der Körper keine Erholung findet.',
      },
      {
        speaker: 'Referent',
        text: 'Was können Städte tun? Ich möchte drei Ansätze nennen. Erstens: mehr Grün. Bäume spenden nicht nur Schatten, sondern senken durch Verdunstung die Temperatur in ihrer Umgebung spürbar. Auch begrünte Dächer und Fassaden helfen. Zweitens: Wasser. Brunnen, offene Wasserflächen und sogenannte Schwammstädte, die Regenwasser speichern statt es sofort in die Kanalisation zu leiten, kühlen die Umgebung.',
      },
      {
        speaker: 'Referent',
        text: 'Drittens, und das wird oft vergessen: Frischluftschneisen. Das sind unbebaute Korridore, durch die nachts kühle Luft aus dem Umland in die Stadt strömen kann. Wird eine solche Schneise mit Hochhäusern zugebaut, kann das die Temperatur eines ganzen Viertels erhöhen.',
      },
      {
        speaker: 'Referent',
        text: 'Viele Städte haben inzwischen Hitzeaktionspläne. Dazu gehören etwa kühle Räume in öffentlichen Gebäuden, in denen sich Menschen tagsüber aufhalten können, und Telefondienste, die ältere Menschen bei Hitze anrufen. Das ist ein guter Anfang. Langfristig aber, und damit möchte ich schließen, müssen wir unsere Städte grundlegend umbauen. Das kostet Geld, keine Frage. Nichts zu tun wird uns allerdings deutlich teurer zu stehen kommen. Vielen Dank.',
      },
    ],
    questions: [
      {
        kind: 'choice',
        question: 'Warum ist es nachts in der Stadt wärmer als im Umland?',
        options: [
          'Weil es in der Stadt mehr Autos gibt',
          'Weil Asphalt und Beton gespeicherte Wärme abgeben',
          'Weil es in der Stadt weniger Wind gibt',
        ],
        answer: 1,
      },
      {
        kind: 'truefalse',
        statement: 'Laut Referent ist vor allem die fehlende Abkühlung in der Nacht gefährlich.',
        answer: true,
      },
      {
        kind: 'choice',
        question: 'Was ist eine „Schwammstadt"?',
        options: [
          'Eine Stadt, die Regenwasser speichert',
          'Eine Stadt mit vielen Schwimmbädern',
          'Eine Stadt ohne Kanalisation',
        ],
        answer: 0,
      },
      {
        kind: 'choice',
        question: 'Was passiert, wenn man eine Frischluftschneise bebaut?',
        options: ['Die Luft wird sauberer.', 'Ein ganzes Viertel kann wärmer werden.', 'Es regnet mehr.'],
        answer: 1,
      },
      {
        kind: 'open',
        question: 'Wie begründet der Referent am Ende, dass sich der Umbau der Städte lohnt?',
        model: 'Der Umbau ist teuer, aber nichts zu tun wäre auf lange Sicht noch viel teurer.',
      },
    ],
  },
]
