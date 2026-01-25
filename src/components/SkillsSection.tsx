import { Code2, Database, Wrench, Cpu, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    icon: '🐍',
    title: 'Programming Languages',
    skills: ['C', 'C++', 'Python', 'HTML', 'CSS'],
  },
  {
    icon: '📚',
    title: 'Libraries & Frameworks',
    skills: ['NumPy', 'Pandas', 'Matplotlib'],
  },
  {
    icon: '🤖',
    title: 'Data Structures & Algorithms',
    skills: [
      'Arrays',
      'Strings',
      'Linked Lists',
      'Stacks',
      'Queues',
      'Trees',
      'Hashing',
      'Recursion',
    ],
  },
  {
    icon: '💻',
    title: 'Core Concepts',
    skills: ['Object-Oriented Programming', 'DBMS', 'Time & Space Complexity', 'Operating Systems', 'Computer Networks'],
  },
  {
    icon: '🛠',
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'MySQL', 'LeetCode', 'GeeksforGeeks'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-spacing">
      <div className="section-container">
        {/* Section Container */}
        <div className="retro-card p-6 md:p-10">
          {/* Section Title */}
          <div className="text-center mb-10">
            <h2 className="section-title">Technical Arsenal</h2>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="bg-secondary/50 border-2 border-border rounded-lg p-5"
                style={{ boxShadow: 'var(--shadow-retro-sm)' }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-lg font-bold">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;