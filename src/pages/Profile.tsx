import { useSEO } from '@/hooks/useSEO';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileBanner from '@/components/profile/ProfileBanner';
import ProfileInfo from '@/components/profile/ProfileInfo';
import ProfileAbout from '@/components/profile/ProfileAbout';
import ProfileSkills from '@/components/profile/ProfileSkills';
import ProfileHighlights from '@/components/profile/ProfileHighlights';
import ProfileSocials from '@/components/profile/ProfileSocials';
import ProfileConnect from '@/components/profile/ProfileConnect';
import PostComposer from '@/components/profile/PostComposer';
import PostsList from '@/components/profile/PostsList';
import { useAdmin } from '@/contexts/AdminContext';

const Profile = () => {
  const { isAdmin } = useAdmin();

  useSEO({
    title: "Rx MHA - Founder & CEO | Rx Codex AI",
    description: "Rx MHA is the 15-year-old founder and CEO of Rx Codex AI, a pioneering AI company from Bangladesh. AI Architect, Web Developer, Researcher, and Designer building the future of AI technology.",
    keywords: "Rx MHA, Founder of Rx Codex AI, CEO Rx Codex AI, AI Developer Bangladesh, Young AI Founder, AI Architect, Who is Rx MHA, The Founder of Rx Codex AI",
    canonicalUrl: "https://rxcodexai.com/company/teams/profiles/rxmha",
    ogImage: "https://rxcodexai.com/team-member.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "mainEntity": {
        "@type": "Person",
        "@id": "https://rxcodexai.com/#founder",
        "name": "Rx MHA",
        "alternateName": "Rx MHA",
        "image": "https://rxcodexai.com/team-member.jpg",
        "jobTitle": ["Founder & CEO", "AI Architect", "Web Developer", "Researcher", "Designer"],
        "description": "Rx MHA is the 15-year-old founder and CEO of Rx Codex AI, leading AI development and innovation from Bangladesh.",
        "worksFor": {
          "@type": "Organization",
          "name": "Rx Codex AI",
          "url": "https://rxcodexai.com"
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
        "url": "https://rxcodexai.com/company/teams/profiles/rxmha"
      }
    }
  });

  return (
    <div className="min-h-screen bg-dark-gradient">
      <Navbar />
      
      <main className="pt-20">
        {/* Profile Header - Sticky navigation */}
        <div className="max-w-4xl mx-auto">
          <ProfileHeader />
        </div>
        
        {/* Banner Section */}
        <div className="max-w-4xl mx-auto overflow-hidden">
          <ProfileBanner />
        </div>
        
        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
          {/* Profile Info Card */}
          <div className="relative -mt-6 mb-8">
            <div className="glass-card rounded-2xl border border-border/30 bg-card/30 backdrop-blur-xl overflow-hidden">
              <ProfileInfo />
            </div>
          </div>
          
          {/* Two Column Layout for About & Skills */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <ProfileAbout />
            <ProfileSkills />
          </div>
          
          {/* Highlights Section */}
          <div className="mb-8">
            <ProfileHighlights />
          </div>
          
          {/* Social Links Section */}
          <div className="mb-8">
            <ProfileSocials />
          </div>
          
          {/* Posts Section */}
          <div className="mb-8">
            {isAdmin && (
              <div className="mb-4 p-4 rounded-xl glass-card border border-border/30 bg-card/30 backdrop-blur-xl">
                <PostComposer />
              </div>
            )}
            <PostsList />
          </div>
          
          {/* Connect CTA Section */}
          <ProfileConnect />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
