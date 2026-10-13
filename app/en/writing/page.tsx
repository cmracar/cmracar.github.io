import WritingView from '../../_views/WritingView'
import { alternates } from '../../i18n'

export const metadata = {
  title: 'Writing | Cemre Acar',
  description: 'Cemre Acar’s Medium articles: AI interfaces, React, Next.js and developer notes.',
  alternates: alternates('/yazilar', 'en'),
  openGraph: {
    title: 'Writing | Cemre Acar',
    description: 'AI interfaces, React, Next.js and developer notes.',
    url: 'https://www.cemreacar.com/en/writing',
    siteName: 'Cemre Acar',
    locale: 'en_US',
    type: 'website',
  },
}

export default function WritingPageEn() {
  return <WritingView lang="en" />
}
