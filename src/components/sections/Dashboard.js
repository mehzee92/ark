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
  const [buyAmount, setBuyAmount] = useState(10); // State for the input amount

  // Sample data for the history section
  const historyData = [
    { date: 'Aug 20, 2025', action: 'Bought', amount: '250 ARKCoin', status: 'Complete' },
    { date: 'Aug 22, 2025', action: 'Redeemed', amount: '200 ARKCoin → 2 Carbon Credits', status: 'Download PDF' },
  ];

  const handleAutoOffsetChange = () => {
    setIsAutoOffset(!isAutoOffset);
  };

  const handleBuyAmountChange = (e) => {
    // Ensure the input is a number
    const value = e.target.value.replace(/[^0-9]/g, '');
    setBuyAmount(value);
  };

  return (
    <div id='dashboard' className="container mx-auto p-2 lg:p-4 max-w-6xl">
      {/* Main title */}
      <h1 className="text-3xl font-extrabold mb-8 text-center text-white">
        Dashboard
      </h1>

      {/* ARKCOIN Wallet Section */}
      <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 mb-8">
        {/* ARKCOIN Wallet Card */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg flex-1">
          <h2 className="text-xl px-3 font-bold mb-4 text-green-500">Buy ARKCOIN</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-gray-700 p-4 rounded-xl text-center">
              <p className="text-2xl font-extrabold text-blue-400">1,250</p>
              <p className="text-sm text-gray-400">ARKCOIN</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-xl text-center">
              <p className="text-2xl font-extrabold text-green-400">$2.50</p>
              <p className="text-sm text-gray-400">per ARKCOIN</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-xl text-center">
              <p className="text-2xl font-extrabold text-yellow-400">1.2</p>
              <p className="text-sm text-gray-400">ARKCOIN Carbon Credit</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 mb-4">
            <input
              type="number"
              value={buyAmount}
              onChange={handleBuyAmountChange}
              className="w-full bg-gray-700 text-white font-bold py-3 px-4 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter amount"
            />
            <button className="flex-shrink-0 cursor-pointer bg-green-400 text-white font-bold py-3 px-4 rounded-xl shadow-md hover:bg-green-600 transition-colors">
              Buy ARKCOIN
            </button>
          </div>
        </div>
      </div>

      {/* Offset My Footprint section */}
      <div className="mb-8">
        <h2 className="text-2xl px-5 font-bold mb-4 text-green-500">Offset My Footprint</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-start justify-center text-white">
            <div className="flex items-center mb-2">
              <span className="p-2 bg-gray-700 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </span>
              <span className="font-bold text-lg">Offset Lifetime</span>
            </div>
            <p className="text-sm text-gray-400">Your lifetime emissions:</p>
            <p className="text-xl font-semibold">525 tons CO₂</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-start justify-center text-white">
            <div className="flex items-center mb-2">
              <span className="p-2 bg-gray-700 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </span>
              <span className="font-bold text-lg">Offset 1 Year</span>
            </div>
            <p className="text-xl font-semibold">15 tons CO₂ = $225</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-start justify-center text-white">
            <div className="flex items-center mb-2">
              <span className="p-2 bg-gray-700 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.836 1.5a9 9 0 11-12.247 9.54l.267.143a.5.5 0 00.518-.89L.5 13.5a1 1 0 011-1h13.382l-3.327-3.327a.5.5 0 01.707-.707l4.5 4.5a.5.5 0 010 .707l-4.5 4.5a.5.5 0 01-.707-.707L14.382 14H1.5" />
                </svg>
              </span>
              <span className="font-bold text-lg">Monthly Subscription</span>
            </div>
            <p className="text-xl font-semibold">$15 / month</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-start justify-center text-white">
            <div className="flex items-center mb-2">
              <span className="p-2 bg-gray-700 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <span className="font-bold text-lg">Gift ARKCoin</span>
            </div>
            <p className="text-xl font-semibold">Send as gift</p>
          </div>
        </div>
      </div>

      {/* History & Certificates section */}
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-green-500">History</h2>
        
        {/* Table header */}
        <div className="hidden md:grid grid-cols-4 gap-4 text-gray-400 font-semibold border-b border-gray-700 pb-2">
          <span>Date</span>
          <span>Action</span>
          <span>Amount</span>
          <span>Status</span>
        </div>
        
        {/* Table rows */}
        <div className="space-y-4 md:space-y-0">
          {historyData.map((item, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 border-b border-gray-700 pb-4 md:py-2 last:border-b-0 last:pb-0">
              <span className="text-sm md:text-base font-semibold text-white">{item.date}</span>
              <span className="text-sm md:text-base font-semibold text-white">{item.action}</span>
              <span className="text-sm md:text-base text-gray-400">{item.amount}</span>
              <span className={`text-sm md:text-base font-semibold ${item.status === 'Complete' ? 'text-green-500' : 'text-blue-400'}`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default App;