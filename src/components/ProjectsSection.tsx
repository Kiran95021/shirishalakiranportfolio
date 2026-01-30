import { Github, ExternalLink, Database, Cpu } from 'lucide-react';

const projects = [
  {
    title: 'DRISHTI',
    subtitle: 'Predictive Geospatial Intelligence for UIDAI Resource Allocation',
    emoji: '📊',
    description:
      'A high-performance geospatial dashboard processing millions of rows of Aadhaar enrolment, demographic update, and biometric data. Implements the "DRAM" Analytical Framework to predict Migration Hotspots and future biometric demand (Infants turning 5) before bottlenecks occur, forecasting administrative stress for 2030.',
    challenge: 'The UIDAI infrastructure relies on static resource allocation. We needed a system to handle huge volumes of data to predict demand before bottlenecks occur.',
    features: [
      'Big Data Processing: Automated ETL pipeline using Pandas to clean and merge complex real-world government datasets',
      'Migration Intelligence: Detects high-stress districts based on demographic update spikes',
      'Automated Action Plan: Algorithmic recommendations for "M-Seva Mobile Vans" and "Vidya-Setu School Camps"',
    ],
    tags: ['Python', 'Streamlit', 'Pandas', 'Plotly', 'NumPy', 'Big Data', 'Geospatial'],
    github: 'https://github.com/Kiran95021/DRISHTI',
    featured: true,
    isDataProject: true,
  },
  {
    title: 'SwapX',
    subtitle: 'Student Buy & Sell Platform',
    emoji: '⚡',
    description:
      'A campus-focused web platform enabling students to buy and sell items securely within their campus community. Built to promote affordability, reuse, and peer-to-peer interaction.',
    tags: ['Web Platform', 'E-commerce', 'Campus Community', 'React'],
    github: 'https://github.com/Kiran95021/swapX.git',
    live: 'https://swapxuniversity.vercel.app/home',
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
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl md:text-2xl font-bold text-accent retro-text">
                        {project.title}
                      </h3>
                      {project.isDataProject && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-primary/20 text-primary text-xs font-bold rounded">
                          <Database size={12} />
                          Big Data
                        </span>
                      )}
                    </div>
                    <p className="text-primary font-bold">{project.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-foreground/90 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Challenge & Features for data projects */}
                {project.challenge && (
                  <div className="bg-muted/50 border border-border rounded-lg p-4 mb-4">
                    <h4 className="text-sm font-bold text-accent mb-2 flex items-center gap-2">
                      <Cpu size={14} />
                      The Challenge
                    </h4>
                    <p className="text-sm text-foreground/80">{project.challenge}</p>
                  </div>
                )}

                {project.features && (
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-accent mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                          <span className="text-primary mt-1">▸</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

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
                    {project.isDataProject ? 'View Source Code' : 'GitHub'}
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="retro-btn retro-btn-secondary text-sm flex items-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
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