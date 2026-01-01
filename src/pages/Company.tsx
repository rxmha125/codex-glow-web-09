import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamsSection from '@/components/teams/TeamsSection';
import GoalSection from '@/components/company/GoalSection';
import { useSEO } from '@/hooks/useSEO';

const Company = () => {
  useSEO({
    title: "About Axtrio AI - Leading AI Innovation from Bangladesh",
    description: "Learn about Axtrio AI, a pioneering AI company from Bangladesh developing cutting-edge artificial intelligence solutions and the Txa series models. Founded by Rx MHA.",
    keywords: "Axtrio AI Company, AI Bangladesh, About Us, AI Innovation, Machine Learning Company, Tech Startup, Rx MHA, Txa Series",
    canonicalUrl: "https://axtrioai.com/company",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://axtrioai.com/#organization",
          "name": "Axtrio AI",
          "url": "https://axtrioai.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://axtrioai.com/og-logo.png",
            "width": 512,
            "height": 512
          },
          "description": "Axtrio AI pioneers cutting-edge AI models from Bangladesh, delivering powerful, scalable intelligence through the Txa series.",
          "founder": {
            "@type": "Person",
            "@id": "https://axtrioai.com/#founder"
          },
          "foundingDate": "2024",
          "location": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Bangladesh"
            }
          },
          "sameAs": [
            "https://axtrioai.com"
          ]
        },
        {
          "@type": "Person",
          "@id": "https://axtrioai.com/#founder",
          "name": "Rx MHA",
          "image": "https://axtrioai.com/team-member.jpg",
          "jobTitle": [
            "Founder & CEO",
            "AI Architect",
            "Web Developer",
            "Researcher",
            "Designer"
          ],
          "description": "Rx MHA is the founder and CEO of Axtrio AI, leading AI development and innovation from Bangladesh.",
          "worksFor": {
            "@type": "Organization",
            "@id": "https://axtrioai.com/#organization"
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
          }
        },
        {
          "@type": "AboutPage",
          "name": "About Axtrio AI",
          "description": "Information about Axtrio AI company and team",
          "url": "https://axtrioai.com/company",
          "mainEntity": {
            "@type": "Organization",
            "@id": "https://axtrioai.com/#organization"
          }
        }
      ]
    }
  });

  return (
    <div className="min-h-screen bg-dark-gradient overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <TeamsSection />
        <GoalSection />
      </div>
      <Footer />
    </div>
  );
};

export default Company;
