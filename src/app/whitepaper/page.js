"use client"
import React, { useState, useEffect } from 'react';

// Main App component which serves as the Next.js page
export default function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Effect to handle scroll event for showing/hiding the button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Tailwind and Google Fonts are typically handled in the main _app.js or layout.js file in a Next.js project.
          For this self-contained example, we'll assume they are configured. */}
      
      {/* Header Section */}
      <div className="relative overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-20">
        <div className="absolute inset-x-0 bottom-0 z-0 h-96 -translate-y-1/2 transform-gpu overflow-hidden blur-3xl sm:-top-40 sm:h-[40rem]" aria-hidden="true">
          <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#34d399] to-[#10b981] opacity-20" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white mb-4">
            <span className="text-gradient">ARKCarbon</span> White Paper
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-gray-300">
            Redemption for a Carbon-Based World
          </p>
        </div>
      </div>

      {/* Main Content Sections */}
      <main className="container mx-auto px-6 max-w-4xl">
        {/* Section: 1. Introduction */}
        <section id="introduction" className="py-12 sm:py-20">
          <h2 className="text-3xl font-bold mb-4">1. Introduction</h2>
          <div className="section-divider mb-8"></div>
          <p className="text-lg leading-relaxed text-gray-300">
            The Earth is at a tipping point. Every flight, every mile driven, every barbecue adds to the invisible burden of carbon in the atmosphere. ARKCarbon exists to balance this equation — giving individuals and corporations a simple, transparent way to offset their carbon footprint through verified carbon credits.
          </p>
          <p className="text-lg leading-relaxed text-gray-300 mt-4">
            Our platform unites blockchain technology, certified environmental projects, and a mission-driven community. At its heart lies <span className="text-green-400 font-semibold">ARKCoin</span> — Act of Random Kindness — a utility token that fuels offsets, funds green initiatives, and inspires participation in restoring our planet.
          </p>
        </section>

        {/* Section: 2. The Problem */}
        <section id="problem" className="py-12 sm:py-20">
          <h2 className="text-3xl font-bold mb-4">2. The Problem</h2>
          <div className="section-divider mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-3xl shadow-lg">
              <p className="text-lg font-medium text-green-400">Challenge</p>
              <p className="text-xl font-bold mt-2">Market Fragmentation</p>
              <p className="mt-2 text-gray-300 leading-relaxed">Traditional carbon offset markets are fragmented, complex, and often opaque, creating a barrier to entry for many.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-3xl shadow-lg">
              <p className="text-lg font-medium text-green-400">Challenge</p>
              <p className="text-xl font-bold mt-2">Erosion of Trust</p>
              <p className="mt-2 text-gray-300 leading-relaxed">Trust is eroded by a lack of transparency, with widespread fraud and double counting plaguing the industry.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-3xl shadow-lg">
              <p className="text-lg font-medium text-green-400">Challenge</p>
              <p className="text-xl font-bold mt-2">Lack of Accessibility</p>
              <p className="mt-2 text-gray-300 leading-relaxed">Individuals lack an easy way to take personal responsibility, while corporations face immense regulatory and reputational pressure.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-3xl shadow-lg">
              <p className="text-lg font-medium text-green-400">Challenge</p>
              <p className="text-xl font-bold mt-2">Massive Emissions</p>
              <p className="mt-2 text-gray-300 leading-relaxed">The fundamental problem persists: global emissions continue to exceed 36 billion tons of CO₂ annually, accelerating climate change.</p>
            </div>
          </div>
        </section>

        {/* Section: 3. The Solution: ARKCarbon */}
        <section id="solution" className="py-12 sm:py-20">
          <h2 className="text-3xl font-bold mb-4">3. The Solution: ARKCarbon</h2>
          <div className="section-divider mb-8"></div>
          <p className="text-lg leading-relaxed text-gray-300 mb-8">
            ARKCarbon builds a transparent and efficient bridge between people, enterprises, and certified carbon projects.
          </p>
          <div className="space-y-6">
            <div className="flex items-start">
              <span className="text-green-400 text-2xl mr-4">&#8594;</span>
              <div>
                <p className="text-xl font-semibold text-white">For individuals</p>
                <p className="text-lg text-gray-300">Calculate lifetime or annual emissions, buy ARKCoin, and offset with one click.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-400 text-2xl mr-4">&#8594;</span>
              <div>
                <p className="text-xl font-semibold text-white">For businesses</p>
                <p className="text-lg text-gray-300">Access bulk verified credits, transparent dashboards, and compliance-ready reporting.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-400 text-2xl mr-4">&#8594;</span>
              <div>
                <p className="text-xl font-semibold text-white">For green projects</p>
                <p className="text-lg text-gray-300">Receive funding directly, track support on-chain, and showcase impact globally.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: 4. Carbon Credits Explained */}
        <section id="carbon-credits" className="py-12 sm:py-20">
          <h2 className="text-3xl font-bold mb-4">4. Carbon Credits Explained</h2>
          <div className="section-divider mb-8"></div>
          <p className="text-lg leading-relaxed text-gray-300 mb-8">
            ARKCarbon never issues its own credits. We work only with third-party verified credits, ensuring integrity and trust.
          </p>
          <div className="space-y-4">
            <div className="flex items-center text-lg text-gray-300">
              <span className="text-green-400 text-2xl mr-3">&bull;</span>
              <p><span className="font-semibold text-white">1 Carbon Credit</span> = 1 Ton of CO₂ removed or avoided</p>
            </div>
            <div className="flex items-center text-lg text-gray-300">
              <span className="text-green-400 text-2xl mr-3">&bull;</span>
              <p>Verified by standards like <span className="font-semibold text-white">Verra or Gold Standard</span></p>
            </div>
            <div className="flex items-center text-lg text-gray-300">
              <span className="text-green-400 text-2xl mr-3">&bull;</span>
              <p>Average cost: <span className="font-semibold text-white">$15 per credit</span></p>
            </div>
            <div className="flex items-center text-lg text-gray-300">
              <span className="text-green-400 text-2xl mr-3">&bull;</span>
              <p>Backed by projects such as reforestation, renewable energy, and methane capture.</p>
            </div>
          </div>
        </section>

        {/* Section: 5. ARKCoin Utility */}
        <section id="arkcoin-utility" className="py-12 sm:py-20">
          <h2 className="text-3xl font-bold mb-4">5. ARKCoin Utility</h2>
          <div className="section-divider mb-8"></div>
          <p className="text-lg leading-relaxed text-gray-300 mb-8">
            ARKCoin is a utility token that powers the ARKCarbon ecosystem.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-6 rounded-3xl shadow-lg flex flex-col items-center text-center">
              <p className="text-4xl mb-2">💰</p>
              <p className="text-xl font-bold text-white">Buy</p>
              <p className="mt-2 text-gray-300 leading-relaxed">Purchase ARKCoin via fiat or P2P to enter the ecosystem.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-3xl shadow-lg flex flex-col items-center text-center">
              <p className="text-4xl mb-2">🔄</p>
              <p className="text-xl font-bold text-white">Offset</p>
              <p className="mt-2 text-gray-300 leading-relaxed">Convert ARKCoin into certified carbon credits to neutralize your footprint.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-3xl shadow-lg flex flex-col items-center text-center">
              <p className="text-4xl mb-2">📊</p>
              <p className="text-xl font-bold text-white">Track</p>
              <p className="mt-2 text-gray-300 leading-relaxed">See your personal impact and project details on your transparent dashboard.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-3xl shadow-lg flex flex-col items-center text-center">
              <p className="text-4xl mb-2">🎁</p>
              <p className="text-xl font-bold text-white">Gift</p>
              <p className="mt-2 text-gray-300 leading-relaxed">Send ARKCoin to friends or family to inspire and share your mission.</p>
            </div>
          </div>
        </section>

        {/* Section: 6. Tokenomics */}
        <section id="tokenomics" className="py-12 sm:py-20">
          <h2 className="text-3xl font-bold mb-4">6. Tokenomics</h2>
          <div className="section-divider mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-green-400 mb-2">Supply & Price</h3>
              <ul className="text-lg leading-relaxed text-gray-300 list-disc list-inside space-y-2">
                <li>Supply: 1 Billion ARKCoin</li>
                <li>Price: Starts at $0.01, with tiered pricing aligned to demand.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-400 mb-2">Flow</h3>
              <ol className="text-lg leading-relaxed text-gray-300 list-decimal list-inside space-y-2">
                <li>User buys ARKCoin.</li>
                <li>User offsets emissions by sending ARKCoin to ARKCarbon.</li>
                <li>70% of tokens go to certified green projects.</li>
                <li>30% retained for platform operations and growth.</li>
                <li>Projects exchange tokens for fiat independently, ensuring open economics.</li>
              </ol>
              <p className="mt-4 text-gray-400 italic">
                No speculative promises. No burns by users. Utility only.
              </p>
            </div>
          </div>
        </section>

        {/* Section: 7. User Journey */}
        <section id="user-journey" className="py-12 sm:py-20">
          <h2 className="text-3xl font-bold mb-4">7. User Journey</h2>
          <div className="section-divider mb-8"></div>
          <div className="space-y-6">
            <div className="flex items-start">
              <span className="text-green-400 text-xl font-bold mr-4">1.</span>
              <div>
                <p className="text-xl font-semibold text-white">Register</p>
                <p className="text-lg text-gray-300">Automatic wallet creation for a seamless start.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-400 text-xl font-bold mr-4">2.</span>
              <div>
                <p className="text-xl font-semibold text-white">Calculate Footprint</p>
                <p className="text-lg text-gray-300">By birthdate (lifetime) or annual average (15 tons per year).</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-400 text-xl font-bold mr-4">3.</span>
              <div>
                <p className="text-xl font-semibold text-white">Offset</p>
                <p className="text-lg text-gray-300">Choose a flexible subscription ($15/month) or a one-time purchase.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-400 text-xl font-bold mr-4">4.</span>
              <div>
                <p className="text-xl font-semibold text-white">Dashboard</p>
                <p className="text-lg text-gray-300">Track your wallet balance, emissions offset, and project funding in real time.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-400 text-xl font-bold mr-4">5.</span>
              <div>
                <p className="text-xl font-semibold text-white">Certificates</p>
                <p className="text-lg text-gray-300">Receive proof of your impact, which is shareable online.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: 8. Market Opportunity */}
        <section id="market-opportunity" className="py-12 sm:py-20">
          <h2 className="text-3xl font-bold mb-4">8. Market Opportunity</h2>
          <div className="section-divider mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Voluntary Market</h3>
              <p className="text-lg leading-relaxed text-gray-300">
                A market valued at <span className="font-semibold text-green-400">$4B today</span>, projected to grow to <span className="font-semibold text-green-400">$50B+ by 2030</span>.
              </p>
              <p className="mt-4 text-gray-300">
                ARKCarbon engages this market with a <span className="text-white font-semibold">blue ocean entry</span> through voluntary offsets for individuals, appealing to a broad user base.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Compliance Market</h3>
              <p className="text-lg leading-relaxed text-gray-300">
                A nearly <span className="font-semibold text-green-400">$1T market</span> with a growing demand for innovative and efficient solutions.
              </p>
              <p className="mt-4 text-gray-300">
                Our platform is designed for a <span className="text-white font-semibold">scalable expansion</span> into this segment, targeting enterprise-level compliance needs.
              </p>
            </div>
          </div>
        </section>

        {/* Section: 9. Governance & Compliance */}
        <section id="governance" className="py-12 sm:py-20">
          <h2 className="text-3xl font-bold mb-4">9. Governance & Compliance</h2>
          <div className="section-divider mb-8"></div>
          <ul className="text-lg leading-relaxed text-gray-300 space-y-4">
            <li className="flex items-start">
              <span className="text-green-400 text-2xl mr-3">&bull;</span>
              <p>Registration in Wyoming, USA as a utility token, ensuring a clear legal framework.</p>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 text-2xl mr-3">&bull;</span>
              <p>Only <span className="font-semibold text-white">third-party verified credits accepted</span>, maintaining the highest standards of integrity.</p>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 text-2xl mr-3">&bull;</span>
              <p>Transparent reporting for individuals, enterprises, and green projects via on-chain data.</p>
            </li>
          </ul>
        </section>

        {/* Section: 10. Roadmap */}
        <section id="roadmap" className="py-12 sm:py-20">
          <h2 className="text-3xl font-bold mb-4">10. Roadmap</h2>
          <div className="section-divider mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phase 1 */}
            <div className="bg-gray-800 p-6 rounded-3xl shadow-lg">
              <h3 className="text-xl font-bold text-green-400 mb-2">Phase 1 (MVP)</h3>
              <ul className="text-lg text-gray-300 space-y-2 list-disc list-inside">
                <li>User dashboards</li>
                <li>Fiat + P2P ARKCoin purchases</li>
                <li>Subscription offsets</li>
                <li>Verified credit integrations</li>
              </ul>
            </div>
            {/* Phase 2 */}
            <div className="bg-gray-800 p-6 rounded-3xl shadow-lg">
              <h3 className="text-xl font-bold text-green-400 mb-2">Phase 2</h3>
              <ul className="text-lg text-gray-300 space-y-2 list-disc list-inside">
                <li>Corporate dashboards</li>
                <li>Enterprise compliance reporting</li>
                <li>Partnerships with airlines, logistics, and energy firms</li>
              </ul>
            </div>
            {/* Phase 3 */}
            <div className="bg-gray-800 p-6 rounded-3xl shadow-lg">
              <h3 className="text-xl font-bold text-green-400 mb-2">Phase 3</h3>
              <ul className="text-lg text-gray-300 space-y-2 list-disc list-inside">
                <li>Global exchange integrations</li>
                <li>Expanded ecosystem of green project funding</li>
                <li>AI-driven carbon accounting tools</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section: 11. Why ARKCarbon */}
        <section id="why" className="py-12 sm:py-20">
          <h2 className="text-3xl font-bold mb-4">11. Why ARKCarbon</h2>
          <div className="section-divider mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-start mb-4">
                <span className="text-green-400 text-2xl mr-3">&#8594;</span>
                <div>
                  <p className="text-xl font-semibold text-white">Emotional Appeal</p>
                  <p className="text-lg text-gray-300">Participation as redemption, not obligation.</p>
                </div>
              </div>
              <div className="flex items-start mb-4">
                <span className="text-green-400 text-2xl mr-3">&#8594;</span>
                <div>
                  <p className="text-xl font-semibold text-white">Transparency</p>
                  <p className="text-lg text-gray-300">On-chain tracking, third-party verified credits.</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start mb-4">
                <span className="text-green-400 text-2xl mr-3">&#8594;</span>
                <div>
                  <p className="text-xl font-semibold text-white">Accessibility</p>
                  <p className="text-lg text-gray-300">Simple UX, fiat on-ramps, automatic wallets.</p>
                </div>
              </div>
              <div className="flex items-start mb-4">
                <span className="text-green-400 text-2xl mr-3">&#8594;</span>
                <div>
                  <p className="text-xl font-semibold text-white">Scalability</p>
                  <p className="text-lg text-gray-300">Individual offsets + trillion-dollar compliance market.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: 12. Call to Action */}
        <section id="cta" className="py-12 sm:py-20 text-center">
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            This is not just a project. <br />It’s a vessel.
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8">
            Join ARKCarbon — offset your footprint, fund the future, and carry life forward.
          </p>
          <a href="#" className="inline-block px-8 py-4 text-xl font-semibold text-white bg-green-500 rounded-full transition-transform transform hover:scale-105 hover:bg-green-600 shadow-xl">
            Start Your Journey
          </a>
        </section>
      </main>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button onClick={scrollToTop} className="fixed bottom-8 right-8 bg-gray-700 text-white p-4 rounded-full shadow-lg transition-opacity duration-300 opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      {/* Styled-JSX for local CSS */}
      <style jsx global>{`
        body {
          font-family: 'Inter', sans-serif;
          background-color: #030712; /* gray-950 */
          color: #f3f4f6; /* gray-100 */
        }
        .text-gradient {
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          background-image: linear-gradient(to right, #34d399, #10b981);
        }
        .section-divider {
          height: 2px;
          width: 80px;
          background: linear-gradient(to right, #34d399, transparent);
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}
