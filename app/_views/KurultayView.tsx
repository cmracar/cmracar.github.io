import Image from 'next/image'
import Link from 'next/link'
import { Mail, FileText, Shield, UserX, Swords, Tent, Route, Trophy, Moon, Sparkles, Instagram } from 'lucide-react'
import { SectionHeading } from '../components/Status'
import { href, type Lang } from '../i18n'
import legal from '../kurultay/legal.json'


const SHOT_SRC = ['home', 'day', 'dawn', 'kurultay', 'migration', 'kamtree'].map(n => `/kurultay/${n}.jpg`)
const PILLAR_ICONS = [<Tent key="0" size={20} />, <Moon key="1" size={20} />, <Swords key="2" size={20} />, <Route key="3" size={20} />, <Sparkles key="4" size={20} />, <Trophy key="5" size={20} />]
const FEATURE_ICONS = [<Swords key="0" size={22} />, <Route key="1" size={22} />, <Sparkles key="2" size={22} />, <Trophy key="3" size={22} />]

/** Oyun terimleri oyunun kendi İngilizce metinlerinden (Assets/_Game/Scripts). */
const COPY = {
  tr: {
    back: '← Projeler',
    name: 'Kurultay — Bozkır Savunması',
    status: 'Geliştiriliyor · Android ve iOS',
    body: 'Kara Tuğ birliği bozkırı yakıyor; boylar dağınık, otağlar yalnız. Gündüz obanı kur, gece Gökbörü ile akınlara göğüs ger, her beşinci gece bir beyle yüzleş. Otlak tükenince göç et, Kurultay’da boyları birleştir ve Han seçil. Android ve iOS için; Türkçe ve İngilizce.',
    loop: 'Oyun döngüsü',
    pillars: ['Oba kur', 'Geceyi savun', 'Beyleri yen', 'Göç et', 'Kut topla', 'Haftanın Akını'],
    videos: 'Tanıtım videoları: Instagram',
    shotsLabel: 'Ekranlar',
    shots: [
      { title: 'Ana ekran', desc: 'Obanın, rütben, Haftanın Akını ve sıradaki hedefin.' },
      { title: 'Gündüz', desc: 'Altını nereye harcayacağını seç: yurt, ağıl, kule, çit.' },
      { title: 'Şafak', desc: 'Geceyi atlatan ganimet sandığını açar.' },
      { title: 'Kurultay', desc: 'Beyi yenince boylardan biriyle birleş; nimet ve yük birlikte gelir.' },
      { title: 'Göç', desc: 'Otlak tükenince yeni yurda göç et; her yolun bir bedeli var.' },
      { title: 'Kam Ağacı', desc: 'Her seferde kazanılan Kut ile kalıcı güçler.' },
    ],
    featuresLabel: 'Özellikler',
    features: [
      { title: 'Kahramanla savun', desc: 'Gökbörü’yü kendin yürütürsün: kuleler yetmez, akının en sıkıştığı yere sen koşarsın.' },
      { title: 'Göç ve konaklar', desc: 'Otlak tükenir, mevsim döner. Kervanı yeni yurda taşırken pusuya da düşebilirsin.' },
      { title: 'Her sefer bir adım', desc: 'Düşsen de Kut ve Şan kazanırsın; Bey’den Han’a, Han’dan Kağan’a yükselirsin.' },
      { title: 'Haftanın Akını', desc: 'Herkese aynı harita, aynı akınlar, eşit güç. Haftalık sıralamada en çok Şanı toplayan kazanır.' },
    ],
    stackLabel: 'Teknolojiler',
    legalLabel: 'Yasal ve destek',
  },
  en: {
    back: '← Projects',
    name: 'Kurultay — Steppe Defence',
    status: 'In development · Android and iOS',
    body: 'The Black Banner horde is burning the steppe; the clans are scattered, the camps alone. Build your camp by day, hold off the raids with Gökbörü by night, and face a warlord every fifth night. When the grassland runs out, migrate; unite the clans at the Kurultay and be chosen Khan. For Android and iOS; in Turkish and English.',
    loop: 'Game loop',
    pillars: ['Build your camp', 'Defend the night', 'Defeat the warlords', 'Migrate', 'Gather Kut', 'Weekly Raid'],
    videos: 'Promo videos: Instagram',
    shotsLabel: 'Screens',
    shots: [
      { title: 'Home', desc: 'Your camp, your title, the Weekly Raid and your next goal.' },
      { title: 'Day', desc: 'Choose where to spend your gold: yurts, folds, towers, fences.' },
      { title: 'Dawn', desc: 'Survive the night and open the loot chest.' },
      { title: 'Kurultay', desc: 'Defeat a warlord and unite with one of the clans; boons and burdens come together.' },
      { title: 'Migration', desc: 'When the grassland runs out, migrate to new land; every road has a price.' },
      { title: 'Kam Tree', desc: 'Permanent powers bought with the Kut you earn each campaign.' },
    ],
    featuresLabel: 'Features',
    features: [
      { title: 'Defend with a hero', desc: 'You steer Gökbörü yourself: towers are not enough, so you rush to wherever the raid presses hardest.' },
      { title: 'Migration and camps', desc: 'The grassland runs out, the seasons turn. Moving the caravan to new land, you may also ride into an ambush.' },
      { title: 'Every campaign counts', desc: 'Even when you fall you earn Kut and Glory, rising from Chief to Khan and from Khan to Khagan.' },
      { title: 'Weekly Raid', desc: 'The same map, the same raids and equal power for everyone. Whoever gathers the most Glory on the weekly leaderboard wins.' },
    ],
    stackLabel: 'Stack',
    legalLabel: 'Legal and support',
  },
}

