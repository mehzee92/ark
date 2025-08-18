"use client";
import React, { useState } from "react";
import Image from "next/image";
import P from "../uis/P";
import Link from "next/link";
import H4 from "../uis/H4";
import {
  FaTwitter,
  FaTelegramPlane,
  FaDiscord,
  FaMediumM,
  FaGithub,
} from "react-icons/fa";

import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  const [email, setEmail] = useState("");
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here, e.g., send email to a server
    console.log("Subscribing with email:", email);
    alert(`Thank you for subscribing with ${email}!`);
    setEmail(""); // Reset email input after submission
  };
  const footerLinks = {
    product: [
      { name: "AstroLoan", href: "#" },
      { name: "Staking", href: "#" },
      { name: "Governance", href: "#" },
      { name: "AstroVerse", href: "#" },
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
    community: [
      { name: "Instagram", href: "https://www.instagram.com/astroducksol/" },
      { name: "Telegram", href: "https://t.me/astroducksol" },
      { name: "Twitter", href: "https://x.com/astroducksol" },
      { name: "Medium", href: "#" },
    ],
  };

  const socialLinks = [
    { name: "Twitter", icon: <FaTwitter />, href: "https://x.com/astroducksol" },
    { name: "Telegram", icon: <FaTelegramPlane />, href: "https://t.me/astroducksol" },
    { name: "Instagram", icon: <FaInstagram />, href: "https://www.instagram.com/astroducksol/" },
    // { name: "Medium", icon: <FaMediumM />, href: "#" },
    // { name: "GitHub", icon: <FaGithub />, href: "#" },
  ];

  return (
    <footer className="bg-[#0f1419] border-t border-[#23263a]">
      <div className=" mx-auto px-4 md:px-8 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row w-full justify-between gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0dbae2] to-[#873aea] rounded-full flex items-center justify-center">
                <img
                  src={"/images/logo.png"}
                  style={{width:"100px"}}
                  alt="logo"
                  className="text-white font-bold text-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Astro<span className="yellow-text">Duck</span>
                </h3>
                <p className="text-[#0dbae2] text-sm font-medium">
                  To the Moon & Beyond
                </p>
              </div>
            </div>
            <P
              variant="typeTwo"
              text={
                "The next generation meme token on Solana with real utility. Join the AstroDuck community and be part of the future of decentralized finance."
              }
            />

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-[#23263a] hover:bg-gradient-to-br hover:from-[#0dbae2] hover:to-[#873aea] rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div className="flex w-full justify-between gap-6">
            <div>
              <H4 text={"Product"} />
              <ul className="space-y-2">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#0dbae2] transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <H4 text={"Company"} />
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#0dbae2] transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}

            <div>
              <H4 text={"Resources"} />
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#0dbae2] transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-[#23263a] pt-4 mb-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h4 className="text-white font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-400 text-sm">
                Get the latest updates on AstroDuck development and community
                news.
              </p>
            </div>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row w-full md:w-auto gap-3"
            >
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 md:w-64 px-4 py-3 bg-[#23263a] border border-[#353a50] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#0dbae2] transition-colors duration-300"
              />
              <a
                href="mailto:aduck@astroduck.xyz"
                className="px-2 py-3 bg-gradient-to-r from-[#0dbae2] to-[#873aea] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#0dbae2]/25 transition-all duration-300"
              >
                Subscribe
              </a>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#23263a] pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <P
              variant="typeTwo"
              text={<>© {currentYear} AstroDuck. All rights reserved.</>}
            />

            <div className="flex items-center gap-6 text-sm">
              <Link
                href="#"
                className="text-gray-400 hover:text-[#0dbae2] transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#0dbae2] transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#0dbae2] transition-colors duration-300"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 p-2 bg-[#1c243e] rounded-lg">
          <P
            variant="typeTwo"
            text={
              <>
                <strong>Disclaimer:</strong> Cryptocurrency investments are
                subject to high market risks. The information provided on this
                website is for educational purposes only and should not be
                considered as financial advice. Always conduct your own research
                before making any investment decisions.
              </>
            }
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 