import { useState, useEffect } from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import {
  list,
  lines,
  dollar,
  eye,
  apple,
  gplay,
  down,
  twitch,
  x,
  insta,
  bigCube,
  iphone,
  pillar,
  smollCube,
  stairs,
} from "../../public/assets";



export default function Home() {
  const [menu, setMenu] = useState(false)
  
  const isMobile = useMediaQuery({
    query: '(max-width: 900px)'
  })
  const [hideOnMobile, setHideOnMobile] = useState(false);
useEffect(() => {
  setHideOnMobile(isMobile);
}, [isMobile]);

  function toggleMenu(){
    setMenu(!menu)
    // console.log(menu)
    if(menu){
      return 0
    }
  }

  if(hideOnMobile){
    return(
      <div className="flex flex-col font-og items-center justify-center min-h-screen overflow-y-scroll">
        <Image src={lines} alt="no" className="-z-40 absolute h-full object-fill"/>
        <div className="flex flex-row justify-between px-6 items-center  h-[5rem] bg-stone-950 w-full">
        <Image src={dollar} alt="No moni" />
        <div  onClick={toggleMenu} className="h-1/2" >
          
          {menu ? <div className="felx flex-col items-center text-center justify-center">
            {/* <Image src={list} alt='no'/> */}
            <span className="text-center">X</span>
            <div className="flex flex-col bg-stone-950 mt-[2rem] w-full z-50 h-[10rem] overflow-y-scroll gap-4">
              <span className="border-b-[1px] border-white mx-4 py-2">SIGN IN</span>
              <span className="border-b-[1px] border-white mx-4 py-2">LEGAL</span>
              <span className="border-b-[1px] border-white mx-4 py-2">LICENSE</span>
              <span className="border-b-[1px] border-white mx-4 py-2">SECURITY</span>
              <span className="border-b-[1px] border-white mx-4 py-2">CAREERS</span>
              <span className="border-b-[1px] border-white mx-4 py-2">PRESS</span>
              <span className="border-b-[1px] border-white mx-4 py-2">SUPPORT</span>
              <span className="border-b-[1px] border-white mx-4 py-2">STATUS</span>
              <span>CODEBLOG</span>

            </div>
          </div> : <div>
            <Image src={list} alt='no'/>
          </div>}
        </div>
        </div>
        <div className="flex flex-auto flex-col items-center justify-center font-extrabold tracing-[0.03125rem] h-[28.9rem] text-[7.8rem]">
        <span className="leading-[10.375rem] h-[5.7rem] text-center -z-20">CASH <br/></span> <span className="-z-0"> APP</span>
        <Image src={iphone} alt="No iPhone" className="absolute -z-10"/>
        </div>
        {/* <div className="flex flex-row gap-[1.88rem]">
          <Image src={twitch} alt="No twitch" />
          <Image src={x} alt="No twitter" />
          <Image src={insta} alt="No insta" />
        </div> */}
        <div className="flex flex-row gap-[1.25rem] mb-[2rem]">
        <div className="flex flex-row items-center bg-black justify-between p-[1.5625rem] border-[1px] border-solid border-white w-[9.625rem] h-[3.125rem] rounded-[0.4375rem]">
          <Image src={apple} alt="No apple" />
          <span className="text-[0.75rem] tracking-[0.03125rem]">
            APP STORE
          </span>
        </div>
        <div className="flex flex-row items-center bg-black justify-between p-[0.75rem] border-[1px] border-solid border-white w-[9.625rem] h-[3.125rem] rounded-[0.4375rem]">
          <Image src={gplay} alt="No google" />
          <span className="text-[0.75rem] tracking-[0.03125rem]">
            GOOGLE PLAY
          </span>
        </div>
        </div>
        <Image src={down} alt="No arrow" className="mb-[1rem]"/>
        
      </div>
    )
  }

  else{
  return (
    <main
      className="flex flex-col bg-main font-og min-h-screen items-center"
    >
      {/* BG IMAGE  */}
      <Image src={lines} alt="no" className="-z-40 absolute h-full w-full"/>

      {/* BG ITEMS  */}
      <Image src={smollCube} alt="No moni" className="absolute left-[12rem] top-[4.0rem]" />
      <Image src={bigCube} alt="No moni" className="absolute left-[10rem] -z-10 bottom-[5.25rem]" />
      <Image src={stairs} alt="No moni" className="absolute top-[3rem] right-[11.19rem] -z-50" />
      <Image src={pillar} alt="No moni" className="absolute bottom-0 -z-10 right-[19.1rem]" />

      {/* HEADER */}
      <div className="flex flex-row flex-auto h-[1rem] items-center justify-between px-[3.75rem] w-full">
        <Image src={dollar} alt="No moni" className="flex items-start" />
        <div className="flex justify-around gap-[1.25rem] font-og font-extrabold text-xs tracking-[.03125rem]">
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
        <Image src={eye} alt="No eye" />
      </div>

      {/* HERO  */}
      <div className="flex flex-auto mt-[2rem] flex-col items-center justify-center font-extrabold tracing-[0.03125rem] h-[28.9rem] text-[15.0625rem] pt-[10rem]">
        <span className="leading-[10.375rem] h-[5.7rem]  text-center -z-20">CASH <br/></span> <span className="-z-0"> APP</span>
        <Image src={iphone} alt="No iPhone" className="absolute top-[9.5rem] -z-10"/>
        </div>

        {/* FOOTER  */}
      <div className="flex flex-row flex-auto h-[5.5rem] items-center justify-between px-[3.75rem] w-full">
        <div className="flex flex-row gap-[1.25rem]">
        <div className="flex flex-row items-center bg-black justify-between p-[1.5625rem] border-[1px] border-solid border-white w-[10.625rem] h-[3.125rem] rounded-[0.4375rem]">
          <Image src={apple} alt="No apple" />
          <span className="text-[0.75rem] tracking-[0.03125rem]">
            APP STORE
          </span>
        </div>
        <div className="flex flex-row items-center bg-black justify-between p-[0.75rem] border-[1px] border-solid border-white w-[10.625rem] h-[3.125rem] rounded-[0.4375rem]">
          <Image src={gplay} alt="No google" />
          <span className="text-[0.75rem] tracking-[0.03125rem]">
            GOOGLE PLAY
          </span>
        </div>
        </div>
        
        <div className="flex flex-row">
        <Image src={down} alt="No arrow" className="mr-[5.44rem]"/>
        <p className="w-[23.6875rem] text-[0.625rem] font-bold text-[#B6B6B6] font-odd-one leading-[0.8125rem] mr-[2.2rem]">
          Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See
          our BrokerCheck. Investing involves risk; you may lose money. Bitcoin
          trading offered by Cash App. Cash App Investing does not trade bitcoin
          and Cash App is not a member of FINRA or SIPC. Cash App facilitates
          banking services through Sutton Bank and Lincoln Savings Bank, Members
          FDIC.
        </p>
        <div className="flex flex-row gap-[1.88rem]">
          <Image src={twitch} alt="No twitch" />
          <Image src={x} alt="No twitter" />
          <Image src={insta} alt="No insta" />
        </div>
        </div>
      </div>
    </main>
  );
  }
}
