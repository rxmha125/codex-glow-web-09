import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Models from '@/components/Models';
import Research from '@/components/Research';
import Responsive from '@/components/Responsive';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const Home = () => {
  useSEO({
    title: "Rx Codex AI - Advanced AI Models from Bangladesh",
    description: "Building the future of AI technology with cutting-edge models from Bangladesh. Discover Rx Codex V1-mini and our innovative AI solutions.",
    keywords: "AI, Artificial Intelligence, Bangladesh, AI Models, Machine Learning, Deep Learning, Rx Codex, AI Technology",
    canonicalUrl: "https://www.rxcodexai.com/",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Rx Codex AI - Home",
      "description": "Building the future of AI technology with cutting-edge models from Bangladesh",
      "url": "https://www.rxcodexai.com/",
      "mainEntity": {
        "@type": "Organization",
        "name": "Rx Codex AI",
        "url": "https://www.rxcodexai.com"
      }
    }
  });

  return <main className="min-h-screen bg-dark-gradient overflow-x-hidden">
      <Navbar />
      <Hero />
      <Models />
      <Research isHomePage={true} />
      <Responsive />
      <Footer />
    </main>;
};

export default Home;