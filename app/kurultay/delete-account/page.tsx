import LegalDoc from '../LegalDoc'

export const metadata = {
  title: 'Account Deletion | Kurultay',
  description: 'How to delete your Kurultay account and the data linked to it.',
  openGraph: {
    title: 'Account Deletion | Kurultay',
    description: 'How to delete your Kurultay account and the data linked to it.',
    url: 'https://cmracar.github.io/kurultay/delete-account',
    siteName: 'Cemre Acar Portfolio',
    type: 'article',
  },
}

export default function Page() {
  return <LegalDoc lang="en" kind="deletion" />
}
