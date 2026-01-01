import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
const Models = () => {
  const navigate = useNavigate();

  // Model data for all 6 cards
  const modelsData = [{
    name: "Rx_Codex_V1_Mini",
    parameters: "Unknown",
    contextWindow: "Unknown",
    published: "Yes",
    tokensTrained: "Forgotten",
    description: "This model is our first AI model, and this is not an next token prediction model"
  }, {
    name: "Rx_Codex_V1_Medium",
    parameters: "505 Million",
    contextWindow: "1024",
    published: "Failed",
    tokensTrained: "38 Million Approx.",
    description: "This model was an failure, the problem was in the model class, the model was generating useless random words."
  }, {
    name: "Rx_Codex_V1_Small",
    parameters: "505 Million",
    contextWindow: "1024",
    published: "Failed",
    tokensTrained: "200M+ Approx.",
    description: "This model was also an failure, the problem was in the model class same as the Medium model, the model was generating useless random words."
  }, {
    name: "Rx_Codex_V1_Tiny",
    parameters: "51 Million",
    contextWindow: "1024",
    published: "Yes",
    tokensTrained: "693 Million",
    description: "This model is a major success. We faced many errors and bugs during development, but after five days of dedicated debugging, it has become our most successful and powerful model to date."
  }, {
    name: "Rx_Codex_V1_Tiny_V2",
    parameters: "60 Million",
    contextWindow: "4096",
    published: "No, Successful",
    tokensTrained: "400M+ Approx.",
    description: "This model is also a success, with this model we just tested incised context window."
  }, {
    name: "Rx_Codex_V1_Tiny_V3",
    parameters: "70 Million",
    contextWindow: "4096",
    published: "No, Completed",
    tokensTrained: "Completed",
    description: "This model is development we will make our own successful custom model class with this model for the first time."
  }, {
    name: "Txa 1",
    parameters: "Unknown",
    contextWindow: "Unknown",
    published: "Unknown",
    tokensTrained: "Unknown",
    description: "Unknown"
  }];

  // Create model cards with individual data
  const modelCards = modelsData.map((model, index) => <Card key={index} className="h-96 w-80 shrink-0 rounded-2xl border border-white/10 bg-white/5 card-shadow-responsive overflow-hidden relative">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-white text-lg font-semibold">
          {model.name}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="px-6 pb-16 space-y-3">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-white/70">Parameters:</span>
            <span className="text-white">{model.parameters}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/70">Context window:</span>
            <span className="text-white">{model.contextWindow}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/70">Published:</span>
            <span className="text-white">{model.published}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/70">Total Tokens Trained:</span>
            <span className="text-white">{model.tokensTrained}</span>
          </div>
        </div>
        
        <div className="pt-2">
          <p className="text-white/80 text-xs leading-relaxed">
            {model.description}
          </p>
        </div>
      </CardContent>
      
      <CardFooter className="absolute bottom-4 left-6 right-6">
        <div className="flex flex-col items-center w-full space-y-2">
          <div className="flex items-center text-white/60 text-xs">
            <span className="flex items-center">
              Model Card |
              <img src="/og-logo.png" alt="Axtrio AI logo - Advanced artificial intelligence company from Bangladesh" className="w-5 h-5 object-contain mx-1" loading="lazy" />
              Axtrio AI
            </span>
          </div>
          <Button onClick={() => navigate('/models')} variant="outline" size="sm" className="text-xs px-3 py-1 h-auto bg-transparent border-white/20 text-white/80 hover:bg-white/10 hover:border-white/40 hover:text-white/80 transition-all duration-200">
            More
          </Button>
        </div>
      </CardFooter>
    </Card>);
  return <section id="models" className="py-16 lg:py-24 overflow-x-hidden">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-xs sm:text-sm tracking-[0.25em] uppercase text-white/70 max-w-fit mb-12">
          [ MODELS ]
        </h2>
        
        {/* Ticker Container - Full viewport width on desktop */}
        <div className="relative overflow-hidden -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-16 xl:-mx-24 2xl:-mx-32">
          {/* Side fade masks - Using responsive utility classes */}
          <div className="fade-mask-left" />
          <div className="fade-mask-right" />
          
          {/* Ticker Track - Adjusted padding to match negative margins */}
          <div className="flex w-max gap-6 animate-ticker hover:[animation-play-state:paused] pl-4 sm:pl-6 md:pl-8 lg:pl-16 xl:pl-24 2xl:pl-32 scrollbar-transparent" style={{
          '--ticker-duration': '40s'
        } as React.CSSProperties}>
            {/* First set of cards */}
            {modelCards}
            {/* Duplicate set for seamless loop */}
            {modelCards}
          </div>
        </div>
        
        {/* Models Table Section Title */}
        <div className="flex justify-center mt-16 lg:mt-24">
          <h3 className="text-xs sm:text-sm tracking-[0.25em] uppercase text-white/70">
            [ MODELS TABLE ]
          </h3>
        </div>
        
        {/* Models Table */}
        <div className="mt-8 overflow-x-auto">
          <div className="min-w-full">
            <table className="w-full border-collapse border border-white/20 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-white/5">
                  <th className="border border-white/20 px-4 py-3 text-left text-white/80 font-medium">Model</th>
                  <th className="border border-white/20 px-4 py-3 text-left text-white/80 font-medium">Published</th>
                  <th className="border border-white/20 px-4 py-3 text-left text-white/80 font-medium">Completed</th>
                  <th className="border border-white/20 px-4 py-3 text-left text-white/80 font-medium">Parameters</th>
                  <th className="border border-white/20 px-4 py-3 text-left text-white/80 font-medium">Context window</th>
                  <th className="border border-white/20 px-4 py-3 text-left text-white/80 font-medium">Tokens Trained</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white/[0.02] hover:bg-white/5 transition-colors">
                  <td className="border border-white/20 px-4 py-3 text-white">Rx_Codex_V1_Mini</td>
                  <td className="border border-white/20 px-4 py-3 text-white">Yes</td>
                  <td className="border border-white/20 px-4 py-3 text-white">Yes</td>
                  <td className="border border-white/20 px-4 py-3 text-white">Unknown</td>
                  <td className="border border-white/20 px-4 py-3 text-white">Unknown</td>
                  <td className="border border-white/20 px-4 py-3 text-white">Unknown</td>
                </tr>
                <tr className="bg-white/[0.02] hover:bg-white/5 transition-colors">
                  <td className="border border-white/20 px-4 py-3 text-white">Rx_Codex_V1_Medium</td>
                  <td className="border border-white/20 px-4 py-3 text-white">No</td>
                  <td className="border border-white/20 px-4 py-3 text-white">Failed</td>
                  <td className="border border-white/20 px-4 py-3 text-white">505Million</td>
                  <td className="border border-white/20 px-4 py-3 text-white">1024</td>
                  <td className="border border-white/20 px-4 py-3 text-white">Forgotten</td>
                </tr>
                <tr className="bg-white/[0.02] hover:bg-white/5 transition-colors">
                  <td className="border border-white/20 px-4 py-3 text-white">Rx_Codex_V1_Small</td>
                  <td className="border border-white/20 px-4 py-3 text-white">No</td>
                  <td className="border border-white/20 px-4 py-3 text-white">Failed</td>
                  <td className="border border-white/20 px-4 py-3 text-white">125Million</td>
                  <td className="border border-white/20 px-4 py-3 text-white">1024</td>
                  <td className="border border-white/20 px-4 py-3 text-white">200M+Approx.</td>
                </tr>
                <tr className="bg-white/[0.02] hover:bg-white/5 transition-colors">
                  <td className="border border-white/20 px-4 py-3 text-white">Rx_Codex_V1_Tiny</td>
                  <td className="border border-white/20 px-4 py-3 text-white">Yes</td>
                  <td className="border border-white/20 px-4 py-3 text-white">Yes - Huge success</td>
                  <td className="border border-white/20 px-4 py-3 text-white">51Million</td>
                  <td className="border border-white/20 px-4 py-3 text-white">1024</td>
                  <td className="border border-white/20 px-4 py-3 text-white">693Million</td>
                </tr>
                <tr className="bg-white/[0.02] hover:bg-white/5 transition-colors">
                  <td className="border border-white/20 px-4 py-3 text-white">Rx_Codex_V1_Tiny_V2</td>
                  <td className="border border-white/20 px-4 py-3 text-white">Not Yet</td>
                  <td className="border border-white/20 px-4 py-3 text-white">Yes - Success</td>
                  <td className="border border-white/20 px-4 py-3 text-white">60Million</td>
                  <td className="border border-white/20 px-4 py-3 text-white">4096</td>
                  <td className="border border-white/20 px-4 py-3 text-white">400Million+</td>
                </tr>
                <tr className="bg-white/[0.02] hover:bg-white/5 transition-colors">
                  <td className="border border-white/20 px-4 py-3 text-white">Rx_Codex_V1_Tiny_V3</td>
                  <td className="border border-white/20 px-4 py-3 text-white">Completed</td>
                  <td className="border border-white/20 px-4 py-3 text-white">Completed</td>
                  <td className="border border-white/20 px-4 py-3 text-white">70Million</td>
                  <td className="border border-white/20 px-4 py-3 text-white">4096</td>
                  <td className="border border-white/20 px-4 py-3 text-white">Completed</td>
                </tr>
                <tr className="bg-white/[0.02] hover:bg-white/5 transition-colors">
                  <td className="border border-white/20 px-4 py-3 text-white">Txa 1</td>
                  <td className="border border-white/20 px-4 py-3 text-white">In Development</td>
                  <td className="border border-white/20 px-4 py-3 text-white">In Development</td>
                  <td className="border border-white/20 px-4 py-3 text-white">Unknown</td>
                  <td className="border border-white/20 px-4 py-3 text-white">Unknown</td>
                  <td className="border border-white/20 px-4 py-3 text-white">Unknown</td>
                </tr>
              </tbody>
            </table>
            
            {/* Table Footer */}
            <div className="flex justify-center items-center mt-4 text-white/60 text-sm">
              <span className="flex items-center">
                Model Table |
                <img src="/og-logo.png" alt="Axtrio AI logo - Advanced AI technology from Bangladesh" className="w-5 h-5 object-contain mx-1" loading="lazy" />
                Axtrio AI
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>;
};
export default Models;
