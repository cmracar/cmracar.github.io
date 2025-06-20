'use client'
import Header from '../components/Header'
import { useState } from 'react'
import worksData from '../../workspace.json'

const allWorks = worksData.map((w) => ({
  ...w,
  status: w.isCompleted ? 'Tamamlandı' : 'Devam Ediyor',
}))

const PAGE_SIZE = 8

export default function WorkspacePage() {
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(allWorks.length / PAGE_SIZE)
  const works = allWorks.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <main className="min-h-screen bg-[#181f2a] text-white">
      <Header />
      <section className="container mx-auto px-4 md:px-8 pt-16 pb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">Çalışmalarım</h1>
        <ul className="divide-y divide-blue-400/10 rounded-xl bg-[#232b3a] shadow-lg overflow-hidden">
          {works.map((work, i) => (
            <li key={i} className="flex flex-col md:flex-row md:items-center gap-4 px-6 py-6 hover:bg-blue-400/5 transition">
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <h3 className="text-lg font-bold">{work.title}</h3>
                  <span className={`ml-0 md:ml-4 px-2 py-1 rounded text-xs font-semibold ${work.status === 'Tamamlandı' ? 'bg-green-600/20 text-green-400' : 'bg-yellow-600/20 text-yellow-400'}`}>{work.status}</span>
                </div>
                <p className="text-gray-300 text-sm mt-2">{work.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {work.tags.map((tag, idx) => (
                    <span key={idx} className="bg-blue-500/10 text-blue-300 px-2 py-1 rounded text-xs font-mono">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="flex-shrink-0 mt-2 md:mt-0 flex gap-2">
                {work.demoUrl && (
                  <a
                    href={work.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-400 text-white text-sm font-semibold shadow-md shadow-blue-500/20 transition-transform text-center hover:scale-105`}
                  >
                    Demo
                  </a>
                )}
                {work.codeUrl && (
                  <a
                    href={work.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-400 text-white text-sm font-semibold shadow-md shadow-purple-500/20 transition-transform text-center hover:scale-105`}
                  >
                    Github Repo
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`w-10 h-10 cursor-pointer rounded-full flex items-center justify-center font-bold border transition-all ${page === i + 1 ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-blue-500' : 'bg-white/5 text-blue-300 border-blue-400/20 hover:bg-blue-400/10'}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
