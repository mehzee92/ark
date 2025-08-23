"use client";
import SectionHeading from "../uis/SectionHeading";
import H1 from "./../uis/H1";
import Button from "../uis/button";
import Section from "./../uis/Section";
import { GiDrop } from "react-icons/gi";
import { useRouter } from 'next/navigation'

export default function ARKCARBONPresale() {

  const router = useRouter()

  const gotoDashboard=()=>{
    router.push('/#dashboard', { scroll: true })
  }


  const gotoSubmitForm=()=>{
    router.push('/#submit_project', { scroll: true })
  }  

  return (
   
    <div className="hero-container" >

      <div className="">
       <Section 
      
      id="home"
    >
      <div
        id="hero"
        className="items-center flex "

      >

        <div className="flex-1">
          
        </div>
        {/* Left Section */}
        <div className=" max-w-2xl " >

        <div className="text-center my-3 ">
          <Button onClick={gotoDashboard} text={"For Individuals"} variant="success" />
          <Button  onClick={gotoDashboard} text={"For Business"} variant="success" />
        </div>
            
        <div className="text-center">
          <GiDrop className="text-2xl text-green-700 inline" />
        </div>
        <div className="text-center hidden lg:block">
          <GiDrop className="text-2xl text-green-600 inline" />
        </div>   
        <div className="text-center hidden lg:block">
          <GiDrop className="text-2xl text-green-300 inline" />
        </div>              

        <div className="text-center my-2 ">
          <img src="/images/logo.png" className="inline w-18  lg:w-36" />
        </div>
    
        <div className="text-center my-2">
          <GiDrop className="text-2xl text-green-700 inline" />
        </div> 

        <div className="text-center my-3 ">
          <img src="/images/carbon-credits.jpeg" className="inline w-10  lg:w-28" style={{borderRadius:"50%"}} />
        </div>   

        <div className="text-center">
          <GiDrop className="text-2xl text-green-500 inline" />
        </div> 
        <div className="text-center hidden lg:block">
          <GiDrop className="text-2xl text-green-200 inline" />
        </div>    
        <div className="text-center hidden lg:block">
          <GiDrop className="text-2xl text-green-100 inline" />
        </div>                     

        <div className="text-center mt-2">
            <Button onClick={gotoSubmitForm}  text={"Green Project Incubator"} variant="success" />
        </div>

      </div>
        

      </div>
    </Section>
    </div>
    </div>
  );
}
