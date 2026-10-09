export const metadata = {
    title: 'Projeler | Cemre Acar',
    description: 'Cemre Acar’ın Carbon Consulting, Beyond Guard ve bağımsız olarak geliştirdiği projeler.',
    keywords: 'cemre acar, frontend, projeler, react, next.js, portfolio, yazılım',
    openGraph: {
        title: 'Projeler | Cemre Acar',
        description: 'Cemre Acar’ın geliştirdiği projeler ve detayları.',
        url: 'https://www.cemreacar.com/projects',
        siteName: 'Cemre Acar',
        locale: 'tr_TR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Projeler | Cemre Acar',
        description: 'Cemre Acar’ın geliştirdiği projeler ve detayları.',
    },
};

export default function PageLayout({ children }: { children: React.ReactNode }) {
    return children;
}
