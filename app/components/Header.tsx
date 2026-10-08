'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import projectsData from '../../projects.json'
import ResumeMenu, { RESUMES } from './ResumeMenu'

const menuItems = [
  { label: 'Projeler', href: '/projects' },
  { label: 'Yazılar', href: '/yazilar' },
  { label: 'Hakkımda', href: '/about' },
]

/**
 * Uygulama sayfaları (/yelken, /kurultay …) menüde ayrı yer almıyor; Projeler'in
 * altında sayılıyor. Liste projects.json'dan gelir: iç sayfası olan her proje.
 */
const appPaths = projectsData.map(p => p.preview).filter(href => href.startsWith('/'))

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const under = (href: string) => pathname === href || pathname.startsWith(`${href}/`)
  const isActive = (href: string) =>
    under(href) || (href === '/projects' && appPaths.some(under))

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-baseline gap-3 no-underline" onClick={() => setMenuOpen(false)}>
          <span className="font-serif text-xl tracking-tight text-ink">Cemre Acar</span>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.08em] text-faint sm:inline">
            Front-End Developer
          </span>
        </Link>

        <ul className="hidden items-center gap-7 text-sm md:flex">
          {menuItems.map(item => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`transition-colors ${isActive(item.href) ? 'text-ink' : 'text-muted hover:text-ink'}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <ResumeMenu
              align="right"
              buttonClassName="inline-flex items-center gap-1.5 rounded-md border border-line px-3 py-1.5 text-ink transition-colors hover:border-ink"
            />
          </li>
        </ul>

        <button
          className="-mr-2 flex h-10 w-10 items-center justify-center text-ink md:hidden"
          onClick={() => setMenuOpen(open => !open)}
          aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-line bg-paper md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {menuItems.map(item => (
              <li key={item.href} className="border-b border-line">
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-4 text-lg ${isActive(item.href) ? 'text-ink' : 'text-muted'}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {RESUMES.map((r, i) => (
              <li key={r.lang} className={i < RESUMES.length - 1 ? 'border-b border-line' : undefined}>
                <a href={r.href} download={r.filename} className="flex items-center justify-between py-4 text-lg text-muted">
                  Özgeçmiş — {r.label}
                  <span className="font-mono text-xs text-faint">PDF ↓</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
