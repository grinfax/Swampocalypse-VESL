import { ChevronDown, Play } from "lucide-react";
import titleImage from "@/assets/swampocalypse-title.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-20">
        {/* Title Image (includes "COMING SOON" and tagline) */}
        <img
          src={titleImage}
          alt="SWAMPOCALYPSE - Coming Soon - Gritty, Wild, and Unapologetically Hopeful"
          className="w-full max-w-4xl h-auto mb-16"
        />

        {/* Watch Gameplay Button with Neon Glow */}
        <button className="gameplay-btn-neon group">
          <span className="relative z-10 font-display text-lg tracking-wider text-swamp-cream">
            WATCH GAMEPLAY
          </span>
          <Play className="relative z-10 w-4 h-4 fill-current text-swamp-cream" />
        </button>
      </div>

      {/* Scroll Down Indicator - Centered */}
      <div className="absolute bottom-12 left-0 right-0 flex flex-col items-center gap-2 animate-bounce-slow">
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
