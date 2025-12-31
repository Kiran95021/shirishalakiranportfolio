import { Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

const FireLetter = ({ letter, index, color }: { letter: string; index: number; color: string }) => {
  return (
    <span
      className={`inline-block fire-letter ${color}`}
      style={{
        animationDelay: `${index * 120}ms`,
      }}
    >
      {letter === ' ' ? '\u00A0' : letter}
    </span>
  );
};

const Ember = ({ delay, size, left }: { delay: number; size: number; left: number }) => (
  <div
    className="ember"
    style={{
      animationDelay: `${delay}s`,
      width: `${size}px`,
      height: `${size}px`,
      left: `${left}%`,
    }}
  />
);

const Flame = ({ delay, left }: { delay: number; left: number }) => (
  <div
    className="flame-particle"
    style={{
      animationDelay: `${delay}s`,
      left: `${left}%`,
    }}
  />
);

const HeroSection = () => {
  const firstName = "Shirishala";
  const lastName = "Kiran";
  const [showFlames, setShowFlames] = useState(false);

  useEffect(() => {
    // Start flames after dragon arrives
    const timer = setTimeout(() => setShowFlames(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Generate random embers
  const embers = Array.from({ length: 20 }, (_, i) => ({
    delay: Math.random() * 3,
    size: Math.random() * 6 + 3,
    left: Math.random() * 100,
  }));

  // Generate flame particles
  const flames = Array.from({ length: 15 }, (_, i) => ({
    delay: Math.random() * 2,
    left: 10 + Math.random() * 80,
  }));

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden">
      {/* Embers floating up */}
      <div className="absolute inset-0 pointer-events-none">
        {embers.map((ember, i) => (
          <Ember key={i} {...ember} />
        ))}
      </div>

      {/* Flame particles around name */}
      {showFlames && (
        <div className="absolute inset-0 pointer-events-none">
          {flames.map((flame, i) => (
            <Flame key={i} {...flame} />
          ))}
        </div>
      )}

      <div className="section-container relative z-10 text-center py-12">
        {/* Flying Dragon that circles around */}
        <div className="dragon-container">
          <div className="flying-dragon">
            <span className="dragon-emoji">🐉</span>
            {/* Fire breath trail */}
            <div className="fire-breath">
              <span>🔥</span>
              <span>🔥</span>
              <span>🔥</span>
            </div>
          </div>
        </div>

        {/* Name with Fire Animation */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 retro-text relative name-container">
          <span className="inline-block">
            {firstName.split('').map((letter, index) => (
              <FireLetter key={index} letter={letter} index={index} color="fire-accent" />
            ))}
          </span>
          <span className="inline-block ml-2 sm:ml-4">
            {lastName.split('').map((letter, index) => (
              <FireLetter key={index} letter={letter} index={index + firstName.length + 1} color="fire-primary" />
            ))}
          </span>
        </h1>

        {/* Tagline */}
        <p 
          className="text-base sm:text-lg md:text-xl text-foreground/90 mb-3 animate-fade-in-up opacity-0"
          style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
        >
          Hi, I'm Kiran — not an expert yet,
        </p>
        <p 
          className="text-base sm:text-lg md:text-xl text-foreground/90 mb-8 animate-fade-in-up opacity-0"
          style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
        >
          but I love building practical solutions through code, logic, and continuous learning 😊
        </p>

        {/* Location */}
        <p 
          className="text-lg text-accent font-bold mb-10 animate-fade-in-up opacity-0"
          style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
        >
          📍 Anantapur, Andhra Pradesh → Rajkot, Gujarat
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up opacity-0"
          style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
        >
          <a 
            href="#projects" 
            className="retro-btn retro-btn-primary"
          >
            View Projects
          </a>
          <a 
            href="https://github.com/Kiran95021" 
            target="_blank" 
            rel="noopener noreferrer"
            className="retro-btn retro-btn-secondary flex items-center gap-2"
          >
            <Github size={18} />
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/kiran-shirishala-492830325" 
            target="_blank" 
            rel="noopener noreferrer"
            className="retro-btn retro-btn-secondary flex items-center gap-2"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a 
            href="#contact"
            className="retro-btn retro-btn-accent flex items-center gap-2"
          >
            <Mail size={18} />
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;