import Image from 'next/image'
import Link from 'next/link'
import { Mail, FileText, Shield, Languages, Grid3x3, Search, Anchor, Sailboat, Flag, UserX, Swords, Youtube, Instagram, Compass, BookOpen, CalendarDays, Gem } from 'lucide-react'
import Status, { SectionHeading } from '../components/Status'
import { href, type Lang } from '../i18n'
import legal from '../yelken/legal.json'
import StoreBadges from '../yelken/StoreBadges'
import { yelkenStatus } from '../yelken/stores'
import YouTube from '../yelken/YouTube'


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
function Wordmark({ name, subtitle }: { name: string; subtitle?: string }) {
  const letters = [...name.toLocaleUpperCase('tr')]
  return (
    <h1 className="text-4xl font-extrabold tracking-[0.18em] text-ink md:text-5xl">
      {/* Ekran okuyucu ve arama motoru tam adı okusun: "Yelken: Kelime Oyunu & Bulmaca" */}
      <span className="sr-only">{subtitle ? `${name}: ${subtitle}` : name}</span>
      <span aria-hidden="true">
        {letters.map((ch, i) => (
          <span key={i} className={i === 2 ? 'text-[#D99A0B] dark:text-[#FBBF24]' : undefined}>
            {ch}
          </span>
        ))}
      </span>
    </h1>
  )
}


/** YouTube kanalı: @cmracardev. Yatay fragman liste dışı, Shorts herkese açık. */
const CHANNEL = 'https://www.youtube.com/@cmracardev'
/** Instagram: @cmracardev — uygulamaların videoları ve tanıtımları. */
const INSTAGRAM = 'https://www.instagram.com/cmracardev'
/**
 * Galeri tek sırada ve **eşit yükseklikte**: sütun genişlikleri videoların
 * en-boy oranından (16:9 → 256, 9:16 → 81; eşit yükseklikte genişlik oranı
 * 16/9 : 9/16). `fr` boşluklar düşüldükten sonra bölündüğü için yükseklik
 * birebir tutar.
 */
const MODE_ICONS = [<Grid3x3 key="0" size={20} />, <Search key="1" size={20} />, <Compass key="2" size={20} />, <Anchor key="3" size={20} />, <Sailboat key="4" size={20} />, <Swords key="5" size={20} />]
const FEATURE_ICONS = [<Languages key="0" size={22} />, <BookOpen key="1" size={22} />, <Swords key="2" size={22} />, <Flag key="3" size={22} />, <CalendarDays key="4" size={22} />, <Gem key="5" size={22} />]
/**
 * Videolar dile göre (1.3.26 arayüzüyle, 2026-10-24; yelken/marketing/
 * PAYLASIM.md → "Yayındaki videolar"): yatay mağaza fragmanı ve Türkçede iki
 * dikey Short. İngilizce dikey video yok; galeri yalnızca var olanları dizer.
 * Dikey kapaklar videonun kendi karesinden.
 */
type Video = { id: string; vertical: boolean; poster?: string }
const VIDEO_IDS: Record<Lang, Video[]> = {
  tr: [
    { id: '9_5alHVjQCg', vertical: false },
    { id: 'urS2clnDk8I', vertical: true, poster: '/yelken/short-fragman-tr.jpg' },
    { id: '9fNELycPP-c', vertical: true, poster: '/yelken/short-dumen-tr.jpg' },
  ],
  en: [{ id: 'JVt1OXuDwEw', vertical: false }],
}

/**
 * Metinler mağaza açıklamasından (yelken/store/listing.md, 24 Ekim 2026);
 * mod adları uygulamanın kendi çevirilerinden. Ekranlar mağaza görselleri
 * (yelken/store/play/{tr,en}-*.png → public/yelken/screens/{tr,en}/).
 */
