import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ProfileImage from '@/public/avatar.png'
import { articles, MEDIUM_PROFILE } from '../articles'
import ArticleList from '../components/ArticleList'
import ResumeMenu from '../components/ResumeMenu'
import Status, { SectionHeading } from '../components/Status'
import { href, type Lang } from '../i18n'
import { localizedProjects } from '../projects-data'
import StoreBadges from '../yelken/StoreBadges'
import { storeStatus, yelkenStatus } from '../yelken/stores'

const CATEGORY_LABELS: Record<Lang, Record<string, string>> = {
  tr: { carbon: 'Carbon Consulting', beyondguard: 'Beyond Guard', freelance: 'Bağımsız' },
  en: { carbon: 'Carbon Consulting', beyondguard: 'Beyond Guard', freelance: 'Independent' },
}

/** Ana sayfadaki kısa liste (projects.json'daki Türkçe adlar); kendi ürünler yukarıda ayrıca. */
const FEATURED = [
  'BeyondGuard UX/UI',
  'Artifin Teftiş AI App UI/UX',
  'Akbank Hazine İzleme Sistemi UX/UI',
  'Tbot Analytic Screens UI',
  'Carbonetz UX/UI',
]

const COPY = {
  tr: {
    hero: {
      title: (
        <>
          Gün içinde kurumsal arayüzler, geri kalan zamanda kendi <em className="text-accent">uygulamalarım.</em>
        </>
      ),
      body:
        'Carbon Consulting’de danışmanlık tarafında kurumsal firmalara arayüz geliştiriyorum. Beyond Guard’da ise yapay zekâ güvenliği ürününün arayüzünü geliştiriyorum. Bunun dışında kendi uygulamalarımı tasarımından koduna, mağaza yayınına kadar tek başıma geliştiriyorum.',
      apps: 'Uygulamalarım',
    },
    apps: {
      label: 'Kendi uygulamalarım',
      title: 'Fikirden mağazaya, tek başıma.',
      body: 'Ürün tasarımı, kod, içerik, sunucu, mağaza kayıtları, yasal metinler ve tanıtım videoları — her uygulamanın her parçası bana ait.',
      videos: 'Uygulamaların videoları ve tanıtımları:',
      details: 'Ayrıntılar',
    },
    yelken: {
      page: 'Yelken sayfası',
      shots: 'Yelken ekran görüntüleri',
      tagline: 'Kelime Oyunu & Bulmaca',
      body: 'Kare bulmaca, kelime avı, adam asmaca, kelime türetme ve gemini sürüp kelime kurduğun Serbest Sefer — beş kelime oyunu tek bir denizde. İnternetsiz oynanır; istersen aynı oyunla İngilizce ya da İspanyolca öğrenirsin. İsteyene sınırsız Düello, Kupa Ligi ve her hafta başka bir oyunda Haftanın Yarışı.',
      did: ['16.900 kelime; TDK, RAE ve Cambridge’e karşı doğrulandı', 'Sınırsız Düello, Kupa Ligi ve Haftanın Yarışı (Supabase)', 'Tanıtım videoları ve mağaza görselleri'],
      facts: [
        { label: 'Platform', value: 'Android · iOS' },
        { label: 'Diller', value: 'Türkçe, İngilizce, İspanyolca' },
        { label: 'Teknoloji', value: 'React Native, Expo, SQLite' },
        { label: 'Hesap', value: 'Gerekmez; isteğe bağlı giriş' },
      ],
    },
    kurultay: {
      page: 'Kurultay sayfası',
      shot: 'Kurultay ekranları: ana ekran, gece savunması, göç kervanı ve Kurultay',
      tagline: 'Bozkır Savunması',
      body: 'Gündüz obanı kur, gece Gökbörü’yü kendin yönetip akınları karşıla, her beş gecede bir beyle yüzleş. Otlak tükenince göç et; Kurultay’da boyları birleştir ve Han seçil. Haftanın Akını’nda herkes aynı haritada, eşit güçle yarışır.',
      did: ['Bütün 3D modeller, arayüz çizimleri ve sesler koddan üretiliyor', 'Kahraman yetenekleri, Kara Tuğ’un beyleri, göç ve Kurultay antları', 'Google ve Apple girişiyle haftalık sıralama'],
      facts: [
        { label: 'Platform', value: 'iOS · Android (kapalı test)' },
        { label: 'Diller', value: 'Türkçe, İngilizce' },
        { label: 'Teknoloji', value: 'Unity 6, C#, URP' },
        { label: 'Sunucu', value: 'Supabase' },
      ],
    },
    work: { label: 'Seçili işler', title: 'Danışmanlıkta ve Beyond Guard’da geliştirdiklerim.', all: 'Tüm projeler' },
    writing: { label: 'Yazılar', title: 'Medium’da yazdıklarım.', all: 'Tüm yazılar' },
    practice: {
      label: 'Çalışma alanları',
      items: [
        { title: 'Kurumsal arayüzler', desc: 'Danışmanlık tarafında bankacılık, telekom ve denetim alanındaki kurumsal firmalar için tasarım sisteminden ekrana kadar front-end mimarisi.' },
        { title: 'Yapay zekâ arayüzleri', desc: 'Beyond Guard’ın yapay zekâ güvenliği ürünü; akışlı (streaming) yanıtlar, ajan arayüzleri ve sohbet deneyimleri: SSE, AG-UI, CopilotKit, Vercel AI SDK.' },
        { title: 'Mobil ürünler', desc: 'React Native ve Unity ile fikirden mağaza yayınına kadar uçtan uca, tek başıma yürüttüğüm uygulamalar.' },
      ],
    },
  },
  en: {
    hero: {
      title: (
        <>
          Enterprise interfaces by day, my own <em className="text-accent">apps</em> the rest of the time.
        </>
      ),
      body:
        'At Carbon Consulting I build interfaces for enterprise clients on the consulting side. At Beyond Guard I build the interface of the AI security product. On top of that, I build my own apps on my own — from design and code to store release.',
      apps: 'My apps',
    },
    apps: {
      label: 'My own apps',
      title: 'From idea to app store, on my own.',
      body: 'Product design, code, content, backend, store listings, legal texts and promo videos — every part of every app is mine.',
      videos: 'App videos and promos:',
      details: 'Details',
    },
    yelken: {
      page: 'Yelken page',
      shots: 'Yelken screenshots',
      tagline: 'Word Game & Puzzles',
      body: 'Crossword, word search, hangman, a word connect game and a Free Voyage where you sail your ship and build words — five word games on one sea. Plays offline; use the same games to learn Spanish or Turkish if you like. Unlimited Duels, a Trophy League and a Weekly Race in a different game every week.',
      did: ['16,900 words checked against TDK, RAE and Cambridge', 'Unlimited Duels, the Trophy League and the Weekly Race (Supabase)', 'Promo videos and store graphics'],
      facts: [
        { label: 'Platform', value: 'Android · iOS' },
        { label: 'Languages', value: 'Turkish, English, Spanish' },
        { label: 'Stack', value: 'React Native, Expo, SQLite' },
        { label: 'Account', value: 'Not required; optional sign-in' },
      ],
    },
    kurultay: {
      page: 'Kurultay page',
      shot: 'Kurultay screens: home, night defense, migration caravan and the Kurultay',
      tagline: 'Steppe Defense',
      body: 'Build your camp by day, lead Gökbörü yourself against the night raids and face a chief every fifth night. When the pasture runs dry, migrate; unite the clans at the Kurultay and be named Khan. In the Raid of the Week everyone plays the same map with equal power.',
      did: ['All 3D models, UI art and audio are generated from code', 'Hero skills, the Black Banner’s chiefs, migration and clan oaths', 'Weekly leaderboard with Google and Apple sign-in'],
      facts: [
        { label: 'Platform', value: 'iOS · Android (closed testing)' },
        { label: 'Languages', value: 'Turkish, English' },
        { label: 'Stack', value: 'Unity 6, C#, URP' },
        { label: 'Backend', value: 'Supabase' },
      ],
    },
    work: { label: 'Selected work', title: 'What I built in consulting and at Beyond Guard.', all: 'All projects' },
    writing: { label: 'Writing', title: 'What I write on Medium.', all: 'All articles' },
    practice: {
      label: 'Focus areas',
      items: [
        { title: 'Enterprise interfaces', desc: 'Front-end architecture from design system to screen for enterprise clients in banking, telecom and audit, on the consulting side.' },
        { title: 'AI interfaces', desc: 'Beyond Guard’s AI security product; streaming responses, agent interfaces and chat experiences: SSE, AG-UI, CopilotKit, Vercel AI SDK.' },
        { title: 'Mobile products', desc: 'Apps I run end to end on my own with React Native and Unity, from idea to store release.' },
      ],
    },
  },
}

