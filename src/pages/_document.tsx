import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta content="ie=edge" httpEquiv="X-UA-Compatible" />
          <link rel="icon" type="image/ico" href="/favicon-32x32.png" />
          <link
            as="font"
            crossOrigin="anonymous"
            href="/fonts/Boon-Regular.woff2"
            rel="preload"
            type="font/woff2"
          />
        </Head>
        <body>
          <noscript>
            <iframe
              height="0"
              src="https://www.googletagmanager.com/ns.html?id=`${GTM_ID}"
              style={{ display: 'none', visibility: 'hidden' }}
              title="gtm"
              width="0"
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
