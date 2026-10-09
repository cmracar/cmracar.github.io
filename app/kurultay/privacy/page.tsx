import LegalDoc from '../LegalDoc'

export const metadata = {
  title: 'Privacy Policy | Kurultay',
  description: 'Kurultay privacy policy: what stays on your device and what is stored on the server.',
  openGraph: {
    title: 'Privacy Policy | Kurultay',
    description: 'Kurultay privacy policy: what stays on your device and what is stored on the server.',
    url: 'https://www.cemreacar.com/kurultay/privacy',
    siteName: 'Cemre Acar Portfolio',
    type: 'article',
  },
}

export default function Page() {
  return <LegalDoc lang="en" kind="privacy" />
}
