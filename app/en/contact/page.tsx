import ContactView from '../../_views/ContactView'
import { alternates } from '../../i18n'

export const metadata = {
  title: 'Contact | Cemre Acar',
  description: 'Send a problem, idea or question about Kurultay or Yelken through the form.',
  alternates: alternates('/iletisim', 'en'),
  openGraph: {
    title: 'Contact | Cemre Acar',
    description: 'Send a problem, idea or question about Kurultay or Yelken through the form.',
    url: 'https://www.cemreacar.com/en/contact',
    siteName: 'Cemre Acar',
    locale: 'en_US',
    type: 'website',
  },
}

export default function ContactPageEn() {
  return <ContactView lang="en" />
}
