'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import projectsData from '../../projects.json'
import { href, langOfPath, pathIn, type Lang } from '../i18n'
import ResumeMenu, { RESUMES } from './ResumeMenu'
import ThemeToggle from './ThemeToggle'

const MENU: Record<Lang, { label: string; href: string }[]> = {
  tr: [
    { label: 'Projeler', href: '/projects' },
    { label: 'Yazılar', href: '/yazilar' },
    { label: 'Hakkımda', href: '/about' },
  ],
  en: [
    { label: 'Projects', href: '/projects' },
    { label: 'Writing', href: '/yazilar' },
    { label: 'About', href: '/about' },
  ],
}

const UI = {
  tr: { open: 'Menüyü aç', close: 'Menüyü kapat', resume: 'Özgeçmiş', switchTo: 'English version' },
  en: { open: 'Open menu', close: 'Close menu', resume: 'Resume', switchTo: 'Türkçe sürüm' },
}

/**
 * Uygulama sayfaları (/yelken, /kurultay …) menüde ayrı yer almıyor; Projeler'in
 * altında sayılıyor. Liste projects.json'dan gelir: iç sayfası olan her proje.
 */
const appPaths = projectsData.map(p => p.preview).filter(p => p.startsWith('/'))

/** TR / EN: o anki sayfanın diğer dildeki karşılığına geçer. */
function LangSwitch({ lang, pathname, onNavigate }: { lang: Lang; pathname: string; onNavigate?: () => void }) {
  const other: Lang = lang === 'tr' ? 'en' : 'tr'
  return (
    <span className="inline-flex items-center gap-1 font-mono text-xs">
      {(['tr', 'en'] as Lang[]).map(l =>
        l === lang ? (
          <span key={l} aria-current="true" className="px-1 text-ink">
            {l.toUpperCase()}
          </span>
        ) : (
          <Link
            key={l}
            href={pathIn(pathname, other)}
            hrefLang={other}
            lang={other}
            aria-label={UI[lang].switchTo}
            onClick={onNavigate}
            className="px-1 text-faint transition-colors hover:text-ink"
          >
            {l.toUpperCase()}
          </Link>
        ),
      )}
    </span>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const lang = langOfPath(pathname)
  const ui = UI[lang]

  // Kök düzen <html lang="tr">; İngilizce sayfalarda tarayıcıya doğru dili bildir.
  // İspanyolca yasal sayfalarda menü İngilizce ama belge İspanyolca.
  const docLang = /\/(privacidad|condiciones|eliminar-cuenta)$/.test(pathname) ? 'es' : lang
  useEffect(() => {
    document.documentElement.lang = docLang
  }, [docLang])

  const under = (p: string) => pathname === p || pathname.startsWith(`${p}/`)
  const isActive = (trPath: string) =>
    under(href(lang, trPath)) ||
    (trPath === '/projects' && appPaths.some(p => under(p) || under(href('en', p))))

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link href={href(lang, '/')} className="flex items-baseline gap-3 no-underline" onClick={() => setMenuOpen(false)}>
          <span className="font-serif text-xl tracking-tight text-ink">Cemre Acar</span>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.08em] text-faint lg:inline">
            Frontend Engineer · AI Products
          </span>
        </Link>

        <ul className="hidden items-center gap-7 text-sm md:flex">
          {MENU[lang].map(item => (
            <li key={item.href}>
              <Link
                href={href(lang, item.href)}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`transition-colors ${isActive(item.href) ? 'text-ink' : 'text-muted hover:text-ink'}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="-mx-3">
            <LangSwitch lang={lang} pathname={pathname} />
          </li>
          <li className="-mx-2">
            <ThemeToggle lang={lang} />
          </li>
          <li>
            <ResumeMenu
              lang={lang}
              align="right"
              buttonClassName="inline-flex items-center gap-1.5 rounded-md border border-line px-3 py-1.5 text-ink transition-colors hover:border-ink"
            />
          </li>
        </ul>

        <div className="-mr-2 flex items-center md:hidden">
          <LangSwitch lang={lang} pathname={pathname} onNavigate={() => setMenuOpen(false)} />
          <ThemeToggle lang={lang} className="h-10 w-10" />
          <button
            className="flex h-10 w-10 items-center justify-center text-ink"
            onClick={() => setMenuOpen(open => !open)}
            aria-label={menuOpen ? ui.close : ui.open}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-line bg-paper md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {MENU[lang].map(item => (
              <li key={item.href} className="border-b border-line">
                <Link
                  href={href(lang, item.href)}
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
                  {ui.resume} — {r.label}
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
