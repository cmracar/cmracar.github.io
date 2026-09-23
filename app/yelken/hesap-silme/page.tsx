import LegalDoc from '../LegalDoc'

export const metadata = {
  title: 'Hesap Silme | Yelken',
  description: 'Yelken hesabınızı ve ona bağlı verileri nasıl silersiniz.',
  openGraph: {
    title: 'Hesap Silme | Yelken',
    description: 'Yelken hesabınızı ve ona bağlı verileri nasıl silersiniz.',
    url: 'https://cmracar.github.io/yelken/hesap-silme',
    siteName: 'Cemre Acar Portfolio',
    type: 'article',
  },
}

export default function Page() {
  return <LegalDoc lang="tr" kind="deletion" />
}
