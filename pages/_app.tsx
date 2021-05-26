import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
import { createClient, Provider } from 'urql'

const GH_PAT = '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'

const client = createClient({
  url: 'https://api.github.com/graphql',
  fetchOptions: () => {
    const token = GH_PAT
    return {
      headers: { authorization: token ? `Bearer ${token}` : '' },
    }
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <Head>
        <meta name="description" content="pfdzm's personal website" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
