import '@/styles/globals.css'
import '@/styles/style.css'
import Navbar from '@/components/navbar'

export default function App({ Component, pageProps }) {
  return <>
    <Navbar />
    <Component {...pageProps} />

  </>
}
