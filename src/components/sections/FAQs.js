"use client"
import React, { useState } from 'react';

// Main App component that contains the FAQ section
export default function App() {
  // Array of FAQ data specifically for ARKCARBON
  const faqs = [
    {
      question: "What is ARKCARBON?",
      answer: "ARKCARBON is a green initiative focused on connecting individuals and businesses with certified environmental projects. By purchasing carbon credits, you help fund projects that reduce greenhouse gas emissions and support a sustainable future."
    },
    {
      question: "How do carbon credits work?",
      answer: "A carbon credit represents the reduction of one metric ton of carbon dioxide equivalent. When you purchase a credit through ARKCARBON, you are funding a project—such as reforestation or renewable energy—that has verifiably removed or prevented that amount of CO2 from entering the atmosphere."
    },
    {
      question: "How can I participate in the ARKCARBON project?",
      answer: "You can participate by exploring our marketplace of verified projects and purchasing carbon credits. Every contribution, big or small, directly supports climate action and helps us achieve our collective environmental goals."
    },
    {
      question: "How do you ensure the projects are legitimate?",
      answer: "We partner exclusively with projects that are certified by leading international standards, such as Gold Standard or VCS. This ensures that every carbon credit is real, verifiable, and has a measurable positive impact on the environment."
    },
    {
      question: "What is the impact of my contribution?",
      answer: "Your contribution has a direct and tangible impact. It helps preserve forests, expand renewable energy infrastructure, and improve local communities. We provide transparent reporting so you can see the difference you're making."
    }
  ];

  return (
    <div id='faqs' className="flex flex-col items-center min-h-screen bg-gray-950 text-gray-100 lg:p-8 font-sans antialiased">
      {/* Container for the entire FAQ section */}
      <div className="w-full max-w-4xl mx-auto py-12 p-2 lg:p-4">
        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-gray-50 leading-tight tracking-wide">
          Frequently Asked Questions
        </h1>

        {/* Loop through each FAQ item */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Reusable component for a single FAQ item
const FaqItem = ({ question, answer }) => {
  // State to manage if the answer is visible or hidden
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-900 rounded-xl shadow-lg border border-gray-700 transition-all duration-300 transform hover:scale-[1.01]">
      <div className="p-6">
        {/* Button to toggle the answer visibility */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full cursor-pointer flex justify-between items-center text-left focus:outline-none"
        >
          {/* Question text */}
          <span className="text-lg md:text-xl  font-semibold text-gray-50 leading-relaxed">
            {question}
          </span>
          {/* Chevron icon that rotates based on the state */}
          <svg
            className={`w-6 h-6 text-green-400 transform transition-transform duration-300 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>

        {/* The answer content, shown or hidden with a transition */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};