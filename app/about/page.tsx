'use client'

import React from 'react'
import Header from '@/app/components/Header'
import { Briefcase, GraduationCap, Mail, Linkedin, Github, Twitter, MapPin, BookText, Star, Languages } from 'lucide-react'
import Image from 'next/image'
import ProfileImage from '@/public/new-pp.png'

const experiences = [
    {
        company: 'Carbon Consulting',
        position: 'Senior Frontend Developer',
        date: 'Kasım 2021 - Devam',
        desc: 'React ve Next.js ile web uygulamaları geliştiriyorum. Turkcell, Akbank ve Vakıf Katılım gibi firmaların projelerinde yer alıp UI/UX tasarımlarını geliştirdim. In-house projelerde de yer alarak sıfırdan uygulamalar geliştiriyorum. Ayrıca yapay zeka araçlarıyla verimliliği en üst düzeye çıkarmak için çalışıyorum.',
        icon: <Briefcase size={28} className="text-blue-400" />,
    },
    {
        company: 'Oley.com',
        position: 'Full Stack Developer',
        date: 'Eylül 2020 - Nisan 2021',
        desc: 'Kullanıcı deneyimi ve arayüz tasarımları yaptım, Django ve Angular ile Oley.com özelinde hem UI hem backend tarafında iyileştirmeler yaptım.',
        icon: <Briefcase size={28} className="text-purple-400" />,
    },
]

const educations = [
    {
        school: 'İzmir Ekonomi Üniversitesi',
        degree: 'Bilgisayar Mühendisliği',
        date: '2017 - 2021',
        desc: 'Lisans eğitimimi başarıyla tamamladım. Web ve mobil teknolojilere odaklandım.',
        icon: <GraduationCap size={28} className="text-green-400" />,
    },
    {
        school: 'İzmir Ekonomi Üniversitesi',
        degree: 'Bilgisayar Programcılığı',
        date: '2014 - 2016',
        desc: 'Genel programcılık üzerine kapsamlı eğitim aldım.',
        icon: <GraduationCap size={28} className="text-yellow-400" />,
    },
]

const technologies = [
    'React', 'Next.js', 'TypeScript', 'JavaScript', 'Redux', 'Redux Toolkit', 'Tailwind CSS', 'CopilotKit', 'Material UI', 'Framer Motion', 'Three.js', 'D3.js', 'Highcharts',
    'Python', 'Node.js', 'Express', 'REST API', 'WebSocket',
    'React Native', 'Expo',
    'Figma', 'Canva',
    'Docker', 'Git', 'GitHub Actions',
]

