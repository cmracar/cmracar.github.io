/**
 * Sitenin iki dili: Türkçe (varsayılan, kök adresler) ve İngilizce (/en altında).
 *
 * Türkçe adresler mağazalara ve uygulamalara kayıtlı; yerlerini değiştirme.
 * İngilizce sayfalar yalnızca /en altına eklenir. Yasal sayfalar zaten kendi
 * dillerinde ayrı adreslerde (gizlilik ↔ privacy …); dil seçici onları eşler.
 */
export type Lang = 'tr' | 'en'

export const SITE = 'https://www.cemreacar.com'

/** [Türkçe adres, İngilizce adres] */
const PAIRS: [string, string][] = [
  ['/', '/en'],
  ['/projects', '/en/projects'],
  ['/about', '/en/about'],
  ['/yazilar', '/en/writing'],
  ['/yelken', '/en/yelken'],
  ['/kurultay', '/en/kurultay'],
  ['/yelken/gizlilik', '/yelken/privacy'],
  ['/yelken/kosullar', '/yelken/terms'],
  ['/yelken/hesap-silme', '/yelken/delete-account'],
  ['/kurultay/gizlilik', '/kurultay/privacy'],
  ['/kurultay/kosullar', '/kurultay/terms'],
  ['/kurultay/hesap-silme', '/kurultay/delete-account'],
]

/** İspanyolca yasal sayfalar: başlık ve menü İngilizce, dil seçici TR/EN karşılığına gider. */
const SPANISH: Record<string, [string, string]> = {
  '/yelken/privacidad': ['/yelken/gizlilik', '/yelken/privacy'],
  '/yelken/condiciones': ['/yelken/kosullar', '/yelken/terms'],
  '/yelken/eliminar-cuenta': ['/yelken/hesap-silme', '/yelken/delete-account'],
}

const clean = (p: string) => (p.length > 1 ? p.replace(/\/$/, '') : p)

/** Sayfanın arayüz dili (başlık, menü, alt bilgi). */
export function langOfPath(pathname: string): Lang {
  const p = clean(pathname)
  if (p === '/en' || p.startsWith('/en/')) return 'en'
  if (SPANISH[p]) return 'en'
  return PAIRS.some(([, en]) => en === p) ? 'en' : 'tr'
}

/** Aynı sayfanın istenen dildeki adresi; karşılığı yoksa o dilin ana sayfası. */
export function pathIn(pathname: string, lang: Lang): string {
  const p = clean(pathname)
  if (SPANISH[p]) return lang === 'tr' ? SPANISH[p][0] : SPANISH[p][1]
  const pair = PAIRS.find(([tr, en]) => tr === p || en === p)
  if (pair) return lang === 'tr' ? pair[0] : pair[1]
  return lang === 'tr' ? '/' : '/en'
}

/** Türkçe adresten o dildeki adres (sayfa içi bağlantılar için). */
export const href = (lang: Lang, trPath: string) => pathIn(trPath, lang)

/** Next.js metadata: kanonik adres ve hreflang karşılıkları. */
export function alternates(trPath: string, lang: Lang) {
  const tr = pathIn(trPath, 'tr')
  const en = pathIn(trPath, 'en')
  return {
    canonical: `${SITE}${lang === 'tr' ? tr : en}`,
    languages: { tr: `${SITE}${tr}`, en: `${SITE}${en}`, 'x-default': `${SITE}${tr}` },
  }
}

/** Küçük çeviri yardımcısı: t(lang, { tr: '…', en: '…' }) */
export const t = <T,>(lang: Lang, v: { tr: T; en: T }): T => v[lang]
