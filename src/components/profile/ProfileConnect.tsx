import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProfileConnect = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-primary/20 via-purple-500/10 to-blue-500/10 border border-primary/30">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 mb-4">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium">Let's Build Together</span>
        </div>
        
        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
          Interested in collaborating?
        </h3>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          I'm always open to discussing AI projects, research collaborations, or innovative ideas.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button 
            asChild
            className="glow-button bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-primary/25"
          >
            <a href="mailto:contact@rxcodexai.com">
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
          <Button 
            variant="outline"
            asChild
            className="border-border/50 bg-background/50 hover:bg-muted/50 rounded-full px-6"
          >
            <a href="https://rxcodexai.com" target="_blank" rel="noopener noreferrer">
              Visit Rx Codex AI
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileConnect;
