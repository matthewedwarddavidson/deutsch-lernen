import type { GrammarTopic } from '../types'

export const praeteritum: GrammarTopic = {
  id: 'praeteritum',
  title: 'Präteritum',
  english: 'The simple past',
  level: 'B1',
  summary:
    'In speech, Germans mostly use the Perfekt for the past. In writing (stories, reports, news) they use the **Präteritum**. With **sein, haben** and the **modal verbs**, the Präteritum is normal in speech too: *ich war, ich hatte, ich musste*.',
  sections: [
    {
      heading: 'Regular verbs: -te',
      body: [
        'Add **-te** plus a person ending to the stem. Stems ending in -t or -d add an extra **e**: arbeit**ete**, red**ete**.',
        'The ich and er/sie/es forms are the same and have no extra ending.',
      ],
      table: {
        head: ['', 'machen', 'arbeiten', 'sein', 'haben'],
        rows: [
          ['ich', 'mach**te**', 'arbeit**ete**', 'war', 'hatte'],
          ['du', 'mach**test**', 'arbeit**etest**', 'warst', 'hattest'],
          ['er/sie/es', 'mach**te**', 'arbeit**ete**', 'war', 'hatte'],
          ['wir', 'mach**ten**', 'arbeit**eten**', 'waren', 'hatten'],
          ['ihr', 'mach**tet**', 'arbeit**etet**', 'wart', 'hattet'],
          ['sie/Sie', 'mach**ten**', 'arbeit**eten**', 'waren', 'hatten'],
        ],
      },
    },
    {
      heading: 'Irregular verbs: a new stem',
      body: [
        'Strong verbs change their vowel and take **no -te**. ich and er/sie/es have **no ending at all**: ich ging, er ging.',
        'Mixed verbs change the vowel **and** take -te: denken → **dachte**, bringen → **brachte**, wissen → **wusste**, kennen → **kannte**.',
        'Modal verbs lose their umlaut: können → **konnte**, müssen → **musste**, dürfen → **durfte**, mögen → **mochte**; wollen → **wollte**, sollen → **sollte**.',
      ],
      table: {
        head: ['Infinitiv', 'Präteritum', 'Infinitiv', 'Präteritum'],
        rows: [
          ['gehen', 'ging', 'kommen', 'kam'],
          ['sehen', 'sah', 'geben', 'gab'],
          ['fahren', 'fuhr', 'finden', 'fand'],
          ['nehmen', 'nahm', 'sprechen', 'sprach'],
          ['bleiben', 'blieb', 'schreiben', 'schrieb'],
          ['stehen', 'stand', 'sitzen', 'saß'],
          ['werden', 'wurde', 'lassen', 'ließ'],
          ['laufen', 'lief', 'tun', 'tat'],
        ],
      },
      examples: [
        {
          de: 'Als Kind **wohnte** ich in Leeds. Wir **hatten** einen Hund.',
          en: 'As a child I lived in Leeds. We had a dog.',
        },
        {
          de: 'Plötzlich **stand** ein Mann vor der Tür und **sagte** nichts.',
          en: 'Suddenly a man stood at the door and said nothing.',
        },
      ],
    },
    {
      heading: 'Separable verbs',
      body: [
        'The prefix separates just as in the present: Der Zug **kam** pünktlich **an**. In a subordinate clause it rejoins: …, als der Zug **ankam**.',
      ],
    },
  ],
  mistakes: [
    { wrong: 'Er gingte nach Hause.', right: 'Er ging nach Hause.', why: 'Strong verbs never take -te.' },
    {
      wrong: 'Ich konnte nicht kommen, weil ich krank gewesen war.',
      right: 'Ich konnte nicht kommen, weil ich krank war.',
      why: 'Same time, same tense. Plusquamperfekt is only for something earlier.',
    },
    {
      wrong: 'Ich habe gestern keine Zeit gehabt (in an email)',
      right: 'Ich hatte gestern keine Zeit.',
      why: 'Both are correct, but with haben and sein the Präteritum is shorter and more natural.',
    },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: 'Letztes Jahr ___ wir in Spanien. (sein)',
      answers: ['waren'],
      hint: 'sein, wir',
      explanation: 'sein → wir waren.',
    },
    {
      kind: 'gap',
      prompt: 'Als Kind ___ ich jeden Tag mit dem Rad zur Schule. (fahren)',
      answers: ['fuhr'],
      hint: 'strong verb',
      explanation: 'fahren → fuhr. ich has no ending in the Präteritum.',
    },
    {
      kind: 'gap',
      prompt: 'Sie ___ den ganzen Abend an ihrer Bewerbung. (arbeiten)',
      answers: ['arbeitete'],
      hint: 'stem ends in -t',
      explanation: 'arbeit- + e + te: arbeitete.',
    },
    {
      kind: 'gap',
      prompt: 'Wir ___ leider nicht kommen, weil das Auto kaputt war. (können)',
      answers: ['konnten'],
      hint: 'modal verb',
      explanation: 'können → konnten. Modals lose the umlaut.',
    },
    {
      kind: 'gap',
      prompt: 'Ich ___ nicht, dass du Geburtstag hast! (wissen)',
      answers: ['wusste'],
      hint: 'mixed verb',
      explanation: 'wissen → wusste.',
    },
    {
      kind: 'gap',
      prompt: 'Der Film ___ um acht Uhr an. (anfangen)',
      answers: ['fing'],
      hint: 'anfangen, strong',
      explanation: 'anfangen → fing … an. The prefix goes to the end.',
    },
    {
      kind: 'gap',
      prompt: 'Er ___ mir eine lange E-Mail. (schreiben)',
      answers: ['schrieb'],
      hint: 'ei → ie',
      explanation: 'schreiben → schrieb.',
    },
    {
      kind: 'gap',
      prompt: 'Du ___ gestern so müde aus. (sehen)',
      answers: ['sahst'],
      hint: 'du + strong verb',
      explanation: 'sehen → sah; du adds -st: sahst.',
    },
    {
      kind: 'gap',
      prompt: 'Die Kinder ___ den ganzen Nachmittag im Garten. (sein)',
      answers: ['waren'],
      hint: 'Plural',
      explanation: 'sein → sie waren.',
    },
    {
      kind: 'gap',
      prompt: 'Ich ___ an dich, als ich das Lied hörte. (denken)',
      answers: ['dachte'],
      hint: 'mixed verb',
      explanation: 'denken → dachte.',
    },
    {
      kind: 'choice',
      prompt: 'Gestern ___ ich meinen alten Lehrer in der Stadt.',
      options: ['treffte', 'traf', 'trafte', 'getroffen'],
      answer: 1,
      explanation: 'treffen → traf (strong, no -te).',
    },
    {
      kind: 'choice',
      prompt: 'Wir ___ den ganzen Tag im Bett, weil wir krank waren.',
      options: ['blieben', 'bleibten', 'bliebten', 'geblieben'],
      answer: 0,
      explanation: 'bleiben → blieben.',
    },
    {
      kind: 'transform',
      instruction: 'Rewrite in the Präteritum.',
      prompt: 'Ich habe keine Zeit gehabt, deshalb bin ich nicht gekommen.',
      answers: ['Ich hatte keine Zeit, deshalb kam ich nicht.'],
      explanation: 'hatte … kam. In the Präteritum the verb is one word in second position.',
    },
    {
      kind: 'transform',
      instruction: 'Rewrite in the Präteritum.',
      prompt: 'Der Zug ist um 9 Uhr angekommen.',
      answers: ['Der Zug kam um 9 Uhr an.'],
      explanation: 'ankommen → kam … an.',
    },
  ],
}

