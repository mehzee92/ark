"use client";
import Section from "./../uis/Section";
export default function ARKCARBONPresale() {


  return (
   
    <div className="hero-container lg:flex " style={{alignItems:"center"}}>

      <div className=" flex-1">
       <Section 
      
      id="home"
    >
      <div
        id="hero"
        className="items-center flex  "

      >

        <div className="flex-1 hidden lg:block">
          
        </div>


        <div className=" flex-1 max-w-3xl lg:px-4 font-bold   " >
          <div className="text-5xl text-left lg:text-center ">EVERY LIFE MATTERS</div>
          <div className="text-4xl text-left lg:text-center image-text-1">ARKCARBON CARRIES THEM ALL</div>
        </div>
        <style>
          {
            `
  
               
          .image-text-1 {
                font-weight: bold;
                background: url("/images/background-img2.png") no-repeat center center / cover;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text; /* For some modern browsers */
                color: transparent;
              }               
              
          .image-text-2 {
                font-weight: bold;
                background: url("/images/ladybug.png") no-repeat center center / cover;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text; /* For some modern browsers */
                color: transparent;
              }               

            `
          }
        </style>
        

      </div>
    </Section>

    </div>

    </div>
  );
}
