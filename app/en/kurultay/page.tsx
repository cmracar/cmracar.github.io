import KurultayView from '../../_views/KurultayView'
import { alternates } from '../../i18n'

export const metadata = {
  title: 'Kurultay: Steppe Defense',
  description:
    'Kurultay: build your camp on the steppe, hold the night raids with Gökbörü, migrate when the pasture runs dry and be named Khan. Built by Cemre Acar.',
  alternates: alternates('/kurultay', 'en'),
  openGraph: {
    title: 'Kurultay: Steppe Defense',
    description: 'Hero-controlled base defence, migration and light roguelite; for Android and iOS.',
    url: 'https://www.cemreacar.com/en/kurultay',
    siteName: 'Cemre Acar',
    images: ['/kurultay/screens/en/01.jpg'],
    locale: 'en_US',
    type: 'website',
  },
}

export default function KurultayPageEn() {
  return <KurultayView lang="en" />
}
