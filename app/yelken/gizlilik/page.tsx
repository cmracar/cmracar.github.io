import LegalDoc from '../LegalDoc'

export const metadata = {
  title: 'Gizlilik Politikası | Yelken',
  description: 'Yelken gizlilik politikası: hangi veriler toplanır, hangileri cihazda kalır.',
  openGraph: {
    title: 'Gizlilik Politikası | Yelken',
    description: 'Yelken gizlilik politikası: hangi veriler toplanır, hangileri cihazda kalır.',
    url: 'https://cemreacar.com/yelken/gizlilik',
    siteName: 'Cemre Acar Portfolio',
    type: 'article',
  },
}

export default function Page() {
  return <LegalDoc lang="tr" kind="privacy" />
}
