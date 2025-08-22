"use client";

import React from "react";
import { FaTwitter, FaTelegramPlane, FaInstagram } from "react-icons/fa";

// A cleaner, more maintainable Footer component.
const Footer = () => {
  // Define social media links and icons
  const socialLinks = [
    { name: "Twitter", icon: <FaTwitter />, href: "https://x.com/ARKCARBONsol" },
    { name: "Telegram", icon: <FaTelegramPlane />, href: "https://t.me/ARKCARBONsol" },
    { name: "Instagram", icon: <FaInstagram />, href: "https://www.instagram.com/ARKCARBONsol/" },
  ];

  // Define footer navigation links
  const footerLinks = {
    product: [
      { name: "ARKLoan", href: "#" },
      { name: "Staking", href: "#" },
      { name: "Governance", href: "#" },
      { name: "ARKVerse", href: "#" },
    ],
    company: [
      { name: "About", href: "#story" },
      { name: "Roadmap", href: "#roadmap" },
      { name: "Tokenomics", href: "#tokenomics" },
      { name: "Vesting", href: "#vesting-schedule" },
    ],
    resources: [
      { name: "Whitepaper", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Audit Report", href: "#" },
      { name: "FAQ", href: "#" },
    ],
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f1419] border-t border-[#23263a]">
      <div className="mx-auto px-4 md:px-8 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row w-full justify-between gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0dbae2] to-[#873aea] rounded-full flex items-center justify-center">
                <img src="/images/logo.png" />
              </div>
              <div>
                <h3 className="text-xl text-white">
                  ARK<span className="text-green-400">CARBON</span>
                </h3>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed" style={{maxWidth:"550px"}}>
              Our carbon credit–backed token empowers sustainable partnerships by turning 
              verified carbon offsets into a secure and tradeable digital asset.
            </p>
          </div>

          {/* Social Links */}
          <div className="md:w-1/2">
            <h4 className="text-white text-lg font-semibold mb-3">Community</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-[#23263a] hover:bg-gradient-to-br hover:from-[#0dbae2] hover:to-[#873aea] rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#23263a] pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} ARKCARBON. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#0dbae2] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0dbae2] transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0dbae2] transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
