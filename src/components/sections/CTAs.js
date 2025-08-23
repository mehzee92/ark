"use client";
import Button from "../uis/button";
import { useRouter } from 'next/navigation'


const CTAs=()=>{

  const router = useRouter()

  const gotoDashboard=()=>{
    router.push('/#dashboard', { scroll: true })
  }


  const gotoSubmitForm=()=>{
    router.push('/#submit_project', { scroll: true })
  }  


return (
    <div style={{borderBottom:"solid 1px white"}}>
        <div className="max-w-5xl  flex py-5 m-auto" >
                <div className="">
                    <Button  variant="info" text="For Individuals" />
                    <Button   variant="info" text="For Business" />
                </div> 

                <div>
                    <Button onClick={gotoDashboard} variant="success" text="Buy ARK Coin" />
                </div>  
                
                <div>
                    <Button onClick={gotoSubmitForm} variant="outlined" text="Green Project Incubator" />
                </div>                
        </div>
    </div>
    )
}

export default CTAs;