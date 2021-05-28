import Image from 'next/image'
// import JavaScriptIcon from 'public/assets/icons/javascript.svg'
import dynamic from 'next/dynamic'

const JavaScriptIcon = dynamic(
  () => import('public/assets/icons/javascript.svg')
)
import TypeScriptIcon from 'public/assets/icons/typescript.svg'
import AngularIcon from 'public/assets/icons/angular.svg'
import CSSIcon from 'public/assets/icons/css3.svg'
import GatsbysIcon from 'public/assets/icons/gatsby.svg'
import HTMLIcon from 'public/assets/icons/html5.svg'
import MongoDBIcon from 'public/assets/icons/mongodb.svg'
import NextJSIcon from 'public/assets/icons/next-dot-js.svg'
import ReactJSIcon from 'public/assets/icons/react.svg'
import GraphQLIcon from 'public/assets/icons/graphql.svg'
import BootstrapIcon from 'public/assets/icons/bootstrap.svg'
import TailwindCSSIcon from 'public/assets/icons/tailwindcss.svg'
import FirebaseIcon from 'public/assets/icons/firebase.svg'
import StripeIcon from 'public/assets/icons/stripe.svg'
import LeafletJSIcon from 'public/assets/icons/leaflet.svg'
import LinkedInIcon from 'public/assets/icons/linkedin.svg'
import GitHubIcon from 'public/assets/icons/github.svg'
import MapboxIcon from 'public/assets/icons/mapbox.svg'

type Props = {
  tech: string
  className?: string
}

export default function TechIcon({ tech, className }: Props) {
  return (
    <div className={className}>
      {getIconComponent(tech)}
      {/* <Image
        className="pointer-events-none"
        width="100%"
        height="100%"
        src={getLogo(tech)}
        alt={`${tech} logo`}
      /> */}
    </div>
  )
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
    case 'Gatsby.js':
      return <GatsbysIcon />
    case 'HTML':
      return <HTMLIcon />
    case 'MongoDB':
      return <MongoDBIcon />
    case 'Next.js':
      return <NextJSIcon />
    case 'React.js':
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
