import HeroSection from "@/components/sections/HeroSection";
import TokenomicsSection from "../components/sections/TokenomicsSection";
import StorySection from "@/components/sections/StorySection";
import VestingSection from "../components/sections/VestingSection";
import RoadmapSection from "../components/sections/RoadmapSection";
import AstroLoanSection from "@/components/sections/AstroLoanSection";



export default function Home() {
  return (
    
    <div>
      <HeroSection />
      <StorySection />
      <AstroLoanSection/>
      <TokenomicsSection />
      <VestingSection />
      <RoadmapSection />
    </div>
  );
}