const stack = ['Unity 6', 'C#', 'URP', 'Supabase', 'Android', 'iOS']

const documents = [
  { href: '/kurultay/gizlilik', label: 'Gizlilik Politikası', lang: 'TR', icon: <Shield size={18} /> },
  { href: '/kurultay/kosullar', label: 'Kullanım Koşulları', lang: 'TR', icon: <FileText size={18} /> },
  { href: '/kurultay/privacy', label: 'Privacy Policy', lang: 'EN', icon: <Shield size={18} /> },
  { href: '/kurultay/terms', label: 'Terms of Use', lang: 'EN', icon: <FileText size={18} /> },
  { href: '/kurultay/hesap-silme', label: 'Hesap Silme', lang: 'TR', icon: <UserX size={18} /> },
  { href: '/kurultay/delete-account', label: 'Account Deletion', lang: 'EN', icon: <UserX size={18} /> },
]

export default function KurultayView({ lang }: { lang: Lang }) {
  const { brand } = legal
  const c = COPY[lang]
  const pillars = c.pillars.map((name, i) => ({ name, icon: PILLAR_ICONS[i] }))
  const features = c.features.map((f, i) => ({ ...f, icon: FEATURE_ICONS[i] }))
  const shots = c.shots.map((x, i) => ({ ...x, src: SHOT_SRC[i] }))

  return (
    <main lang={lang}>
      {/* GİRİŞ: logo koyu zemine çizilmiş, sahne her temada koyu */}
      <section className="bg-[#0d0b09] text-white">
        <div className="mx-auto max-w-6xl px-5 pb-20 pt-14 md:px-8 md:pt-20">
          <Link href={href(lang, '/projects')} className="font-mono text-xs uppercase tracking-[0.08em] text-white/50 hover:text-white">
            {c.back}
          </Link>
          <div className="mt-10 grid items-center gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <h1 className="sr-only">{c.name}</h1>
              <Image
                src="/kurultay/logo.png"
                alt={c.name}
                width={1900}
                height={965}
                priority
                className="h-auto w-full max-w-[520px]"
              />
              <p className="mt-8 inline-flex items-center gap-2 font-mono text-xs text-white/60">
                <span className="h-1.5 w-1.5 rounded-full bg-[#e0a948]" aria-hidden="true" />
                {c.status}
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">{c.body}</p>
            </div>
            <aside className="md:col-span-4 md:col-start-9">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-white/50">{c.loop}</p>
              <ol className="divide-y divide-white/10 border-y border-white/10">
                {pillars.map((p, i) => (
                  <li key={p.name} className="flex items-center gap-3 py-3">
                    <span className="w-5 font-mono text-xs text-white/40">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-[#e0a948]">{p.icon}</span>
                    {p.name}
                  </li>
                ))}
              </ol>
              <a
                href="https://www.instagram.com/cmracardev"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
              >
                <Instagram size={18} /> {c.videos}
              </a>
            </aside>
          </div>

          <p className="mb-8 mt-20 font-mono text-xs uppercase tracking-[0.08em] text-white/50">{c.shotsLabel}</p>
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
        <SectionHeading label={c.featuresLabel} />
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
          <p className="eyebrow md:col-span-3">{c.stackLabel}</p>
          <p className="font-mono text-sm text-ink md:col-span-9">{stack.join(' · ')}</p>
        </div>
      </section>

      {/* YASAL */}
      <section className="mx-auto max-w-6xl px-5 pb-12 md:px-8">
        <SectionHeading label={c.legalLabel} />
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
