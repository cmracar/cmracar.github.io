import LegalDoc from '../LegalDoc'

export const metadata = {
  title: 'Gizlilik Politikası | Yelken',
  description: 'Yelken gizlilik politikası: hangi veriler toplanır, hangileri cihazda kalır.',
  openGraph: {
    title: 'Gizlilik Politikası | Yelken',
    description: 'Yelken gizlilik politikası: hangi veriler toplanır, hangileri cihazda kalır.',
    url: 'https://cmracar.github.io/yelken/gizlilik',
    siteName: 'Cemre Acar Portfolio',
    type: 'article',
  },
}

export default function Page() {
  return <LegalDoc lang="tr" kind="privacy" />
}
