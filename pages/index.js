import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <style jsx>
        {`
  
      `}
      </style>
      <Head>
        <title>Code Hunter</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keyword" content="Hunting Code with Code for Coders" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.header}>


          

          <span>
            <h1 className='heading dummy'>COde HUnters</h1>

          </span>
        </div>


      </main >
    </>
  )
}
