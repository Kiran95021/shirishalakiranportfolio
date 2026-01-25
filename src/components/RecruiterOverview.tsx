import { Github, ExternalLink, Mail, FileText, Star, Code } from 'lucide-react';
import { useRecruiterMode } from '@/contexts/RecruiterModeContext';

// Top 2 projects for recruiters
const topProjects = [
  {
    title: 'SwapX',
    problem: 'Campus marketplace for students to buy/sell items securely',
    tech: ['React', 'Web Platform', 'E-commerce'],
    github: 'https://github.com/Kiran95021/swapX.git',
    live: 'https://swapxuniversity.vercel.app/home',
  },
];

const RecruiterOverview = () => {
  const { isRecruiterMode } = useRecruiterMode();

  if (!isRecruiterMode) return null;

  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="min-h-[calc(100vh-4rem)] flex items-center py-8 animate-recruiter-fade-in"
      aria-label="Recruiter quick overview"
    >
      <div className="section-container w-full">
        <div className="retro-card p-6 md:p-8 lg:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-bold uppercase rounded-full mb-3">
              Recruiter Overview
            </span>
            <h2 className="text-2xl md:text-3xl font-bold retro-text">
              <span className="text-accent">Quick</span>{' '}
              <span className="text-primary">Summary</span>
            </h2>
            <p className="text-muted-foreground mt-2 text-sm">
              Everything you need to know — at a glance
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Resume Download */}
            <div className="bg-secondary/30 border border-border rounded-lg p-5">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-5 h-5 text-accent" />
                <h3 className="font-bold text-foreground">Resume</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Download my latest resume in PDF format
              </p>
              <a
                href="https://drive.google.com/file/d/1vepJZiO5tTz0hQY_M4NE7wrS_qBSp-us/view"
                target="_blank"
                rel="noopener noreferrer"
                className="retro-btn retro-btn-primary w-full text-center text-sm flex items-center justify-center gap-2"
              >
                <FileText size={16} />
                Download Resume
              </a>
            </div>

            {/* GitHub Profile */}
            <div className="bg-secondary/30 border border-border rounded-lg p-5">
              <div className="flex items-center gap-2 mb-3">
                <Github className="w-5 h-5 text-accent" />
                <h3 className="font-bold text-foreground">GitHub</h3>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Star size={14} className="text-primary" />
                  20+ PRs Merged
                </span>
                <span className="flex items-center gap-1">
                  <Code size={14} className="text-primary" />
                  Active Contributor
                </span>
              </div>
              <a
                href="https://github.com/Kiran95021"
                target="_blank"
                rel="noopener noreferrer"
                className="retro-btn retro-btn-secondary w-full text-center text-sm flex items-center justify-center gap-2"
              >
                <Github size={16} />
                View GitHub
              </a>
            </div>

            {/* Contact CTA */}
            <div className="bg-secondary/30 border border-border rounded-lg p-5 md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <Mail className="w-5 h-5 text-accent" />
                <h3 className="font-bold text-foreground">Get in Touch</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Interested? Let's discuss opportunities
              </p>
              <button
                onClick={handleContactClick}
                className="retro-btn retro-btn-accent w-full text-center text-sm flex items-center justify-center gap-2"
              >
                <Mail size={16} />
                Contact Me
              </button>
            </div>
          </div>

          {/* Top Projects */}
          <div className="mt-8">
            <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="text-accent">🚀</span> Top Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {topProjects.map((project) => (
                <div
                  key={project.title}
                  className="bg-secondary/30 border border-border rounded-lg p-5"
                >
                  <h4 className="font-bold text-accent retro-text text-lg mb-1">
                    {project.title}
                  </h4>
                  <p className="text-sm text-foreground/80 mb-3">
                    {project.problem}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 retro-btn retro-btn-primary text-xs text-center flex items-center justify-center gap-1"
                    >
                      <Github size={14} />
                      GitHub
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 retro-btn retro-btn-secondary text-xs text-center flex items-center justify-center gap-1"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  </div>
                </div>
              ))}
              
              {/* Placeholder for second project */}
              <div className="bg-secondary/20 border border-dashed border-border rounded-lg p-5 flex items-center justify-center text-muted-foreground text-sm">
                More projects coming soon...
              </div>
            </div>
          </div>

          {/* Quick Stats Bar */}
          <div className="mt-8 pt-6 border-t border-border">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="text-center">
                <span className="block text-2xl font-bold text-primary">20+</span>
                <span className="text-muted-foreground">PRs Merged</span>
              </div>
              <div className="w-px h-8 bg-border hidden sm:block" />
              <div className="text-center">
                <span className="block text-2xl font-bold text-primary">2</span>
                <span className="text-muted-foreground">Projects</span>
              </div>
              <div className="w-px h-8 bg-border hidden sm:block" />
              <div className="text-center">
                <span className="block text-2xl font-bold text-primary">27</span>
                <span className="text-muted-foreground">DSA Problems</span>
              </div>
              <div className="w-px h-8 bg-border hidden sm:block" />
              <div className="text-center">
                <span className="block text-2xl font-bold text-primary">B.Tech</span>
                <span className="text-muted-foreground">CSE (AI & ML)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruiterOverview;
