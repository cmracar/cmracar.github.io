import { ArrowUpRight } from 'lucide-react'
import { formatDate, type Article } from '../articles'

export default function ArticleList({ items }: { items: Article[] }) {
  return (
    <ul className="border-b border-line">
      {items.map(article => (
        <li key={article.url} className="border-t border-line">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid gap-2 py-6 md:grid-cols-12 md:gap-6"
          >
            <span className="font-mono text-xs text-faint md:col-span-2 md:pt-1">
              {formatDate(article.date)} · {article.lang}
            </span>
            <span className="md:col-span-8">
              <span className="block font-serif text-xl leading-snug text-ink group-hover:text-accent">
                {article.title}
              </span>
              <span className="mt-2 block text-sm leading-relaxed text-muted">{article.summary}</span>
              {article.publication && (
                <span className="mt-2 block font-mono text-xs text-faint">{article.publication}</span>
              )}
            </span>
            <span className="hidden justify-end text-faint group-hover:text-accent md:col-span-2 md:flex">
              <ArrowUpRight size={18} />
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}
