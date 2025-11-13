import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

const GoalSection = () => {
  return (
    <section className="py-16 lg:py-24 border-t border-white/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <ChevronDown className="w-4 h-4 text-white/40" />
          <h2 className="text-xs sm:text-sm tracking-[0.25em] uppercase text-white/40">
            [ OUR GOAL ]
          </h2>
        </div>

        {/* Large Title */}
        <h3 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white/70 mb-16">
          To make AI efficient
        </h3>

        {/* Content Section with Text and Button */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 pb-12 border-b border-white/10">
          <p className="text-white/90 text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed">
            Making AI's and there inference should be Low cost, the AI's now are based on Transformers but it's not efficient. we are working to build a new base model with new architecture that's the path to achieve AGI
          </p>
          
          <Button 
            variant="outline" 
            className="self-start lg:self-auto shrink-0 border-white/20 hover:bg-white/10 text-white"
          >
            More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GoalSection;
