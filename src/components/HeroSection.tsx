import { ChevronDown, Play } from "lucide-react";
import swampocalypseLogo from "@/assets/swampocalypse-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center">
      {/* Content - Logo with taglines */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-12 mt-[86px]">
        {/* Combined Logo + Taglines Image */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 pt-12 mt-[86px]">
  {/* TOP TAGLINE - LIVE TEXT */}
<div className="flex items-center gap-4 mb-4">
    <div className="h-[1px] w-8 md:w-16 bg-white/50"></div>
    <p className="font-display text-lg md:text-2xl tracking-[0.4em] text-white uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
     Coming Soon to SteamVR
    </p>
    <div className="h-[1px] w-8 md:w-16 bg-white/50"></div>
  </div>

{/* MAIN LOGO */}
  <img
    src={swampocalypseLogo}
    alt="SWAMPOCALYPSE"
    className="w-full max-w-5xl h-auto mb-0 drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]"
  />

  {/* TAGLINE - Using negative margin-top to overlap the image's transparency */}
  <p className="font-sans font-bold italic text-sm md:text-xl tracking-[0.25em] text-white uppercase drop-shadow-[0_4px_8px_rgba(0,0,0,1)] max-w-4xl px-4 -mt-4 md:-mt-8">
    Gritty, Wild, and Unapologetically Hopeful
  </p>
</div>
      </div>

      {/* Watch Gameplay Button */}
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

  {/* Scroll Down Indicator */}
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
