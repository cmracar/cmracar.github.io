import YelkenView from '../../_views/YelkenView'
import { alternates } from '../../i18n'

export const metadata = {
  title: 'Yelken: Kelime Oyunu & Bulmaca — Word Game & Puzzle',
  description:
    'Yelken is a word puzzle — play in your own language or learn a new one. Turkish, English and Spanish. Built by Cemre Acar.',
  alternates: alternates('/yelken', 'en'),
  openGraph: {
    title: 'Yelken: Kelime Oyunu & Bulmaca',
    description: 'A word puzzle: play in your own language or learn a new one.',
    url: 'https://www.cemreacar.com/en/yelken',
    siteName: 'Cemre Acar',
    images: ['/yelken/og.png'],
    locale: 'en_US',
    type: 'website',
  },
}

export default function YelkenPageEn() {
  return <YelkenView lang="en" />
}
