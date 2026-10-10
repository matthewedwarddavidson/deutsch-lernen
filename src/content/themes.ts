import type { Theme, ThemeId } from './types'

export const THEMES: Theme[] = [
  { id: 'alltag', title: 'Alltag', english: 'Daily life' },
  { id: 'wohnen', title: 'Wohnen', english: 'Home and housing' },
  { id: 'arbeit', title: 'Arbeit und Beruf', english: 'Work and careers' },
  { id: 'gesundheit', title: 'Gesundheit', english: 'Health' },
  { id: 'reisen', title: 'Reisen und Verkehr', english: 'Travel and transport' },
  { id: 'medien', title: 'Medien und Technik', english: 'Media and technology' },
  { id: 'umwelt', title: 'Umwelt und Natur', english: 'Environment and nature' },
  { id: 'gesellschaft', title: 'Gesellschaft und Politik', english: 'Society and politics' },
  { id: 'bildung', title: 'Bildung und Lernen', english: 'Education and learning' },
  { id: 'freizeit', title: 'Freizeit und Kultur', english: 'Free time and culture' },
  { id: 'beziehungen', title: 'Beziehungen und Gefühle', english: 'Relationships and feelings' },
  { id: 'einkaufen', title: 'Einkaufen und Geld', english: 'Shopping and money' },
  { id: 'essen', title: 'Essen und Trinken', english: 'Food and drink' },
  { id: 'behoerden', title: 'Ämter und Dienstleistungen', english: 'Offices and services' },
  { id: 'redemittel', title: 'Redemittel', english: 'Useful phrases and connectors' },
  { id: 'eigene', title: 'Meine Wörter', english: 'My own words' },
]

export function themeById(id: ThemeId): Theme {
  return THEMES.find((theme) => theme.id === id)!
}
