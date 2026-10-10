import type { GrammarTopic } from '../types'

export const konnektorenC1: GrammarTopic = {
  id: 'konnektoren-c1',
  title: 'Konnektoren C1',
  english: 'zumal, wenngleich, wohingegen, insofern als, es sei denn, geschweige denn',
  level: 'C1',
  summary:
    'Connectors that sharpen an argument: an extra reason (**zumal**), a concession (**wenngleich, obgleich**), a contrast (**wohingegen**), a limit (**insofern als**), an exception (**es sei denn**) and an escalation (**geschweige denn**). Most send the verb to the end; *es sei denn* and *geschweige denn* do not.',
  sections: [
    {
      heading: 'Meanings',
      body: [],
      examples: [
        {
          de: 'Ich bleibe heute zu Hause, **zumal** es draußen in Strömen regnet.',
          en: "I'm staying in today, especially as it's pouring outside.",
        },
        {
          de: '**Wenngleich** die Lage schwierig ist, sind wir zuversichtlich.',
          en: 'Although the situation is difficult, we are confident.',
        },
        {
          de: 'Im Norden regnet es, **wohingegen** es im Süden sonnig bleibt.',
          en: 'It is raining in the north, whereas the south stays sunny.',
        },
        {
          de: 'Der Plan ist riskant, **insofern als** niemand die Kosten kennt.',
          en: 'The plan is risky in that nobody knows the costs.',
        },
        {
          de: 'Wir fahren morgen los, **es sei denn**, es schneit.',
          en: "We'll set off tomorrow, unless it snows.",
        },
        {
          de: 'Er kann kaum Englisch, **geschweige denn** Chinesisch.',
          en: 'He can barely speak English, let alone Chinese.',
        },
      ],
    },
    {
      heading: 'Word order',
      body: [
        '**zumal, wenngleich, obgleich, wohingegen, insofern als**: subordinating, so the verb goes to the end.',
        '**es sei denn**: followed by a comma and a main clause (verb second), or by *dass* with the verb at the end.',
        '**geschweige denn**: usually joins two words or phrases after a negative statement, not two clauses.',
      ],
    },
  ],
  mistakes: [
    {
      wrong: 'Ich komme nicht, zumal ich habe keine Zeit.',
      right: 'Ich komme nicht, zumal ich keine Zeit habe.',
      why: 'zumal is subordinating: verb at the end.',
    },
    {
      wrong: 'Sie kann schwimmen, geschweige denn tauchen.',
      right: 'Sie kann nicht schwimmen, geschweige denn tauchen.',
      why: 'geschweige denn only follows a negative or limiting statement.',
    },
  ],
  exercises: [
    {
      kind: 'choice',
      prompt: 'Ich nehme das Angebot an, ___ das Gehalt deutlich höher ist.',
      options: ['zumal', 'geschweige denn', 'es sei denn', 'wohingegen'],
      answer: 0,
      explanation: 'zumal adds a further, decisive reason.',
    },
    {
      kind: 'choice',
      prompt: 'Das Konzert findet statt, ___ es regnet stark.',
      options: ['wenngleich', 'es sei denn', 'zumal', 'insofern als'],
      answer: 1,
      explanation: 'es sei denn + main clause: an exception ("unless").',
    },
    {
      kind: 'choice',
      prompt: 'Mein Bruder liebt Großstädte, ___ ich lieber auf dem Land lebe.',
      options: ['wohingegen', 'zumal', 'geschweige denn', 'es sei denn'],
      answer: 0,
      explanation: 'wohingegen contrasts two subjects.',
    },
    {
      kind: 'choice',
      prompt: 'Ich habe keine Zeit zum Lesen, ___ zum Schreiben.',
      options: ['geschweige denn', 'zumal', 'wenngleich', 'wohingegen'],
      answer: 0,
      explanation: 'geschweige denn: "let alone", after a negative.',
    },
    {
      kind: 'choice',
      prompt: '___ er sich bemüht hat, hat er die Prüfung nicht bestanden.',
      options: ['Wenngleich', 'Zumal', 'Es sei denn', 'Geschweige denn'],
      answer: 0,
      explanation: 'wenngleich = obwohl, in a more formal register.',
    },
    {
      kind: 'gap',
      prompt: 'Die Studie ist nur begrenzt aussagekräftig, insofern ___ nur 50 Personen befragt wurden.',
      answers: ['als'],
      hint: 'insofern …',
      explanation: 'insofern als: "in that", limits a statement.',
    },
    {
      kind: 'order',
      words: ['Wir', 'gehen', 'spazieren,', 'zumal', 'die', 'Sonne', 'scheint.'],
      english: "We're going for a walk, especially as the sun is shining.",
      explanation: 'zumal sends the verb (scheint) to the end.',
    },
    {
      kind: 'order',
      words: ['Ich', 'helfe', 'dir', 'gern,', 'es', 'sei', 'denn,', 'du', 'willst', 'das', 'nicht.'],
      english: "I'm happy to help you, unless you don't want me to.",
      explanation: 'After es sei denn comes a main clause: verb second (willst).',
    },
  ],
}

