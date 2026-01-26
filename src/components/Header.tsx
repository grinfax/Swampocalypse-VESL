const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-8 py-6">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="font-display text-xl tracking-widest text-swamp-cream italic">
          SWAMPOCALYPSE
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-12">
          <a
            href="#mission"
            className="font-display text-sm tracking-[0.2em] text-swamp-cream/80 hover:text-swamp-cream transition-colors"
          >
            YOUR MISSION
          </a>
          <a
            href="#world"
            className="font-display text-sm tracking-[0.2em] text-swamp-cream/80 hover:text-swamp-cream transition-colors"
          >
            THE WORLD
          </a>
          <a
            href="#media"
            className="font-display text-sm tracking-[0.2em] text-swamp-cream/80 hover:text-swamp-cream transition-colors"
          >
            MEDIA
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
