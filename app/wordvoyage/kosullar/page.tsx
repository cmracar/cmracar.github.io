import LegalDoc from '../LegalDoc'

export const metadata = {
  title: 'Kullanım Koşulları | WordVoyage',
  description: 'WordVoyage kullanım koşulları.',
  openGraph: {
    title: 'Kullanım Koşulları | WordVoyage',
    description: 'WordVoyage kullanım koşulları.',
    url: 'https://cmracar.github.io/wordvoyage/kosullar',
    siteName: 'Cemre Acar Portfolio',
    type: 'article',
  },
}

export default function Page() {
  return <LegalDoc lang="tr" kind="terms" />
}
