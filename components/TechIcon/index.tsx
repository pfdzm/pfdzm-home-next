import dynamic from 'next/dynamic'

const JavaScriptIcon = dynamic(
  () => import('public/assets/icons/javascript.svg')
)
const TypeScriptIcon = dynamic(
  () => import('public/assets/icons/typescript.svg')
)
const AngularIcon = dynamic(() => import('public/assets/icons/angular.svg'))
const CSSIcon = dynamic(() => import('public/assets/icons/css3.svg'))
const GatsbysIcon = dynamic(() => import('public/assets/icons/gatsby.svg'))
const HTMLIcon = dynamic(() => import('public/assets/icons/html5.svg'))
const MongoDBIcon = dynamic(() => import('public/assets/icons/mongodb.svg'))
const NextJSIcon = dynamic(() => import('public/assets/icons/next-dot-js.svg'))
const ReactJSIcon = dynamic(() => import('public/assets/icons/react.svg'))
const GraphQLIcon = dynamic(() => import('public/assets/icons/graphql.svg'))
const BootstrapIcon = dynamic(() => import('public/assets/icons/bootstrap.svg'))
const TailwindCSSIcon = dynamic(
  () => import('public/assets/icons/tailwindcss.svg')
)
const FirebaseIcon = dynamic(() => import('public/assets/icons/firebase.svg'))
const StripeIcon = dynamic(() => import('public/assets/icons/stripe.svg'))
const LeafletJSIcon = dynamic(() => import('public/assets/icons/leaflet.svg'))
const LinkedInIcon = dynamic(() => import('public/assets/icons/linkedin.svg'))
const GitHubIcon = dynamic(() => import('public/assets/icons/github.svg'))
const MapboxIcon = dynamic(() => import('public/assets/icons/mapbox.svg'))

type Props = {
  tech: string
  className?: string
}

export default function TechIcon({ tech, className }: Props) {
  return <div className={className}>{getIconComponent(tech)}</div>
}

function getIconComponent(tech: string) {
  switch (tech) {
    case 'JavaScript':
      return <JavaScriptIcon />
    case 'TypeScript':
      return <TypeScriptIcon />
    case 'Angular':
      return <AngularIcon />
    case 'CSS':
      return <CSSIcon />
    case 'Gatsby':
      return <GatsbysIcon />
    case 'HTML':
      return <HTMLIcon />
    case 'MongoDB':
      return <MongoDBIcon />
    case 'Next.js':
      return <NextJSIcon />
    case 'React':
      return <ReactJSIcon />
    case 'GraphQL':
      return <GraphQLIcon />
    case 'Bootstrap':
      return <BootstrapIcon />
    case 'TailwindCSS':
      return <TailwindCSSIcon />
    case 'Firebase':
      return <FirebaseIcon />
    case 'Stripe':
      return <StripeIcon />
    case 'Leaflet.js':
      return <LeafletJSIcon />
    case 'LinkedIn':
      return <LinkedInIcon />
    case 'GitHub':
      return <GitHubIcon />
    case 'Mapbox':
      return <MapboxIcon />
    default:
      break
  }
}
