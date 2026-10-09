import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import ProfileImage from '@/public/avatar.png'
import { CONTACT } from '../components/Footer'
import ResumeMenu from '../components/ResumeMenu'

const experiences = [
  {
    company: 'Beyond Guard',
    position: 'Senior Front-End Developer',
    date: '2024 — Devam',
    desc: 'Beyond Guard yapay zekâ güvenliği ürününün arayüzünü geliştiriyorum: dashboard’dan canlı izleme ve log ekranlarına kadar ürünün tamamı.',
    points: [
      'Dashboard, canlı izleme, istek ve denetim (audit) logları; konuşma geçmişi ve yetkiye göre kısıtlanan log detayları',
      'LLM, ajan, MCP, RAG, dosya ve bağlam trafiğini denetleyen Guard modülleri ile ICAP bağlayıcısı: prompt injection, PII ve içerik kontrollerinin yapılandırması',
      'AI, RAG ve içerik politikaları, politika grupları ve model kütüphanesinin yönetim ekranları',
      'Red Teaming: senaryo ve tohum listeleri, CSV/XLSX içe aktarma, RAG hedefleri için tarama akışı',
      'Shadow AI, politika grubu bazlı uyarılar ve SIEM entegrasyonları (Syslog, Splunk HEC)',
      'Organizasyon, kullanıcı ve rol yönetimi; SSO ile giriş ve onboarding',
      'Güvenlik sertleştirmesi: Content-Security-Policy ve HTTP güvenlik başlıkları, bağımlılık açıklarının kapatılması, çok aşamalı Docker imajı',
      'Yeni arayüz için tasarım sistemi ve bileşen kütüphanesi: Base UI ve Tailwind v4 üzerinde 70’i aşkın bileşen, tasarım token’ları, açık/koyu tema, etkileşimli dokümantasyon ve shadcn registry ile paket dağıtımı',
      'BeyondChat: Guard denetim sonuçlarını her mesajda gösteren sohbet uygulaması; WebSocket ile gerçek zamanlı akış, kopan bağlantıda HTTP’ye geçiş ve dosya yükleme',
    ],
  },
  {
    company: 'Carbon Consulting',
    position: 'Senior Front-End Developer',
    date: 'Kas 2021 — Devam',
    desc: 'Danışmanlık tarafında React ve Next.js ile kurumsal firmalara, yapay zekâ destekli ürünler başta olmak üzere arayüz geliştiriyorum.',
    points: [
      'Turkcell, Akbank ve Vakıf Katılım projelerinde arayüz mimarisi ve UI/UX geliştirme',
      'Vakıf Katılım Artifin uygulaması için uzman danışmanlık',
      'Vakıf Katılım Artifin Teftiş: RKM, mevzuat analizi ve sınav hazırlamayı yapay zekâ ajanlarıyla üreten iç denetim uygulamasının arayüzü',
      'In-house ürünlerde fikirden yayına front-end liderliği',
      'Yapay zekâ araçlarıyla kod üretimi ve tasarım prototiplemede verimlilik',
    ],
  },
  {
    company: 'Oley.com',
    position: 'Full Stack Developer',
    date: 'Eyl 2020 — Nis 2021',
    desc: 'Django (backend) ve Angular (frontend) ile Oley.com platformlarının geliştirilmesi ve bakımı.',
    points: ['Backend–frontend entegrasyonunu iyileştirerek performans artışı', 'Kullanıcı deneyimi ve arayüz tasarımları'],
  },
]

const educations = [
  { school: 'İzmir Ekonomi Üniversitesi', degree: 'Bilgisayar Mühendisliği, Lisans', date: '2017 — 2021' },
  { school: 'İzmir Ekonomi Üniversitesi', degree: 'Bilgisayar Programcılığı, Ön Lisans', date: '2014 — 2016' },
]

