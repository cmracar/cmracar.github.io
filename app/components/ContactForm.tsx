'use client'

import { useState, type FormEvent } from 'react'
import { CONTACT } from '../contact'
import type { Lang } from '../i18n'

/**
 * İletişim formu. Site statik olduğu için gönderim FormSubmit (formsubmit.co) üzerinden e-postaya düşer;
 * ilk gönderimde CONTACT.email adresine bir etkinleştirme postası gelir (bir kez onaylanır).
 * Sahte gönderimlere karşı gizli bir "bal" alanı var (botlar doldurur, biz yok sayarız).
 */
const ENDPOINT = `https://formsubmit.co/ajax/${CONTACT.email}`

const COPY = {
  tr: {
    name: 'Adın',
    email: 'E-posta adresin',
    emailHint: 'Cevabı bu adrese göndeririz.',
    topic: 'Konu',
    topics: ['Kurultay', 'Yelken', 'Diğer'],
    message: 'Mesajın',
    messagePh: 'Sorununu, önerini ya da sorularını yaz. Oyunla ilgiliyse cihaz modelini ve sürümü de yazarsan çok yardımcı olur.',
    send: 'Gönder',
    sending: 'Gönderiliyor…',
    sentTitle: 'Mesajın bize ulaştı.',
    sentBody: 'En kısa sürede e-posta adresine döneceğiz. Teşekkürler!',
    again: 'Yeni mesaj yaz',
    error: 'Mesaj gönderilemedi. Birazdan tekrar dene ya da doğrudan e-posta at:',
    short: 'Mesaj en az 10 karakter olmalı.',
    note: 'Gönderdiğin bilgiler yalnızca sana cevap vermek için kullanılır.',
  },
  en: {
    name: 'Your name',
    email: 'Your email',
    emailHint: 'We’ll reply to this address.',
    topic: 'Topic',
    topics: ['Kurultay', 'Yelken', 'Other'],
    message: 'Your message',
    messagePh: 'Tell us the problem or idea. For game issues, your device model and app version help a lot.',
    send: 'Send',
    sending: 'Sending…',
    sentTitle: 'Your message has been sent.',
    sentBody: 'We’ll get back to you by email as soon as we can. Thank you!',
    again: 'Write another message',
    error: 'The message couldn’t be sent. Please try again shortly or email directly:',
    short: 'The message must be at least 10 characters.',
    note: 'The details you send are used only to reply to you.',
  },
}

type State = 'idle' | 'sending' | 'sent' | 'error'

const field =
  'mt-2 w-full rounded-md border border-line bg-surface px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-faint focus:border-ink'

export default function ContactForm({ lang }: { lang: Lang }) {
  const c = COPY[lang]
  const [state, setState] = useState<State>('idle')
  const [problem, setProblem] = useState('')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    if (data.get('_honey')) return // bot: sessizce yok say
    const message = String(data.get('message') ?? '').trim()
    if (message.length < 10) {
      setProblem(c.short)
      return
    }
    setProblem('')
    setState('sending')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: String(data.get('name') ?? '').trim(),
          email: String(data.get('email') ?? '').trim(),
          topic: String(data.get('topic') ?? ''),
          message,
          lang,
          _subject: `cemreacar.com iletişim: ${String(data.get('topic') ?? '')}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })
      const json = await res.json().catch(() => ({}))
      if (res.ok && String(json.success) !== 'false') {
        setState('sent')
        form.reset()
      } else setState('error')
    } catch {
      setState('error')
    }
  }

  if (state === 'sent') {
    return (
      <div role="status" className="rounded-md border border-line bg-surface p-6">
        <p className="font-serif text-2xl text-ink">{c.sentTitle}</p>
        <p className="mt-2 text-muted">{c.sentBody}</p>
        <button type="button" onClick={() => setState('idle')} className="link-underline mt-5 text-sm text-ink">
          {c.again}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate={false}>
      <div className="grid gap-6 md:grid-cols-2">
        <label className="block text-sm text-muted">
          {c.name}
          <input name="name" type="text" required maxLength={80} autoComplete="name" className={field} />
        </label>
        <label className="block text-sm text-muted">
          {c.email}
          <input name="email" type="email" required maxLength={120} autoComplete="email" className={field} />
          <span className="mt-1 block text-xs text-faint">{c.emailHint}</span>
        </label>
      </div>
      <label className="block text-sm text-muted">
        {c.topic}
        <select name="topic" className={field} defaultValue={c.topics[0]}>
          {c.topics.map(t => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-sm text-muted">
        {c.message}
        <textarea name="message" required rows={7} maxLength={4000} placeholder={c.messagePh} className={field} />
      </label>
      {/* bal alanı: gerçek kullanıcı görmez */}
      <input name="_honey" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      {problem && (
        <p role="alert" className="text-sm text-pending">
          {problem}
        </p>
      )}
      {state === 'error' && (
        <p role="alert" className="text-sm text-pending">
          {c.error}{' '}
          <a href={`mailto:${CONTACT.email}`} className="link-underline text-ink">
            {CONTACT.email}
          </a>
        </p>
      )}
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={state === 'sending'}
          className="rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {state === 'sending' ? c.sending : c.send}
        </button>
        <span className="text-xs text-faint">{c.note}</span>
      </div>
    </form>
  )
}
