import { GitBranch, Users, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Experience {
  emoji: string;
  title: string;
  organization: string;
  description: string;
  affiliation?: string;
  timeline?: string;
  location?: string;
  stack?: string[];
  highlights?: string[];
  isCurrentRole?: boolean;
  profileLink?: string;
}

const experiences: Experience[] = [
  {
    emoji: '⭐',
    title: 'Open Source Contributor',
    organization: 'ECWoC 2026 (Engineering College Winter of Code)',
    timeline: '2026',
    location: 'Remote',
    description:
      'Selected as an Open Source Contributor for ECWoC 2026, a national-level open source contribution program. Contributed to real-world projects by collaborating with mentors and developers, navigating large codebases, fixing bugs, and shipping features while following Git/GitHub workflows (PRs, reviews, and issue tracking).',
    stack: ['Git', 'GitHub', 'Pull Requests', 'Code Reviews', 'Issue Tracking'],
    highlights: [
      'Worked consistently across multiple issues and iterations, improving reliability and code quality',
      'Practiced collaborative development: branching strategy, PR hygiene, and review-driven improvements',
      'Strengthened problem-solving by debugging production-grade code and learning project conventions',
    ],
    profileLink: 'https://code.elitecoders.xyz/profile/shirishalakiran443',
  },
  {
    emoji: '🌐',
    title: 'Open Source Contributor',
    organization: 'Open Source Connect Global (OSCG 2026)',
    timeline: '2026',
    location: 'Remote',
    description:
      'Selected as an Open Source Contributor for Open Source Connect Global (OSCG 2026), a global open-source initiative focused on real-world collaborative development. Contributing to open-source projects by exploring large codebases, identifying impactful issues, collaborating with maintainers, and submitting well-documented pull requests following industry best practices.',
    stack: ['Open Source', 'Git', 'GitHub', 'Collaboration', 'Software Development'],
    highlights: [
      'Selected as an OSCG 2026 Open Source Contributor',
      'Worked on real-world open-source repositories using Git and GitHub workflows',
      'Raised meaningful issues and submitted quality pull requests',
      'Collaborated with mentors and contributors across the global open-source community',
    ],
  },
  {
    emoji: '🏆',
    title: 'Campus Ambassador',
    organization: 'smartED innovations',
    description:
      'Campus ambassador helping the startup through brand development and outreach.',
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
                  <div className="space-y-2 mb-4">
                    {exp.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-3">
                        <GitBranch size={14} className="text-primary" />
                        <span className="text-sm text-foreground/80">{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Profile Link */}
                {exp.profileLink && (
                  <a
                    href={exp.profileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    <ExternalLink size={14} />
                    <span>View ECWoC Profile</span>
                  </a>
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