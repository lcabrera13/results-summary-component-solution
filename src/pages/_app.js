import '@/styles/globals.css'
import { Hanken_Grotesk } from 'next/font/google'

const hankenGrotesk = Hanken_Grotesk({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${hankenGrotesk.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
