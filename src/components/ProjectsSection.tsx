import { ShoppingBag, Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'SwapX',
    subtitle: 'Student Buy & Sell Platform',
    emoji: '⚡',
    description:
      'A campus-focused web platform enabling students to buy and sell items securely within their campus community. Built to promote affordability, reuse, and peer-to-peer interaction.',
    tags: ['Web Platform', 'E-commerce', 'Campus Community', 'React'],
    github: 'https://github.com/Kiran95021/swapX.git',
    featured: true,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-spacing">
      <div className="section-container">
        {/* Section Container */}
        <div className="retro-card p-6 md:p-10">
          {/* Section Title */}
          <div className="text-center mb-10">
            <h2 className="section-title">Featured Projects</h2>
          </div>

          {/* Projects */}
          <div className="space-y-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-secondary/50 border-2 border-border rounded-lg p-6 md:p-8"
                style={{ boxShadow: 'var(--shadow-retro)' }}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl">{project.emoji}</div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-accent retro-text">
                      {project.title}
                    </h3>
                    <p className="text-primary font-bold">{project.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-foreground/90 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="skill-tag text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="retro-btn retro-btn-primary text-sm flex items-center gap-2"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                  <a
                    href="https://swapxuniversity.vercel.app/home"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="retro-btn retro-btn-secondary text-sm flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* More Projects Coming */}
          <p className="text-center text-muted-foreground mt-8 text-lg">
            🚀 More projects coming soon...
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;