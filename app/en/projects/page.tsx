import ProjectsView from '../../_views/ProjectsView'
import { alternates } from '../../i18n'

export const metadata = {
  title: 'Projects | Cemre Acar',
  description: 'Projects Cemre Acar built at Carbon Consulting, Beyond Guard and independently.',
  alternates: alternates('/projects', 'en'),
  openGraph: {
    title: 'Projects | Cemre Acar',
    description: 'Projects Cemre Acar built and their details.',
    url: 'https://www.cemreacar.com/en/projects',
    siteName: 'Cemre Acar',
    locale: 'en_US',
    type: 'website',
  },
}

export default function ProjectsPageEn() {
  return <ProjectsView lang="en" />
}
