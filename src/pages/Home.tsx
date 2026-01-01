import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Models from '@/components/Models';
import Research from '@/components/Research';
import Responsive from '@/components/Responsive';
import Benchmarks from '@/components/Benchmarks';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const Home = () => {
  useSEO({
    title: "Welcome | Axtrio AI",
    description: "Axtrio AI pioneers cutting-edge AI models from Bangladesh, delivering powerful, scalable intelligence through the Txa series.",
    keywords: "AI, Artificial Intelligence, Bangladesh, AI Models, Machine Learning, Deep Learning, Axtrio AI, Txa Series, AI Technology",
    canonicalUrl: "https://axtrioai.com/",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Axtrio AI - Home",
      "description": "Axtrio AI pioneers cutting-edge AI models from Bangladesh, delivering powerful, scalable intelligence through the Txa series.",
      "url": "https://axtrioai.com/",
      "mainEntity": {
        "@type": "Organization",
        "name": "Axtrio AI",
        "url": "https://axtrioai.com"
      }
    }
  });

  return <main className="min-h-screen bg-dark-gradient overflow-x-hidden">
      <Navbar />
      <Hero />
      <Models />
      <Research isHomePage={true} />
      <Responsive />
      <Benchmarks />
      <Footer />
    </main>;
};

export default Home;
