import Image from 'next/image'

type Props = {
  tech: string
  className?: string
}

export default function TechIcon({ tech, className }: Props) {
  return (
    <div className={className}>
      <Image
        className="pointer-events-none"
        width="100%"
        height="100%"
        src={getLogo(tech)}
        alt={`${tech} logo`}
      />
    </div>
  )
}

function getLogo(tech: string) {
  switch (tech) {
    case 'JavaScript':
      return '/assets/icons/javascript.svg'
    case 'TypeScript':
      return '/assets/icons/typescript.svg'
    case 'Angular':
      return '/assets/icons/angular.svg'
    case 'CSS':
      return '/assets/icons/css3.svg'
    case 'Gatsby.js':
      return '/assets/icons/gatsby.svg'
    case 'HTML':
      return '/assets/icons/html5.svg'
    case 'MongoDB':
      return '/assets/icons/mongodb.svg'
    case 'Next.js':
      return '/assets/icons/next-dot-js.svg'
    case 'React.js':
      return '/assets/icons/react.svg'
    case 'GraphQL':
      return '/assets/icons/graphql.svg'
    case 'Bootstrap':
      return '/assets/icons/bootstrap.svg'
    case 'TailwindCSS':
      return '/assets/icons/tailwindcss.svg'
    case 'Firebase':
      return '/assets/icons/firebase.svg'
    case 'Stripe':
      return '/assets/icons/stripe.svg'
    case 'Leaflet.js':
      return '/assets/icons/leaflet.svg'
    case 'LinkedIn':
      return '/assets/icons/linkedin.svg'
    case 'GitHub':
      return '/assets/icons/github.svg'
    case 'Mapbox':
      return '/assets/icons/mapbox.svg'
    default:
      break
  }
}
