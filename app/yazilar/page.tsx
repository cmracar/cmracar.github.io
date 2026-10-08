import { ArrowUpRight } from 'lucide-react'
import ArticleList from '../components/ArticleList'
import { articles, MEDIUM_PROFILE } from '../articles'

export const metadata = {
  title: 'Yazılar | Cemre Acar',
  description: 'Cemre Acar’ın Medium yazıları: yapay zekâ arayüzleri, React, Next.js ve geliştirme notları.',
  openGraph: {
    title: 'Yazılar | Cemre Acar',
    description: 'Yapay zekâ arayüzleri, React, Next.js ve geliştirme notları.',
    url: 'https://cmracar.github.io/yazilar',
    siteName: 'Cemre Acar',
    locale: 'tr_TR',
    type: 'website',
  },
}

export default function WritingPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 pb-12 pt-16 md:px-8 md:pt-24">
      <p className="eyebrow">Yazılar · {articles.length}</p>
      <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.08] tracking-tight text-ink md:text-6xl">
        Çalışırken öğrendiklerimi yazıyorum.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        Yapay zekâ ile arayüzlerin kesiştiği yer, React ve Next.js pratikleri, geliştirme araçları.
        Yazıların tamamı Medium’da.
      </p>
      <a
        href={MEDIUM_PROFILE}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
      >
        Medium’da takip et <ArrowUpRight size={16} />
      </a>
      <div className="mt-16">
        <ArticleList items={articles} />
      </div>
    </main>
  )
}
