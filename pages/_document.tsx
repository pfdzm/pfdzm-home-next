import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap"
            rel="stylesheet"
          />
          <meta property="og:title" content="pfdzm's personal website" />
          <meta
            property="og:image"
            content="https://user-images.githubusercontent.com/17315212/119654465-c8194280-be28-11eb-896b-daf44ce145c8.png"
          />
          <meta
            property="og:description"
            content="Hi! I'm Pablo. I'm a Fullstack Software Engineer based in Berlin, Germany. I hail
            from Madrid, Spain but have lived in Berlin since 2009. I currently
            work for Enpal GmbH in the Marketing & Sales Tech (aka Growth Tech)
            team, helping to build and scale the future of green tech."
          />
          <meta property="og:url" content="https://www.pfdzm.me/" />
          <meta name="description" content="pfdzm's personal website" />
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
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
