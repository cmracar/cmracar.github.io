import LegalDoc from '../LegalDoc'

export const metadata = {
  title: 'Terms of Use | Yelken',
  description: 'Yelken terms of use.',
  openGraph: {
    title: 'Terms of Use | Yelken',
    description: 'Yelken terms of use.',
    url: 'https://cmracar.github.io/yelken/terms',
    siteName: 'Cemre Acar Portfolio',
    type: 'article',
  },
}

export default function Page() {
  return <LegalDoc lang="en" kind="terms" />
}
