import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamsSection from '@/components/teams/TeamsSection';
import GoalSection from '@/components/company/GoalSection';
import { useSEO } from '@/hooks/useSEO';

const Company = () => {
  useSEO({
    title: "About Rx Codex AI - Leading AI Innovation from Bangladesh",
    description: "Learn about Rx Codex AI, a pioneering AI company from Bangladesh developing cutting-edge artificial intelligence solutions and models. Founded by Rx MHA, a 15-year-old AI architect.",
    keywords: "Rx Codex AI Company, AI Bangladesh, About Us, AI Innovation, Machine Learning Company, Tech Startup, Rx MHA, Young AI Founder",
    canonicalUrl: "https://rxcodexai.com/company",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://rxcodexai.com/#organization",
          "name": "Rx Codex AI",
          "url": "https://rxcodexai.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://rxcodexai.com/lovable-uploads/ecca2066-2f6c-41b4-b1d7-eddaafc991d2.png",
            "width": 512,
            "height": 512
          },
          "description": "Rx Codex AI is a pioneering artificial intelligence company from Bangladesh, developing cutting-edge AI models and solutions.",
          "founder": {
            "@type": "Person",
            "@id": "https://rxcodexai.com/#founder"
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
            "https://rxcodexai.com"
          ]
        },
        {
          "@type": "Person",
          "@id": "https://rxcodexai.com/#founder",
          "name": "Rx MHA",
          "age": 15,
          "image": "https://rxcodexai.com/team-member.jpg",
          "jobTitle": [
            "Founder & CEO",
            "AI Architect",
            "Web Developer",
            "Researcher",
            "Designer"
          ],
          "description": "Rx MHA is the 15-year-old founder and CEO of Rx Codex AI, leading AI development and innovation from Bangladesh.",
          "worksFor": {
            "@type": "Organization",
            "@id": "https://rxcodexai.com/#organization"
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
          "name": "About Rx Codex AI",
          "description": "Information about Rx Codex AI company and team",
          "url": "https://rxcodexai.com/company",
          "mainEntity": {
            "@type": "Organization",
            "@id": "https://rxcodexai.com/#organization"
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