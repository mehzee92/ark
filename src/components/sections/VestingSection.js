import Image from "next/image";
import SectionHeading from "../uis/SectionHeading";
import React from "react";
import H4 from "../uis/H4";
import Section from "../uis/Section";

export default function VestingSection() {
    const vestingSchedule = [
        { category: "Presale", tgeUnlock: "100%", vestingDetails: "Immediate unlock" },
        { category: "Team & Advisors", tgeUnlock: "0%", vestingDetails: "12-month cliff, then 12-month linear unlock" },
        { category: "Liquidity", tgeUnlock: "100%", vestingDetails: "Locked for 12 months" },
        { category: "Airdrop & Giveaways", tgeUnlock: "10%", vestingDetails: "3-month linear unlock" },
        { category: "Master Sale", tgeUnlock: "0%", vestingDetails: "Strategic releases" },
        { category: "Marketing / Ecosystem", tgeUnlock: "0%", vestingDetails: "Governance-controlled unlocks" },
        { category: "Governance / DAO Treasury", tgeUnlock: "0%", vestingDetails: "DAO-controlled, proposal-based release" },
        { category: "Loans Pool", tgeUnlock: "0%", vestingDetails: "Locked for lending feature development" },
    ];

    return (
        <Section heading={"Vesting & Unlock Schedule"} className="pt-5 px-4 flex flex-col items-center">
            <div id="vesting" className="absolute -top-[100px]"/>
            <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-12">
                {/* Left Side Image */}
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <div className="  w-full flex justify-center items-center">
                        <Image
                            width={500}
                            height={500}
                            src="/images/vestingImg.png"
                            alt="Vesting Illustration"
                            className="w-[70%] h-[550px] object-contain object-center"
                        />
                    </div>
                </div>
                {/* Right Side Table */}
                <div className="w-full lg:w-1/2 flex flex-col items-center">
                    <div className="w-full bg-[#23263a] space-y-5 rounded-2xl p-8 shadow-lg backdrop-blur-md border border-[#353a50]">
                        <H4 text={"Unlock Schedule"} className={"w-full text-center"}/>
                        <table className="w-full text-left">
                            <thead>
                                <tr className="text-cyan-400 text-md">
                                    <th className="pb-2">Category</th>
                                    <th className="pb-2 px-5">TGE Unlock</th>
                                    <th className="pb-2">Vesting Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {vestingSchedule.map((item) => (
                                    <tr key={item.category} className="border-t border-[#353a50] text-white text-md">
                                        <td className="py-1 w-1/3 font-semibold">{item.category}</td>
                                        <td className="py-1 w-1/3 px-5 font-bold text-[#0dbae2]">{item.tgeUnlock}</td>
                                        <td className="py-1 w-1/3 text-sm">{item.vestingDetails}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Section>
    );
}