export const doppelterInfinitiv: GrammarTopic = {
  id: 'doppelter-infinitiv',
  title: 'Doppelter Infinitiv',
  english: 'hat kommen müssen, hätte anrufen sollen: modals in the perfect',
  level: 'C1',
  summary:
    'In the perfect, a modal verb (and *lassen, sehen, hören*) used with another verb stays in the infinitive: *Ich habe arbeiten **müssen***, not *gemusst*. In a subordinate clause, *haben* jumps **in front of** both infinitives: *…, weil ich **habe** arbeiten müssen*.',
  sections: [
    {
      heading: 'Main clause',
      body: ['**haben** + infinitive + modal infinitive.'],
      examples: [
        { de: 'Ich **habe** gestern lange arbeiten **müssen**.', en: 'I had to work late yesterday.' },
        { de: 'Sie **hat** das Auto reparieren **lassen**.', en: 'She had the car repaired.' },
        { de: 'Du **hättest** früher anrufen **sollen**.', en: 'You should have called earlier.' },
      ],
    },
    {
      heading: 'Subordinate clause',
      body: [
        'The conjugated *haben* does not go to the very end. It comes **before** the two infinitives.',
        'This also applies to *werden* in the future: *…, dass er morgen **wird** kommen müssen.*',
      ],
      examples: [
        {
          de: 'Ich war müde, weil ich gestern lange **habe** arbeiten müssen.',
          en: 'I was tired because I had to work late yesterday.',
        },
        {
          de: 'Es ist schade, dass wir nicht **haben** kommen können.',
          en: "It's a pity we couldn't come.",
        },
        {
          de: 'Ich weiß, dass ich ihn früher **hätte** fragen sollen.',
          en: 'I know I should have asked him earlier.',
        },
      ],
    },
    {
      heading: 'Without a second verb',
      body: [
        'When the modal stands alone, use the normal participle: *Das habe ich nicht **gewollt**. Ich habe es nicht **gekonnt**.*',
      ],
    },
  ],
  mistakes: [
    {
      wrong: 'Ich habe arbeiten gemusst.',
      right: 'Ich habe arbeiten müssen.',
      why: 'With another verb, the modal stays an infinitive.',
    },
    {
      wrong: '…, weil ich arbeiten müssen habe.',
      right: '…, weil ich habe arbeiten müssen.',
      why: 'In a subordinate clause, haben comes before the double infinitive.',
    },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: 'Ich habe gestern nicht schlafen ___.',
      answers: ['können'],
      hint: 'können',
      explanation: 'Double infinitive: schlafen können.',
    },
    {
      kind: 'gap',
      prompt: 'Wir haben die Heizung reparieren ___.',
      answers: ['lassen'],
      hint: 'have something done',
      explanation: 'lassen also forms a double infinitive.',
    },
    {
      kind: 'gap',
      prompt: 'Du ___ mir das früher sagen sollen.',
      answers: ['hättest'],
      hint: 'should have (Konjunktiv II)',
      explanation: 'hätte + infinitive + sollen: reproach about the past.',
    },
    {
      kind: 'choice',
      prompt: 'Das habe ich wirklich nicht ___.',
      options: ['gewollt', 'wollen', 'zu wollen', 'gewollen'],
      answer: 0,
      explanation: 'No second verb, so the normal participle gewollt.',
    },
    {
      kind: 'transform',
      instruction: 'Put into the perfect.',
      prompt: 'Er musste lange warten.',
      answers: ['Er hat lange warten müssen.'],
      explanation: 'hat + warten + müssen.',
    },
    {
      kind: 'transform',
      instruction: 'Start with "Sie war enttäuscht, weil …".',
      prompt: 'Sie hat nicht mitkommen dürfen.',
      answers: ['Sie war enttäuscht, weil sie nicht hat mitkommen dürfen.'],
      explanation: 'In the subordinate clause, hat moves before the infinitives.',
    },
    {
      kind: 'order',
      words: ['Es', 'tut', 'mir', 'leid,', 'dass', 'ich', 'nicht', 'habe', 'kommen', 'können.'],
      english: "I'm sorry I couldn't come.",
      explanation: 'habe + kommen + können at the end of the dass clause.',
    },
    {
      kind: 'order',
      words: ['Wir', 'hätten', 'früher', 'losfahren', 'sollen.'],
      english: 'We should have set off earlier.',
      explanation: 'hätten … losfahren sollen: Konjunktiv II past with a modal.',
    },
  ],
}

