'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'

/**
 * YouTube videosu, tıklanınca yüklenen kapakla. Gömülü oynatıcı sayfa
 * açılır açılmaz ~1 MB script ve çerez getiriyor; kapak yalnızca bir görsel.
 * Oynatıcı `youtube-nocookie.com`dan: izlenmeden çerez yazılmaz.
 *
 * `vertical` Shorts içindir (9:16). Shorts'un otomatik kapağı 4:3 ve
 * letterbox'lı geldiği için dikey videoda kapak olarak mağaza görseli
 * (`poster`) verilir.
 */
export default function YouTube({
  id,
  title,
  vertical = false,
  poster,
}: {
  id: string
  title: string
  vertical?: boolean
  poster?: string
}) {
  const [playing, setPlaying] = useState(false)
  const src = poster ?? `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`

  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl border border-white/10 bg-black shadow-xl shadow-black/40 ${
        vertical ? 'aspect-[9/16]' : 'aspect-video'
      }`}
    >
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`${title} — oynat`}
          className="group absolute inset-0 h-full w-full cursor-pointer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
          <span className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-16 w-16 items-center justify-center rounded-full bg-[#FBBF24] text-[#1A1231] shadow-2xl group-hover:scale-110 transition-transform">
            <Play size={28} fill="currentColor" className="ml-1" />
          </span>
        </button>
      )}
    </div>
  )
}
