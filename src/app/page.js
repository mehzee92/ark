import HeroSection from "@/components/sections/HeroSection";
import FAQs from "@/components/sections/FAQs";
import Dashboard from "@/components/sections/Dashboard";
import SubmitProject from "@/components/sections/SubmitProject";
import About from "@/components/sections/About";


export default function Home() {
  return (
    
    <div>
      <HeroSection />
      <Dashboard />
      <About />
      <SubmitProject />
      
      {/* <StorySection />
      <TokenomicsSection />
      <VestingSection />
      <RoadmapSection /> */}
      <FAQs />
    </div>
  );
}
