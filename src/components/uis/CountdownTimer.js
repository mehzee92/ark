"use client";

import { useState, useEffect } from "react";
import P from "./P";
import H4 from "./H4";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date to 30 days from now for a realistic countdown
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30); // 30 days from now
    targetDate.setHours(23, 59, 59, 999); // Set to end of day

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // Timer has ended
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center w-full mx-auto  border border-gray-600 rounded-xl backdrop-blur-sm bg-opacity-30">
      <div className="flex justify-around gap-4 py-2 mt-2 text-white text-lg">
        <div className="text-center">
          <H4 
            text={timeLeft.days.toString().padStart(2, "0")} 
            
          />
         
          <P variant="typeTwo"  text={"Days"}/>
        </div>
        <div className="text-center">
          <H4 
            text={timeLeft.hours.toString().padStart(2, "0")} 
            className="text-[#67e4e2] text-md font-bold"
          />
          
          <P variant="typeTwo"  text={"Hours"}/>
          
        </div>
        <div className="text-center">
          <H4 
            text={timeLeft.minutes.toString().padStart(2, "0")} 
            className="text-[#67e4e2] text-md font-bold"
          />
          
          <P variant="typeTwo"  text={"Minutes"}/>
        </div>
        <div className="text-center">
          <H4 
            text={timeLeft.seconds.toString().padStart(2, "0")} 
            className="text-[#67e4e2] text-md font-bold"
          />
          <P variant="typeTwo"  text={"Seconds"}/>
        </div>
      </div>
    </div>
  );
} 