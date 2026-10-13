import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import ProfileImage from '@/public/avatar.png'
import { CONTACT } from '../contact'
import ResumeMenu from '../components/ResumeMenu'
import { href, type Lang } from '../i18n'

type Experience = { company: string; position: string; date: string; desc: string; points: string[] }

/** İngilizce deneyim metinleri cv/resume.html ile aynı tutulur. */
const COPY = {
  tr: {
    eyebrow: 'Hakkımda',
    subtitle: 'Senior Frontend Engineer, AI Products · Bilgisayar Mühendisi',
    intro1:
      '2020’den beri ürün geliştiriyorum. Carbon Consulting’de danışmanlık tarafında kurumsal firmalara ölçeklenebilir, kullanıcı odaklı arayüzler geliştiriyorum. Beyond Guard’da ise yapay zekâ güvenliği ürününün arayüzünü geliştiriyorum.',
    intro2: ['Son yıllarda en çok yapay zekâ ile arayüzlerin kesiştiği yerde çalışıyorum: akışlı yanıtlar, ajan arayüzleri, denetim ve izleme panelleri. Bunun dışında', 'kendi mobil uygulamalarımı', 'tek başıma geliştiriyor, öğrendiklerimi', 'Medium’da yazıyorum', '.'],
    facts: [
      ['Konum', 'İzmir, Türkiye'],
      ['Diller', 'Türkçe (ana dil), İngilizce (profesyonel)'],
      ['Çalışma', 'Uzaktan'],
    ],
    rows: { experience: 'Deneyim', approach: 'Yaklaşım', skills: 'Yetkinlikler', education: 'Eğitim', interests: 'İlgi alanları', contact: 'İletişim' },
    interests: 'Para piyasaları, fitness ve müzik.',
    email: 'E-posta',
    download: 'Özgeçmişi indir',
    experiences: [
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
    ] as Experience[],
    educations: [
      { school: 'İzmir Ekonomi Üniversitesi', degree: 'Bilgisayar Mühendisliği, Lisans', date: '2017 — 2021' },
      { school: 'İzmir Ekonomi Üniversitesi', degree: 'Bilgisayar Programcılığı, Ön Lisans', date: '2014 — 2016' },
    ],
    skillGroups: ['Front-end', 'Yapay zekâ arayüzleri', 'Veri görselleştirme', 'Mobil ve oyun', 'Backend ve araçlar', 'Tasarım', 'Süreç'],
    approach: [
      ['Arayüz mimarisi', 'Ölçeklenebilir, bakımı kolay front-end mimarileri ve tasarım sistemleri kurmak.'],
      ['Performans', 'Web uygulamalarında performans için en iyi uygulamaları hayata geçirmek.'],
      ['Ekiplerle çalışma', 'Tasarım, backend ve ürün ekipleriyle aynı hedefe doğru verimli çalışmak.'],
      ['Danışmanlık', 'Kurumsal müşterilere teknik uzmanlık ve çözüm önerileri sunmak.'],
      ['Yapay zekâ ile geliştirme', 'Yapay zekâ araçlarıyla geliştirme süreçlerini ve prototiplemeyi hızlandırmak.'],
      ['Problem çözme', 'Karmaşık gereksinimleri analiz edip uygulanabilir teknik çözümlere dönüştürmek.'],
    ],
  },
  en: {
    eyebrow: 'About',
    subtitle: 'Senior Frontend Engineer, AI Products · Computer Engineer',
    intro1:
      'I have been building products since 2020. At Carbon Consulting I build scalable, user-centric interfaces for enterprise clients on the consulting side. At Beyond Guard I build the interface of the AI security product.',
    intro2: ['Most of my recent work sits where AI meets the interface: streaming responses, agent interfaces, audit and monitoring panels. On top of that I build', 'my own mobile apps', 'on my own and', 'write about what I learn on Medium', '.'],
    facts: [
      ['Location', 'İzmir, Türkiye'],
      ['Languages', 'Turkish (native), English (professional)'],
      ['Work', 'Remote'],
    ],
    rows: { experience: 'Experience', approach: 'Approach', skills: 'Skills', education: 'Education', interests: 'Interests', contact: 'Contact' },
    interests: 'Financial markets, fitness and music.',
    email: 'Email',
    download: 'Download resume',
    experiences: [
      {
        company: 'Beyond Guard',
        position: 'Senior Front-End Developer',
        date: '2024 — Present',
        desc: 'I develop the interface of Beyond Guard’s AI security product: the whole product, from dashboards to live monitoring and log screens.',
        points: [
          'Dashboard, live monitoring, request and audit logs; conversation history and role-restricted log details',
          'Guard modules inspecting LLM, agent, MCP, RAG, file and context traffic, plus an ICAP connector: configuration of prompt-injection, PII and content checks',
          'Management screens for AI, RAG and content policies, policy groups and the model library',
          'Red Teaming: scenario and seed lists, CSV/XLSX import, scan flow for RAG targets',
          'Shadow AI, policy-group-based alerts and SIEM integrations (Syslog, Splunk HEC)',
          'Organization, user and role management; SSO sign-in and onboarding',
          'Security hardening: Content-Security-Policy and HTTP security headers, dependency vulnerability remediation, multi-stage Docker image',
          'Design system and component library for the new interface: 70+ components on Base UI and Tailwind v4, design tokens, light/dark themes, interactive documentation and distribution via a shadcn registry',
          'BeyondChat: chat application showing Guard check results on every message; real-time streaming over WebSocket with HTTP fallback, file uploads',
        ],
      },
      {
        company: 'Carbon Consulting',
        position: 'Senior Front-End Developer',
        date: 'Nov 2021 — Present',
        desc: 'On the consulting side, I develop interfaces for enterprise clients with React and Next.js, with a focus on AI-powered products.',
        points: [
          'Front-end architecture and UI/UX development for enterprise clients including Turkcell, Akbank and Vakıf Katılım',
          'Expert consultancy for Vakıf Katılım’s Artifin application',
          'Vakıf Katılım Artifin Inspection: interface of an internal-audit application that generates risk control matrices, regulation analyses and exams with AI agents',
          'Front-end lead on in-house products from concept to release',
          'AI-assisted development to speed up code generation and design prototyping',
        ],
      },
      {
        company: 'Oley.com',
        position: 'Full Stack Developer',
        date: 'Sep 2020 — Apr 2021',
        desc: 'Developed and maintained Oley.com platforms with Django (backend) and Angular (frontend).',
        points: ['Improved performance through better backend–frontend integration', 'UX and interface design'],
      },
    ] as Experience[],
    educations: [
      { school: 'İzmir University of Economics', degree: 'B.Sc. Computer Engineering', date: '2017 — 2021' },
      { school: 'İzmir University of Economics', degree: 'Associate Degree, Computer Programming', date: '2014 — 2016' },
    ],
    skillGroups: ['Front-end', 'AI interfaces', 'Data visualization', 'Mobile & games', 'Back-end & tooling', 'Design', 'Process'],
    approach: [
      ['UI architecture', 'Building scalable, maintainable front-end architectures and design systems.'],
      ['Performance', 'Applying best practices for web application performance.'],
      ['Collaboration', 'Working closely with design, back-end and product teams toward a shared goal.'],
      ['Consulting', 'Providing technical expertise and solutions for enterprise clients.'],
      ['AI-assisted development', 'Speeding up delivery and prototyping with AI tools.'],
      ['Problem solving', 'Turning complex requirements into workable technical solutions.'],
    ],
  },
}