// Ana sayfadaki Kurultay ekranları: ana ekran, gece, kervan, Kurultay
const KURULTAY_SHOTS = [1, 2, 3, 4]

type Fact = { label: string; value: string }

function AppFacts({ facts }: { facts: Fact[] }) {
  return (
    <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6">
      {facts.map(fact => (
        <div key={fact.label}>
          <dt className="eyebrow">{fact.label}</dt>
          <dd className="mt-1.5 text-sm text-ink">{fact.value}</dd>
        </div>
      ))}
    </dl>
  )
}

function Did({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-2 text-sm text-ink">
      {items.map(item => (
        <li key={item} className="flex gap-3">
          <span className="mt-[0.6em] h-px w-3 shrink-0 bg-faint" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function HomeView({ lang }: { lang: Lang }) {
  const c = COPY[lang]
  const yelken = yelkenStatus(lang)
  const kurultay = storeStatus('kurultay', lang)
  const projects = localizedProjects(lang)
  const selected = FEATURED.flatMap(name => projects.filter(p => p.key === name)).map(p => ({
    ...p,
    org: CATEGORY_LABELS[lang][p.category] ?? p.category,
    tech: p.technologies.slice(0, 4),
  }))

  return (
    <main lang={lang}>
      {/* GİRİŞ */}
      <section className="mx-auto max-w-6xl px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
        <div className="grid items-end gap-12 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="eyebrow">Senior Frontend Engineer, AI Products · İzmir</p>
            <h1 className="mt-6 font-serif text-[2.6rem] leading-[1.08] tracking-tight text-ink md:text-6xl">{c.hero.title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">{c.hero.body}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#uygulamalar"
                className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-85"
              >
                {c.hero.apps} <ArrowRight size={16} />
              </a>
              <ResumeMenu
                lang={lang}
                buttonClassName="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
              />
            </div>
          </div>
          <div className="hidden md:col-span-4 md:block">
            <Image
              src={ProfileImage}
              alt="Cemre Acar"
              priority
              className="ml-auto aspect-square w-full max-w-[240px] rounded-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* UYGULAMALAR */}
      <section id="uygulamalar" className="scroll-mt-16 border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="eyebrow">
            <span className="mr-2 text-ink">01</span>
            {c.apps.label}
          </p>
          <h2 className="mt-3 max-w-2xl font-serif text-4xl leading-tight tracking-tight text-ink md:text-5xl">{c.apps.title}</h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted">{c.apps.body}</p>
          <p className="mt-4 text-sm text-muted">
            {c.apps.videos}{' '}
            <a href="https://www.instagram.com/cmracardev" target="_blank" rel="noopener noreferrer" className="link-underline text-ink">
              Instagram @cmracardev
            </a>{' '}
            ·{' '}
            <a href="https://www.youtube.com/@cmracardev" target="_blank" rel="noopener noreferrer" className="link-underline text-ink">
              YouTube
            </a>
          </p>

          {/* Yelken */}
          <article className="mt-16 grid gap-10 md:grid-cols-12 md:gap-14">
            <Link
              href={href(lang, '/yelken')}
              aria-label={c.yelken.page}
              className="group block self-start overflow-hidden rounded-lg border border-line bg-[#1A1231] md:col-span-7"
            >
              <div className="flex aspect-[16/10] items-start justify-center gap-[2.5%] overflow-hidden px-[2.5%] pt-[14%]">
                {[2, 1, 4].map(n => `/yelken/screens/${lang}/${n}.jpg`).map((src, i) => (
                  // Dik telefon: koyu gövde, metal kenar, üstte kamera adası (Kurultay'daki çerçeveyle aynı)
                  <div
                    key={src}
                    className={`w-[31%] shrink-0 rounded-[14px] bg-gradient-to-b from-[#2a2724] to-[#121110] p-[4px] shadow-2xl shadow-black/60 ring-1 ring-white/20 transition-transform duration-500 group-hover:-translate-y-1.5 sm:rounded-[22px] sm:p-[6px] ${i === 1 ? '' : 'translate-y-[10%]'}`}
                  >
                    <div className="relative overflow-hidden rounded-[10px] bg-black sm:rounded-[16px]">
                      <Image
                        src={src}
                        alt={i === 0 ? c.yelken.shots : ''}
                        width={1080}
                        height={1920}
                        sizes="(min-width: 768px) 20vw, 30vw"
                        className="block h-auto w-full"
                      />
                      <span className="absolute left-1/2 top-[5px] h-[5px] w-[18px] sm:top-[7px] sm:h-[7px] sm:w-[26px] -translate-x-1/2 rounded-full bg-black" aria-hidden="true" />
                    </div>
                  </div>
                ))}
              </div>
            </Link>
            <div className="md:col-span-5">
              <Status label={yelken.label} live={yelken.live} />
              <h3 className="mt-4 font-serif text-4xl text-ink">Yelken</h3>
              <p className="mt-2 text-lg text-ink">{c.yelken.tagline}</p>
              <p className="mt-4 leading-relaxed text-muted">{c.yelken.body}</p>
              <Did items={c.yelken.did} />
              <AppFacts facts={c.yelken.facts} />
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <StoreBadges size="sm" lang={lang} />
                <Link href={href(lang, '/yelken')} className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent">
                  {c.apps.details} <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </article>

          {/* Kurultay */}
          <article className="mt-24 grid gap-10 md:grid-cols-12 md:gap-14">
            <Link
              href={href(lang, '/kurultay')}
              aria-label={c.kurultay.page}
              className="group block self-start overflow-hidden rounded-lg border border-line bg-[#0d0b09] bg-[radial-gradient(ellipse_at_50%_35%,rgba(224,169,72,0.16),transparent_65%)] md:order-2 md:col-span-7"
            >
              {/* Oyun ekranları (public/kurultay/home/{tr,en}/N.jpg, mağaza ham görüntüleri)
                  sağa sola kayarak alt alta; üzerine gelince araları açılır */}
              <div className="flex flex-col px-[5%] py-[6%]">
                {KURULTAY_SHOTS.map((n, i) => (
                  // Yan yatırılmış telefon: koyu gövde, metal kenar, solda kamera adası
                  <div
                    key={n}
                    style={{ zIndex: i + 1 }}
                    className={`relative w-[82%] rounded-[14px] bg-gradient-to-b from-[#2a2724] to-[#121110] p-[4px] shadow-2xl shadow-black/70 ring-1 ring-white/20 transition-transform duration-500 sm:rounded-[22px] sm:p-[6px] ${
                      i > 0 ? '-mt-[8%]' : ''
                    } ${i % 2 ? 'self-end group-hover:translate-x-[3%]' : 'self-start group-hover:-translate-x-[3%]'}`}
                  >
                    <div className="relative overflow-hidden rounded-[10px] bg-black sm:rounded-[16px]">
                      <Image
                        src={`/kurultay/home/${lang}/${n}.jpg`}
                        alt={i === 0 ? c.kurultay.shot : ''}
                        width={1400}
                        height={644}
                        sizes="(min-width: 768px) 45vw, 85vw"
                        className="block h-auto w-full"
                      />
                      <span className="absolute left-[5px] top-1/2 h-[18px] w-[5px] sm:left-[7px] sm:h-[26px] sm:w-[7px] -translate-y-1/2 rounded-full bg-black" aria-hidden="true" />
                    </div>
                  </div>
                ))}
              </div>
            </Link>
            <div className="md:order-1 md:col-span-5">
              <Status label={kurultay.label} live={kurultay.live} />
              <h3 className="mt-4 font-serif text-4xl text-ink">Kurultay</h3>
              <p className="mt-2 text-lg text-ink">{c.kurultay.tagline}</p>
              <p className="mt-4 leading-relaxed text-muted">{c.kurultay.body}</p>
              <Did items={c.kurultay.did} />
              <AppFacts facts={c.kurultay.facts} />
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <StoreBadges size="sm" lang={lang} app="kurultay" />
                <Link href={href(lang, '/kurultay')} className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent">
                  {c.apps.details} <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* SEÇİLİ İŞLER */}
      <section className="mx-auto max-w-6xl px-5 pt-24 md:px-8">
        <SectionHeading
          index="02"
          label={c.work.label}
          title={c.work.title}
          aside={
            <Link href={href(lang, '/projects')} className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink">
              {c.work.all} <ArrowRight size={15} />
            </Link>
          }
        />
        <ul className="border-b border-line">
          {selected.map(project => (
            <li key={project.key} className="grid gap-3 border-t border-line py-7 md:grid-cols-12 md:gap-6">
              <div className="md:col-span-4">
                <h3 className="text-lg font-medium text-ink">{project.title}</h3>
                <p className="mt-1 font-mono text-xs text-faint">{project.org}</p>
              </div>
              <div className="md:col-span-8">
                <p className="text-sm leading-relaxed text-muted">{project.desc}</p>
                <Did items={project.highlights} />
                <p className="mt-4 font-mono text-xs text-faint">{project.tech.join(' · ')}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* YAZILAR */}
      <section className="mx-auto max-w-6xl px-5 pt-24 md:px-8">
        <SectionHeading
          index="03"
          label={c.writing.label}
          title={c.writing.title}
          aside={
            <div className="flex gap-5 text-sm">
              <Link href={href(lang, '/yazilar')} className="inline-flex items-center gap-1.5 text-muted hover:text-ink">
                {c.writing.all} <ArrowRight size={15} />
              </Link>
              <a href={MEDIUM_PROFILE} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-ink">
                Medium ↗
              </a>
            </div>
          }
        />
        <ArticleList items={articles.slice(0, 4)} lang={lang} />
      </section>

      {/* ÇALIŞMA ALANLARI */}
      <section className="mx-auto max-w-6xl px-5 py-24 md:px-8">
        <SectionHeading index="04" label={c.practice.label} />
        <div className="grid gap-10 md:grid-cols-3">
          {c.practice.items.map(item => (
            <div key={item.title}>
              <h3 className="font-serif text-xl text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
