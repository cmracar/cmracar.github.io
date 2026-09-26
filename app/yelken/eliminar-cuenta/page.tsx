import LegalDoc from '../LegalDoc'

export const metadata = {
  title: 'Eliminación de la cuenta | Yelken',
  description: 'Cómo eliminar tu cuenta de Yelken y sus datos.',
  openGraph: {
    title: 'Eliminación de la cuenta | Yelken',
    description: 'Cómo eliminar tu cuenta de Yelken y sus datos.',
    url: 'https://cmracar.github.io/yelken/eliminar-cuenta',
    siteName: 'Cemre Acar Portfolio',
    type: 'article',
  },
}

export default function Page() {
  return <LegalDoc lang="es" kind="deletion" />
}
