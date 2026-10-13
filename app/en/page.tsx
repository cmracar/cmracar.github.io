import HomeView from '../_views/HomeView'
import { alternates } from '../i18n'

const description =
  'Cemre Acar — Senior Frontend Engineer, AI Products. Interfaces for AI products and enterprise clients, my own mobile apps and independent projects.'

export const metadata = {
  title: 'Cemre Acar | Senior Frontend Engineer, AI Products',
  description,
  alternates: alternates('/', 'en'),
  openGraph: {
    title: 'Cemre Acar | Senior Frontend Engineer, AI Products',
    description: 'Enterprise and AI product interfaces, my own mobile apps and independent projects.',
    url: 'https://www.cemreacar.com/en',
    siteName: 'Cemre Acar',
    locale: 'en_US',
    type: 'website',
  },
}

export default function HomeEn() {
  return <HomeView lang="en" />
}
