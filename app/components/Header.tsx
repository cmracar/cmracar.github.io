'use client'
// import Image from 'next/image'
import { Braces, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const menuItems = [
  { label: 'Anasayfa', href: '/' },
  { label: 'Hakkımda', href: '/about' },
  { label: 'Projelerim', href: '/projects' },
  { label: 'Çalışmalarım', href: '/workspace' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className="container mx-auto flex justify-between items-center px-4 md:px-8 h-20 text-base relative z-20">
      <Link href="/" className="flex items-center gap-3 select-none h-12">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded bg-gradient-to-tr from-blue-400 via-purple-400 to-cyan-400">
          <Braces size={22} className="text-white drop-shadow" />
        </span>
        <span className="font-extrabold text-xl md:text-2xl tracking-wide text-white drop-shadow-sm oswald pb-0.5" style={{letterSpacing: '.02em'}}>CEMRE ACAR</span>
      </Link>
      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-gray-200 font-medium text-base">
        {menuItems.map((item) => (
          <li key={item.label} className="hover:text-white transition-colors cursor-pointer">
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
      {/* Hamburger Icon */}
      <button className="md:hidden p-2 h-12 flex items-center" onClick={() => setMenuOpen(true)} aria-label="Menüyü Aç">
        <Menu size={22} />
      </button>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#181f2a]/95 z-50 flex flex-col">
          <div className="container mx-auto flex justify-between items-center px-4 md:px-8 h-20">
            <Link href="/" className="flex items-center gap-3 select-none h-12" onClick={() => setMenuOpen(false)}>
              <span className="inline-flex items-center justify-center w-8 h-8 rounded bg-gradient-to-tr from-blue-400 via-purple-400 to-cyan-400">
                <Braces size={22} className="text-white drop-shadow" />
              </span>
              <span className="font-extrabold text-xl md:text-2xl tracking-wide text-white drop-shadow-sm oswald pb-0.5" style={{letterSpacing: '.02em'}}>CEMRE ACAR</span>
            </Link>
            <button className="p-2 h-12 flex items-center" onClick={() => setMenuOpen(false)} aria-label="Menüyü Kapat">
              <X size={28} />
            </button>
          </div>
          <ul className="flex flex-col gap-8 items-center justify-center flex-1 text-lg font-medium">
            {menuItems.map((item) => (
              <li key={item.label} className="hover:text-blue-400 transition-colors cursor-pointer" onClick={() => setMenuOpen(false)}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
} 