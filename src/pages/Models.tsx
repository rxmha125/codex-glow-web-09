import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ModelsSection from '@/components/models/ModelsSection';
import ModelsTable from '@/components/models/ModelsTable';
import { useSEO } from '@/hooks/useSEO';

const Models = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: "AI Models - Rx Codex AI | Advanced ML Models from Bangladesh",
    description: "Explore Rx Codex AI's cutting-edge AI models including Rx Codex V1-mini. Advanced machine learning models developed in Bangladesh for global applications.",
    keywords: "AI Models, Machine Learning Models, Rx Codex V1-mini, AI Bangladesh, Neural Networks, Deep Learning Models",
    canonicalUrl: "https://rxcodexai.com/models",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "AI Models - Rx Codex AI",
      "description": "Advanced AI models and machine learning solutions from Bangladesh",
      "url": "https://rxcodexai.com/models",
      "mainEntity": {
        "@type": "Product",
        "name": "Rx Codex V1-mini",
        "description": "Advanced AI model for various applications"
      }
    }
  });

  return <main className="min-h-screen bg-dark-gradient overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <ModelsSection />
        <ModelsTable />
      </div>
      <Footer />
    </main>;
};

export default Models;