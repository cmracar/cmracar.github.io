import Link from 'next/link'
import { Mail, FileText, Shield, Wifi, Languages, Repeat } from 'lucide-react'
import Header from '@/app/components/Header'
import legal from './legal.json'

export const metadata = {
  title: 'Yelken | Kelime Bulmacası',
  description:
    'Yelken bir kelime bulmacası — kendi dilinde oyna ya da yeni bir dil öğren. Cemre Acar tarafından geliştirildi.',
  openGraph: {
    title: 'Yelken | Kelime Bulmacası',
    description: 'Kelime bulmacası: kendi dilinde oyna ya da yeni bir dil öğren.',
    url: 'https://cmracar.github.io/yelken',
    siteName: 'Cemre Acar Portfolio',
    type: 'website',
  },
}

/** Uygulama işaretiyle birebir aynı geometri (yelken/src/components/Logo.tsx). */
function Mark({ size = 88 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <rect x={0} y={0} width={64} height={64} rx={15} fill="#1A1231" />
      <g transform="translate(8.32, 8.32) scale(0.74)">
        <path d="M30 14 L30 37 L14 37 Z" fill="#FBBF24" />
        <path d="M34 7 L34 37 L53 37 Z" fill="#22D3EE" />
        <path
          d="M10 45 Q21 40 32 45 Q43 50 54 45"
          stroke="#F5F3FF"
          strokeWidth={4.2}
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M17 54 Q26 50 33 54 Q40 58 49 54"
          stroke="#F5F3FF"
          strokeWidth={3.36}
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </svg>
  )
}

const features = [
  {
    icon: <Languages size={22} className="text-cyan-300" />,
    title: 'İki dil ekseni',
    desc: 'Arayüz dilini ve bulmaca dilini ayrı seçersin. Aynıysa saf kelime oyunu, farklıysa dil öğrenme.',
  },
  {
    icon: <Repeat size={22} className="text-purple-300" />,
    title: 'Akıllı tekrar',
    desc: 'Çözdüğün kelimeler aralıklı tekrar programına girer. Bildiklerin seyrekleşir, zorlandıkların geri gelir.',
  },
  {
    icon: <Wifi size={22} className="text-blue-300" />,
    title: 'İnternet gerekmez',
    desc: 'Bütün kelimeler cihazında. Hesap açman gerekmez, ilerlemen yalnızca sende durur.',
  },
]

const documents = [
  { href: '/yelken/gizlilik', label: 'Gizlilik Politikası', lang: 'TR', icon: <Shield size={18} /> },
  { href: '/yelken/kosullar', label: 'Kullanım Koşulları', lang: 'TR', icon: <FileText size={18} /> },
  { href: '/yelken/privacy', label: 'Privacy Policy', lang: 'EN', icon: <Shield size={18} /> },
  { href: '/yelken/terms', label: 'Terms of Use', lang: 'EN', icon: <FileText size={18} /> },
]

export default function YelkenPage() {
  const { brand } = legal

  return (
    <main className="min-h-screen bg-[#181f2a] text-white">
      <Header />

      <section className="container mx-auto px-4 md:px-8 pt-14 pb-10 max-w-3xl">
        <div className="flex items-center gap-5 mb-6">
          <Mark />
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              {legal.brand.app}
            </h1>
            {/* Uygulamadaki kelime markasıyla aynı: ad tek renk, vurgu dalgada. */}
            <svg viewBox="0 0 120 10" className="w-32 h-2.5 mt-1" aria-hidden="true">
              <path
                d="M0 5 Q10 1 20 5 Q30 9 40 5 Q50 1 60 5 Q70 9 80 5 Q90 1 100 5 Q110 9 120 5"
                stroke="#22D3EE"
                strokeWidth={2.6}
                strokeLinecap="round"
                fill="none"
                opacity={0.85}
              />
            </svg>
            <p className="text-gray-400 text-sm mt-1">{brand.publisher}</p>
          </div>
        </div>

        <p className="text-lg text-gray-200 leading-relaxed">
          Bir kelime bulmacası — ve istersen bir dil öğretmeni. Kare bulmaca, kelime avı, adam
          asmaca ve kaybedilebilir bir sefer modu. Türkçe ve İngilizce.
        </p>
      </section>

      <section className="container mx-auto px-4 md:px-8 pb-12 max-w-3xl grid gap-4 sm:grid-cols-3">
        {features.map(feature => (
          <div
            key={feature.title}
            className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col gap-2"
          >
            {feature.icon}
            <h2 className="font-semibold">{feature.title}</h2>
            <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </section>

      <section className="container mx-auto px-4 md:px-8 pb-24 max-w-3xl">
        <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Yasal</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {documents.map(doc => (
            <Link
              key={doc.href}
              href={doc.href}
              className="flex items-center gap-3 bg-white/5 border border-white/10 hover:border-blue-400/40 hover:bg-white/10 transition rounded-lg px-4 py-3 no-underline text-gray-200"
            >
              <span className="text-blue-300">{doc.icon}</span>
              <span className="flex-1">{doc.label}</span>
              <span className="text-xs text-gray-500">{doc.lang}</span>
            </Link>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 mt-10 flex flex-col gap-3 text-sm text-gray-400">
          <span>{brand.copyright}</span>
          <a
            href={`mailto:${brand.supportEmail}`}
            className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition no-underline w-fit"
          >
            <Mail size={16} /> {brand.supportEmail}
          </a>
        </div>
      </section>
    </main>
  )
}
