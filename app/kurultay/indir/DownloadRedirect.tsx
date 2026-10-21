'use client'

import { useEffect } from 'react'
import { APP_STORES } from '../../yelken/stores'

const stores = APP_STORES.kurultay

/** Cihaza göre mağaza; bilinmiyorsa ya da mağaza canlı değilse null (sayfa bağlantıları gösterir). */
function target(): string | null {
  const ua = navigator.userAgent || ''
  const iOS = /iPhone|iPad|iPod/i.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)
  if (iOS && stores.appStore.live) return stores.appStore.url
  if (/Android/i.test(ua) && stores.googlePlay.live) return stores.googlePlay.url
  return null
}

export default function DownloadRedirect() {
  useEffect(() => {
    const url = target()
    window.location.replace(url ?? '/kurultay')
  }, [])

  return (
    <main className="mx-auto max-w-xl px-5 py-24 text-center md:py-32">
      <p className="eyebrow">Kurultay</p>
      <h1 className="mt-6 font-serif text-4xl leading-tight tracking-tight text-ink">Mağazaya yönlendiriliyorsun…</h1>
      <p className="mt-6 text-muted">
        Açılmazsa:{' '}
        <a className="link-underline text-ink" href={stores.appStore.url}>App Store</a>
        {stores.googlePlay.live ? (
          <>
            {' · '}
            <a className="link-underline text-ink" href={stores.googlePlay.url}>Google Play</a>
          </>
        ) : null}
        {' · '}
        <a className="link-underline text-ink" href="/kurultay">Kurultay</a>
      </p>
    </main>
  )
}
