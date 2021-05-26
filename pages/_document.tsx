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