export const plusquamperfekt: GrammarTopic = {
  id: 'plusquamperfekt',
  title: 'Plusquamperfekt',
  english: 'The past perfect ("had done")',
  level: 'B1',
  summary:
    'The Plusquamperfekt describes something that happened **before** another past event: "after we **had eaten**". Form it like the Perfekt, but put haben or sein in the Präteritum: **hatte / war** + Partizip II.',
  sections: [
    {
      heading: 'Form',
      body: [
        'Use **hatte** or **war** exactly where the Perfekt uses **hat** or **ist**. The participle goes to the end.',
      ],
      table: {
        head: ['Perfekt', 'Plusquamperfekt'],
        rows: [
          ['ich **habe** gegessen', 'ich **hatte** gegessen'],
          ['sie **ist** gefahren', 'sie **war** gefahren'],
          ['wir **haben** uns getroffen', 'wir **hatten** uns getroffen'],
        ],
      },
    },
    {
      heading: 'Use: one step further back',
      body: [
        'You need it when two past events are in a sequence and you tell the later one first, or with **nachdem**.',
        'With **nachdem**: if the main clause is in the Präteritum or Perfekt, the nachdem-clause is in the **Plusquamperfekt**.',
      ],
      examples: [
        {
          de: 'Als ich am Bahnhof ankam, **war** der Zug schon **abgefahren**.',
          en: 'When I got to the station, the train had already left.',
        },
        {
          de: '**Nachdem** sie ihr Studium **beendet hatte**, zog sie nach Berlin.',
          en: 'After she had finished her degree, she moved to Berlin.',
        },
        {
          de: 'Er konnte nicht schlafen, weil er zu viel Kaffee **getrunken hatte**.',
          en: "He couldn't sleep because he had drunk too much coffee.",
        },
      ],
    },
  ],
  mistakes: [
    {
      wrong: 'Nachdem ich gegessen habe, ging ich spazieren.',
      right: 'Nachdem ich gegessen hatte, ging ich spazieren.',
      why: 'Main clause in the past, so nachdem takes the Plusquamperfekt.',
    },
    {
      wrong: 'Ich hatte gestern Fußball gespielt.',
      right: 'Ich habe gestern Fußball gespielt.',
      why: 'Plusquamperfekt only makes sense relative to another past event.',
    },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: 'Als wir ankamen, ___ der Film schon begonnen.',
      answers: ['hatte'],
      hint: 'beginnen takes haben',
      explanation: 'hatte + begonnen: it began before we arrived.',
    },
    {
      kind: 'gap',
      prompt: 'Nachdem er das Abitur gemacht ___, reiste er ein Jahr durch Asien.',
      answers: ['hatte'],
      hint: 'machen takes haben',
      explanation: 'nachdem + Plusquamperfekt: gemacht hatte.',
    },
    {
      kind: 'gap',
      prompt: 'Sie war müde, weil sie die ganze Nacht nicht ___ hatte.',
      answers: ['geschlafen'],
      hint: 'schlafen',
      explanation: 'Partizip II of schlafen: geschlafen.',
    },
    {
      kind: 'gap',
      prompt: 'Nachdem wir nach Hause gekommen ___, fing es an zu regnen.',
      answers: ['waren'],
      hint: 'kommen takes sein',
      explanation: 'kommen → sein: gekommen waren.',
    },
    {
      kind: 'gap',
      prompt: 'Ich ___ meinen Schlüssel vergessen und kam nicht in die Wohnung.',
      answers: ['hatte'],
      hint: 'earlier event',
      explanation: 'Forgetting happened before the not getting in: hatte vergessen.',
    },
    {
      kind: 'gap',
      prompt: 'Der Zug ___ schon abgefahren, als ich auf den Bahnsteig kam.',
      answers: ['war'],
      hint: 'abfahren takes sein',
      explanation: 'abfahren takes sein: war abgefahren.',
    },
    {
      kind: 'choice',
      prompt: 'Nachdem sie gegessen ___, gingen sie ins Kino.',
      options: ['haben', 'hatten', 'waren', 'sind'],
      answer: 1,
      explanation: 'essen takes haben; Plusquamperfekt: hatten gegessen.',
    },
    {
      kind: 'choice',
      prompt: 'Er erzählte, dass er schon dreimal in Japan ___.',
      options: ['gewesen war', 'gewesen hatte', 'war gewesen', 'hatte gewesen'],
      answer: 0,
      explanation: 'sein takes sein; in the dass-clause the conjugated verb goes last: gewesen war.',
    },
    {
      kind: 'order',
      words: ['Nachdem', 'ich', 'die', 'Prüfung', 'bestanden', 'hatte,', 'feierten', 'wir.'],
      english: 'After I had passed the exam, we celebrated.',
      explanation: 'nachdem-clause with the verb at the end; then the main clause starts with its verb.',
    },
    {
      kind: 'transform',
      instruction: 'Join with nachdem. The first event goes in the nachdem-clause.',
      prompt: 'Ich räumte auf. Dann kamen die Gäste.',
      answers: ['Nachdem ich aufgeräumt hatte, kamen die Gäste.'],
      explanation: 'Earlier event: Plusquamperfekt (aufgeräumt hatte). Later event: Präteritum.',
    },
    {
      kind: 'transform',
      instruction: 'Join with nachdem.',
      prompt: 'Sie zog nach München. Dann fand sie eine neue Stelle.',
      answers: ['Nachdem sie nach München gezogen war, fand sie eine neue Stelle.'],
      explanation: 'ziehen (move) takes sein: gezogen war.',
    },
    {
      kind: 'gap',
      prompt: 'Ich konnte die Mail nicht lesen, weil ich mein Passwort ___ hatte.',
      answers: ['vergessen'],
      hint: 'vergessen',
      explanation: 'vergessen has no ge-: the Partizip II is vergessen.',
    },
  ],
}

