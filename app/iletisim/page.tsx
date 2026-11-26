import ContactView from '../_views/ContactView'
import { alternates } from '../i18n'

export const metadata = {
  title: 'İletişim | Cemre Acar',
  description: 'Kurultay ve Yelken için sorun, öneri ve sorularını formla gönder.',
  alternates: alternates('/iletisim', 'tr'),
  openGraph: {
    title: 'İletişim | Cemre Acar',
    description: 'Kurultay ve Yelken için sorun, öneri ve sorularını formla gönder.',
    url: 'https://www.cemreacar.com/iletisim',
    siteName: 'Cemre Acar',
    locale: 'tr_TR',
    type: 'website',
  },
}

export default function ContactPage() {
  return <ContactView lang="tr" />
}
