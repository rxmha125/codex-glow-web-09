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
      <div className="max-w-[600px] mx-auto border-x border-border bg-background/50 pt-20">
        <ProfileHeader />
        <ProfileBanner />
        <ProfileInfo />
        
        {isAdmin && <PostComposer />}
        <PostsList />
      </div>
    </div>
  );
};

export default Profile;
