import YelkenView from '../../_views/YelkenView'
import { alternates } from '../../i18n'

export const metadata = {
  title: 'Yelken: Word Game & Puzzles',
  description:
    'Yelken brings six word games together on one helm: crossword, word search, hangman, word connect, Free Voyage and Duel. Free on the App Store and Google Play; play offline or learn a language. Built by Cemre Acar.',
  alternates: alternates('/yelken', 'en'),
  openGraph: {
    title: 'Yelken: Word Game & Puzzles',
    description: 'Six word games, one helm. Free on iPhone and Android.',
    url: 'https://www.cemreacar.com/en/yelken',
    siteName: 'Cemre Acar',
    images: ['/yelken/og-en.png'],
    locale: 'en_US',
    type: 'website',
  },
}

export default function YelkenPageEn() {
  return <YelkenView lang="en" />
}
