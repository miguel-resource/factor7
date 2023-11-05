import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Head } from 'next/document'

export default function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />
  return (
    <>
      {/* <Head> */}
        <title>Factor 7</title>

      {/* </Head> */}
      <Component {...pageProps} />
    </>
  )
}
