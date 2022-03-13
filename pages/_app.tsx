import type { AppProps } from 'next/app'
import Head from 'next/head'

import { globalCss } from '../styles/globals'

/* eslint-disable @typescript-eslint/naming-convention */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Homework</title>
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{globalCss}</style>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
