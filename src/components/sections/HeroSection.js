"use client";

import Image from "next/image";
import P from "../uis/P";
import PresaleWidget from "../uis/PresaleWidget";
import SectionHeading from "../uis/SectionHeading";
import H1 from "../uis/H1";
import Section from "../uis/Section";

export default function AstroDuckPresale() {


  return (
   
    <div style={{ backgroundImage: "linear-gradient(180deg, #000000AA, #000000AA), url(/images/background-img.jpg)" }}>
       <Section 
      
      id="home"
    >
      <div
        id="hero"
        className=" flex flex-col py-10 items-center md:flex-row md:justify-between gap-5 md:gap-16"

      >
        {/* Left Section */}
        <div className="space-y-5 w-full md:w-1/2">
          <SectionHeading text={<><span className="text-white">Astro</span>Duck</>} variant={"heroSection"}/>

          <H1 text={<> &quot; Houston, we have a duck! &quot;
            <br/> Join AstroDuck on its moon mission and beyond.</>} variant="type_two"/>

          <div className="space-y-2 border mt-5 border-gray-600 w-fit p-4 font-bold rounded-2xl text-xl backdrop-blur-sm bg-opacity-30">
            <P text={<>Total Supply: <span className="text-[#9ca3af] font-semibold">1.234.567.890</span></>} className="text-gray-200" />
            <P text={<>Decimals: <span className="text-[#9ca3af] font-semibold">9</span></>} className="text-gray-200" />
            <P text={<>Symbol: <span className="text-[#9ca3af] font-semibold">ADUCK</span></>} className="text-gray-200" />
            <P text={<>Token Type: <span className=" text-[#9ca3af] font-semibold">SPL (Solana)</span></>} className="text-gray-200" />
          </div>
        </div>

        {/* Duck Image */}
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <Image
            src="/images/heroImage.png"
            height={600}
            width={600}
            alt="AstroDuck"
            className="w-full md:w-[75%]"
          />
        </div>

    

      </div>
    </Section>
    </div>
  );
}
