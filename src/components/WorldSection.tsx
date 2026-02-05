import worldBg from "@/assets/world-bg.png";
import fieldLog from "@/assets/field-log.png";
import worldZombie from "@/assets/world-zombie.gif";
import worldGator from "@/assets/world-gator.png";
import worldContamination from "@/assets/world-contamination.gif";
import worldRestoration from "@/assets/world-restoration.jpg";

const WorldSection = () => {
  const worldImages = [
  {
    src: worldContamination,
    caption: "INDUSTRIAL FARMING UNLEASHED THE DEAD",
  },
  {
    src: worldZombie,
    caption: "YOUR PET IGUANAS MUTATED",
  },
  {
    src: worldGator,
    caption: "OUR NATIVE SPECIES ARE IN DANGER",
  },
  {
    src: worldRestoration,
    caption: "THE FUTURE DEPENDS ON RESTORATION",
  },
];

  return (
    <section id="world" className="relative py-24 px-4">
      {/* Background */}
      <img
        src={worldBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl tracking-wider text-swamp-cream mb-4">
            THE WORLD
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-swamp-cream/40" />
            <span className="font-display text-sm tracking-[0.3em] text-swamp-cream/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              POST-COLLAPSE EVERGLADES
            </span>
            <div className="h-px w-16 bg-swamp-cream/40" />
          </div>
        </div>

        {/* World Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {worldImages.map((image, index) => (
            <div key={index} className="world-image-card group">
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-64 object-cover"
              />
              <div className="world-image-caption">
                <span className="font-display text-sm md:text-base tracking-wider text-white italic drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {image.caption}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Field Log */}
        <div className="flex justify-center">
          <img
            src={fieldLog}
            alt="Field Log - South Florida"
            className="max-w-5xl w-full drop-shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>
    </section>
  );
};

export default WorldSection;
