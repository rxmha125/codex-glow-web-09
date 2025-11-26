import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';

interface PostSettingsModalProps {
  open: boolean;
  onClose: () => void;
  onDateSelect: (date: Date) => void;
  selectedDate?: Date;
}

const PostSettingsModal = ({ open, onClose, onDateSelect, selectedDate }: PostSettingsModalProps) => {
  const [date, setDate] = useState<Date | undefined>(selectedDate);

  const handleConfirm = () => {
    if (date) {
      onDateSelect(date);
    }
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-background/95 backdrop-blur-xl border-border/50">
        <DialogHeader>
          <DialogTitle>Post Settings</DialogTitle>
        </DialogHeader>
        
        <div className="py-4">
          <p className="text-sm text-muted-foreground mb-4">
            Select a custom display date for this post. The date will advance in real-time automatically.
          </p>
          
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border border-border/50 mx-auto bg-background/30"
          />
          
          {date && (
            <div className="mt-4 p-3 bg-muted/30 rounded-lg border border-border/30">
              <p className="text-sm font-medium">Selected date: {format(date, 'PPP')}</p>
              <p className="text-xs text-muted-foreground mt-1">
                This date will advance daily to stay current
              </p>
            </div>
          )}
        </div>
        
        <div className="flex justify-between gap-2">
          {date && (
            <Button variant="ghost" onClick={() => setDate(undefined)}>
              Clear
            </Button>
          )}
          <div className="flex gap-2 ml-auto">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleConfirm} disabled={!date}>
              Confirm
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PostSettingsModal;
