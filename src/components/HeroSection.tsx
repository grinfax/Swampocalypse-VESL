import { ChevronDown, Play } from "lucide-react";
import titleImage from "@/assets/swampocalypse-title.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center">
      {/* Content - Title positioned higher */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-12">
        {/* Title Image (includes "COMING SOON" and tagline) */}
        <img
          src={titleImage}
          alt="SWAMPOCALYPSE - Coming Soon - Gritty, Wild, and Unapologetically Hopeful"
          className="w-full max-w-4xl h-auto mt-7"
        />
      </div>

      {/* Watch Gameplay Button - Positioned lower, below the airboat */}
      <div className="relative z-10 mt-auto mb-48">
        <button className="gameplay-btn-neon group">
          <span className="relative z-10 font-display text-lg tracking-wider text-swamp-cream">
            WATCH GAMEPLAY
          </span>
          <Play className="relative z-10 w-4 h-4 fill-current text-swamp-cream" />
        </button>
      </div>

      {/* Scroll Down Indicator - Centered, minimal style */}
      <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-1 animate-bounce-slow">
        <span className="font-display text-xs tracking-[0.3em] text-swamp-cream/50 uppercase">
          Scroll Down
        </span>
        <ChevronDown className="w-5 h-5 text-swamp-cream/50" />
      </div>
    </section>
  );
};

export default HeroSection;
