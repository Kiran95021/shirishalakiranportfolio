import { Briefcase } from 'lucide-react';
import { useRecruiterMode } from '@/contexts/RecruiterModeContext';
import { cn } from '@/lib/utils';

interface RecruiterModeToggleProps {
  variant?: 'desktop' | 'mobile';
}

const RecruiterModeToggle = ({ variant = 'desktop' }: RecruiterModeToggleProps) => {
  const { isRecruiterMode, toggleRecruiterMode } = useRecruiterMode();

  if (variant === 'mobile') {
    return (
      <button
        onClick={toggleRecruiterMode}
        className={cn(
          "flex items-center gap-2 w-full py-2 text-sm font-bold uppercase transition-colors",
          isRecruiterMode 
            ? "text-accent" 
            : "text-muted-foreground hover:text-foreground"
        )}
        aria-label={isRecruiterMode ? "Disable recruiter mode" : "Enable recruiter mode"}
        aria-pressed={isRecruiterMode}
      >
        <Briefcase size={16} />
        <span>Recruiter Mode</span>
        <span 
          className={cn(
            "ml-auto px-2 py-0.5 text-xs rounded font-bold transition-colors",
            isRecruiterMode 
              ? "bg-accent text-accent-foreground" 
              : "bg-muted text-muted-foreground"
          )}
        >
          {isRecruiterMode ? 'ON' : 'OFF'}
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={toggleRecruiterMode}
      className={cn(
        "flex items-center gap-2 px-3 py-1.5 rounded-full border-2 transition-all duration-200 text-xs font-bold uppercase tracking-wide",
        isRecruiterMode 
          ? "bg-accent text-accent-foreground border-accent" 
          : "bg-card/50 text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
      )}
      aria-label={isRecruiterMode ? "Disable recruiter mode" : "Enable recruiter mode"}
      aria-pressed={isRecruiterMode}
    >
      <Briefcase size={14} />
      <span className="hidden lg:inline">Recruiter Mode</span>
      <span 
        className={cn(
          "w-8 h-4 rounded-full relative transition-colors",
          isRecruiterMode ? "bg-primary" : "bg-muted"
        )}
      >
        <span 
          className={cn(
            "absolute top-0.5 w-3 h-3 rounded-full bg-foreground transition-transform",
            isRecruiterMode ? "translate-x-4" : "translate-x-0.5"
          )}
        />
      </span>
    </button>
  );
};

export default RecruiterModeToggle;
