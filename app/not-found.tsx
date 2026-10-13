import Link from 'next/link'

/**
 * GitHub Pages bu sayfayı 404 durum koduyla sunar. Kayıtlı adresleri
 * (version.json, yasal sayfalar) test ederken bu sayfanın görünmesine değil,
 * durum koduna bak. Tek bir 404 sayfası var; iki dili birlikte gösterir.
 */
export default function NotFound() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <p className="eyebrow">404</p>
      <h1 className="mt-6 font-serif text-5xl leading-tight tracking-tight text-ink">Bu sayfa bulunamadı.</h1>
      <p className="mt-4 text-muted">Adres değişmiş ya da yanlış yazılmış olabilir.</p>
      <p lang="en" className="mt-2 text-muted">
        This page could not be found. <span className="text-faint">The address may have changed or been mistyped.</span>
      </p>
      <div className="mt-10 flex flex-wrap gap-6 text-sm">
        <Link href="/" className="link-underline text-ink">Ana sayfa</Link>
        <Link href="/projects" className="link-underline text-ink">Projeler</Link>
        <Link href="/yelken" className="link-underline text-ink">Yelken</Link>
        <Link href="/kurultay" className="link-underline text-ink">Kurultay</Link>
        <Link href="/en" lang="en" className="link-underline text-ink">English</Link>
      </div>
    </main>
  )
}
