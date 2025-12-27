import { Star, GitBranch, Users } from 'lucide-react';

const experiences = [
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
                className="bg-secondary/50 border-2 border-border rounded-lg p-6"
                style={{ boxShadow: 'var(--shadow-retro-sm)' }}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-2xl">{exp.emoji}</div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-accent">{exp.title}</h3>
                    <p className="text-primary font-bold">{exp.organization}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-foreground/90 leading-relaxed mb-4">
                  {exp.description}
                </p>

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