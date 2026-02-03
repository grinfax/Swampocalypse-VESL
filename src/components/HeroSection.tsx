import { ChevronDown, Play } from "lucide-react";
import swampocalypseLogo from "@/assets/swampocalypse-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center">
      {/* Content container with fixed positioning for text */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-12 mt-[86px]">
        {/* Logo positioned absolutely so shadow doesn't affect text spacing */}
        <div className="relative w-full max-w-4xl">
          {/* Coming Soon Text - positioned above logo visual area */}
          <p className="font-display text-lg md:text-xl tracking-[0.4em] text-[#F2E6D8] mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] text-center">
            COMING SOON
          </p>
          
          {/* Logo container - uses padding-bottom for aspect ratio, logo positioned inside */}
          <div className="relative" style={{ paddingBottom: '18%' }}>
            <img
              src={swampocalypseLogo}
              alt="SWAMPOCALYPSE"
              className="absolute left-1/2 -translate-x-1/2 w-full max-w-4xl h-auto"
              style={{ top: '-15%' }}
            />
          </div>
          
          {/* Tagline - positioned relative to visual logo area, not image bounds */}
          <p className="font-display text-sm md:text-base tracking-[0.3em] text-[#F2E6D8] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] text-center" style={{ marginTop: '-2%' }}>
            GRITTY, WILD, AND UNAPOLOGETICALLY HOPEFUL
          </p>
        </div>
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
