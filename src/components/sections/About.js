"use client";

import React from 'react';

// About/ARKCoin component.
const About = () => {
  return (
    <div id='about' className="bg-black min-h-screen py-16 font-sans text-white  ">
      <div className="container mx-auto p-2 lg:p-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-white text-center">
          What is ARKCoin?
        </h1>
        
        <div className="space-y-12">
          {/* Section: What ARKCoin is */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-green-500">
              Your Digital Key to a Greener Planet
            </h2>
            <p className="text-lg text-gray-300">
              ARKCoin is a digital token that serves as the core currency within the ARKCARBON ecosystem. It&#39;s designed to make climate action accessible and rewarding for everyone. By owning and using ARKCoin, you&#39;re directly participating in a verifiable system of environmental restoration and carbon reduction.
            </p>
          </div>

          {/* Section: How it works */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-green-500">
              How It Works
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              ARKCoin operates on a simple and transparent principle: value for impact. You can acquire ARKCoin through a variety of methods, such as purchasing it directly or earning it by supporting eco-friendly initiatives. Once you have ARKCoin, you can then redeem it to offset your personal or business carbon footprint.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                <span className="font-semibold text-white">Purchase & Earn:</span> Buy ARKCoin directly with fiat currency or cryptocurrency. In the future, you may be able to earn ARKCoin for adopting sustainable behaviors.
              </li>
              <li>
                <span className="font-semibold text-white">Redeem for Impact:</span> Convert your ARKCoin into certified carbon credits to offset your CO₂ emissions.
              </li>
              <li>
                <span className="font-semibold text-white">Transparent & Traceable:</span> All transactions are recorded on a secure ledger, ensuring that every ARKCoin redeemed corresponds to a real, verified carbon credit.
              </li>
            </ul>
          </div>
          
          {/* Section: ARKCoin vs. Carbon Credits */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-green-500">
              ARKCoin vs. Carbon Credits
            </h2>
            <p className="text-lg text-gray-300 mb-4">
              While closely related, ARKCoin and carbon credits serve different purposes.
            </p>
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
              <div className="flex-1 p-6 bg-gray-900 rounded-xl">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  ARKCoin
                </h3>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>A tradable digital token.</li>
                  <li>Used for purchasing and redeeming carbon credits within the ARKCARBON ecosystem.</li>
                  <li>Provides a flexible, liquid way to engage with the carbon market.</li>
                </ul>
              </div>
              <div className="flex-1 p-6 bg-gray-900 rounded-xl">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Carbon Credits
                </h3>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>A certified, verifiable unit representing the removal of one metric ton of CO₂.</li>
                  <li>The underlying asset that gives ARKCoin its value.</li>
                  <li>Used to officially &quot;offset&quot; carbon emissions.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: Utility Explanation */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-green-500">
              The Utility of ARKCoin
            </h2>
            <p className="text-lg text-gray-300">
              The true utility of ARKCoin lies in its ability to democratize the carbon market. By fractionalizing the value of carbon credits into a more accessible token, ARKCoin allows individuals to participate in climate action without needing to purchase full credits. It also provides a transparent and efficient way to transfer value and fund green projects around the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
