import AboutView from '../../_views/AboutView'
import { alternates } from '../../i18n'

export const metadata = {
  title: 'About | Cemre Acar',
  description: 'Cemre Acar — Senior Frontend Engineer, AI Products. Experience, education and skills.',
  alternates: alternates('/about', 'en'),
  openGraph: {
    title: 'About | Cemre Acar',
    description: 'Experience, education and the technologies I use.',
    url: 'https://www.cemreacar.com/en/about',
    siteName: 'Cemre Acar',
    locale: 'en_US',
    type: 'website',
  },
}

export default function AboutPageEn() {
  return <AboutView lang="en" />
}
