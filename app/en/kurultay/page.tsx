import KurultayView from '../../_views/KurultayView'
import { alternates } from '../../i18n'

export const metadata = {
  title: 'Kurultay | Steppe Defence',
  description:
    'Kurultay: build your camp on the steppe, defend it against raids with Gökbörü by night, migrate when the grassland runs out. Built by Cemre Acar.',
  alternates: alternates('/kurultay', 'en'),
  openGraph: {
    title: 'Kurultay | Steppe Defence',
    description: 'Hero-controlled base defence, migration and light roguelite; for Android and iOS.',
    url: 'https://www.cemreacar.com/en/kurultay',
    siteName: 'Cemre Acar',
    images: ['/kurultay/home.jpg'],
    locale: 'en_US',
    type: 'website',
  },
}

export default function KurultayPageEn() {
  return <KurultayView lang="en" />
}
