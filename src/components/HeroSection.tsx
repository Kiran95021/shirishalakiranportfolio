import { Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="section-container relative z-10 text-center py-12">
        {/* Name */}
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 retro-text animate-fade-in-up opacity-0"
          style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
        >
          <span className="text-accent">Shirishala</span>{' '}
          <span className="text-primary">Kiran</span>
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