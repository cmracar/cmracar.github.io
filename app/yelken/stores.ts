/**
 * Yelken'in mağaza sayfaları — ana sayfa, /yelken ve Projelerim buradan okur.
 *
 * Uygulama bir mağazada **herkese açık** yayına girince o mağazanın `live`
 * değerini `true` yap: "Yakında" rozeti resmî, tıklanabilir rozete döner ve
 * durum etiketi güncellenir. Apple ve Google resmî rozetin yalnızca canlı
 * sayfaya bağlanmasına izin veriyor; kapalı testteyken bağlantı 404 verir.
 */
export const YELKEN_STORES = {
  appStore: {
    name: 'App Store',
    locative: 'App Store’da',
    url: 'https://apps.apple.com/app/id6814854315',
    live: false,
  },
  googlePlay: {
    name: 'Google Play',
    locative: 'Google Play’de',
    url: 'https://play.google.com/store/apps/details?id=io.github.cmracar.yelken',
    live: true,
  },
} as const

export type StoreKey = keyof typeof YELKEN_STORES

export function yelkenStatus(lang: 'tr' | 'en' = 'tr'): { label: string; live: boolean } {
  const live = (Object.keys(YELKEN_STORES) as StoreKey[]).filter(key => YELKEN_STORES[key].live)
  if (live.length === 2)
    return { label: lang === 'en' ? 'On the App Store and Google Play' : 'App Store ve Google Play’de', live: true }
  if (live.length === 1) {
    const store = YELKEN_STORES[live[0]]
    return { label: lang === 'en' ? `Live on ${store.name}` : `${store.locative} yayında`, live: true }
  }
  return { label: lang === 'en' ? 'Preparing for release' : 'Yayına hazırlanıyor', live: false }
}