export const temporaleNebensaetze: GrammarTopic = {
  id: 'temporale-nebensaetze',
  title: 'Temporale Nebensätze',
  english: 'Time clauses: als, wenn, während, bevor, seit, bis, sobald',
  level: 'B1',
  summary:
    'Time conjunctions start subordinate clauses, so the verb goes to the **end**. The classic trap is **als** vs **wenn**: *als* for a single event in the past, *wenn* for repeated events and for the present or future.',
  sections: [
    {
      heading: 'als or wenn?',
      body: [
        '**als**: one event or period in the past. "When I was a child", "when I arrived yesterday".',
        '**wenn**: repeated events in any tense ("whenever"), or present/future events.',
        'Test: can you say "whenever"? Then it is **wenn**.',
      ],
      examples: [
        {
          de: '**Als** ich in Wien war, habe ich die Oper besucht.',
          en: 'When I was in Vienna (once), I went to the opera.',
        },
        {
          de: '**Wenn** ich in Wien war, habe ich immer die Oper besucht.',
          en: 'Whenever I was in Vienna, I always went to the opera.',
        },
        { de: '**Wenn** du ankommst, ruf mich an.', en: 'When you arrive, call me.' },
      ],
    },
    {
      heading: 'The others',
      body: [
        '**während** (while): two things at the same time. **bevor** (before), **nachdem** (after: with the Plusquamperfekt, see that topic).',
        '**seit / seitdem** (since): from a point in the past until now, usually with the **present** tense in German.',
        '**bis** (until), **sobald** (as soon as), **solange** (as long as).',
      ],
      examples: [
        { de: '**Während** ich koche, kannst du den Tisch decken.', en: 'While I cook, you can lay the table.' },
        { de: '**Bevor** du gehst, mach bitte das Licht aus.', en: 'Before you go, please turn off the light.' },
        {
          de: '**Seit** ich in Berlin wohne, fahre ich nur noch Rad.',
          en: 'Since I have lived in Berlin, I only cycle.',
        },
        { de: 'Warte, **bis** ich zurück bin.', en: 'Wait until I am back.' },
        { de: '**Sobald** ich etwas weiß, melde ich mich.', en: "As soon as I know anything, I'll be in touch." },
      ],
    },
    {
      heading: 'Word order',
      body: [
        'If the time clause comes first, it fills position 1, so the main clause **starts with its verb**: Wenn es regnet, **bleiben** wir zu Hause.',
      ],
    },
  ],
  mistakes: [
    { wrong: 'Wenn ich ein Kind war, …', right: 'Als ich ein Kind war, …', why: 'A single period in the past: als.' },
    {
      wrong: 'Seit ich hier wohne, habe ich gearbeitet.',
      right: 'Seit ich hier wohne, arbeite ich hier.',
      why: 'seit + present when it still continues.',
    },
    {
      wrong: 'Bevor du gehst, du musst essen.',
      right: 'Bevor du gehst, musst du essen.',
      why: 'After the clause, the main clause starts with the verb.',
    },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: '___ ich 18 war, habe ich den Führerschein gemacht.',
      answers: ['Als'],
      hint: 'once, past',
      explanation: 'A single point in the past: als.',
    },
    {
      kind: 'gap',
      prompt: '___ ich Zeit habe, gehe ich schwimmen.',
      answers: ['Wenn'],
      hint: 'whenever',
      explanation: 'Repeated / general: wenn.',
    },
    {
      kind: 'gap',
      prompt: '___ wir im Urlaub waren, hat jemand bei uns eingebrochen.',
      answers: ['Während', 'Als'],
      hint: 'at the same time',
      explanation: 'während = while; als also works for a single past event.',
    },
    {
      kind: 'gap',
      prompt: 'Putz dir die Zähne, ___ du ins Bett gehst.',
      answers: ['bevor'],
      hint: 'before',
      explanation: 'bevor = before.',
    },
    {
      kind: 'gap',
      prompt: '___ ich den Job habe, bin ich viel zufriedener.',
      answers: ['Seit', 'Seitdem'],
      hint: 'since',
      explanation: 'seit(dem) + present for a situation that continues.',
    },
    {
      kind: 'gap',
      prompt: 'Ich warte hier, ___ der Regen aufhört.',
      answers: ['bis'],
      hint: 'until',
      explanation: 'bis = until.',
    },
    {
      kind: 'gap',
      prompt: '___ ich ankomme, schicke ich dir eine Nachricht.',
      answers: ['Sobald', 'Wenn'],
      hint: 'as soon as',
      explanation: 'sobald = as soon as (wenn also possible).',
    },
    {
      kind: 'gap',
      prompt: 'Immer ___ ich meine Oma besuchte, backte sie einen Kuchen.',
      answers: ['wenn'],
      hint: 'immer … = repeated',
      explanation: 'Repeated events in the past: wenn.',
    },
    {
      kind: 'choice',
      prompt: '___ ich gestern nach Hause kam, war niemand da.',
      options: ['Wenn', 'Als', 'Wann', 'Ob'],
      answer: 1,
      explanation: 'gestern = single past event: als. (wann is only for questions.)',
    },
    {
      kind: 'choice',
      prompt: 'Wenn ich Zeit habe, ___.',
      options: ['ich lese ein Buch', 'lese ich ein Buch', 'ich ein Buch lese', 'lese ein Buch ich'],
      answer: 1,
      explanation: 'The clause fills position 1; the main clause starts with the verb.',
    },
    {
      kind: 'order',
      words: ['Als', 'ich', 'in', 'London', 'gewohnt', 'habe,', 'habe', 'ich', 'kein', 'Deutsch', 'gesprochen.'],
      english: "When I lived in London, I didn't speak any German.",
      explanation: 'Verb at the end of the als-clause; main clause starts with habe.',
    },
    {
      kind: 'transform',
      instruction: 'Join with während, starting with während.',
      prompt: 'Ich fahre Auto. Ich höre Podcasts.',
      answers: ['Während ich Auto fahre, höre ich Podcasts.'],
      explanation: 'Verb last in the während-clause, then verb first in the main clause.',
    },
    {
      kind: 'transform',
      instruction: 'Join with bevor, starting with bevor.',
      prompt: 'Ich unterschreibe den Vertrag. Ich lese ihn genau.',
      answers: ['Bevor ich den Vertrag unterschreibe, lese ich ihn genau.'],
      explanation: 'Bevor + verb at the end, then main clause with the verb first.',
    },
  ],
}

