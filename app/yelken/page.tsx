import Image from 'next/image'
import Link from 'next/link'
import { Mail, FileText, Shield, Wifi, Languages, Repeat, Grid3x3, Search, Anchor, Route, Trophy, UserX, Swords } from 'lucide-react'
import Header from '@/app/components/Header'
import legal from './legal.json'
import StoreBadges from './StoreBadges'
import { yelkenStatus } from './stores'

export const metadata = {
  title: 'Yelken | Kelime Bulmacası',
  description:
    'Yelken bir kelime bulmacası — kendi dilinde oyna ya da yeni bir dil öğren. Cemre Acar tarafından geliştirildi.',
  openGraph: {
    title: 'Yelken | Kelime Bulmacası',
    description: 'Kelime bulmacası: kendi dilinde oyna ya da yeni bir dil öğren.',
    url: 'https://cmracar.github.io/yelken',
    siteName: 'Cemre Acar Portfolio',
    images: ['/yelken/og.png'],
    type: 'website',
  },
}

/**
 * Uygulama işaretiyle birebir aynı geometri (yelken/src/components/Logo.tsx →
 * `GEOMETRY.compact`): direkli yelkenli ve altında dört harf kutusu, üçüncüsü
 * vurgulu. Logo değişirse burası da değişir.
 */
function Mark({ size = 96 }: { size?: number }) {
  const tile = 10.5
  const gap = 1.8
  const total = 4 * tile + 3 * gap
  const xs = [0, 1, 2, 3].map(i => 32 - total / 2 + i * (tile + gap))
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <rect x={0} y={0} width={64} height={64} rx={15} fill="#1A1231" />
      <g transform="translate(8.32, 8.32) scale(0.74)">
        <path d="M32 4 V40" stroke="#F5F3FF" strokeWidth={2.4} strokeLinecap="round" fill="none" />
        <path
          d="M30 15 L30 38 L14 38 Q17 27 30 15 Z"
          fill="#FBBF24"
          stroke="#241C17"
          strokeWidth={1.8}
          strokeLinejoin="round"
        />
        <path
          d="M34 7 L34 38 L54 38 Q49 20 34 7 Z"
          fill="#22D3EE"
          stroke="#241C17"
          strokeWidth={1.8}
          strokeLinejoin="round"
        />
        {xs.map((x, i) => (
          <rect
            key={x}
            x={x}
            y={44}
            width={tile}
            height={tile}
            rx={2.4}
            fill={i === 2 ? '#FBBF24' : '#F5F3FF'}
            stroke="#241C17"
            strokeWidth={1.1}
          />
        ))}
      </g>
    </svg>
  )
}

/** Uygulamadaki kelime markası: büyük harf, geniş aralık, üçüncü harf vurgulu. */
function Wordmark({ name }: { name: string }) {
  const letters = [...name.toLocaleUpperCase('tr')]
  return (
    <h1 className="text-4xl md:text-5xl font-extrabold tracking-[0.18em]">
      {letters.map((ch, i) => (
        <span key={i} className={i === 2 ? 'text-[#FBBF24]' : undefined}>
          {ch}
        </span>
      ))}
    </h1>
  )
}

const shots = [
  { src: '/yelken/home.png', title: 'Ana ekran', desc: 'Beş oyun, günün bulmacası ve kimlik kartın tek bir denizde.' },
  { src: '/yelken/crossword.png', title: 'Kesişen Rotalar', desc: 'İpuçlarından kesişen kelimeleri yerleştir.' },
  { src: '/yelken/wordhunt.png', title: 'Kelime Avı', desc: 'Izgarada gizlenmiş kelimeleri parmağınla çiz.' },
  { src: '/yelken/voyage.png', title: 'Sefer', desc: 'Serbest Sefer’de tek başına, Düello’da gerçek bir rakiple aynı limanlarda.' },
  { src: '/yelken/ship.png', title: 'Gemi', desc: 'Oynadıkça büyüyen, kalıcı kademelerle gelişen bir yelkenli.' },
  { src: '/yelken/sailor.png', title: 'Gemici', desc: 'Rütbeni taşı, kazandığın kıyafetlerle kendine göre giydir.' },
  { src: '/yelken/collection.png', title: 'Koleksiyon', desc: 'Rütbe, rozetler ve ilerlemen.' },
]

const modes = [
  { icon: <Grid3x3 size={20} />, name: 'Kesişen Rotalar' },
  { icon: <Search size={20} />, name: 'Kelime Avı' },
  { icon: <Anchor size={20} />, name: 'İskele Düğümü' },
  { icon: <Route size={20} />, name: 'Sefer' },
  { icon: <Swords size={20} />, name: 'Düello' },
  { icon: <Trophy size={20} />, name: 'Sıralama' },
]

