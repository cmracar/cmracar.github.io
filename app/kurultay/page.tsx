import Image from 'next/image'
import Link from 'next/link'
import { Mail, FileText, Shield, UserX, Swords, Tent, Route, Trophy, Moon, Sparkles } from 'lucide-react'
import Header from '@/app/components/Header'
import legal from './legal.json'

export const metadata = {
  title: 'Kurultay | Bozkır Savunması',
  description:
    'Kurultay: bozkırda obanı kur, geceleri akınlara karşı Gökbörü ile savun, otlak tükenince göç et. Cemre Acar tarafından geliştiriliyor.',
  openGraph: {
    title: 'Kurultay | Bozkır Savunması',
    description: 'Kahraman kontrollü üs savunması, göç ve hafif roguelite; Android ve iOS için.',
    url: 'https://cmracar.github.io/kurultay',
    siteName: 'Cemre Acar Portfolio',
    images: ['/kurultay/home.jpg'],
    type: 'website',
  },
}

/** Oyundaki başlık süsü: kırmızı flamalı tuğ (mızrak), koyu deri zemin üstünde. */
function Mark({ size = 96 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <rect x={0} y={0} width={64} height={64} rx={15} fill="#3B2414" />
      <circle cx={32} cy={32} r={22} fill="none" stroke="#E2A93B" strokeWidth={2} opacity={0.55} />
      <path d="M32 8 L35.5 20 L32 23 L28.5 20 Z" fill="#E2A93B" stroke="#1F130A" strokeWidth={1.2} strokeLinejoin="round" />
      <path d="M32 23 V56" stroke="#E2A93B" strokeWidth={3} strokeLinecap="round" />
      <path d="M33.5 25 L48 29.5 L33.5 34 Z" fill="#B23A2E" stroke="#1F130A" strokeWidth={1.2} strokeLinejoin="round" />
      <path d="M30.5 24.5 Q24 30 26 38 M30.5 24.5 Q22.5 28 22 35" stroke="#F3E3C3" strokeWidth={1.6} strokeLinecap="round" fill="none" />
    </svg>
  )
}

const shots = [
  { src: '/kurultay/home.jpg', title: 'Ana ekran', desc: 'Obanın, rütben, Haftanın Akını ve sıradaki hedefin.' },
  { src: '/kurultay/day.jpg', title: 'Gündüz', desc: 'Altını nereye harcayacağını seç: yurt, ağıl, kule, çit.' },
  { src: '/kurultay/dawn.jpg', title: 'Şafak', desc: 'Geceyi atlatan ganimet sandığını açar.' },
  { src: '/kurultay/kurultay.jpg', title: 'Kurultay', desc: 'Beyi yenince boylardan biriyle birleş; nimet ve yük birlikte gelir.' },
  { src: '/kurultay/migration.jpg', title: 'Göç', desc: 'Otlak tükenince yeni yurda göç et; her yolun bir bedeli var.' },
  { src: '/kurultay/kamtree.jpg', title: 'Kam Ağacı', desc: 'Her seferde kazanılan Kut ile kalıcı güçler.' },
]

const pillars = [
  { icon: <Tent size={20} />, name: 'Oba kur' },
  { icon: <Moon size={20} />, name: 'Geceyi savun' },
  { icon: <Swords size={20} />, name: 'Beyleri yen' },
  { icon: <Route size={20} />, name: 'Göç et' },
  { icon: <Sparkles size={20} />, name: 'Kut topla' },
  { icon: <Trophy size={20} />, name: 'Haftanın Akını' },
]

const features = [
  {
    icon: <Swords size={22} className="text-amber-300" />,
    title: 'Kahramanla savun',
    desc: 'Gökbörü’yü kendin yürütürsün: kuleler yetmez, akının en sıkıştığı yere sen koşarsın.',
  },
  {
    icon: <Route size={22} className="text-red-300" />,
    title: 'Göç ve konaklar',
    desc: 'Otlak tükenir, mevsim döner. Kervanı yeni yurda taşırken pusuya da düşebilirsin.',
  },
  {
    icon: <Sparkles size={22} className="text-yellow-300" />,
    title: 'Her sefer bir adım',
    desc: 'Düşsen de Kut ve Şan kazanırsın; Bey’den Han’a, Han’dan Kağan’a yükselirsin.',
  },
  {
    icon: <Trophy size={22} className="text-orange-300" />,
    title: 'Haftanın Akını',
    desc: 'Herkese aynı harita, aynı akınlar, eşit güç. Haftalık sıralamada en çok Şanı toplayan kazanır.',
  },
]

