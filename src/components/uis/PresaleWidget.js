"use client";

import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa6";
import Button from "./Button";
import { SiTether } from "react-icons/si";
import { SiSolana } from "react-icons/si";
import Image from "next/image";
import CountdownTimer from "./CountdownTimer";

const TOKENS = [
  {
    symbol: "USDT",
    name: "Tether",
    icon: <SiTether color="#0e8c92" />,
  },
  {
    symbol: "SOL",
    name: "Solana",
    icon: <SiSolana color="#0e8c92" className="bg-gradient-to-r from-fuchsia-400 to-teal-400 bg-clip-text text-transparent" />,
  },
];

export default function PresaleWidget() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [fromToken, setFromToken] = useState(TOKENS[0]);
  const [toToken, setToToken] = useState(TOKENS[1]);
  const [amount1, setAmount1] = useState(120);
  const [amount, setAmount] = useState(123200);
  const dropdownRef1 = useRef(null);
  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef1.current &&
        !dropdownRef1.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }

    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);





  // Example fixed rate
  const rate = 1026.67;

  return (
    <div className="w-full md:w-[60%] max-w-[750px] font-bold space-y-4">
      <h1 className={"text-3xl w-full text-center animated-text-gradient"}>
        Presale Ends In
      </h1>

      <CountdownTimer />


      <div className="w-full bg-[#1d243e] relative rounded-xl p-6 space-y-6 shadow-lg border border-gray-700">
        <div className="space-y-4 ">
          {/* From Section */}
          <div className="bg-[#141a30] rounded-lg ">
            <h4 className="p-2">From</h4>
            <div className="flex p-2 px-4 justify-between rounded-xl bg-[#0b1023] items-center">
              {/* Custom Dropdown for token selection */}
              <div className="relative" ref={dropdownRef1}>
                <button
                  type="button"
                  className="flex items-center cursor-pointer gap-2 p-2 px-3 rounded-xl bg-[#1d243e] text-white font-semibold outline-none focus:ring-2 focus:ring-cyan-400"
                  onClick={() => setShowDropdown((prev) => !prev)}
                >
                  {fromToken.icon}
                  {fromToken.symbol}
                  <FaChevronDown className="ml-2 text-gray-400" />
                </button>
                {/* Dropdown menu */}
                {showDropdown && (
                  <div className="absolute left-0 mt-2 w-full bg-[#232a45] border border-gray-600 rounded-xl shadow-lg z-10">
                    {TOKENS.map((token) => (
                      <button
                        key={token.symbol}
                        type="button"
                        className="flex items-center cursor-pointer gap-2 w-full px-3 py-2 text-white hover:bg-[#1d243e] rounded-xl"
                        onClick={() => {
                          setFromToken(token);
                          setShowDropdown(false);
                          // If both tokens are the same, swap the other
                          if (token.symbol === toToken.symbol) {
                            setToToken(TOKENS.find((t) => t.symbol !== token.symbol));
                          }
                        }}
                      >
                        {token.icon}
                        {token.symbol}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="text-end">
                <input
                  type="number"
                  min="0"
                  value={amount1}
                  onChange={(e) => setAmount1(Number(e.target.value))}
                  className="text-2xl text-[#08a1dd] bg-transparent outline-none w-24 text-right"
                />
                <h3 className="text-gray-500">~$0</h3>
              </div>
            </div>
          </div>




          {/* To Section */}
          <div className="bg-[#141a30] rounded-lg ">
            <h4 className="p-2">To</h4>
            <div className="flex p-2 px-4 justify-between rounded-xl bg-[#0b1023] items-center">
              {/* Custom Dropdown for token selection */}
              <div className="relative">
                <button
                  type="button"
                  className="flex items-center cursor-pointer gap-2 p-2 text-[#08a1dd] px-3 rounded-xl bg-[#1d243e] font-semibold outline-none focus:ring-2 focus:ring-cyan-400"

                >
                  <Image src={"/images/logo1.png"} width={25} height={25} alt="icon" />
                  ACARBON

                </button>

              </div>
              <div className="text-end">
                <input
                  type="number"
                  min="0"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="text-2xl text-[#08a1dd] bg-transparent outline-none w-24 text-right"
                />
                <h3 className="text-gray-500">~$0</h3>
              </div>
            </div>
          </div>
          <Button text={"Connect Wallet"} onClick={() => { }} />
        </div>
      </div>
    </div>
  );
} 