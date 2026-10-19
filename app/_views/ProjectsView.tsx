import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Status, { SectionHeading } from '../components/Status'
import { href, type Lang } from '../i18n'
import { localizedProjects, type Category } from '../projects-data'
import StoreBadges from '../yelken/StoreBadges'

const CATEGORY_ORDER: Category[] = ['freelance', 'beyondguard', 'carbon']

const COPY = {
  tr: {
    eyebrow: 'Projeler',
    title: 'Çalıştığım şirketler ve bağımsız yürüttüğüm işler.',
    sections: 'Bölümler',
    done: 'Tamamlandı',
    ongoing: 'Devam ediyor',
    view: 'İncele',
    site: 'Siteyi aç',
    categories: {
      freelance: { label: 'Bağımsız işlerim', note: 'Kendi ürünlerim ve müşteriler için yürüttüğüm projeler.' },
      beyondguard: { label: 'Beyond Guard', note: 'Yapay zekâ güvenliği ürünü. 2024 – devam.' },
      carbon: { label: 'Carbon Consulting', note: 'Danışmanlık: kurumsal firmalar için arayüz geliştirme. 2021 – devam.' },
    },
  },
  en: {
    eyebrow: 'Projects',
    title: 'Companies I work with and projects I run independently.',
    sections: 'Sections',
    done: 'Completed',
    ongoing: 'Ongoing',
    view: 'View',
    site: 'Open site',
    categories: {
      freelance: { label: 'Independent work', note: 'My own products and projects I run for clients.' },
      beyondguard: { label: 'Beyond Guard', note: 'AI security product. 2024 – present.' },
      carbon: { label: 'Carbon Consulting', note: 'Consulting: interface development for enterprise clients. 2021 – present.' },
    },
  },
}

/** İç sayfalara (ör. /yelken) giden linkler Link ile, dış sitelere giden
 *  linkler <a target="_blank"> ile açılır. */
const isInternalLink = (url: string) => url.startsWith('/')

export default function ProjectsView({ lang }: { lang: Lang }) {
  const c = COPY[lang]
  const allProjects = localizedProjects(lang)
  const groups = CATEGORY_ORDER.map(category => ({
    category,
    ...c.categories[category],
    // Kendi ürünler (iç sayfası olanlar) grubun başında.
    projects: allProjects
      .filter(p => p.category === category)
      .sort((a, b) => Number(isInternalLink(b.live)) - Number(isInternalLink(a.live))),
  })).filter(g => g.projects.length > 0)

  return (
    <main lang={lang} className="mx-auto max-w-6xl px-5 pb-12 pt-16 md:px-8 md:pt-24">
      <p className="eyebrow">
        {c.eyebrow} · {allProjects.length}
      </p>
      <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.08] tracking-tight text-ink md:text-6xl">{c.title}</h1>

      <nav aria-label={c.sections} className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm">
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
            {group.projects.map(project => {
              const internal = project.live && isInternalLink(project.live) ? href(lang, project.live) : null
              return (
                <li key={project.key} className="grid gap-3 border-t border-line py-7 md:grid-cols-12 md:gap-6">
                  <div className="md:col-span-4">
                    <h3 className="text-lg font-medium text-ink">
                      {internal ? (
                        <Link href={internal} className="hover:text-accent">
                          {project.title}
                        </Link>
                      ) : (
                        project.title
                      )}
                    </h3>
                    <div className="mt-2">
                      <Status label={project.done ? c.done : c.ongoing} live={project.done} />
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
                    {(project.stores === 'yelken' || project.stores === 'kurultay') && (
                      <div className="mt-4">
                        <StoreBadges size="sm" lang={lang} app={project.stores} />
                      </div>
                    )}
                  </div>
                  <div className="md:col-span-2 md:text-right">
                    {project.live &&
                      (internal ? (
                        <Link href={internal} className="inline-flex items-center gap-1.5 text-sm text-ink hover:text-accent">
                          {c.view} <ArrowRight size={15} />
                        </Link>
                      ) : (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-ink hover:text-accent"
                        >
                          {c.site} <ArrowUpRight size={15} />
                        </a>
                      ))}
                  </div>
                </li>
              )
            })}
          </ul>
        </section>
      ))}
    </main>
  )
}
