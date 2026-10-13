import YelkenView from '../_views/YelkenView'
import { alternates } from '../i18n'

export const metadata = {
  title: 'Yelken: Kelime Oyunu & Bulmaca',
  description:
    'Yelken: Kelime Oyunu & Bulmaca — kare bulmaca, kelime avı, adam asmaca, kelime türetme ve sefer. İnternetsiz oyna ya da dil öğren. Cemre Acar tarafından geliştirildi.',
  alternates: alternates('/yelken', 'tr'),
  openGraph: {
    title: 'Yelken: Kelime Oyunu & Bulmaca',
    description: 'Beş kelime oyunu tek bir denizde: internetsiz oyna ya da dil öğren.',
    url: 'https://www.cemreacar.com/yelken',
    siteName: 'Cemre Acar Portfolio',
    images: ['/yelken/og.png'],
    type: 'website',
  },
}

export default function YelkenPage() {
  return <YelkenView lang="tr" />
}
