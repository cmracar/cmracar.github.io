import { YELKEN_STORES, type StoreKey } from './stores'

function AppleGlyph({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </svg>
  )
}

function PlayGlyph({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" />
    </svg>
  )
}

const GLYPH: Record<StoreKey, (props: { size: number }) => React.ReactElement> = {
  appStore: AppleGlyph,
  googlePlay: PlayGlyph,
}

/**
 * Resmî rozetler yalnızca mağaza sayfası canlıyken gösterilir (Apple ve
 * Google, rozetin değiştirilmesini ve canlı olmayan sayfaya bağlanmasını
 * yasaklıyor). Canlı değilken aynı boyda, tıklanamayan bir "Yakında" kutusu.
 */
export default function StoreBadges({ size = 'md' }: { size?: 'md' | 'sm' }) {
  const height = size === 'md' ? 44 : 36
  // Google'ın PNG'si rozetin çevresinde saydam pay taşıyor; görünen
  // yükseklik Apple rozetiyle aynı olsun diye büyütülüp pay kırpılıyor.
  const playHeight = Math.round(height * 1.49)
  const playBleed = (playHeight - height) / 2

  return (
    <div className="flex flex-wrap items-center gap-3">
      {(Object.keys(YELKEN_STORES) as StoreKey[]).map(key => {
        const store = YELKEN_STORES[key]
        if (store.live) {
          return (
            <a
              key={key}
              href={store.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Yelken — ${store.name}`}
              className="relative z-10 inline-block transition-transform hover:scale-[1.03]"
            >
              {key === 'appStore' ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src="/yelken/app-store-badge.svg" alt={`Download on the ${store.name}`} style={{ height }} />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src="/yelken/google-play-badge.png"
                  alt={`Get it on ${store.name}`}
                  style={{ height: playHeight, margin: `-${playBleed}px -${playBleed * 0.6}px` }}
                />
              )}
            </a>
          )
        }
        const Glyph = GLYPH[key]
        return (
          <span
            key={key}
            aria-label={`${store.locative} yakında`}
            className="inline-flex items-center gap-2.5 rounded-lg border border-white/15 bg-black/40 px-3.5 text-white/85 select-none"
            style={{ height }}
          >
            <Glyph size={size === 'md' ? 22 : 18} />
            <span className="flex flex-col leading-none">
              <span className="text-[10px] uppercase tracking-wider text-white/55">Yakında</span>
              <span className={`${size === 'md' ? 'text-[15px]' : 'text-[13px]'} font-semibold mt-0.5`}>
                {store.name}
              </span>
            </span>
          </span>
        )
      })}
    </div>
  )
}
