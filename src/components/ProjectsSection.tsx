import { ExternalLink, Github, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'SwapX',
    subtitle: 'Student Buy & Sell Platform',
    description:
      'A campus-focused web platform enabling students to buy and sell items securely within their campus community. Built to promote affordability, reuse, and peer-to-peer interaction.',
    icon: ShoppingBag,
    tags: ['Web Platform', 'E-commerce', 'Campus Community'],
    github: 'https://github.com/Kiran95021/swapX.git',
    featured: true,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-spacing relative bg-secondary/20">
      <div className="section-container">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <div className="w-24 h-1 bg-primary/50 mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="max-w-4xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass-card p-8 md:p-10 hover-lift relative overflow-hidden group"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-6 right-6">
                  <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30">
                    Featured
                  </span>
                </div>
              )}

              {/* Decorative Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-1">{project.title}</h3>
                    <p className="text-lg text-primary font-medium">{project.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-sm font-medium rounded-lg bg-secondary text-muted-foreground border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4">
                  <Button variant="hero" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={18} />
                      View on GitHub
                    </a>
                  </Button>
                  <Button variant="heroOutline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={18} />
                      View Project
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Coming */}
        <p className="text-center text-muted-foreground mt-12 text-lg">
          More projects coming soon...
        </p>
      </div>
    </section>
  );
};

export default ProjectsSection;
