'use client'

import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { THEME_STORAGE_KEY } from './theme'

type Theme = 'light' | 'dark'

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>('light')

  // Sunucu çıktısı her zaman açık; gerçek değer ilk çizimden sonra okunur.
  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light')
  }, [])

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    if (next === 'dark') document.documentElement.dataset.theme = 'dark'
    else delete document.documentElement.dataset.theme
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next)
    } catch {}
  }

  const label = theme === 'dark' ? 'Açık temaya geç' : 'Koyu temaya geç'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={`flex h-9 w-9 items-center justify-center rounded-md text-muted transition-colors hover:text-ink ${className}`}
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
