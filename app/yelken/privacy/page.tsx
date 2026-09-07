import LegalDoc from '../LegalDoc'

export const metadata = {
  title: 'Privacy Policy | Yelken',
  description: 'Yelken privacy policy: what is collected and what stays on your device.',
  openGraph: {
    title: 'Privacy Policy | Yelken',
    description: 'Yelken privacy policy: what is collected and what stays on your device.',
    url: 'https://cmracar.github.io/yelken/privacy',
    siteName: 'Cemre Acar Portfolio',
    type: 'article',
  },
}

export default function Page() {
  return <LegalDoc lang="en" kind="privacy" />
}
