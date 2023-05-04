import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Next.js + Tailwind CSS + Inter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      </div>
  )
}