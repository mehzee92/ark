"use client";
import SectionHeading from "../uis/SectionHeading";
import H1 from "./../uis/H1";
import Button from "./../uis/Button";
import Section from "./../uis/Section";
import { GiDrop } from "react-icons/gi";

export default function ARKCARBONPresale() {


  return (
   
    <div style={{
      backgroundRepeat:"no-repeat", 
      minHeight:"600px", 
      backgroundSize:"cover", 
      backgroundImage: "url(/images/background-img.png)" 
      
      }}>
       <Section 
      
      id="home"
    >
      <div
        id="hero"
        className="py-10 items-center md:flex-row md:justify-between gap-5 md:gap-16"

      >
        {/* Left Section */}
        <div className="space-y-5 w-full ">
          <SectionHeading text={<>
            <span className="text-white" style={{textShadow:"1px 1px black"}}>ARK</span>
            <span style={{textShadow:"1px 1px black"}}>CARBON</span>
            </>} variant={"heroSection"}/>

          <H1 text={<>The Earth is Gods Masterpiece - given to be enjoyed, protected, preserved. With ARKCarbon, that mission becomes our everyday act of gratitude.</>} />

        </div>

        <div className="text-center my-3">
          <Button text={"For Individuals"} variant="success" />
          <Button text={"For Bussiness"} variant="success" />
        </div>

        <div className="text-center my-3">
          <GiDrop className="text-2xl text-green-400 inline" />
        </div>

        <div className="text-center my-2 ">
          <img src="/images/logo.png" className="inline" style={{width:"50px", height:"50px"}} />
        </div>
    
        <div className="text-center my-2">
          <GiDrop className="text-2xl text-green-400 inline" />
        </div> 

        <div className="text-center my-3">
          <img src="/images/carbon-cradits.svg" className="inline" style={{width:"50px", height:"50px"}} />
        </div>   

        <div className="text-center my-2">
          <GiDrop className="text-2xl text-green-400 inline" />
        </div> 


        <div className="text-center my-3">
          <img src="/images/for-green-projects.svg" className="inline" style={{width:"150px", height:"50px"}} />
        </div>              


      </div>
    </Section>
    </div>
  );
}
