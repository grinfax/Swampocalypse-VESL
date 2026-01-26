import veslLogo from "@/assets/vesl-logo.png";
import footerBg from "@/assets/footer-bg.png";
import miniSwampocalypse from "@/assets/mini-swampocalypse.png";
import { Linkedin } from "lucide-react";

const FooterSection = () => {
  const navLinks = [
    { label: "YOUR MISSION", href: "#mission" },
    { label: "THE WORLD", href: "#world" },
    { label: "MEDIA", href: "#media" },
  ];

  return (
    <footer className="relative py-16 px-4">
      {/* Background */}
      <img
        src={footerBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Main Footer Content */}
        <div className="text-center mb-10">
          {/* Title Image */}
          <div className="flex justify-center mb-2">
            <img
              src={miniSwampocalypse}
              alt="Swampocalypse"
              className="h-8 md:h-10 object-contain"
            />
          </div>
          <p className="font-display text-sm tracking-[0.3em] text-swamp-cream/80 mb-8">
            COMING SOON TO STEAM
          </p>

          {/* Quote */}
          <blockquote className="text-swamp-cream/90 italic text-lg md:text-xl leading-relaxed mb-8">
            <p>"THE WORLD IS ALREADY BROKEN.</p>
            <p>HERE ARE YOUR TOOLS.</p>
            <p>NOW GO FIX IT."</p>
          </blockquote>

          {/* Divider */}
          <div className="w-full max-w-md mx-auto h-px bg-swamp-cream/30 mb-8" />

          {/* University of Miami VESL */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="text-right">
              <p className="font-display text-sm tracking-wider text-swamp-orange">
                UNIVERSITY OF MIAMI
              </p>
              <p className="font-display text-xs tracking-wider text-swamp-green">
                VIRTUAL EXPERIENCES SIMULATION LAB
              </p>
            </div>
            <img
              src={veslLogo}
              alt="VESL Logo"
              className="w-14 h-14 object-contain"
            />
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-display text-sm tracking-wider text-swamp-cream/70 hover:text-swamp-cream transition-colors"
            >
              {link.label}
            </a>
          ))}
          
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-swamp-cream/70 hover:text-swamp-cream transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-swamp-cream/70 hover:text-swamp-cream transition-colors"
            >
              <svg 
                className="w-5 h-5" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
