/**
 * Medium yazıları (@cmracar). Site statik derlendiği için liste burada elle
 * tutuluyor; yeni yazı yayımlanınca en üste ekle. Kaynak:
 * https://medium.com/feed/@cmracar
 */
export type Article = {
  title: string
  url: string
  date: string // YYYY-MM-DD
  lang: 'TR' | 'EN'
  publication?: string
  summary: string
  tags: string[]
}

export const MEDIUM_PROFILE = 'https://medium.com/@cmracar'

export const articles: Article[] = [
  {
    title: 'Vercel AI SDK — AI Streaming’de Manuel SSE Yönetiminden Vercel AI SDK’e Geçiş',
    url: 'https://medium.com/beyondguard-field-notes/vercel-ai-sdk-ai-streamingde-manuel-sse-y%C3%B6netiminden-vercel-ai-sdk-e-ge%C3%A7i%C5%9F-927de5b230e1',
    date: '2026-06-29',
    lang: 'TR',
    publication: 'Beyond Guard Field Notes',
    summary: 'Yapay zekâ yanıtlarını kelime kelime akıtmak için elle yazılan SSE katmanından Vercel AI SDK’ye geçişte neler değişti.',
    tags: ['Vercel AI SDK', 'SSE', 'Streaming'],
  },
  {
    title: 'AG-UI Protokolü — CopilotKit ve SSE Entegrasyon Akışı',
    url: 'https://medium.com/@cmracar/ag-ui-protokol%C3%BC-copilotkit-ve-sse-entegrasyon-ak%C4%B1%C5%9F%C4%B1-cbe687095b58',
    date: '2025-10-30',
    lang: 'TR',
    summary: 'Ajan ile arayüz arasındaki AG-UI protokolü; CopilotKit ve SSE ile uçtan uca entegrasyon akışı.',
    tags: ['AG-UI', 'CopilotKit', 'Agentic UI'],
  },
  {
    title: 'Nedir bu n8n? Otomasyonun Gücü',
    url: 'https://medium.com/@cmracar/nedir-bu-n8n-otomasyonun-g%C3%BCc%C3%BC-3e7d2c4ab788',
    date: '2025-06-01',
    lang: 'TR',
    summary: 'İş akışlarını otomatikleştiren n8n nedir, farklı uygulamaları birbirine nasıl bağlar.',
    tags: ['n8n', 'Otomasyon'],
  },
  {
    title: 'Generative UI ve CopilotKit ile Geleceğin Arayüzleri',
    url: 'https://medium.com/@cmracar/generative-ui-ve-copilotkit-ile-gelece%C4%9Fin-aray%C3%BCzleri-08c2465c55c0',
    date: '2025-03-21',
    lang: 'TR',
    summary: 'Arayüzü modelin ürettiği Generative UI yaklaşımı ve CopilotKit’e ilk bakış.',
    tags: ['Generative UI', 'CopilotKit'],
  },
  {
    title: 'NextJS ile Server Side Rendering (SSR) ve Client Side Rendering (CSR)',
    url: 'https://medium.com/@cmracar/nextjs-ile-server-side-rendering-ssr-ve-client-side-rendering-csr-afd80a93148e',
    date: '2024-05-25',
    lang: 'TR',
    summary: 'SSR ile CSR arasındaki farklar ve bunların performans ile kullanıcı deneyimine etkisi.',
    tags: ['Next.js', 'SSR', 'CSR'],
  },
  {
    title: 'React Lazy Load — Nedir? Nasıl Çalışır?',
    url: 'https://medium.com/@cmracar/react-lazy-load-nedir-nas%C4%B1l-%C3%A7al%C4%B1%C5%9F%C4%B1r-c8ef352e1b20',
    date: '2024-05-14',
    lang: 'TR',
    summary: 'Kodu parçalara bölüp gerektiğinde yükleyerek React uygulamalarında performans kazanmak.',
    tags: ['React', 'Performans'],
  },
  {
    title: 'React ve Redux Toolkit — Giriş',
    url: 'https://medium.com/@cmracar/react-ve-redux-toolkit-giri%C5%9F-031148b7c040',
    date: '2024-04-28',
    lang: 'TR',
    summary: 'Büyüyen React uygulamalarında state yönetimini Redux Toolkit ile sadeleştirmek.',
    tags: ['React', 'Redux Toolkit'],
  },
  {
    title: 'How to deploy NextJS project on Github pages?',
    url: 'https://medium.com/carbon-consulting/how-to-deploy-nextjs-project-on-github-pages-32ab20bf2d2',
    date: '2023-01-16',
    lang: 'EN',
    publication: 'Carbon Consulting',
    summary: 'A Next.js project published as a static site on GitHub Pages — the setup behind this very site.',
    tags: ['Next.js', 'GitHub Pages'],
  },
  {
    title: 'React Auth with High Order Component',
    url: 'https://medium.com/carbon-consulting/react-auth-with-high-order-component-dffd3d5514d',
    date: '2022-05-26',
    lang: 'EN',
    publication: 'Carbon Consulting',
    summary: 'What a Higher-Order Component is and how to use one to guard routes with authentication.',
    tags: ['React', 'Auth'],
  },
  {
    title: 'General Bash Usage — 2 (Grep-Awk)',
    url: 'https://medium.com/carbon-consulting/general-bash-usage-2-grep-awk-c40155041095',
    date: '2022-01-18',
    lang: 'EN',
    publication: 'Carbon Consulting',
    summary: 'Regular expressions with grep and awk to get more out of everyday shell work.',
    tags: ['Bash', 'Linux'],
  },
]

const MONTHS = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara']

export function formatDate(iso: string) {
  const [y, m] = iso.split('-').map(Number)
  return `${MONTHS[m - 1]} ${y}`
}
