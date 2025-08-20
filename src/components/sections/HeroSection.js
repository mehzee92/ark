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
   
    <div style={{
      backgroundRepeat:"no-repeat", 
      minHeight:"600px", 
      backgroundSize:"cover", 
      backgroundPositionX:"center",
      backgroundImage: "url(/images/background-img.png)" 
      
      }}>
       <Section 
      
      id="home"
    >
      <div
        id="hero"
        className="items-center md:flex-row md:justify-between gap-5 md:gap-16"

      >
        {/* Left Section */}
        <div className=" " >
        
          
          <div className="block lg:flex" style={{maxWidth:"800px", margin:"auto"}}>
            <div className="lg:w-46">
                <img src="/images/did-you-plant-this.png" className="inline" style={{width:"360px"}} />
            </div>
            <div className="flex-1 px-3 flex items-center">
               <H1 text={<>Flights, grills, streams — your fun, your footprint. Oceans, forests, clean air — your life, your legacy. ARKCarbon is the vessel.</>} />
            </div>
          </div>

        </div>




        <div className="text-center my-3">
          <Button onClick={gotoDashboard} text={"For Individuals"} variant="success" />
          <Button  onClick={gotoDashboard} text={"For Business"} variant="success" />
          <Button onClick={gotoSubmitForm}  text={"Green Project Incubator"} variant="success" />
        </div>

        <div className="text-center my-3">
          <GiDrop className="text-2xl text-green-400 inline" />
        </div>

        <div className="text-center my-2 ">
          <img src="/images/logo.png" className="inline" style={{width:"110px", height:"110px"}} />
        </div>
    
        <div className="text-center my-2">
          <GiDrop className="text-2xl text-green-400 inline" />
        </div> 

        <div className="text-center my-3">
          <img src="/images/carbon-cradits.svg" className="inline" style={{width:"120px"}} />
        </div>   

        <div className="text-center my-2">
          <GiDrop className="text-2xl text-green-400 inline" />
        </div> 


        <div className="text-center my-3">
          <img src="/images/for-green-projects.svg" className="inline" style={{width:"250px"}} />
        </div>              


      </div>
    </Section>
    </div>
  );
}
