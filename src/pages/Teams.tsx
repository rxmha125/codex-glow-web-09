import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const Teams = () => {
  useSEO({
    title: "Our Team - Rx Codex AI | Meet the AI Experts from Bangladesh",
    description: "Meet the talented team behind Rx Codex AI. Our experts in artificial intelligence and machine learning are building the future of AI technology.",
    keywords: "Rx Codex AI Team, AI Experts, Machine Learning Team, Bangladesh AI Developers, Tech Team",
    canonicalUrl: "https://www.rxcodexai.com/teams",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Rx Codex AI Team",
      "description": "Meet our team of AI experts and developers",
      "url": "https://www.rxcodexai.com/teams"
    }
  });

  return (
    <div className="min-h-screen bg-dark-gradient overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Teams
            </h1>
            <p className="text-xl text-white/70">
              Content will be added soon
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Teams;