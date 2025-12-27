import { Award, FileCheck, Trophy, Code } from 'lucide-react';

const achievements = [
  {
    emoji: '🏆',
    title: 'Cisco C++ Certification',
    description: 'Professional certification in C++ programming',
  },
  {
    emoji: '🎯',
    title: 'Oracle DBMS Certification',
    description: 'Database management systems certification',
  },
  {
    emoji: '🏅',
    title: 'Hackathon Participation',
    description: 'Multiple hackathon participation certificates',
  },
  {
    emoji: '💻',
    title: 'Active Problem Solver',
    description: 'Regular problem-solving on LeetCode and GeeksforGeeks',
  },
  {
    emoji: '👥',
    title: 'Leadership Skills',
    description: 'Leading team discussions and project planning initiatives',
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-spacing">
      <div className="section-container">
        {/* Section Container */}
        <div className="retro-card p-6 md:p-10">
          {/* Section Title */}
          <div className="text-center mb-10">
            <h2 className="section-title">Achievements & Recognition</h2>
          </div>

          {/* Achievements Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.title}
                className="bg-secondary/50 border-2 border-border rounded-lg p-5 transition-all hover:-translate-y-1"
                style={{ boxShadow: 'var(--shadow-retro-sm)' }}
              >
                <div className="text-2xl mb-3">{achievement.emoji}</div>
                <h3 className="font-bold mb-2 text-accent">{achievement.title}</h3>
                <p className="text-sm text-foreground/80">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;