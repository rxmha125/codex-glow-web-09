import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSEO } from '@/hooks/useSEO';
import capabilitiesRadar from '@/assets/capabilities_radar.png';
import compressionComparison from '@/assets/compression_comparison.png';
import finalScores from '@/assets/final_scores_comparison.png';
import speedComparison from '@/assets/speed_comparison.png';
import tokenCount from '@/assets/token_count_comparison.png';

const Benchmarks = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: "Models and Tokenizer Benchmarks - Rx Codex AI",
    description: "Comprehensive benchmark comparison of Rx Codex models and tokenizers against GPT2 and DeepSeek, showcasing superior performance in compression, speed, and efficiency.",
    keywords: "AI Benchmarks, Tokenizer Comparison, Model Performance, Rx Codex Benchmarks, GPT2 Comparison, DeepSeek Comparison",
    canonicalUrl: "https://rxcodexai.com/benchmarks",
  });

  const benchmarkContent = (
    <div className="space-y-8">
      {/* Overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Benchmark Overview</h2>
        <p className="text-muted-foreground leading-relaxed">
          Our comprehensive benchmark analysis demonstrates the superior performance of the Rx Codex tokenizer 
          compared to industry-standard tokenizers like GPT2 and DeepSeek. The evaluation covers multiple critical 
          dimensions including compression efficiency, processing speed, token accuracy, and specialized capabilities.
        </p>
      </section>

      {/* Tokenizer Capabilities */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Tokenizer Capabilities Analysis</h2>
        <p className="text-muted-foreground leading-relaxed">
          The radar chart visualization reveals Rx Codex's dominance across five key capability areas:
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-3">
          <li><strong className="text-foreground">Compression:</strong> Rx Codex achieves exceptional compression ratios, significantly outperforming both GPT2 and DeepSeek, resulting in more efficient token utilization.</li>
          <li><strong className="text-foreground">Speed:</strong> Processing speeds are competitive with DeepSeek while maintaining superior accuracy and compression.</li>
          <li><strong className="text-foreground">Special Tokens:</strong> Industry-leading support for special tokens enables better handling of structured data and code.</li>
          <li><strong className="text-foreground">Chat Support:</strong> Optimized for conversational AI applications with specialized chat tokens and formatting.</li>
          <li><strong className="text-foreground">Error Free:</strong> Near-perfect accuracy in tokenization with minimal error rates across diverse test cases.</li>
        </ul>
      </section>

      {/* Final Scores */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Overall Performance Score</h2>
        <p className="text-muted-foreground leading-relaxed">
          The Tokenizer Battle final scores clearly demonstrate Rx Codex's superiority:
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-3">
          <li><strong className="text-primary">Rx Codex: 84.39/100</strong> - Leading performance across all metrics</li>
          <li>GPT2: 67.74/100 - Strong baseline performance</li>
          <li>DeepSeek: 67.70/100 - Competitive but lacks optimization</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          This represents a <strong className="text-primary">24.5% performance advantage</strong> over competing tokenizers, 
          translating to significant cost savings and improved inference speeds in production environments.
        </p>
      </section>

      {/* Compression Analysis */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Compression Ratio Comparison</h2>
        <p className="text-muted-foreground leading-relaxed">
          Across diverse test categories, Rx Codex consistently achieves superior compression ratios:
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-3">
          <li><strong className="text-foreground">English Complex:</strong> Peak compression performance at 7.0+ chars/token ratio</li>
          <li><strong className="text-foreground">Code Python:</strong> Maintains high compression even for programming languages</li>
          <li><strong className="text-foreground">Chat Conversation:</strong> Optimized for natural dialogue with 6.3+ ratio</li>
          <li><strong className="text-foreground">Long Text:</strong> Exceptional performance on extended content at 6.9+ ratio</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          Higher compression ratios translate directly to reduced API costs, faster inference, and lower memory requirements 
          in production deployments.
        </p>
      </section>

      {/* Speed Analysis */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Tokenization Speed Performance</h2>
        <p className="text-muted-foreground leading-relaxed">
          Processing speed measurements across test cases show Rx Codex maintains competitive performance while 
          delivering superior compression:
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-3">
          <li><strong className="text-foreground">Simple Text:</strong> 0.48ms - Fastest tokenization for basic content</li>
          <li><strong className="text-foreground">Complex English:</strong> 0.92ms - Efficient handling of sophisticated language</li>
          <li><strong className="text-foreground">Code Processing:</strong> 0.96-1.01ms - Optimized for programming languages</li>
          <li><strong className="text-foreground">Long Text:</strong> 4.2ms - Excellent performance on extended content</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          The balanced speed-compression profile makes Rx Codex ideal for real-time applications where both 
          latency and cost efficiency matter.
        </p>
      </section>

      {/* Token Count Analysis */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Token Efficiency Metrics</h2>
        <p className="text-muted-foreground leading-relaxed">
          Token count comparisons reveal significant efficiency gains:
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-3">
          <li><strong className="text-foreground">Lower Token Counts:</strong> Rx Codex consistently uses fewer tokens across all test categories</li>
          <li><strong className="text-foreground">Cost Reduction:</strong> 15-25% fewer tokens means proportional savings in API costs</li>
          <li><strong className="text-foreground">Memory Efficiency:</strong> Reduced token counts enable larger context windows with the same memory footprint</li>
          <li><strong className="text-foreground">Normalized Performance:</strong> Maintains advantages even when normalized for text length</li>
        </ul>
      </section>

      {/* Conclusion */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Conclusion</h2>
        <p className="text-muted-foreground leading-relaxed">
          The benchmark results conclusively demonstrate that Rx Codex tokenizer represents a significant advancement 
          in tokenization technology. With an overall score of 84.39/100 and superior performance across compression, 
          speed, and accuracy metrics, Rx Codex is positioned as the optimal choice for cost-efficient, high-performance 
          AI applications.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          These efficiency gains are not just theoretical—they translate to real-world benefits including reduced inference 
          costs, faster response times, and the ability to process larger contexts within the same resource constraints. 
          As AI models continue to scale, efficient tokenization becomes increasingly critical for sustainable and 
          cost-effective deployment.
        </p>
      </section>
    </div>
  );

  return (
    <div className="min-h-screen bg-dark-gradient overflow-x-hidden">
      <Navbar />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          {/* Header with Back Button */}
          <div className="max-w-4xl mx-auto mb-12">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/home')}
              className="text-muted-foreground hover:bg-transparent mb-8 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:text-foreground transition-colors" />
            </Button>
            
            {/* Date */}
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
              OCTOBER 12, 2025
            </p>
            
            {/* Title */}
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Models and Tokenizer Benchmarks
            </h1>
            
            {/* Description */}
            <p className="text-lg text-muted-foreground mb-0 max-w-2xl leading-relaxed">
              Our models Benchmark comparison graphs with others models and tokenizer benchmarks comparison with others tokenizers
            </p>
          </div>

          {/* Smart 5-Image Grid in 16:9 Hero Section */}
          <div className="mb-12">
            <div className="relative aspect-[16/9] max-w-4xl mx-auto rounded-2xl overflow-hidden">
              <div className="grid grid-cols-3 grid-rows-2 gap-2 h-full p-2 bg-card/50 backdrop-blur-sm">
                {/* Capabilities Radar - spans 2 columns, 2 rows (left side, large focal point) */}
                <div className="col-span-2 row-span-2 rounded-lg overflow-hidden border border-border">
                  <img 
                    src={capabilitiesRadar} 
                    alt="Tokenizer Capabilities Radar Chart" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Final Scores - top right */}
                <div className="rounded-lg overflow-hidden border border-border">
                  <img 
                    src={finalScores} 
                    alt="Final Scores Comparison" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Compression - second row right */}
                <div className="rounded-lg overflow-hidden border border-border">
                  <img 
                    src={compressionComparison} 
                    alt="Compression Ratio Comparison" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Bottom row with Speed and Token Count - positioned absolutely */}
              <div className="absolute bottom-2 left-2 right-2 grid grid-cols-2 gap-2">
                <div className="rounded-lg overflow-hidden border border-border bg-card/50 backdrop-blur-sm">
                  <img 
                    src={speedComparison} 
                    alt="Tokenization Speed Comparison" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="rounded-lg overflow-hidden border border-border bg-card/50 backdrop-blur-sm">
                  <img 
                    src={tokenCount} 
                    alt="Token Count Comparison" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            {benchmarkContent}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Benchmarks;
