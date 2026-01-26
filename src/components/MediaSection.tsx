import missionFootage from "@/assets/mission-footage.mp4";
import videoOverlay from "@/assets/video-overlay.png";
import { Play } from "lucide-react";
import { useState, useRef } from "react";

const MediaSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

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
          <div className="relative max-w-3xl w-full group/video">
            {/* Video Overlay Frame - this is the main sizing element */}
            <img
              src={videoOverlay}
              alt=""
              className="relative w-full h-auto pointer-events-none z-20 transition-all duration-300 group-hover/video:drop-shadow-[0_0_20px_hsl(35,100%,50%,0.6)]"
            />
            
            {/* Video Container - positioned inside the frame */}
            <div className="absolute inset-0 z-10 rounded-lg overflow-hidden" style={{ top: '6%', left: '5%', right: '5%', bottom: '6%' }}>
              <video
                ref={videoRef}
                src={missionFootage}
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
              
              {/* Play Button Overlay */}
              <button 
                onClick={handlePlayClick}
                className={`absolute inset-0 flex items-center justify-center transition-colors group cursor-pointer ${isPlaying ? 'bg-transparent hover:bg-black/20' : 'bg-black/30 hover:bg-black/40'}`}
              >
                <div className={`w-16 h-16 rounded-full bg-black/60 flex items-center justify-center group-hover:bg-black/80 transition-all ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
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
