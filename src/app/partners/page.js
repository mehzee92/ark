"use client";
import React from 'react'; // Replaced next/link with a standard React component as it is not supported in this environment.

const ArkCarbonPartners = () => {
  const benefits = [
    {
      title: "Eco-Backed Token",
      description:
        "ARKCARBON is backed by real-world carbon credit projects, ensuring tangible environmental impact.",
      icon: "🌍",
    },
    {
      title: "Secure & Transparent",
      description:
        "Built on blockchain, every transaction is transparent and verifiable by the community.",
      icon: "🔒",
    },
    {
      // Updated content for this section
      title: "Impact & Rewards",
      description:
        "Use ARKCoin to support certified projects. Track your impact and unlock community benefits.",
      icon: "⭐", // New icon added to fit the theme
    },
  ];

  // Updated tokenomics data with new structure
  const tokenomics = [
    {
      title: "Total Supply",
      subtitle: "10,000,000,000 ARK",
      content: "Fixed cap ensures scarcity. Entry price begins at $0.01.",
    },
    {
      title: "Green Projects",
      subtitle: "70% Allocation",
      content: "Majority of tokens drive direct purchase of certified carbon credits.",
    },
    {
      title: "Platform Development",
      subtitle: "30% Allocation",
      content: "Funding ARKCarbon’s global scaling, marketing, and compliance.",
    },
    {
      title: "Tiered Pricing Model",
      subtitle: "Structured price growth aligns with adoption and prevents dilution.",
      content: [
        "Phase 1: $0.01 → $1M raised",
        "Phase 2: $0.05 → $5M raised",
        "Phase 3: $0.10 → $10M raised",
        "Phase 4: $0.25 → $25M raised",
      ],
    },
    {
      title: "Participation Impact",
      subtitle: "Utility & Adoption",
      content: "ARKCoin is a utility— tokens are redeemed for carbon credits, creating continuous demand.",
    },
  ];

  // A simple component to simulate a link, since next/link is not available.
  const SimpleLink = ({ href, children, className }) => {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  };

  return (
    <div id="Partners" className="container mx-auto max-w-6xl">

      {/* Header Section */}
      <div className="relative overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-20">
        <div className="absolute inset-x-0 bottom-0 z-0 h-96 -translate-y-1/2 transform-gpu overflow-hidden blur-3xl sm:-top-40 sm:h-[40rem]" aria-hidden="true">
          <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#34d399] to-[#10b981] opacity-20" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white mb-4">
            Patner with <span className="text-green-300">ARKCarbon</span> 
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-gray-300">
            Green Projects Partnership
          </p>
        </div>
      </div>


      {/* Intro Section */}
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg mb-10">
        <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto">
          ARKCARBON is a blockchain-powered token backed by certified{" "}
          <span className="text-green-400 font-semibold">
            carbon credit projects
          </span>
          . By investing, you’re not only growing your portfolio but also
          contributing to a greener, sustainable planet.
        </p>
      </div>

      {/* New - Market Strategy Section */}
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg mb-10">
        <h2 className="text-2xl font-bold text-white mb-4 text-center">Our Market Strategy</h2>
        <div className="text-gray-300">
          <p className="mb-4">
            ARKCARBON targets two distinct markets:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-semibold text-green-400">Voluntary Carbon Market (~$4B)</span> – A small, underdeveloped market that presents a blue-ocean opportunity. Our goal is to transform voluntary offsetting into a mainstream movement, much like recycling became a global trend.
            </li>
            <li>
              <span className="font-semibold text-green-400">Compliance Carbon Market (~$1T)</span> – A massive but outdated market plagued by fraud, inefficiency, and a lack of innovation. We see a significant opportunity for disruption.
            </li>
          </ul>
          <p className="mt-4">
            Our strategy is to operate in both arenas: we will shape the voluntary market into a cultural trend while introducing much-needed transparency and innovation into the trillion-dollar compliance space.
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl p-6 shadow-lg text-center"
          >
            <div className="text-4xl mb-3">{benefit.icon}</div>
            <h3 className="text-lg font-bold text-white mb-2">
              {benefit.title}
            </h3>
            <p className="text-sm text-gray-400">{benefit.description}</p>
          </div>
        ))}
      </div>

      {/* Tokenomics Section (UPDATED) */}
      <div className="bg-gray-900 p-6 rounded-2xl shadow-lg mb-12">
        <h2 className="text-2xl font-bold text-green-400 mb-6 text-center">
          Tokenomics & Distribution
        </h2>
        {/* Updated grid to have 2 columns on medium and larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
          {tokenomics.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-xl shadow-md hover:bg-gray-700 transition flex flex-col items-center h-full"
            >
              <h3 className="text-lg font-bold text-white mb-1">
                {item.title}
              </h3>
              {item.subtitle && (
                <p className="text-sm text-gray-400 font-semibold">{item.subtitle}</p>
              )}
              {Array.isArray(item.content) ? (
                <ul className="list-none text-sm text-gray-400 mt-2 space-y-1 text-left w-full">
                  {item.content.map((line, i) => (
                    <li key={i} className="text-sm">{line}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-400 mt-2">
                  {item.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-white mb-4">
          Ready to become an ARKCARBON Partner?
        </h3>
        <SimpleLink href="/#dashboard" className="bg-green-400 cursor-pointer text-white font-bold py-3 px-6 rounded-xl shadow-md hover:bg-green-600 transition-colors">
          Buy ARKCARBON
        </SimpleLink>
      </div>
    </div>
  );
};

export default ArkCarbonPartners;
