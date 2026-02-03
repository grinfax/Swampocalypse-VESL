import { ChevronDown, Play } from "lucide-react";
import swampocalypseLogo from "@/assets/swampocalypse-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center">
      {/* Content - Logo with taglines */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-12 mt-[86px]">
        {/* Combined Logo + Taglines Image */}
        <img
          src={swampocalypseLogo}
          alt="SWAMPOCALYPSE - Coming Soon - Gritty, Wild, and Unapologetically Hopeful"
          className="w-full max-w-4xl h-auto"
        />
      </div>

      {/* Watch Gameplay Button - Positioned lower, below the airboat */}
      <div className="relative z-10 mt-auto mb-48">
        <button 
          className="gameplay-btn-neon group"
          onClick={() => {
            document.getElementById('media')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="relative z-10 font-display text-lg tracking-wider text-swamp-cream">
            WATCH GAMEPLAY
          </span>
          <Play className="relative z-10 w-4 h-4 fill-current text-swamp-cream" />
        </button>
      </div>

      {/* Scroll Down Indicator - More visible with white text and drop shadow */}
      <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-1 animate-bounce-slow">
        <span className="font-display text-sm tracking-[0.3em] text-white uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
          Scroll Down
        </span>
        <ChevronDown className="w-6 h-6 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]" />
      </div>
    </section>
  );
};

export default HeroSection;
