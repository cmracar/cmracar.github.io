import LegalDoc from '../LegalDoc'

export const metadata = {
  title: 'Terms of Use | Kurultay',
  description: 'Kurultay terms of use.',
  openGraph: {
    title: 'Terms of Use | Kurultay',
    description: 'Kurultay terms of use.',
    url: 'https://cmracar.github.io/kurultay/terms',
    siteName: 'Cemre Acar Portfolio',
    type: 'article',
  },
}

export default function Page() {
  return <LegalDoc lang="en" kind="terms" />
}
