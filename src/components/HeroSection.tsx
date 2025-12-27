import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dot-pattern bg-dot-pattern opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-300" />
      
      <div className="section-container relative z-10 text-center pt-20">
        {/* Location Badge */}
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-sm text-muted-foreground mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            Anantapur, Andhra Pradesh, India
          </span>
        </div>

        {/* Name */}
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up opacity-0"
          style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
        >
          <span className="gradient-text">Shirishala Kiran</span>
        </h1>

        {/* Role */}
        <p 
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 font-mono animate-fade-in-up opacity-0"
          style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
        >
          B.Tech CSE (AI & ML) Student | Aspiring Software Developer
        </p>

        {/* Tagline */}
        <p 
          className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up opacity-0"
          style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
        >
          "Building practical solutions through code, logic, and continuous learning."
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-fade-in-up opacity-0"
          style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
        >
          <Button variant="hero" size="lg" asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="https://github.com/Kiran95021" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
              GitHub
            </a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="https://linkedin.com/in/kiran-shirishala-492830325" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
              LinkedIn
            </a>
          </Button>
          <Button variant="glass" size="lg" asChild>
            <a href="#contact">
              <Mail size={20} />
              Contact
            </a>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-fade-in-up opacity-0"
          style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
