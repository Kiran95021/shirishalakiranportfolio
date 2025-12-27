import { Code2, Database, Wrench, Cpu, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Programming Languages',
    skills: ['C', 'C++', 'Python'],
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-400/10',
  },
  {
    icon: Database,
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
      'Time & Space Complexity',
    ],
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-400/10',
  },
  {
    icon: Cpu,
    title: 'Core Concepts',
    skills: ['Object-Oriented Programming', 'DBMS'],
    color: 'text-violet-400',
    bgColor: 'bg-violet-400/10',
  },
  {
    icon: Wrench,
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'MySQL', 'LeetCode', 'GeeksforGeeks'],
    color: 'text-orange-400',
    bgColor: 'bg-orange-400/10',
  },
  {
    icon: Sparkles,
    title: 'Development Approach',
    skills: ['Vibe Coding (AI-assisted rapid prototyping)'],
    color: 'text-pink-400',
    bgColor: 'bg-pink-400/10',
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-spacing relative">
      <div className="section-container">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-primary/50 mx-auto rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`glass-card p-6 hover-lift ${
                index === skillCategories.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-5">
                <div className={`w-12 h-12 rounded-lg ${category.bgColor} flex items-center justify-center`}>
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
