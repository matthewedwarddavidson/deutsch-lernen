import type { WritingTask } from '../types'

export const TASKS: WritingTask[] = [
  {
    id: 'einladung-absagen',
    title: 'Eine Einladung absagen',
    level: 'A2',
    theme: 'beziehungen',
    format: 'informal-email',
    instructions:
      'Ihre Freundin Clara hat Sie zu ihrer Geburtstagsparty am Samstag eingeladen. Sie können leider nicht kommen. Schreiben Sie Clara eine E-Mail.',
    points: ['Bedanken Sie sich für die Einladung.', 'Erklären Sie, warum Sie nicht kommen können.', 'Machen Sie einen Vorschlag für ein anderes Treffen.'],
    minWords: 40,
    phrases: [
      { de: 'Vielen Dank für deine Einladung!', en: 'Thanks a lot for your invitation!' },
      { de: 'Leider kann ich nicht kommen, weil …', en: "Unfortunately I can't come because …" },
      { de: 'Es tut mir wirklich leid.', en: "I'm really sorry." },
      { de: 'Hast du vielleicht nächste Woche Zeit?', en: 'Are you free next week, maybe?' },
      { de: 'Wollen wir zusammen … ?', en: 'Shall we … together?' },
      { de: 'Ich wünsche dir eine schöne Feier!', en: 'Have a lovely party!' },
    ],
    model:
      'Liebe Clara,\n\nvielen Dank für deine Einladung! Ich habe mich sehr gefreut. Leider kann ich am Samstag nicht kommen, weil meine Eltern zu Besuch sind. Das tut mir wirklich leid.\n\nHast du vielleicht nächste Woche Zeit? Wir können zusammen essen gehen. Ich lade dich ein!\n\nIch wünsche dir eine tolle Party.\n\nLiebe Grüße\nSam',
  },
  {
    id: 'umzug-hilfe',
    title: 'Hilfe beim Umzug',
    level: 'B1',
    theme: 'wohnen',
    format: 'informal-email',
    instructions:
      'Sie ziehen nächsten Monat in eine neue Wohnung. Ihr Freund Daniel hat angeboten, Ihnen beim Umzug zu helfen. Schreiben Sie Daniel eine E-Mail (circa 80 Wörter).',
    points: [
      'Bedanken Sie sich und nehmen Sie das Angebot an.',
      'Beschreiben Sie die neue Wohnung.',
      'Nennen Sie Datum und Uhrzeit des Umzugs.',
      'Schlagen Sie vor, wie Sie sich bedanken können.',
    ],
    minWords: 80,
    phrases: [
      { de: 'Danke, dass du mir helfen willst!', en: 'Thanks for offering to help!' },
      { de: 'Dein Angebot nehme ich sehr gern an.', en: "I'm very happy to accept your offer." },
      { de: 'Die Wohnung liegt in der Nähe von …', en: 'The flat is near …' },
      { de: 'Der Umzug ist am … um … Uhr.', en: 'The move is on … at …' },
      { de: 'Als Dankeschön lade ich dich … ein.', en: 'As a thank-you I will treat you to …' },
      { de: 'Ich freue mich schon darauf, …', en: "I'm already looking forward to …" },
      { de: 'Sag mir bitte Bescheid, ob …', en: 'Please let me know whether …' },
    ],
    model:
      'Lieber Daniel,\n\nvielen Dank für deine Nachricht! Dein Angebot nehme ich sehr gern an, denn allein schaffe ich das nie.\n\nDie neue Wohnung ist viel größer als meine alte: Sie hat drei Zimmer und einen Balkon und liegt direkt am Park. Leider gibt es keinen Aufzug, und sie ist im vierten Stock.\n\nDer Umzug ist am Samstag, dem 14. Mai. Kannst du um neun Uhr da sein?\n\nAls Dankeschön lade ich dich und alle anderen Helfer abends zum Grillen auf dem neuen Balkon ein.\n\nViele Grüße\nAlex',
  },
  {
    id: 'forum-handy-schule',
    title: 'Forumsbeitrag: Handys in der Schule',
    level: 'B1',
    theme: 'bildung',
    format: 'forum',
    instructions:
      'In einer Sendung im Fernsehen wurde über das Thema „Handyverbot an Schulen" diskutiert. Im Online-Gästebuch der Sendung finden Sie die Meinung von Petra: „Handys haben in der Schule nichts zu suchen. Die Kinder sollen lernen und sich unterhalten, nicht auf einen Bildschirm starren." Schreiben Sie Ihre Meinung (circa 80 Wörter).',
    points: ['Sagen Sie, ob Sie Petra zustimmen.', 'Nennen Sie mindestens zwei Argumente.', 'Geben Sie ein Beispiel aus Ihrer Erfahrung.'],
    minWords: 80,
    phrases: [
      { de: 'Ich stimme Petra (nicht) zu, weil …', en: "I (don't) agree with Petra because …" },
      { de: 'Meiner Meinung nach …', en: 'In my opinion …' },
      { de: 'Einerseits …, andererseits …', en: 'On the one hand …, on the other …' },
      { de: 'Ein wichtiges Argument ist, dass …', en: 'An important argument is that …' },
      { de: 'Außerdem …', en: 'Besides …' },
      { de: 'Ich habe selbst erlebt, dass …', en: 'I have experienced myself that …' },
      { de: 'Deshalb finde ich, dass …', en: "That's why I think that …" },
    ],
    model:
      'Ich stimme Petra nur teilweise zu. Einerseits ist es richtig, dass Handys im Unterricht stören. Viele Schüler schreiben Nachrichten, statt zuzuhören, und in der Pause spielen sie, statt miteinander zu reden.\n\nAndererseits kann man das Handy auch sinnvoll nutzen, zum Beispiel für Recherchen oder Vokabel-Apps. Außerdem müssen Kinder lernen, verantwortungsvoll mit Medien umzugehen. Das lernen sie nicht durch ein Verbot.\n\nAn der Schule meiner Nichte sind Handys nur im Unterricht erlaubt, wenn die Lehrerin es sagt. Das funktioniert gut. Deshalb finde ich klare Regeln besser als ein komplettes Verbot.',
  },
  {
    id: 'kurs-absagen-formell',
    title: 'Einen Termin absagen (formell)',
    level: 'B1',
    theme: 'bildung',
    format: 'formal-email',
    instructions:
      'Sie haben nächste Woche einen Termin bei Ihrer Kursleiterin, Frau Dr. Schneider, um über Ihre Prüfung zu sprechen. Sie können nicht kommen. Schreiben Sie Frau Dr. Schneider eine E-Mail (circa 40 Wörter).',
    points: ['Entschuldigen Sie sich höflich.', 'Nennen Sie den Grund.', 'Bitten Sie um einen neuen Termin.'],
    minWords: 40,
    phrases: [
      { de: 'Sehr geehrte Frau Dr. Schneider,', en: 'Dear Dr Schneider,' },
      { de: 'leider muss ich unseren Termin am … absagen.', en: 'unfortunately I have to cancel our appointment on …' },
      { de: 'Ich bitte um Ihr Verständnis.', en: 'I hope you will understand.' },
      { de: 'Wäre es möglich, einen neuen Termin zu vereinbaren?', en: 'Would it be possible to arrange a new appointment?' },
      { de: 'Mit freundlichen Grüßen', en: 'Yours sincerely' },
    ],
    model:
      'Sehr geehrte Frau Dr. Schneider,\n\nleider muss ich unseren Termin am Dienstag um 15 Uhr absagen, weil ich an diesem Tag eine wichtige Besprechung bei der Arbeit habe. Das tut mir sehr leid.\n\nWäre es möglich, einen neuen Termin zu vereinbaren? Am Donnerstag oder Freitag hätte ich nachmittags Zeit.\n\nMit freundlichen Grüßen\nAlex Morgan',
  },
  {
    id: 'beschwerde-fitnessstudio',
    title: 'Beschwerde an ein Fitnessstudio',
    level: 'B1',
    theme: 'freizeit',
    format: 'formal-email',
    instructions:
      'Sie sind seit drei Monaten Mitglied im Fitnessstudio „FitPoint". Seit Wochen sind viele Geräte kaputt, und die Duschen sind oft kalt. Schreiben Sie eine Beschwerde an die Leitung des Studios (circa 80 Wörter).',
    points: ['Beschreiben Sie die Probleme.', 'Erklären Sie, warum Sie verärgert sind.', 'Sagen Sie, was Sie erwarten.', 'Nennen Sie eine Konsequenz, falls sich nichts ändert.'],
    minWords: 80,
    phrases: [
      { de: 'ich schreibe Ihnen, weil ich mit … nicht zufrieden bin.', en: "I'm writing to you because I'm not satisfied with …" },
      { de: 'Seit mehreren Wochen …', en: 'For several weeks …' },
      { de: 'Das ist besonders ärgerlich, weil …', en: 'This is especially annoying because …' },
      { de: 'Ich erwarte, dass …', en: 'I expect that …' },
      { de: 'Falls sich nichts ändert, werde ich …', en: 'If nothing changes, I will …' },
      { de: 'Ich bitte um eine schnelle Antwort.', en: 'I would appreciate a quick reply.' },
    ],
    model:
      'Sehr geehrte Damen und Herren,\n\nich bin seit drei Monaten Mitglied in Ihrem Studio und schreibe Ihnen, weil ich leider sehr unzufrieden bin.\n\nSeit mehreren Wochen sind drei Laufbänder und zwei Rudergeräte kaputt. Außerdem sind die Duschen fast jeden Abend kalt. Das ist besonders ärgerlich, weil ich jeden Monat 45 Euro bezahle und nur einen Teil des Angebots nutzen kann.\n\nIch erwarte, dass die Geräte bis Ende des Monats repariert werden. Außerdem bitte ich um eine Ermäßigung für die letzten Wochen. Falls sich nichts ändert, werde ich meinen Vertrag kündigen.\n\nMit freundlichen Grüßen\nAlex Morgan',
  },
  {
    id: 'erlebnis-reise',
    title: 'Von einer Reise erzählen',
    level: 'B1',
    theme: 'reisen',
    format: 'story',
    instructions:
      'Ihr Kollege möchte wissen, wie Ihr letzter Urlaub war. Erzählen Sie in einer E-Mail von einer Reise, bei der etwas Unerwartetes passiert ist (circa 100 Wörter). Benutzen Sie das Präteritum für die Erzählung.',
    points: ['Wohin sind Sie gereist und mit wem?', 'Was ist Unerwartetes passiert?', 'Wie haben Sie reagiert?', 'Wie fanden Sie die Reise insgesamt?'],
    minWords: 100,
    phrases: [
      { de: 'Letzten Sommer fuhren wir nach …', en: 'Last summer we went to …' },
      { de: 'Am dritten Tag passierte etwas Seltsames:', en: 'On the third day something strange happened:' },
      { de: 'Zuerst wussten wir nicht, was wir tun sollten.', en: "At first we didn't know what to do." },
      { de: 'Zum Glück …', en: 'Luckily …' },
      { de: 'Nachdem wir … hatten, …', en: 'After we had …, …' },
      { de: 'Im Großen und Ganzen war es …', en: 'On the whole it was …' },
    ],
    model:
      'Hallo Jens,\n\ndu hast nach meinem Urlaub gefragt – er war wirklich besonders! Im September fuhr ich mit meiner Schwester nach Slowenien. Wir wollten eine Woche in den Bergen wandern.\n\nAm dritten Tag passierte etwas Unerwartetes: Ein Gewitter überraschte uns mitten auf dem Weg. Wir waren völlig nass und hatten keinen Empfang. Zum Glück sahen wir nach einer halben Stunde eine kleine Hütte. Der Hüttenwirt gab uns trockene Kleidung und heiße Suppe. Nachdem das Gewitter vorbei war, blieben wir sogar über Nacht und feierten mit anderen Wanderern.\n\nIm Großen und Ganzen war es eine tolle Reise – gerade wegen des Gewitters!\n\nViele Grüße\nAlex',
  },
  {
    id: 'forum-homeoffice-b2',
    title: 'Forumsbeitrag: Recht auf Homeoffice?',
    level: 'B2',
    theme: 'arbeit',
    format: 'forum',
    instructions:
      'In einem Online-Forum wird diskutiert, ob es ein gesetzliches Recht auf Homeoffice geben sollte. Schreiben Sie einen Beitrag (circa 150 Wörter).',
    points: [
      'Nennen Sie Vorteile eines gesetzlichen Rechts auf Homeoffice.',
      'Nennen Sie Nachteile oder Grenzen.',
      'Beziehen Sie eine klare Position und begründen Sie sie.',
      'Gehen Sie auf ein mögliches Gegenargument ein.',
    ],
    minWords: 150,
    phrases: [
      { de: 'Befürworter argumentieren, dass …', en: 'Supporters argue that …' },
      { de: 'Dem lässt sich entgegenhalten, dass …', en: 'Against this one can argue that …' },
      { de: 'Nicht zu unterschätzen ist …', en: 'Not to be underestimated is …' },
      { de: 'Hinzu kommt, dass …', en: 'On top of that …' },
      { de: 'Aus meiner Sicht überwiegen die Vorteile, da …', en: 'In my view the advantages outweigh the disadvantages, since …' },
      { de: 'Zwar …, doch …', en: 'Admittedly …, but …' },
      { de: 'Abschließend möchte ich betonen, dass …', en: 'Finally, I would like to stress that …' },
    ],
    model:
      'Die Frage, ob es ein gesetzliches Recht auf Homeoffice geben sollte, wird seit Jahren kontrovers diskutiert.\n\nBefürworter argumentieren, dass Beschäftigte durch den Wegfall des Pendelns Zeit und Geld sparen und Beruf und Familie besser vereinbaren können. Hinzu kommt der Umweltaspekt: Weniger Verkehr bedeutet weniger Emissionen.\n\nDem lässt sich entgegenhalten, dass nicht jede Tätigkeit von zu Hause aus erledigt werden kann. Ein pauschaler Anspruch würde zudem Beschäftigte benachteiligen, die zum Beispiel in der Pflege oder im Handel arbeiten. Nicht zu unterschätzen ist außerdem die Gefahr der sozialen Isolation.\n\nAus meiner Sicht überwiegen dennoch die Vorteile. Allerdings sollte das Recht an Bedingungen geknüpft sein: Wo es die Tätigkeit zulässt, sollten Arbeitgeber einen Antrag nur aus nachvollziehbaren Gründen ablehnen dürfen. Zwar mag das für Unternehmen mehr Aufwand bedeuten, doch langfristig profitieren sie von zufriedeneren und produktiveren Mitarbeitern.',
  },
  {
    id: 'reklamation-b2',
    title: 'Reklamation: Fehlerhafte Lieferung',
    level: 'B2',
    theme: 'einkaufen',
    format: 'formal-email',
    instructions:
      'Sie haben bei einem Online-Möbelhaus einen Schreibtisch bestellt. Er wurde zwei Wochen zu spät geliefert, ein Bein war beschädigt, und die Montageanleitung fehlte. Der Kundenservice ist telefonisch nicht erreichbar. Schreiben Sie eine E-Mail (circa 100 Wörter).',
    points: ['Schildern Sie die Mängel sachlich.', 'Erläutern Sie die Folgen für Sie.', 'Formulieren Sie konkrete Forderungen.', 'Setzen Sie eine Frist.'],
    minWords: 100,
    phrases: [
      { de: 'Bezug nehmend auf meine Bestellung Nr. … vom …', en: 'With reference to my order no. … of …' },
      { de: 'Zu meinem Bedauern musste ich feststellen, dass …', en: 'To my regret I discovered that …' },
      { de: 'Dies hatte zur Folge, dass …', en: 'As a result …' },
      { de: 'Ich fordere Sie daher auf, …', en: 'I therefore ask you to …' },
      { de: 'Ich erwarte Ihre Antwort bis spätestens …', en: 'I expect your reply by … at the latest.' },
      { de: 'Andernfalls sehe ich mich gezwungen, …', en: 'Otherwise I will be forced to …' },
    ],
    model:
      'Sehr geehrte Damen und Herren,\n\nbezugnehmend auf meine Bestellung Nr. 58213 vom 2. März wende ich mich heute mit einer Reklamation an Sie, da Ihr Kundenservice telefonisch nicht zu erreichen ist.\n\nDer Schreibtisch wurde erst am 30. März geliefert, also zwei Wochen nach dem zugesagten Termin. Zu meinem Bedauern musste ich zudem feststellen, dass ein Tischbein beschädigt ist und die Montageanleitung fehlt. Dies hatte zur Folge, dass ich weiterhin am Küchentisch arbeiten muss.\n\nIch fordere Sie daher auf, mir umgehend ein Ersatzbein sowie die Anleitung zuzusenden. Für die verspätete Lieferung erwarte ich außerdem eine angemessene Preisminderung.\n\nBitte bestätigen Sie mir bis spätestens 10. April, wie Sie vorgehen werden. Andernfalls sehe ich mich gezwungen, vom Kaufvertrag zurückzutreten.\n\nMit freundlichen Grüßen\nAlex Morgan',
  },
  {
    id: 'stellungnahme-c1',
    title: 'Stellungnahme: Pflichtjahr für junge Menschen',
    level: 'C1',
    theme: 'gesellschaft',
    format: 'essay',
    instructions:
      'In der Politik wird diskutiert, ob alle jungen Menschen nach der Schule ein verpflichtendes soziales Jahr leisten sollten. Verfassen Sie eine Stellungnahme (circa 200 Wörter) für eine Zeitung.',
    points: [
      'Ordnen Sie das Thema kurz ein.',
      'Wägen Sie Argumente dafür und dagegen ab.',
      'Berücksichtigen Sie verschiedene Perspektiven (Gesellschaft, junge Menschen, Einrichtungen).',
      'Ziehen Sie ein begründetes Fazit.',
    ],
    minWords: 200,
    phrases: [
      { de: 'Die Debatte um … hat in jüngster Zeit an Fahrt aufgenommen.', en: 'The debate on … has recently gathered pace.' },
      { de: 'Was auf den ersten Blick überzeugend klingt, erweist sich bei näherer Betrachtung als …', en: 'What sounds convincing at first glance turns out on closer inspection to be …' },
      { de: 'Es wäre jedoch verkürzt, … ', en: 'It would, however, be simplistic to …' },
      { de: 'Nicht von der Hand zu weisen ist, dass …', en: 'It cannot be denied that …' },
      { de: 'Unterm Strich …', en: 'All things considered …' },
      { de: 'Sinnvoller erschiene mir, …', en: 'It would seem more sensible to me to …' },
    ],
    model:
      'Die Debatte um ein soziales Pflichtjahr hat in jüngster Zeit an Fahrt aufgenommen – nicht zuletzt wegen des Personalmangels in Pflege und Katastrophenschutz.\n\nNicht von der Hand zu weisen ist, dass ein solches Jahr den gesellschaftlichen Zusammenhalt stärken könnte. Junge Menschen kämen mit Lebenswelten in Berührung, die ihnen sonst verschlossen blieben, und viele würden dabei Fähigkeiten entdecken, die in keinem Lehrplan vorkommen.\n\nWas auf den ersten Blick überzeugend klingt, erweist sich bei näherer Betrachtung jedoch als problematisch. Ein Pflichtdienst greift erheblich in die Freiheit junger Erwachsener ein, die ohnehin unter Druck stehen, rasch in Ausbildung oder Studium zu starten. Zudem wäre es verkürzt, strukturelle Probleme wie die schlechte Bezahlung in der Pflege mit unerfahrenen Kräften lösen zu wollen; die Einrichtungen bräuchten vielmehr zusätzliche Kapazitäten für deren Anleitung.\n\nUnterm Strich überwiegen aus meiner Sicht die Bedenken. Sinnvoller erschiene mir, freiwillige Dienste deutlich attraktiver zu gestalten – etwa durch eine angemessene Vergütung und die Anrechnung auf Studium oder Ausbildung. Engagement, das aus Überzeugung entsteht, ist nachhaltiger als eines, das verordnet wird.',
  },
]
