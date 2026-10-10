import type { GrammarTopic } from '../types'

export const konjunktiv2: GrammarTopic = {
  id: 'konjunktiv-ii',
  title: 'Konjunktiv II',
  english: 'The subjunctive: wishes, politeness, hypotheticals',
  level: 'B1',
  summary:
    'Konjunktiv II is for things that are not real: wishes, advice, polite requests and "if" situations. Most verbs use **würde** + infinitive. A few common verbs have their own forms: **wäre, hätte, könnte, müsste, dürfte, sollte, wüsste, käme, ginge**.',
  sections: [
    {
      heading: 'würde + infinitive',
      body: [
        'For most verbs: **würde** (conjugated) + infinitive at the end. This is the English "would".',
      ],
      table: {
        head: ['', 'würde', 'sein', 'haben', 'können'],
        rows: [
          ['ich', 'würde', 'wäre', 'hätte', 'könnte'],
          ['du', 'würdest', 'wärst', 'hättest', 'könntest'],
          ['er/sie/es', 'würde', 'wäre', 'hätte', 'könnte'],
          ['wir', 'würden', 'wären', 'hätten', 'könnten'],
          ['ihr', 'würdet', 'wärt', 'hättet', 'könntet'],
          ['sie/Sie', 'würden', 'wären', 'hätten', 'könnten'],
        ],
      },
      examples: [
        { de: 'Ich **würde** gern mehr **reisen**.', en: 'I would like to travel more.' },
      ],
    },
    {
      heading: 'Verbs with their own form',
      body: [
        'Use the one-word form for **sein, haben** and the **modal verbs**. Don\'t say "würde sein" or "würde haben".',
        'Modals: können → **könnte**, müssen → **müsste**, dürfen → **dürfte**, sollen → **sollte**, wollen → **wollte**. Also common: wissen → **wüsste**, kommen → **käme**, gehen → **ginge**, geben → **gäbe**.',
      ],
      examples: [
        { de: 'Wenn ich Zeit **hätte**, **wäre** ich glücklicher.', en: 'If I had time, I would be happier.' },
        { de: 'Ich **wüsste** gern, warum.', en: 'I would like to know why.' },
      ],
    },
    {
      heading: 'Four uses',
      body: [
        '**Polite requests**: Könnten Sie …? Würden Sie …? Hätten Sie …?',
        '**Wishes**: Ich wünschte, … / Wenn … doch nur …!',
        '**Advice**: Du solltest … / An deiner Stelle würde ich …',
        '**Unreal conditions**: Wenn ich reich wäre, würde ich … The verb goes to the end of the wenn-clause; the main clause starts with its verb.',
      ],
      examples: [
        { de: '**Könnten** Sie mir bitte helfen?', en: 'Could you help me, please?' },
        { de: 'Wenn ich **doch nur** mehr Zeit **hätte**!', en: 'If only I had more time!' },
        { de: 'An deiner Stelle **würde** ich zum Arzt **gehen**.', en: 'If I were you, I would go to the doctor.' },
        { de: 'Wenn ich im Lotto **gewinnen würde**, **würde** ich eine Weltreise **machen**.', en: 'If I won the lottery, I would travel round the world.' },
      ],
    },
    {
      heading: 'The past: hätte / wäre + Partizip II',
      body: [
        'For things that did not happen in the past, use **hätte** or **wäre** + Partizip II. Choose hätte/wäre as you would choose haben/sein in the Perfekt.',
        'With a modal verb: **hätte** + infinitive + modal infinitive: Ich hätte früher kommen **sollen**.',
      ],
      examples: [
        { de: 'Wenn ich das **gewusst hätte**, **wäre** ich nicht **gekommen**.', en: 'If I had known that, I wouldn\'t have come.' },
        { de: 'Du **hättest** mich anrufen **können**.', en: 'You could have called me.' },
      ],
    },
  ],
  mistakes: [
    { wrong: 'Wenn ich reich würde sein …', right: 'Wenn ich reich wäre …', why: 'sein and haben use wäre and hätte, not würde.' },
    { wrong: 'Wenn ich Zeit hätte, ich würde kommen.', right: 'Wenn ich Zeit hätte, würde ich kommen.', why: 'The wenn-clause fills position one, so the main clause starts with the verb.' },
    { wrong: 'Ich hätte gekommen.', right: 'Ich wäre gekommen.', why: 'kommen takes sein in the Perfekt, so wäre in Konjunktiv II past.' },
  ],
  exercises: [
    { kind: 'gap', prompt: 'Wenn ich mehr Geld ___, würde ich ein Haus kaufen.', answers: ['hätte'], hint: 'haben', explanation: 'haben → hätte. No würde with haben.' },
    { kind: 'gap', prompt: '___ Sie mir bitte das Salz geben?', answers: ['Könnten', 'Würden'], hint: 'polite request', explanation: 'Polite request: Könnten Sie … ? or Würden Sie … ?' },
    { kind: 'gap', prompt: 'Es ___ schön, wenn du mitkommen würdest.', answers: ['wäre'], hint: 'sein', explanation: 'sein → wäre.' },
    { kind: 'gap', prompt: 'Du ___ mehr schlafen. Du siehst müde aus.', answers: ['solltest'], hint: 'advice, sollen', explanation: 'Advice: du solltest.' },
    { kind: 'gap', prompt: 'Ich ___ gern wissen, wann der Zug ankommt.', answers: ['würde', 'möchte'], hint: 'polite wish', explanation: 'Ich würde gern wissen … (or ich möchte wissen).' },
    { kind: 'gap', prompt: 'Wenn ich du ___, würde ich das nicht machen.', answers: ['wäre'], hint: 'sein, ich', explanation: 'Wenn ich du wäre … = If I were you.' },
    { kind: 'gap', prompt: 'Wenn wir früher losgefahren ___, hätten wir den Zug erreicht.', answers: ['wären'], hint: 'losfahren takes sein', explanation: 'Past unreal: wären + Partizip II, because losfahren takes sein.' },
    { kind: 'gap', prompt: 'Ich hätte dir gern geholfen, aber ich ___ keine Zeit.', answers: ['hatte'], hint: 'this part was real', explanation: 'The second half is a fact, so it is normal Präteritum: hatte.' },
    {
      kind: 'choice',
      prompt: 'Wenn ich Zeit hätte, ___ ich dich besuchen.',
      options: ['werde', 'würde', 'wurde', 'wäre'],
      answer: 1,
      explanation: 'würde + infinitive in the main clause of an unreal condition.',
    },
    {
      kind: 'choice',
      prompt: 'Du ___ mich wenigstens anrufen können!',
      options: ['hättest', 'wärst', 'würdest', 'hattest'],
      answer: 0,
      explanation: 'Past with a modal: hättest + anrufen + können.',
    },
    {
      kind: 'order',
      words: ['Wenn', 'ich', 'Zeit', 'hätte,', 'würde', 'ich', 'mehr', 'lesen.'],
      english: 'If I had time, I would read more.',
      explanation: 'Verb last in the wenn-clause; the main clause starts with würde.',
    },
    {
      kind: 'transform',
      instruction: 'Make it a polite request with Konjunktiv II.',
      prompt: 'Können Sie das Fenster schließen?',
      answers: ['Könnten Sie das Fenster schließen?', 'Würden Sie das Fenster schließen?', 'Könnten Sie bitte das Fenster schließen?', 'Würden Sie bitte das Fenster schließen?'],
      explanation: 'können → könnten makes it more polite.',
    },
    {
      kind: 'transform',
      instruction: 'Turn the fact into an unreal wish with "Wenn … doch nur".',
      prompt: 'Ich habe keine Zeit.',
      answers: ['Wenn ich doch nur Zeit hätte!', 'Wenn ich nur Zeit hätte!', 'Wenn ich doch Zeit hätte!'],
      explanation: 'Wish: Wenn + subject + doch nur + … + Konjunktiv II at the end. The negative fact becomes positive.',
    },
    {
      kind: 'transform',
      instruction: 'Rewrite as an unreal condition in the past.',
      prompt: 'Ich habe es nicht gewusst. Ich habe nichts gesagt.',
      answers: ['Wenn ich es gewusst hätte, hätte ich etwas gesagt.'],
      explanation: 'Both facts are negative, so the unreal version is positive: hätte gewusst … hätte gesagt.',
    },
  ],
}
