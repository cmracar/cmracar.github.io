import Image from 'next/image'
import Link from 'next/link'
import { Mail, FileText, Shield, Wifi, Languages, Repeat, Grid3x3, Search, Anchor, Route, Trophy, UserX, Swords, Youtube } from 'lucide-react'
import Status, { SectionHeading } from '@/app/components/Status'
import legal from './legal.json'
import StoreBadges from './StoreBadges'
import { yelkenStatus } from './stores'
import YouTube from './YouTube'

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
    <h1 className="text-4xl font-extrabold tracking-[0.18em] text-ink md:text-5xl">
      {letters.map((ch, i) => (
        <span key={i} className={i === 2 ? 'text-[#D99A0B] dark:text-[#FBBF24]' : undefined}>
          {ch}
        </span>
      ))}
    </h1>
  )
}

const shots = [
  { src: '/yelken/home.jpg', title: 'Ana ekran', desc: 'Beş oyun, günün bulmacası ve kimlik kartın tek bir denizde.' },
  { src: '/yelken/faceoff.jpg', title: 'Düello', desc: 'Çevrim içi bir rakiple aynı limanlarda yarış; puanı yüksek olan kupayı alır.' },
  { src: '/yelken/wordhunt.jpg', title: 'Kelime Avı', desc: 'Izgarada gizlenmiş kelimeleri parmağınla çiz.' },
  { src: '/yelken/duelhub.jpg', title: 'Kupa Ligi', desc: 'Kupa kazan, Liman’dan Efsane’ye beş ligde yüksel.' },
  { src: '/yelken/voyagemodes.jpg', title: 'Sefer', desc: 'Serbest Sefer’de tek başına, Düello’da gerçek bir rakiple.' },
  { src: '/yelken/ship.jpg', title: 'Gemi', desc: 'Oynadıkça büyüyen, kalıcı kademelerle gelişen bir yelkenli.' },
  { src: '/yelken/sailor.jpg', title: 'Kaptan', desc: 'Rütbeni taşı, kazandığın kıyafetlerle kendine göre giydir.' },
  { src: '/yelken/profile.jpg', title: 'Profil', desc: 'Rakibinin gemisini ve ligini gör, meydan oku.' },
]

/** YouTube kanalı: @cmracardev. Yatay fragman liste dışı, Shorts herkese açık. */
const CHANNEL = 'https://www.youtube.com/@cmracardev'
/**
 * Galeri tek sırada ve **eşit yükseklikte**: sütun genişlikleri videoların
 * en-boy oranından (16:9 → 256, 9:16 → 81; eşit yükseklikte genişlik oranı
 * 16/9 : 9/16). `fr` boşluklar düşüldükten sonra bölündüğü için yükseklik
 * birebir tutar.
 */
