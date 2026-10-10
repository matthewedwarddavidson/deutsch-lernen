import type { MatchingTask } from '../types'

export const MATCHING_TASKS: MatchingTask[] = [
  {
    id: 'zuordnung-kurse',
    title: 'Kurse und Freizeitangebote',
    level: 'B1',
    theme: 'freizeit',
    instructions:
      'Sieben Personen suchen im Internet nach Kursen und Angeboten. Lesen Sie die Situationen und die Anzeigen. Welche Anzeige passt zu welcher Person? Sie können jede Anzeige nur einmal verwenden. Für eine Person gibt es keine passende Anzeige.',
    people: [
      {
        situation: 'Mirko möchte am Wochenende kochen lernen, am liebsten Gerichte aus Asien.',
        answer: 2,
        explanation: 'Anzeige C: Kochkurs „Asiatisch kochen", samstags.',
      },
      {
        situation: 'Frau Albers ist 70 und möchte lernen, wie man mit dem Smartphone Fotos an die Enkel schickt.',
        answer: 5,
        explanation: 'Anzeige F: Smartphone-Kurs für Seniorinnen und Senioren.',
      },
      {
        situation:
          'Tom sucht einen Sport, den er abends nach der Arbeit in einer Gruppe machen kann, aber nicht im Fitnessstudio.',
        answer: 0,
        explanation: 'Anzeige A: Lauftreff dienstags und donnerstags um 19 Uhr.',
      },
      {
        situation: 'Lara möchte ihr Englisch für den Beruf verbessern und hat nur online Zeit.',
        answer: 7,
        explanation: 'Anzeige H: Business English online.',
      },
      {
        situation: 'Familie Yilmaz sucht für die Sommerferien ein Angebot für ihre zehnjährige Tochter.',
        answer: 3,
        explanation: 'Anzeige D: Ferienprogramm für Kinder von 8 bis 12.',
      },
      {
        situation: 'Herr Peters möchte endlich Gitarre spielen lernen, kann aber keine Noten lesen.',
        answer: 6,
        explanation: 'Anzeige G: Gitarre ohne Noten für Erwachsene.',
      },
      {
        situation: 'Sophie sucht einen Tanzkurs für sich und ihren Partner, möglichst vormittags.',
        answer: null,
        explanation: 'Anzeige B ist ein Tanzkurs, aber nur abends. Keine Anzeige passt.',
      },
    ],
    ads: [
      {
        title: 'Lauftreff Stadtpark',
        text: 'Gemeinsam laufen statt allein trainieren! Jeden Dienstag und Donnerstag um 19 Uhr am Haupteingang. Für alle Niveaus, kostenlos.',
      },
      {
        title: 'Tanzschule Bernhardt',
        text: 'Paarkurse Standard und Latein für Anfänger. Montags und mittwochs 20–21:30 Uhr. Auch Einzelpersonen willkommen.',
      },
      {
        title: 'Asiatisch kochen',
        text: 'Sushi, Curry und Dim Sum selbst gemacht. Vier Samstage von 10 bis 14 Uhr in der Volkshochschule. Zutaten inklusive.',
      },
      {
        title: 'Sommer im Museum',
        text: 'Malen, forschen, entdecken: Ferienprogramm für Kinder von 8 bis 12 Jahren. In den Sommerferien jeweils Montag bis Freitag, 9 bis 15 Uhr.',
      },
      {
        title: 'Fit ab 50',
        text: 'Gymnastik und Rückentraining im Fitnessstudio Vital. Kleine Gruppen, vormittags. Erste Stunde gratis.',
      },
      {
        title: 'Digital fit im Alter',
        text: 'Nachrichten schreiben, Fotos verschicken, Videoanrufe: Smartphone-Kurs für Seniorinnen und Senioren. Langsam und mit viel Geduld.',
      },
      {
        title: 'Gitarre für Erwachsene',
        text: 'Sie wollten immer schon Gitarre spielen? Bei uns lernen Sie die wichtigsten Akkorde ganz ohne Noten. Abendkurs, 8 Termine.',
      },
      {
        title: 'Business English online',
        text: 'E-Mails, Telefonate, Meetings: Englisch für den Beruf. Live-Unterricht per Video, flexible Zeiten, alle Niveaus.',
      },
      {
        title: 'Italienisch für den Urlaub',
        text: 'In sechs Wochen fit für Ihre Reise nach Italien. Mittwochs 18 Uhr im Kulturzentrum.',
      },
    ],
  },
  {
    id: 'zuordnung-wohnen',
    title: 'Wohnungsanzeigen',
    level: 'B1',
    theme: 'wohnen',
    instructions:
      'Sechs Personen suchen eine Wohnung oder ein Zimmer. Welche Anzeige passt zu welcher Person? Jede Anzeige passt höchstens einmal. Für eine Person gibt es keine passende Anzeige.',
    people: [
      {
        situation: 'Jonas studiert und sucht ein günstiges Zimmer, gern mit anderen jungen Leuten zusammen.',
        answer: 1,
        explanation: 'Anzeige B: Zimmer in einer Studenten-WG, 350 Euro warm.',
      },
      {
        situation: 'Familie Krause mit zwei Kindern und Hund braucht eine große Wohnung mit Garten.',
        answer: 4,
        explanation: 'Anzeige E: Erdgeschosswohnung mit Garten, Haustiere erlaubt.',
      },
      {
        situation: 'Frau Novak kommt für drei Monate beruflich nach Hamburg und braucht eine möblierte Wohnung.',
        answer: 2,
        explanation: 'Anzeige C: möbliertes Apartment, auch für kurze Zeit.',
      },
      {
        situation: 'Herr Schulz ist 80, kann schlecht Treppen steigen und möchte in der Stadtmitte wohnen.',
        answer: 0,
        explanation: 'Anzeige A: barrierefreie Wohnung im Zentrum mit Aufzug.',
      },
      {
        situation: 'Ein Paar möchte eine Wohnung kaufen, nicht mieten.',
        answer: null,
        explanation: 'Alle Anzeigen sind Mietangebote. Keine passt.',
      },
      {
        situation: 'Mia arbeitet von zu Hause und braucht neben dem Schlafzimmer ein ruhiges Arbeitszimmer.',
        answer: 5,
        explanation: 'Anzeige F: Zwei-Zimmer-Wohnung in ruhiger Lage, ideal fürs Homeoffice.',
      },
    ],
    ads: [
      {
        title: 'Barrierefrei im Zentrum',
        text: '2-Zimmer-Wohnung, 55 m², 2. Stock mit Aufzug, ebenerdige Dusche. Direkt am Marktplatz, Ärzte und Geschäfte in der Nähe.',
      },
      {
        title: 'WG-Zimmer frei!',
        text: 'Wir (3 Studierende, 22–25) suchen eine/n Mitbewohner/in. 14 m², 350 € warm, große Küche, nette Leute.',
      },
      {
        title: 'Möbliertes Apartment',
        text: 'Komplett eingerichtet, mit WLAN und Waschmaschine. Mietdauer ab einem Monat möglich. Ideal für Geschäftsreisende.',
      },
      {
        title: 'Dachgeschoss mit Blick',
        text: '3 Zimmer, 4. Stock ohne Aufzug, große Dachterrasse. Keine Haustiere.',
      },
      {
        title: 'Viel Platz für Familien',
        text: '5-Zimmer-Wohnung im Erdgeschoss, 120 m², eigener Garten. Haustiere nach Absprache erlaubt. Kita und Schule in der Nähe.',
      },
      {
        title: 'Ruhig wohnen und arbeiten',
        text: 'Helle 2-Zimmer-Wohnung im Hinterhaus, sehr ruhige Lage. Das zweite Zimmer eignet sich perfekt als Büro.',
      },
      {
        title: 'Garage zu vermieten',
        text: 'Trockene Einzelgarage in der Lindenstraße, 60 € im Monat.',
      },
    ],
  },
  {
    id: 'zuordnung-stellen-b2',
    title: 'Stellenangebote',
    level: 'B2',
    theme: 'arbeit',
    instructions:
      'Sechs Personen suchen eine neue Stelle. Ordnen Sie die Stellenanzeigen zu. Achten Sie auf Details wie Arbeitszeit, Voraussetzungen und Ort. Für eine Person gibt es keine passende Anzeige.',
    people: [
      {
        situation: 'Elif ist ausgebildete Erzieherin und möchte wegen ihrer Kinder nur vormittags arbeiten.',
        answer: 2,
        explanation: 'Anzeige C: Kita sucht Erzieher/in in Teilzeit, 8 bis 13 Uhr.',
      },
      {
        situation: 'Marco hat gerade sein Informatikstudium abgeschlossen und möchte vollständig remote arbeiten.',
        answer: 0,
        explanation: 'Anzeige A: Junior-Entwickler/in, 100 % remote, Berufseinsteiger willkommen.',
      },
      {
        situation: 'Frau Lindner ist Buchhalterin mit zwanzig Jahren Erfahrung und sucht eine Führungsposition.',
        answer: 4,
        explanation: 'Anzeige E: Leitung der Buchhaltung, mehrjährige Erfahrung vorausgesetzt.',
      },
      {
        situation:
          'Ahmed spricht fließend Arabisch und Deutsch und möchte mit Menschen arbeiten, gern im sozialen Bereich.',
        answer: 3,
        explanation: 'Anzeige D: Beratung für Geflüchtete, Arabischkenntnisse erwünscht.',
      },
      {
        situation: 'Paul hat keine Ausbildung, ist aber körperlich fit und kann sofort anfangen, am liebsten draußen.',
        answer: 5,
        explanation: 'Anzeige F: Garten- und Landschaftsbau, Quereinsteiger, sofortiger Beginn.',
      },
      {
        situation: 'Julia sucht eine Stelle als Pilotin.',
        answer: null,
        explanation: 'Keine Anzeige bietet eine solche Stelle.',
      },
    ],
    ads: [
      {
        title: 'Junior Developer (m/w/d)',
        text: 'Start-up im Bereich Bildung sucht Verstärkung. 100 % remote, flexible Arbeitszeiten, Mentoring-Programm. Berufseinsteiger ausdrücklich willkommen.',
      },
      {
        title: 'Flugbegleiter/in',
        text: 'Für unsere Kurzstreckenflüge ab München suchen wir freundliche Flugbegleiter/innen. Schichtdienst, Englisch fließend.',
      },
      {
        title: 'Erzieher/in in Teilzeit',
        text: 'Unsere Kita „Sonnenblume" sucht ab sofort eine pädagogische Fachkraft für 25 Stunden pro Woche, Arbeitszeit 8 bis 13 Uhr.',
      },
      {
        title: 'Sozialberatung',
        text: 'Für unsere Beratungsstelle für Geflüchtete suchen wir engagierte Mitarbeiter/innen. Arabisch- oder Persischkenntnisse sind ein großes Plus.',
      },
      {
        title: 'Leitung Buchhaltung',
        text: 'Mittelständisches Unternehmen sucht eine erfahrene Führungskraft für ein Team von acht Personen. Mindestens zehn Jahre Berufserfahrung.',
      },
      {
        title: 'Helfer/in im Garten- und Landschaftsbau',
        text: 'Sie arbeiten gern an der frischen Luft? Wir bilden Quereinsteiger aus. Führerschein von Vorteil. Beginn sofort.',
      },
      {
        title: 'Verkäufer/in Bäckerei',
        text: 'Frühschicht ab 5:30 Uhr, auch am Wochenende. Erfahrung im Verkauf erwünscht.',
      },
    ],
  },
]
