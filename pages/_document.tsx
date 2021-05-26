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
          <meta property="og:title" content="pfdzm's personal website" />
          <meta property="og:image" content="/assets/personal-website.png" />
          <meta
            property="og:description"
            content="This is my personal website - enjoy :)"
          />
          <meta property="og:url" content="https://www.pfdzm.me/" />
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
