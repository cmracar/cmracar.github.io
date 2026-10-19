import Image from 'next/image'
import Link from 'next/link'
import { Mail, FileText, Shield, UserX, Swords, Tent, Route, Trophy, Moon, Sparkles, Instagram, Users, Snowflake } from 'lucide-react'
import { SectionHeading } from '../components/Status'
import StoreBadges from '../yelken/StoreBadges'
import { storeStatus } from '../yelken/stores'
import { href, type Lang } from '../i18n'
import legal from '../kurultay/legal.json'


const PILLAR_ICONS = [<Tent key="0" size={20} />, <Moon key="1" size={20} />, <Route key="2" size={20} />, <Users key="3" size={20} />, <Sparkles key="4" size={20} />, <Trophy key="5" size={20} />]
const FEATURE_ICONS = [<Swords key="0" size={22} />, <Route key="1" size={22} />, <Users key="2" size={22} />, <Sparkles key="3" size={22} />, <Snowflake key="4" size={22} />, <Trophy key="5" size={22} />]

/**
 * Metinler mağaza açıklamasından (kurultay/Docs/store/magaza_metinleri.md);
 * ekranlar Play görselleri (Docs/store/screens/play/{tr,en}_0* → 1600×900,
 * public/kurultay/screens/{tr,en}/0N.jpg; sıra: gece, oba, bey, Gökbörü,
 * kervan, göç yolu, Kurultay, harita).
 */
