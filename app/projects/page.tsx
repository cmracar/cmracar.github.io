import ProjectsView from '../_views/ProjectsView'
import { alternates } from '../i18n'

export const metadata = { alternates: alternates('/projects', 'tr') }

export default function ProjectsPage() {
  return <ProjectsView lang="tr" />
}
