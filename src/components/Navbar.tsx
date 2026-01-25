import { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import RecruiterModeToggle from './RecruiterModeToggle';
import { useRecruiterMode } from '@/contexts/RecruiterModeContext';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Connect' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isRecruiterMode } = useRecruiterMode();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-card/95 backdrop-blur-sm border-b-2 border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <a
            href="#"
            className="text-xl md:text-2xl font-bold text-accent retro-text"
          >
            KiranShirishala.dev
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {!isRecruiterMode && navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-sm font-bold uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1vepJZiO5tTz0hQY_M4NE7wrS_qBSp-us/view"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Resume"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-bold text-sm rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
            >
              <FileText size={16} />
              Resume
            </a>
            <RecruiterModeToggle variant="desktop" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-card border-b-2 border-border transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="section-container py-4 flex flex-col gap-2">
          {/* Recruiter Mode Toggle - Mobile */}
          <div className="pb-2 mb-2 border-b border-border">
            <RecruiterModeToggle variant="mobile" />
          </div>
          
          {!isRecruiterMode && navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-muted-foreground hover:text-foreground transition-colors py-2 text-sm font-bold uppercase"
            >
              {link.label}
            </a>
          ))}
          
          {/* Resume Button - Mobile */}
          <a
            href="https://drive.google.com/file/d/1vepJZiO5tTz0hQY_M4NE7wrS_qBSp-us/view"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Resume"
            onClick={handleLinkClick}
            className="flex items-center justify-center gap-2 mt-2 px-4 py-3 bg-primary text-primary-foreground font-bold text-sm rounded-lg transition-all duration-200 hover:scale-105"
          >
            <FileText size={16} />
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;