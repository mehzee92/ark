"use client"
import Image from "next/image";
import Section from "../uis/Section";
import H4 from "../uis/H4";
import P from "../uis/P";
import Button from "../uis/button";

export default function AstroLoanSection() {
    const loanFeatures = [
        {
            title: "Flexible LTV",
            description: "Borrow up to 70% of the value of your assets.",
            icon: "/file.svg",
        },
        {
            title: "Competitive Rates",
            description: "Interest rates starting as low as 5% APR.",
            icon: "/globe.svg",
        },
        {
            title: "Instant Approval",
            description: "Get your loan approved in minutes, not days.",
            icon: "/window.svg",
        },
    ];

    return (
        <Section
            heading="AstroLoan: Borrow Against Your Bags"
            className=" relative"
        >
            <div id="astro_loan" className=" absolute -top-[100px]" />
            <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-12">
                {/* Left Side Image */}
                <div className="w-full lg:w-1/2 flex justify-center mb-8 md:mb-0">
                    <Image
                        width={500}
                        height={500}
                        src="/images/astroLoanImg.png"
                        alt="AstroLoan Illustration"
                        className="w-[70%] h-auto object-contain"
                    />
                </div>

                {/* Right Side Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <div>
                        <H4 text="AstroLoan is AstroDuck&apos;s upcoming decentralized lending feature, designed to let you unlock liquidity without selling your assets." />
                        <P text={<> Use your <span className="font-semibold text-white">ADUCK tokens</span> or supported meme coins as collateral to instantly borrow{" "}
                            <span className="font-semibold text-white">USDC</span> or{" "}
                            <span className="font-semibold text-white">SOL</span> — no credit checks, no middlemen, just smart on-chain automation.</>} />


                        <P text={<> Whether you&apos;re hedging, reinvesting, or need fast funds, AstroLoan puts powerful DeFi tools at your fingertips while letting you keep your moon bags.</>} />

                        <P text={<><strong>No selling. No stress. Just smart liquidity.</strong></>} />

                        <P className="mt-4 text-lg font-semibold text-yellow-400">
                            💫 Coming early 2026. Stay tuned.
                        </P>
                    </div>


                    {/* Loan Features */}
                    <div className="space-y-2 mt-2">
                        {loanFeatures.map((feature) => (
                            <div
                                key={feature.title}
                                className="flex items-start gap-4 bg-white/5 rounded-xl p-4 hover:bg-white/10 transition"
                            >
                                <div className="flex-shrink-0 w-8 h-8">
                                    <Image
                                        src={feature.icon}
                                        alt={feature.title}
                                        width={32}
                                        height={32}
                                    />
                                </div>
                                <div>
                                    <H4 text={feature.title} variant="typeTwo" />
                                    <P text={feature.description} />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-4">
                        <Button text="Learn More" onClick={() => { }} />
                    </div>
                </div>
            </div>
        </Section>
    );
}
