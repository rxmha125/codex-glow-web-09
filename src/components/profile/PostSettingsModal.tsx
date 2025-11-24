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
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Post Settings</DialogTitle>
        </DialogHeader>
        
        <div className="py-4">
          <p className="text-sm text-muted-foreground mb-4">
            Select a custom display date for this post. The date will advance in real-time.
          </p>
          
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
          
          {date && (
            <p className="text-sm text-muted-foreground mt-4">
              Selected: {format(date, 'PPP')}
            </p>
          )}
        </div>
        
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleConfirm} disabled={!date}>
            Confirm
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PostSettingsModal;
