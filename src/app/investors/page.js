"use client";
import Link from "next/link";

const ArkCarbonInvestors = () => {
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
      title: "Passive Income",
      description:
        "Stake your ARKCARBON tokens and earn rewards while supporting sustainable projects.",
      icon: "💰",
    },
  ];

  const tokenomics = [
    { label: "Total Supply", value: "1,000,000,000 ARK" },
    { label: "Presale", value: "40%" },
    { label: "Liquidity Pool", value: "30%" },
    { label: "Staking Rewards", value: "20%" },
    { label: "Team & Development", value: "10%" },
  ];

  return (
    <div id="investors" className="container mx-auto p-2 lg:p-6 max-w-6xl">
      {/* Header */}
      <h1 className="text-3xl md:text-5xl font-extrabold mb-8 text-white text-center">
        Invest in <span className="text-green-400">ARKCARBON</span>
      </h1>

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

      {/* Tokenomics Section */}
      <div className="bg-gray-900 p-6 rounded-2xl shadow-lg mb-12">
        <h2 className="text-2xl font-bold text-green-400 mb-6 text-center">
          Tokenomics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 text-center">
          {tokenomics.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-xl shadow-md hover:bg-gray-700 transition"
            >
              <p className="text-sm text-gray-400">{item.label}</p>
              <p className="text-lg font-semibold text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-white mb-4">
          Ready to become an ARKCARBON Investor?
        </h3>
        <Link href="/#dashboard" className="bg-green-400 cursor-pointer text-white font-bold py-3 px-6 rounded-xl shadow-md hover:bg-green-600 transition-colors">
          Buy ARKCARBON
        </Link>
      </div>
    </div>
  );
};

export default ArkCarbonInvestors;