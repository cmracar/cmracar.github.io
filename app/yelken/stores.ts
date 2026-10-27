/**
 * Uygulamaların mağaza sayfaları — ana sayfa, /yelken, /kurultay ve Projelerim
 * buradan okur.
 *
 * Uygulama bir mağazada **herkese açık** yayına girince o mağazanın `live`
 * değerini `true` yap: "Yakında" rozeti resmî, tıklanabilir rozete döner ve
 * durum etiketi güncellenir. Apple ve Google resmî rozetin yalnızca canlı
 * sayfaya bağlanmasına izin veriyor; kapalı testteyken bağlantı 404 verir.
 */
export const APP_STORES = {
  yelken: {
    appStore: {
      name: 'App Store',
      locative: 'App Store’da',
      url: 'https://apps.apple.com/app/id6814854315',
      live: true,
    },
    googlePlay: {
      name: 'Google Play',
      locative: 'Google Play’de',
      url: 'https://play.google.com/store/apps/details?id=io.github.cmracar.yelken',
      live: true,
    },
  },
  kurultay: {
    appStore: {
      name: 'App Store',
      locative: 'App Store’da',
      url: 'https://apps.apple.com/app/id6819175567',
      live: true,
    },
    googlePlay: {
      name: 'Google Play',
      locative: 'Google Play’de',
      url: 'https://play.google.com/store/apps/details?id=io.github.cmracar.kurultay',
      live: true,
    },
  },
} as const

export type AppKey = keyof typeof APP_STORES
export type StoreKey = 'appStore' | 'googlePlay'
export const STORE_KEYS: StoreKey[] = ['appStore', 'googlePlay']

export function storeStatus(app: AppKey, lang: 'tr' | 'en' = 'tr'): { label: string; live: boolean } {
  const stores = APP_STORES[app]
  const live = STORE_KEYS.filter(key => stores[key].live)
  if (live.length === 2)
    return { label: lang === 'en' ? 'On the App Store and Google Play' : 'App Store ve Google Play’de', live: true }
  if (live.length === 1) {
    const store = stores[live[0]]
    return { label: lang === 'en' ? `Live on ${store.name}` : `${store.locative} yayında`, live: true }
  }
  return { label: lang === 'en' ? 'Preparing for release' : 'Yayına hazırlanıyor', live: false }
}

export function yelkenStatus(lang: 'tr' | 'en' = 'tr') {
  return storeStatus('yelken', lang)
}
