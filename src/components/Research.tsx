import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ResearchCard from "./ResearchCard";
import ResearchModal from "./ResearchModal";

interface ResearchProps {
  isHomePage?: boolean;
}

const Research = ({ isHomePage = false }: ResearchProps) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const researchData = {
    date: "AUGUST 24, 2025",
    title: "Rx Codex V1 Tiny Research Paper",
    description: "Our Research Paper for Rx_Codex_V1_Tiny, Introducing Rx Codex V1 Tiny our most successful AI Model Ever",
    category: "RESEARCH",
    image: "/lovable-uploads/078e1354-7027-46ca-a893-fba511725070.png"
  };

  // Sample research paper content (you can replace this with actual content)
  const researchContent = `# Rx Codex V1 Tiny Research Paper

## Abstract
This research paper presents Rx Codex V1 Tiny, our most successful AI model to date. After five days of intensive debugging and development, we have achieved a breakthrough in model performance and efficiency.

## Introduction
The development of Rx Codex V1 Tiny represents a significant milestone in our AI research journey. Unlike our previous attempts with Medium and Small variants, this model has demonstrated exceptional stability and performance.

## Model Architecture
- Parameters: 51 Million
- Context Window: 1024 tokens
- Training Data: 692 Million tokens
- Architecture: Custom transformer-based model

## Key Achievements
1. **Stability**: No random word generation issues that plagued earlier models
2. **Performance**: Consistent and coherent text generation
3. **Efficiency**: Optimized for real-world deployment
4. **Reliability**: Extensively tested and validated

## Training Process
The training process involved extensive debugging of the model class, which was the primary source of issues in our previous Medium and Small variants. Our team spent five dedicated days resolving architectural problems and optimizing the training pipeline.

## Results and Evaluation
The model has shown remarkable improvements in:
- Text coherence and relevance
- Response accuracy
- Computational efficiency
- Model stability

## Future Work
Building on the success of V1 Tiny, we are developing V1 Tiny V2 and V3 variants with expanded context windows and improved capabilities.

## Conclusion
Rx Codex V1 Tiny represents a major breakthrough in our AI model development. The success of this model validates our architectural choices and debugging methodologies, providing a solid foundation for future developments.

---

*This research paper is part of the Rx Codex AI research initiative.*`;

  const handleReadMore = () => {
    navigate('/research-rx-codex-v1-tiny');
  };

  return (
    <>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <h2 className="text-xs sm:text-sm tracking-[0.25em] uppercase text-muted-foreground max-w-fit mb-12">
            [ RESEARCH ]
          </h2>
          
          {/* Separator line */}
          <div className="w-full h-px bg-white/10 mb-8 md:mb-12"></div>
          
          {/* Research Cards Container */}
          <div className="relative">
            {/* Main Research Card */}
            <div className="relative z-10">
              <ResearchCard
                date={researchData.date}
                title={researchData.title}
                description={researchData.description}
                category={researchData.category}
                onReadMore={handleReadMore}
                showFullContent={!isHomePage}
                image={researchData.image}
              />
            </div>
            
            {/* Empty Secondary Card - Just showing bottom edge - Hidden on mobile */}
            <div className="hidden sm:block relative -mt-28 md:-mt-32 lg:-mt-36 z-0 -mx-2 md:-mx-4 lg:-mx-6">
              <div className="opacity-40 scale-90 pointer-events-none">
                <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl h-32 md:h-40 lg:h-48">
                  {/* Empty card - no content */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Modal - only shown on models page */}
      {!isHomePage && (
        <ResearchModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={researchData.title}
          content={researchContent}
        />
      )}
    </>
  );
};

export default Research;