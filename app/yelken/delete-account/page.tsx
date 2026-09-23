import LegalDoc from '../LegalDoc'

export const metadata = {
  title: 'Account Deletion | Yelken',
  description: 'How to delete your Yelken account and its data.',
  openGraph: {
    title: 'Account Deletion | Yelken',
    description: 'How to delete your Yelken account and its data.',
    url: 'https://cmracar.github.io/yelken/delete-account',
    siteName: 'Cemre Acar Portfolio',
    type: 'article',
  },
}

export default function Page() {
  return <LegalDoc lang="en" kind="deletion" />
}
