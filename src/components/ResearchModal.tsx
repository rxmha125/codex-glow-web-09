import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X } from "lucide-react";

interface ResearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const ResearchModal = ({ isOpen, onClose, title, content }: ResearchModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] p-0 bg-background/95 backdrop-blur-xl border border-white/20">
        {/* Header */}
        <DialogHeader className="px-8 py-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-foreground">
              {title}
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </DialogHeader>
        
        {/* Content */}
        <ScrollArea className="flex-1 px-8 py-6">
          <div className="prose prose-invert max-w-none">
            <div className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
              {content}
            </div>
          </div>
        </ScrollArea>
        
        {/* Footer */}
        <div className="px-8 py-6 border-t border-white/10">
          <div className="flex justify-center">
            <Button
              onClick={onClose}
              variant="outline"
              className="bg-transparent border-white/20 text-foreground hover:bg-white/10 hover:border-white/40 px-8"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResearchModal;