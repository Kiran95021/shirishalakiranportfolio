import { Award, FileCheck, Trophy, Code } from 'lucide-react';

const achievements = [
  {
    icon: FileCheck,
    title: 'Cisco C++ Certification',
    description: 'Professional certification in C++ programming',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-400/10',
  },
  {
    icon: FileCheck,
    title: 'Oracle DBMS Certification',
    description: 'Database management systems certification',
    color: 'text-orange-400',
    bgColor: 'bg-orange-400/10',
  },
  {
    icon: Trophy,
    title: 'Hackathon Participation',
    description: 'Multiple hackathon participation certificates',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400/10',
  },
  {
    icon: Code,
    title: 'Active Problem Solver',
    description: 'Regular problem-solving on LeetCode and GeeksforGeeks',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-400/10',
  },
  {
    icon: Award,
    title: 'Leadership Skills',
    description: 'Leading team discussions and project planning initiatives',
    color: 'text-violet-400',
    bgColor: 'bg-violet-400/10',
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-spacing relative bg-secondary/20">
      <div className="section-container">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            Achievements
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Certifications & <span className="gradient-text">Recognition</span>
          </h2>
          <div className="w-24 h-1 bg-primary/50 mx-auto rounded-full" />
        </div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className={`glass-card p-6 hover-lift ${
                index === achievements.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className={`w-12 h-12 rounded-lg ${achievement.bgColor} flex items-center justify-center mb-4`}>
                <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
