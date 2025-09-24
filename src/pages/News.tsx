import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const News = () => {
  useSEO({
    title: "AI News & Updates - Rx Codex AI | Latest in AI Technology",
    description: "Stay updated with the latest news and developments from Rx Codex AI. Get insights into AI research, model releases, and technology innovations from Bangladesh.",
    keywords: "AI News, Machine Learning Updates, Rx Codex AI News, AI Research, Technology News, Bangladesh AI",
    canonicalUrl: "https://www.rxcodexai.com/news",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "AI News & Updates - Rx Codex AI",
      "description": "Latest news and updates from Rx Codex AI",
      "url": "https://www.rxcodexai.com/news"
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