const videos = [
  { id: 'mSz_UbkjBSA', title: 'Fragman', meta: 'Yatay · 50 sn', vertical: false },
  { id: '5_wh1xCZYvM', title: 'Kısa fragman', meta: 'Short · 50 sn', vertical: true, poster: '/yelken/short-fragman.jpg' },
  { id: 'ibtNQJwaObI', title: 'Düello', meta: 'Short · 35 sn', vertical: true, poster: '/yelken/short-duello.jpg' },
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
    icon: <Languages size={22} />,
    title: 'Üç dil, dokuz kombinasyon',
    desc: 'Türkçe, İngilizce ve İspanyolca. Arayüz ve bulmaca dilini ayrı seçersin: aynıysa saf kelime oyunu, farklıysa dil öğrenme.',
  },
  {
    icon: <Repeat size={22} />,
    title: 'Akıllı tekrar',
    desc: 'Çözdüğün kelimeler aralıklı tekrar programına girer. Bildiklerin seyrekleşir, zorlandıkların geri gelir.',
  },
  {
    icon: <Trophy size={22} />,
    title: 'Sıralama ve Düello',
    desc: 'Apple ya da Google ile giriş yap: haftalık sıralamada yerini gör, Düello’da rakiplerle yarışıp Kupa Ligi’nde yüksel.',
  },
  {
    icon: <Wifi size={22} />,
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
    <main>
      {/* GİRİŞ */}
      <section className="mx-auto max-w-6xl px-5 pb-20 pt-14 md:px-8 md:pt-20">
        <Link href="/projects" className="eyebrow hover:text-ink">
          ← Projeler
        </Link>
        <div className="mt-10 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="flex items-center gap-5">
              <Mark size={72} />
              <div>
                <Wordmark name={brand.app} />
                <div className="mt-2">
                  <Status label={status.label} live={status.live} />
                </div>
              </div>
            </div>
            <p className="mt-10 font-serif text-3xl leading-snug tracking-tight text-ink md:text-4xl">
              Bir kelime bulmacası — ve istersen bir dil öğretmeni.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Arayüz dilini ve bulmaca dilini ayrı seçersin: ikisi aynıysa saf bir kelime oyunu
              oynarsın, farklıysa çözdüğün her kelime bir tekrar programına girer. Kesişen Rotalar,
              Kelime Avı, İskele Düğümü ve Sefer; her gün yeni bir bulmaca; isteyenler için online
              sıralama ve gerçek rakiplerle Düello.
            </p>
            <div className="mt-8">
              <StoreBadges />
            </div>
          </div>
          <aside className="md:col-span-4 md:col-start-9">
            <p className="eyebrow mb-4">Oyun modları</p>
            <ul className="divide-y divide-line border-y border-line">
              {modes.map(mode => (
                <li key={mode.name} className="flex items-center gap-3 py-3 text-ink">
                  <span className="text-faint">{mode.icon}</span>
                  {mode.name}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* VİDEOLAR + EKRANLAR: ürünün kendi renginde koyu bir sahne */}
      <section className="bg-[#120c22] text-white">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-white/50">Videolar</p>
            <a
              href={CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
            >
              <Youtube size={18} /> YouTube kanalı
            </a>
          </div>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-[256fr_81fr_81fr]">
            {videos.map(video => (
              <figure key={video.id} className={video.vertical ? '' : 'col-span-2 md:col-span-1'}>
                <YouTube
                  id={video.id}
                  title={`Yelken — ${video.title}`}
                  vertical={video.vertical}
                  poster={video.poster}
                />
                <figcaption className="mt-3">
                  <span className="block text-sm font-medium text-white">{video.title}</span>
                  <span className="mt-0.5 block font-mono text-xs text-white/50">{video.meta}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mb-8 mt-20 font-mono text-xs uppercase tracking-[0.08em] text-white/50">Ekranlar</p>
          {/* Dar ekranda yatay kaydırma: telefon görselleri küçültülünce okunmuyor. */}
          <div className="-mx-5 flex gap-6 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-4 md:px-0">
            {shots.map(shot => (
              <figure key={shot.src} className="w-52 shrink-0 md:w-auto">
                <Image
                  src={shot.src}
                  alt={`Yelken — ${shot.title}`}
                  width={1080}
                  height={1920}
                  className="h-auto w-full rounded-xl border border-white/10"
                />
                <figcaption className="mt-3">
                  <span className="block text-sm font-medium text-white">{shot.title}</span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-white/60">{shot.desc}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ÖZELLİKLER */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <SectionHeading label="Özellikler" />
        <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {features.map(feature => (
            <div key={feature.title} className="flex flex-col gap-3 bg-paper p-6">
              <span className="text-faint">{feature.icon}</span>
              <h3 className="font-medium text-ink">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-12">
          <p className="eyebrow md:col-span-3">Teknolojiler</p>
          <p className="font-mono text-sm text-ink md:col-span-9">{stack.join(' · ')}</p>
        </div>
      </section>

      {/* YASAL */}
      <section className="mx-auto max-w-6xl px-5 pb-12 md:px-8">
        <SectionHeading label="Yasal ve destek" />
        <ul className="grid gap-x-10 border-b border-line sm:grid-cols-2 lg:grid-cols-3">
          {documents.map(doc => (
            <li key={doc.href} className="border-t border-line">
              <Link href={doc.href} className="group flex items-center gap-3 py-4 text-ink">
                <span className="text-faint">{doc.icon}</span>
                <span className="flex-1 group-hover:text-accent">{doc.label}</span>
                <span className="font-mono text-xs text-faint">{doc.lang}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col gap-2 text-sm text-muted">
          <span>{brand.copyright}</span>
          <a href={`mailto:${brand.supportEmail}`} className="inline-flex w-fit items-center gap-2 text-ink hover:text-accent">
            <Mail size={16} /> {brand.supportEmail}
          </a>
        </div>
      </section>
    </main>
  )
}
