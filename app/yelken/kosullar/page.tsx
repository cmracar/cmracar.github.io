import LegalDoc from '../LegalDoc'

export const metadata = {
  title: 'Kullanım Koşulları | Yelken',
  description: 'Yelken kullanım koşulları.',
  openGraph: {
    title: 'Kullanım Koşulları | Yelken',
    description: 'Yelken kullanım koşulları.',
    url: 'https://www.cemreacar.com/yelken/kosullar',
    siteName: 'Cemre Acar Portfolio',
    type: 'article',
  },
}

export default function Page() {
  return <LegalDoc lang="tr" kind="terms" />
}
