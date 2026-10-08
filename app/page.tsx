import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ProfileImage from '@/public/avatar.png'
import projectsData from '../projects.json'
import { articles, MEDIUM_PROFILE } from './articles'
import ArticleList from './components/ArticleList'
import ResumeMenu from './components/ResumeMenu'
import Status, { SectionHeading } from './components/Status'
import StoreBadges from './yelken/StoreBadges'
import { yelkenStatus } from './yelken/stores'

const CATEGORY_LABELS: Record<string, string> = {
  carbon: 'Carbon Consulting',
  beyondguard: 'Beyond Guard',
  freelance: 'Bağımsız',
}

/** Ana sayfadaki kısa liste; kendi ürünler yukarıda ayrıca gösteriliyor. */
const FEATURED = [
  'BeyondGuard UX/UI',
  'Artifin Teftiş AI App UI/UX',
  'Akbank Hazine İzleme Sistemi UX/UI',
  'Tbot Analytic Screens UI',
  'Carbonetz UX/UI',
]

const selected = FEATURED.flatMap(name => projectsData.filter(p => p.projectName === name)).map(p => ({
  title: p.projectName,
  org: CATEGORY_LABELS[p.category] ?? p.category,
  desc: p.description,
  highlights: 'highlights' in p ? (p.highlights as string[]) : [],
  tech: p.technologies.filter(t => t !== 'HTML' && t !== 'CSS').slice(0, 4),
}))

const practice = [
  {
    title: 'Kurumsal arayüzler',
    desc: 'Danışmanlık tarafında bankacılık, telekom ve denetim alanındaki kurumsal firmalar için tasarım sisteminden ekrana kadar front-end mimarisi.',
  },
  {
    title: 'Yapay zekâ arayüzleri',
    desc: 'Beyond Guard’ın yapay zekâ güvenliği ürünü; akışlı (streaming) yanıtlar, ajan arayüzleri ve sohbet deneyimleri: SSE, AG-UI, CopilotKit, Vercel AI SDK.',
  },
  {
    title: 'Mobil ürünler',
    desc: 'React Native ve Unity ile fikirden mağaza yayınına kadar uçtan uca, tek başıma yürüttüğüm uygulamalar.',
  },
]

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

