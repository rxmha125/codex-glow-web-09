import { useSEO } from '@/hooks/useSEO';
import Navbar from '@/components/Navbar';
import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileBanner from '@/components/profile/ProfileBanner';
import ProfileInfo from '@/components/profile/ProfileInfo';
import PostComposer from '@/components/profile/PostComposer';
import PostsList from '@/components/profile/PostsList';
import { useAdmin } from '@/contexts/AdminContext';
import Footer from '@/components/Footer';

const Profile = () => {
  const { isAdmin } = useAdmin();

  useSEO({
    title: "Rx MHA - Founder & CEO | Axtrio AI",
    description: "Rx MHA is the founder and CEO of Axtrio AI, a pioneering AI company from Bangladesh. AI Architect, Web Developer, Researcher, and Designer building cutting-edge AI models.",
    keywords: "Rx MHA, Founder of Axtrio AI, CEO Axtrio AI, AI Developer Bangladesh, AI Founder, AI Architect, Who is Rx MHA, The Founder of Axtrio AI",
    canonicalUrl: "https://axtrioai.com/company/teams/profiles/rxmha",
    ogImage: "https://axtrioai.com/team-member.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "mainEntity": {
        "@type": "Person",
        "@id": "https://axtrioai.com/#founder",
        "name": "Rx MHA",
        "alternateName": "Rx MHA",
        "image": "https://axtrioai.com/team-member.jpg",
        "jobTitle": ["Founder & CEO", "AI Architect", "Web Developer", "Researcher", "Designer"],
        "description": "Rx MHA is the founder and CEO of Axtrio AI, leading AI development and innovation from Bangladesh.",
        "worksFor": {
          "@type": "Organization",
          "name": "Axtrio AI",
          "url": "https://axtrioai.com"
        },
        "knowsAbout": [
          "Artificial Intelligence",
          "Machine Learning",
          "Deep Learning",
          "AI Architecture",
          "Web Development",
          "AI Research"
        ],
        "nationality": {
          "@type": "Country",
          "name": "Bangladesh"
        },
        "url": "https://axtrioai.com/company/teams/profiles/rxmha"
      }
    }
  });

  return (
    <div className="min-h-screen bg-dark-gradient">
      <Navbar />
      <main className="max-w-2xl mx-auto pt-20 pb-12 px-4">
        <div className="bg-card/40 backdrop-blur-sm border border-border/30 rounded-2xl overflow-hidden">
          <ProfileHeader />
          <ProfileBanner />
          <ProfileInfo />
          
          {/* Posts Section */}
          <div className="border-t border-border/30">
            <div className="px-4 py-3 border-b border-border/30">
              <h2 className="font-semibold text-foreground">Posts</h2>
            </div>
            
            {isAdmin && (
              <div className="border-b border-border/30">
                <PostComposer />
              </div>
            )}
            <PostsList />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
