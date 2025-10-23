import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamsSection from '@/components/teams/TeamsSection';
import { useSEO } from '@/hooks/useSEO';

const Company = () => {
  useSEO({
    title: "About Rx Codex AI - Leading AI Innovation from Bangladesh",
    description: "Learn about Rx Codex AI, a pioneering AI company from Bangladesh developing cutting-edge artificial intelligence solutions and models.",
    keywords: "Rx Codex AI Company, AI Bangladesh, About Us, AI Innovation, Machine Learning Company, Tech Startup",
    canonicalUrl: "https://www.rxcodexai.com/company",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Rx Codex AI",
      "description": "Information about Rx Codex AI company and team",
      "url": "https://www.rxcodexai.com/company"
    }
  });

  return (
    <div className="min-h-screen bg-dark-gradient overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <TeamsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Company;