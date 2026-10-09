export const metadata = {
    title: 'Hakkımda | Cemre Acar',
    description: 'Cemre Acar — Senior Frontend Engineer, AI Products. Deneyim, eğitim ve kullandığı teknolojiler.',
    keywords: 'cemre acar, frontend, özgeçmiş, react, next.js, portfolio, yazılım',
    openGraph: {
        title: 'Hakkımda | Cemre Acar',
        description: 'Deneyim, eğitim ve kullandığım teknolojiler.',
        url: 'https://cemreacar.com/about',
        siteName: 'Cemre Acar',
        locale: 'tr_TR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Hakkımda | Cemre Acar',
        description: 'Deneyim, eğitim ve kullandığım teknolojiler.',
    },
};

export default function PageLayout({ children }: { children: React.ReactNode }) {
    return children;
}
