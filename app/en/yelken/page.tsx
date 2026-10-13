import YelkenView from '../../_views/YelkenView'
import { alternates } from '../../i18n'

export const metadata = {
  title: 'Yelken: Word Game & Puzzles',
  description:
    'Yelken brings five word games together on one sea: crossword, word search, hangman, word connect and a voyage. Play offline or learn a language. Built by Cemre Acar.',
  alternates: alternates('/yelken', 'en'),
  openGraph: {
    title: 'Yelken: Word Game & Puzzles',
    description: 'Five word games on one sea — play offline, or learn a language.',
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
