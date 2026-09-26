import LegalDoc from '../LegalDoc'

export const metadata = {
  title: 'Política de privacidad | Yelken',
  description: 'Política de privacidad de Yelken: qué se recoge y qué se queda en tu dispositivo.',
  openGraph: {
    title: 'Política de privacidad | Yelken',
    description: 'Política de privacidad de Yelken: qué se recoge y qué se queda en tu dispositivo.',
    url: 'https://cmracar.github.io/yelken/privacidad',
    siteName: 'Cemre Acar Portfolio',
    type: 'article',
  },
}

export default function Page() {
  return <LegalDoc lang="es" kind="privacy" />
}
