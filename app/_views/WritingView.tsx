import { ArrowUpRight } from 'lucide-react'
import ArticleList from '../components/ArticleList'
import { articles, MEDIUM_PROFILE } from '../articles'
import type { Lang } from '../i18n'

const COPY = {
  tr: {
    eyebrow: 'Yazılar',
    title: 'Çalışırken öğrendiklerimi yazıyorum.',
    body: 'Yapay zekâ ile arayüzlerin kesiştiği yer, React ve Next.js pratikleri, geliştirme araçları. Yazıların tamamı Medium’da.',
    follow: 'Medium’da takip et',
  },
  en: {
    eyebrow: 'Writing',
    title: 'I write about what I learn at work.',
    body: 'Where AI meets the interface, React and Next.js practices, developer tools. Most articles are in Turkish; all of them are on Medium.',
    follow: 'Follow on Medium',
  },
}

export default function WritingView({ lang }: { lang: Lang }) {
  const c = COPY[lang]
  return (
    <main lang={lang} className="mx-auto max-w-6xl px-5 pb-12 pt-16 md:px-8 md:pt-24">
      <p className="eyebrow">
        {c.eyebrow} · {articles.length}
      </p>
      <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.08] tracking-tight text-ink md:text-6xl">{c.title}</h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{c.body}</p>
      <a
        href={MEDIUM_PROFILE}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
      >
        {c.follow} <ArrowUpRight size={16} />
      </a>
      <div className="mt-16">
        <ArticleList items={articles} lang={lang} />
      </div>
    </main>
  )
}
