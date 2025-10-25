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
    title: "Site Map - Rx Codex AI | Navigate Our Website",
    description: "Complete site map of Rx Codex AI website. Find all pages, AI models, research papers, and company information easily.",
    keywords: "Sitemap, Site Navigation, Rx Codex AI Pages, Website Map",
    canonicalUrl: "https://rxcodexai.com/sitemap",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Sitemap - Rx Codex AI",
      "description": "Complete navigation map of Rx Codex AI website",
      "url": "https://rxcodexai.com/sitemap"
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
              Navigate through all pages and sections of Rx Codex AI website
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
                      href="https://www.chat.rxcodexai.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white transition-colors duration-200 block py-1"
                    >
                      💬 Try Rx Codex AI Chat
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://github.com/rxcodexai" 
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
                    🔬 Rx Codex V1 Tiny V3 (In Dev)
                  </li>
                </ul>
              </nav>
            </section>

            {/* Company Info */}
            <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-4 border-b border-white/20 pb-2">
                About Rx Codex AI
              </h2>
              <div className="space-y-3">
                <p className="text-white/80 text-sm">
                  🇧🇩 Based in Bangladesh
                </p>
                <p className="text-white/80 text-sm">
                  🧠 Advanced AI Models
                </p>
                <p className="text-white/80 text-sm">
                  👨‍💻 Founded by Rx MHA (15 years old)
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
              Last updated: December 24, 2024 | 
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