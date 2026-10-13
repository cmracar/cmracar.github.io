import data from '../projects.json'
import type { Lang } from './i18n'

export type Category = 'carbon' | 'beyondguard' | 'freelance'

/** projects.json'u istenen dilde okur; İngilizce alan yoksa Türkçesine düşer. */
export function localizedProjects(lang: Lang) {
  return data.map(p => {
    const x = p as typeof p & {
      projectName_en?: string
      description_en?: string
      highlights?: string[]
      highlights_en?: string[]
      stores?: string
    }
    const en = lang === 'en'
    return {
      key: x.projectName,
      title: (en && x.projectName_en) || x.projectName,
      desc: (en && x.description_en) || x.description,
      highlights: (en && x.highlights_en) || x.highlights || [],
      live: x.preview,
      done: x.isCompleted,
      technologies: x.technologies.filter(t => t !== 'HTML' && t !== 'CSS'),
      category: x.category as Category,
      // Mağaza rozetleri şimdilik yalnızca Yelken'de.
      stores: x.stores ?? null,
    }
  })
}
