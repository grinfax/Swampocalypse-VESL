import airboatIcon from "@/assets/airboat-icon.png";
import gunIcon from "@/assets/gun-icon.png";
import plantIcon from "@/assets/plant-icon.png";

const MissionSection = () => {
  const missions = [
    {
      icon: airboatIcon,
      title: "REPEL",
      subtitle: "BLAST THROUGH FLOODED MIAMI ON A HIGH-SPEED AIRBOAT.",
      description:
        "Race through flooded Miami and the shattered Everglades in a motion-simulated airboat. Feel every turn, hit, and surge of speed as you navigate collapsing structures, narrow swamp channels, and toxic waters.",
      colorClass: "mission-card-glass mission-card-orange",
      titleClass: "gradient-orange-text",
    },
    {
      icon: gunIcon,
      title: "RESTORE",
      subtitle: "BATTLE INFECTED ZOMBIES, BORN FROM TOXIC COLLAPSE.",
      description:
        "Fight off pollution-spawned zombies and mutated wildlife that roam the ruins. Survival depends on quick reactions, awareness of your surroundings, and knowing when to push forward or escape.",
      colorClass: "mission-card-glass mission-card-red",
      titleClass: "gradient-red-text",
    },
    {
      icon: plantIcon,
      title: "RECLAIM",
      subtitle: "DEPLOY SEED PODS TO RESHAPE THE BATTLEFIELD.",
      description:
        "Fire seed pods across poisoned land and watch the environment respond in real time. As toxic zones fade and life begins to return, restoration becomes your most powerful tool.",
      colorClass: "mission-card-glass mission-card-green",
      titleClass: "gradient-green-text",
    },
  ];

  return (
    <section id="mission" className="relative py-24 px-4">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-16 bg-white/60" />
          <span className="font-display text-sm tracking-[0.3em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,1)] [text-shadow:_0_2px_4px_rgb(0_0_0_/_80%)]">
            OPERATION: EVERGLADES
          </span>
          <div className="h-px w-16 bg-white/60" />
        </div>
        <h2 className="font-display text-5xl md:text-6xl tracking-wider text-white drop-shadow-[0_2px_8px_rgba(0,0,0,1)] [text-shadow:_0_2px_4px_rgb(0_0_0_/_80%)]">
          YOUR MISSION
        </h2>
      </div>

      {/* Mission Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {missions.map((mission, index) => (
          <div key={index} className={`${mission.colorClass} group`}>
            {/* Icon */}
            <div className="w-16 h-16 mb-6 flex items-center justify-center bg-secondary/50 border border-border">
              <img
                src={mission.icon}
                alt={mission.title}
                className="w-8 h-8 object-contain"
              />
            </div>

            {/* Title */}
            <h3
              className={`font-display text-2xl tracking-wider mb-3 italic ${mission.titleClass}`}
            >
              {mission.title}
            </h3>

            {/* Subtitle */}
            <p className="font-sans text-sm font-bold text-swamp-cream mb-4 leading-relaxed">
              {mission.subtitle}
            </p>

            {/* Description */}
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              {mission.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MissionSection;
