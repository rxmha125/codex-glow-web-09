import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const Sitemap = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: "Site Map - Axtrio AI | Navigate Our Website",
    description: "Complete site map of Axtrio AI website. Find all pages, AI models, research papers, and company information easily.",
    keywords: "Sitemap, Site Navigation, Axtrio AI Pages, Website Map",
    canonicalUrl: "https://axtrioai.com/sitemap",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Sitemap - Axtrio AI",
      "description": "Complete navigation map of Axtrio AI website",
      "url": "https://axtrioai.com/sitemap"
    }
  });

  return (
    <main className="min-h-screen bg-dark-gradient overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-20">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Site Map
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Navigate through all pages and sections of Axtrio AI website
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Main Pages */}
            <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-4 border-b border-white/20 pb-2">
                Main Pages
              </h2>
              <nav>
                <ul className="space-y-3">
                  <li>
                    <Link 
                      to="/" 
                      className="text-white/80 hover:text-white transition-colors duration-200 block py-1"
                    >
                      🏠 Home
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/company" 
                      className="text-white/80 hover:text-white transition-colors duration-200 block py-1"
                    >
                      🏢 Company
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/models" 
                      className="text-white/80 hover:text-white transition-colors duration-200 block py-1"
                    >
                      🤖 AI Models
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/teams" 
                      className="text-white/80 hover:text-white transition-colors duration-200 block py-1"
                    >
                      👥 Teams
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/news" 
                      className="text-white/80 hover:text-white transition-colors duration-200 block py-1"
                    >
                      📰 News
                    </Link>
                  </li>
                </ul>
              </nav>
            </section>

            {/* Research & Documentation */}
            <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-4 border-b border-white/20 pb-2">
                Research & Papers
              </h2>
              <nav>
                <ul className="space-y-3">
                  <li>
                    <Link 
                      to="/research" 
                      className="text-white/80 hover:text-white transition-colors duration-200 block py-1"
                    >
                      📚 Research Hub
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/research/rx-codex-v1-tiny" 
                      className="text-white/80 hover:text-white transition-colors duration-200 block py-1"
                    >
                      📄 Rx Codex V1 Tiny Research Paper
                    </Link>
                  </li>
                </ul>
              </nav>
            </section>

            {/* External Links */}
            <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-4 border-b border-white/20 pb-2">
                External Links
              </h2>
              <nav>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="https://www.chat.axtrioai.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white transition-colors duration-200 block py-1"
                    >
                      💬 Try Txa 1
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://github.com/axtrioai" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white transition-colors duration-200 block py-1"
                    >
                      🔗 GitHub Repository
                    </a>
                  </li>
                </ul>
              </nav>
            </section>

            {/* SEO & Technical */}
            <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-4 border-b border-white/20 pb-2">
                Technical Pages
              </h2>
              <nav>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="/sitemap.xml" 
                      className="text-white/80 hover:text-white transition-colors duration-200 block py-1"
                    >
                      🗺️ XML Sitemap
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/robots.txt" 
                      className="text-white/80 hover:text-white transition-colors duration-200 block py-1"
                    >
                      🤖 Robots.txt
                    </a>
                  </li>
                </ul>
              </nav>
            </section>

            {/* AI Models List */}
            <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-4 border-b border-white/20 pb-2">
                AI Models
              </h2>
              <nav>
                <ul className="space-y-3">
                  <li className="text-white/80 block py-1">
                    ⚡ Rx Codex V1 Mini
                  </li>
                  <li className="text-white/80 block py-1">
                    🔧 Rx Codex V1 Medium (Failed)
                  </li>
                  <li className="text-white/80 block py-1">
                    📱 Rx Codex V1 Small (Failed)
                  </li>
                  <li className="text-white/80 block py-1">
                    ⭐ Rx Codex V1 Tiny (Success)
                  </li>
                  <li className="text-white/80 block py-1">
                    🚀 Rx Codex V1 Tiny V2
                  </li>
                  <li className="text-white/80 block py-1">
                    🔬 Rx Codex V1 Tiny V3
                  </li>
                  <li className="text-white/80 block py-1">
                    🆕 Txa 1 (In Development)
                  </li>
                </ul>
              </nav>
            </section>

            {/* Company Info */}
            <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-4 border-b border-white/20 pb-2">
                About Axtrio AI
              </h2>
              <div className="space-y-3">
                <p className="text-white/80 text-sm">
                  🇧🇩 Based in Bangladesh
                </p>
                <p className="text-white/80 text-sm">
                  🧠 Txa Series AI Models
                </p>
                <p className="text-white/80 text-sm">
                  👨‍💻 Founded by Rx MHA
                </p>
                <p className="text-white/80 text-sm">
                  🔬 Cutting-edge AI Research
                </p>
              </div>
            </section>
          </div>

          {/* Footer note */}
          <footer className="text-center mt-16 pt-8 border-t border-white/20">
            <p className="text-white/60 text-sm">
              Last updated: January 1, 2026 | 
              <Link to="/" className="text-white/80 hover:text-white ml-2">
                Return to Home
              </Link>
            </p>
          </footer>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Sitemap;
