import Link from 'next/link'

export const CONTACT = {
  email: 'cemreacar94@gmail.com',
  links: [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/cmracar' },
    { label: 'GitHub', href: 'https://github.com/cmracar' },
    { label: 'Medium', href: 'https://medium.com/@cmracar' },
    { label: 'YouTube', href: 'https://www.youtube.com/@cmracardev' },
  ],
}

/**
 * Uygulamaların yasal sayfaları alt bilgide de bağlı: mağaza incelemesi ve
 * ziyaretçi bu adreslere sitenin her yerinden ulaşabilsin. Adresler
 * mağazalara kayıtlı; burada yalnızca bağlantı veriliyor, yol değiştirme.
 */
const apps = [
  {
    name: 'Yelken',
    href: '/yelken',
    legal: [
      { label: 'Gizlilik', href: '/yelken/gizlilik' },
      { label: 'Koşullar', href: '/yelken/kosullar' },
      { label: 'Hesap silme', href: '/yelken/hesap-silme' },
    ],
  },
  {
    name: 'Kurultay',
    href: '/kurultay',
    legal: [
      { label: 'Gizlilik', href: '/kurultay/gizlilik' },
      { label: 'Koşullar', href: '/kurultay/kosullar' },
      { label: 'Hesap silme', href: '/kurultay/hesap-silme' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 px-5 py-14 md:grid-cols-12 md:gap-10 md:px-8">
        <div className="col-span-2 md:col-span-5">
          <p className="font-serif text-2xl text-ink">Birlikte çalışalım.</p>
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

        {apps.map(app => (
          <div key={app.name} className="md:col-span-3">
            <p className="eyebrow mb-3">Uygulama</p>
            <Link href={app.href} className="text-ink hover:text-accent">
              {app.name}
            </Link>
            <ul className="mt-2 text-sm">
              {app.legal.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-block py-1.5 text-muted hover:text-ink">
                    {item.label}
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