const SKILL_ITEMS = [
  ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Redux Toolkit', 'Zustand', 'NextAuth', 'Tailwind CSS', 'Material UI', 'React Flow', 'Framer Motion', 'Lodash'],
  ['Vercel AI SDK', 'CopilotKit', 'AG-UI', 'SSE', 'WebSocket'],
  ['Highcharts', 'D3.js', 'Three.js'],
  ['React Native', 'Expo', 'Unity', 'C#', 'Supabase', 'SQLite'],
  ['Node.js', 'Express', 'Python', 'Django', 'REST API', 'Docker', 'Linux', 'Git', 'GitHub Actions', 'n8n'],
  ['Figma', 'Canva'],
  ['Agile', 'Trello', 'ClickUp', 'Taiga'],
]

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-6 border-t border-line py-12 md:grid-cols-12">
      <h2 className="eyebrow md:col-span-3 md:pt-1">{label}</h2>
      <div className="md:col-span-9">{children}</div>
    </section>
  )
}

export default function AboutView({ lang }: { lang: Lang }) {
  const c = COPY[lang]
  const contactLinks = [
    { label: c.email, value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    ...CONTACT.links.map(l => ({ label: l.label, value: l.href.replace(/^https:\/\/(www\.)?/, ''), href: l.href })),
    { label: 'X (Twitter)', value: 'twitter.com/cmracar', href: 'https://twitter.com/cmracar' },
  ]
  const [i2a, appsLink, i2b, writingLink, i2c] = c.intro2

  return (
    <main lang={lang} className="mx-auto max-w-6xl px-5 pb-12 pt-16 md:px-8 md:pt-24">
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
          <p className="eyebrow">{c.eyebrow}</p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.08] tracking-tight text-ink md:text-6xl">Cemre Acar</h1>
          <p className="mt-3 text-lg text-ink">{c.subtitle}</p>
          <div className="mt-8 max-w-2xl space-y-4 leading-relaxed text-muted">
            <p>{c.intro1}</p>
            <p>
              {i2a}{' '}
              <Link href={`${href(lang, '/')}#uygulamalar`} className="link-underline text-ink">
                {appsLink}
              </Link>{' '}
              {i2b}{' '}
              <Link href={href(lang, '/yazilar')} className="link-underline text-ink">
                {writingLink}
              </Link>
              {i2c}
            </p>
          </div>
          <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-3">
            {c.facts.map(([k, v]) => (
              <div key={k}>
                <dt className="eyebrow">{k}</dt>
                <dd className="mt-1.5 text-sm text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <Row label={c.rows.experience}>
        <ol className="space-y-12">
          {c.experiences.map(exp => (
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

      <Row label={c.rows.approach}>
        <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {c.approach.map(([title, desc]) => (
            <div key={title}>
              <dt className="text-sm font-medium text-ink">{title}</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-muted">{desc}</dd>
            </div>
          ))}
        </dl>
      </Row>

      <Row label={c.rows.skills}>
        <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {c.skillGroups.map((group, i) => (
            <div key={group}>
              <dt className="text-sm font-medium text-ink">{group}</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-muted">{SKILL_ITEMS[i].join(', ')}</dd>
            </div>
          ))}
        </dl>
      </Row>

      <Row label={c.rows.education}>
        <ul className="space-y-5">
          {c.educations.map(edu => (
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

      <Row label={c.rows.interests}>
        <p className="text-muted">{c.interests}</p>
      </Row>

      <Row label={c.rows.contact}>
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
            lang={lang}
            label={c.download}
            buttonClassName="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-85"
          />
        </div>
      </Row>
    </main>
  )
}
