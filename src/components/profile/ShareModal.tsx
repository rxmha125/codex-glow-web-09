import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Copy, Check, X } from 'lucide-react';
import { toast } from 'sonner';
import teamMemberImage from '@/assets/team-member.jpg';

interface ShareModalProps {
  open: boolean;
  onClose: () => void;
  postId: string;
}

const ShareModal = ({ open, onClose, postId }: ShareModalProps) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = `https://www.rxcodexai.com/company/share/rxmha/post/${postId}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast.success('Link copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy link');
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-background/95 backdrop-blur-xl border-border/50">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Share Post</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/30">
          <Avatar className="w-12 h-12">
            <AvatarImage src={teamMemberImage} />
            <AvatarFallback>RM</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-bold text-foreground">Rx MHA</p>
            <p className="text-sm text-muted-foreground">@rxmha_</p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">Share this link</p>
          <div className="flex items-center gap-2">
            <Input
              value={shareUrl}
              readOnly
              className="bg-muted/30 border-border/50 text-sm"
            />
            <Button
              onClick={handleCopy}
              size="icon"
              variant="outline"
              className="shrink-0 hover:bg-primary/10 transition-all"
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareModal;
