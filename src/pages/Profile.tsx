import { useSEO } from '@/hooks/useSEO';
import Navbar from '@/components/Navbar';
import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileBanner from '@/components/profile/ProfileBanner';
import ProfileInfo from '@/components/profile/ProfileInfo';
import PostComposer from '@/components/profile/PostComposer';
import PostsList from '@/components/profile/PostsList';
import { useAdmin } from '@/contexts/AdminContext';

const Profile = () => {
  const { isAdmin } = useAdmin();

  useSEO({
    title: "Rx MHA - Founder & CEO | Rx Codex AI",
    description: "AI Developer and Founder of Rx Codex AI. Building the future of AI technology in Bangladesh.",
    keywords: "Rx MHA, Founder, CEO, Rx Codex AI, AI Developer, Bangladesh",
    canonicalUrl: "https://rxcodexai.com/company/teams/profiles/rxmha",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Rx MHA",
      "jobTitle": "Founder & CEO",
      "worksFor": {
        "@type": "Organization",
        "name": "Rx Codex AI"
      },
      "url": "https://rxcodexai.com/company/teams/profiles/rxmha"
    }
  });

  return (
    <div className="min-h-screen bg-dark-gradient">
      <Navbar />
      <main className="max-w-[600px] mx-auto border-x border-border/20 pt-20 min-h-screen bg-background/30 backdrop-blur-sm">
        <ProfileHeader />
        <ProfileBanner />
        <ProfileInfo />
        
        {/* Tab navigation */}
        <div className="border-b border-border/30">
          <div className="flex">
            <button className="flex-1 py-4 text-center font-semibold text-foreground border-b-2 border-primary">
              Posts
            </button>
            <button className="flex-1 py-4 text-center text-muted-foreground hover:bg-muted/10 transition-colors">
              Replies
            </button>
            <button className="flex-1 py-4 text-center text-muted-foreground hover:bg-muted/10 transition-colors">
              Media
            </button>
            <button className="flex-1 py-4 text-center text-muted-foreground hover:bg-muted/10 transition-colors">
              Likes
            </button>
          </div>
        </div>
        
        {isAdmin && (
          <div className="border-b border-border/30">
            <PostComposer />
          </div>
        )}
        <PostsList />
      </main>
    </div>
  );
};

export default Profile;
