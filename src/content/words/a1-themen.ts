import type { ThemeId } from '../types'

/**
 * A1 core vocabulary for everyday topics, after the Goethe-Zertifikat A1 word list.
 * KIND | german | grammar | usage | english | example | example in English
 */
export const A1_TOPIC_WORDS: [ThemeId, string][] = [
  [
    'wohnen',
    `
# A1
N | das Haus | Häuser | | house | Das {Haus} hat einen Garten. | The house has a garden.
N | die Wohnung | Wohnungen | | flat | Die {Wohnung} hat drei Zimmer. | The flat has three rooms.
N | das Zimmer | Zimmer | | room | Mein {Zimmer} ist klein. | My room is small.
N | die Küche | Küchen | | kitchen | Wir essen in der {Küche}. | We eat in the kitchen.
N | das Bad | Bäder | | bathroom | Das {Bad} ist neben der Küche. | The bathroom is next to the kitchen.
N | das Wohnzimmer | Wohnzimmer | | living room | Im {Wohnzimmer} steht ein Sofa. | There's a sofa in the living room.
N | das Schlafzimmer | Schlafzimmer | | bedroom | Das {Schlafzimmer} ist ruhig. | The bedroom is quiet.
N | der Garten | Gärten | | garden | Die Kinder spielen im {Garten}. | The children are playing in the garden.
N | der Balkon | Balkone | | balcony | Die Wohnung hat einen {Balkon}. | The flat has a balcony.
N | die Tür | Türen | | door | Mach bitte die {Tür} zu. | Please close the door.
N | das Fenster | Fenster | | window | Das {Fenster} ist offen. | The window is open.
N | die Treppe | Treppen | | stairs | Die {Treppe} ist links. | The stairs are on the left.
N | der Stock | Stockwerke | | floor, storey | Ich wohne im zweiten {Stock}. | I live on the second floor.
N | der Aufzug | Aufzüge | | lift | Der {Aufzug} ist kaputt. | The lift is broken.
N | der Tisch | Tische | | table | Das Essen steht auf dem {Tisch}. | The food is on the table.
N | der Stuhl | Stühle | | chair | Wir brauchen noch einen {Stuhl}. | We need one more chair.
N | das Bett | Betten | | bed | Das {Bett} ist sehr bequem. | The bed is very comfortable.
N | der Schrank | Schränke | | cupboard, wardrobe | Die Kleidung ist im {Schrank}. | The clothes are in the wardrobe.
N | das Sofa | Sofas | | sofa | Wir sitzen auf dem {Sofa}. | We're sitting on the sofa.
N | die Lampe | Lampen | | lamp | Die {Lampe} ist neu. | The lamp is new.
N | der Kühlschrank | Kühlschränke | | fridge | Die Milch ist im {Kühlschrank}. | The milk is in the fridge.
N | der Herd | Herde | | cooker | Der {Herd} ist noch warm. | The cooker is still warm.
N | die Waschmaschine | Waschmaschinen | | washing machine | Die {Waschmaschine} ist im Keller. | The washing machine is in the cellar.
N | die Dusche | Duschen | | shower | Die {Dusche} ist kaputt. | The shower is broken.
N | die Toilette | Toiletten | | toilet | Wo ist die {Toilette}, bitte? | Where's the toilet, please?
N | die Miete | Mieten | | rent | Die {Miete} ist 700 Euro. | The rent is 700 euros.
N | der Nachbar | Nachbarn | | neighbour | Unser {Nachbar} ist sehr nett. | Our neighbour is very nice.
N | die Straße | Straßen | | street | Ich wohne in der {Straße} „Am Markt". | I live on the street "Am Markt".
N | die Stadt | Städte | | town, city | Berlin ist eine große {Stadt}. | Berlin is a big city.
N | das Dorf | Dörfer | | village | Meine Eltern wohnen in einem {Dorf}. | My parents live in a village.
ADJ | hell | heller, am hellsten | | bright, light | Das Zimmer ist schön {hell}. | The room is nice and bright.
ADJ | dunkel | dunkler, am dunkelsten | | dark | Der Flur ist sehr {dunkel}. | The hall is very dark.
ADJ | ruhig | ruhiger, am ruhigsten | | quiet | Die Wohnung ist {ruhig}. | The flat is quiet.
ADJ | offen | – | | open | Die Tür ist {offen}. | The door is open.
ADJ | zu | – | | closed, shut | Das Fenster ist {zu}. | The window is shut.
V | wohnen | wohnt, wohnte, hat gewohnt | | to live (reside) | Ich {wohne} in Hamburg. | I live in Hamburg.
V | mieten | mietet, mietete, hat gemietet | | to rent | Wir {mieten} eine Wohnung. | We're renting a flat.
V | umziehen | zieht um, zog um, ist umgezogen | | to move (house) | Wir {ziehen} im Mai {um}. | We're moving in May.
V | aufräumen | räumt auf, räumte auf, hat aufgeräumt | | to tidy up | Ich {räume} mein Zimmer {auf}. | I'm tidying my room.
V | sitzen | sitzt, saß, hat gesessen | | to sit | Die Katze {sitzt} auf dem Stuhl. | The cat is sitting on the chair.
`,
  ],
  [
    'essen',
    `
# A1
N | das Essen | – | | food, meal | Das {Essen} ist fertig. | The food is ready.
N | das Frühstück | Frühstücke | | breakfast | Zum {Frühstück} esse ich Müsli. | I have muesli for breakfast.
N | das Mittagessen | Mittagessen | | lunch | Das {Mittagessen} gibt es um zwölf. | Lunch is at twelve.
N | das Abendessen | Abendessen | | dinner, supper | Zum {Abendessen} gibt es Suppe. | There's soup for dinner.
N | das Brot | Brote | | bread | Ich kaufe ein {Brot}. | I'm buying a loaf of bread.
N | das Brötchen | Brötchen | | bread roll | Ich hätte gern vier {Brötchen}. | I'd like four bread rolls.
N | die Butter | – | | butter | Möchtest du {Butter} aufs Brot? | Would you like butter on your bread?
N | der Käse | – | | cheese | Ich esse gern {Käse}. | I like eating cheese.
N | die Wurst | Würste | | sausage, cold meat | Die {Wurst} ist sehr lecker. | The sausage is very tasty.
N | das Ei | Eier | | egg | Ich esse ein {Ei} zum Frühstück. | I eat an egg for breakfast.
N | das Fleisch | – | | meat | Ich esse kein {Fleisch}. | I don't eat meat.
N | der Fisch | Fische | | fish | Heute gibt es {Fisch}. | There's fish today.
N | das Hähnchen | Hähnchen | | chicken | Ich nehme das {Hähnchen} mit Reis. | I'll have the chicken with rice.
N | das Gemüse | – | | vegetables | {Gemüse} ist gesund. | Vegetables are healthy.
N | das Obst | – | | fruit | Ich esse jeden Tag {Obst}. | I eat fruit every day.
N | der Apfel | Äpfel | | apple | Der {Apfel} ist rot. | The apple is red.
N | die Banane | Bananen | | banana | Ein Kilo {Bananen}, bitte. | A kilo of bananas, please.
N | die Orange | Orangen | | orange | Die {Orangen} kommen aus Spanien. | The oranges come from Spain.
N | die Kartoffel | Kartoffeln | | potato | Wir essen {Kartoffeln} mit Fisch. | We're having potatoes with fish.
N | die Tomate | Tomaten | | tomato | Ich brauche drei {Tomaten}. | I need three tomatoes.
N | der Salat | Salate | | salad, lettuce | Ich nehme einen {Salat}. | I'll have a salad.
N | der Reis | – | | rice | Der {Reis} ist fertig. | The rice is ready.
N | die Nudeln | – | | pasta, noodles | Die Kinder essen gern {Nudeln}. | The children like eating pasta.
N | die Suppe | Suppen | | soup | Die {Suppe} ist heiß. | The soup is hot.
N | der Kuchen | Kuchen | | cake | Ich backe einen {Kuchen}. | I'm baking a cake.
N | der Zucker | – | | sugar | Nimmst du {Zucker}? | Do you take sugar?
N | das Salz | – | | salt | Die Suppe braucht noch {Salz}. | The soup needs more salt.
N | das Wasser | – | | water | Ein Glas {Wasser}, bitte. | A glass of water, please.
N | der Kaffee | Kaffees | | coffee | Ich trinke morgens {Kaffee}. | I drink coffee in the mornings.
N | der Tee | Tees | | tea | Möchten Sie einen {Tee}? | Would you like a tea?
N | die Milch | – | | milk | Ich trinke Kaffee mit {Milch}. | I drink coffee with milk.
N | der Saft | Säfte | | juice | Ein Glas {Saft}, bitte. | A glass of juice, please.
N | das Bier | Biere | | beer | Zwei {Bier}, bitte! | Two beers, please!
N | der Wein | Weine | | wine | Wir trinken ein Glas {Wein}. | We're having a glass of wine.
N | das Glas | Gläser | | glass | Das {Glas} ist leer. | The glass is empty.
N | die Flasche | Flaschen | | bottle | Eine {Flasche} Wasser, bitte. | A bottle of water, please.
N | die Tasse | Tassen | | cup | Eine {Tasse} Kaffee, bitte. | A cup of coffee, please.
N | der Teller | Teller | | plate | Der {Teller} ist schon leer. | The plate is already empty.
N | das Restaurant | Restaurants | | restaurant | Wir gehen heute ins {Restaurant}. | We're going to a restaurant today.
N | das Café | Cafés | | café | Wir treffen uns im {Café}. | We're meeting at the café.
N | die Speisekarte | Speisekarten | | menu | Die {Speisekarte}, bitte. | The menu, please.
N | die Rechnung | Rechnungen | | bill | Die {Rechnung}, bitte! | The bill, please!
ADJ | lecker | leckerer, am leckersten | | tasty | Der Kuchen ist sehr {lecker}. | The cake is very tasty.
ADJ | hungrig | – | | hungry | Ich bin sehr {hungrig}. | I'm very hungry.
P | Hunger haben | – | | to be hungry | Ich {habe Hunger}. | I'm hungry.
P | Durst haben | – | | to be thirsty | {Hast} du {Durst}? | Are you thirsty?
V | essen | isst, aß, hat gegessen | | to eat | Wir {essen} um sieben. | We eat at seven.
V | trinken | trinkt, trank, hat getrunken | | to drink | Ich {trinke} viel Wasser. | I drink a lot of water.
V | kochen | kocht, kochte, hat gekocht | | to cook | Heute {koche} ich. | I'm cooking today.
V | schmecken | schmeckt, schmeckte, hat geschmeckt | + D | to taste | Das {schmeckt} sehr gut! | That tastes really good!
V | bestellen | bestellt, bestellte, hat bestellt | | to order | Ich {bestelle} eine Pizza. | I'm ordering a pizza.
V | mögen | mag, mochte, hat gemocht | | to like | Ich {mag} keinen Fisch. | I don't like fish.
`,
  ],
  [
    'einkaufen',
    `
# A1
N | der Supermarkt | Supermärkte | | supermarket | Ich gehe zum {Supermarkt}. | I'm going to the supermarket.
N | die Bäckerei | Bäckereien | | bakery | Die {Bäckerei} öffnet um sechs. | The bakery opens at six.
N | der Markt | Märkte | | market | Am Samstag ist {Markt}. | There's a market on Saturday.
N | das Geschäft | Geschäfte | | shop | Das {Geschäft} ist bis acht offen. | The shop is open until eight.
N | der Preis | Preise | | price | Der {Preis} ist gut. | The price is good.
N | das Geld | – | | money | Ich habe kein {Geld} dabei. | I don't have any money on me.
N | der Euro | Euros | | euro | Das kostet drei {Euro}. | That costs three euros.
N | der Cent | Cents | | cent | Eine Banane kostet 30 {Cent}. | A banana costs 30 cents.
N | die Kasse | Kassen | | till, checkout | Bitte zahlen Sie an der {Kasse}. | Please pay at the till.
N | die Karte | Karten | | card; ticket; map | Kann ich mit {Karte} zahlen? | Can I pay by card?
N | das Kilo | Kilos | | kilo | Ein {Kilo} Tomaten, bitte. | A kilo of tomatoes, please.
N | das Gramm | – | | gram | 200 {Gramm} Käse, bitte. | 200 grams of cheese, please.
N | das Stück | Stücke | | piece | Ein {Stück} Kuchen, bitte. | A piece of cake, please.
N | die Packung | Packungen | | packet | Eine {Packung} Reis, bitte. | A packet of rice, please.
N | die Kleidung | – | | clothes | Ich kaufe neue {Kleidung}. | I'm buying new clothes.
N | die Hose | Hosen | | trousers | Die {Hose} ist zu lang. | The trousers are too long.
N | das Hemd | Hemden | | shirt | Er trägt ein weißes {Hemd}. | He's wearing a white shirt.
N | das T-Shirt | T-Shirts | | T-shirt | Das {T-Shirt} kostet zehn Euro. | The T-shirt costs ten euros.
N | das Kleid | Kleider | | dress | Das {Kleid} ist sehr schön. | The dress is very nice.
N | der Rock | Röcke | | skirt | Sie trägt einen roten {Rock}. | She's wearing a red skirt.
N | die Jacke | Jacken | | jacket | Nimm eine {Jacke} mit, es ist kalt. | Take a jacket, it's cold.
N | der Mantel | Mäntel | | coat | Mein {Mantel} ist sehr warm. | My coat is very warm.
N | der Schuh | Schuhe | | shoe | Die {Schuhe} sind zu klein. | The shoes are too small.
N | die Größe | Größen | | size | Welche {Größe} haben Sie? | What size are you?
N | die Farbe | Farben | | colour | Welche {Farbe} möchten Sie? | Which colour would you like?
ADJ | teuer | teurer, am teuersten | | expensive | Das Kleid ist zu {teuer}. | The dress is too expensive.
ADJ | günstig | günstiger, am günstigsten | | good value, cheap | Das Angebot ist sehr {günstig}. | The offer is very good value.
V | kaufen | kauft, kaufte, hat gekauft | | to buy | Ich {kaufe} Brot und Milch. | I'm buying bread and milk.
V | einkaufen | kauft ein, kaufte ein, hat eingekauft | | to go shopping | Ich {kaufe} heute {ein}. | I'm going shopping today.
V | verkaufen | verkauft, verkaufte, hat verkauft | | to sell | Er {verkauft} sein Auto. | He's selling his car.
V | kosten | kostet, kostete, hat gekostet | | to cost | Was {kostet} das? | What does that cost?
V | bezahlen | bezahlt, bezahlte, hat bezahlt | | to pay | Ich {bezahle} bar. | I'll pay cash.
V | tragen | trägt, trug, hat getragen | | to wear; to carry | Sie {trägt} eine Brille. | She wears glasses.
V | anprobieren | probiert an, probierte an, hat anprobiert | | to try on | Kann ich die Jacke {anprobieren}? | Can I try the jacket on?
`,
  ],
  [
    'reisen',
    `
# A1
N | der Bahnhof | Bahnhöfe | | station | Der {Bahnhof} ist nicht weit. | The station isn't far.
N | der Zug | Züge | | train | Der {Zug} fährt um neun. | The train leaves at nine.
N | der Bus | Busse | | bus | Ich fahre mit dem {Bus}. | I'm going by bus.
N | die Haltestelle | Haltestellen | | (bus) stop | Die {Haltestelle} ist vor dem Haus. | The stop is in front of the house.
N | die U-Bahn | U-Bahnen | | underground | Ich nehme die {U-Bahn}. | I'll take the underground.
N | die S-Bahn | S-Bahnen | | suburban train | Die {S-Bahn} fährt zum Flughafen. | The S-Bahn goes to the airport.
N | die Straßenbahn | Straßenbahnen | | tram | Die {Straßenbahn} ist voll. | The tram is full.
N | das Auto | Autos | | car | Wir fahren mit dem {Auto}. | We're going by car.
N | das Fahrrad | Fahrräder | | bicycle | Ich fahre mit dem {Fahrrad} zur Arbeit. | I cycle to work.
N | das Taxi | Taxis | | taxi | Wir nehmen ein {Taxi}. | We'll take a taxi.
N | das Flugzeug | Flugzeuge | | plane | Das {Flugzeug} landet um drei. | The plane lands at three.
N | der Flughafen | Flughäfen | | airport | Ich bringe dich zum {Flughafen}. | I'll take you to the airport.
N | die Fahrkarte | Fahrkarten | | ticket | Ich kaufe eine {Fahrkarte}. | I'm buying a ticket.
N | das Ticket | Tickets | | ticket | Hast du das {Ticket}? | Have you got the ticket?
N | das Gleis | Gleise | | platform, track | Der Zug fährt von {Gleis} drei. | The train leaves from platform three.
N | die Abfahrt | Abfahrten | | departure | Die {Abfahrt} ist um 10.15 Uhr. | Departure is at 10:15.
N | die Ankunft | Ankünfte | | arrival | Die {Ankunft} ist um zwölf. | Arrival is at twelve.
N | die Reise | Reisen | | journey, trip | Gute {Reise}! | Have a good trip!
N | der Urlaub | Urlaube | | holiday | Im {Urlaub} fahren wir ans Meer. | We're going to the seaside on holiday.
N | das Hotel | Hotels | | hotel | Das {Hotel} ist im Zentrum. | The hotel is in the centre.
N | der Koffer | Koffer | | suitcase | Mein {Koffer} ist sehr groß. | My suitcase is very big.
N | das Land | Länder | | country | Deutschland ist ein schönes {Land}. | Germany is a beautiful country.
N | das Meer | Meere | | sea | Im Sommer fahren wir ans {Meer}. | In summer we go to the seaside.
N | der Berg | Berge | | mountain | Wir wandern auf einen {Berg}. | We're hiking up a mountain.
N | der Weg | Wege | | way, path | Ist das der {Weg} zum Bahnhof? | Is this the way to the station?
N | die Ampel | Ampeln | | traffic light | Gehen Sie bis zur {Ampel}. | Go as far as the traffic lights.
N | die Ecke | Ecken | | corner | Die Bank ist an der {Ecke}. | The bank is on the corner.
N | das Zentrum | Zentren | | centre | Das Hotel liegt im {Zentrum}. | The hotel is in the centre.
N | der Platz | Plätze | | square; seat; space | Ist der {Platz} frei? | Is this seat free?
N | die Bank | Banken | | bank | Die {Bank} ist heute geschlossen. | The bank is closed today.
N | die Kirche | Kirchen | | church | Die {Kirche} ist sehr alt. | The church is very old.
N | das Museum | Museen | | museum | Wir gehen ins {Museum}. | We're going to the museum.
N | der Park | Parks | | park | Im {Park} spielen viele Kinder. | Lots of children play in the park.
ADJ | weit | weiter, am weitesten | | far | Ist es {weit} bis zum Bahnhof? | Is it far to the station?
ADV | nah | – | | near | Der Supermarkt ist ganz {nah}. | The supermarket is very close.
ADV | zu Fuß | – | | on foot | Ich gehe {zu Fuß}. | I'm walking.
V | fahren | fährt, fuhr, ist gefahren | | to go (by vehicle), drive | Wir {fahren} nach München. | We're going to Munich.
V | fliegen | fliegt, flog, ist geflogen | | to fly | Ich {fliege} nach London. | I'm flying to London.
V | reisen | reist, reiste, ist gereist | | to travel | Ich {reise} gern. | I like travelling.
V | ankommen | kommt an, kam an, ist angekommen | | to arrive | Der Zug {kommt} um acht {an}. | The train arrives at eight.
V | abfahren | fährt ab, fuhr ab, ist abgefahren | | to depart | Der Bus {fährt} gleich {ab}. | The bus is about to leave.
V | einsteigen | steigt ein, stieg ein, ist eingestiegen | | to get on | Bitte {steigen} Sie {ein}! | Please get on!
V | aussteigen | steigt aus, stieg aus, ist ausgestiegen | | to get off | Wir {steigen} am Bahnhof {aus}. | We get off at the station.
V | umsteigen | steigt um, stieg um, ist umgestiegen | | to change (trains) | Sie müssen in Köln {umsteigen}. | You have to change in Cologne.
V | bleiben | bleibt, blieb, ist geblieben | | to stay | Wir {bleiben} eine Woche. | We're staying for a week.
`,
  ],
  [
    'arbeit',
    `
# A1
N | die Arbeit | Arbeiten | | work, job | Die {Arbeit} beginnt um acht. | Work starts at eight.
N | der Beruf | Berufe | | job, occupation | Was sind Sie von {Beruf}? | What do you do for a living?
N | das Büro | Büros | | office | Ich arbeite im {Büro}. | I work in an office.
N | die Firma | Firmen | | company | Die {Firma} ist in Berlin. | The company is in Berlin.
N | der Kollege | Kollegen | | colleague (n-declension) | Mein {Kollege} ist krank. | My colleague is ill.
N | die Kollegin | Kolleginnen | | colleague (female) | Meine {Kollegin} hilft mir. | My colleague helps me.
N | der Chef | Chefs | | boss | Der {Chef} ist heute nicht da. | The boss isn't in today.
N | der Arzt | Ärzte | | doctor | Mein Bruder ist {Arzt}. | My brother is a doctor.
N | die Ärztin | Ärztinnen | | doctor (female) | Die {Ärztin} heißt Dr. Wolf. | The doctor is called Dr Wolf.
N | der Lehrer | Lehrer | | teacher | Unser {Lehrer} kommt aus Bonn. | Our teacher is from Bonn.
N | die Lehrerin | Lehrerinnen | | teacher (female) | Die {Lehrerin} erklärt die Grammatik. | The teacher explains the grammar.
N | der Verkäufer | Verkäufer | | shop assistant | Der {Verkäufer} ist freundlich. | The shop assistant is friendly.
N | der Kellner | Kellner | | waiter | Der {Kellner} bringt die Rechnung. | The waiter brings the bill.
N | der Student | Studenten | | student | Er ist {Student} in Leipzig. | He's a student in Leipzig.
N | die Studentin | Studentinnen | | student (female) | Sie ist {Studentin}. | She's a student.
N | der Termin | Termine | | appointment | Ich habe morgen einen {Termin}. | I have an appointment tomorrow.
N | die Pause | Pausen | | break | Wir machen eine {Pause}. | We're taking a break.
N | der Computer | Computer | | computer | Ich arbeite am {Computer}. | I work at the computer.
V | verdienen | verdient, verdiente, hat verdient | | to earn | Er {verdient} gut. | He earns well.
`,
  ],
  [
    'bildung',
    `
# A1
N | die Schule | Schulen | | school | Die Kinder gehen in die {Schule}. | The children go to school.
N | der Kurs | Kurse | | course | Der {Kurs} beginnt im Mai. | The course starts in May.
N | die Sprache | Sprachen | | language | Welche {Sprachen} sprechen Sie? | Which languages do you speak?
N | das Wort | Wörter | | word | Was bedeutet das {Wort}? | What does the word mean?
N | der Satz | Sätze | | sentence | Lesen Sie den {Satz}. | Read the sentence.
N | die Frage | Fragen | | question | Ich habe eine {Frage}. | I have a question.
N | die Antwort | Antworten | | answer | Die {Antwort} ist richtig. | The answer is correct.
N | das Buch | Bücher | | book | Das {Buch} ist sehr gut. | The book is very good.
N | das Heft | Hefte | | exercise book | Schreib das in dein {Heft}. | Write that in your exercise book.
N | der Kuli | Kulis | | biro, pen | Hast du einen {Kuli}? | Do you have a pen?
N | der Stift | Stifte | | pen, pencil | Ich brauche einen {Stift}. | I need a pen.
N | das Papier | – | | paper | Ich brauche ein Blatt {Papier}. | I need a sheet of paper.
N | die Seite | Seiten | | page | Öffnen Sie das Buch auf {Seite} zehn. | Open your book at page ten.
N | die Prüfung | Prüfungen | | exam | Die {Prüfung} ist am Freitag. | The exam is on Friday.
N | die Hausaufgabe | Hausaufgaben | | homework | Ich mache meine {Hausaufgaben}. | I'm doing my homework.
N | die Universität | Universitäten | | university | Sie studiert an der {Universität}. | She's studying at the university.
V | lernen | lernt, lernte, hat gelernt | | to learn, study | Ich {lerne} Deutsch. | I'm learning German.
V | studieren | studiert, studierte, hat studiert | | to study (at university) | Er {studiert} Medizin. | He's studying medicine.
V | verstehen | versteht, verstand, hat verstanden | | to understand | {Verstehen} Sie mich? | Do you understand me?
V | sprechen | spricht, sprach, hat gesprochen | | to speak | Ich {spreche} ein bisschen Deutsch. | I speak a little German.
V | lesen | liest, las, hat gelesen | | to read | Ich {lese} die Zeitung. | I'm reading the newspaper.
V | schreiben | schreibt, schrieb, hat geschrieben | | to write | {Schreiben} Sie bitte Ihren Namen. | Please write your name.
V | erklären | erklärt, erklärte, hat erklärt | | to explain | Kannst du mir das {erklären}? | Can you explain that to me?
V | wiederholen | wiederholt, wiederholte, hat wiederholt | | to repeat | Bitte {wiederholen} Sie. | Please repeat.
V | üben | übt, übte, hat geübt | | to practise | Ich {übe} jeden Tag. | I practise every day.
V | bedeuten | bedeutet, bedeutete, hat bedeutet | | to mean | Was {bedeutet} das? | What does that mean?
V | ankreuzen | kreuzt an, kreuzte an, hat angekreuzt | | to tick (a box) | {Kreuzen} Sie die richtige Antwort {an}. | Tick the correct answer.
V | ergänzen | ergänzt, ergänzte, hat ergänzt | | to complete, fill in | {Ergänzen} Sie die Sätze. | Complete the sentences.
`,
  ],
  [
    'gesundheit',
    `
# A1
N | der Körper | Körper | | body | Sport ist gut für den {Körper}. | Sport is good for the body.
N | der Kopf | Köpfe | | head | Mein {Kopf} tut weh. | My head hurts.
N | das Auge | Augen | | eye | Sie hat blaue {Augen}. | She has blue eyes.
N | das Ohr | Ohren | | ear | Mein {Ohr} tut weh. | My ear hurts.
N | die Nase | Nasen | | nose | Meine {Nase} läuft. | My nose is running.
N | der Mund | Münder | | mouth | Mach bitte den {Mund} auf. | Please open your mouth.
N | der Zahn | Zähne | | tooth | Ich putze meine {Zähne}. | I'm brushing my teeth.
N | der Hals | Hälse | | neck, throat | Mein {Hals} tut weh. | My throat hurts.
N | der Bauch | Bäuche | | stomach, tummy | Mein {Bauch} tut weh. | My stomach hurts.
N | der Rücken | Rücken | | back | Ich habe Schmerzen im {Rücken}. | I have back pain.
N | die Hand | Hände | | hand | Wasch dir die {Hände}! | Wash your hands!
N | der Arm | Arme | | arm | Mein {Arm} ist gebrochen. | My arm is broken.
N | das Bein | Beine | | leg | Mein {Bein} tut weh. | My leg hurts.
N | der Fuß | Füße | | foot | Mein {Fuß} tut weh. | My foot hurts.
N | das Haar | Haare | | hair | Sie hat lange {Haare}. | She has long hair.
N | die Schmerzen | – | | pain | Ich habe {Schmerzen}. | I'm in pain.
N | das Fieber | – | | temperature, fever | Das Kind hat {Fieber}. | The child has a temperature.
N | die Praxis | Praxen | | (doctor's) practice | Die {Praxis} ist im ersten Stock. | The surgery is on the first floor.
N | das Krankenhaus | Krankenhäuser | | hospital | Er liegt im {Krankenhaus}. | He's in hospital.
N | die Apotheke | Apotheken | | pharmacy | Die {Apotheke} ist neben der Bank. | The pharmacy is next to the bank.
N | das Medikament | Medikamente | | medicine | Nehmen Sie das {Medikament} dreimal am Tag. | Take the medicine three times a day.
N | die Tablette | Tabletten | | tablet, pill | Ich nehme eine {Tablette}. | I'm taking a tablet.
ADJ | krank | kränker, am kränksten | | ill | Ich bin heute {krank}. | I'm ill today.
ADJ | gesund | gesünder, am gesündesten | | healthy | Obst ist {gesund}. | Fruit is healthy.
ADJ | müde | müder, am müdesten | | tired | Ich bin sehr {müde}. | I'm very tired.
P | wehtun | – | | to hurt | Mein Kopf {tut weh}. | My head hurts.
`,
  ],
  [
    'freizeit',
    `
# A1
N | die Freizeit | – | | free time | Was machst du in deiner {Freizeit}? | What do you do in your free time?
N | das Hobby | Hobbys | | hobby | Mein {Hobby} ist Lesen. | My hobby is reading.
N | der Sport | – | | sport | Ich mache gern {Sport}. | I like doing sport.
N | der Fußball | – | | football | Am Samstag spielen wir {Fußball}. | We play football on Saturday.
N | die Musik | – | | music | Ich höre gern {Musik}. | I like listening to music.
N | das Kino | Kinos | | cinema | Gehen wir heute ins {Kino}? | Shall we go to the cinema today?
N | der Film | Filme | | film | Der {Film} war sehr gut. | The film was very good.
N | das Konzert | Konzerte | | concert | Das {Konzert} beginnt um acht. | The concert starts at eight.
N | das Spiel | Spiele | | game, match | Das {Spiel} beginnt um drei. | The match starts at three.
N | das Schwimmbad | Schwimmbäder | | swimming pool | Wir gehen ins {Schwimmbad}. | We're going to the swimming pool.
N | das Wetter | – | | weather | Wie ist das {Wetter} heute? | What's the weather like today?
N | die Sonne | Sonnen | | sun | Die {Sonne} scheint. | The sun is shining.
N | der Regen | – | | rain | Ich mag keinen {Regen}. | I don't like rain.
N | der Schnee | – | | snow | Im Winter gibt es viel {Schnee}. | There's lots of snow in winter.
N | der Wind | Winde | | wind | Heute gibt es viel {Wind}. | It's very windy today.
N | der Hund | Hunde | | dog | Wir haben einen {Hund}. | We have a dog.
N | die Katze | Katzen | | cat | Die {Katze} schläft auf dem Sofa. | The cat is sleeping on the sofa.
ADJ | warm | wärmer, am wärmsten | | warm | Heute ist es {warm}. | It's warm today.
ADJ | kalt | kälter, am kältesten | | cold | Im Winter ist es {kalt}. | It's cold in winter.
ADJ | heiß | heißer, am heißesten | | hot | Im Sommer ist es sehr {heiß}. | It's very hot in summer.
ADJ | sonnig | sonniger, am sonnigsten | | sunny | Morgen wird es {sonnig}. | It'll be sunny tomorrow.
V | regnen | regnet, regnete, hat geregnet | | to rain | Es {regnet} schon wieder. | It's raining again.
V | schneien | schneit, schneite, hat geschneit | | to snow | Im Januar {schneit} es oft. | It often snows in January.
V | scheinen | scheint, schien, hat geschienen | | to shine | Die Sonne {scheint}. | The sun is shining.
V | spielen | spielt, spielte, hat gespielt | | to play | Die Kinder {spielen} im Garten. | The children are playing in the garden.
V | schwimmen | schwimmt, schwamm, ist geschwommen | | to swim | Ich {schwimme} gern. | I like swimming.
V | tanzen | tanzt, tanzte, hat getanzt | | to dance | Wir {tanzen} die ganze Nacht. | We dance all night.
V | singen | singt, sang, hat gesungen | | to sing | Sie {singt} sehr schön. | She sings beautifully.
V | laufen | läuft, lief, ist gelaufen | | to run; to walk | Ich {laufe} jeden Morgen. | I go running every morning.
V | wandern | wandert, wanderte, ist gewandert | | to hike | Am Wochenende {wandern} wir. | We go hiking at the weekend.
V | spazieren gehen | geht spazieren, ging spazieren, ist spazieren gegangen | | to go for a walk | Wir {gehen} im Park {spazieren}. | We're going for a walk in the park.
V | fotografieren | fotografiert, fotografierte, hat fotografiert | | to take photos | Ich {fotografiere} gern. | I like taking photos.
V | malen | malt, malte, hat gemalt | | to paint | Das Kind {malt} ein Bild. | The child is painting a picture.
`,
  ],
]
