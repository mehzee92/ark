"use client";


import Footer from "@/components/globalComponents/Footer";
import "./globals.css";
import Header from "@/components/globalComponents/Header";
import Head from "next/head";


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        {/* Force browser tab / address bar theme color */}
        <meta name="theme-color" content="#873aea" />
        <meta name="msapplication-TileColor" content="#873aea" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="ARKCARBON" />
        <meta name="color-scheme" content="dark" />
        <meta name="accent-color" content="#873aea" />
        <link rel="apple-touch-icon" href="/images/logo-mini.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/logo-mini.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/logo-mini.png" />
        <link rel="manifest" href="/manifest.json" />
             
        <style>{`
          :root {
            --theme-purple: #873aea;
            --theme-cyan: #0dbae2;
          }

          body {
            font-family: "Libertinus Sans", sans-serif;
            font-weight: 400;
            font-style: normal;          
          }
          
          html {
            scrollbar-color: var(--theme-purple) #23263a;
          }
          * {
            accent-color: var(--theme-purple);
          }
        `}</style>
      </Head>
      <body className={` antialiased bg-black text-white`}>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
