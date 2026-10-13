'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CONTACT } from '../contact'
import { href, langOfPath, type Lang } from '../i18n'

const COPY = {
  tr: { cta: 'Birlikte çalışalım.', app: 'Uygulama', legal: ['Gizlilik', 'Koşullar', 'Hesap silme'] },
  en: { cta: 'Let’s work together.', app: 'App', legal: ['Privacy', 'Terms', 'Account deletion'] },
}

/**
 * Uygulamaların yasal sayfaları alt bilgide de bağlı: mağaza incelemesi ve
 * ziyaretçi bu adreslere sitenin her yerinden ulaşabilsin. Adresler
 * mağazalara kayıtlı; burada yalnızca bağlantı veriliyor, yol değiştirme.
 * İngilizce sayfalarda aynı belgelerin İngilizce adresleri gösterilir.
 */
const APPS = [
  { name: 'Yelken', href: '/yelken', legal: ['/yelken/gizlilik', '/yelken/kosullar', '/yelken/hesap-silme'] },
  { name: 'Kurultay', href: '/kurultay', legal: ['/kurultay/gizlilik', '/kurultay/kosullar', '/kurultay/hesap-silme'] },
]

export default function Footer() {
  const lang: Lang = langOfPath(usePathname())
  const c = COPY[lang]

  return (
    <footer lang={lang} className="mt-auto border-t border-line">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 px-5 py-14 md:grid-cols-12 md:gap-10 md:px-8">
        <div className="col-span-2 md:col-span-5">
          <p className="font-serif text-2xl text-ink">{c.cta}</p>
          <a href={`mailto:${CONTACT.email}`} className="link-underline mt-3 inline-block text-muted hover:text-ink">
            {CONTACT.email}
          </a>
          <ul className="mt-4 flex flex-wrap gap-x-5 text-sm">
            {CONTACT.links.map(link => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="inline-block py-1.5 text-muted hover:text-ink">
                  {link.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>

        {APPS.map(app => (
          <div key={app.name} className="md:col-span-3">
            <p className="eyebrow mb-3">{c.app}</p>
            <Link href={href(lang, app.href)} className="text-ink hover:text-accent">
              {app.name}
            </Link>
            <ul className="mt-2 text-sm">
              {app.legal.map((trPath, i) => (
                <li key={trPath}>
                  <Link href={href(lang, trPath)} className="inline-block py-1.5 text-muted hover:text-ink">
                    {c.legal[i]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-5 py-5 font-mono text-xs text-faint md:px-8">
          <span>© {new Date().getFullYear()} Cemre Acar</span>
          <span>İzmir, Türkiye</span>
        </div>
      </div>
    </footer>
  )
}
