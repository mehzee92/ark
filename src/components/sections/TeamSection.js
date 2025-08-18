
import Image from "next/image";
import React from "react";
import H4 from "../uis/H4";
import P from "../uis/P";
import Section from "../uis/Section";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Captain Quack",
      title: "Lead Developer & Visionary",
      image: "/images/logo1.png",
    },
    {
      name: "Commander Waddles",
      title: "Smart Contract Engineer",
      image: "/images/logo1.png",
    },
    {
      name: "Lieutenant Feathers",
      title: "UI/UX & Frontend Developer",
      image: "/images/logo1.png",
    },
    {
      name: "Ensign Puddles",
      title: "Community Manager",
      image: "/images/logo1.png",
    },
  ];

  return (
    <Section heading={"Our Team"} id="team" className="px-4 flex flex-col items-center">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-5">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="bg-[#23263a] rounded-2xl p-6 shadow-lg backdrop-blur-md border border-[#353a50] flex flex-col items-center text-center"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#0dbae2]">
              <Image
                src={member.image}
                alt={member.name}
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
            <H4 text={member.name} className="mt-4" />
            <P text={member.title} variant="typeTwo" />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default TeamSection;
