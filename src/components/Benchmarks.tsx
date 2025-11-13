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
    <section className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-white/20 flex-1" />
          <h2 className="text-white/70 text-sm tracking-[0.2em] font-mono">
            [ BENCHMARKS ]
          </h2>
          <div className="h-px bg-white/20 flex-1" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Models and Tokenizer Benchmarks
            </h3>
            
            <p className="text-lg text-white/70 leading-relaxed">
              Our models Benchmark comparison graphs with others models and tokenizer benchmarks comparison with others tokenizers
            </p>

            <Button 
              variant="glass" 
              size="lg"
              onClick={() => navigate('/benchmarks')}
              className="rounded-full"
            >
              See ALL
            </Button>
          </div>

          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
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
              <div className="col-span-2">
                <img 
                  src={speedComparison} 
                  alt="Tokenization Speed Comparison" 
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