const skills = [
  { group: 'Front-end', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Redux Toolkit', 'Zustand', 'NextAuth', 'Tailwind CSS', 'Material UI', 'React Flow', 'Framer Motion', 'Lodash'] },
  { group: 'Yapay zekâ arayüzleri', items: ['Vercel AI SDK', 'CopilotKit', 'AG-UI', 'SSE', 'WebSocket'] },
  { group: 'Veri görselleştirme', items: ['Highcharts', 'D3.js', 'Three.js'] },
  { group: 'Mobil ve oyun', items: ['React Native', 'Expo', 'Unity', 'C#', 'Supabase', 'SQLite'] },
  { group: 'Backend ve araçlar', items: ['Node.js', 'Express', 'Python', 'Django', 'REST API', 'Docker', 'Linux', 'Git', 'GitHub Actions', 'n8n'] },
  { group: 'Tasarım', items: ['Figma', 'Canva'] },
  { group: 'Süreç', items: ['Agile', 'Trello', 'ClickUp', 'Taiga'] },
]

/** Özgeçmişteki "Core Competencies" bölümünün karşılığı. */
const approach = [
  ['Arayüz mimarisi', 'Ölçeklenebilir, bakımı kolay front-end mimarileri ve tasarım sistemleri kurmak.'],
  ['Performans', 'Web uygulamalarında performans için en iyi uygulamaları hayata geçirmek.'],
  ['Ekiplerle çalışma', 'Tasarım, backend ve ürün ekipleriyle aynı hedefe doğru verimli çalışmak.'],
  ['Danışmanlık', 'Kurumsal müşterilere teknik uzmanlık ve çözüm önerileri sunmak.'],
  ['Yapay zekâ ile geliştirme', 'Yapay zekâ araçlarıyla geliştirme süreçlerini ve prototiplemeyi hızlandırmak.'],
  ['Problem çözme', 'Karmaşık gereksinimleri analiz edip uygulanabilir teknik çözümlere dönüştürmek.'],
]

const contactLinks = [
  { label: 'E-posta', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  ...CONTACT.links.map(l => ({ label: l.label, value: l.href.replace(/^https:\/\/(www\.)?/, ''), href: l.href })),
  { label: 'X (Twitter)', value: 'twitter.com/cmracar', href: 'https://twitter.com/cmracar' },
]

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-6 border-t border-line py-12 md:grid-cols-12">
      <h2 className="eyebrow md:col-span-3 md:pt-1">{label}</h2>
      <div className="md:col-span-9">{children}</div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 pb-12 pt-16 md:px-8 md:pt-24">
      <div className="grid gap-10 pb-16 md:grid-cols-12">
        <div className="md:col-span-3">
          <Image
            src={ProfileImage}
            alt="Cemre Acar"
            priority
            className="aspect-square w-32 rounded-full object-cover md:w-full md:max-w-[180px]"
          />
        </div>
        <div className="md:col-span-9">
          <p className="eyebrow">Hakkımda</p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.08] tracking-tight text-ink md:text-6xl">Cemre Acar</h1>
          <p className="mt-3 text-lg text-ink">Senior Frontend Engineer, AI Products · Bilgisayar Mühendisi</p>
          <div className="mt-8 max-w-2xl space-y-4 leading-relaxed text-muted">
            <p>
              2020’den beri ürün geliştiriyorum. Carbon Consulting’de danışmanlık tarafında kurumsal
              firmalara ölçeklenebilir, kullanıcı odaklı arayüzler geliştiriyorum. Beyond Guard’da ise
              yapay zekâ güvenliği ürününün arayüzünü
              geliştiriyorum.
            </p>
            <p>
              Son yıllarda en çok yapay zekâ ile arayüzlerin kesiştiği yerde çalışıyorum: akışlı yanıtlar,
              ajan arayüzleri, denetim ve izleme panelleri. Bunun dışında{' '}
              <Link href="/#uygulamalar" className="link-underline text-ink">
                kendi mobil uygulamalarımı
              </Link>{' '}
              tek başıma geliştiriyor, öğrendiklerimi{' '}
              <Link href="/yazilar" className="link-underline text-ink">
                Medium’da yazıyorum
              </Link>
              .
            </p>
          </div>
          <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-3">
            {[
              ['Konum', 'İzmir, Türkiye'],
              ['Diller', 'Türkçe (ana dil), İngilizce (profesyonel)'],
              ['Çalışma', 'Uzaktan'],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="eyebrow">{k}</dt>
                <dd className="mt-1.5 text-sm text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <Row label="Deneyim">
        <ol className="space-y-12">
          {experiences.map(exp => (
            <li key={exp.company}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="font-serif text-2xl text-ink">{exp.company}</h3>
                <span className="font-mono text-xs text-faint">{exp.date}</span>
              </div>
              <p className="mt-1 text-sm text-ink">{exp.position}</p>
              <p className="mt-3 leading-relaxed text-muted">{exp.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-ink">
                {exp.points.map(point => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-[0.6em] h-px w-3 shrink-0 bg-faint" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Row>

      <Row label="Yaklaşım">
        <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {approach.map(([title, desc]) => (
            <div key={title}>
              <dt className="text-sm font-medium text-ink">{title}</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-muted">{desc}</dd>
            </div>
          ))}
        </dl>
      </Row>

      <Row label="Yetkinlikler">
        <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {skills.map(s => (
            <div key={s.group}>
              <dt className="text-sm font-medium text-ink">{s.group}</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-muted">{s.items.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </Row>

      <Row label="Eğitim">
        <ul className="space-y-5">
          {educations.map(edu => (
            <li key={edu.degree} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <div>
                <p className="text-ink">{edu.degree}</p>
                <p className="mt-0.5 text-sm text-muted">{edu.school}</p>
              </div>
              <span className="font-mono text-xs text-faint">{edu.date}</span>
            </li>
          ))}
        </ul>
      </Row>

      <Row label="İlgi alanları">
        <p className="text-muted">Para piyasaları, fitness ve müzik.</p>
      </Row>

      <Row label="İletişim">
        <ul className="divide-y divide-line border-y border-line">
          {contactLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 py-4"
              >
                <span className="text-sm text-muted">{link.label}</span>
                <span className="flex items-center gap-2 text-sm text-ink group-hover:text-accent">
                  {link.value} <ArrowUpRight size={14} />
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <ResumeMenu
            label="Özgeçmişi indir"
            buttonClassName="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-85"
          />
        </div>
      </Row>
    </main>
  )
}
