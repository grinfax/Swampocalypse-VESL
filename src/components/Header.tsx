const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 mt-4 px-8 py-4 backdrop-blur-md bg-background/30 border border-border/30 rounded-lg">
        <nav className="flex items-center justify-center max-w-7xl mx-auto">
          {/* Navigation Links - Centered */}
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
      </div>
    </header>
  );
};

export default Header;
