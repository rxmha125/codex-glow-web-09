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
    title: "AI Models - Axtrio AI | Advanced ML Models from Bangladesh",
    description: "Explore Axtrio AI's cutting-edge AI models including the Txa series. Advanced machine learning models developed in Bangladesh for global applications.",
    keywords: "AI Models, Machine Learning Models, Txa Series, AI Bangladesh, Neural Networks, Deep Learning Models, Axtrio AI",
    canonicalUrl: "https://axtrioai.com/models",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "AI Models - Axtrio AI",
      "description": "Advanced AI models and machine learning solutions from Bangladesh",
      "url": "https://axtrioai.com/models",
      "mainEntity": {
        "@type": "Product",
        "name": "Txa Series",
        "description": "Advanced AI model series for various applications"
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
