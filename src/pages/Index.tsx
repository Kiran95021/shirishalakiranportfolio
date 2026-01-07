import { Helmet } from 'react-helmet-async';
import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import AchievementsSection from '@/components/AchievementsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import RecruiterOverview from '@/components/RecruiterOverview';
import { useRecruiterMode } from '@/contexts/RecruiterModeContext';
import { cn } from '@/lib/utils';

const Index = () => {
  const { isRecruiterMode } = useRecruiterMode();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayMode, setDisplayMode] = useState<'normal' | 'recruiter'>(
    isRecruiterMode ? 'recruiter' : 'normal'
  );
  const previousMode = useRef(isRecruiterMode);
  const contentRef = useRef<HTMLDivElement>(null);

  // Handle mode transition with animation
  useEffect(() => {
    if (previousMode.current !== isRecruiterMode) {
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (prefersReducedMotion) {
        // Instant switch for reduced motion
        setDisplayMode(isRecruiterMode ? 'recruiter' : 'normal');
      } else {
        // Animated transition
        setIsTransitioning(true);
        
        // Wait for exit animation, then switch content
        const exitTimer = setTimeout(() => {
          setDisplayMode(isRecruiterMode ? 'recruiter' : 'normal');
          
          // Small delay to ensure DOM update, then trigger enter animation
          requestAnimationFrame(() => {
            setIsTransitioning(false);
            // Scroll to top smoothly after mode switch
            window.scrollTo({ top: 0, behavior: 'smooth' });
          });
        }, 200); // Match exit animation duration

        return () => clearTimeout(exitTimer);
      }
      
      previousMode.current = isRecruiterMode;
    }
  }, [isRecruiterMode]);

  return (
    <>
      <Helmet>
        <title>Shirishala Kiran | B.Tech CSE (AI & ML) Student & Developer Portfolio</title>
        <meta
          name="description"
          content="Shirishala Kiran - Aspiring Software Developer & B.Tech CSE (AI & ML) student at Marwadi University. Skilled in C, C++, Python, and Data Structures. Explore my projects and achievements."
        />
        <meta
          name="keywords"
          content="Shirishala Kiran, Developer Portfolio, AI ML Student, B.Tech CSE, Software Developer, Python, C++, Data Structures, Marwadi University"
        />
        <meta property="og:title" content="Shirishala Kiran | Developer Portfolio" />
        <meta
          property="og:description"
          content="Aspiring Software Developer & B.Tech CSE (AI & ML) student. Building practical solutions through code, logic, and continuous learning."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://shirishala-kiran.dev" />
      </Helmet>

      <main className={cn("min-h-screen bg-background", displayMode === 'recruiter' && "recruiter-mode")}>
        <Navbar />
        
        <div 
          ref={contentRef}
          className={cn(
            "mode-content-wrapper",
            isTransitioning ? "mode-transition-exit" : "mode-transition-enter"
          )}
          key={displayMode} // Force re-render for animation
        >
          {displayMode === 'recruiter' ? (
            <>
              {/* Recruiter Mode: Simplified hero + overview */}
              <section className="pt-20 pb-8 text-center">
                <div className="section-container">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold retro-text mb-2">
                    <span className="text-accent">Shirishala</span>{' '}
                    <span className="text-primary">Kiran</span>
                  </h1>
                  <p className="text-lg text-primary/90 font-mono">
                    B.Tech CSE (AI & ML) • Aspiring Software Developer
                  </p>
                </div>
              </section>
              <RecruiterOverview />
              <ContactSection />
              <Footer />
            </>
          ) : (
            <>
              {/* Normal Mode: Full portfolio */}
              <HeroSection />
              <AboutSection />
              <ProjectsSection />
              <AchievementsSection />
              <ExperienceSection />
              <SkillsSection />
              <ContactSection />
              <Footer />
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Index;
