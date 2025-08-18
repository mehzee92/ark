"use client";

import Button from "./../uis/Button";
import StoryCarousel from "../uis/StoryCarousel";
import H1 from "./../uis/H1";
import P from "./../uis/P";
import SectionHeading from "../uis/SectionHeading";
import Section from "./../uis/Section";


export default function StorySection() {
  return (
    <Section
      heading={<><span className="text-gray-50">🦆</span> The Story of <span className="text-gray-50">ARK</span><span className="yellow-text">CARBON</span></>}
      className="relative"
    >
      <div id="story" className="absolute -top-[100px]"/>
      <div className="">
        {/* Section Header */}
        <div className="text-center mb-16">
          <P text={<>Once upon a time, in a quiet pond on Earth, lived a curious little CARBON with big dreams.
            While the other CARBONs were content splashing in shallow waters, this one looked up at the stars
            and wondered, &quot;Why waddle... when I could fly?&quot;</>}
            className=" max-w-3xl mx-auto" variant="typeOne" />
        </div>

        {/* Main Story Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-10">
          {/* Story Text */}
          <div className="space-y-2">

            <SectionHeading text={"From Pond to Stars"} />

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <P variant="typeOne" text="Powered by memes, moonlight, and pure determination, he built himself a rocket ship made of laughter and launched into space. Now, he's exploring galaxies, quacking with aliens, and delivering financial freedom across the universe." />
              <P variant="typeOne" text="ARKCARBON invites you to join him on this interstellar journey powered by community, DeFi utility, and meme energy. With a presale price of just $0.01 and a target listing price of $1, ARKCARBON isn't just aiming for the moon he's aiming for 100x returns." />
              <P variant="typeOne" text="This isn't just another token it's a mission fueled by the power of memes, the strength of community, and the dream of financial freedom. Join the flight, hold your CARBONs, and remember: the stars belong to those who dare to quack." />
            </div>
          </div>

          {/* Story Visual */}
          <div className="relative">
            <div className=" p-8">
              <div className="text-center space-y-4">
                <div className="relative w-60 h-60 md:w-40 md:h-40 mx-auto animate-bounce transition-all duration-700 overflow-hidden rounded-full">
                  {/* Fixed Background Image */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      backgroundImage: "url('/images/background-img.jpg')",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat"
                    }}
                  />
                  {/* Content Container */}
                  <div className="relative w-full h-full rounded-full flex items-center justify-center">
                    <img
                      src="/images/heroImage.png"
                      alt="ARKCARBON"
                      className="w-48 h-48 md:w-35 md:h-35 object-contain"
                    />
                  </div>
                </div>
                <H1 text={<>ARK<span className="yellow-text">CARBON</span></>} className="text-4xl md:text-3xl font-bold text-white" />
                <P text="&quot;Why waddle when I could fly? 🚀&quot;" className="text-gray-300 text-2xl md:text-xl" />
                <div className="flex justify-center space-x-4 text-lg md:text-md text-gray-400">
                  <span>🦆 Meme Power</span>
                  <span>💎 100x Target</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Carousel/Grid */}
        <div className="mb-10">
          <StoryCarousel />
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10">
          <div className="space-y-5">
            <H1 variant="textGradient" text={<>Ready to Join the Flight? <span className="text-white">🚀</span></>} />
            <P
              text="Don't miss your chance to be part of the most meme tastic adventure in crypto history. Join ARKCARBON's journey to the stars and beyond!"
              className=" w-full max-w-4xl mx-auto" />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button text={" Join Presale Now"} onClick={() => { }} variant="info" />
              <Button text={"Hold Your CARBONs"} onClick={() => { }} variant="outlined" />

            </div>
          </div>
        </div>
      </div>
    </Section>
  );
} 