import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import projectsData from '../../projects.json'
import Status, { SectionHeading } from '../components/Status'
import StoreBadges from '../yelken/StoreBadges'

type Category = 'carbon' | 'beyondguard' | 'freelance'

const CATEGORY_ORDER: Category[] = ['freelance', 'beyondguard', 'carbon']

const CATEGORY_LABELS: Record<Category, { label: string; note: string }> = {
  freelance: { label: 'Bağımsız işlerim', note: 'Kendi ürünlerim ve müşteriler için yürüttüğüm projeler.' },
  beyondguard: { label: 'Beyond Guard', note: 'Yapay zekâ güvenliği ürünü. 2024 – devam.' },
  carbon: { label: 'Carbon Consulting', note: 'Danışmanlık: kurumsal firmalar için arayüz geliştirme. 2021 – devam.' },
}

/** İç sayfalara (ör. /yelken) giden linkler Link ile, dış sitelere giden
 *  linkler <a target="_blank"> ile açılır. */
const isInternalLink = (url: string) => url.startsWith('/')

const allProjects = projectsData.map(p => ({
  title: p.projectName,
  desc: p.description,
  live: p.preview,
  done: p.isCompleted,
  highlights: 'highlights' in p ? (p.highlights as string[]) : [],
  technologies: p.technologies.filter(t => t !== 'HTML' && t !== 'CSS'),
  category: p.category as Category,
  // Mağaza rozetleri şimdilik yalnızca Yelken'de; değer, rozet ayarının hangi
  // uygulamaya ait olduğunu söylüyor.
  stores: 'stores' in p ? (p.stores as string) : null,
}))

const groups = CATEGORY_ORDER.map(category => ({
  category,
  ...CATEGORY_LABELS[category],
  // Kendi ürünler (iç sayfası olanlar) grubun başında.
  projects: allProjects
    .filter(p => p.category === category)
    .sort((a, b) => Number(isInternalLink(b.live)) - Number(isInternalLink(a.live))),
})).filter(g => g.projects.length > 0)

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 pb-12 pt-16 md:px-8 md:pt-24">
      <p className="eyebrow">Projeler · {allProjects.length}</p>
      <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.08] tracking-tight text-ink md:text-6xl">
        Çalıştığım şirketler ve bağımsız yürüttüğüm işler.
      </h1>

      <nav aria-label="Bölümler" className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {groups.map(group => (
          <a key={group.category} href={`#${group.category}`} className="text-muted hover:text-ink">
            {group.label} <span className="font-mono text-xs text-faint">{group.projects.length}</span>
          </a>
        ))}
      </nav>

      {groups.map((group, gi) => (
        <section key={group.category} id={group.category} className="mt-20 scroll-mt-24">
          <SectionHeading index={String(gi + 1).padStart(2, '0')} label={group.label} title={group.note} />
          <ul className="border-b border-line">
            {group.projects.map(project => (
              <li key={project.title} className="grid gap-3 border-t border-line py-7 md:grid-cols-12 md:gap-6">
                <div className="md:col-span-4">
                  <h3 className="text-lg font-medium text-ink">
                    {project.live && isInternalLink(project.live) ? (
                      <Link href={project.live} className="hover:text-accent">
                        {project.title}
                      </Link>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <div className="mt-2">
                    <Status label={project.done ? 'Tamamlandı' : 'Devam ediyor'} live={project.done} />
                  </div>
                </div>
                <div className="md:col-span-6">
                  <p className="text-sm leading-relaxed text-muted">{project.desc}</p>
                  {project.highlights.length > 0 && (
                    <ul className="mt-3 space-y-1.5 text-sm text-ink">
                      {project.highlights.map(h => (
                        <li key={h} className="flex gap-2.5">
                          <span className="mt-[0.6em] h-px w-3 shrink-0 bg-faint" aria-hidden="true" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                  <p className="mt-3 font-mono text-xs text-faint">{project.technologies.join(' · ')}</p>
                  {project.stores === 'yelken' && (
                    <div className="mt-4">
                      <StoreBadges size="sm" />
                    </div>
                  )}
                </div>
                <div className="md:col-span-2 md:text-right">
                  {project.live &&
                    (isInternalLink(project.live) ? (
                      <Link href={project.live} className="inline-flex items-center gap-1.5 text-sm text-ink hover:text-accent">
                        İncele <ArrowRight size={15} />
                      </Link>
                    ) : (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-ink hover:text-accent"
                      >
                        Siteyi aç <ArrowUpRight size={15} />
                      </a>
                    ))}
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  )
}