export const genitivPraepositionen: GrammarTopic = {
  id: 'genitiv-praepositionen',
  title: 'Präpositionen mit Genitiv (C1)',
  english: 'angesichts, hinsichtlich, aufgrund, infolge, mangels, zwecks, ungeachtet',
  level: 'C1',
  summary:
    'Formal writing uses many Genitiv prepositions beyond *wegen* and *trotz*. They make text dense and precise, and they turn up constantly in news, reports and C1 exams. **zufolge** is the odd one: it follows its noun and takes the Dativ.',
  sections: [
    {
      heading: 'Common formal prepositions',
      body: [],
      table: {
        head: ['Preposition', 'Meaning', 'Example'],
        rows: [
          ['angesichts', 'in view of', 'angesichts der hohen Kosten'],
          ['hinsichtlich', 'regarding', 'hinsichtlich Ihrer Anfrage'],
          ['aufgrund', 'due to', 'aufgrund des Streiks'],
          ['infolge', 'as a result of', 'infolge des Unfalls'],
          ['mangels', 'for lack of', 'mangels Beweisen'],
          ['zwecks', 'for the purpose of', 'zwecks Anmeldung'],
          ['ungeachtet', 'regardless of', 'ungeachtet der Kritik'],
          ['anlässlich', 'on the occasion of', 'anlässlich seines Geburtstags'],
          ['seitens', 'on the part of', 'seitens der Behörden'],
          ['zufolge (+ D, after the noun)', 'according to', 'dem Bericht zufolge'],
        ],
      },
    },
    {
      heading: 'Without an article',
      body: [
        'A plural noun with no article or adjective shows no Genitiv ending, so the Dativ is used instead: *mangels Beweis**en***, or *von* is added: *aufgrund **von** Problemen*.',
      ],
    },
  ],
  mistakes: [
    {
      wrong: 'zufolge dem Bericht',
      right: 'dem Bericht zufolge',
      why: 'zufolge follows its noun and takes the Dativ.',
    },
    {
      wrong: 'aufgrund dem schlechten Wetter',
      right: 'aufgrund des schlechten Wetters',
      why: 'aufgrund takes the Genitiv.',
    },
  ],
  exercises: [
    {
      kind: 'choice',
      prompt: '___ der hohen Nachfrage verlängern wir die Ausstellung.',
      options: ['Angesichts', 'Zufolge', 'Mangels', 'Zwecks'],
      answer: 0,
      explanation: 'angesichts: in view of.',
    },
    {
      kind: 'choice',
      prompt: 'Das Verfahren wurde ___ Beweisen eingestellt.',
      options: ['mangels', 'anlässlich', 'hinsichtlich', 'seitens'],
      answer: 0,
      explanation: 'mangels: for lack of.',
    },
    {
      kind: 'choice',
      prompt: 'Den Experten ___ wird die Inflation bald sinken.',
      options: ['zufolge', 'aufgrund', 'infolge', 'ungeachtet'],
      answer: 0,
      explanation: 'zufolge follows a Dativ noun: den Experten zufolge.',
    },
    {
      kind: 'choice',
      prompt: '___ seines 80. Geburtstags gab es ein großes Fest.',
      options: ['Anlässlich', 'Mangels', 'Zwecks', 'Seitens'],
      answer: 0,
      explanation: 'anlässlich: on the occasion of.',
    },
    {
      kind: 'gap',
      prompt: 'Aufgrund ___ Streiks fallen viele Züge aus.',
      answers: ['des'],
      hint: 'der Streik',
      explanation: 'aufgrund + Genitiv: des Streiks.',
    },
    {
      kind: 'gap',
      prompt: 'Ungeachtet ___ Kritik hielt die Regierung an ihrem Plan fest.',
      answers: ['der'],
      hint: 'die Kritik',
      explanation: 'ungeachtet + Genitiv, feminine: der Kritik.',
    },
    {
      kind: 'transform',
      instruction: 'Rewrite with "infolge".',
      prompt: 'Weil es einen Unfall gab, war die Autobahn gesperrt.',
      answers: ['Infolge eines Unfalls war die Autobahn gesperrt.', 'Infolge des Unfalls war die Autobahn gesperrt.'],
      explanation: 'Nominal style: infolge + Genitiv replaces the weil clause.',
    },
    {
      kind: 'transform',
      instruction: 'Rewrite with "hinsichtlich".',
      prompt: 'Was Ihre Anfrage betrifft, können wir Ihnen leider nicht helfen.',
      answers: ['Hinsichtlich Ihrer Anfrage können wir Ihnen leider nicht helfen.'],
      explanation: 'hinsichtlich + Genitiv: Ihrer Anfrage.',
    },
  ],
}
