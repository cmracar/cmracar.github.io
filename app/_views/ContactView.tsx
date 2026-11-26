import ContactForm from '../components/ContactForm'
import type { Lang } from '../i18n'

const COPY = {
  tr: {
    eyebrow: 'İletişim',
    title: 'Bizimle iletişime geç.',
    body: 'Kurultay ve Yelken için sorun, öneri ya da soruların mı var? Formu doldur; mesajın doğrudan bana ulaşır ve e-postayla dönerim.',
  },
  en: {
    eyebrow: 'Contact',
    title: 'Get in touch.',
    body: 'Have a problem, idea or question about Kurultay or Yelken? Fill in the form; it reaches me directly and I’ll reply by email.',
  },
}

export default function ContactView({ lang }: { lang: Lang }) {
  const c = COPY[lang]
  return (
    <main lang={lang} className="mx-auto max-w-3xl px-5 pb-16 pt-16 md:px-8 md:pt-24">
      <p className="eyebrow">{c.eyebrow}</p>
      <h1 className="mt-6 font-serif text-5xl leading-[1.08] tracking-tight text-ink md:text-6xl">{c.title}</h1>
      <p className="mt-6 text-lg leading-relaxed text-muted">{c.body}</p>
      <div className="mt-12">
        <ContactForm lang={lang} />
      </div>
    </main>
  )
}
