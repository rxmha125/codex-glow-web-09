import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const News = () => {
  useSEO({
    title: "AI News & Updates - Axtrio AI | Latest in AI Technology",
    description: "Stay updated with the latest news and developments from Axtrio AI. Get insights into AI research, model releases, and technology innovations from Bangladesh.",
    keywords: "AI News, Machine Learning Updates, Axtrio AI News, AI Research, Technology News, Bangladesh AI, Txa Series",
    canonicalUrl: "https://axtrioai.com/news",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "AI News & Updates - Axtrio AI",
      "description": "Latest news and updates from Axtrio AI",
      "url": "https://axtrioai.com/news"
    }
  });

  return (
    <div className="min-h-screen bg-dark-gradient overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
              News
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

export default News;
