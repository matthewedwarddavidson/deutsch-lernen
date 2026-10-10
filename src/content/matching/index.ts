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
  {
    id: 'zuordnung-ausfluege',
    title: 'Ausflüge am Wochenende',
    level: 'B1',
    theme: 'reisen',
    instructions:
      'Sechs Personen suchen ein Ausflugsziel für das Wochenende. Welche Anzeige passt zu welcher Person? Jede Anzeige passt höchstens einmal. Für eine Person gibt es keine passende Anzeige.',
    people: [
      {
        situation: 'Nina und Ben haben kein Auto und möchten einen Tag am Wasser verbringen.',
        answer: 3,
        explanation: 'Anzeige D: Schifffahrt auf dem See, Abfahrt direkt am Bahnhof.',
      },
      {
        situation: 'Herr Weber interessiert sich für Technik und möchte sehen, wie früher gearbeitet wurde.',
        answer: 0,
        explanation: 'Anzeige A: Industriemuseum mit alten Maschinen, die noch laufen.',
      },
      {
        situation: 'Familie Braun sucht etwas für Regentage, bei dem sich die Kinder bewegen können.',
        answer: 5,
        explanation: 'Anzeige F: Kletterhalle mit Kinderbereich, drinnen.',
      },
      {
        situation: 'Lena möchte am Sonntag in Ruhe ein gutes Frühstück essen und dabei Musik hören.',
        answer: 1,
        explanation: 'Anzeige B: Jazz-Brunch jeden Sonntag.',
      },
      {
        situation: 'Ein Rentnerpaar möchte wandern, aber nicht mehr als zwei Stunden und ohne steile Wege.',
        answer: 6,
        explanation: 'Anzeige G: leichter Rundweg, 5 km, für Senioren geeignet.',
      },
      {
        situation: 'Kai möchte eine Nacht im Zelt unter freiem Himmel verbringen.',
        answer: null,
        explanation: 'Anzeige E ist ein Hotel, kein Campingplatz. Keine Anzeige passt.',
      },
    ],
    ads: [
      {
        title: 'Industriemuseum Lautertal',
        text: 'Erleben Sie, wie man vor 100 Jahren Stoffe gewebt hat. Unsere historischen Maschinen sind noch in Betrieb. Täglich Vorführungen um 11 und 15 Uhr.',
      },
      {
        title: 'Jazz-Brunch im Café Mondschein',
        text: 'Jeden Sonntag von 10 bis 14 Uhr: großes Frühstücksbuffet und Live-Jazz. Bitte reservieren.',
      },
      {
        title: 'Freizeitpark Wunderland',
        text: 'Achterbahn, Wasserrutsche und Spaß für die ganze Familie. Nur bei gutem Wetter geöffnet. Großer Parkplatz direkt am Eingang.',
      },
      {
        title: 'Mit dem Schiff über den See',
        text: 'Rundfahrten stündlich ab 10 Uhr. Der Anleger liegt fünf Gehminuten vom Bahnhof entfernt. Restaurant an Bord.',
      },
      {
        title: 'Wellnesshotel Bergblick',
        text: 'Ein Wochenende ausspannen: Sauna, Massage und Panoramablick. Doppelzimmer ab 180 Euro pro Nacht.',
      },
      {
        title: 'Kletterhalle Hoch hinaus',
        text: 'Klettern bei jedem Wetter! Eigener Bereich für Kinder ab 4 Jahren, Ausrüstung kann geliehen werden.',
      },
      {
        title: 'Gemütlich wandern',
        text: 'Unser Rundweg am Waldrand ist nur 5 km lang und fast flach. Mit vielen Bänken – ideal auch für ältere Menschen.',
      },
    ],
  },
  {
    id: 'zuordnung-gesundheit',
    title: 'Gesundheit und Beratung',
    level: 'B1',
    theme: 'gesundheit',
    instructions:
      'Sechs Personen suchen Hilfe oder Informationen. Welche Anzeige passt zu welcher Person? Jede Anzeige passt höchstens einmal. Für eine Person gibt es keine passende Anzeige.',
    people: [
      {
        situation: 'Olga hat am Samstagabend starke Zahnschmerzen.',
        answer: 2,
        explanation: 'Anzeige C: zahnärztlicher Notdienst am Wochenende.',
      },
      {
        situation: 'Herr Fischer schläft seit Monaten schlecht und möchte lernen, wie man sich entspannt.',
        answer: 4,
        explanation: 'Anzeige E: Kurs Entspannung und besser schlafen.',
      },
      {
        situation: 'Anna möchte aufhören zu rauchen und sucht Unterstützung in einer Gruppe.',
        answer: 0,
        explanation: 'Anzeige A: Nichtraucherkurs in der Gruppe.',
      },
      {
        situation: 'Ein junger Vater weiß nicht, ob sein Baby genug isst, und möchte jemanden fragen.',
        answer: 5,
        explanation: 'Anzeige F: Hebammen-Sprechstunde für Eltern mit Babys.',
      },
      {
        situation: 'Murat hat sich beim Sport am Knie verletzt und braucht nach der Operation Übungen.',
        answer: 1,
        explanation: 'Anzeige B: Physiotherapie nach Sportverletzungen.',
      },
      {
        situation: 'Frau Kaya sucht eine Ärztin, die Türkisch spricht.',
        answer: null,
        explanation: 'Keine Anzeige nennt Türkischkenntnisse.',
      },
    ],
    ads: [
      {
        title: 'Rauchfrei in sechs Wochen',
        text: 'Gemeinsam schafft man es leichter: Unser Kurs trifft sich einmal pro Woche in kleinen Gruppen. Die Krankenkasse übernimmt einen Teil der Kosten.',
      },
      {
        title: 'Physiopraxis Bewegung',
        text: 'Spezialisiert auf Sportverletzungen und Reha nach Operationen an Knie und Schulter. Termine auch abends.',
      },
      {
        title: 'Zahnärztlicher Notdienst',
        text: 'Am Wochenende und an Feiertagen: Unter 01805 986700 erfahren Sie, welche Praxis geöffnet hat.',
      },
      {
        title: 'Apotheke am Markt',
        text: 'Neu: Bestellen Sie Ihre Medikamente online und holen Sie sie in 30 Minuten ab. Mo–Sa 8–20 Uhr.',
      },
      {
        title: 'Endlich wieder durchschlafen',
        text: 'Progressive Muskelentspannung und Atemübungen: acht Abende an der Volkshochschule, für Menschen mit Schlafproblemen.',
      },
      {
        title: 'Hebammen-Sprechstunde',
        text: 'Fragen zum Stillen, zur Flasche oder zum Schlafen? Jeden Donnerstag beraten unsere Hebammen Eltern mit Babys bis zu einem Jahr. Kostenlos.',
      },
      {
        title: 'Yoga für Schwangere',
        text: 'Sanfte Übungen für werdende Mütter ab dem vierten Monat. Dienstags 10 Uhr.',
      },
    ],
  },
  {
    id: 'zuordnung-weiterbildung-b2',
    title: 'Weiterbildung',
    level: 'B2',
    theme: 'bildung',
    instructions:
      'Sechs Personen interessieren sich für eine Weiterbildung. Lesen Sie die Angebote genau: Oft passen Thema und Zielgruppe, aber nicht Zeit, Ort oder Voraussetzungen. Für eine Person gibt es kein passendes Angebot.',
    people: [
      {
        situation:
          'Sandra arbeitet Vollzeit im Marketing und möchte sich neben dem Beruf in Datenanalyse fortbilden, ohne feste Termine.',
        answer: 3,
        explanation: 'Anzeige D: Datenanalyse im Selbststudium, Videos jederzeit abrufbar.',
      },
      {
        situation:
          'Herr Okafor ist Ingenieur aus Nigeria. Seine Abschlüsse sollen in Deutschland anerkannt werden, und er braucht dafür Fachsprache.',
        answer: 0,
        explanation:
          'Anzeige A: Berufsbezogenes Deutsch für Ingenieurinnen und Ingenieure, mit Beratung zur Anerkennung.',
      },
      {
        situation: 'Petra leitet seit Kurzem ein Team und fühlt sich bei schwierigen Mitarbeitergesprächen unsicher.',
        answer: 5,
        explanation: 'Anzeige F: Gesprächsführung für neue Führungskräfte.',
      },
      {
        situation: 'Jan hat kein Abitur, möchte aber studieren. Er hat eine Ausbildung und fünf Jahre Berufserfahrung.',
        answer: 2,
        explanation: 'Anzeige C: Studieren ohne Abitur, Beratung für beruflich Qualifizierte.',
      },
      {
        situation: 'Frau Roth ist 58 und möchte sich zur Tagesmutter qualifizieren.',
        answer: null,
        explanation: 'Keine Anzeige bietet eine Qualifizierung in der Kinderbetreuung.',
      },
      {
        situation:
          'Tim möchte sich selbstständig machen und braucht Grundwissen in Buchhaltung und Steuern, am liebsten kompakt an einem Wochenende.',
        answer: 4,
        explanation: 'Anzeige E: Existenzgründer-Wochenende mit Buchhaltung und Steuern.',
      },
    ],
    ads: [
      {
        title: 'Deutsch für Ingenieurinnen und Ingenieure',
        text: 'Fachsprache für technische Berufe, Niveau B2–C1. Inklusive individueller Beratung zur Anerkennung ausländischer Abschlüsse.',
      },
      {
        title: 'Excel für Einsteiger',
        text: 'Tabellen, Formeln, Diagramme: In vier Abendterminen lernen Sie die Grundlagen. Präsenzkurs, Raum 204.',
      },
      {
        title: 'Studieren ohne Abitur',
        text: 'Mit abgeschlossener Berufsausbildung und mehrjähriger Berufserfahrung können Sie auch ohne Abitur studieren. Wir beraten Sie zu Zugangswegen und Finanzierung.',
      },
      {
        title: 'Datenanalyse flexibel lernen',
        text: 'Online-Kurs im Selbststudium: Alle Videos und Übungen sind jederzeit abrufbar. Zertifikat nach bestandenem Abschlusstest.',
      },
      {
        title: 'Gründen – aber richtig',
        text: 'Intensivseminar Samstag und Sonntag: Businessplan, Buchhaltung, Steuern und Versicherungen für Existenzgründer.',
      },
      {
        title: 'Neu in der Führungsrolle',
        text: 'Kritikgespräche, Konflikte, Motivation: Trainieren Sie schwierige Gesprächssituationen in Rollenspielen. Drei Tage, Kleingruppe.',
      },
      {
        title: 'Pflegehelfer/in werden',
        text: 'Qualifizierung für die Altenpflege in sechs Monaten, Vollzeit. Gefördert von der Agentur für Arbeit.',
      },
    ],
  },
  {
    id: 'zuordnung-dienstleistungen',
    title: 'Hilfe und Dienstleistungen',
    level: 'B1',
    theme: 'alltag',
    instructions:
      'Sieben Personen suchen Hilfe im Alltag. Lesen Sie die Situationen und die Anzeigen. Welche Anzeige passt zu welcher Person? Sie können jede Anzeige nur einmal verwenden. Für eine Person gibt es keine passende Anzeige.',
    people: [
      {
        situation:
          'Jana zieht nächsten Monat um und braucht ein paar kräftige Helfer, aber kein teures Umzugsunternehmen.',
        answer: 3,
        explanation: 'Anzeige D: Studenten helfen beim Umzug, günstig, stundenweise.',
      },
      {
        situation: 'Herr Kaya hat seinen ersten Job in Deutschland und versteht seine Steuererklärung nicht.',
        answer: 6,
        explanation: 'Anzeige G: Lohnsteuerhilfeverein, Beratung für Arbeitnehmer, auch auf Englisch und Türkisch.',
      },
      {
        situation:
          'Die Tochter von Familie Weiß hat Probleme in Mathe und braucht vor der Prüfung im Juni Unterstützung.',
        answer: 0,
        explanation: 'Anzeige A: Nachhilfe in Mathe und Physik, Prüfungsvorbereitung.',
      },
      {
        situation:
          'Leon möchte sein altes Fahrrad nicht wegwerfen, aber er hat kein Werkzeug und keine Ahnung, wie man es repariert.',
        answer: 4,
        explanation: 'Anzeige E: Repair-Café, Ehrenamtliche helfen beim Reparieren, Werkzeug ist vorhanden.',
      },
      {
        situation:
          'Frau Novak arbeitet oft abends und sucht jemanden, der zweimal pro Woche mit ihrem Hund spazieren geht.',
        answer: null,
        explanation:
          'Keine Anzeige passt. Die Tierpension (H) nimmt Hunde nur für Urlaube auf, nicht für regelmäßige Spaziergänge.',
      },
      {
        situation:
          'Paul und Sara möchten am Samstag ins Theater gehen und brauchen jemanden für ihre zwei kleinen Kinder.',
        answer: 1,
        explanation: 'Anzeige B: Babysitterin mit Erste-Hilfe-Kurs, auch abends und am Wochenende.',
      },
      {
        situation:
          'Der 82-jährige Herr Brandt kann nicht mehr gut laufen und braucht Hilfe beim Einkaufen und im Haushalt.',
        answer: 8,
        explanation: 'Anzeige I: Nachbarschaftshilfe, Einkäufe und Haushalt für ältere Menschen.',
      },
    ],
    ads: [
      {
        title: 'Endlich bessere Noten!',
        text: 'Lehramtsstudentin gibt Nachhilfe in Mathe und Physik für die Klassen 5 bis 10. Gezielte Vorbereitung auf Prüfungen. Bei Ihnen zu Hause oder online.',
      },
      {
        title: 'Zuverlässige Babysitterin',
        text: 'Ich bin 22, studiere Sozialpädagogik und habe einen Erste-Hilfe-Kurs für Kinder gemacht. Ich habe abends und am Wochenende Zeit.',
      },
      {
        title: 'Hausmeisterservice Krause',
        text: 'Wir kümmern uns um Treppenhausreinigung, Winterdienst und Gartenpflege für Wohnanlagen. Nur Aufträge von Hausverwaltungen.',
      },
      {
        title: 'Starke Hände',
        text: 'Drei Studenten helfen beim Umzug: Kisten tragen, Möbel abbauen und aufbauen. Wir haben kein eigenes Auto, sind aber günstig. 15 Euro pro Stunde und Person.',
      },
      {
        title: 'Repair-Café im Stadtteilzentrum',
        text: 'Jeden ersten Samstag im Monat: Ehrenamtliche helfen Ihnen, Elektrogeräte, Kleidung und Fahrräder selbst zu reparieren. Werkzeug ist vorhanden. Kostenlos, Spenden willkommen.',
      },
      {
        title: 'Fahrradladen Speiche',
        text: 'Neue und gebrauchte Räder, E-Bikes und Zubehör. Inspektion zum Festpreis. Mo–Fr 10–19 Uhr.',
      },
      {
        title: 'Lohnsteuerhilfeverein Mitte',
        text: 'Wir machen die Steuererklärung für Arbeitnehmerinnen und Arbeitnehmer. Beratung auch auf Englisch und Türkisch. Jahresbeitrag ab 60 Euro.',
      },
      {
        title: 'Tierpension Waldblick',
        text: 'Sie fahren in den Urlaub? Ihr Hund oder Ihre Katze wohnt bei uns – mit großem Garten und viel Auslauf. Mindestaufenthalt drei Tage.',
      },
      {
        title: 'Nachbarschaftshilfe e. V.',
        text: 'Unsere Helferinnen und Helfer gehen für ältere und kranke Menschen einkaufen, helfen im Haushalt und begleiten zum Arzt. Rufen Sie uns an!',
      },
    ],
  },
]
