"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";
import H4 from "../uis/H4";
import P from "../uis/P";
import H1 from "../uis/H1";
import Section from "../uis/Section";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: [
    "Presale",
    "Team & Advisors",
    "Liquidity",
    "Loans Pool",
    "Master Sale",
    "Marketing / Ecosystem",
    "Airdrop & Giveaways",
    "Governance / DAO Treasury"
  ],
  datasets: [
    {
      label: "Token Distribution",
      data: [30, 15, 15, 14, 15, 5, 3, 3],
      backgroundColor: [
        '#FF6633',
        '#FFB399',
        '#FF33FF',
        '#FFFF99',
        '#00B3E6',
        '#E6B333',
        '#3366E6',
        '#999966'
      ],
      borderColor: new Array(8).fill("#23263a"),
      borderWidth: 2
    }
  ]
};

const options = {
  cutout: "70%",
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          return `${context.label}: ${context.parsed}%`;
        }
      }
    }
  },
  responsive: true,
  maintainAspectRatio: false
};

const tokenomics = [
  { label: "Total Supply", value: "1,234,567,890" },
  { label: "Decimals", value: "9" },
  { label: "Symbol", value: "ADUCK" },
  { label: "Token Name", value: "AstroDuck" },
  { label: "Chain", value: "Solana" },
  { label: "Presale Price", value: "$0.01" },
  { label: "Target Listing Price", value: "$1" }
];

const distribution = [
  { label: "Presale", value: "30%", notes: "Public sale at $0.01 per ADUCK" },
  { label: "Team & Advisors", value: "15%", notes: "12-month cliff + 12-month linear vesting" },
  { label: "Liquidity", value: "15%", notes: "Locked for DEX & CEX listings" },
  { label: "Loans Pool", value: "14%", notes: "For AstroLoan lending feature" },
  { label: "Master Sale", value: "15%", notes: "Reserved for future fundraising/partners" },
  { label: "Marketing / Ecosystem", value: "5%", notes: "Growth, CEX fees, campaigns" },
  { label: "Airdrop & Giveaways", value: "3%", notes: "Community rewards & campaigns" },
  { label: "Governance / DAO Treasury", value: "3%", notes: "DAO voting, grants, community governance" }
];

const TokenomicsSection = () => {
  return (
    <Section heading={"Tokenomics"}  className="px-4 flex flex-col items-center relative">
      <div id="tokenomics" className=" absolute -top-[100px]"/>
      <div className="w-full overflow-hidden flex flex-col-reverse md:flex-row mt-5 items-center justify-center gap-12">
        
        {/* Info Panel */}
        <div className="flex-1 w-full space-y-8">

          <div className="w-full">
            <div className="flex overflow-x-auto max-w-[1500px] m-auto scrollbar-thin justify-between scrollbar-thumb-gray-700 scrollbar-track-gray-900 mx-auto gap-2 bg-[#23263a] rounded-2xl p-2 shadow">
              {tokenomics.map((item) => (
                <div
                  key={item.label}
                  className="flex  border w-[150px] border-gray-600 rounded-2xl text-center justify-center flex-col items-center flex-shrink-0 mx-1"
                >
                  <H4 text={item.label} />
                  <H4 text={item.value} variant="typeTwo" />
                </div>
              ))}
            </div>
            <div className="text-center lg:hidden mt-2 text-xs text-gray-400">
              Swipe &rarr; to see more
            </div>
          </div>

          <div className="bg-[#1c243e] rounded-2xl space-y-5 p-6 shadow">
            <H4 text={"Token Allocation"}  />
            <div className="flex flex-col-reverse md:flex-row w-full h-fit md:h-[450px] items-center justify-between">
              <ul className="space-y-2 w-full md:w-[50%] h-fit">
                {distribution.map((item, idx) => (
                  <li key={item.label} className="flex items-start justify-around w-full gap-3">
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <H4 text={item.label} variant="typeTwo"/>
                        <span
                          className="text-md text-gray-800 font-bold px-2 py-0.5 rounded"
                          style={{ backgroundColor: data.datasets[0].backgroundColor[idx] }}
                        >
                          {item.value}
                        </span>
                      </div>
                      <P text={item.notes} variant="typeTwo"/>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Doughnut Chart - fixed height applied */}
              <div className="w-full md:w-[35%] mt-10 md:mt-0 h-[400px] flex items-center justify-center relative">
                <Doughnut data={data} options={options} />
                {/* Center label inside doughnut */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <H1 text={<>Astro<span className="yellow-text">Duck</span></>}/>
                  <H4 text={"Tokenomics"}/>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};

export default TokenomicsSection;
