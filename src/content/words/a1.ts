import type { ThemeId } from '../types'

/**
 * A1 core vocabulary by theme, after the Goethe-Zertifikat A1 word list.
 * KIND | german | grammar | usage | english | example | example in English
 */
export const A1_WORDS: [ThemeId, string][] = [
  [
    'allgemein',
    `
# A1
X | ja | – | | yes | {Ja}, das ist richtig. | Yes, that's right.
X | nein | – | | no | {Nein}, ich komme nicht aus England. | No, I'm not from England.
X | nicht | – | | not | Das ist {nicht} mein Buch. | That isn't my book.
X | wer | – | | who | {Wer} ist das? | Who is that?
X | was | – | | what | {Was} machst du heute? | What are you doing today?
X | wo | – | | where | {Wo} wohnst du? | Where do you live?
X | woher | – | | where from | {Woher} kommen Sie? | Where are you from?
X | wohin | – | | where to | {Wohin} fährst du im Sommer? | Where are you going in the summer?
X | wann | – | | when | {Wann} beginnt der Kurs? | When does the course start?
X | wie | – | | how | {Wie} heißt du? | What's your name?
X | warum | – | | why | {Warum} lernst du Deutsch? | Why are you learning German?
X | wie viel | – | | how much | {Wie viel} kostet das? | How much does that cost?
KONJ | und | – | | and | Ich trinke Kaffee {und} Wasser. | I drink coffee and water.
KONJ | oder | – | | or | Möchtest du Tee {oder} Kaffee? | Would you like tea or coffee?
KONJ | aber | – | | but | Die Wohnung ist klein, {aber} schön. | The flat is small but nice.
PREP | mit | – | + D | with | Ich fahre {mit} dem Bus. | I go by bus.
PREP | ohne | – | + A | without | Ich trinke Kaffee {ohne} Zucker. | I drink coffee without sugar.
PREP | für | – | + A | for | Das Geschenk ist {für} dich. | The present is for you.
PREP | aus | – | + D | from, out of | Ich komme {aus} Spanien. | I'm from Spain.
X | null | – | | zero | Meine Nummer beginnt mit {null}. | My number starts with zero.
X | eins | – | | one | Es ist {eins}. | It's one o'clock.
X | zwei | – | | two | Ich habe {zwei} Kinder. | I have two children.
X | drei | – | | three | Wir bleiben {drei} Tage. | We're staying three days.
X | vier | – | | four | Die Wohnung hat {vier} Zimmer. | The flat has four rooms.
X | fünf | – | | five | Das kostet {fünf} Euro. | That costs five euros.
X | sechs | – | | six | Der Kurs beginnt um {sechs} Uhr. | The course starts at six o'clock.
X | sieben | – | | seven | Die Woche hat {sieben} Tage. | The week has seven days.
X | acht | – | | eight | Ich arbeite {acht} Stunden. | I work eight hours.
X | neun | – | | nine | Mein Sohn ist {neun} Jahre alt. | My son is nine years old.
X | zehn | – | | ten | Der Bus kommt in {zehn} Minuten. | The bus is coming in ten minutes.
X | elf | – | | eleven | Ich gehe um {elf} ins Bett. | I go to bed at eleven.
X | zwölf | – | | twelve | Das Jahr hat {zwölf} Monate. | The year has twelve months.
X | zwanzig | – | | twenty | Sie ist {zwanzig} Jahre alt. | She's twenty years old.
X | hundert | – | | a hundred | Das Fahrrad kostet {hundert} Euro. | The bike costs a hundred euros.
X | tausend | – | | a thousand | Das Auto kostet {tausend} Euro. | The car costs a thousand euros.
X | erste | – | | first | Das ist mein {erster} Tag hier. | This is my first day here.
N | die Zahl | Zahlen | | number | Schreiben Sie die {Zahl} bitte auf. | Please write the number down.
N | der Montag | Montage | | Monday | Am {Montag} habe ich Deutschkurs. | I have my German course on Monday.
N | der Dienstag | Dienstage | | Tuesday | Am {Dienstag} gehe ich schwimmen. | I go swimming on Tuesday.
N | der Mittwoch | Mittwoche | | Wednesday | Der Arzt hat am {Mittwoch} keine Sprechstunde. | The doctor has no surgery hours on Wednesday.
N | der Donnerstag | Donnerstage | | Thursday | Am {Donnerstag} kommt meine Mutter. | My mother is coming on Thursday.
N | der Freitag | Freitage | | Friday | Am {Freitag} arbeite ich nur bis zwölf. | On Friday I only work until twelve.
N | der Samstag | Samstage | | Saturday | Am {Samstag} kaufe ich ein. | I go shopping on Saturday.
N | der Sonntag | Sonntage | | Sunday | Am {Sonntag} sind die Geschäfte zu. | The shops are closed on Sunday.
N | das Wochenende | Wochenenden | | weekend | Was machst du am {Wochenende}? | What are you doing at the weekend?
N | der Tag | Tage | | day | Guten {Tag}! | Hello! (Good day!)
N | die Woche | Wochen | | week | Ich bin eine {Woche} in Berlin. | I'm in Berlin for a week.
N | der Monat | Monate | | month | Die Miete kostet 600 Euro im {Monat}. | The rent is 600 euros a month.
N | das Jahr | Jahre | | year | Ich lerne seit einem {Jahr} Deutsch. | I've been learning German for a year.
N | der Januar | – | | January | Im {Januar} ist es sehr kalt. | It's very cold in January.
N | der Februar | – | | February | Mein Geburtstag ist im {Februar}. | My birthday is in February.
N | der März | – | | March | Im {März} beginnt der Frühling. | Spring begins in March.
N | der April | – | | April | Im {April} regnet es oft. | It often rains in April.
N | der Mai | – | | May | Wir heiraten im {Mai}. | We're getting married in May.
N | der Juni | – | | June | Der Kurs endet im {Juni}. | The course ends in June.
N | der Juli | – | | July | Im {Juli} haben die Kinder Ferien. | The children are on holiday in July.
N | der August | – | | August | Im {August} fahren wir ans Meer. | In August we're going to the seaside.
N | der September | – | | September | Im {September} beginnt die Schule. | School starts in September.
N | der Oktober | – | | October | Im {Oktober} wird es kalt. | It gets cold in October.
N | der November | – | | November | Im {November} ist es oft grau. | It's often grey in November.
N | der Dezember | – | | December | Im {Dezember} ist Weihnachten. | Christmas is in December.
N | der Frühling | Frühlinge | | spring | Im {Frühling} blühen die Blumen. | The flowers bloom in spring.
N | der Sommer | Sommer | | summer | Im {Sommer} ist es warm. | It's warm in summer.
N | der Herbst | Herbste | | autumn | Im {Herbst} fallen die Blätter. | The leaves fall in autumn.
N | der Winter | Winter | | winter | Im {Winter} fahren wir Ski. | We go skiing in winter.
ADJ | rot | – | | red | Ich habe ein {rotes} Auto. | I have a red car.
ADJ | blau | – | | blue | Der Himmel ist {blau}. | The sky is blue.
ADJ | grün | – | | green | Die Ampel ist {grün}. | The traffic light is green.
ADJ | gelb | – | | yellow | Die Bananen sind {gelb}. | The bananas are yellow.
ADJ | schwarz | – | | black | Ich trinke den Kaffee {schwarz}. | I drink my coffee black.
ADJ | weiß | – | | white | Die Wände sind {weiß}. | The walls are white.
ADJ | braun | – | | brown | Er hat {braune} Augen. | He has brown eyes.
ADJ | grau | – | | grey | Meine Katze ist {grau}. | My cat is grey.
ADV | heute | – | | today | {Heute} habe ich keine Zeit. | I don't have time today.
ADV | morgen | – | | tomorrow | {Morgen} fahre ich nach Köln. | I'm going to Cologne tomorrow.
ADV | gestern | – | | yesterday | {Gestern} war ich im Kino. | I was at the cinema yesterday.
ADV | jetzt | – | | now | Ich muss {jetzt} gehen. | I have to go now.
ADV | immer | – | | always | Er ist {immer} pünktlich. | He's always on time.
ADV | oft | – | | often | Ich gehe {oft} spazieren. | I often go for a walk.
ADV | manchmal | – | | sometimes | {Manchmal} koche ich für Freunde. | Sometimes I cook for friends.
ADV | nie | – | | never | Ich trinke {nie} Alkohol. | I never drink alcohol.
ADV | hier | – | | here | Wohnen Sie {hier}? | Do you live here?
ADV | dort | – | | there | {Dort} ist der Bahnhof. | The station is over there.
ADV | auch | – | | also, too | Ich komme {auch} mit. | I'm coming too.
ADV | nur | – | | only | Ich habe {nur} zehn Euro. | I only have ten euros.
ADV | sehr | – | | very | Das Essen ist {sehr} gut. | The food is very good.
ADV | viel | – | | a lot, much | Er arbeitet {viel}. | He works a lot.
ADV | wenig | – | | little, not much | Ich habe {wenig} Zeit. | I have little time.
ADV | gern | – | | gladly (like doing) | Ich lese {gern}. | I like reading.
ADV | schon | – | | already | Ich bin {schon} fertig. | I'm already finished.
ADV | noch | – | | still | Er schläft {noch}. | He's still asleep.
ADV | bald | – | | soon | Bis {bald}! | See you soon!
ADV | später | – | | later | Ich rufe dich {später} an. | I'll call you later.
ADV | zusammen | – | | together | Wir kochen {zusammen}. | We cook together.
ADV | wieder | – | | again | Kommen Sie bitte morgen {wieder}. | Please come back tomorrow.
ADV | links | – | | on the left | Die Bank ist {links}. | The bank is on the left.
ADV | rechts | – | | on the right | Gehen Sie hier {rechts}. | Turn right here.
ADV | geradeaus | – | | straight on | Gehen Sie immer {geradeaus}. | Keep going straight on.
ADV | vielleicht | – | | maybe | {Vielleicht} komme ich morgen. | Maybe I'll come tomorrow.
ADV | natürlich | – | | of course | {Natürlich} helfe ich dir. | Of course I'll help you.
ADV | zu | – | | too (much) | Die Hose ist {zu} groß. | The trousers are too big.
ADJ | groß | größer, am größten | | big, tall | Unser Haus ist {groß}. | Our house is big.
ADJ | klein | kleiner, am kleinsten | | small | Das Zimmer ist {klein}. | The room is small.
ADJ | gut | besser, am besten | | good | Das Wetter ist heute {gut}. | The weather is good today.
ADJ | schlecht | schlechter, am schlechtesten | | bad | Mir geht es {schlecht}. | I'm not feeling well.
ADJ | neu | neuer, am neuesten | | new | Ich habe ein {neues} Handy. | I have a new mobile phone.
ADJ | alt | älter, am ältesten | | old | Wie {alt} bist du? | How old are you?
ADJ | jung | jünger, am jüngsten | | young | Meine Lehrerin ist noch {jung}. | My teacher is still young.
ADJ | schön | schöner, am schönsten | | beautiful, nice | Die Stadt ist sehr {schön}. | The city is very beautiful.
ADJ | billig | billiger, am billigsten | | cheap | Das Hotel ist {billig}. | The hotel is cheap.
ADJ | lang | länger, am längsten | | long | Der Film ist sehr {lang}. | The film is very long.
ADJ | kurz | kürzer, am kürzesten | | short | Die Pause ist nur {kurz}. | The break is only short.
ADJ | richtig | – | | right, correct | Die Antwort ist {richtig}. | The answer is correct.
ADJ | falsch | – | | wrong | Die Nummer ist {falsch}. | The number is wrong.
ADJ | leicht | leichter, am leichtesten | | easy, light | Die Aufgabe ist {leicht}. | The task is easy.
ADJ | schwer | schwerer, am schwersten | | difficult, heavy | Der Koffer ist {schwer}. | The suitcase is heavy.
ADJ | schnell | schneller, am schnellsten | | fast | Der Zug ist sehr {schnell}. | The train is very fast.
ADJ | langsam | langsamer, am langsamsten | | slow | Sprechen Sie bitte {langsam}. | Please speak slowly.
ADJ | wichtig | wichtiger, am wichtigsten | | important | Der Termin ist {wichtig}. | The appointment is important.
ADJ | fertig | – | | ready, finished | Das Essen ist {fertig}. | Dinner is ready.
ADJ | frei | – | | free | Ist der Platz hier {frei}? | Is this seat free?
ADJ | laut | lauter, am lautesten | | loud, noisy | Die Straße ist sehr {laut}. | The street is very noisy.
ADJ | leise | leiser, am leisesten | | quiet | Bitte sei {leise}, das Baby schläft. | Please be quiet, the baby's asleep.
ADJ | früh | früher, am frühesten | | early | Ich stehe {früh} auf. | I get up early.
ADJ | spät | später, am spätesten | | late | Es ist schon {spät}. | It's already late.
ADJ | toll | – | | great | Die Party war {toll}! | The party was great!
ADJ | kaputt | – | | broken | Mein Handy ist {kaputt}. | My phone is broken.
ADJ | möglich | – | | possible | Ist das {möglich}? | Is that possible?
ADJ | andere | – | | other, different | Haben Sie eine {andere} Farbe? | Do you have another colour?
V | sein | ist, war, ist gewesen | | to be | Ich {bin} Lehrerin. | I'm a teacher.
V | haben | hat, hatte, hat gehabt | | to have | Ich {habe} eine Schwester. | I have a sister.
V | werden | wird, wurde, ist geworden | | to become | Er {wird} morgen dreißig. | He turns thirty tomorrow.
V | machen | macht, machte, hat gemacht | | to do, make | Was {machst} du am Wochenende? | What are you doing at the weekend?
V | gehen | geht, ging, ist gegangen | | to go, walk | Ich {gehe} zu Fuß zur Arbeit. | I walk to work.
V | kommen | kommt, kam, ist gekommen | | to come | Ich {komme} aus Polen. | I'm from Poland.
V | sehen | sieht, sah, hat gesehen | | to see | {Siehst} du das Haus dort? | Can you see the house over there?
V | hören | hört, hörte, hat gehört | | to hear, listen to | Ich {höre} gern Musik. | I like listening to music.
V | sagen | sagt, sagte, hat gesagt | | to say | Was {sagst} du? | What are you saying?
V | fragen | fragt, fragte, hat gefragt | | to ask | Darf ich etwas {fragen}? | May I ask something?
V | antworten | antwortet, antwortete, hat geantwortet | | to answer | Bitte {antworten} Sie schnell. | Please reply quickly.
V | wissen | weiß, wusste, hat gewusst | | to know (a fact) | Ich {weiß} es nicht. | I don't know.
V | kennen | kennt, kannte, hat gekannt | | to know (be familiar with) | {Kennst} du meinen Bruder? | Do you know my brother?
V | finden | findet, fand, hat gefunden | | to find | Ich {finde} meinen Schlüssel nicht. | I can't find my key.
V | geben | gibt, gab, hat gegeben | | to give | {Gibst} du mir bitte das Salz? | Can you pass me the salt, please?
V | nehmen | nimmt, nahm, hat genommen | | to take | Ich {nehme} den Bus. | I'll take the bus.
V | bringen | bringt, brachte, hat gebracht | | to bring | {Bringen} Sie mir bitte die Rechnung. | Please bring me the bill.
V | brauchen | braucht, brauchte, hat gebraucht | | to need | Ich {brauche} einen Stift. | I need a pen.
V | können | kann, konnte, hat gekonnt | | can, to be able to | {Kannst} du schwimmen? | Can you swim?
V | müssen | muss, musste, hat gemusst | | must, to have to | Ich {muss} jetzt arbeiten. | I have to work now.
V | wollen | will, wollte, hat gewollt | | to want | Wir {wollen} ins Kino gehen. | We want to go to the cinema.
V | dürfen | darf, durfte, hat gedurft | | may, to be allowed to | Hier {darf} man nicht rauchen. | You're not allowed to smoke here.
V | möchten | möchte, wollte, hat gewollt | | would like | Ich {möchte} einen Kaffee, bitte. | I'd like a coffee, please.
V | glauben | glaubt, glaubte, hat geglaubt | | to believe, think | Ich {glaube}, er ist krank. | I think he's ill.
V | warten | wartet, wartete, hat gewartet | | to wait | Ich {warte} auf den Bus. | I'm waiting for the bus.
V | helfen | hilft, half, hat geholfen | + D | to help | Kannst du mir {helfen}? | Can you help me?
V | suchen | sucht, suchte, hat gesucht | | to look for | Ich {suche} eine Wohnung. | I'm looking for a flat.
V | zeigen | zeigt, zeigte, hat gezeigt | | to show | Ich {zeige} dir die Stadt. | I'll show you the city.
V | öffnen | öffnet, öffnete, hat geöffnet | | to open | Kannst du bitte das Fenster {öffnen}? | Can you open the window, please?
V | schließen | schließt, schloss, hat geschlossen | | to close | Die Bank {schließt} um vier. | The bank closes at four.
V | beginnen | beginnt, begann, hat begonnen | mit + D | to begin | Der Film {beginnt} um acht. | The film starts at eight.
V | stehen | steht, stand, hat gestanden | | to stand | Die Flasche {steht} auf dem Tisch. | The bottle is on the table.
V | liegen | liegt, lag, hat gelegen | | to lie | Das Buch {liegt} auf dem Sofa. | The book is on the sofa.
V | gefallen | gefällt, gefiel, hat gefallen | + D | to please (like) | Die Stadt {gefällt} mir. | I like the city.
V | gehören | gehört, gehörte, hat gehört | + D | to belong to | Wem {gehört} die Tasche? | Whose bag is this?
V | denken | denkt, dachte, hat gedacht | | to think | Was {denkst} du? | What do you think?
V | lachen | lacht, lachte, hat gelacht | | to laugh | Die Kinder {lachen} viel. | The children laugh a lot.
V | vergessen | vergisst, vergaß, hat vergessen | | to forget | Ich {vergesse} oft meinen Schlüssel. | I often forget my key.
`,
  ],
  [
    'beziehungen',
    `
# A1
N | die Familie | Familien | | family | Meine {Familie} wohnt in Italien. | My family lives in Italy.
N | die Eltern | – | | parents | Meine {Eltern} sind Rentner. | My parents are retired.
N | die Mutter | Mütter | | mother | Meine {Mutter} heißt Anna. | My mother is called Anna.
N | der Vater | Väter | | father | Mein {Vater} arbeitet bei der Post. | My father works for the post office.
N | das Kind | Kinder | | child | Wir haben zwei {Kinder}. | We have two children.
N | der Sohn | Söhne | | son | Mein {Sohn} geht in die Schule. | My son goes to school.
N | die Tochter | Töchter | | daughter | Meine {Tochter} ist drei. | My daughter is three.
N | der Bruder | Brüder | | brother | Ich habe einen {Bruder}. | I have a brother.
N | die Schwester | Schwestern | | sister | Meine {Schwester} wohnt in Wien. | My sister lives in Vienna.
N | die Geschwister | – | | brothers and sisters | Hast du {Geschwister}? | Do you have any brothers or sisters?
N | die Großeltern | – | | grandparents | Am Sonntag besuchen wir die {Großeltern}. | We visit our grandparents on Sunday.
N | die Oma | Omas | | grandma | Meine {Oma} kocht sehr gut. | My grandma cooks very well.
N | der Opa | Opas | | grandpa | Mein {Opa} ist achtzig. | My grandpa is eighty.
N | der Mann | Männer | | man, husband | Das ist mein {Mann}. | This is my husband.
N | die Frau | Frauen | | woman, wife; Mrs | Meine {Frau} ist Ärztin. | My wife is a doctor.
N | der Junge | Jungen | | boy | Der {Junge} spielt Fußball. | The boy is playing football.
N | das Mädchen | Mädchen | | girl | Das {Mädchen} heißt Lea. | The girl is called Lea.
N | das Baby | Babys | | baby | Das {Baby} schläft. | The baby is asleep.
N | der Freund | Freunde | | friend, boyfriend | Das ist mein {Freund} Tom. | This is my friend Tom.
N | die Freundin | Freundinnen | | friend, girlfriend | Ich treffe heute eine {Freundin}. | I'm meeting a friend today.
N | der Mensch | Menschen | | person, human being | In der Stadt leben viele {Menschen}. | Lots of people live in the city.
N | die Leute | – | | people | Die {Leute} hier sind sehr nett. | The people here are very nice.
N | der Herr | Herren | | Mr, gentleman | Guten Tag, {Herr} Schmidt! | Hello, Mr Schmidt!
N | der Name | Namen | | name | Wie ist Ihr {Name}? | What's your name?
N | der Vorname | Vornamen | | first name | Mein {Vorname} ist Maria. | My first name is Maria.
N | der Familienname | Familiennamen | | surname | Wie schreibt man Ihren {Familiennamen}? | How do you spell your surname?
N | der Geburtstag | Geburtstage | | birthday | Wann hast du {Geburtstag}? | When is your birthday?
N | das Geschenk | Geschenke | | present | Das {Geschenk} ist für dich. | The present is for you.
N | die Party | Partys | | party | Kommst du zu meiner {Party}? | Are you coming to my party?
N | der Gast | Gäste | | guest | Wir haben heute {Gäste}. | We have guests today.
ADJ | ledig | – | | single | Ich bin {ledig}. | I'm single.
ADJ | verheiratet | – | | married | Sind Sie {verheiratet}? | Are you married?
ADJ | geschieden | – | | divorced | Meine Eltern sind {geschieden}. | My parents are divorced.
ADJ | nett | netter, am nettesten | | nice, kind | Deine Kollegin ist sehr {nett}. | Your colleague is very nice.
ADJ | freundlich | freundlicher, am freundlichsten | | friendly | Die Verkäuferin ist {freundlich}. | The shop assistant is friendly.
ADJ | glücklich | glücklicher, am glücklichsten | | happy | Sie ist sehr {glücklich}. | She's very happy.
ADJ | traurig | trauriger, am traurigsten | | sad | Warum bist du {traurig}? | Why are you sad?
V | heißen | heißt, hieß, hat geheißen | | to be called | Ich {heiße} Ali. | My name is Ali.
V | leben | lebt, lebte, hat gelebt | | to live | Meine Eltern {leben} in der Türkei. | My parents live in Turkey.
V | lieben | liebt, liebte, hat geliebt | | to love | Ich {liebe} dich. | I love you.
V | besuchen | besucht, besuchte, hat besucht | | to visit | Ich {besuche} am Wochenende meine Eltern. | I'm visiting my parents at the weekend.
V | treffen | trifft, traf, hat getroffen | | to meet | Wir {treffen} uns um acht. | We're meeting at eight.
V | einladen | lädt ein, lud ein, hat eingeladen | | to invite | Ich {lade} dich zum Essen {ein}. | I'm inviting you for a meal.
V | feiern | feiert, feierte, hat gefeiert | | to celebrate | Wir {feiern} meinen Geburtstag. | We're celebrating my birthday.
V | heiraten | heiratet, heiratete, hat geheiratet | | to marry | Sie {heiraten} im Sommer. | They're getting married in the summer.
V | kennenlernen | lernt kennen, lernte kennen, hat kennengelernt | | to get to know, meet | Ich möchte dich gern {kennenlernen}. | I'd like to get to know you.
V | vorstellen | stellt vor, stellte vor, hat vorgestellt | | to introduce | Darf ich {vorstellen}? Das ist Herr Braun. | May I introduce Mr Braun?
`,
  ],
  [
    'redemittel',
    `
# A1
P | Hallo! | – | | Hello! / Hi! | {Hallo}, wie geht's? | Hi, how are you?
P | Guten Morgen! | – | | Good morning! | {Guten Morgen}, Frau Weber! | Good morning, Mrs Weber!
P | Guten Abend! | – | | Good evening! | {Guten Abend}, meine Damen und Herren! | Good evening, ladies and gentlemen!
P | Gute Nacht! | – | | Good night! | {Gute Nacht} und schlaf gut! | Good night and sleep well!
P | Tschüss! | – | | Bye! | {Tschüss}, bis morgen! | Bye, see you tomorrow!
P | Auf Wiedersehen! | – | | Goodbye! | Vielen Dank und {auf Wiedersehen}! | Thank you very much and goodbye!
P | Wie geht's? | – | | How are you? | Hallo Paul, {wie geht's}? | Hi Paul, how are you?
P | Wie geht es Ihnen? | – | | How are you? (formal) | Guten Tag, Herr Meyer, {wie geht es Ihnen}? | Hello, Mr Meyer, how are you?
P | Danke! | – | | Thank you! | {Danke}, das ist sehr nett. | Thanks, that's very kind.
P | Bitte! | – | | Please! / You're welcome! | „Danke!" – „{Bitte}!" | "Thank you!" – "You're welcome!"
P | Entschuldigung! | – | | Excuse me! / Sorry! | {Entschuldigung}, wo ist der Bahnhof? | Excuse me, where is the station?
P | Es tut mir leid. | – | | I'm sorry. | {Es tut mir leid}, ich habe keine Zeit. | I'm sorry, I don't have time.
P | Kein Problem. | – | | No problem. | „Ich komme etwas später." – „{Kein Problem}." | "I'll be a bit late." – "No problem."
P | Wie bitte? | – | | Pardon? | {Wie bitte}? Können Sie das wiederholen? | Pardon? Can you repeat that?
P | Ich verstehe das nicht. | – | | I don't understand. | Entschuldigung, {ich verstehe das nicht}. | Sorry, I don't understand.
P | Herzlich willkommen! | – | | Welcome! | {Herzlich willkommen} in Hamburg! | Welcome to Hamburg!
P | Herzlichen Glückwunsch! | – | | Congratulations! / Happy birthday! | {Herzlichen Glückwunsch} zum Geburtstag! | Happy birthday!
P | Viel Spaß! | – | | Have fun! | {Viel Spaß} im Urlaub! | Have fun on holiday!
P | Gute Besserung! | – | | Get well soon! | Du bist krank? {Gute Besserung}! | You're ill? Get well soon!
P | Bis später! | – | | See you later! | Ich muss los. {Bis später}! | I have to go. See you later!
P | Ich hätte gern … | – | | I'd like … | {Ich hätte gern} zwei Brötchen. | I'd like two bread rolls.
P | Wie spät ist es? | – | | What time is it? | Entschuldigung, {wie spät ist es}? | Excuse me, what time is it?
P | Wie viel Uhr ist es? | – | | What time is it? | {Wie viel Uhr ist es}? – Halb drei. | What time is it? – Half past two.
P | Das macht … | – | | That comes to … | {Das macht} zwölf Euro, bitte. | That's twelve euros, please.
P | Alles Gute! | – | | All the best! | {Alles Gute} für die Prüfung! | Good luck with the exam!
`,
  ],
  [
    'behoerden',
    `
# A1
N | das Formular | Formulare | | form | Bitte füllen Sie das {Formular} aus. | Please fill in the form.
N | die Adresse | Adressen | | address | Wie ist Ihre {Adresse}? | What's your address?
N | die Hausnummer | Hausnummern | | house number | Die {Hausnummer} ist 12. | The house number is 12.
N | die Postleitzahl | Postleitzahlen | | postcode | Die {Postleitzahl} von Bonn ist 53111. | Bonn's postcode is 53111.
N | der Wohnort | Wohnorte | | place of residence | Bitte schreiben Sie hier Ihren {Wohnort}. | Please write where you live here.
N | das Geburtsdatum | Geburtsdaten | | date of birth | Ihr {Geburtsdatum}, bitte. | Your date of birth, please.
N | der Geburtsort | Geburtsorte | | place of birth | Mein {Geburtsort} ist Lissabon. | I was born in Lisbon.
N | die Staatsangehörigkeit | Staatsangehörigkeiten | | nationality | Welche {Staatsangehörigkeit} haben Sie? | What's your nationality?
N | der Familienstand | – | | marital status | {Familienstand}: verheiratet. | Marital status: married.
N | die Unterschrift | Unterschriften | | signature | Hier fehlt noch Ihre {Unterschrift}. | Your signature is still missing here.
N | die Telefonnummer | Telefonnummern | | phone number | Haben Sie eine {Telefonnummer}? | Do you have a phone number?
N | die E-Mail | E-Mails | | email | Ich schreibe dir eine {E-Mail}. | I'll write you an email.
N | der Pass | Pässe | | passport | Ihren {Pass}, bitte. | Your passport, please.
N | der Ausweis | Ausweise | | ID card | Haben Sie Ihren {Ausweis} dabei? | Do you have your ID with you?
N | das Amt | Ämter | | (public) office | Ich muss heute zum {Amt}. | I have to go to the council office today.
N | die Post | – | | post office; post | Ich bringe den Brief zur {Post}. | I'm taking the letter to the post office.
N | der Brief | Briefe | | letter | Ich schreibe einen {Brief}. | I'm writing a letter.
N | die Briefmarke | Briefmarken | | stamp | Eine {Briefmarke} kostet 95 Cent. | A stamp costs 95 cents.
N | das Paket | Pakete | | parcel | Das {Paket} ist für Sie. | The parcel is for you.
V | ausfüllen | füllt aus, füllte aus, hat ausgefüllt | | to fill in | Bitte {füllen} Sie das Formular {aus}. | Please fill in the form.
V | unterschreiben | unterschreibt, unterschrieb, hat unterschrieben | | to sign | Bitte {unterschreiben} Sie hier. | Please sign here.
V | buchstabieren | buchstabiert, buchstabierte, hat buchstabiert | | to spell | Können Sie das bitte {buchstabieren}? | Can you spell that, please?
V | schicken | schickt, schickte, hat geschickt | | to send | Ich {schicke} dir ein Foto. | I'll send you a photo.
`,
  ],
  [
    'alltag',
    `
# A1
N | die Uhr | Uhren | | clock, watch; o'clock | Es ist drei {Uhr}. | It's three o'clock.
N | die Zeit | Zeiten | | time | Hast du heute {Zeit}? | Do you have time today?
N | die Stunde | Stunden | | hour; lesson | Der Kurs dauert zwei {Stunden}. | The course lasts two hours.
N | die Minute | Minuten | | minute | Warte bitte fünf {Minuten}. | Please wait five minutes.
N | der Morgen | Morgen | | morning | Am {Morgen} trinke ich Kaffee. | In the morning I drink coffee.
N | der Vormittag | Vormittage | | morning (before noon) | Am {Vormittag} bin ich im Büro. | I'm at the office in the morning.
N | der Mittag | Mittage | | midday | Zu {Mittag} esse ich in der Kantine. | I have lunch in the canteen.
N | der Nachmittag | Nachmittage | | afternoon | Am {Nachmittag} gehe ich spazieren. | I go for a walk in the afternoon.
N | der Abend | Abende | | evening | Am {Abend} sehe ich fern. | I watch TV in the evening.
N | die Nacht | Nächte | | night | In der {Nacht} schlafe ich. | I sleep at night.
ADV | morgens | – | | in the mornings | {Morgens} trinke ich Tee. | I drink tea in the mornings.
ADV | abends | – | | in the evenings | {Abends} lese ich ein Buch. | I read a book in the evenings.
ADV | halb | – | | half (time) | Es ist {halb} acht. | It's half past seven.
N | das Viertel | Viertel | | quarter (time) | Es ist {Viertel} nach drei. | It's quarter past three.
V | aufstehen | steht auf, stand auf, ist aufgestanden | | to get up | Ich {stehe} um sieben Uhr {auf}. | I get up at seven.
V | schlafen | schläft, schlief, hat geschlafen | | to sleep | Ich {schlafe} acht Stunden. | I sleep for eight hours.
V | frühstücken | frühstückt, frühstückte, hat gefrühstückt | | to have breakfast | Wir {frühstücken} um acht. | We have breakfast at eight.
V | duschen | duscht, duschte, hat geduscht | | to shower | Ich {dusche} am Morgen. | I shower in the morning.
V | sich waschen | wäscht sich, wusch sich, hat sich gewaschen | | to wash (oneself) | Das Kind {wäscht sich} die Hände. | The child is washing their hands.
V | anziehen | zieht an, zog an, hat angezogen | | to put on (clothes) | Ich {ziehe} eine Jacke {an}. | I'm putting on a jacket.
V | arbeiten | arbeitet, arbeitete, hat gearbeitet | | to work | Ich {arbeite} in einem Büro. | I work in an office.
V | anfangen | fängt an, fing an, hat angefangen | mit + D | to start | Die Schule {fängt} um acht {an}. | School starts at eight.
V | aufhören | hört auf, hörte auf, hat aufgehört | mit + D | to stop | Der Unterricht {hört} um zwölf {auf}. | The lesson ends at twelve.
V | dauern | dauert, dauerte, hat gedauert | | to last, take (time) | Wie lange {dauert} die Fahrt? | How long does the journey take?
V | putzen | putzt, putzte, hat geputzt | | to clean | Am Samstag {putze} ich die Wohnung. | I clean the flat on Saturday.
V | waschen | wäscht, wusch, hat gewaschen | | to wash | Ich {wasche} heute die Wäsche. | I'm doing the washing today.
V | fernsehen | sieht fern, sah fern, hat ferngesehen | | to watch TV | Am Abend {sehen} wir {fern}. | We watch TV in the evening.
V | telefonieren | telefoniert, telefonierte, hat telefoniert | | to phone | Ich {telefoniere} mit meiner Mutter. | I'm on the phone to my mother.
V | anrufen | ruft an, rief an, hat angerufen | | to call (phone) | Ich {rufe} dich morgen {an}. | I'll call you tomorrow.
V | abholen | holt ab, holte ab, hat abgeholt | | to pick up | Ich {hole} dich vom Bahnhof {ab}. | I'll pick you up from the station.
V | mitkommen | kommt mit, kam mit, ist mitgekommen | | to come along | {Kommst} du {mit}? | Are you coming along?
V | zurückkommen | kommt zurück, kam zurück, ist zurückgekommen | | to come back | Wann {kommst} du {zurück}? | When are you coming back?
N | das Handy | Handys | | mobile phone | Mein {Handy} ist leer. | My phone battery is flat.
N | der Schlüssel | Schlüssel | | key | Wo ist mein {Schlüssel}? | Where's my key?
N | die Tasche | Taschen | | bag | Die {Tasche} ist sehr schwer. | The bag is very heavy.
N | das Foto | Fotos | | photo | Das {Foto} ist sehr schön. | The photo is very nice.
N | die Sache | Sachen | | thing | Hast du alle {Sachen}? | Have you got all your things?
`,
  ],
]
