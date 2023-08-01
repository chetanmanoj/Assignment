import Image from 'next/image'
import { Inter } from 'next/font/google'

import lines from '../assets/lines.svg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen items-center justify-center object-contain ${inter.className}`}
    >
     <Image src={lines} alt="React" className='' />
    </main>
  )
}
