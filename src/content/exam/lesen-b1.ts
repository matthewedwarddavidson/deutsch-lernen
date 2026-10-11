import type { LesenSet } from './types'

export const LESEN_B1: LesenSet[] = [
  {
    id: 'lesen-b1-1',
    title: 'Übungssatz 1',
    level: 'B1',
    teil1: {
      text: {
        title: 'Mein erstes Jahr als Hundebesitzerin',
        source: 'Blog von Sandra',
        body: [
          'Vor genau einem Jahr ist Bruno bei mir eingezogen, ein dreijähriger Mischling aus dem Tierheim. Eigentlich wollte ich nie einen Hund haben. Ich arbeite Vollzeit in einem Büro und dachte immer, dass ein Hund dafür zu viel Zeit braucht. Aber dann hat meine Firma erlaubt, dass Mitarbeiter ihre Hunde mitbringen dürfen, und eine Kollegin hat mir Fotos aus dem Tierheim gezeigt. Bei Bruno war es Liebe auf den ersten Blick.',
          'Die ersten Wochen waren allerdings schwieriger, als ich gedacht hatte. Bruno hatte Angst vor lauten Geräuschen und hat in der ersten Nacht nur gejault. Im Büro lag er die ganze Zeit unter meinem Schreibtisch und wollte mit niemandem Kontakt haben. Eine Hundetrainerin hat mir dann geraten, ihm mehr Zeit zu geben und ihn nicht zu zwingen. Nach etwa zwei Monaten hat er angefangen, meinen Kollegen zur Begrüßung entgegenzulaufen.',
          'Am meisten hat sich aber mein eigenes Leben verändert. Früher bin ich nach der Arbeit sofort aufs Sofa gefallen. Jetzt gehe ich jeden Abend mindestens eine Stunde spazieren, egal wie das Wetter ist. Dabei habe ich viele Leute aus meinem Viertel kennengelernt, mit denen ich vorher nie ein Wort gewechselt hatte. Mit zwei anderen Hundebesitzerinnen gehe ich inzwischen sogar am Wochenende zusammen wandern.',
          'Natürlich gibt es auch Nachteile. Spontan übers Wochenende wegzufahren ist schwierig geworden, und eine Hundepension ist teuer. Zum Glück passt meine Nachbarin gern auf Bruno auf, wenn ich einmal verreise. Bereut habe ich meine Entscheidung keinen einzigen Tag.',
        ],
      },
      items: [
        { kind: 'truefalse', statement: 'Sandra hatte schon immer den Wunsch, einen Hund zu haben.', answer: false },
        { kind: 'truefalse', statement: 'Sandra darf Bruno mit zur Arbeit nehmen.', answer: true },
        {
          kind: 'truefalse',
          statement: 'Bruno hat sich am Anfang sofort mit allen Kollegen angefreundet.',
          answer: false,
        },
        {
          kind: 'truefalse',
          statement: 'Eine Trainerin hat Sandra empfohlen, geduldig mit Bruno zu sein.',
          answer: true,
        },
        { kind: 'truefalse', statement: 'Sandra geht nur bei schönem Wetter mit Bruno spazieren.', answer: false },
        {
          kind: 'truefalse',
          statement: 'Wenn Sandra wegfährt, bringt sie Bruno meistens in eine Hundepension.',
          answer: false,
        },
      ],
    },
    teil2: [
      {
        text: {
          title: 'Mehr Grün auf dem Dach',
          source: 'aus einer Tageszeitung',
          body: [
            'In Hamburg sollen in den nächsten zehn Jahren mindestens siebzig Prozent aller neuen Flachdächer begrünt werden. Das hat der Senat in dieser Woche beschlossen. Begrünte Dächer speichern Regenwasser, kühlen im Sommer die Gebäude und bieten Insekten und Vögeln einen Lebensraum. Wer bereits ein bestehendes Dach begrünen lässt, kann einen Zuschuss von bis zu sechzig Prozent der Kosten bekommen.',
            'Nicht alle sind von dem Plan begeistert. Der Verband der Hauseigentümer kritisiert, dass die Pflicht das Bauen noch teurer mache. Ein begrüntes Dach koste etwa doppelt so viel wie ein normales Dach, außerdem müsse es regelmäßig gepflegt werden. Umweltverbände halten dagegen, dass sich die Investition langfristig lohne: Ein Gründach halte deutlich länger, weil die Pflanzen die Dachhaut vor Sonne und Frost schützen.',
          ],
        },
        items: [
          {
            kind: 'choice',
            question: 'In diesem Text geht es darum, dass …',
            options: [
              'Hamburg alle alten Dächer begrünen muss.',
              'viele neue Dächer in Hamburg Pflanzen bekommen sollen.',
              'in Hamburg keine Flachdächer mehr gebaut werden dürfen.',
            ],
            answer: 1,
          },
          {
            kind: 'choice',
            question: 'Wer ein vorhandenes Dach begrünt, …',
            options: [
              'muss alle Kosten selbst tragen.',
              'bekommt die Kosten ganz zurück.',
              'kann einen Teil der Kosten erstattet bekommen.',
            ],
            answer: 2,
          },
          {
            kind: 'choice',
            question: 'Die Umweltverbände meinen, dass …',
            options: [
              'Gründächer auf Dauer Geld sparen.',
              'Gründächer zu viel Pflege brauchen.',
              'die Pflicht für alle Gebäude gelten sollte.',
            ],
            answer: 0,
          },
        ],
      },
      {
        text: {
          title: 'Lesen gegen Einsamkeit',
          source: 'aus einer Zeitschrift',
          body: [
            'Jeden Dienstagnachmittag wird es im Seniorenheim „Am Lindenpark" in Kassel ruhig. Dann kommen Schülerinnen und Schüler der nahen Gesamtschule und lesen den Bewohnern vor: Zeitungsartikel, Kurzgeschichten, manchmal auch Gedichte. Die Idee hatte eine Deutschlehrerin, deren Großmutter in dem Heim lebt. „Viele Bewohner bekommen kaum Besuch", sagt sie. „Und meine Schüler lesen sonst fast nur auf dem Handy."',
            'Inzwischen machen zwölf Jugendliche mit, freiwillig und ohne Noten. Für viele ist das Gespräch nach dem Lesen das Wichtigste. Die Bewohner erzählen, wie sie selbst früher gelebt haben, und die Jugendlichen stellen Fragen. Der sechzehnjährige Malik sagt: „Ich dachte, das wird langweilig. Aber Frau Schröder hat mir erzählt, wie sie nach dem Krieg in einer Bäckerei gearbeitet hat. So etwas lernt man in keinem Geschichtsbuch." Das Projekt soll im nächsten Schuljahr auf zwei weitere Heime ausgeweitet werden.',
          ],
        },
        items: [
          {
            kind: 'choice',
            question: 'Die Idee für das Projekt …',
            options: [
              'kam von den Bewohnern des Heims.',
              'stammt von einer Lehrerin.',
              'hatte die Leitung des Seniorenheims.',
            ],
            answer: 1,
          },
          {
            kind: 'choice',
            question: 'Die Schülerinnen und Schüler …',
            options: [
              'bekommen für das Vorlesen eine Note.',
              'müssen alle einmal mitmachen.',
              'machen freiwillig mit.',
            ],
            answer: 2,
          },
          {
            kind: 'choice',
            question: 'Was gefällt Malik besonders?',
            options: [
              'Die Geschichten aus dem Leben der Bewohner',
              'Dass er Gedichte vorlesen darf',
              'Dass er in einer Bäckerei arbeiten kann',
            ],
            answer: 0,
          },
        ],
      },
    ],
    teil3: 'zuordnung-dienstleistungen',
    teil4: {
      question: 'Sollten Supermärkte sonntags öffnen dürfen?',
      opinions: [
        {
          name: 'Jana, 27, Bielefeld',
          text: 'Ich arbeite im Schichtdienst im Krankenhaus und schaffe es unter der Woche oft nicht vor Ladenschluss. Für Leute wie mich wäre es eine große Erleichterung, wenn ich auch am Sonntag einkaufen könnte.',
          answer: true,
        },
        {
          name: 'Herbert, 64, Freiburg',
          text: 'Der Sonntag ist der einzige Tag, an dem Familien sicher gemeinsam freihaben. Wenn die Geschäfte öffnen, müssen wieder Tausende Verkäuferinnen arbeiten. Das finde ich falsch.',
          answer: false,
        },
        {
          name: 'Lena, 35, Leipzig',
          text: 'Wer am Sonntag etwas braucht, kann doch zur Tankstelle oder zum Bahnhof gehen. Ich sehe keinen Grund, dafür alle Supermärkte zu öffnen.',
          answer: false,
        },
        {
          name: 'Tobias, 41, Köln',
          text: 'In vielen Ländern ist das ganz normal, und niemand beschwert sich. Die Läden könnten ja Mitarbeiter einstellen, die gern am Wochenende arbeiten, zum Beispiel Studierende. Ich wäre dafür.',
          answer: true,
        },
        {
          name: 'Sabine, 52, Rostock',
          text: 'Ich habe selbst zwanzig Jahre an der Kasse gesessen. Die Arbeitsbedingungen sind jetzt schon hart. Noch ein Arbeitstag mehr wäre für das Personal eine Zumutung.',
          answer: false,
        },
        {
          name: 'Murat, 30, Stuttgart',
          text: 'Für kleine Läden auf dem Land könnte der Sonntag eine Chance sein, weil dann Ausflügler vorbeikommen. Wenn die Öffnung freiwillig bleibt, spricht aus meiner Sicht nichts dagegen.',
          answer: true,
        },
        {
          name: 'Clara, 23, Dresden',
          text: 'Ehrlich gesagt kaufe ich sowieso das meiste online. Aber ich finde, ein ruhiger Tag pro Woche tut der ganzen Stadt gut. Die Innenstadt sollte am Sonntag nicht wie ein Einkaufszentrum aussehen.',
          answer: false,
        },
      ],
    },
    teil5: {
      text: {
        title: 'Benutzungsordnung der Stadtbibliothek',
        body: [
          'Für die Ausleihe brauchen Sie einen gültigen Bibliotheksausweis. Diesen erhalten Sie an der Information gegen Vorlage Ihres Personalausweises. Kinder und Jugendliche unter 18 Jahren benötigen zusätzlich die Unterschrift eines Elternteils. Die Jahresgebühr beträgt 15 Euro, für Schüler, Studierende und Inhaber des Sozialpasses ist der Ausweis kostenlos.',
          'Bücher können Sie vier Wochen ausleihen, DVDs und Zeitschriften eine Woche. Die Leihfrist kann zweimal online oder telefonisch verlängert werden, sofern keine Vormerkung einer anderen Person vorliegt. Für verspätete Rückgaben berechnen wir 50 Cent pro Medium und Öffnungstag.',
          'Medien können während der Öffnungszeiten an der Theke und rund um die Uhr am Rückgabeautomaten neben dem Haupteingang zurückgegeben werden. Bitte werfen Sie keine Medien in den Briefkasten der Bibliothek. Für beschädigte oder verlorene Medien müssen Sie Ersatz leisten.',
        ],
      },
      items: [
        {
          kind: 'choice',
          question: 'Was braucht eine 16-Jährige für einen Bibliotheksausweis?',
          options: [
            'Nur ihren Personalausweis',
            'Ihren Personalausweis und die Unterschrift eines Elternteils',
            'Eine Bescheinigung ihrer Schule',
          ],
          answer: 1,
        },
        {
          kind: 'choice',
          question: 'Wer muss für den Ausweis bezahlen?',
          options: ['Studierende', 'Berufstätige Erwachsene', 'Schülerinnen und Schüler'],
          answer: 1,
        },
        {
          kind: 'choice',
          question: 'Man kann die Leihfrist nicht verlängern, wenn …',
          options: [
            'man das Buch schon zweimal verlängert hat.',
            'man nur telefonisch anruft.',
            'das Buch eine Woche zu spät ist.',
          ],
          answer: 0,
        },
        {
          kind: 'choice',
          question: 'Am Sonntag, wenn die Bibliothek geschlossen ist, kann man Bücher …',
          options: [
            'in den Briefkasten werfen.',
            'am Automaten neben dem Eingang zurückgeben.',
            'erst am Montag an der Theke zurückgeben.',
          ],
          answer: 1,
        },
      ],
    },
  },
]
