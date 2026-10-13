import WritingView from '../_views/WritingView'
import { alternates } from '../i18n'

export const metadata = {
  title: 'Yazılar | Cemre Acar',
  description: 'Cemre Acar’ın Medium yazıları: yapay zekâ arayüzleri, React, Next.js ve geliştirme notları.',
  alternates: alternates('/yazilar', 'tr'),
  openGraph: {
    title: 'Yazılar | Cemre Acar',
    description: 'Yapay zekâ arayüzleri, React, Next.js ve geliştirme notları.',
    url: 'https://www.cemreacar.com/yazilar',
    siteName: 'Cemre Acar',
    locale: 'tr_TR',
    type: 'website',
  },
}

export default function WritingPage() {
  return <WritingView lang="tr" />
}
