import Image from "next/image";
import SectionHeading from "../uis/SectionHeading";
import React from "react";
import H4 from "../uis/H4";
import H1 from "../uis/H1";
import P from "../uis/P";
import Section from "../uis/Section";

const roadmap = [
  { 
    phase: "Phase 1", 
    quarter: "Lift-off (Jul–Aug 2025)", 
    title: "Project Foundation", 
    desc: "Finalize brand identity, website, smart contract audit. Website & Landing Page Launch.",
    progress: 100
  },
  { 
    phase: "Phase 2", 
    quarter: "Blast-Off Presale (Aug 10 – Nov 10, 2025)", 
    title: "Presale Launch", 
    desc: "Launch presale at $0.01. Meme contests, whitelist promo, community building.",
    progress: 55
  },
  { 
    phase: "Phase 3", 
    quarter: "Listings & Liquidity (Q1 2026)", 
    title: "Exchange Listings", 
    desc: "DEX liquidity (Raydium, Jupiter). Apply to 1–2 CEX listings. Major marketing campaign.",
    progress: 15
  },
  { 
    phase: "Phase 4", 
    quarter: "AstroLoan Activation (Q2 2026)", 
    title: "Lending Platform", 
    desc: "Deploy lending module. Enable borrowing USDC/SOL against ADUCK.",
    progress: 11
  },
  { 
    phase: "Phase 5", 
    quarter: "Utility & Ecosystem Growth (Q4 2026)", 
    title: "Ecosystem Expansion", 
    desc: "Airdrops & staking rewards. AstroLoan upgrades and DAO treasury launch.",
    progress: 8
  },
  { 
    phase: "Phase 6", 
    quarter: "AstroVerse & DAO Tools (Q1 2027)", 
    title: "Gaming & Governance", 
    desc: "AstroVerse Game release. DAO governance tools and voting.",
    progress: 6
  },
  { 
    phase: "Phase 7", 
    quarter: "Dominance & Sustainability (Q2 2027+)", 
    title: "Long-term Vision", 
    desc: "Meme launchpad creation. Merch, brand expansion, quarterly treasury updates.",
    progress: 5
  },
];

export default function RoadmapSection() {
  return (
    <Section heading={"Roadmap"} className="w-full px-4 flex flex-col items-center overflow-hidden relative">
      <div id="roadmap" className="absolute -top-[100px]" />
      <div className="relative z-10 w-full space-y-5 flex flex-col items-center">
        
        {/* Mobile Timeline (Vertical) */}
        <div className="w-full mx-auto md:hidden">
          <div className="space-y-8">
          {roadmap.map((item, idx) => (
              <div key={item.phase} className="relative">
                {/* Timeline Node */}
                <div className="absolute left-0 top-6 transform -translate-x-1/2 z-20">
                  <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0dbae2] to-[#873aea] border-3 border-[#23263a] shadow-xl flex items-center justify-center">
                      <H4 text={idx + 1}/>{}
                    </div>
                    <div className="absolute inset-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#0dbae2] to-[#873aea] blur-md opacity-50 animate-pulse"></div>
                  </div>
                </div>
                
                {/* Vertical Line */}
                {idx < roadmap.length - 1 && (
                  <div className="absolute left-0 top-12 w-0.5 h-full bg-gradient-to-b from-[#0dbae2] to-[#873aea] transform -translate-x-1/2"></div>
                )}
                
                {/* Content Card */}
                <div className="ml-4">
                  <div className="bg-[#23263a]/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-[#353a50]/30 hover:border-[#0dbae2]/50 transition-all duration-500 hover:shadow-[#0dbae2]/20 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0dbae2]/5 to-[#873aea]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-2 h-2 rounded-full bg-[#0dbae2] animate-pulse"></div>
                        <H4 text={item.phase}/>
                      </div>
                      
                      <H1 text={item.title}/>
                      
                      <div className="text-[#873aea] font-semibold text-xs mb-3 bg-[#1c243e] px-2 py-1 rounded-full inline-block">
                        {item.quarter}
                      </div>
                      
                      <P text={item.desc}/>
                      
                      <div className="mt-4">
                        <div className="w-full bg-[#1c243e] rounded-full h-1.5">
                          <div 
                            className="bg-gradient-to-r from-[#0dbae2] to-[#873aea] h-1.5 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${item.progress}%` }}
                          ></div>
                        </div>
                        <P variant="typeTwo" text={<>Progress: {item.progress}%</>}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Timeline (Central) */}
        <div className="relative w-full max-w-6xl mx-auto hidden md:block">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-20 w-1 bg-gradient-to-b from-[#0dbae2] via-[#873aea] to-[#0dbae2] transform -translate-x-1/2"></div>
          
          {/* Roadmap Items */}
          <div className="space-y-5">
            {roadmap.map((item, idx) => (
              <div key={item.phase} className={`relative flex items-center ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0dbae2] to-[#873aea] border-4 border-[#23263a] shadow-xl flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{idx + 1}</span>
                    </div>
                    <div className="absolute inset-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#0dbae2] to-[#873aea] blur-md opacity-50 animate-pulse"></div>
                  </div>
                </div>
                
                {/* Content Card */}
                <div className={`w-1/2 ${idx % 2 === 0 ? 'pr-8 lg:pr-12' : 'pl-8 lg:pl-12'}`}>
                  <div className="bg-[#23263a]/95 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-2xl border border-[#353a50]/30 hover:border-[#0dbae2]/50 transition-all duration-500 hover:shadow-[#0dbae2]/20 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0dbae2]/5 to-[#873aea]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-2 h-2 rounded-full bg-[#0dbae2] animate-pulse"></div>
                        <span className="text-[#0dbae2] font-bold text-sm tracking-wider uppercase">{item.phase}</span>
                      </div>
                      
                      <H1 text={item.title} />
                      
                      <div className="text-[#873aea] font-semibold text-sm mb-4 bg-[#1c243e] px-3 py-1 rounded-full inline-block">
                        {item.quarter}
                      </div>
                      
                      <P text={item.desc}/>
                      
                      <div className="mt-6">
                        <div className="w-full bg-[#1c243e] rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-[#0dbae2] to-[#873aea] h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${item.progress}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-400 mt-2">Progress: {item.progress}%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom Achievement */}
          <div className="mt-16 lg:mt-20 text-center z-50">
            <div className="inline-flex items-center gap-3 lg:gap-4 bg-gradient-to-r from-[#0dbae2] to-[#873aea] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full shadow-xl">
              <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-white text-xs lg:text-sm">🚀</span>
              </div>
              <span className="font-bold text-base lg:text-lg">Mission to the Moon Complete!</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}