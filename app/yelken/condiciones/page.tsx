import LegalDoc from '../LegalDoc'

export const metadata = {
  title: 'Condiciones de uso | Yelken',
  description: 'Condiciones de uso de Yelken.',
  openGraph: {
    title: 'Condiciones de uso | Yelken',
    description: 'Condiciones de uso de Yelken.',
    url: 'https://www.cemreacar.com/yelken/condiciones',
    siteName: 'Cemre Acar Portfolio',
    type: 'article',
  },
}

export default function Page() {
  return <LegalDoc lang="es" kind="terms" />
}
