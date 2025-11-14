import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import capabilitiesRadar from '@/assets/capabilities_radar.png';
import compressionComparison from '@/assets/compression_comparison.png';
import finalScores from '@/assets/final_scores_comparison.png';
import speedComparison from '@/assets/speed_comparison.png';
import tokenCount from '@/assets/token_count_comparison.png';

const Benchmarks = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-8 lg:pt-12 pb-16 lg:pb-24">
      <div className="container mx-auto px-4">
        <h2 className="text-xs sm:text-sm tracking-[0.25em] uppercase text-muted-foreground max-w-fit mb-12">
          [ BENCHMARKS ]
        </h2>

        <div className="w-full h-px bg-white/10 mb-8"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 lg:space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight bg-gradient-to-r from-white via-white to-blue-200 bg-clip-text text-transparent">
                Models and Tokenizer Benchmarks
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed tracking-wide">
                Our models Benchmark comparison graphs with others models and tokenizer benchmarks comparison with others tokenizers
              </p>
            </div>

            <div className="pt-4">
              <Button 
                variant="glass" 
                size="default"
                onClick={() => navigate('/benchmarks')}
                className="h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base rounded-full font-medium"
              >
                See ALL
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
              <div className="col-span-2">
                <img 
                  src={capabilitiesRadar} 
                  alt="Tokenizer Capabilities Radar Chart" 
                  className="w-full h-auto rounded-lg border border-white/10"
                />
              </div>
              <div>
                <img 
                  src={finalScores} 
                  alt="Final Scores Comparison" 
                  className="w-full h-auto rounded-lg border border-white/10"
                />
              </div>
              <div>
                <img 
                  src={compressionComparison} 
                  alt="Compression Ratio Comparison" 
                  className="w-full h-auto rounded-lg border border-white/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benchmarks;
