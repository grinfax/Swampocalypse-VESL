import videoThumbnail from "@/assets/video-thumbnail.png";
import videoOverlay from "@/assets/video-overlay.png";
import { Play } from "lucide-react";

const MediaSection = () => {
  return (
    <section id="media" className="relative py-24 px-4">
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-5xl md:text-6xl tracking-wider text-swamp-cream mb-4">
            MEDIA
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-swamp-cream/40" />
            <span className="font-display text-sm tracking-[0.3em] text-swamp-cream/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              MISSION FOOTAGE
            </span>
            <div className="h-px w-16 bg-swamp-cream/40" />
          </div>
        </div>

        {/* Video Player with Frame */}
        <div className="flex justify-center">
          <div className="relative max-w-3xl w-full">
            {/* Video Overlay Frame */}
            <img
              src={videoOverlay}
              alt=""
              className="absolute inset-0 w-full h-full object-contain pointer-events-none z-20"
            />
            
            {/* Video Thumbnail Container */}
            <div className="relative aspect-[16/9] mx-[6%] my-[4%]">
              <img
                src={videoThumbnail}
                alt="Mission Footage"
                className="w-full h-full object-cover"
              />
              
              {/* Play Button Overlay */}
              <button className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-black/60 flex items-center justify-center group-hover:bg-black/80 transition-colors">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
