import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>engine-builder-v0</title>
    </Head>
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  </>
}
