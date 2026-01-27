import { PenLine, BookOpen, Users, ExternalLink } from 'lucide-react';

const contributions = [
  {
    icon: PenLine,
    title: 'Technical Articles',
    description: 'In-depth posts explaining programming concepts, algorithms, and development practices',
  },
  {
    icon: BookOpen,
    title: 'Learning Insights',
    description: 'Real experiences and reflections as a B.Tech CSE (AI & ML) student',
  },
  {
    icon: Users,
    title: 'Community Engagement',
    description: 'Resume tips, career guidance, and work experience posts for fellow developers',
  },
];

const TechnicalWritingSection = () => {
  return (
    <section id="writing" className="section-spacing">
      <div className="section-container">
        <div className="retro-card p-6 md:p-10">
          {/* Section Title */}
          <div className="text-center mb-8">
            <h2 className="section-title">Technical Writing & Community Contributions</h2>
          </div>

          {/* Description */}
          <div className="bg-secondary/50 border-2 border-border rounded-lg p-6 mb-8" style={{ boxShadow: 'var(--shadow-retro-sm)' }}>
            <p className="text-foreground/90 leading-relaxed text-center max-w-3xl mx-auto">
              I actively contribute to{' '}
              <span className="text-primary font-bold">GeeksforGeeks Connect</span>, sharing technical articles, 
              resume-building insights, and learning reflections. This showcases my ability to communicate 
              technical concepts clearly, share real learning experiences, and contribute consistently to 
              a reputed developer platform.
            </p>
          </div>

          {/* Contribution Types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {contributions.map((item) => (
              <div
                key={item.title}
                className="bg-primary/10 border-2 border-primary/30 rounded-lg p-5 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-lg mb-3">
                  <item.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-bold text-accent mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/80">{item.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href="https://www.geeksforgeeks.org/profile/shirishalagftl?from=home&tab=posts&type=posts"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View my GFG Connect Posts"
              className="retro-btn retro-btn-primary inline-flex items-center gap-2 text-base"
            >
              <ExternalLink size={18} />
              View my GFG Connect Posts
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalWritingSection;
