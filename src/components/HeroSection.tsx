import { ChevronDown, Play } from "lucide-react";
import swampBg from "@/assets/swampocalypse-bg.png";
import titleImage from "@/assets/swampocalypse-title.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${swampBg})`,
        }}
      >
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-20">
        {/* Title Image (includes "COMING SOON" and tagline) */}
        <img
          src={titleImage}
          alt="SWAMPOCALYPSE - Coming Soon - Gritty, Wild, and Unapologetically Hopeful"
          className="w-full max-w-4xl h-auto mb-16"
        />

        {/* Watch Gameplay Button */}
        <button className="gameplay-btn">
          <span>WATCH GAMEPLAY</span>
          <Play className="w-4 h-4 fill-current" />
        </button>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
        <ChevronDown className="w-6 h-6 text-swamp-cream/60" />
        <ChevronDown className="w-6 h-6 text-swamp-cream/60 -mt-4" />
        <span className="font-display text-xs tracking-[0.2em] text-swamp-cream/60 mt-1">
          SCROLL DOWN
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
