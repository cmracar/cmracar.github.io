import LegalDoc from '../LegalDoc'

export const metadata = {
  title: 'Gizlilik Politikası | Kurultay',
  description: 'Kurultay gizlilik politikası: hangi veriler cihazda kalır, hangileri sunucuda saklanır.',
  openGraph: {
    title: 'Gizlilik Politikası | Kurultay',
    description: 'Kurultay gizlilik politikası: hangi veriler cihazda kalır, hangileri sunucuda saklanır.',
    url: 'https://www.cemreacar.com/kurultay/gizlilik',
    siteName: 'Cemre Acar Portfolio',
    type: 'article',
  },
}

export default function Page() {
  return <LegalDoc lang="tr" kind="privacy" />
}
