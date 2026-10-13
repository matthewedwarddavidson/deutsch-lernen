import type { ListeningText } from '../types'

/** B2 and C1 scripts where the task is to follow arguments and stance. */
export const SCRIPTS_ADVANCED: ListeningText[] = [
  {
    id: 'vortrag-vergessen-c1',
    title: 'Vortrag: Warum wir vergessen – und warum das gut ist',
    level: 'C1',
    theme: 'bildung',
    genre: 'report',
    voices: { 'Dr. Brandt': 'lena' },
    situation:
      'A public lecture by a memory researcher. Listen for how she structures the argument and which claims she rejects.',
    lines: [
      {
        speaker: 'Dr. Brandt',
        text: 'Meine Damen und Herren, wer von Ihnen hat heute schon etwas vergessen? Den Schlüssel, einen Namen, den Grund, warum Sie in die Küche gegangen sind? Sie sind in guter Gesellschaft. Vergessen gilt gemeinhin als Makel, als Versagen des Gedächtnisses. Ich möchte Ihnen heute eine andere Sichtweise nahelegen: Vergessen ist keine Panne, sondern eine Leistung.',
      },
      {
        speaker: 'Dr. Brandt',
        text: 'Beginnen wir mit einem Klassiker. Ende des neunzehnten Jahrhunderts lernte der Psychologe Hermann Ebbinghaus sinnlose Silben auswendig und prüfte, wie viel er nach Stunden, Tagen und Wochen noch wusste. Das Ergebnis ist als Vergessenskurve bekannt: Der größte Teil geht in den ersten Stunden verloren, danach verlangsamt sich der Verlust. Weniger bekannt ist der zweite Befund: Jede Wiederholung flacht die Kurve ab. Wer in wachsenden Abständen wiederholt, behält am meisten – ein Prinzip, auf dem heute praktisch jede Lernsoftware beruht.',
      },
      {
        speaker: 'Dr. Brandt',
        text: 'Nun könnte man meinen, ein perfektes Gedächtnis wäre erstrebenswert. Die wenigen Menschen, die tatsächlich kaum etwas vergessen, berichten jedoch häufig das Gegenteil. Sie fühlen sich von Erinnerungen überflutet und tun sich schwer, das Wesentliche vom Unwesentlichen zu trennen. Denn wer sich an jedes Detail erinnert, dem fällt es schwer zu verallgemeinern. Abstraktes Denken setzt voraus, dass wir Einzelheiten weglassen.',
      },
      {
        speaker: 'Dr. Brandt',
        text: 'Hinzu kommt: Unser Gehirn vergisst nicht wahllos. Was wir oft abrufen, was emotional bedeutsam ist oder mit Vorwissen verknüpft werden kann, bleibt. Was wir nie wieder brauchen, verblasst. Das Gedächtnis funktioniert also weniger wie ein Archiv, das alles aufbewahrt, sondern eher wie ein Gärtner, der beschneidet, damit Wichtiges wachsen kann.',
      },
      {
        speaker: 'Dr. Brandt',
        text: 'Was folgt daraus für das Lernen? Erstens: Ärgern Sie sich nicht, wenn Sie Vokabeln vergessen. Das Vergessen ist der Moment, in dem Wiederholung am wirksamsten ist. Zweitens: Lesen Sie Ihre Notizen nicht einfach noch einmal durch, sondern versuchen Sie, sich aktiv zu erinnern. Das ist mühsamer, aber genau diese Mühe festigt die Erinnerung. Und drittens: Schlafen Sie. Im Schlaf sortiert das Gehirn aus, was bleiben darf. Wer die Nacht vor der Prüfung durchlernt, sabotiert also genau den Prozess, auf den er angewiesen ist.',
      },
    ],
    questions: [
      {
        kind: 'choice',
        question: 'Welche These stellt Dr. Brandt am Anfang auf?',
        options: [
          'Vergessen ist ein Zeichen für ein schwaches Gedächtnis.',
          'Vergessen ist eine nützliche Leistung des Gehirns.',
          'Mit Training kann man das Vergessen ganz verhindern.',
        ],
        answer: 1,
      },
      {
        kind: 'choice',
        question: 'Was ist laut Vortrag der „zweite Befund" von Ebbinghaus?',
        options: [
          'Sinnlose Silben vergisst man schneller als Wörter.',
          'Wiederholungen in wachsenden Abständen verlangsamen das Vergessen.',
          'Nach einer Woche ist fast alles vergessen.',
        ],
        answer: 1,
      },
      {
        kind: 'truefalse',
        statement: 'Menschen mit fast perfektem Gedächtnis empfinden das meist als Vorteil.',
        answer: false,
        explanation: 'Sie fühlen sich oft von Erinnerungen überflutet.',
      },
      {
        kind: 'choice',
        question: 'Mit welchem Bild beschreibt die Rednerin das Gedächtnis?',
        options: ['Mit einem Archiv', 'Mit einem Gärtner', 'Mit einer Festplatte'],
        answer: 1,
      },
      {
        kind: 'truefalse',
        statement: 'Dr. Brandt empfiehlt, Notizen mehrmals durchzulesen.',
        answer: false,
        explanation: 'Sie empfiehlt aktives Erinnern statt erneuten Durchlesens.',
      },
      {
        kind: 'open',
        question: 'Warum sabotiert laut Vortrag, wer die Nacht vor der Prüfung durchlernt, sein eigenes Lernen?',
        model:
          'Weil das Gehirn im Schlaf entscheidet, was gespeichert wird. Ohne Schlaf fehlt dieser Sortierprozess, und das Gelernte wird schlechter behalten.',
      },
    ],
  },
  {
    id: 'streitgespraech-grundeinkommen-c1',
    title: 'Streitgespräch: Bedingungsloses Grundeinkommen',
    level: 'C1',
    theme: 'gesellschaft',
    genre: 'interview',
    voices: { Moderator: 'jonas', 'Frau Lindner': 'katrin', 'Herr Albers': 'markus' },
    situation:
      'A radio debate between an economist who supports a basic income and a trade union representative who opposes it. Note who says what, and where they agree.',
    lines: [
      {
        speaker: 'Moderator',
        text: 'Tausend Euro im Monat für alle, ohne Bedingungen, ohne Antrag. Was nach Utopie klingt, wird in mehreren Ländern getestet. Bei mir sind die Ökonomin Dr. Sabine Lindner und Thomas Albers vom Gewerkschaftsbund. Frau Lindner, warum sollte der Staat Menschen Geld geben, ohne eine Gegenleistung zu verlangen?',
      },
      {
        speaker: 'Frau Lindner',
        text: 'Weil unser jetziges System enorme Kosten verursacht, die man nicht auf den ersten Blick sieht. Wer Sozialleistungen beantragt, muss sich durch Formulare kämpfen, Nachweise erbringen und wird kontrolliert. Viele, die Anspruch hätten, verzichten aus Scham ganz darauf. Ein Grundeinkommen würde diese Bürokratie weitgehend überflüssig machen und den Menschen Sicherheit geben, gerade in einer Arbeitswelt, die sich durch die Automatisierung rasant verändert.',
      },
      {
        speaker: 'Moderator',
        text: 'Herr Albers, Sie sind skeptisch.',
      },
      {
        speaker: 'Herr Albers',
        text: 'Skeptisch ist noch milde ausgedrückt. Zunächst einmal: Bei der Diagnose bin ich mit Frau Lindner durchaus einer Meinung. Das System ist zu kompliziert und oft demütigend. Aber die Therapie halte ich für falsch. Tausend Euro für alle – das heißt auch tausend Euro für den Zahnarzt mit eigener Praxis, der das Geld nicht braucht. Diese Milliarden fehlen dann dort, wo sie dringend gebraucht würden: bei Pflege, Bildung, bezahlbarem Wohnraum.',
      },
      {
        speaker: 'Frau Lindner',
        text: 'Das ist ein Missverständnis. In den meisten Modellen würde das Grundeinkommen über Steuern finanziert. Der Zahnarzt bekommt die tausend Euro zwar ausgezahlt, zahlt aber deutlich mehr Steuern als bisher. Unterm Strich profitieren vor allem Menschen mit niedrigem Einkommen.',
      },
      {
        speaker: 'Herr Albers',
        text: 'Mag sein. Mich beunruhigt aber noch etwas anderes. Wenn jeder ein Grundeinkommen hat, geraten die Löhne unter Druck. Arbeitgeber könnten argumentieren: Die Leute haben ja schon tausend Euro, also reichen auch niedrigere Gehälter. Das Grundeinkommen würde dann nicht die Beschäftigten stärken, sondern schlecht bezahlte Jobs subventionieren.',
      },
      {
        speaker: 'Frau Lindner',
        text: 'Ich sehe es genau umgekehrt. Wer nicht mehr existenziell auf jeden Job angewiesen ist, kann eher Nein sagen. Das stärkt die Verhandlungsposition gerade in Branchen mit miserablen Arbeitsbedingungen. Und die bisherigen Versuche zeigen übrigens nicht, dass Menschen massenhaft aufhören zu arbeiten.',
      },
      {
        speaker: 'Herr Albers',
        text: 'Die Versuche laufen ein paar Jahre, mit ein paar Tausend Teilnehmern, die wissen, dass es irgendwann vorbei ist. Daraus auf eine ganze Volkswirtschaft zu schließen, halte ich für gewagt.',
      },
      {
        speaker: 'Moderator',
        text: 'Eine Frage zum Schluss an Sie beide: Gibt es etwas, worauf Sie sich einigen könnten?',
      },
      {
        speaker: 'Herr Albers',
        text: 'Auf eine einfachere Grundsicherung ohne Schikanen – sofort.',
      },
      {
        speaker: 'Frau Lindner',
        text: 'Das wäre zumindest ein Anfang.',
      },
    ],
    questions: [
      {
        kind: 'choice',
        question: 'Welches Problem des jetzigen Systems nennt Frau Lindner?',
        options: [
          'Die Leistungen sind zu hoch.',
          'Viele Berechtigte beantragen aus Scham keine Leistungen.',
          'Es gibt zu wenige Kontrollen.',
        ],
        answer: 1,
      },
      {
        kind: 'truefalse',
        statement: 'Herr Albers findet das jetzige Sozialsystem gut, so wie es ist.',
        answer: false,
        explanation: 'Er teilt die Diagnose: zu kompliziert und oft demütigend.',
      },
      {
        kind: 'choice',
        question: 'Wie antwortet Frau Lindner auf das Beispiel mit dem Zahnarzt?',
        options: [
          'Wohlhabende würden über höhere Steuern mehr zurückzahlen.',
          'Zahnärzte wären vom Grundeinkommen ausgeschlossen.',
          'Das Geld würde aus Krediten finanziert.',
        ],
        answer: 0,
      },
      {
        kind: 'choice',
        question: 'Welche Gefahr sieht Herr Albers für die Löhne?',
        options: [
          'Löhne könnten sinken, weil Arbeitgeber auf das Grundeinkommen verweisen.',
          'Löhne würden zu stark steigen.',
          'Gewerkschaften würden überflüssig.',
        ],
        answer: 0,
      },
      {
        kind: 'truefalse',
        statement: 'Herr Albers hält die bisherigen Versuche für wenig aussagekräftig.',
        answer: true,
        explanation:
          'Sie seien zu kurz, zu klein und zeitlich begrenzt, um auf eine ganze Volkswirtschaft zu schließen.',
      },
      {
        kind: 'open',
        question: 'Worin sind sich beide am Ende einig?',
        model:
          'Beide wollen eine einfachere Grundsicherung ohne demütigende Kontrollen. Für Herrn Albers ist das die Lösung, für Frau Lindner nur ein erster Schritt.',
      },
    ],
  },
  {
    id: 'interview-mehrgenerationenhaus-b2',
    title: 'Interview: Wohnen mit Jung und Alt',
    level: 'B2',
    theme: 'beziehungen',
    genre: 'interview',
    voices: { Moderatorin: 'katrin', 'Herr Wolff': 'jonas' },
    situation:
      'A radio interview with a retired teacher who lives in a multi-generation house. Listen for his reasons, the problems, and his advice.',
    lines: [
      {
        speaker: 'Moderatorin',
        text: 'Herr Wolff, Sie sind 74 und leben seit drei Jahren in einem Mehrgenerationenhaus in Kassel. Wie kam es dazu?',
      },
      {
        speaker: 'Herr Wolff',
        text: 'Nach dem Tod meiner Frau war mir das Haus einfach zu groß, und ehrlich gesagt auch zu still. Meine Kinder wohnen in Hamburg und München, die sehe ich zwei-, dreimal im Jahr. Ins Altenheim wollte ich auf keinen Fall. Dann hat mir eine Bekannte von diesem Projekt erzählt, und ich habe mich gleich beworben.',
      },
      {
        speaker: 'Moderatorin',
        text: 'Wie muss man sich das Zusammenleben vorstellen?',
      },
      {
        speaker: 'Herr Wolff',
        text: 'Jeder hat seine eigene Wohnung mit Küche und Bad, das ist wichtig. Aber es gibt einen großen Gemeinschaftsraum und einen Garten, die wir alle nutzen. Im Haus wohnen sechzehn Parteien: junge Familien, Studierende, Alleinerziehende und eben ein paar Ältere wie ich. Einmal im Monat gibt es eine Hausversammlung, da wird alles besprochen, vom Putzplan bis zum Sommerfest.',
      },
      {
        speaker: 'Moderatorin',
        text: 'Und wie sieht das Geben und Nehmen konkret aus?',
      },
      {
        speaker: 'Herr Wolff',
        text: 'Ich war vierzig Jahre Lehrer, also mache ich mit den Schulkindern Hausaufgaben. Dafür bringt mir die Familie von nebenan die schweren Einkäufe mit, und als ich im Winter die Grippe hatte, hat mir eine Studentin jeden Tag Suppe vorbeigebracht. So etwas lässt sich nicht bezahlen.',
      },
      {
        speaker: 'Moderatorin',
        text: 'Das klingt fast zu schön. Gibt es auch Konflikte?',
      },
      {
        speaker: 'Herr Wolff',
        text: 'Natürlich. Kinder sind laut, und nicht jeder hat die gleiche Vorstellung von Sauberkeit. Am Anfang habe ich mich oft über den Lärm im Treppenhaus geärgert. Inzwischen habe ich gelernt, das gelassener zu sehen. Schwieriger finde ich, dass manche sich sehr engagieren und andere kaum. Das sorgt manchmal für Spannungen.',
      },
      {
        speaker: 'Moderatorin',
        text: 'Was würden Sie Menschen raten, die sich für so eine Wohnform interessieren?',
      },
      {
        speaker: 'Herr Wolff',
        text: 'Erstens: Probewohnen, wenn es möglich ist. Zweitens: Man muss Kompromisse machen können. Wer seine Ruhe will und keine Lust auf Versammlungen hat, ist dort falsch. Aber wer offen ist, bekommt sehr viel zurück. Ich habe mich jedenfalls seit Jahren nicht mehr so wenig allein gefühlt.',
      },
    ],
    questions: [
      {
        kind: 'choice',
        question: 'Warum ist Herr Wolff in das Mehrgenerationenhaus gezogen?',
        options: [
          'Seine Kinder wollten, dass er umzieht.',
          'Sein Haus war zu groß und zu ruhig, und ins Altenheim wollte er nicht.',
          'Er konnte sich sein Haus finanziell nicht mehr leisten.',
        ],
        answer: 1,
      },
      {
        kind: 'truefalse',
        statement: 'Die Bewohner teilen sich Küche und Bad.',
        answer: false,
        explanation: 'Jeder hat eine eigene Wohnung mit Küche und Bad; geteilt werden Gemeinschaftsraum und Garten.',
      },
      {
        kind: 'choice',
        question: 'Was macht Herr Wolff für die anderen Bewohner?',
        options: [
          'Er kauft für die Familien ein.',
          'Er hilft Kindern bei den Hausaufgaben.',
          'Er organisiert das Sommerfest.',
        ],
        answer: 1,
      },
      {
        kind: 'choice',
        question: 'Was findet Herr Wolff inzwischen am schwierigsten?',
        options: [
          'Den Lärm im Treppenhaus',
          'Dass sich nicht alle gleich stark engagieren',
          'Die monatlichen Hausversammlungen',
        ],
        answer: 1,
      },
      {
        kind: 'open',
        question: 'Für wen ist ein Mehrgenerationenhaus laut Herrn Wolff nicht geeignet?',
        model:
          'Für Menschen, die vor allem ihre Ruhe wollen, keine Kompromisse machen möchten und keine Lust auf Versammlungen haben.',
      },
    ],
  },
  {
    id: 'reportage-lebensmittelretter-b2',
    title: 'Reportage: Die Lebensmittelretter',
    level: 'B2',
    theme: 'umwelt',
    genre: 'report',
    voices: { Reporter: 'jonas', Marie: 'lena', Filialleiter: 'markus' },
    situation:
      'A radio report on volunteers who collect food that supermarkets would throw away. Listen for numbers, the rules, and the different views.',
    lines: [
      {
        speaker: 'Reporter',
        text: 'Es ist kurz vor zehn Uhr abends auf dem Hof eines Supermarkts in Freiburg. Marie, 29, öffnet ihren Rucksack und zwei große Taschen. Gleich bekommt sie, was der Markt heute nicht mehr verkaufen kann: Brot vom Vormittag, Joghurt kurz vor dem Mindesthaltbarkeitsdatum, Paprika mit kleinen Flecken.',
      },
      {
        speaker: 'Marie',
        text: 'Heute ist es relativ wenig, vielleicht fünfzehn Kilo. Manchmal sind es vierzig. Ich nehme mit, was ich tragen kann, und stelle den Rest morgen früh in einen sogenannten Fairteiler, das ist ein öffentlicher Kühlschrank im Stadtteilzentrum. Da kann sich jeder kostenlos etwas holen.',
      },
      {
        speaker: 'Reporter',
        text: 'Marie ist eine von rund hunderttausend Freiwilligen, die sich in Deutschland über eine Online-Plattform organisieren. Sie holen bei Bäckereien, Restaurants und Supermärkten Lebensmittel ab, die sonst im Müll landen würden. Nach Schätzungen werden in Deutschland jedes Jahr etwa elf Millionen Tonnen Lebensmittel weggeworfen, mehr als die Hälfte davon in privaten Haushalten.',
      },
      {
        speaker: 'Marie',
        text: 'Viele denken, wir machen das, weil wir uns kein Essen leisten können. Das stimmt meistens nicht. Es geht uns ums Prinzip. Es ist absurd, dass gute Lebensmittel weggeworfen werden, nur weil ein Datum auf der Packung steht.',
      },
      {
        speaker: 'Reporter',
        text: 'Für die Abholung gelten feste Regeln: Die Freiwilligen müssen pünktlich sein, alles mitnehmen, was angeboten wird, und dürfen die Lebensmittel nicht verkaufen. Wer dreimal unentschuldigt fehlt, wird gesperrt. Der Filialleiter sieht die Zusammenarbeit positiv, wenn auch nicht ohne Einschränkungen.',
      },
      {
        speaker: 'Filialleiter',
        text: 'Für uns spart das Entsorgungskosten, und meine Mitarbeiter finden es gut, dass nichts im Container landet. Aber man muss ehrlich sein: Die Verantwortung bleibt bei uns. Fleisch und Fisch geben wir grundsätzlich nicht ab, das Risiko ist uns zu hoch. Und am wichtigsten ist doch, dass wir gar nicht erst so viel zu viel bestellen.',
      },
      {
        speaker: 'Reporter',
        text: 'Genau hier setzt die Kritik an. Umweltverbände fordern, dass große Supermärkte nicht verkaufte Lebensmittel spenden müssen, wie es in Frankreich schon seit Jahren Pflicht ist. Marie hätte nichts dagegen, überflüssig zu werden.',
      },
      {
        speaker: 'Marie',
        text: 'Wenn eines Tages nichts mehr übrig bleibt, höre ich gern auf. Aber bis dahin komme ich jeden Dienstag hierher.',
      },
    ],
    questions: [
      {
        kind: 'choice',
        question: 'Was passiert mit den Lebensmitteln, die Marie nicht selbst braucht?',
        options: [
          'Sie verkauft sie auf dem Markt.',
          'Sie bringt sie in einen öffentlichen Kühlschrank.',
          'Sie gibt sie dem Supermarkt zurück.',
        ],
        answer: 1,
      },
      {
        kind: 'truefalse',
        statement: 'Laut Bericht wird der größte Teil der Lebensmittel in Supermärkten weggeworfen.',
        answer: false,
        explanation: 'Mehr als die Hälfte wird in privaten Haushalten weggeworfen.',
      },
      {
        kind: 'choice',
        question: 'Warum macht Marie bei der Lebensmittelrettung mit?',
        options: ['Weil sie wenig Geld hat', 'Aus Prinzip, gegen Verschwendung', 'Weil sie dafür bezahlt wird'],
        answer: 1,
      },
      {
        kind: 'truefalse',
        statement: 'Wer dreimal ohne Entschuldigung nicht kommt, darf nicht mehr mitmachen.',
        answer: true,
        explanation: 'Wer dreimal unentschuldigt fehlt, wird gesperrt.',
      },
      {
        kind: 'choice',
        question: 'Was ist für den Filialleiter das Wichtigste?',
        options: [
          'Dass Fleisch und Fisch gespendet werden',
          'Dass gar nicht erst zu viel bestellt wird',
          'Dass die Freiwilligen alles mitnehmen',
        ],
        answer: 1,
      },
      {
        kind: 'open',
        question: 'Was fordern Umweltverbände, und welches Land dient als Beispiel?',
        model:
          'Sie fordern, dass große Supermärkte nicht verkaufte Lebensmittel spenden müssen. In Frankreich ist das schon seit Jahren Pflicht.',
      },
    ],
  },
]
