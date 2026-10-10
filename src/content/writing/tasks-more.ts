import type { WritingTask } from '../types'

export const TASKS_MORE: WritingTask[] = [
  {
    id: 'einladung-hochzeit',
    title: 'Glückwunsch zur Hochzeit',
    level: 'B1',
    theme: 'beziehungen',
    format: 'informal-email',
    instructions:
      'Ihre Freundin Clara heiratet im Juni und hat Sie zur Hochzeit eingeladen. Schreiben Sie ihr eine E-Mail (circa 80 Wörter).',
    points: [
      'Gratulieren Sie und bedanken Sie sich für die Einladung.',
      'Sagen Sie, dass Sie kommen, und fragen Sie, ob Sie Ihren Partner / Ihre Partnerin mitbringen dürfen.',
      'Bieten Sie Hilfe bei der Vorbereitung an.',
      'Fragen Sie nach einem Geschenkwunsch.',
    ],
    minWords: 80,
    phrases: [
      { de: 'Herzlichen Glückwunsch!', en: 'Congratulations!' },
      { de: 'Vielen Dank für die Einladung, ich komme sehr gern.', en: "Thanks for the invitation, I'd love to come." },
      { de: 'Wäre es in Ordnung, wenn …?', en: 'Would it be OK if …?' },
      { de: 'Kann ich dir bei … helfen?', en: 'Can I help you with …?' },
      { de: 'Habt ihr einen besonderen Wunsch?', en: 'Is there anything in particular you would like?' },
    ],
    model:
      'Liebe Clara,\n\nherzlichen Glückwunsch! Ich habe mich riesig über eure Einladung gefreut und komme natürlich sehr gern. Wäre es in Ordnung, wenn ich meinen Freund Tom mitbringe? Ihr habt ihn ja schon einmal kennengelernt.\n\nIch weiß, dass so eine Hochzeit viel Arbeit ist. Kann ich dir bei der Vorbereitung helfen? Ich könnte zum Beispiel einen Kuchen backen oder am Tag vorher beim Dekorieren helfen.\n\nUnd noch eine Frage: Habt ihr einen besonderen Wunsch für ein Geschenk?\n\nLiebe Grüße und bis bald\nAlex',
  },
  {
    id: 'forum-online-einkaufen',
    title: 'Forumsbeitrag: Online einkaufen',
    level: 'B1',
    theme: 'einkaufen',
    format: 'forum',
    instructions:
      'In einem Forum wird diskutiert: „Kaufen Sie lieber online oder im Geschäft ein?" Schreiben Sie Ihre Meinung (circa 80 Wörter).',
    points: [
      'Sagen Sie, wo Sie meistens einkaufen.',
      'Nennen Sie Vorteile und Nachteile des Online-Einkaufs.',
      'Begründen Sie Ihre Meinung.',
    ],
    minWords: 80,
    phrases: [
      { de: 'Ich kaufe meistens … ein, weil …', en: 'I mostly shop … because …' },
      { de: 'Ein großer Vorteil ist, dass …', en: 'A big advantage is that …' },
      { de: 'Auf der anderen Seite …', en: 'On the other hand …' },
      { de: 'Meiner Meinung nach …', en: 'In my opinion …' },
      { de: 'Deshalb finde ich …', en: "That's why I think …" },
    ],
    model:
      'Ich kaufe Kleidung und Lebensmittel meistens im Geschäft, aber Bücher und Elektronik bestelle ich oft online.\n\nEin großer Vorteil beim Online-Einkauf ist, dass man Zeit spart und die Preise leicht vergleichen kann. Außerdem ist die Auswahl viel größer. Auf der anderen Seite kann man die Sachen nicht anprobieren, und oft muss man viel zurückschicken. Das ist schlecht für die Umwelt.\n\nMeiner Meinung nach sollte man die Geschäfte in der Stadt unterstützen, weil sie sonst schließen müssen. Deshalb kaufe ich nur online, wenn ich etwas im Laden nicht finde.',
  },
  {
    id: 'kursleiterin-absage',
    title: 'Nachricht an die Kursleiterin',
    level: 'B1',
    theme: 'bildung',
    format: 'formal-email',
    instructions:
      'Sie können morgen nicht zum Deutschkurs kommen. Schreiben Sie Ihrer Kursleiterin, Frau Schröder, eine kurze Nachricht (circa 40 Wörter).',
    points: ['Entschuldigen Sie sich und nennen Sie den Grund.', 'Fragen Sie nach den Hausaufgaben.'],
    minWords: 40,
    phrases: [
      { de: 'Liebe Frau Schröder,', en: 'Dear Ms Schröder, (friendly-formal)' },
      {
        de: 'leider kann ich morgen nicht am Kurs teilnehmen, weil …',
        en: "unfortunately I can't attend tomorrow because …",
      },
      { de: 'Könnten Sie mir bitte sagen, …?', en: 'Could you please tell me …?' },
      { de: 'Viele Grüße', en: 'Kind regards' },
    ],
    model:
      'Liebe Frau Schröder,\n\nleider kann ich morgen nicht zum Kurs kommen, weil ich einen wichtigen Termin beim Arzt habe. Es tut mir leid. Könnten Sie mir bitte sagen, welche Hausaufgaben wir für nächste Woche machen sollen?\n\nVielen Dank und viele Grüße\nAlex Morgan',
  },
  {
    id: 'praktikum-anfrage-b2',
    title: 'Anfrage: Praktikumsplatz',
    level: 'B2',
    theme: 'arbeit',
    format: 'formal-email',
    instructions:
      'Sie haben auf der Website eines Verlags gelesen, dass dort Praktika angeboten werden. Schreiben Sie eine E-Mail an die Personalabteilung (circa 100 Wörter).',
    points: [
      'Stellen Sie sich kurz vor und erklären Sie Ihr Interesse.',
      'Fragen Sie nach Dauer, Zeitraum und Bezahlung.',
      'Erkundigen Sie sich nach den Bewerbungsunterlagen.',
      'Beschreiben Sie, was Sie mitbringen.',
    ],
    minWords: 100,
    phrases: [
      {
        de: 'Mit großem Interesse habe ich auf Ihrer Website gelesen, dass …',
        en: 'I read with great interest on your website that …',
      },
      { de: 'Ich würde mich gern nach … erkundigen.', en: 'I would like to enquire about …' },
      { de: 'Darüber hinaus wüsste ich gern, …', en: "In addition, I'd like to know …" },
      { de: 'Ich verfüge über …', en: 'I have (skills, experience) …' },
      { de: 'Über eine Antwort würde ich mich sehr freuen.', en: 'I would be very pleased to hear from you.' },
    ],
    model:
      'Sehr geehrte Damen und Herren,\n\nmit großem Interesse habe ich auf Ihrer Website gelesen, dass Ihr Verlag Praktika im Lektorat anbietet. Ich studiere Germanistik im vierten Semester und möchte gern praktische Erfahrungen in der Verlagsarbeit sammeln.\n\nDaher würde ich mich gern nach den Bedingungen erkundigen: Wie lange dauert ein Praktikum, und ab wann wäre ein Beginn möglich? Darüber hinaus wüsste ich gern, ob das Praktikum vergütet wird. Welche Unterlagen benötigen Sie für eine Bewerbung?\n\nIch verfüge über sehr gute Deutsch- und Englischkenntnisse, arbeite sorgfältig und habe bereits für unsere Studierendenzeitung geschrieben.\n\nÜber eine Antwort würde ich mich sehr freuen.\n\nMit freundlichen Grüßen\nAlex Morgan',
  },
  {
    id: 'forum-kuenstliche-intelligenz-b2',
    title: 'Forumsbeitrag: KI in der Schule',
    level: 'B2',
    theme: 'medien',
    format: 'forum',
    instructions:
      'In einem Online-Forum wird diskutiert, ob Schülerinnen und Schüler künstliche Intelligenz für Hausaufgaben nutzen dürfen. Schreiben Sie einen Beitrag (circa 150 Wörter).',
    points: [
      'Nennen Sie Chancen von KI beim Lernen.',
      'Nennen Sie Risiken.',
      'Machen Sie einen Vorschlag, wie Schulen damit umgehen sollten.',
      'Formulieren Sie eine begründete Meinung.',
    ],
    minWords: 150,
    phrases: [
      { de: 'Die Frage, ob …, wird zurzeit heftig diskutiert.', en: 'Whether … is currently hotly debated.' },
      { de: 'Einerseits bietet … die Chance, …', en: 'On the one hand … offers the chance to …' },
      { de: 'Andererseits besteht die Gefahr, dass …', en: 'On the other hand there is a risk that …' },
      { de: 'Statt … zu verbieten, sollte man …', en: 'Instead of banning …, one should …' },
      { de: 'Alles in allem bin ich der Ansicht, dass …', en: 'All in all, I am of the view that …' },
    ],
    model:
      'Die Frage, ob Schüler KI für ihre Hausaufgaben nutzen dürfen, wird zurzeit heftig diskutiert. Ich möchte dazu meine Sicht schildern.\n\nEinerseits bietet KI große Chancen. Sie kann schwierige Themen geduldig erklären, Fragen beantworten und Texte korrigieren. Gerade Kinder, deren Eltern nicht helfen können, könnten davon profitieren.\n\nAndererseits besteht die Gefahr, dass Schüler die Aufgaben einfach von der KI erledigen lassen und selbst nichts mehr lernen. Außerdem sind die Antworten nicht immer richtig, und viele Jugendliche können das nicht erkennen.\n\nStatt KI zu verbieten, sollten Schulen den Umgang damit unterrichten: Wie formuliere ich eine gute Frage? Wie prüfe ich, ob eine Antwort stimmt? Gleichzeitig sollten wichtige Leistungen wieder häufiger in der Schule geschrieben werden.\n\nAlles in allem bin ich der Ansicht, dass KI ein nützliches Werkzeug ist, wenn man gelernt hat, kritisch damit umzugehen.',
  },
  {
    id: 'zusammenfassung-langeweile-c1',
    title: 'Zusammenfassung: Lob der Langeweile',
    level: 'C1',
    theme: 'gesellschaft',
    format: 'summary',
    instructions:
      'Lesen Sie den Text „Lob der Langeweile" im Bereich Lesen. Fassen Sie die Argumentation des Autors in eigenen Worten zusammen und nehmen Sie kurz Stellung (circa 180 Wörter).',
    points: [
      'Nennen Sie die Hauptthese.',
      'Geben Sie die zwei zentralen Argumente wieder.',
      'Erläutern Sie die Schlussfolgerung des Autors.',
      'Nehmen Sie begründet Stellung.',
    ],
    minWords: 180,
    phrases: [
      { de: 'Der Text befasst sich mit der Frage, …', en: 'The text deals with the question …' },
      { de: 'Der Autor vertritt die These, dass …', en: 'The author argues that …' },
      { de: 'Zur Begründung führt er an, dass …', en: 'In support he states that …' },
      { de: 'Daraus leitet er ab, dass …', en: 'From this he concludes that …' },
      { de: 'Dem ist insofern zuzustimmen, als …', en: 'One can agree with this in so far as …' },
    ],
    model:
      'Der Text befasst sich mit der Frage, welchen Wert Langeweile in einer Zeit ständiger digitaler Ablenkung hat. Der Autor vertritt die These, dass wir mit der Langeweile etwas Wertvolles verlieren, weil wir jede Lücke im Alltag sofort mit dem Smartphone füllen.\n\nZur Begründung führt er zwei Argumente an. Erstens sei das Gehirn in Phasen des Nichtstuns keineswegs untätig, sondern verarbeite Erlebtes und verknüpfe Gedanken, was kreative Ideen begünstige. Zweitens sei Langeweile ein Signal, dass eine Tätigkeit uns nicht erfülle; wer es ständig übertöne, weiche letztlich sich selbst aus.\n\nDaraus leitet er nicht ab, auf Smartphones zu verzichten, sondern empfiehlt, Leerlauf bewusst zuzulassen, etwa bei Bahnfahrten oder Spaziergängen.\n\nDem ist insofern zuzustimmen, als viele Menschen tatsächlich kaum noch Momente ohne Ablenkung erleben. Allerdings blendet der Text aus, dass Langeweile für manche – etwa Menschen in eintönigen Jobs – keine Wahl, sondern eine Belastung ist. Bewusster Leerlauf ist daher vor allem ein Privileg derer, die sonst zu viel zu tun haben.',
  },
  {
    id: 'eroerterung-grundeinkommen-c1',
    title: 'Erörterung: Bedingungsloses Grundeinkommen',
    level: 'C1',
    theme: 'gesellschaft',
    format: 'essay',
    instructions:
      'Hören Sie zuerst das Streitgespräch zum Grundeinkommen im Bereich Hören. Schreiben Sie dann eine Erörterung: Sollte Deutschland ein bedingungsloses Grundeinkommen einführen? (circa 250 Wörter)',
    points: [
      'Führen Sie in das Thema ein.',
      'Wägen Sie Argumente dafür und dagegen ab.',
      'Belegen Sie Ihre Argumente mit Beispielen.',
      'Ziehen Sie ein begründetes Fazit.',
    ],
    minWords: 250,
    phrases: [
      {
        de: 'Kaum eine sozialpolitische Idee wird so kontrovers diskutiert wie …',
        en: 'Few social policy ideas are as controversial as …',
      },
      { de: 'Befürworter führen ins Feld, dass …', en: 'Supporters argue that …' },
      { de: 'Dem lässt sich entgegenhalten, dass …', en: 'Against this one can argue that …' },
      { de: 'Nicht von der Hand zu weisen ist, dass …', en: 'It cannot be denied that …' },
      { de: 'Wägt man die Argumente gegeneinander ab, …', en: 'Weighing up the arguments, …' },
      { de: 'Alles in allem bin ich der Auffassung, dass …', en: 'All in all I take the view that …' },
    ],
    model:
      'Kaum eine sozialpolitische Idee wird so kontrovers diskutiert wie das bedingungslose Grundeinkommen. Die Vorstellung, dass jeder Mensch monatlich einen festen Betrag erhält, ohne dafür etwas leisten zu müssen, fasziniert die einen und empört die anderen.\n\nBefürworter führen ins Feld, dass ein Grundeinkommen den bürokratischen Aufwand des heutigen Sozialsystems drastisch verringern würde. Zudem müssten Menschen nicht länger um Leistungen bitten, die ihnen zustehen. Nicht von der Hand zu weisen ist auch, dass die Automatisierung viele Arbeitsplätze verändern wird und eine verlässliche Grundsicherung Ängste nehmen könnte.\n\nDem lässt sich entgegenhalten, dass ein Grundeinkommen für alle enorme Summen kostet. Auch wenn Wohlhabende über höhere Steuern einen Teil zurückzahlen, bleibt fraglich, ob das Geld nicht in Pflege, Bildung oder Wohnungsbau besser angelegt wäre. Hinzu kommt die Sorge, Arbeitgeber könnten Löhne mit Verweis auf das Grundeinkommen drücken. Und schließlich sind die bisherigen Versuche zu klein und zu kurz, um verlässliche Aussagen über eine ganze Volkswirtschaft zu treffen.\n\nWägt man die Argumente gegeneinander ab, so scheint mir ein sofortiges Grundeinkommen für alle zu riskant. Die Kritik am heutigen System ist jedoch berechtigt. Alles in allem bin ich der Auffassung, dass Deutschland zunächst die bestehende Grundsicherung vereinfachen und von demütigenden Kontrollen befreien sollte. Parallel könnten größere und längere Modellversuche zeigen, ob das Grundeinkommen hält, was es verspricht.',
  },
  {
    id: 'stellungnahme-park-c1',
    title: 'Formeller Brief: Stellungnahme an die Stadt',
    level: 'C1',
    theme: 'wohnen',
    format: 'formal-email',
    instructions:
      'Die Stadt plant, den Park in Ihrem Viertel teilweise zu bebauen, um 120 neue Wohnungen zu schaffen. Bürgerinnen und Bürger können bis Monatsende schriftlich Stellung nehmen. Schreiben Sie an das Stadtplanungsamt (circa 220 Wörter).',
    points: [
      'Stellen Sie sich kurz vor und nennen Sie den Anlass.',
      'Erkennen Sie das Ziel des Projekts an.',
      'Äußern Sie Ihre Bedenken und begründen Sie sie.',
      'Machen Sie einen konkreten Gegenvorschlag.',
    ],
    minWords: 220,
    phrases: [
      { de: 'Bezug nehmend auf Ihre Bekanntmachung vom …', en: 'With reference to your announcement of …' },
      { de: 'Grundsätzlich begrüße ich …', en: 'In principle I welcome …' },
      {
        de: 'Gleichwohl habe ich erhebliche Bedenken hinsichtlich …',
        en: 'Nevertheless I have serious concerns regarding …',
      },
      { de: 'Ich gebe zu bedenken, dass …', en: 'I would point out that …' },
      { de: 'Ich möchte daher anregen, …', en: 'I would therefore suggest …' },
      { de: 'Für Rückfragen stehe ich Ihnen gern zur Verfügung.', en: 'I am happy to answer any questions.' },
    ],
    model:
      'Sehr geehrte Damen und Herren,\n\nBezug nehmend auf Ihre Bekanntmachung vom 3. März möchte ich als Anwohnerin des Lindenviertels zu den Plänen für den Stadtpark Stellung nehmen.\n\nGrundsätzlich begrüße ich, dass die Stadt angesichts des Wohnungsmangels neuen Wohnraum schaffen will. Gerade Familien und Menschen mit geringem Einkommen finden in unserem Viertel kaum noch eine bezahlbare Wohnung.\n\nGleichwohl habe ich erhebliche Bedenken hinsichtlich des gewählten Standorts. Der Park ist die einzige größere Grünfläche im Viertel. Er wird von Kindern, älteren Menschen und Sportgruppen intensiv genutzt und trägt im Sommer spürbar zur Abkühlung der umliegenden Straßen bei. Ich gebe zu bedenken, dass die Hitzebelastung in dicht bebauten Vierteln in den kommenden Jahren eher zunehmen wird. Eine verlorene Grünfläche lässt sich zudem kaum zurückgewinnen.\n\nIch möchte daher anregen, zunächst andere Flächen zu prüfen. Der seit Jahren leer stehende Parkplatz an der Bahnhofstraße etwa böte Platz für eine vergleichbare Zahl an Wohnungen, ohne dass Grün verloren ginge. Denkbar wäre auch, bestehende Gebäude aufzustocken.\n\nIch würde mich freuen, wenn meine Anregungen in die weitere Planung einfließen. Für Rückfragen stehe ich Ihnen gern zur Verfügung.\n\nMit freundlichen Grüßen\nJana Weber',
  },
]
