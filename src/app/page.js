import HeroSection from "@/components/sections/HeroSection";
import TokenomicsSection from "../components/sections/TokenomicsSection";
import StorySection from "@/components/sections/StorySection";
import VestingSection from "../components/sections/VestingSection";
import RoadmapSection from "../components/sections/RoadmapSection";
import FAQs from "@/components/sections/FAQs";


export default function Home() {
  return (
    
    <div>
      <HeroSection />
      {/* <StorySection />
      <TokenomicsSection />
      <VestingSection />
      <RoadmapSection /> */}
      <FAQs />
    </div>
  );
}
