'use client'

import { ChevronDown, Download } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

/**
 * Özgeçmiş dosyaları. Kaynakları cv/ klasöründe (ozgecmis.html, resume.html);
 * PDF'ler oradaki komutla public/ altına üretilir.
 */
export const RESUMES = [
  { lang: 'TR', label: 'Türkçe', href: '/ozgecmis.pdf', filename: 'Cemre-Acar-Ozgecmis.pdf' },
  { lang: 'EN', label: 'English', href: '/resume.pdf', filename: 'Cemre-Acar-Resume.pdf' },
]

/** Butona basınca iki dil seçeneği açılır; seçilen PDF indirilir. */
export default function ResumeMenu({
  label = 'Özgeçmiş',
  buttonClassName,
  align = 'left',
}: {
  label?: string
  buttonClassName: string
  align?: 'left' | 'right'
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onPointer = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div ref={ref} className="relative inline-block">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
        className={buttonClassName}
      >
        {label}
        <ChevronDown size={15} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div
          role="menu"
          className={`absolute top-full z-50 mt-2 w-56 overflow-hidden rounded-md border border-line bg-surface shadow-lg shadow-black/10 ${
            align === 'right' ? 'right-0' : 'left-0'
          }`}
        >
          {RESUMES.map(r => (
            <a
              key={r.lang}
              role="menuitem"
              href={r.href}
              download={r.filename}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between gap-3 border-b border-line px-4 py-3 text-sm text-ink last:border-b-0 hover:bg-paper"
            >
              <span>
                {r.label} <span className="font-mono text-xs text-faint">PDF</span>
              </span>
              <Download size={15} className="text-faint" />
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
