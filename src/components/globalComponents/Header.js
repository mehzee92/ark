"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-dark-blue/90 bg-black md:bg-transparent md:backdrop-blur shadow-sm shadow-gray-800 transition-all">
      <div className=" mx-auto flex justify-between items-center py-3 px-4 md:px-8">
        {/* Logo */}
        <Link href={"/"} className="flex items-center">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex justify-center items-center shadow-lg">
            <Image src={"/images/logo.png"} alt="logo" width={50} height={50} />
          </div>
          
          <h1 className={`text-2xl ml-2 text-gray-200 font-bold w-fit`}>ARK<span className='text-green-400'>CARBON</span></h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 md:flex justify-center gap-1 text-gray-200 items-center text-lg font-light p-2">
         
          <Link href="#arkcoin" className="hover:text-[#abc4ff] hover:bg-[#1c243e] px-3 py-2 rounded-xl transition">ARK<span className="yellow-text">Coin</span></Link>
          <Link href="#dashboard" className="hover:text-[#abc4ff] hover:bg-[#1c243e] px-3 py-2 rounded-xl transition">Buy ACARBON</Link>
          <Link href="#about" className="hover:text-[#abc4ff] hover:bg-[#1c243e] px-3 py-2 rounded-xl transition">About</Link>
          <Link href="#submit_project" className="hover:text-[#abc4ff] hover:bg-[#1c243e] px-3 py-2 rounded-xl transition">Submit Project</Link>
          <Link href="#faqs" className="hover:text-[#abc4ff] hover:bg-[#1c243e] px-3 py-2 rounded-xl transition">FAQs</Link>
          

        </nav>

        

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none p-2 rounded hover:bg-blue-600/30 transition"
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Navigation Drawer */}
      
      <div
        className={`fixed h-screen top-[67px] left-0 z-50 w-[70vw] max-w-xs bg-[#0f172a] text-white shadow-lg flex flex-col py-8 px-6 space-y-6 transform transition-transform duration-300 md:hidden ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        style={{ minWidth: "220px" }}
      >
        
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-4 right-4 text-white text-2xl focus:outline-none"
          aria-label="Close menu"
        >
          &times;
        </button>

        
        <Link href="#arkcoin" className="text-lg font-semibold hover:text-blue-400 transition" onClick={() => setIsMobileMenuOpen(false)}>ARK<span className="yellow-text">Coin</span></Link>
        <Link href="#dashboard" className="text-lg font-semibold hover:text-blue-400 transition" onClick={() => setIsMobileMenuOpen(false)}>BUY ACARBON</Link>
        <Link href="#about" className="text-lg font-semibold hover:text-blue-400 transition" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
        <Link href="#submit_project" className="text-lg font-semibold hover:text-blue-400 transition" onClick={() => setIsMobileMenuOpen(false)}>Submit Project</Link>
        <Link href="#faqs" className="text-lg font-semibold hover:text-blue-400 transition" onClick={() => setIsMobileMenuOpen(false)}>FAQs</Link>
        

      </div>
    </header>
  );
};

export default Header;
