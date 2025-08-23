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
    <div style={{borderBottom:"solid 1px #FFFFFF30"}}>
        <div className="max-w-5xl block lg:flex py-5 m-auto" >
                <div className="my-3 text-center">
                    <Button  variant="info" text="For Individuals" />
                    <Button   variant="info" text="For Business" />
                </div> 

                <div className="my-3 text-center">
                    <Button onClick={gotoDashboard} variant="success" text="Buy ARK Coin" />
                </div>  
                
                <div className="my-3 text-center">
                    <Button onClick={gotoSubmitForm} variant="outlined" text="Green Project Incubator" />
                </div>                
        </div>
    </div>
    )
}

export default CTAs;