const hobbies = ['Para Piyasaları', 'Fitness', 'Müzik',]

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#181f2a] text-white">
            <Header />
            {/* HERO */}
            <section className="container mx-auto px-4 md:px-8 pt-16 pb-8 flex flex-col items-center">
                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-blue-400/40 shadow-xl bg-gradient-to-tr from-blue-500 via-purple-500 to-cyan-400 mb-4">
                    <Image
                        src={ProfileImage}
                        alt="Cemre ACAR"
                        className="object-cover w-full h-full"
                        priority
                    />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Cemre Acar</h1>
                <p className="text-blue-300 text-lg mb-4 text-center">Senior Frontend Developer & UI/UX Designer</p>
                <div className="flex flex-wrap gap-3 justify-center mb-6">
                    <span className="flex items-center gap-2 bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full text-xs"><MapPin size={16} /> İzmir</span>
                    <span className="flex items-center gap-2 bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full text-xs"><Star size={16} /> 4+ Yıl</span>
                    <span className="flex items-center gap-2 bg-green-500/10 text-green-300 px-3 py-1 rounded-full text-xs"><Languages size={16} /> Türkçe, İngilizce</span>
                </div>
                <p className="text-gray-300 max-w-2xl text-center mb-6">
                    Modern web ve mobil teknolojilerle kullanıcı odaklı, yenilikçi ve performanslı arayüzler geliştiriyorum. Tasarım ve kodun buluştuğu noktada üretmeyi seviyorum. Takım çalışmasına yatkın, öğrenmeye ve gelişime açık biriyim.
                </p>
            </section>

            {/* SKILLS */}
            <section className="container mx-auto px-4 md:px-8 pb-10">
                <h2 className="text-xl font-bold mb-4 text-center">Teknolojiler</h2>
                <div className="flex flex-wrap gap-3 justify-center">
                    {technologies.map((tech, i) => (
                        <span
                            key={tech + i}
                            className="px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-200 font-semibold text-xs border border-blue-400/10 shadow-sm text-center cursor-default select-none transition hover:scale-105"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </section>

            {/* EXPERIENCE & EDUCATION */}
            <section className="container mx-auto px-4 md:px-8 pb-10">
                <div className="grid md:grid-cols-2 gap-10 items-stretch">
                    {/* Tecrübe */}
                    <div className="flex flex-col h-full">
                        <h2 className="text-xl font-bold mb-6 text-center md:text-left">Tecrübe</h2>
                        <div className="flex-1 flex flex-col justify-center">
                            {experiences.map((exp, i) => (
                                <div key={i} className="bg-[#232b3a] border border-blue-400/20 rounded-2xl p-6 shadow-lg flex flex-col justify-center h-full min-h-[200px] mb-6 last:mb-0 transition hover:border-blue-400/40 hover:shadow-blue-400/10">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-semibold text-white text-lg">{exp.position}</span>
                                        <span className="text-xs text-blue-300 bg-blue-500/10 rounded px-2 py-1">{exp.date}</span>
                                    </div>
                                    <div className="text-blue-400 font-medium mb-1">{exp.company}</div>
                                    <div className="text-gray-300 text-sm">{exp.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Eğitim */}
                    <div className="flex flex-col h-full">
                        <h2 className="text-xl font-bold mb-6 text-center md:text-left">Eğitim</h2>
                        <div className="flex-1 flex flex-col justify-center">
                            {educations.map((edu, i) => (
                                <div key={i} className="bg-[#232b3a] border border-green-400/20 rounded-2xl p-6 shadow-lg flex flex-col justify-center h-full min-h-[200px] mb-6 last:mb-0 transition hover:border-green-400/40 hover:shadow-green-400/10">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-semibold text-white text-lg">{edu.degree}</span>
                                        <span className="text-xs text-green-300 bg-green-500/10 rounded px-2 py-1">{edu.date}</span>
                                    </div>
                                    <div className="text-green-400 font-medium mb-1">{edu.school}</div>
                                    <div className="text-gray-300 text-sm">{edu.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* HOBİLER */}
            <section className="container mx-auto px-4 md:px-8 pb-10">
                <h2 className="text-xl font-bold mb-4 text-center">Hobilerim</h2>
                <div className="flex flex-wrap gap-3 justify-center">
                    {hobbies.map((h) => (
                        <span key={h} className="bg-purple-500/10 text-purple-300 px-4 py-2 rounded-full text-sm">{h}</span>
                    ))}
                </div>
            </section>

            {/* SOSYAL */}
            <section className="container mx-auto px-4 md:px-8 pb-16">
                <h2 className="text-xl font-bold mb-4 text-center">İletişim & Sosyal</h2>
                <div className="flex flex-wrap gap-4 justify-center">
                    <a href="mailto:cemreacar94@gmail.com" className="flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg hover:bg-blue-500/20 transition no-underline"><Mail /> Mail</a>
                    <a href="https://linkedin.com/in/cmracar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg hover:bg-blue-500/20 transition no-underline"><Linkedin /> LinkedIn</a>
                    <a href="https://github.com/cmracar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg hover:bg-blue-500/20 transition no-underline"><Github /> GitHub</a>
                    <a href="https://twitter.com/cmracar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg hover:bg-blue-500/20 transition no-underline"><Twitter /> Twitter</a>
                    <a href="https://medium.com/@cmracar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg hover:bg-blue-500/20 transition no-underline"><BookText /> Medium</a>
                </div>
            </section>
        </main>
    )
}