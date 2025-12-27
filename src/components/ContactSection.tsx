import { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-spacing">
      <div className="section-container">
        {/* Section Container */}
        <div className="retro-card p-6 md:p-10">
          {/* Section Title */}
          <div className="text-center mb-10">
            <h2 className="section-title">Let's Build the Future Together!</h2>
          </div>

          <p className="text-center text-foreground/90 max-w-2xl mx-auto mb-10 text-lg">
            Whether you want to collaborate on a project, discuss technology, or just chat about
            the latest developments in AI/ML, I'm always excited to connect with fellow innovators!
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Links */}
            <div className="space-y-4">
              <a
                href="mailto:shirishala443@gmail.com"
                className="bg-secondary/50 border-2 border-border rounded-lg p-4 flex items-center gap-4 transition-all hover:-translate-y-1"
                style={{ boxShadow: 'var(--shadow-retro-sm)' }}
              >
                <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold">Email</p>
                  <p className="font-bold text-accent">shirishala443@gmail.com</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/kiran-shirishala-492830325"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary/50 border-2 border-border rounded-lg p-4 flex items-center gap-4 transition-all hover:-translate-y-1"
                style={{ boxShadow: 'var(--shadow-retro-sm)' }}
              >
                <div className="w-10 h-10 rounded bg-blue-500/20 flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold">LinkedIn</p>
                  <p className="font-bold text-accent">Kiran Shirishala</p>
                </div>
              </a>

              <a
                href="https://github.com/Kiran95021"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary/50 border-2 border-border rounded-lg p-4 flex items-center gap-4 transition-all hover:-translate-y-1"
                style={{ boxShadow: 'var(--shadow-retro-sm)' }}
              >
                <div className="w-10 h-10 rounded bg-secondary flex items-center justify-center">
                  <Github className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold">GitHub</p>
                  <p className="font-bold text-accent">@Kiran95021</p>
                </div>
              </a>

              <div
                className="bg-secondary/50 border-2 border-border rounded-lg p-4 flex items-center gap-4"
                style={{ boxShadow: 'var(--shadow-retro-sm)' }}
              >
                <div className="w-10 h-10 rounded bg-emerald-500/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold">Location</p>
                  <p className="font-bold text-accent">Anantapur, AP, India</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className="bg-secondary/50 border-2 border-border rounded-lg p-6"
              style={{ boxShadow: 'var(--shadow-retro-sm)' }}
            >
              <h3 className="font-bold text-lg mb-5">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold mb-2 uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded bg-card border-2 border-border focus:border-primary outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold mb-2 uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded bg-card border-2 border-border focus:border-primary outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold mb-2 uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded bg-card border-2 border-border focus:border-primary outline-none transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="retro-btn retro-btn-primary w-full flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;