import { HistoryManagerProvider, useHistoryManager } from 'hooks/useHistory'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HistoryManagerProvider>
        <Head>
          <title>pfdzm</title>
          <meta name="description" content="pfdzm's personal website" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap"
            rel="stylesheet"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </HistoryManagerProvider>
    </>
  )
}

export default MyApp
