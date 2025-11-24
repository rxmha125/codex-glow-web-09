import { useSEO } from '@/hooks/useSEO';
import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileBanner from '@/components/profile/ProfileBanner';
import ProfileInfo from '@/components/profile/ProfileInfo';
import ProfileTabs from '@/components/profile/ProfileTabs';

const Profile = () => {
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
    <div className="min-h-screen bg-background">
      <div className="max-w-[600px] mx-auto border-x border-border">
        <ProfileHeader />
        <ProfileBanner />
        <ProfileInfo />
        <ProfileTabs />
        
        {/* Posts content area - placeholder for future phase */}
        <div className="p-4 min-h-[400px] border-t border-border">
          <p className="text-center text-muted-foreground py-20">
            Posts will appear here
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
