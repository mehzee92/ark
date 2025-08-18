"use client";

import React, { useState } from 'react';

// The main application component.
const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen py-8 font-sans text-white">
      <ArkCarbonDashboard />
    </div>
  );
};

// Main dashboard component.
const ArkCarbonDashboard = () => {
  const [isAutoOffset, setIsAutoOffset] = useState(false);

  // Sample data for the history section
  const historyData = [
    { type: 'Redeem', amount: 250, value: '11.8 TONS CO₂', date: 'Apr 1, 2024' },
    { type: 'Buy', amount: 500, value: '500 ARKCOIN', date: 'Mar 15, 2024' },
    { type: 'Redeem', amount: 100, value: '4.7 TONS CO₂', date: 'Mar 1, 2024' },
    { type: 'Buy', amount: 100, value: '100 ARKCOIN', date: 'Feb 10, 2024' },
  ];

  const handleAutoOffsetChange = () => {
    setIsAutoOffset(!isAutoOffset);
  };

  return (
    <div id='dashboard' className="container mx-auto p-4 max-w-5xl">
      {/* Main title */}
      <h1 className="text-4xl font-extrabold mb-8 text-white">
        ARKCARBON
      </h1>

      {/* Top section: ARKCOIN Wallet and Offset Carbon cards */}
      <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 mb-8">
        {/* ARKCOIN Wallet Card */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg flex-1">
          <h2 className="text-xl font-bold mb-4 text-green-500">ARKCOIN Wallet</h2>
          <p className="text-4xl font-extrabold text-blue-400 mb-2">
            1,250 <span className="text-sm font-semibold text-gray-400">ARKCOIN</span>
          </p>
          <p className="text-sm text-gray-400 mb-4">
            $2.50 per ARKCOIN<br/>
            1.2 ARKCOIN Carbon Credit
          </p>
          <button className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-xl shadow-md hover:bg-green-700 transition-colors">
            Buy ARKCOIN
          </button>
        </div>

        {/* Offset Your Carbon Card */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg flex-1">
          <h2 className="text-xl font-bold mb-4 text-green-500">Offset Your Carbon</h2>
          <p className="text-4xl font-extrabold text-green-400 mb-2">
            126 <span className="text-sm font-semibold text-gray-400">TONS CO₂</span>
          </p>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="autoOffset"
              checked={isAutoOffset}
              onChange={handleAutoOffsetChange}
              className="mr-2 h-4 w-4 text-green-600 rounded-md border-gray-300 focus:ring-green-500"
            />
            <label htmlFor="autoOffset" className="text-gray-400">
              Auto-offset
            </label>
          </div>
          <button className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-xl shadow-md hover:bg-green-700 transition-colors mb-4">
            Redeem ARKCOIN
          </button>
          <p className="text-sm text-gray-400">
            Offset monthly via a subscription
          </p>
        </div>
      </div>

      {/* History & Certificates section */}
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-green-500">History & Certificates</h2>
          <span className="text-lg font-bold text-gray-400 hidden md:block">126 TONS CO₂</span>
          <a href="#" className="text-blue-400 hover:underline text-sm md:hidden">View Certificate</a>
        </div>
        <p className="text-lg font-semibold text-gray-400 mb-4">Total CO₂ Offset</p>
        
        {/* Table/List for history data */}
        <div className="space-y-4">
          {historyData.map((item, index) => (
            <div key={index} className="flex justify-between items-center border-b border-gray-700 pb-2 last:border-b-0 last:pb-0">
              <div className="flex-1">
                <span className="font-medium text-white">{item.type}</span>
                <span className="text-sm text-gray-500 ml-2">{item.amount} ARKCOIN</span>
              </div>
              <div className="text-right">
                <span className="font-semibold text-gray-400 block">{item.value}</span>
                <span className="text-sm text-gray-500 block">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile View Certificate Link */}
        <div className="flex justify-end mt-4 md:hidden">
          <a href="#" className="text-blue-400 hover:underline">View Certificate</a>
        </div>
      </div>
    </div>
  );
};

export default App;