export const konnektoren: GrammarTopic = {
  id: 'konnektoren',
  title: 'Konnektoren und Satzstellung',
  english: 'Connectors and the word order they trigger',
  level: 'B1',
  summary:
    'Connecting words fall into three groups, and each moves the verb differently. **und, aber, oder, denn, sondern** change nothing. **weil, dass, obwohl, wenn, …** send the verb to the end. **deshalb, trotzdem, außerdem, dann, …** take position 1, so the verb comes straight after them.',
  sections: [
    {
      heading: 'Three groups',
      body: [],
      table: {
        head: ['Group', 'Connectors', 'Word order'],
        rows: [
          ['Position 0', 'und, aber, oder, denn, sondern', 'Ich bleibe zu Hause, **denn** ich **bin** krank.'],
          [
            'Subordinating',
            'weil, da, dass, ob, obwohl, wenn, als, damit, …',
            'Ich bleibe zu Hause, **weil** ich krank **bin**.',
          ],
          [
            'Adverbs (position 1)',
            'deshalb, deswegen, darum, trotzdem, außerdem, sonst, dann, danach, also',
            'Ich bin krank, **deshalb bleibe** ich zu Hause.',
          ],
        ],
      },
    },
    {
      heading: 'Cause and consequence',
      body: [
        'Cause: **weil / da** (verb last) or **denn** (normal order).',
        'Consequence: **deshalb / deswegen / darum** (verb next).',
      ],
      examples: [
        {
          de: 'Ich lerne Deutsch, **weil** ich in Berlin **arbeite**.',
          en: 'I am learning German because I work in Berlin.',
        },
        {
          de: 'Ich arbeite in Berlin. **Deshalb lerne** ich Deutsch.',
          en: "I work in Berlin. That's why I'm learning German.",
        },
      ],
    },
    {
      heading: 'Contrast: obwohl vs trotzdem',
      body: [
        'Same meaning, different structure. **obwohl** introduces the obstacle with the verb at the end. **trotzdem** follows the obstacle and takes position 1.',
      ],
      examples: [
        {
          de: '**Obwohl** es **regnet**, gehen wir spazieren.',
          en: 'Although it is raining, we are going for a walk.',
        },
        { de: 'Es regnet. **Trotzdem gehen** wir spazieren.', en: 'It is raining. We are going for a walk anyway.' },
      ],
    },
  ],
  mistakes: [
    {
      wrong: 'Ich bin müde, deshalb ich gehe ins Bett.',
      right: 'Ich bin müde, deshalb gehe ich ins Bett.',
      why: 'deshalb is in position 1, so the verb follows immediately.',
    },
    {
      wrong: 'Ich bleibe zu Hause, denn ich krank bin.',
      right: 'Ich bleibe zu Hause, denn ich bin krank.',
      why: 'denn does not change the word order.',
    },
    {
      wrong: 'Trotzdem es regnet, …',
      right: 'Obwohl es regnet, … / Es regnet. Trotzdem …',
      why: 'trotzdem cannot start a subordinate clause.',
    },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: 'Ich habe Hunger, ___ ich habe nicht gefrühstückt.',
      answers: ['denn'],
      hint: 'because, normal word order',
      explanation: 'The verb stays in second place (ich habe), so it must be denn, not weil.',
    },
    {
      kind: 'gap',
      prompt: 'Es war sehr kalt. ___ sind wir schwimmen gegangen.',
      answers: ['Trotzdem'],
      hint: 'nevertheless',
      explanation: 'trotzdem in position 1, verb next.',
    },
    {
      kind: 'gap',
      prompt: '___ es sehr kalt war, sind wir schwimmen gegangen.',
      answers: ['Obwohl'],
      hint: 'although',
      explanation: 'obwohl + verb at the end.',
    },
    {
      kind: 'gap',
      prompt: 'Der Bus kam nicht, ___ bin ich zu Fuß gegangen.',
      answers: ['deshalb', 'deswegen', 'darum', 'also'],
      hint: "that's why",
      explanation: 'Consequence with the verb next: deshalb / deswegen / darum.',
    },
    {
      kind: 'gap',
      prompt: 'Ich kann nicht kommen, ___ ich arbeiten muss.',
      answers: ['weil', 'da'],
      hint: 'verb at the end',
      explanation: 'The verb is at the end, so it must be weil (or da).',
    },
    {
      kind: 'gap',
      prompt: 'Das ist nicht mein Handy, ___ deins.',
      answers: ['sondern'],
      hint: 'not … but',
      explanation: 'After a negative, "but rather" is sondern.',
    },
    {
      kind: 'gap',
      prompt: 'Die Wohnung ist zu teuer. ___ liegt sie zu weit vom Zentrum.',
      answers: ['Außerdem'],
      hint: 'besides',
      explanation: 'außerdem adds an argument; verb follows.',
    },
    {
      kind: 'gap',
      prompt: 'Zieh dir eine Jacke an, ___ erkältest du dich.',
      answers: ['sonst'],
      hint: 'otherwise',
      explanation: 'sonst = otherwise, position 1.',
    },
    {
      kind: 'choice',
      prompt: 'Ich lerne viel, ___ ich die Prüfung bestehen will.',
      options: ['deshalb', 'denn', 'weil', 'trotzdem'],
      answer: 2,
      explanation: 'The verb is at the end (will), so weil.',
    },
    {
      kind: 'choice',
      prompt: 'Ich hatte keine Zeit, ___ habe ich nicht angerufen.',
      options: ['denn', 'weil', 'deshalb', 'obwohl'],
      answer: 2,
      explanation: 'The verb comes right after the gap: deshalb.',
    },
    {
      kind: 'order',
      words: ['Er', 'ist', 'krank,', 'trotzdem', 'geht', 'er', 'zur', 'Arbeit.'],
      english: 'He is ill but he is going to work anyway.',
      explanation: 'trotzdem + verb + subject.',
    },
    {
      kind: 'transform',
      instruction: 'Rewrite with obwohl.',
      prompt: 'Sie hat wenig Geld. Trotzdem reist sie viel.',
      answers: ['Obwohl sie wenig Geld hat, reist sie viel.', 'Sie reist viel, obwohl sie wenig Geld hat.'],
      explanation: 'obwohl + verb last; if it starts the sentence, the main clause begins with the verb.',
    },
    {
      kind: 'transform',
      instruction: 'Rewrite with deshalb.',
      prompt: 'Ich lerne Deutsch, weil meine Freundin aus Köln kommt.',
      answers: [
        'Meine Freundin kommt aus Köln, deshalb lerne ich Deutsch.',
        'Meine Freundin kommt aus Köln. Deshalb lerne ich Deutsch.',
      ],
      explanation: 'The cause becomes a main clause; deshalb introduces the consequence with the verb next.',
    },
  ],
}