const COPY = {
  tr: {
    back: '← Projeler',
    name: 'Kurultay: Bozkır Savunması',
    platforms: 'iPhone ve iPad’de ücretsiz · Android kapalı testte',
    body: 'Kara Tuğ birliği bozkırı yakıyor. Boylar dağınık, otağlar yalnız. Küçük bir obanın beyi Gökbörü olarak obanı kur, gece akınlarına göğüs ger, boyları birleştir ve Kurultay’da Han seçil. Türkçe ve İngilizce; İspanyolca ve Rusça sıradaki sürümle geliyor.',
    loop: 'Oyun döngüsü',
    pillars: ['Gündüz kur', 'Gece savun', 'Göç et', 'Kurultay', 'Destan', 'Haftanın Akını'],
    videos: 'Tanıtım videoları: Instagram',
    shotsLabel: 'Ekranlar',
    shots: [
      { title: 'Gece savunması', desc: 'Akıncılar dört yandan gelir; Gökbörü’yü kendin yönet, Ok Yağmuru, Savaş Narası ve Kılıç Kasırgası ile karşıla.' },
      { title: 'Gündüz kur', desc: 'Otağın çevresine kule, çit ve yapılar kur; akın gece başlar.' },
      { title: 'Bey geceleri', desc: 'Her beş gecede bir Kara Tuğ’un beylerinden biri gelir: Kızılmızrak, Demir Tarkan, Kızıl Hatun.' },
      { title: 'Gökbörü', desc: 'Teçhizatını ve Boz At’ın eşyalarını dövdür, yeteneklerini geliştir, görünüşünü seç.' },
      { title: 'Göç', desc: 'Yolda pusular var; kervanı koru, sürüyü dağıtma.' },
      { title: 'Yeni yurt', desc: 'Otlak tükenince yeni yurdu seç; her konağın nimeti ve tehlikesi var.' },
      { title: 'Kurultay', desc: 'Beylerin boyları otağında toplanır; her ant bir nimet ve bir yük getirir.' },
      { title: 'Destan', desc: 'Bozkır Haritası’nda bölgeleri fethet; bozkırı birleştir, Han ol.' },
    ],
    featuresLabel: 'Özellikler',
    features: [
      { title: 'Kahramanla savun', desc: 'Gökbörü’yü kendin yönet: Kılıç Kasırgası, Kement, Kurt Uluması ve Kut Kalkanı gibi yeteneklerle savaşın ortasına dal.' },
      { title: 'Göç et', desc: 'Otlak tükenir, mevsim döner. Obanı kağnılara yükle, kervanı pusulardan koru; bereketli otlak, nehir kıyısı, dağ eteği ya da pazar yeri seni bekler.' },
      { title: 'Kurultay', desc: 'Beyi yenince boylar otağında toplanır; biriyle birleş. Boylarla dostluğun seferden sefere büyür.' },
      { title: 'Destan', desc: 'Her sefer bir yıl: 20 geceye dayan, Han seçil. Düşsen de Kut ile Kam Ağacı’nı büyütür, Gökbörü’yü güçlendirir, Er’den Alp’e, Bey’den Han’a yükselirsin.' },
      { title: 'Çile kademeleri', desc: 'Zorluğu kendin seç; Bozkır Haritası’nda bölgeleri fethet.' },
      { title: 'Haftanın Akını', desc: 'Her hafta herkese aynı harita, aynı akınlar, eşit güç. Hesapla gir, haftalık sıralamada yerini al.' },
    ],
    stackLabel: 'Teknolojiler',
    legalLabel: 'Yasal ve destek',
  },
  en: {
    back: '← Projects',
    name: 'Kurultay: Steppe Defense',
    platforms: 'Free on iPhone and iPad · Android in closed testing',
    body: 'The Black Banner is burning the steppe. The clans are scattered, the great tents alone. As Gökbörü, chief of a small camp, build your camp, hold back the night raids, unite the clans and be named Khan at the Kurultay. In Turkish and English; Spanish and Russian arrive with the next update.',
    loop: 'Game loop',
    pillars: ['Build by day', 'Defend by night', 'Migrate', 'The Kurultay', 'The saga', 'Raid of the Week'],
    videos: 'Promo videos: Instagram',
    shotsLabel: 'Screens',
    shots: [
      { title: 'Night defense', desc: 'Raiders come from every side; lead Gökbörü yourself and meet them with Arrow Rain, War Cry and Blade Storm.' },
      { title: 'Build by day', desc: 'Raise towers, fences and buildings around the Great Tent; the raid comes at night.' },
      { title: 'Chief nights', desc: 'Every fifth night one of the Black Banner’s chiefs rides in: Redlance, the Iron Tarkhan, the Crimson Khatun.' },
      { title: 'Gökbörü', desc: 'Forge his gear and the Grey Steed’s tack, level up his skills and choose his look.' },
      { title: 'Migration', desc: 'Ambushes wait on the road; guard the caravan and keep the herd together.' },
      { title: 'New land', desc: 'When the pasture runs dry, choose new land; every camp has a blessing and a danger.' },
      { title: 'The Kurultay', desc: 'The clans of the chiefs gather at your tent; every oath brings a blessing and a burden.' },
      { title: 'The saga', desc: 'Conquer regions on the Steppe Map; unite the steppe and become Khan.' },
    ],
    featuresLabel: 'Features',
    features: [
      { title: 'Defend with a hero', desc: 'Lead Gökbörü yourself: charge into battle with skills like Blade Storm, Lasso, Wolf Howl and Kut Shield.' },
      { title: 'Migrate', desc: 'The pasture runs dry, the seasons turn. Pack your camp onto ox carts and guard the caravan from ambushes; rich pastures, riverbanks, foothills or a market town await.' },
      { title: 'The Kurultay', desc: 'Defeat a chief and the clans gather at your tent; join one. Your friendship with the clans grows from campaign to campaign.' },
      { title: 'The saga', desc: 'Each campaign is one year: survive 20 nights and be named Khan. Even when you fall you grow the Kam Tree with Kut, make Gökbörü stronger and rise from Warrior to Hero, from Chief to Khan.' },
      { title: 'Ordeal tiers', desc: 'Choose your own challenge, and conquer regions on the Steppe Map.' },
      { title: 'Raid of the Week', desc: 'Every week: the same map, the same raids and equal power for everyone. Sign in and climb the weekly leaderboard.' },
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
  const shots = c.shots.map((x, i) => ({ ...x, src: `/kurultay/screens/${lang}/0${i + 1}.jpg` }))
  const status = storeStatus('kurultay', lang)

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
                src={lang === 'en' ? '/kurultay/logo-en.png' : '/kurultay/logo.png'}
                alt={c.name}
                width={1900}
                height={965}
                priority
                className="h-auto w-full max-w-[520px]"
              />
              <p className="mt-8 inline-flex items-center gap-2 font-mono text-xs text-white/60">
                <span className={`h-1.5 w-1.5 rounded-full ${status.live ? 'bg-live' : 'bg-[#e0a948]'}`} aria-hidden="true" />
                {status.label} · {c.platforms}
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">{c.body}</p>
              <div className="mt-8">
                <StoreBadges app="kurultay" lang={lang} />
              </div>
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
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2">
            {shots.map(shot => (
              <figure key={shot.src}>
                <Image
                  src={shot.src}
                  alt={`Kurultay — ${shot.title}`}
                  width={1600}
                  height={900}
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
        <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
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
