import AboutView from '../_views/AboutView'
import { alternates } from '../i18n'

export const metadata = { alternates: alternates('/about', 'tr') }

export default function AboutPage() {
  return <AboutView lang="tr" />
}