export default function Home() {
  const yelken = yelkenStatus()

  return (
    <main>
      {/* GİRİŞ */}
      <section className="mx-auto max-w-6xl px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
        <div className="grid items-end gap-12 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="eyebrow">Senior Front-End Developer · İzmir</p>
            <h1 className="mt-6 font-serif text-[2.6rem] leading-[1.08] tracking-tight text-ink md:text-6xl">
              Gün içinde kurumsal arayüzler, geri kalan zamanda kendi{' '}
              <em className="text-accent">uygulamalarım.</em>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">
              Carbon Consulting’de danışmanlık tarafında kurumsal firmalara arayüz geliştiriyorum.
              Beyond Guard’da ise yapay zekâ güvenliği
              ürününün arayüzünü geliştiriyorum. Bunun dışında kendi
              uygulamalarımı tasarımından koduna, mağaza yayınına kadar tek başıma geliştiriyorum.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#uygulamalar"
                className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-85"
              >
                Uygulamalarım <ArrowRight size={16} />
              </a>
              <ResumeMenu
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
            <span className="mr-2 text-ink">01</span>Kendi uygulamalarım
          </p>
          <h2 className="mt-3 max-w-2xl font-serif text-4xl leading-tight tracking-tight text-ink md:text-5xl">
            Fikirden mağazaya, tek başıma.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted">
            Ürün tasarımı, kod, içerik, sunucu, mağaza kayıtları, yasal metinler ve tanıtım videoları —
            her uygulamanın her parçası bana ait.
          </p>

          {/* Yelken */}
          <article className="mt-16 grid gap-10 md:grid-cols-12 md:gap-14">
            <Link
              href="/yelken"
              aria-label="Yelken sayfası"
              className="group block self-start overflow-hidden rounded-lg border border-line bg-[#1A1231] md:col-span-7"
            >
              <div className="flex aspect-[16/10] items-start justify-center gap-[2.5%] overflow-hidden px-[2.5%] pt-[14%]">
                {['/yelken/home.jpg', '/yelken/faceoff.jpg', '/yelken/wordhunt.jpg'].map((src, i) => (
                  <Image
                    key={src}
                    src={src}
                    alt={i === 0 ? 'Yelken ekran görüntüleri' : ''}
                    width={1080}
                    height={1920}
                    sizes="(min-width: 768px) 20vw, 30vw"
                    className={`w-[31%] shrink-0 rounded-xl border border-white/10 shadow-2xl shadow-black/50 transition-transform duration-500 group-hover:-translate-y-1.5 ${i === 1 ? '' : 'translate-y-[10%]'}`}
                  />
                ))}
              </div>
            </Link>
            <div className="md:col-span-5">
              <Status label={yelken.label} live={yelken.live} />
              <h3 className="mt-4 font-serif text-4xl text-ink">Yelken</h3>
              <p className="mt-2 text-lg text-ink">Kelime bulmacası ve dil öğretmeni.</p>
              <p className="mt-4 leading-relaxed text-muted">
                Arayüz ve bulmaca dilini ayrı seçersin: aynıysa saf bir kelime oyunu, farklıysa
                çözdüğün her kelime aralıklı tekrar programına girer. Beş oyun modu, günlük bulmaca,
                çevrimdışı oyun; isteyene online sıralama ve gerçek rakiplerle Düello.
              </p>
              <Did
                items={[
                  '11.000’den fazla kelimelik üç dilli dağarcık',
                  'Kupa Ligi ve gerçek zamanlı Düello (Supabase)',
                  'Tanıtım videoları ve mağaza görselleri',
                ]}
              />
              <AppFacts
                facts={[
                  { label: 'Platform', value: 'Android · iOS' },
                  { label: 'Diller', value: 'Türkçe, İngilizce, İspanyolca' },
                  { label: 'Teknoloji', value: 'React Native, Expo, SQLite' },
                  { label: 'Hesap', value: 'Gerekmez; isteğe bağlı giriş' },
                ]}
              />
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <StoreBadges size="sm" />
                <Link href="/yelken" className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent">
                  Ayrıntılar <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </article>

          {/* Kurultay */}
          <article className="mt-24 grid gap-10 md:grid-cols-12 md:gap-14">
            <Link
              href="/kurultay"
              aria-label="Kurultay sayfası"
              className="group block self-start overflow-hidden rounded-lg border border-line bg-black md:order-2 md:col-span-7"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src="/kurultay/home.jpg"
                  alt="Kurultay ana ekranı"
                  fill
                  sizes="(min-width: 768px) 55vw, 100vw"
                  className="object-cover object-left transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </Link>
            <div className="md:order-1 md:col-span-5">
              <Status label="Geliştiriliyor" live={false} />
              <h3 className="mt-4 font-serif text-4xl text-ink">Kurultay</h3>
              <p className="mt-2 text-lg text-ink">Bozkırda üs savunması ve göç.</p>
              <p className="mt-4 leading-relaxed text-muted">
                Gündüz obanı kurarsın, gece Gökbörü’yü kendin yürütüp akınlara göğüs gerersin. Otlak
                tükenince göç edersin; Kurultay’da boyları birleştirip Han seçilirsin. Haftanın Akını’nda
                herkes aynı haritada, eşit güçle yarışır.
              </p>
              <Did
                items={[
                  'Bütün 3D modeller, arayüz çizimleri ve sesler koddan üretiliyor',
                  'Kahraman kontrollü savunma, göç ve hafif roguelite ilerleme',
                  'Google ve Apple girişiyle haftalık sıralama',
                ]}
              />
              <AppFacts
                facts={[
                  { label: 'Platform', value: 'Android · iOS' },
                  { label: 'Diller', value: 'Türkçe, İngilizce' },
                  { label: 'Teknoloji', value: 'Unity 6, C#, URP' },
                  { label: 'Sunucu', value: 'Supabase' },
                ]}
              />
              <div className="mt-8">
                <Link href="/kurultay" className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent">
                  Ayrıntılar <ArrowRight size={15} />
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
          label="Seçili işler"
          title="Danışmanlıkta ve Beyond Guard’da geliştirdiklerim."
          aside={
            <Link href="/projects" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink">
              Tüm projeler <ArrowRight size={15} />
            </Link>
          }
        />
        <ul className="border-b border-line">
          {selected.map(project => (
            <li key={project.title} className="grid gap-3 border-t border-line py-7 md:grid-cols-12 md:gap-6">
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
          label="Yazılar"
          title="Medium’da yazdıklarım."
          aside={
            <div className="flex gap-5 text-sm">
              <Link href="/yazilar" className="inline-flex items-center gap-1.5 text-muted hover:text-ink">
                Tüm yazılar <ArrowRight size={15} />
              </Link>
              <a href={MEDIUM_PROFILE} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-ink">
                Medium ↗
              </a>
            </div>
          }
        />
        <ArticleList items={articles.slice(0, 4)} />
      </section>

      {/* ÇALIŞMA ALANLARI */}
      <section className="mx-auto max-w-6xl px-5 py-24 md:px-8">
        <SectionHeading index="04" label="Çalışma alanları" />
        <div className="grid gap-10 md:grid-cols-3">
          {practice.map(item => (
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
