import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ModelsSection = () => {
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
    published: "No, In development",
    tokensTrained: "In development",
    description: "This model is development we will make our own successful custom model class with this model for the first time."
  }];

  // Create model cards with individual data
  const modelCards = modelsData.map((model, index) => (
    <Card key={index} className="h-96 w-80 shrink-0 rounded-2xl border border-white/10 bg-white/5 card-shadow-responsive overflow-hidden relative">
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
              <img src="/lovable-uploads/ecca2066-2f6c-41b4-b1d7-eddaafc991d2.png" alt="Rx Codex Logo" className="w-5 h-5 object-contain mx-1" />
              Rx Codex AI
            </span>
          </div>
          <Button variant="outline" size="sm" className="text-xs px-3 py-1 h-auto bg-transparent border-white/20 text-white/80 hover:bg-white/10 hover:border-white/40 hover:text-white/80 transition-all duration-200">
            See More
          </Button>
        </div>
      </CardFooter>
    </Card>
  ));

  return (
    <section className="py-16 lg:py-24 overflow-x-hidden">
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
      </div>
    </section>
  );
};

export default ModelsSection;