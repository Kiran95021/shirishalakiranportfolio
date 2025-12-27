import { GitBranch, Users, Star } from 'lucide-react';

const experiences = [
  {
    title: 'Selected Contributor',
    organization: 'Elite Coders Winter of Code (ECWoC) 2026',
    icon: Star,
    description:
      'Selected as a contributor for the prestigious ECWoC program, gaining hands-on experience with open-source development and collaborative coding practices.',
    highlights: [
      'Working with GitHub workflows',
      'Collaborative open-source development',
      'Code review and best practices',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-spacing relative">
      <div className="section-container">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Open Source & <span className="gradient-text">Community</span>
          </h2>
          <div className="w-24 h-1 bg-primary/50 mx-auto rounded-full" />
        </div>

        {/* Experience Cards */}
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp) => (
            <div key={exp.title} className="glass-card p-8 md:p-10 hover-lift">
              {/* Header */}
              <div className="flex items-start gap-5 mb-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <exp.icon className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                  <p className="text-lg text-primary font-medium">{exp.organization}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Highlights */}
              <div className="space-y-3">
                {exp.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <GitBranch className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Community Involvement */}
        <div className="max-w-3xl mx-auto mt-8">
          <div className="glass-card p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-400/10 flex items-center justify-center shrink-0">
              <Users className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Community Involvement</h4>
              <p className="text-muted-foreground">
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
