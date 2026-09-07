import LegalDoc from '../LegalDoc'

export const metadata = {
  title: 'Terms of Use | WordVoyage',
  description: 'WordVoyage terms of use.',
  openGraph: {
    title: 'Terms of Use | WordVoyage',
    description: 'WordVoyage terms of use.',
    url: 'https://cmracar.github.io/wordvoyage/terms',
    siteName: 'Cemre Acar Portfolio',
    type: 'article',
  },
}

export default function Page() {
  return <LegalDoc lang="en" kind="terms" />
}
