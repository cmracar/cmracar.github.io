import KurultayView from '../_views/KurultayView'
import { alternates } from '../i18n'

export const metadata = {
  title: 'Kurultay: Bozkır Savunması',
  description:
    'Kurultay: bozkırda obanı kur, geceleri akınlara karşı Gökbörü ile savun, otlak tükenince göç et. App Store’da ücretsiz. Cemre Acar’ın oyunu.',
  alternates: alternates('/kurultay', 'tr'),
  openGraph: {
    title: 'Kurultay: Bozkır Savunması',
    description: 'Kahraman kontrollü üs savunması, göç ve hafif roguelite; App Store’da ücretsiz.',
    url: 'https://www.cemreacar.com/kurultay',
    siteName: 'Cemre Acar Portfolio',
    images: ['/kurultay/screens/tr/01.jpg'],
    type: 'website',
  },
}

export default function KurultayPage() {
  return <KurultayView lang="tr" />
}
