import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';
import { Button } from '@/components/ui/button';

interface ResearchItem {
  date: string;
  title: string;
  description: string;
  category: string;
  image: string;
  slug: string;
}

const Research = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: "Research | Axtrio AI",
    description: "Explore our latest AI research and model development papers. Discover innovations from Axtrio AI's Txa series.",
    keywords: "Axtrio AI Research, Txa Series, AI Research Papers, Machine Learning, Bangladesh AI",
    canonicalUrl: "https://axtrioai.com/research",
  });

  // Featured research (latest/most important)
  const featuredResearch: ResearchItem = {
    date: "AUGUST 24, 2025",
    title: "Rx Codex V1 Tiny Research Paper",
    description: "Our Research Paper for Rx_Codex_V1_Tiny, Introducing Rx Codex V1 Tiny our most successful AI Model Ever",
    category: "RESEARCH",
    image: "/lovable-uploads/078e1354-7027-46ca-a893-fba511725070.png",
    slug: "/research/rx-codex-v1-tiny"
  };

  // Older research items (for grid)
  const olderResearch: ResearchItem[] = [
    // Add more research items here when available
  ];

  const handleReadMore = (slug: string) => {
    navigate(slug);
  };

  return (
    <div className="min-h-screen bg-dark-gradient overflow-x-hidden">
      <Navbar />
      
      <div className="pt-24 lg:pt-32">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
          {/* Header Section */}
          <div className="mb-10 lg:mb-14">
            {/* Section Label */}
            <h2 className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-muted-foreground mb-5">
              [ OUR RESEARCH ]
            </h2>
            
            {/* Title and Description Row */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-8">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                Latest research
              </h1>
              <p className="text-muted-foreground text-sm lg:text-base max-w-sm lg:text-right">
                Explore our research papers and technical documentation on AI model development.
              </p>
            </div>
          </div>

          {/* Separator Line */}
          <div className="w-full h-px bg-white/20 mb-10 lg:mb-12"></div>

          {/* Featured Research Card */}
          <div className="mb-12 lg:mb-16">
            {/* Mobile Layout */}
            <div className="block lg:hidden space-y-4">
              <div className="text-xs text-muted-foreground tracking-wider">
                {featuredResearch.date}
              </div>
              <h3 className="text-xl font-bold text-foreground">
                {featuredResearch.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {featuredResearch.description}
              </p>
              <div className="aspect-video rounded-lg overflow-hidden max-w-md">
                <img 
                  src={featuredResearch.image} 
                  alt={featuredResearch.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between pt-3">
                <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                  {featuredResearch.category}
                </span>
                <Button 
                  onClick={() => handleReadMore(featuredResearch.slug)}
                  variant="ghost" 
                  className="bg-transparent border border-white/30 text-foreground hover:bg-white/10 hover:border-white/50 hover:text-foreground px-5 py-1.5 rounded-full transition-all duration-300 text-sm"
                >
                  READ
                </Button>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
              {/* Left - Content */}
              <div className="space-y-4">
                <div className="text-xs text-muted-foreground tracking-wider">
                  {featuredResearch.date}
                </div>
                <h3 className="text-2xl xl:text-3xl font-bold text-foreground leading-tight">
                  {featuredResearch.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {featuredResearch.description}
                </p>
                <div className="flex items-center gap-6 pt-3">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                    {featuredResearch.category}
                  </span>
                  <Button 
                    onClick={() => handleReadMore(featuredResearch.slug)}
                    variant="ghost" 
                    className="bg-transparent border border-white/30 text-foreground hover:bg-white/10 hover:border-white/50 hover:text-foreground px-6 py-1.5 rounded-full transition-all duration-300 text-sm"
                  >
                    READ
                  </Button>
                </div>
              </div>
              
              {/* Right - Image */}
              <div className="relative max-w-lg ml-auto">
                <div className="aspect-video rounded-lg overflow-hidden border border-border/20">
                  <img 
                    src={featuredResearch.image} 
                    alt={featuredResearch.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Separator Line (only show if there are older items) */}
          {olderResearch.length > 0 && (
            <div className="w-full h-px bg-border/30 mb-12 lg:mb-16"></div>
          )}

          {/* Older Research Grid */}
          {olderResearch.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
              {olderResearch.map((item, index) => (
                <div 
                  key={index}
                  className="group cursor-pointer"
                  onClick={() => handleReadMore(item.slug)}
                >
                  {/* Image */}
                  <div className="aspect-video rounded-xl overflow-hidden mb-4 border border-border/20">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground group-hover:text-foreground/80 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs text-muted-foreground tracking-wider">
                        {item.date}
                      </span>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="bg-transparent border border-border/40 text-foreground hover:bg-white/10 px-4 py-1 rounded-full text-xs"
                      >
                        READ
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Research;
