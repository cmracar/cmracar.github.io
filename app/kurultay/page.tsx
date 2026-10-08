import Image from 'next/image'
import Link from 'next/link'
import { Mail, FileText, Shield, UserX, Swords, Tent, Route, Trophy, Moon, Sparkles } from 'lucide-react'
import { SectionHeading } from '@/app/components/Status'
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
    icon: <Swords size={22} />,
    title: 'Kahramanla savun',
    desc: 'Gökbörü’yü kendin yürütürsün: kuleler yetmez, akının en sıkıştığı yere sen koşarsın.',
  },
  {
    icon: <Route size={22} />,
    title: 'Göç ve konaklar',
    desc: 'Otlak tükenir, mevsim döner. Kervanı yeni yurda taşırken pusuya da düşebilirsin.',
  },
  {
    icon: <Sparkles size={22} />,
    title: 'Her sefer bir adım',
    desc: 'Düşsen de Kut ve Şan kazanırsın; Bey’den Han’a, Han’dan Kağan’a yükselirsin.',
  },
  {
    icon: <Trophy size={22} />,
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
    <main>
      {/* GİRİŞ: logo koyu zemine çizilmiş, sahne her temada koyu */}
      <section className="bg-[#0d0b09] text-white">
        <div className="mx-auto max-w-6xl px-5 pb-20 pt-14 md:px-8 md:pt-20">
          <Link href="/projects" className="font-mono text-xs uppercase tracking-[0.08em] text-white/50 hover:text-white">
            ← Projeler
          </Link>
          <div className="mt-10 grid items-center gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <h1 className="sr-only">Kurultay — Bozkır Savunması</h1>
              <Image
                src="/kurultay/logo.png"
                alt="Kurultay — Bozkır Savunması"
                width={1900}
                height={965}
                priority
                className="h-auto w-full max-w-[520px]"
              />
              <p className="mt-8 inline-flex items-center gap-2 font-mono text-xs text-white/60">
                <span className="h-1.5 w-1.5 rounded-full bg-[#e0a948]" aria-hidden="true" />
                Geliştiriliyor · Android ve iOS
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
                Kara Tuğ birliği bozkırı yakıyor; boylar dağınık, otağlar yalnız. Gündüz obanı kur, gece
                Gökbörü ile akınlara göğüs ger, her beşinci gece bir beyle yüzleş. Otlak tükenince göç et,
                Kurultay’da boyları birleştir ve Han seçil. Android ve iOS için; Türkçe ve İngilizce.
              </p>
            </div>
            <aside className="md:col-span-4 md:col-start-9">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-white/50">Oyun döngüsü</p>
              <ol className="divide-y divide-white/10 border-y border-white/10">
                {pillars.map((p, i) => (
                  <li key={p.name} className="flex items-center gap-3 py-3">
                    <span className="w-5 font-mono text-xs text-white/40">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-[#e0a948]">{p.icon}</span>
                    {p.name}
                  </li>
                ))}
              </ol>
            </aside>
          </div>

          <p className="mb-8 mt-20 font-mono text-xs uppercase tracking-[0.08em] text-white/50">Ekranlar</p>
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {shots.map(shot => (
              <figure key={shot.src}>
                <Image
                  src={shot.src}
                  alt={`Kurultay — ${shot.title}`}
                  width={1600}
                  height={738}
                  className="h-auto w-full rounded-lg border border-white/10"
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
