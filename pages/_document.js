import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head >
        <link rel="manifest" href="/manifest.json" />
        <link rel='apple-touch-icon' href='/icon-192x192.png' />
        <link rel='icon' type='image/png' sizes='192x192' href='/icon-192x192.png' />
        <meta name="description" content="zzZ FreeCompany " />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"></link>
          
          </Head>
      <body className=" bg-secondary">
        <Main />
        <NextScript />

      <Script src="../node_modules/bootstrap5/src/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></Script>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js"
          strategy="beforeInteractive"
        ></Script>
      </body>
    </Html>
  )
}