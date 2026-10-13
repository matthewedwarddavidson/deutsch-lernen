import type { ThemeId } from '../types'

/**
 * More A1 and A2 vocabulary by theme, after the Goethe-Zertifikat A1 and A2 word lists.
 * KIND | german | grammar | usage | english | example | example in English
 */
export const BASIC_WORDS: [ThemeId, string][] = [
  [
    'allgemein',
    `
# A1
X | dreißig | – | | thirty | Ich bin {dreißig} Jahre alt. | I'm thirty years old.
X | vierzig | – | | forty | Der Kurs hat {vierzig} Stunden. | The course has forty hours.
X | fünfzig | – | | fifty | Das kostet {fünfzig} Euro. | That costs fifty euros.
X | etwas | – | | something | Möchtest du {etwas} trinken? | Would you like something to drink?
X | nichts | – | | nothing | Ich habe {nichts} gesagt. | I didn't say anything.
X | alles | – | | everything | {Alles} klar! | All clear! / OK!
X | man | – | | one, you (people in general) | Wie schreibt {man} das? | How do you spell that?
X | jeder | – | | every, each | Ich lerne {jeden} Tag Deutsch. | I study German every day.
X | welcher | – | | which | {Welche} Farbe magst du? | Which colour do you like?
ADJ | viele | – | | many | Hier wohnen {viele} Studenten. | Lots of students live here.
ADV | dann | – | | then | Zuerst esse ich, {dann} gehe ich. | First I eat, then I leave.
ADV | zuerst | – | | first | {Zuerst} trinke ich einen Kaffee. | First I'll have a coffee.
ADV | danach | – | | afterwards | {Danach} gehen wir spazieren. | Afterwards we'll go for a walk.
ADV | gleich | – | | in a moment | Ich komme {gleich}. | I'll be there in a moment.
ADV | sofort | – | | immediately | Komm bitte {sofort}! | Please come immediately!
ADV | ganz | – | | quite, completely | Das ist {ganz} einfach. | That's quite easy.
ADV | genug | – | | enough | Ich habe {genug} Geld. | I have enough money.
ADV | genau | – | | exactly | Das ist {genau} richtig. | That's exactly right.
ADV | wirklich | – | | really | Das ist {wirklich} schön. | That's really nice.
ADV | lieber | – | | rather (prefer) | Ich trinke {lieber} Tee. | I'd rather have tea.
ADV | am liebsten | – | | most of all (like best) | {Am liebsten} esse ich Pizza. | I like pizza best of all.
ADV | da | – | | there | Ist Herr Weber {da}? | Is Mr Weber there?
ADV | oben | – | | upstairs, at the top | Das Bad ist {oben}. | The bathroom is upstairs.
ADV | unten | – | | downstairs, at the bottom | Die Küche ist {unten}. | The kitchen is downstairs.
ADV | draußen | – | | outside | Die Kinder spielen {draußen}. | The children are playing outside.
ADV | leider | – | | unfortunately | {Leider} habe ich keine Zeit. | Unfortunately I don't have time.
ADV | mal | – | | just, some time | Komm doch {mal} vorbei! | Come round some time!
ADV | mehr | – | | more | Ich möchte {mehr} Kaffee. | I'd like more coffee.
ADV | einmal | – | | once | Ich war {einmal} in Wien. | I was in Vienna once.
ADJ | einfach | – | | easy, simple | Die Übung ist {einfach}. | The exercise is easy.
ADJ | interessant | interessanter, am interessantesten | | interesting | Das Buch ist sehr {interessant}. | The book is very interesting.
ADJ | voll | voller, am vollsten | | full | Der Bus ist {voll}. | The bus is full.
ADJ | besetzt | – | | taken, engaged | Der Platz ist {besetzt}. | The seat is taken.
ADJ | geschlossen | – | | closed | Das Geschäft ist heute {geschlossen}. | The shop is closed today.
ADJ | hoch | höher, am höchsten | | high, tall | Der Berg ist sehr {hoch}. | The mountain is very high.
ADJ | super | – | | great | Das Konzert war {super}! | The concert was great!
N | das Problem | Probleme | | problem | Das ist kein {Problem}. | That's no problem.
N | die Information | Informationen | | information | Ich brauche mehr {Informationen}. | I need more information.
N | die Person | Personen | | person | Ein Tisch für vier {Personen}, bitte. | A table for four, please.
N | die Nummer | Nummern | | number | Wie ist deine {Nummer}? | What's your number?
N | das Ende | Enden | | end | Am {Ende} des Films weinen alle. | Everyone cries at the end of the film.
N | der Moment | Momente | | moment | Einen {Moment}, bitte. | One moment, please.
N | das Bild | Bilder | | picture | Das {Bild} hängt an der Wand. | The picture is hanging on the wall.
N | der Eingang | Eingänge | | entrance | Der {Eingang} ist links. | The entrance is on the left.
N | der Ausgang | Ausgänge | | exit | Wo ist der {Ausgang}? | Where's the exit?
N | der Kilometer | Kilometer | | kilometre | Bis Berlin sind es 200 {Kilometer}. | It's 200 kilometres to Berlin.
N | der Meter | Meter | | metre | Die Bank ist nur 100 {Meter} von hier. | The bank is only 100 metres from here.
V | bekommen | bekommt, bekam, hat bekommen | | to get, receive | Ich {bekomme} viele E-Mails. | I get a lot of emails.
V | holen | holt, holte, hat geholt | | to fetch, get | Ich {hole} schnell das Brot. | I'll quickly get the bread.
V | mitbringen | bringt mit, brachte mit, hat mitgebracht | | to bring (along) | Ich {bringe} einen Kuchen {mit}. | I'll bring a cake.
V | passen | passt, passte, hat gepasst | + D | to fit, suit | Die Hose {passt} mir nicht. | The trousers don't fit me.
V | zahlen | zahlt, zahlte, hat gezahlt | | to pay | Wir möchten bitte {zahlen}. | We'd like to pay, please.
V | stimmen | stimmt, stimmte, hat gestimmt | | to be right | Das {stimmt}! | That's right!
V | schauen | schaut, schaute, hat geschaut | | to look | {Schau} mal, das Wetter ist schön! | Look, the weather's nice!
V | rechnen | rechnet, rechnete, hat gerechnet | | to calculate | Das Kind kann schon {rechnen}. | The child can already do sums.
V | zählen | zählt, zählte, hat gezählt | | to count | Ich {zähle} bis zehn. | I'll count to ten.
V | aufmachen | macht auf, machte auf, hat aufgemacht | | to open | {Mach} bitte die Tür {auf}. | Please open the door.
V | zumachen | macht zu, machte zu, hat zugemacht | | to close | Kannst du das Fenster {zumachen}? | Can you close the window?
V | anmachen | macht an, machte an, hat angemacht | | to switch on | {Mach} bitte das Licht {an}. | Please switch the light on.
V | ausmachen | macht aus, machte aus, hat ausgemacht | | to switch off | Vergiss nicht, den Computer {auszumachen}. | Don't forget to switch the computer off.

# A2
PREP | seit | – | + D | since, for (time) | Ich wohne {seit} zwei Jahren hier. | I've lived here for two years.
PREP | zwischen | – | + D / + A | between | Die Bank ist {zwischen} der Post und dem Café. | The bank is between the post office and the café.
PREP | neben | – | + D / + A | next to | Das Kino ist {neben} dem Bahnhof. | The cinema is next to the station.
PREP | hinter | – | + D / + A | behind | Der Garten ist {hinter} dem Haus. | The garden is behind the house.
PREP | gegenüber | – | + D | opposite | Die Apotheke ist {gegenüber} der Bank. | The pharmacy is opposite the bank.
ADV | bestimmt | – | | certainly, surely | Er kommt {bestimmt} gleich. | He'll certainly be here soon.
ADV | fast | – | | almost | Ich bin {fast} fertig. | I'm almost finished.
ADV | zuletzt | – | | last, finally | {Zuletzt} haben wir Kaffee getrunken. | Finally we had coffee.
ADV | vorgestern | – | | the day before yesterday | {Vorgestern} war ich beim Arzt. | I was at the doctor's the day before yesterday.
ADV | übermorgen | – | | the day after tomorrow | {Übermorgen} fahren wir in Urlaub. | We go on holiday the day after tomorrow.
ADV | spätestens | – | | at the latest | Ich bin {spätestens} um sechs da. | I'll be there by six at the latest.
ADV | vorne | – | | at the front | Wir sitzen ganz {vorne}. | We're sitting right at the front.
ADV | hinten | – | | at the back | Der Ausgang ist {hinten}. | The exit is at the back.
ADV | nochmal | – | | again, once more | Kannst du das {nochmal} sagen? | Can you say that again?
ADV | allein | – | | alone | Ich wohne {allein}. | I live alone.
ADJ | bekannt | bekannter, am bekanntesten | | well-known | Der Sänger ist sehr {bekannt}. | The singer is very well-known.
ADJ | beliebt | beliebter, am beliebtesten | | popular | Das Café ist bei Studenten {beliebt}. | The café is popular with students.
ADJ | gleich | – | | same | Wir haben das {gleiche} Handy. | We've got the same phone.
ADJ | lustig | lustiger, am lustigsten | | funny | Der Film ist sehr {lustig}. | The film is very funny.
ADJ | modern | moderner, am modernsten | | modern | Die Küche ist ganz {modern}. | The kitchen is very modern.
ADJ | sicher | sicherer, am sichersten | | safe; sure | Bist du {sicher}? | Are you sure?
ADJ | stark | stärker, am stärksten | | strong | Der Kaffee ist sehr {stark}. | The coffee is very strong.
ADJ | typisch | – | | typical | Das ist {typisch} deutsch! | That's typically German!
ADJ | öffentlich | – | | public | Ich fahre mit {öffentlichen} Verkehrsmitteln. | I use public transport.
ADJ | privat | – | | private | Das ist eine {private} Frage. | That's a private question.
N | die Idee | Ideen | | idea | Das ist eine gute {Idee}! | That's a good idea!
N | die Geschichte | Geschichten | | story; history | Erzähl mir eine {Geschichte}! | Tell me a story!
N | das Glück | – | | luck; happiness | Viel {Glück} bei der Prüfung! | Good luck in the exam!
N | der Plan | Pläne | | plan | Hast du schon {Pläne} für Samstag? | Do you have any plans for Saturday yet?
N | der Tipp | Tipps | | tip | Hast du einen {Tipp} für mich? | Do you have a tip for me?
N | der Ort | Orte | | place | Das ist ein schöner {Ort}. | That's a beautiful place.
N | die Mitte | – | | middle | Der Tisch steht in der {Mitte}. | The table is in the middle.
N | die Welt | Welten | | world | Er reist um die ganze {Welt}. | He's travelling around the whole world.
N | der Zettel | Zettel | | note, slip of paper | Ich schreibe es auf einen {Zettel}. | I'll write it on a piece of paper.
V | erzählen | erzählt, erzählte, hat erzählt | | to tell | {Erzähl} mal, wie war der Urlaub? | Tell me, how was the holiday?
V | hoffen | hofft, hoffte, hat gehofft | | to hope | Ich {hoffe}, du kommst bald. | I hope you'll come soon.
V | passieren | passiert, passierte, ist passiert | | to happen | Was ist {passiert}? | What happened?
V | reden | redet, redete, hat geredet | | to talk | Wir müssen {reden}. | We need to talk.
V | diskutieren | diskutiert, diskutierte, hat diskutiert | | to discuss | Wir {diskutieren} über das Thema. | We're discussing the topic.
V | lassen | lässt, ließ, hat gelassen | | to leave; to let | {Lass} die Tasche hier. | Leave the bag here.
V | stellen | stellt, stellte, hat gestellt | | to put (upright) | Ich {stelle} die Flasche auf den Tisch. | I put the bottle on the table.
V | hängen | hängt, hängte, hat gehängt | | to hang (something) | Ich {hänge} das Bild an die Wand. | I'm hanging the picture on the wall.
V | sich setzen | setzt sich, setzte sich, hat sich gesetzt | | to sit down | Bitte {setzen Sie sich}! | Please sit down!
V | aussehen | sieht aus, sah aus, hat ausgesehen | | to look (appear) | Du {siehst} müde {aus}. | You look tired.
V | wechseln | wechselt, wechselte, hat gewechselt | | to change | Können Sie Geld {wechseln}? | Can you change money?
V | entscheiden | entscheidet, entschied, hat entschieden | | to decide | Du musst {entscheiden}. | You have to decide.
V | vorbereiten | bereitet vor, bereitete vor, hat vorbereitet | | to prepare | Ich {bereite} das Essen {vor}. | I'm preparing the meal.
V | bitten | bittet, bat, hat gebeten | um + A | to ask (for) | Darf ich Sie um Hilfe {bitten}? | May I ask you for help?
V | zuhören | hört zu, hörte zu, hat zugehört | + D | to listen | Bitte {hör} mir {zu}! | Please listen to me!
V | zurückrufen | ruft zurück, rief zurück, hat zurückgerufen | | to call back | Ich {rufe} Sie morgen {zurück}. | I'll call you back tomorrow.
`,
  ],
  [
    'alltag',
    `
# A2
ADV | nachts | – | | at night | {Nachts} schlafe ich schlecht. | I sleep badly at night.
N | das Licht | Lichter | | light | Mach bitte das {Licht} aus. | Please switch the light off.
N | die Brille | Brillen | | glasses | Ich brauche eine neue {Brille}. | I need new glasses.
N | der Schirm | Schirme | | umbrella | Nimm einen {Schirm} mit! | Take an umbrella!
N | der Friseur | Friseure | | hairdresser | Ich gehe morgen zum {Friseur}. | I'm going to the hairdresser's tomorrow.
N | die Batterie | Batterien | | battery | Die {Batterie} ist leer. | The battery is flat.
V | wecken | weckt, weckte, hat geweckt | | to wake (someone) | Kannst du mich um sechs {wecken}? | Can you wake me at six?
`,
  ],
  [
    'wohnen',
    `
# A2
N | der Flur | Flure | | hall, corridor | Die Schuhe stehen im {Flur}. | The shoes are in the hall.
N | die Wand | Wände | | wall | An der {Wand} hängt ein Bild. | There's a picture on the wall.
N | der Boden | Böden | | floor | Die Tasche liegt auf dem {Boden}. | The bag is on the floor.
N | die Decke | Decken | | ceiling; blanket | Die Lampe hängt an der {Decke}. | The lamp hangs from the ceiling.
N | der Sessel | Sessel | | armchair | Opa sitzt im {Sessel}. | Grandpa is sitting in the armchair.
N | der Teppich | Teppiche | | carpet, rug | Der {Teppich} ist neu. | The rug is new.
N | der Spiegel | Spiegel | | mirror | Im Bad hängt ein großer {Spiegel}. | There's a big mirror in the bathroom.
N | das Regal | Regale | | shelf | Die Bücher stehen im {Regal}. | The books are on the shelf.
N | der Fernseher | Fernseher | | television set | Der {Fernseher} ist kaputt. | The TV is broken.
N | der Umzug | Umzüge | | move (house) | Kannst du mir beim {Umzug} helfen? | Can you help me with the move?
N | der Briefkasten | Briefkästen | | letterbox | Ist Post im {Briefkasten}? | Is there any post in the letterbox?
N | das Haustier | Haustiere | | pet | Hast du ein {Haustier}? | Do you have a pet?
`,
  ],
  [
    'essen',
    `
# A2
N | das Getränk | Getränke | | drink | Was für {Getränke} haben Sie? | What drinks do you have?
N | die Sahne | – | | cream | Möchten Sie Kuchen mit {Sahne}? | Would you like cake with cream?
N | das Eis | – | | ice cream; ice | Die Kinder essen ein {Eis}. | The children are eating ice cream.
N | die Torte | Torten | | gateau | Zum Geburtstag gibt es eine {Torte}. | There's a gateau for the birthday.
N | der Schinken | Schinken | | ham | Ein Brötchen mit {Schinken}, bitte. | A roll with ham, please.
N | das Öl | Öle | | oil | Gib etwas {Öl} in die Pfanne. | Put some oil in the pan.
N | die Pommes | – | | chips | Ich nehme eine Wurst mit {Pommes}. | I'll have a sausage with chips.
N | das Messer | Messer | | knife | Das {Messer} ist sehr scharf. | The knife is very sharp.
N | die Gabel | Gabeln | | fork | Kann ich bitte eine {Gabel} haben? | Can I have a fork, please?
N | der Löffel | Löffel | | spoon | Für die Suppe brauchst du einen {Löffel}. | You need a spoon for the soup.
N | die Dose | Dosen | | tin, can | Eine {Dose} Tomaten, bitte. | A tin of tomatoes, please.
N | die Süßigkeit | Süßigkeiten | | sweet | Kinder lieben {Süßigkeiten}. | Children love sweets.
V | grillen | grillt, grillte, hat gegrillt | | to barbecue | Am Wochenende {grillen} wir im Garten. | We're having a barbecue in the garden at the weekend.
V | riechen | riecht, roch, hat gerochen | | to smell | Das {riecht} gut! | That smells good!
`,
  ],
  [
    'einkaufen',
    `
# A2
N | das Kaufhaus | Kaufhäuser | | department store | Im {Kaufhaus} gibt es alles. | You can get everything in the department store.
N | der Kiosk | Kioske | | kiosk | Ich kaufe die Zeitung am {Kiosk}. | I buy the newspaper at the kiosk.
N | die Kreditkarte | Kreditkarten | | credit card | Kann ich mit {Kreditkarte} bezahlen? | Can I pay by credit card?
N | der Pullover | Pullover | | jumper | Der {Pullover} ist schön warm. | The jumper is nice and warm.
N | die Bluse | Blusen | | blouse | Sie trägt eine weiße {Bluse}. | She's wearing a white blouse.
N | die Mütze | Mützen | | woolly hat | Im Winter trage ich eine {Mütze}. | I wear a woolly hat in winter.
N | der Schal | Schals | | scarf | Der {Schal} ist aus Wolle. | The scarf is made of wool.
N | die Socke | Socken | | sock | Ich brauche neue {Socken}. | I need new socks.
N | der Rucksack | Rucksäcke | | rucksack | Mein {Rucksack} ist zu schwer. | My rucksack is too heavy.
N | die Mode | Moden | | fashion | Sie interessiert sich für {Mode}. | She's interested in fashion.
N | die Qualität | Qualitäten | | quality | Die {Qualität} ist sehr gut. | The quality is very good.
ADJ | bunt | bunter, am buntesten | | colourful | Sie trägt ein {buntes} Kleid. | She's wearing a colourful dress.
ADJ | eng | enger, am engsten | | tight, narrow | Die Hose ist zu {eng}. | The trousers are too tight.
`,
  ],
  [
    'reisen',
    `
# A2
N | die Autobahn | Autobahnen | | motorway | Auf der {Autobahn} ist Stau. | There's a traffic jam on the motorway.
N | das Benzin | – | | petrol | Das {Benzin} ist wieder teurer. | Petrol is more expensive again.
N | der Bahnsteig | Bahnsteige | | platform | Wir warten auf dem {Bahnsteig}. | We're waiting on the platform.
N | das Motorrad | Motorräder | | motorbike | Er fährt {Motorrad}. | He rides a motorbike.
N | der Wagen | Wagen | | car; carriage | Unser {Wagen} ist in der Werkstatt. | Our car is at the garage.
N | die Werkstatt | Werkstätten | | garage (repairs), workshop | Das Auto ist in der {Werkstatt}. | The car is at the garage.
N | der Stadtplan | Stadtpläne | | street map | Haben Sie einen {Stadtplan}? | Do you have a street map?
N | der Tourist | Touristen | | tourist | Im Sommer kommen viele {Touristen}. | Lots of tourists come in summer.
N | das Einzelzimmer | Einzelzimmer | | single room | Ich möchte ein {Einzelzimmer} buchen. | I'd like to book a single room.
N | das Doppelzimmer | Doppelzimmer | | double room | Ein {Doppelzimmer} kostet 90 Euro. | A double room costs 90 euros.
N | die Rezeption | Rezeptionen | | reception | Den Schlüssel bekommen Sie an der {Rezeption}. | You get the key at reception.
N | die Jugendherberge | Jugendherbergen | | youth hostel | Wir übernachten in der {Jugendherberge}. | We're staying at the youth hostel.
N | der Campingplatz | Campingplätze | | campsite | Der {Campingplatz} liegt am See. | The campsite is by the lake.
N | das Zelt | Zelte | | tent | Wir schlafen im {Zelt}. | We sleep in a tent.
N | der See | Seen | | lake | Im {See} kann man schwimmen. | You can swim in the lake.
N | die Ansichtskarte | Ansichtskarten | | postcard | Ich schreibe dir eine {Ansichtskarte}. | I'll write you a postcard.
N | die Ferien | – | | holidays | In den {Ferien} fahren wir weg. | We're going away in the holidays.
N | die Strecke | Strecken | | route, distance | Die {Strecke} ist sehr schön. | The route is very beautiful.
V | parken | parkt, parkte, hat geparkt | | to park | Hier darf man nicht {parken}. | You can't park here.
V | besichtigen | besichtigt, besichtigte, hat besichtigt | | to visit (a sight) | Wir {besichtigen} das Schloss. | We're visiting the castle.
V | wegfahren | fährt weg, fuhr weg, ist weggefahren | | to go away | Wir {fahren} im Sommer {weg}. | We're going away in summer.
`,
  ],
  [
    'arbeit',
    `
# A2
N | die Arbeitszeit | Arbeitszeiten | | working hours | Meine {Arbeitszeit} ist von acht bis vier. | My working hours are from eight to four.
N | der Koch | Köche | | cook, chef | Mein Bruder ist {Koch}. | My brother is a chef.
N | der Mechaniker | Mechaniker | | mechanic | Der {Mechaniker} repariert das Auto. | The mechanic is repairing the car.
N | der Ingenieur | Ingenieure | | engineer | Mein Vater ist {Ingenieur}. | My father is an engineer.
N | der Polizist | Polizisten | | police officer | Der {Polizist} hilft uns. | The police officer helps us.
N | der Krankenpfleger | Krankenpfleger | | nurse (male) | Er ist {Krankenpfleger} im Krankenhaus. | He's a nurse at the hospital.
N | die Krankenschwester | Krankenschwestern | | nurse (female) | Die {Krankenschwester} misst das Fieber. | The nurse takes my temperature.
V | reparieren | repariert, reparierte, hat repariert | | to repair | Kannst du das Fahrrad {reparieren}? | Can you repair the bike?
V | unterrichten | unterrichtet, unterrichtete, hat unterrichtet | | to teach | Sie {unterrichtet} Mathematik. | She teaches maths.
V | bedienen | bedient, bediente, hat bedient | | to serve; to operate | Wer {bedient} hier? | Who's serving here?
`,
  ],
  [
    'bildung',
    `
# A2
N | die Bibliothek | Bibliotheken | | library | Ich lerne in der {Bibliothek}. | I study in the library.
N | die Übung | Übungen | | exercise | Machen Sie {Übung} 3. | Do exercise 3.
N | das Wörterbuch | Wörterbücher | | dictionary | Schau im {Wörterbuch} nach! | Look it up in the dictionary!
V | korrigieren | korrigiert, korrigierte, hat korrigiert | | to correct | Die Lehrerin {korrigiert} die Tests. | The teacher is marking the tests.
`,
  ],
  [
    'gesundheit',
    `
# A2
N | das Gesicht | Gesichter | | face | Wasch dir das {Gesicht}! | Wash your face!
N | das Herz | Herzen | | heart | Er hat ein schwaches {Herz}. | He has a weak heart.
N | die Kopfschmerzen | – | | headache | Ich habe {Kopfschmerzen}. | I've got a headache.
ADJ | fit | fitter, am fittesten | | fit | Er ist sehr {fit}. | He's very fit.
ADJ | dick | dicker, am dicksten | | fat, thick | Die Katze ist ziemlich {dick}. | The cat is rather fat.
ADJ | dünn | dünner, am dünnsten | | thin | Du bist so {dünn} geworden. | You've got so thin.
V | sterben | stirbt, starb, ist gestorben | | to die | Ihr Opa ist letztes Jahr {gestorben}. | Her grandpa died last year.
`,
  ],
  [
    'freizeit',
    `
# A2
N | das Theater | Theater | | theatre | Wir gehen heute ins {Theater}. | We're going to the theatre today.
N | das Lied | Lieder | | song | Das {Lied} kenne ich! | I know this song!
N | die Gitarre | Gitarren | | guitar | Er spielt {Gitarre}. | He plays the guitar.
N | das Klavier | Klaviere | | piano | Sie spielt seit zehn Jahren {Klavier}. | She's been playing the piano for ten years.
N | die Kamera | Kameras | | camera | Meine {Kamera} ist neu. | My camera is new.
N | das Picknick | Picknicks | | picnic | Wir machen ein {Picknick} im Park. | We're having a picnic in the park.
N | der Spielplatz | Spielplätze | | playground | Die Kinder sind auf dem {Spielplatz}. | The children are at the playground.
N | der Zoo | Zoos | | zoo | Am Sonntag gehen wir in den {Zoo}. | We're going to the zoo on Sunday.
N | das Tier | Tiere | | animal | Ich mag {Tiere}. | I like animals.
N | der Vogel | Vögel | | bird | Der {Vogel} singt. | The bird is singing.
N | das Pferd | Pferde | | horse | Sie reitet gern {Pferd}. | She likes riding.
N | der Baum | Bäume | | tree | Vor dem Haus steht ein großer {Baum}. | There's a big tree in front of the house.
N | die Blume | Blumen | | flower | Ich bringe dir {Blumen} mit. | I'll bring you flowers.
N | der Himmel | – | | sky | Der {Himmel} ist blau. | The sky is blue.
N | die Wolke | Wolken | | cloud | Heute gibt es viele {Wolken}. | There are lots of clouds today.
N | der Nebel | – | | fog | Am Morgen gab es {Nebel}. | There was fog in the morning.
ADJ | wolkig | – | | cloudy | Morgen ist es {wolkig}. | It will be cloudy tomorrow.
ADJ | windig | – | | windy | Am Meer ist es oft {windig}. | It's often windy by the sea.
ADJ | kühl | kühler, am kühlsten | | cool | Am Abend wird es {kühl}. | It gets cool in the evening.
ADJ | nass | nasser, am nassesten | | wet | Meine Schuhe sind {nass}. | My shoes are wet.
ADJ | sportlich | sportlicher, am sportlichsten | | sporty | Mein Bruder ist sehr {sportlich}. | My brother is very sporty.
V | sammeln | sammelt, sammelte, hat gesammelt | | to collect | Er {sammelt} Briefmarken. | He collects stamps.
V | zeichnen | zeichnet, zeichnete, hat gezeichnet | | to draw | Sie {zeichnet} sehr gut. | She draws very well.
V | mitmachen | macht mit, machte mit, hat mitgemacht | | to join in | {Machst} du beim Spiel {mit}? | Are you joining in the game?
V | Rad fahren | fährt Rad, fuhr Rad, ist Rad gefahren | | to cycle | Am Wochenende {fahre} ich {Rad}. | I go cycling at the weekend.
`,
  ],
  [
    'beziehungen',
    `
# A2
N | die Tante | Tanten | | aunt | Meine {Tante} wohnt in Österreich. | My aunt lives in Austria.
N | der Onkel | Onkel | | uncle | Mein {Onkel} hat einen Bauernhof. | My uncle has a farm.
N | der Cousin | Cousins | | cousin (male) | Mein {Cousin} ist so alt wie ich. | My cousin is the same age as me.
N | die Cousine | Cousinen | | cousin (female) | Meine {Cousine} studiert in Wien. | My cousin is studying in Vienna.
N | das Ehepaar | Ehepaare | | married couple | Neben uns wohnt ein älteres {Ehepaar}. | An older married couple lives next to us.
N | der Jugendliche | Jugendlichen | | young person, teenager | Das Angebot ist für {Jugendliche}. | The offer is for young people.
N | der Gruß | Grüße | | greeting | Viele {Grüße} an deine Familie! | Best wishes to your family!
ADJ | sympathisch | sympathischer, am sympathischsten | | likeable | Dein Freund ist sehr {sympathisch}. | Your friend is very likeable.
ADJ | hübsch | hübscher, am hübschesten | | pretty | Das Kleid ist {hübsch}. | The dress is pretty.
ADJ | blond | – | | blond | Sie hat {blonde} Haare. | She has blond hair.
V | gratulieren | gratuliert, gratulierte, hat gratuliert | + D | to congratulate | Ich {gratuliere} dir zum Geburtstag! | Happy birthday!
V | schenken | schenkt, schenkte, hat geschenkt | | to give (as a present) | Was {schenkst} du deiner Mutter? | What are you giving your mother?
V | sich treffen | trifft sich, traf sich, hat sich getroffen | mit + D | to meet up | Wir {treffen uns} am Freitag. | We're meeting up on Friday.
`,
  ],
  [
    'medien',
    `
# A2
N | das Internet | – | | internet | Ich suche das im {Internet}. | I'll look it up on the internet.
N | das Radio | Radios | | radio | Ich höre morgens {Radio}. | I listen to the radio in the mornings.
N | die Taste | Tasten | | key, button | Drücken Sie die grüne {Taste}. | Press the green button.
V | einschalten | schaltet ein, schaltete ein, hat eingeschaltet | | to switch on | {Schalte} bitte den Fernseher {ein}. | Please switch the TV on.
V | klicken | klickt, klickte, hat geklickt | | to click | {Klicken} Sie hier. | Click here.
`,
  ],
  [
    'behoerden',
    `
# A2
N | das Rathaus | Rathäuser | | town hall | Die Anmeldung ist im {Rathaus}. | You register at the town hall.
N | die Feuerwehr | Feuerwehren | | fire brigade | Ruf die {Feuerwehr}! | Call the fire brigade!
N | der Schalter | Schalter | | counter; switch | Bitte gehen Sie zu {Schalter} 3. | Please go to counter 3.
N | die Vorwahl | Vorwahlen | | dialling code | Die {Vorwahl} von Berlin ist 030. | Berlin's dialling code is 030.
N | der Nachname | Nachnamen | | surname | Wie ist Ihr {Nachname}? | What's your surname?
V | abgeben | gibt ab, gab ab, hat abgegeben | | to hand in | Bitte {geben} Sie das Formular hier {ab}. | Please hand the form in here.
V | wiegen | wiegt, wog, hat gewogen | | to weigh | Das Paket {wiegt} zwei Kilo. | The parcel weighs two kilos.
`,
  ],
]
