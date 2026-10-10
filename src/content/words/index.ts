import { parseWords } from '../parseWords'
import type { ThemeId, Word } from '../types'
import allgemein from './allgemein'
import allgemein2 from './allgemein2'
import alltag from './alltag'
import arbeit from './arbeit'
import behoerden from './behoerden'
import beziehungen from './beziehungen'
import bildung from './bildung'
import einkaufen from './einkaufen'
import essen from './essen'
import freizeit from './freizeit'
import gesellschaft from './gesellschaft'
import gesundheit from './gesundheit'
import medien from './medien'
import redemittel from './redemittel'
import reisen from './reisen'
import umwelt from './umwelt'
import wohnen from './wohnen'

const SOURCES: [ThemeId, string][] = [
  ['alltag', alltag],
  ['wohnen', wohnen],
  ['arbeit', arbeit],
  ['gesundheit', gesundheit],
  ['reisen', reisen],
  ['medien', medien],
  ['umwelt', umwelt],
  ['gesellschaft', gesellschaft],
  ['bildung', bildung],
  ['freizeit', freizeit],
  ['beziehungen', beziehungen],
  ['einkaufen', einkaufen],
  ['essen', essen],
  ['behoerden', behoerden],
  ['allgemein', allgemein],
  ['allgemein', allgemein2],
  ['redemittel', redemittel],
]

export const BUILT_IN_WORDS: Word[] = SOURCES.flatMap(([theme, source]) => parseWords(source, theme))
