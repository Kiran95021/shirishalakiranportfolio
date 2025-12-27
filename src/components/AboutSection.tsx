import { GraduationCap, Rocket, Lightbulb } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const badges = [
  { icon: GraduationCap, label: 'AI & ML Student' },
  { icon: Rocket, label: 'Aspiring Developer' },
  { icon: Lightbulb, label: 'Open Source Contributor' },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-spacing">
      <div className="section-container">
        {/* Section Container - Card style like reference */}
        <div className="retro-card p-6 md:p-10">
          {/* Section Title */}
          <div className="text-center mb-10">
            <h2 className="section-title">About Me</h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Content - Left side */}
            <div className="lg:col-span-3 space-y-5">
              <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                Hi, I'm <span className="text-accent font-bold">Shirishala Kiran</span>. I'm studying AI & ML at Marwadi University, 
                and I spend most of my time these days figuring out how to actually build things that work — whether it's a 
                campus marketplace, a student utility tool, or exploring new technologies.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                My journey in tech is shaped by curiosity — from creating practical solutions for students to exploring 
                how AI/ML can solve real-world problems. I enjoy taking ideas that sound challenging and turning them into 
                working prototypes.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                Outside of coding, I'm usually solving problems on LeetCode, reading documentation, or planning my next project. 
                These experiences keep me sharp and help me see problems from different perspectives.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                I'm driven by the challenge of learning, iterating, and pushing projects from "just an idea" to 
                "something people can actually use." For me, the real excitement lies in building and shipping!
              </p>
              <p className="text-base md:text-lg leading-relaxed text-primary font-bold">
                Feel free to explore my projects below, and if you want to chat about tech or just say hi, don't hesitate to reach out!
              </p>
            </div>

            {/* Photo & Badges - Right side */}
            <div className="lg:col-span-2 flex flex-col items-center gap-4">
              {/* Profile Photo */}
              <div className="w-48 h-56 md:w-56 md:h-64 rounded-lg overflow-hidden border-4 border-border bg-secondary"
                   style={{ boxShadow: 'var(--shadow-card)' }}>
                <img 
                  src={profilePhoto} 
                  alt="Shirishala Kiran" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Role Badges */}
              <div className="flex flex-col gap-3 w-full max-w-[14rem]">
                {badges.map((badge) => (
                  <div 
                    key={badge.label}
                    className="role-badge flex items-center gap-3 text-sm"
                  >
                    <badge.icon size={18} />
                    <span>{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;