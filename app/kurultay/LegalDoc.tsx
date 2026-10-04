import Link from 'next/link'
import { Mail, ArrowLeft } from 'lucide-react'
import Header from '@/app/components/Header'
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
    <main className="min-h-screen bg-[#181f2a] text-white">
      <Header />

      <article className="container mx-auto px-4 md:px-8 pt-10 pb-24 max-w-3xl">
        <Link
          href="/kurultay"
          className="inline-flex items-center gap-2 text-sm text-amber-300 hover:text-amber-200 transition no-underline mb-8"
        >
          <ArrowLeft size={16} /> Kurultay
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-2">{doc.title}</h1>
        <p className="text-xs text-gray-400 mb-8">
          {brand.app} · {brand.publisher} · {doc.updated}
        </p>

        <p className="text-gray-200 leading-relaxed mb-10">{doc.intro}</p>

        {doc.sections.map(section => (
          <section key={section.heading} className="mb-9">
            <h2 className="text-lg font-semibold text-amber-300 mb-3">{section.heading}</h2>
            {section.body.map((paragraph, index) => (
              <p key={index} className="text-gray-300 leading-relaxed mb-3 whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </section>
        ))}

        <footer className="border-t border-white/10 pt-8 mt-4 flex flex-col gap-3 text-sm text-gray-400">
          <span>{brand.copyright}</span>
          <a
            href={`mailto:${brand.supportEmail}`}
            className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 transition no-underline w-fit"
          >
            <Mail size={16} /> {brand.supportEmail}
          </a>
        </footer>
      </article>
    </main>
  )
}
