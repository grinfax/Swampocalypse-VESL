import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import WorldSection from "@/components/WorldSection";
import MediaSection from "@/components/MediaSection";
import FooterSection from "@/components/FooterSection";
import fullBg from "@/assets/full-bg.png";
import mediaBg from "@/assets/media-bg.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Centered container with max-width */}
      <div className="max-w-[1440px] mx-auto relative">
        <Header />
        
        {/* Unified background container for Hero + Mission */}
        <div className="relative overflow-hidden">
          {/* Single background image spanning both sections */}
          <img
            src={fullBg}
            alt=""
            className="absolute top-0 left-0 w-full object-cover object-top pointer-events-none"
            style={{ height: '1680px', maxHeight: '100%' }}
          />
          
          {/* Content layered above background */}
          <div className="relative z-10">
            <HeroSection />
            <MissionSection />
          </div>
        </div>

        {/* The World Section */}
        <WorldSection />

        {/* Media Section with its own background */}
        <div className="relative overflow-hidden">
          <img
            src={mediaBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
          <div className="relative z-10">
            <MediaSection />
          </div>
        </div>

        {/* Footer Section with its own background */}
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;
