import type { ListeningText } from '../types'

/** C1 scripts: a lecture and a debate, where the task is to follow arguments and stance. */
export const SCRIPTS_C1: ListeningText[] = [
  {
    id: 'vortrag-vergessen-c1',
    title: 'Vortrag: Warum wir vergessen – und warum das gut ist',
    level: 'C1',
    theme: 'bildung',
    genre: 'report',
    voices: { 'Dr. Brandt': 'kerstin' },
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
    voices: { Moderator: 'thorsten', 'Frau Lindner': 'kerstin', 'Herr Albers': 'thorsten-emotional' },
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
]
