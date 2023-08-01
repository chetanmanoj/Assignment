import Image from 'next/image'
import { Inter } from 'next/font/google'

import {dollar, eye} from '../../public/assets'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex flex-row min-h-screen bg-main-bg justify-center ${inter.className}`}
    >

      {/* HEADER */}
    <div className='flex flex-row h-[5.5rem] items-center justify-between px-[3.75rem] w-full'>
      <Image src={dollar} alt="No moni" className='flex items-start'/>
      <div className='flex justify-around gap-[1.25rem] font-og font-extrabold text-xs tracking-[.03125rem]'>
        <span>SIGN IN</span>
        <span>LEGAL</span>
        <span>LICENSES</span>
        <span>SECURITY</span>
        <span>CAREERS</span>
        <span>PRESS</span>
        <span>SUPPORT</span>
        <span>STATUS</span>
        <span>CODEBLOG</span>
      </div>
      <Image src={eye} alt="No moni"/>
    </div>

    
    </main>
  )
}
