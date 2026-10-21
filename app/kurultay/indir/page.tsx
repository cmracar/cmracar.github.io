import DownloadRedirect from './DownloadRedirect'

/**
 * Sosyal medya için tek indirme adresi (2026-10-21): www.cemreacar.com/kurultay/indir
 * Instagram profil bağlantısı, hikâye bağlantı etiketi, YouTube ve Facebook açıklamaları buraya gelir.
 * iPhone/iPad → App Store; Android → Google Play (Play canlıysa, değilse Kurultay sayfası); masaüstü → Kurultay sayfası.
 * Mağaza adresleri ve canlılık `app/yelken/stores.ts`'ten okunur; Play üretime çıkınca orada `live: true` yeterli.
 */
export const metadata = {
  title: 'Kurultay: Bozkır Savunması · İndir',
  description: 'Kurultay’ı indir: App Store ve Google Play.',
  robots: { index: false },
  openGraph: {
    title: 'Kurultay: Bozkır Savunması',
    description: 'Obanı kur, gece akınlarını karşıla, göç et ve bozkırda Han seçil. Ücretsiz.',
    url: 'https://www.cemreacar.com/kurultay/indir',
    images: ['/kurultay/screens/tr/01.jpg'],
    type: 'website',
  },
}

export default function KurultayDownload() {
  return <DownloadRedirect />
}
