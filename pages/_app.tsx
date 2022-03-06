import type { AppProps } from 'next/app'
import Head from 'next/head'
import { globalCss } from '../styles/globals'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Homework</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
        <link rel="icon" href="/favicon.ico" />
        <style>{globalCss}</style>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