const COPY = {
  tr: {
    back: '← Projeler',
    subtitle: 'Kelime Oyunu & Bulmaca',
    lead: 'Altı kelime oyunu, tek bir dümen.',
    body: 'Dümeni çevir, oyununu seç: kare bulmaca, kelime avı, adam asmaca, kelime türetme, ipucundaki kelimenin harflerini gemiyle topladığın Serbest Sefer ve rakibinle aynı bulmacaları oynadığın Düello. iPhone ve Android’de ücretsiz. İnternetsiz oynanır; istersen aynı oyunla İngilizce ya da İspanyolca kelime öğrenirsin. Arayüz dilini ve bulmaca dilini ayrı seçersin: ikisi aynıysa saf bir kelime oyunu, farklıysa çözdüğün her kelime aralıklı tekrar programına girer.',
    modesLabel: 'Oyunlar',
    modes: [
      { name: 'Kesişen Rotalar', kind: 'kare bulmaca' },
      { name: 'Kelime Avı', kind: 'kelime avı' },
      { name: 'Rüzgâr Gülü', kind: 'kelime türetme' },
      { name: 'İskele Düğümü', kind: 'adam asmaca' },
      { name: 'Serbest Sefer', kind: 'harfleri gemiyle topla' },
      { name: 'Düello', kind: 'rakibe meydan oku' },
    ],
    videosLabel: 'Videolar',
    channel: 'YouTube kanalı',
    videos: [
      { title: 'Fragman', meta: 'Yatay' },
      { title: 'Dikey fragman', meta: 'Short' },
      { title: 'Dümen ve Serbest Sefer', meta: 'Short · 24 sn' },
    ],
    shotsLabel: 'Ekranlar',
    shots: ['Dümen', 'Kelime Avı', 'Düello', 'Rüzgâr Gülü', 'Kesişen Rotalar', 'Serbest Sefer', 'Gemi', 'Kaptan'],
    featuresLabel: 'Özellikler',
    features: [
      { title: 'Kelime oyna ya da dil öğren', desc: 'Türkçe, İngilizce ve İspanyolca; dokuz dil eşleşmesinin hepsi oynanır. Öğrenme modunda ipucu kelimenin Türkçe karşılığıdır ve kelime unutmadan önce yeniden karşına gelir.' },
      { title: '17.500 kelime, sözlükle doğrulandı', desc: 'A1’den B2’ye 7.200 İngilizce kelime; 5.700 Türkçe ve 4.500 İspanyolca kelime, 2.000’den fazla atasözü ve deyim. TDK, RAE ve Cambridge’e karşı tek tek doğrulandı.' },
      { title: 'Düello ve Kupa Ligi', desc: 'Rakibinle aynı dört oyunu oyna, Liman’dan Efsane’ye yüksel; arkadaşlarına da meydan oku. Düello sınırsız; Kupa Kalkanı açarsan kaybetsen de kupan düşmez.' },
      { title: 'Haftanın Yarışı', desc: 'Her hafta başka bir oyunda herkes aynı bulmacaları oynar; her günün en iyi beş turu sayılır. İlk üç altın ve elmas kazanır, puan eşiklerinde hedef sandıkları açılır.' },
      { title: 'Günün Seferi ve takvim', desc: 'Her gün herkese aynı bulmaca. Oynadığın her gün alevin büyür, Sefer Takvimi’nin kutusu açılır; bir gün kaçırırsan seri koruyucu devreye girer. Kelimeler cihazında, internetsiz oynanır.' },
      { title: 'Premium', desc: 'Tek seferlik satın alma: reklamlar kalkar, altın harcamalarında %25 indirim, Serbest Sefer sınırsız. Abonelik yok.' },
    ],
    stackLabel: 'Teknolojiler',
    legalLabel: 'Yasal ve destek',
  },
  en: {
    back: '← Projects',
    subtitle: 'Word Game & Puzzles',
    lead: 'Six word games, one helm.',
    body: 'Spin the helm and pick your game: crossword, word search, hangman, word connect, a Free Voyage where your ship catches the letters of a clue’s answer, and Duel, where you play the same puzzles as a rival. Free on iPhone and Android. Play offline, and if you like, use the same games to learn Spanish or Turkish vocabulary. You choose the interface language and the puzzle language separately: match them for a pure word game, or mix them and every word you solve enters a spaced-repetition schedule.',
    modesLabel: 'Games',
    modes: [
      { name: 'Crossing Routes', kind: 'crossword' },
      { name: 'Word Hunt', kind: 'word search' },
      { name: 'Compass Rose', kind: 'word connect' },
      { name: 'Sailor’s Knot', kind: 'hangman' },
      { name: 'Free Voyage', kind: 'catch the letters' },
      { name: 'Duel', kind: 'challenge a rival' },
    ],
    videosLabel: 'Videos',
    channel: 'YouTube channel',
    videos: [
      { title: 'Trailer', meta: 'Landscape' },
    ],
    shotsLabel: 'Screens',
    shots: ['The Helm', 'Word Hunt', 'Duel', 'Compass Rose', 'Crossing Routes', 'Free Voyage', 'Ship', 'Captain'],
    featuresLabel: 'Features',
    features: [
      { title: 'Play words or learn a language', desc: 'English, Turkish and Spanish; all nine language pairs work. In learning mode the clue is the meaning in your language, and each word returns before you forget it.' },
      { title: '17,500 dictionary-checked words', desc: '7,200 English words from A1 to B2, a 5,700-word Turkish set, a 4,500-word Spanish set and more than 2,000 proverbs and idioms — checked against TDK, RAE and Cambridge.' },
      { title: 'Duel and the Trophy League', desc: 'Play the same four games as a rival and climb from Harbor to Legend; challenge your friends too. Duels are unlimited; raise a Trophy Shield and a loss costs you no trophies.' },
      { title: 'Weekly Race', desc: 'Every week everyone plays the same puzzles in a different game; each day’s best five runs count. The top three win gold and gems, and goal chests open as your score grows.' },
      { title: 'Daily Voyage and calendar', desc: 'One puzzle a day, the same for everyone. Every day you play your flame grows and a Voyage Calendar box opens; miss a day and a streak freeze steps in. Every word is on your device, so it plays offline.' },
      { title: 'Premium', desc: 'A one-time purchase: no ads, 25% off every gold price and unlimited Free Voyage. No subscription.' },
    ],
    stackLabel: 'Stack',
    legalLabel: 'Legal and support',
  },
}

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

