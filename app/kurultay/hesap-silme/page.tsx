import LegalDoc from '../LegalDoc'

export const metadata = {
  title: 'Hesap Silme | Kurultay',
  description: 'Kurultay hesabınızı ve ona bağlı verileri nasıl silersiniz.',
  openGraph: {
    title: 'Hesap Silme | Kurultay',
    description: 'Kurultay hesabınızı ve ona bağlı verileri nasıl silersiniz.',
    url: 'https://www.cemreacar.com/kurultay/hesap-silme',
    siteName: 'Cemre Acar Portfolio',
    type: 'article',
  },
}

export default function Page() {
  return <LegalDoc lang="tr" kind="deletion" />
}
