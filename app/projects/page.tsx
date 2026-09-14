'use client'
import Header from '../components/Header'
import Link from 'next/link'
import projectsData from '../../projects.json'

type Category = 'carbon' | 'beyondguard' | 'freelance'

const CATEGORY_ORDER: Category[] = ['carbon', 'beyondguard', 'freelance']

const CATEGORY_LABELS: Record<Category, string> = {
  carbon: 'Carbon Consulting',
  beyondguard: 'Beyond Guard',
  freelance: 'Bağımsız İşlerim',
}

/** İç sayfalara (ör. /yelken) giden linkler Link ile, dış sitelere giden
 *  linkler <a target="_blank"> ile açılır. */
const isInternalLink = (url: string) => url.startsWith('/')

const allProjects = projectsData.map((p) => ({
  title: p.projectName,
  desc: p.description,
  live: p.preview,
  status: p.isCompleted ? 'Tamamlandı' : 'Devam Ediyor',
  technologies: p.technologies,
  category: p.category as Category,
}))

const groups = CATEGORY_ORDER.map((category) => ({
  category,
  label: CATEGORY_LABELS[category],
  projects: allProjects.filter((p) => p.category === category),
})).filter((g) => g.projects.length > 0)

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#181f2a] text-white">
      <Header />
      <section className="container mx-auto px-4 md:px-8 pt-16 pb-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 text-center">Projelerim</h1>
        <p className="text-gray-400 text-center mb-14 max-w-xl mx-auto">
          Çalıştığım şirketler ve bağımsız yürüttüğüm işler.
        </p>
        <div className="space-y-14">
          {groups.map((group) => (
            <div key={group.category}>
              <h2 className="text-xl md:text-2xl font-bold mb-5 text-blue-300">{group.label}</h2>
              <ul className="divide-y divide-blue-400/10 rounded-xl bg-[#232b3a] shadow-lg overflow-hidden">
                {group.projects.map((project, i) => (
                  <li key={i} className="flex flex-col md:flex-row md:items-center gap-4 px-6 py-6 hover:bg-blue-400/5 transition">
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center gap-2">
                        <h3 className="text-lg font-bold">{project.title}</h3>
                        <span className={`ml-0 md:ml-4 px-2 py-1 rounded text-xs font-semibold ${project.status === 'Tamamlandı' ? 'bg-green-600/20 text-green-400' : 'bg-yellow-600/20 text-yellow-400'}`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm mt-2">{project.desc}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-blue-500/10 text-blue-300 px-2 py-1 rounded text-xs font-mono">{tech}</span>
                        ))}
                      </div>
                    </div>
                    {project.live && (
                      <div className="flex-shrink-0 mt-2 md:mt-0">
                        {isInternalLink(project.live) ? (
                          <Link
                            href={project.live}
                            className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-400 text-white text-sm font-semibold shadow-md shadow-blue-500/20 hover:scale-105 transition-transform text-center"
                          >
                            İncele
                          </Link>
                        ) : (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-400 text-white text-sm font-semibold shadow-md shadow-blue-500/20 hover:scale-105 transition-transform text-center"
                          >
                            Siteyi aç
                          </a>
                        )}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
