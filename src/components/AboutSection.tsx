import { Code, Brain, Lightbulb, Users } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: 'AI & ML Focus',
    description: 'Specializing in Artificial Intelligence and Machine Learning',
  },
  {
    icon: Code,
    title: 'Strong Foundation',
    description: 'Proficient in C, C++, Python with solid DSA knowledge',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: 'Passionate about real-world problem solving',
  },
  {
    icon: Users,
    title: 'Team Leader',
    description: 'Effective communication and leadership skills',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-spacing relative">
      <div className="section-container">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get to know <span className="gradient-text">me</span>
          </h2>
          <div className="w-24 h-1 bg-primary/50 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a motivated <span className="text-foreground font-medium">B.Tech CSE (AI & ML)</span> student 
              with a strong foundation in programming and data structures. My journey in tech is driven by 
              curiosity and a passion for creating practical solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With expertise in <span className="text-primary">C, C++, and Python</span>, along with 
              intermediate knowledge of Data Structures & Algorithms, I'm constantly pushing myself 
              to learn and grow as a developer.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a fast learner who thrives in team environments, bringing strong 
              communication and leadership skills to every project. My goal is to leverage 
              AI/ML technologies to build innovative solutions that make a real impact.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card p-6 hover-lift group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