const stack = ['Unity 6', 'C#', 'URP', 'Supabase', 'Android', 'iOS']

const documents = [
  { href: '/kurultay/gizlilik', label: 'Gizlilik Politikası', lang: 'TR', icon: <Shield size={18} /> },
  { href: '/kurultay/kosullar', label: 'Kullanım Koşulları', lang: 'TR', icon: <FileText size={18} /> },
  { href: '/kurultay/privacy', label: 'Privacy Policy', lang: 'EN', icon: <Shield size={18} /> },
  { href: '/kurultay/terms', label: 'Terms of Use', lang: 'EN', icon: <FileText size={18} /> },
  { href: '/kurultay/hesap-silme', label: 'Hesap Silme', lang: 'TR', icon: <UserX size={18} /> },
  { href: '/kurultay/delete-account', label: 'Account Deletion', lang: 'EN', icon: <UserX size={18} /> },
]

export default function KurultayPage() {
  const { brand } = legal

  return (
    <main className="min-h-screen bg-[#181f2a] text-white">
      <Header />

      {/* HERO */}
      <section className="container mx-auto px-4 md:px-8 pt-12 pb-14 max-w-5xl">
        <div className="flex items-center gap-5 mb-7">
          <Mark />
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-[0.12em] text-amber-300">KURULTAY</h1>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-yellow-500/15 text-yellow-300">
                Geliştiriliyor
              </span>
            </div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mt-1">Bozkır Savunması</p>
          </div>
        </div>

        <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl">
          Kara Tuğ birliği bozkırı yakıyor; boylar dağınık, otağlar yalnız. Gündüz obanı kur, gece
          Gökbörü ile akınlara göğüs ger, her beşinci gece bir beyle yüzleş. Otlak tükenince göç et,
          Kurultay’da boyları birleştir ve Han seçil. Android ve iOS için; Türkçe ve İngilizce.
        </p>

        <div className="flex flex-wrap gap-2.5 mt-7">
          {pillars.map(p => (
            <span
              key={p.name}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-gray-200"
            >
              <span className="text-amber-300">{p.icon}</span>
              {p.name}
            </span>
          ))}
        </div>
      </section>

      {/* EKRANLAR */}
      <section className="border-y border-white/5 bg-white/[0.02] py-14">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-8">Ekranlar</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shots.map(shot => (
              <figure key={shot.src}>
                <Image
                  src={shot.src}
                  alt={`Kurultay — ${shot.title}`}
                  width={1600}
                  height={738}
                  className="rounded-xl border border-white/10 shadow-xl shadow-black/40 w-full h-auto"
                />
                <figcaption className="mt-3">
                  <span className="block text-sm font-semibold text-gray-100">{shot.title}</span>
                  <span className="block text-xs text-gray-400 leading-relaxed mt-0.5">{shot.desc}</span>
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
            <div key={feature.title} className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col gap-2">
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
              <span key={tech} className="bg-amber-500/10 text-amber-300 px-2.5 py-1 rounded text-xs font-mono">
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
              className="flex items-center gap-3 bg-white/5 border border-white/10 hover:border-amber-400/40 hover:bg-white/10 transition rounded-lg px-4 py-3 no-underline text-gray-200"
            >
              <span className="text-amber-300">{doc.icon}</span>
              <span className="flex-1">{doc.label}</span>
              <span className="text-xs text-gray-500">{doc.lang}</span>
            </Link>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 mt-10 flex flex-col gap-3 text-sm text-gray-400">
          <span>{brand.copyright}</span>
          <a
            href={`mailto:${brand.supportEmail}`}
            className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 transition no-underline w-fit"
          >
            <Mail size={16} /> {brand.supportEmail}
          </a>
        </div>
      </section>
    </main>
  )
}
