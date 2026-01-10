import { useState } from 'react';
import { Github, Linkedin, Mail, Star, Rocket, Brain } from 'lucide-react';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { useCountUp } from '@/hooks/useCountUp';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const roles = [
  'AI/ML Student',
  'Full-Stack Developer',
  'Open-Source Contributor',
];

// Actual verified counts
const PROJECT_COUNT: number = 2; // From ProjectsSection
const PR_COUNT = 20; // GitHub PRs merged
const LEETCODE_COUNT = 5; // Verified from LeetCode profile
const GFG_COUNT = 22; // Verified from GeeksforGeeks profile
const DSA_COUNT = LEETCODE_COUNT + GFG_COUNT; // Total: 27

type StatItem = {
  icon: typeof Star;
  value: number;
  suffix: string;
  label: string;
  href?: string;
  external?: boolean;
  isDSA?: boolean;
};

const stats: StatItem[] = [
  {
    icon: Star,
    value: PR_COUNT,
    suffix: '+',
    label: 'Open-Source PRs Merged',
    href: 'https://github.com/pulls?q=is%3Apr+author%3AKiran95021+is%3Amerged',
    external: true,
  },
  {
    icon: Rocket,
    value: PROJECT_COUNT,
    suffix: '',
    label: PROJECT_COUNT === 1 ? 'Project Built' : `Projects Built`,
    href: '#projects',
    external: false,
  },
  {
    icon: Brain,
    value: DSA_COUNT,
    suffix: '',
    label: 'DSA Problems Solved',
    isDSA: true,
  },
];

const StatCard = ({ icon: Icon, value, suffix, label, href, external }: StatItem) => {
  const { count, elementRef } = useCountUp({ end: value, duration: 2000 });
  
  const handleClick = () => {
    if (external && href) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else if (href) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={elementRef}
      onClick={handleClick}
      className="flex items-center gap-3 px-4 py-3 bg-card/50 border border-border rounded-lg cursor-pointer transition-all duration-200 hover:bg-card hover:scale-105 hover:border-primary/50"
    >
      <Icon className="w-5 h-5 text-accent shrink-0" />
      <div className="text-left">
        <span className="text-lg font-bold text-primary">
          {count}{suffix}
        </span>
        <span className="text-sm text-foreground/80 ml-1">{label}</span>
      </div>
    </div>
  );
};

const DSAStatCard = () => {
  const { count, elementRef } = useCountUp({ end: DSA_COUNT, duration: 2000 });
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          ref={elementRef}
          className="flex items-center gap-3 px-4 py-3 bg-card/50 border border-border rounded-lg cursor-pointer transition-all duration-200 hover:bg-card hover:scale-105 hover:border-primary/50"
        >
          <Brain className="w-5 h-5 text-accent shrink-0" />
          <div className="text-left">
            <span className="text-lg font-bold text-primary">
              {count}
            </span>
            <span className="text-sm text-foreground/80 ml-1">DSA Problems Solved</span>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-64 bg-card border-border p-4">
        <div className="space-y-3">
          <h4 className="font-bold text-foreground text-sm">Problem Breakdown</h4>
          <div className="space-y-2">
            <a 
              href="https://leetcode.com/u/Kiran_1013" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2 rounded bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <span className="text-sm text-foreground/90">🟡 LeetCode</span>
              <span className="font-bold text-primary">{LEETCODE_COUNT}</span>
            </a>
            <a 
              href="https://www.geeksforgeeks.org/user/shirishalagftl/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2 rounded bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <span className="text-sm text-foreground/90">🟢 GeeksforGeeks</span>
              <span className="font-bold text-primary">{GFG_COUNT}</span>
            </a>
          </div>
          <div className="pt-2 border-t border-border flex items-center justify-between">
            <span className="text-sm font-medium text-foreground/80">Total</span>
            <span className="font-bold text-accent">{DSA_COUNT}</span>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

const HeroSection = () => {
  const typedText = useTypingEffect({
    texts: roles,
    typingSpeed: 80,
    deletingSpeed: 40,
    pauseDuration: 1500,
  });

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="section-container relative z-10 text-center py-12">
        {/* Name */}
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 retro-text animate-fade-in-up opacity-0"
          style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
        >
          <span className="text-accent">Shirishala</span>{' '}
          <span className="text-primary">Kiran</span>
        </h1>

        {/* Typing Effect - Rotating Roles */}
        <div 
          className="h-8 mb-6 animate-fade-in-up opacity-0"
          style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}
        >
          <span className="text-lg md:text-xl font-mono text-primary/90">
            {typedText}
            <span className="animate-blink text-accent">|</span>
          </span>
        </div>

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

        {/* Quick Stats Row */}
        <div 
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0"
          style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
        >
          {stats.filter(s => !s.isDSA).map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
          <DSAStatCard />
        </div>

        {/* Scroll Indicator */}
        <div 
          className="mt-12 animate-fade-in-up opacity-0"
          style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}
        >
          <button
            onClick={scrollToProjects}
            className="flex flex-col items-center gap-2 mx-auto text-muted-foreground hover:text-foreground transition-colors duration-200 group"
            aria-label="Scroll to projects section"
          >
            <span className="text-sm font-medium">See my work</span>
            <span className="text-xl animate-bounce-subtle group-hover:text-accent transition-colors">↓</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
