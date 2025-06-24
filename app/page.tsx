'use client'

import Image from 'next/image'
import ProfileImage from '@/public/new-pp.png'
import { Code, Smartphone, PenTool } from 'lucide-react'
import Header from './components/Header'
import { motion } from 'framer-motion'
import Link from 'next/link'

const skills = [
  {
    icon: <PenTool size={32} className="text-blue-400" />,
    title: 'UI/UX',
    desc: 'Kullanıcı odaklı ve estetik arayüz tasarımları.',
  },
  {
    icon: <Code size={32} className="text-purple-400" />, 
    title: 'Web Apps',
    desc: 'Modern web teknolojileriyle hızlı, güvenli ve ölçeklenebilir uygulamalar.',
  },
  {
    icon: <Smartphone size={32} className="text-pink-400" />, 
    title: 'Mobile Apps',
    desc: 'Mobil cihazlar için kullanıcı dostu ve performanslı uygulamalar.',
  },
]

export default function Home() {
  
  return (
    <main className="min-h-screen bg-[#181f2a] text-white">
      <Header />
      {/* Header ile Hero arasında boşluk */}
      <div className="h-10 md:h-20" />
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-12 pt-16 pb-28">
        {/* Text */}
        <div className="flex-1 space-y-8 mt-8 md:mt-0">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Merhaba, Ben <br />
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Cemre ACAR</span>
          </h1>
          <h2 className="text-[22px] font-light bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">Front-End Developer | React & Next.js | AI-Powered UI Solutions</h2>
          <p className="text-gray-300 max-w-xl">
            Modern web teknolojileri ile kullanıcı deneyimini ön planda tutan, yaratıcı ve yenilikçi çözümler üreten bir frontend geliştiricisiyim.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="/resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-400 shadow-lg shadow-blue-500/30 text-lg font-medium text-white hover:scale-105 transition-transform"
            >
              CV İndir
            </a>
            <Link
              href="/projects"
              className="px-8 py-4 rounded-full border border-blue-400/40 bg-white/5 text-blue-400 text-lg font-medium shadow transition-all focus:outline-none focus:ring-2 focus:ring-blue-400/30 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-400/80 hover:to-purple-400/80 hover:text-white hover:scale-105"
            >
              Projelerim
            </Link>
          </div>
        </div>
        {/* Fotoğraf */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-cyan-400 opacity-60 blur-2xl"></div>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-400/40 shadow-xl"
            >
              <Image src={ProfileImage} alt="Cemre ACAR" fill className="object-cover" priority />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 md:px-8 pt-10 pb-28">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Neler Yapıyorum ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <div key={i} className="bg-[#232b3a] rounded-2xl p-8 flex flex-col items-center text-center shadow-lg shadow-blue-500/5 border border-blue-400/10 hover:border-blue-400/30 transition-all">
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{skill.title}</h3>
              <p className="text-gray-300 text-base mb-2">{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
