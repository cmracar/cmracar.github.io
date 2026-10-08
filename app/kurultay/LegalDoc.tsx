import Link from 'next/link'
import { Mail, ArrowLeft } from 'lucide-react'
import legal from './legal.json'

type Doc = {
  title: string
  updated: string
  intro: string
  sections: { heading: string; body: string[] }[]
}

type Lang = 'tr' | 'en'
type Kind = 'privacy' | 'terms' | 'deletion'

/**
 * Kurultay yasal metinlerinin ortak görünümü.
 *
 * İçerik `legal.json` içinden gelir; o dosyanın kaynağı oyun deposundadır
 * (`kurultay/Docs/legal/legal.json`, `tools/legal_site.sh` ile kopyalanır).
 * Buraya metin yazma: yayımlanan sayfa ile oyundaki bilgi ayrışmamalı.
 */
export default function LegalDoc({ lang, kind }: { lang: Lang; kind: Kind }) {
  const doc = legal.documents[lang][kind] as Doc
  const { brand } = legal

  return (
    <main className="mx-auto max-w-6xl px-5 pb-12 pt-14 md:px-8 md:pt-20">
      <div className="grid gap-10 md:grid-cols-12">
        <aside className="md:col-span-3">
          <Link href="/kurultay" className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink">
            <ArrowLeft size={16} /> Kurultay
          </Link>
          <p className="eyebrow mt-8">
            {brand.app} · {brand.publisher}
          </p>
        </aside>

        <article className="md:col-span-8">
          <h1 className="font-serif text-4xl leading-tight tracking-tight text-ink md:text-5xl">{doc.title}</h1>
          <p className="mt-4 font-mono text-xs text-faint">{doc.updated}</p>

          <p className="mt-10 text-lg leading-relaxed text-ink">{doc.intro}</p>

          {doc.sections.map(section => (
            <section key={section.heading} className="mt-12 border-t border-line pt-8">
              <h2 className="mb-4 text-lg font-semibold text-ink">{section.heading}</h2>
              {section.body.map((paragraph, index) => (
                <p key={index} className="mb-3 whitespace-pre-line leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          <footer className="mt-12 flex flex-col gap-2 border-t border-line pt-8 text-sm text-muted">
            <span>{brand.copyright}</span>
            <a href={`mailto:${brand.supportEmail}`} className="inline-flex w-fit items-center gap-2 text-ink hover:text-accent">
              <Mail size={16} /> {brand.supportEmail}
            </a>
          </footer>
        </article>
      </div>
    </main>
  )
}
