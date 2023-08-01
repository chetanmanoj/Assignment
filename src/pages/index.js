import Image from "next/image";
import { Inter } from "next/font/google";

import {
  dollar,
  eye,
  apple,
  gplay,
  down,
  twitch,
  x,
  insta,
} from "../../public/assets";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col min-h-screen bg-main-bg items-center ${inter.className}`}
    >
      {/* HEADER */}
      <div className="flex flex-row h-[5.5rem] items-center justify-between px-[3.75rem] w-full">
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
        <Image src={eye} alt="No moni" />
      </div>

      {/* FOOTER */}
      <div className="flex flex-row h-[5.5rem] items-center justify-between px-[3.75rem] w-full">
        <div className="flex flex-row items-center justify-between p-[1.5625rem] border-[1px] border-solid border-white w-[10.625rem] h-[3.125rem] rounded-[0.4375rem]">
          <Image src={apple} alt="No apple" />
          <span className="text-[0.75rem] tracking-[0.03125rem]">
            APP STORE
          </span>
        </div>
        {/* 1.25rem space after */}
        <div className="flex flex-row items-center justify-between p-[0.75rem] border-[1px] border-solid border-white w-[10.625rem] h-[3.125rem] rounded-[0.4375rem]">
          <Image src={gplay} alt="No google" />
          <span className="text-[0.75rem] tracking-[0.03125rem]">
            GOOGLE PLAY
          </span>
        </div>
        <Image src={down} alt="No arrow" />
        <p className="w-[22.6875rem] text-[0.625rem] font-bold text-[#B6B6B6] leading-[0.8125rem]">
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
    </main>
  );
}
