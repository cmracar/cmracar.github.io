import HomeView from './_views/HomeView'
import { alternates } from './i18n'

export const metadata = { alternates: alternates('/', 'tr') }

export default function Home() {
  return <HomeView lang="tr" />
}
