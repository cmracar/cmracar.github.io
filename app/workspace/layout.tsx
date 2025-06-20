import { Suspense } from "react";

export const metadata = {
    title: 'Cemre Acar | Çalışmalarım',
    description: 'Cemre Acar’ın geliştirdiği projeler, kullandığı teknolojiler ve detaylar.',
    keywords: 'cemre acar, frontend, projeler, react, next.js, portfolio, yazılım',
    viewport: 'width=device-width, initial-scale=1',
    openGraph: {
        title: 'Cemre Acar | Çalışmalarım',
        description: 'Cemre Acar’ın geliştirdiği projeler ve detayları.',
        url: 'https://cmracar.github.io/projects',
        siteName: 'Cemre Acar Portfolio',
        locale: 'tr_TR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cemre Acar | Çalışmalarım',
        description: 'Cemre Acar’ın geliştirdiği projeler ve detayları.',
    },
};

export default function PageLayout({ children }: { children: React.ReactNode }) {
    return (
        <Suspense>
            {children}
        </Suspense>
    );
}