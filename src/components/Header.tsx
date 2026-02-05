const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-4 mt-4 px-8 py-4 backdrop-blur-md bg-background/30 border border-border/30 rounded-lg shadow-lg">
        <nav className="flex items-center justify-center max-w-7xl mx-auto">
          {/* Navigation Links - Centered */}
          <div className="flex items-center gap-12">
            <a
              href="#mission"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="font-display text-sm tracking-[0.2em] text-swamp-cream/90 hover:text-swamp-cream transition-colors duration-200"
            >
              YOUR MISSION
            </a>
            <a
              href="#world"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('world')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="font-display text-sm tracking-[0.2em] text-swamp-cream/90 hover:text-swamp-cream transition-colors duration-200"
            >
              THE WORLD
            </a>
            <a
              href="#media"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('media')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="font-display text-sm tracking-[0.2em] text-swamp-cream/90 hover:text-swamp-cream transition-colors duration-200"
            >
              GAMEPLAY
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