export default function YelkenView({ lang }: { lang: Lang }) {
  const { brand } = legal
  const status = yelkenStatus(lang)
  const c = COPY[lang]
  const modes = c.modes.map((m, i) => ({ ...m, icon: MODE_ICONS[i] }))
  const features = c.features.map((f, i) => ({ ...f, icon: FEATURE_ICONS[i] }))
  const shots = c.shots.map((title, i) => ({ title, src: `/yelken/screens/${lang}/${i + 1}.jpg` }))
  const videos = c.videos.map((x, i) => ({ ...x, ...VIDEO_IDS[lang][i] }))

  return (
    <main lang={lang}>
      {/* GİRİŞ */}
      <section className="mx-auto max-w-6xl px-5 pb-20 pt-14 md:px-8 md:pt-20">
        <Link href={href(lang, '/projects')} className="eyebrow hover:text-ink">
          {c.back}
        </Link>
        <div className="mt-10 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="flex items-center gap-5">
              <Mark size={72} />
              <div>
                <Wordmark name={brand.app} subtitle={c.subtitle} />
                <p className="mt-1.5 text-sm font-medium text-muted">{c.subtitle}</p>
                <div className="mt-2">
                  <Status label={status.label} live={status.live} />
                </div>
              </div>
            </div>
            <p className="mt-10 font-serif text-3xl leading-snug tracking-tight text-ink md:text-4xl">{c.lead}</p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{c.body}</p>
            <div className="mt-8">
              <StoreBadges lang={lang} />
            </div>
          </div>
          <aside className="md:col-span-4 md:col-start-9">
            <p className="eyebrow mb-4">{c.modesLabel}</p>
            <ul className="divide-y divide-line border-y border-line">
              {modes.map(mode => (
                <li key={mode.name} className="flex items-center gap-3 py-3 text-ink">
                  <span className="text-faint">{mode.icon}</span>
                  {mode.name}
                  <span className="ml-auto font-mono text-xs text-faint">{mode.kind}</span>
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
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-white/50">{c.videosLabel}</p>
            <div className="flex flex-wrap gap-5">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
              >
                <Instagram size={18} /> Instagram
              </a>
              <a
                href={CHANNEL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
              >
                <Youtube size={18} /> {c.channel}
              </a>
            </div>
          </div>
          <div className={`grid grid-cols-2 gap-5 ${videos.length > 1 ? 'md:grid-cols-[256fr_81fr_81fr]' : 'max-w-3xl md:grid-cols-1'}`}>
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

          <p className="mb-8 mt-20 font-mono text-xs uppercase tracking-[0.08em] text-white/50">{c.shotsLabel}</p>
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
                <figcaption className="mt-3 text-sm font-medium text-white">{shot.title}</figcaption>
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
