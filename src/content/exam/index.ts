import { LESEN_B1 } from './lesen-b1'
import type { HoerenSet, LesenSet } from './types'

export type { ExamItem, ExamText, HoerenSet, LesenSet } from './types'

export const LESEN_SETS: LesenSet[] = [...LESEN_B1]

export const HOEREN_SETS: HoerenSet[] = [
  {
    id: 'hoeren-b1-1',
    title: 'Übungssatz 1',
    level: 'B1',
    parts: [
      {
        teil: 1,
        scriptId: 'kurze-nachrichten-teil1',
        plays: 2,
        instructions: 'Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Lesen Sie zuerst die Aufgaben.',
      },
      {
        teil: 2,
        scriptId: 'fuehrung-schokoladenfabrik',
        plays: 1,
        instructions: 'Sie hören einen Text. Sie hören den Text einmal. Lesen Sie zuerst die Aufgaben.',
      },
      {
        teil: 3,
        scriptId: 'gespraech-urlaubsplaene',
        plays: 1,
        instructions:
          'Sie hören ein Gespräch. Sie hören das Gespräch einmal. Sind die Aussagen richtig oder falsch? Lesen Sie zuerst die Aussagen.',
      },
      {
        teil: 4,
        scriptId: 'diskussion-handy-schule',
        plays: 2,
        instructions: 'Sie hören eine Diskussion. Sie hören die Diskussion zweimal. Lesen Sie zuerst die Aufgaben.',
      },
    ],
  },
]
