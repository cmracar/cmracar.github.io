/** Yayın durumu etiketi: renkli nokta + kısa metin. */
export default function Status({ label, live }: { label: string; live: boolean }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs text-muted">
      <span className={`h-1.5 w-1.5 rounded-full ${live ? 'bg-live' : 'bg-pending'}`} aria-hidden="true" />
      {label}
    </span>
  )
}

/** Sayfa bölümlerinin ortak başlığı: numaralı etiket + başlık. */
export function SectionHeading({
  index,
  label,
  title,
  aside,
}: {
  index?: string
  label: string
  title?: string
  aside?: React.ReactNode
}) {
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-t border-line pt-6">
      <div>
        <p className="eyebrow">
          {index && <span className="mr-2 text-ink">{index}</span>}
          {label}
        </p>
        {title && <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight text-ink md:text-4xl">{title}</h2>}
      </div>
      {aside}
    </div>
  )
}
