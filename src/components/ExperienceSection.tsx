import { GitBranch, Users, MapPin, Calendar, Briefcase } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    emoji: '🤖',
    title: 'Machine Learning Intern',
    organization: 'EdXcellence',
    affiliation: 'AICTE & APSCHE Approved Program',
    timeline: 'Jan 2026 – Present',
    location: 'Remote / Bangalore',
    description:
      'Selected for a project-based internship focused on end-to-end Machine Learning development. Responsible for building and optimizing predictive models, performing data preprocessing, and implementing ML algorithms using Python. This is an AICTE-recognized technical program focused on industry-standard data science workflows.',
    stack: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy'],
    isCurrentRole: true,
  },
  {
    emoji: '🏆',
    title: 'Campus Ambassador',
    organization: 'smartED innovations',
    description:
      'Campus ambassador helping the startup through brand development and outreach.',
  },
  {
    emoji: '⭐',
    title: 'Selected Contributor',
    organization: 'Elite Coders Winter of Code (ECWoC) 2026',
    description:
      'Selected as a contributor for the prestigious ECWoC program, gaining hands-on experience with open-source development.',
    highlights: [
      'Working with GitHub workflows',
      'Collaborative open-source development',
      'Code review and best practices',
    ],
  },
  {
    emoji: '❄️',
    title: 'Selected Contributor',
    organization: 'Social Winter of Code Season 6 (SWoC)',
    description:
      'Selected as a contributor for Social Winter of Code Season 6, contributing to open-source projects and collaborating with developers worldwide.',
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-spacing">
      <div className="section-container">
        {/* Section Container */}
        <div className="retro-card p-6 md:p-10">
          {/* Section Title */}
          <div className="text-center mb-10">
            <h2 className="section-title">Experience</h2>
          </div>

          {/* Experience Cards */}
          <div className="space-y-6">
            {experiences.map((exp) => (
              <div
                key={exp.title}
                className={`bg-secondary/50 border-2 rounded-lg p-6 ${exp.isCurrentRole ? 'border-primary' : 'border-border'}`}
                style={{ boxShadow: exp.isCurrentRole ? 'var(--shadow-retro)' : 'var(--shadow-retro-sm)' }}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-2xl">{exp.emoji}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg md:text-xl font-bold text-accent">{exp.title}</h3>
                      {exp.isCurrentRole && (
                        <Badge variant="default" className="bg-primary text-primary-foreground text-xs">
                          Current
                        </Badge>
                      )}
                    </div>
                    <p className="text-primary font-bold">{exp.organization}</p>
                    {exp.affiliation && (
                      <p className="text-xs text-muted-foreground mt-1">{exp.affiliation}</p>
                    )}
                  </div>
                </div>

                {/* Timeline & Location */}
                {(exp.timeline || exp.location) && (
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-foreground/70">
                    {exp.timeline && (
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-primary" />
                        <span>{exp.timeline}</span>
                      </div>
                    )}
                    {exp.location && (
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-primary" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Description */}
                <p className="text-foreground/90 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Tech Stack */}
                {exp.stack && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.stack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Highlights */}
                {exp.highlights && (
                  <div className="space-y-2">
                    {exp.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-3">
                        <GitBranch size={14} className="text-primary" />
                        <span className="text-sm text-foreground/80">{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Community */}
          <div className="mt-8 bg-primary/10 border-2 border-primary/30 rounded-lg p-5 flex items-center gap-4">
            <Users size={24} className="text-primary" />
            <div>
              <h4 className="font-bold text-primary">Community Involvement</h4>
              <p className="text-sm text-foreground/80">
                Active participant in open-source communities and coding forums
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;