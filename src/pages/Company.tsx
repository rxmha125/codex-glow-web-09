import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Company
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

export default Company;