const features = [
  {
    icon: <Languages size={22} className="text-cyan-300" />,
    title: 'Üç dil, dokuz kombinasyon',
    desc: 'Türkçe, İngilizce ve İspanyolca. Arayüz ve bulmaca dilini ayrı seçersin: aynıysa saf kelime oyunu, farklıysa dil öğrenme.',
  },
  {
    icon: <Repeat size={22} className="text-purple-300" />,
    title: 'Akıllı tekrar',
    desc: 'Çözdüğün kelimeler aralıklı tekrar programına girer. Bildiklerin seyrekleşir, zorlandıkların geri gelir.',
  },
  {
    icon: <Trophy size={22} className="text-yellow-300" />,
    title: 'Sıralama ve Düello',
    desc: 'Apple ya da Google ile giriş yap: haftalık sıralamada yerini gör, Düello’da rakiplerle yarışıp Kupa Ligi’nde yüksel.',
  },
  {
    icon: <Wifi size={22} className="text-blue-300" />,
    title: 'Çevrimdışı da oynanır',
    desc: 'Bütün kelimeler cihazında. Hesap açmadan oynanır; sıralamaya girmek istersen ayrıca giriş yaparsın.',
  },
]

const stack = [
  'React Native',
  'Expo SDK 57',
  'TypeScript',
  'SQLite',
  'Zustand',
  'react-native-svg',
  'Supabase',
]

const documents = [
  { href: '/yelken/gizlilik', label: 'Gizlilik Politikası', lang: 'TR', icon: <Shield size={18} /> },
  { href: '/yelken/kosullar', label: 'Kullanım Koşulları', lang: 'TR', icon: <FileText size={18} /> },
  { href: '/yelken/privacy', label: 'Privacy Policy', lang: 'EN', icon: <Shield size={18} /> },
  { href: '/yelken/terms', label: 'Terms of Use', lang: 'EN', icon: <FileText size={18} /> },
  { href: '/yelken/hesap-silme', label: 'Hesap Silme', lang: 'TR', icon: <UserX size={18} /> },
  { href: '/yelken/delete-account', label: 'Account Deletion', lang: 'EN', icon: <UserX size={18} /> },
  { href: '/yelken/privacidad', label: 'Política de privacidad', lang: 'ES', icon: <Shield size={18} /> },
  { href: '/yelken/condiciones', label: 'Condiciones de uso', lang: 'ES', icon: <FileText size={18} /> },
  { href: '/yelken/eliminar-cuenta', label: 'Eliminación de la cuenta', lang: 'ES', icon: <UserX size={18} /> },
]

export default function YelkenPage() {
  const { brand } = legal
  const status = yelkenStatus()

  return (
    <main className="min-h-screen bg-[#181f2a] text-white">
      <Header />

      {/* HERO */}
      <section className="container mx-auto px-4 md:px-8 pt-12 pb-14 max-w-5xl">
        <div className="flex items-center gap-5 mb-7">
          <Mark />
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <Wordmark name={brand.app} />
              <span
                className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                  status.live ? 'bg-green-500/15 text-green-300' : 'bg-yellow-500/15 text-yellow-300'
                }`}
              >
                {status.label}
              </span>
            </div>
          </div>
        </div>

        <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl">
          Bir kelime bulmacası — ve istersen bir dil öğretmeni. Arayüz dilini ve bulmaca dilini ayrı
          seçersin: ikisi aynıysa saf bir kelime oyunu oynarsın, farklıysa çözdüğün her kelime bir
          tekrar programına girer. Kesişen Rotalar, Kelime Avı, İskele Düğümü ve Sefer; her gün
          yeni bir bulmaca; isteyenler için online sıralama ve gerçek rakiplerle Düello.
        </p>

        <div className="mt-7">
          <StoreBadges />
        </div>

        <div className="flex flex-wrap gap-2.5 mt-7">
          {modes.map(mode => (
            <span
              key={mode.name}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-gray-200"
            >
              <span className="text-cyan-300">{mode.icon}</span>
              {mode.name}
            </span>
          ))}
        </div>
      </section>

      {/* EKRANLAR */}
      <section className="pb-16 border-y border-white/5 bg-white/[0.02] py-14">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-8">Ekranlar</h2>
          {/* Dar ekranda yatay kaydırma: telefon görselleri küçültülünce okunmuyor. */}
          <div className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-3">
            {shots.map(shot => (
              <figure key={shot.src} className="shrink-0 w-52 md:w-auto">
                <Image
                  src={shot.src}
                  alt={`Yelken — ${shot.title}`}
                  width={1080}
                  height={1920}
                  className="rounded-xl border border-white/10 shadow-xl shadow-black/40 w-full h-auto"
                />
                <figcaption className="mt-3">
                  <span className="block text-sm font-semibold text-gray-100">{shot.title}</span>
                  <span className="block text-xs text-gray-400 leading-relaxed mt-0.5">
                    {shot.desc}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ÖZELLİKLER */}
      <section className="container mx-auto px-4 md:px-8 py-14 max-w-5xl">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
        </div>

        <div className="mt-10">
          <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Teknolojiler</h2>
          <div className="flex flex-wrap gap-2">
            {stack.map(tech => (
              <span
                key={tech}
                className="bg-blue-500/10 text-blue-300 px-2.5 py-1 rounded text-xs font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* YASAL */}
      <section className="container mx-auto px-4 md:px-8 pb-24 max-w-5xl">
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
