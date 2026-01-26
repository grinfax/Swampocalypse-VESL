import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Centered container with max-width */}
      <div className="max-w-[1440px] mx-auto relative">
        <Header />
        <HeroSection />
        <MissionSection />
      </div>
    </div>
  );
};

export default Index;
