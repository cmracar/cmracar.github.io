import LegalDoc from '../LegalDoc'

export const metadata = {
  title: 'Kullanım Koşulları | Kurultay',
  description: 'Kurultay kullanım koşulları.',
  openGraph: {
    title: 'Kullanım Koşulları | Kurultay',
    description: 'Kurultay kullanım koşulları.',
    url: 'https://cmracar.github.io/kurultay/kosullar',
    siteName: 'Cemre Acar Portfolio',
    type: 'article',
  },
}

export default function Page() {
  return <LegalDoc lang="tr" kind="terms" />
}
