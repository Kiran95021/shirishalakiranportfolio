import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import AchievementsSection from '@/components/AchievementsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
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

      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <AchievementsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
