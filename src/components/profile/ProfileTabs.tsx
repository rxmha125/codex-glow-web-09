import { useState } from 'react';
import { cn } from '@/lib/utils';

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState('Posts');
  const tabs = ['Posts', 'Replies', 'Highlights', 'Articles', 'Media', 'Likes'];

  return (
    <div className="border-b border-border">
      <nav className="flex overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "flex-1 min-w-fit px-4 py-4 text-sm font-medium hover:bg-muted/50 transition-colors relative",
              activeTab === tab 
                ? "text-foreground" 
                : "text-muted-foreground"
            )}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full" />
            )}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default ProfileTabs;
