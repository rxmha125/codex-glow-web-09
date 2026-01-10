import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSEO } from '@/hooks/useSEO';

const ResearchPaper = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: "Rx Codex V1-Tiny Research Paper | Axtrio AI",
    description: "Read the comprehensive research paper on Rx Codex V1-Tiny, a foundational AI model developed in Bangladesh. Technical details, methodology, and results.",
    keywords: "Rx Codex V1-Tiny, AI Research Paper, Machine Learning Research, Foundational AI Model, Bangladesh AI Research, Neural Networks, Axtrio AI",
    canonicalUrl: "https://axtrioai.com/research/rx-codex-v1-tiny",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ScholarlyArticle",
      "headline": "Development of the Rx_Codex_V1_Tiny Foundational Model",
      "author": {
        "@type": "Person",
        "name": "Rx MHA"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Axtrio AI"
      },
      "datePublished": "2024-12-24",
      "description": "Research paper on the development of Rx Codex V1-Tiny foundational AI model",
      "url": "https://axtrioai.com/research/rx-codex-v1-tiny",
      "mainEntityOfPage": "https://axtrioai.com/research/rx-codex-v1-tiny"
    }
  });

  const researchContent = (
    <div className="space-y-8">
      {/* Title */}
      <div className="space-y-4">
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
          Rx_Codex_V1_Tiny: A Journey in Foundational Model Development
        </h1>
        <div className="space-y-2 text-muted-foreground">
          <p><strong>Author:</strong> Rx, Rx Codex Ai</p>
          <p><strong>Date:</strong> August 2025</p>
        </div>
      </div>

      {/* Abstract */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Abstract</h2>
        <p className="text-muted-foreground leading-relaxed">
          This paper documents the creation and training of <span className="text-foreground font-medium">Rx_Codex_V1_Tiny</span>, a ~51M parameter Causal Language Model developed from scratch. This project represents a foundational step for Rx Codex Ai, with the ambitious goal of fostering AI development in Bangladesh and beyond. The model was built using a unique, iterative workflow and trained on approximately <span className="text-foreground font-medium">693 million tokens</span> of diverse, high-quality text data. We detail the entire process, from the initial architectural design and the decision to use a standard gpt2 tokenizer for stability, to the significant technical challenges encountered, such as a persistent "zero loss" bug that required a complete methodological reset. The paper presents a qualitative analysis of the model's emergent abilities, including early forms of Chain-of-Thought reasoning, a distinct conversational persona, and the first signs of factual recall and code generation. Finally, we outline the strategic roadmap for the Rx_Codex_V1 family, where the lessons learned from this "Tiny" model will inform the development of its more powerful successors.
        </p>
      </section>

      {/* Introduction */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Introduction</h2>
        <p className="text-muted-foreground leading-relaxed">
          The field of large language models has been defined by rapid progress, often driven by large, well-funded research labs. This project was born from a different premise: can a solo developer, driven by a clear vision, build a capable foundational model from the ground up? <span className="text-foreground font-medium">Rx_Codex_V1_Tiny</span> is the first answer to that question.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          As the first model in the Rx_Codex_V1 family, Tiny was designed not just as a final product, but as a research vessel. Its primary purpose was to establish a robust and repeatable training workflow, uncover the practical challenges of long-term training, and serve as a learning platform for building more powerful models in the future. This project is a significant step towards a larger goal: <span className="text-foreground font-medium">building the first major AI model from Bangladesh</span> and contributing to the global AI ecosystem.
        </p>
      </section>

      {/* Methodology */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Methodology</h2>
        <p className="text-muted-foreground leading-relaxed">
          Our approach was guided by a principle of starting simple and building complexity, learning and adapting with each step.
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium text-foreground mb-3">Architecture</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              While our initial target was a ~60M parameter model, we finalized an architecture that resulted in <span className="text-foreground font-medium">~51.48M parameters</span>. This decision was made to prioritize stability and faster iteration during the crucial initial training phases. The architecture is a standard decoder-only Transformer, built using the official GPT2LMHeadModel class from the Hugging Face transformers library.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3">The final configuration is:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
              <li><strong>Layers (n_layer):</strong> 8</li>
              <li><strong>Attention Heads (n_head):</strong> 8</li>
              <li><strong>Embedding Dimensions (n_embd):</strong> 512</li>
              <li><strong>Context Window (n_positions):</strong> 1024</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium text-foreground mb-3">Tokenization</h3>
            <p className="text-muted-foreground leading-relaxed">
              After early experiments with custom tokenizers led to complex data processing bugs, we made the strategic decision to use the <span className="text-foreground font-medium">standard, highly optimized gpt2 tokenizer</span> for this first model. This removed a significant variable and allowed us to focus entirely on the model's training and behavior. It has a vocabulary size of 50,257.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-foreground mb-3">Training Workflow: The MBN → N(X) System</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">I developed a modular workflow to manage the long-term training process:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li><strong>MBN (Model Building Notebook):</strong> A single, dedicated notebook for initializing the model from scratch and conducting its first-ever training run. This is the "birth" of the model.</li>
              <li><strong>N-Series Notebooks (N1, N2, ...):</strong> A series of sequential notebooks, where each N(X) notebook loads the checkpoint from N(X-1) and continues training on a new, unseen chunk of data. This modular approach makes the process manageable, debuggable, and easy to document.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Training Data */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Training Data</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The model was trained on a series of datasets, all in English.
        </p>
        <div className="space-y-4">
          <div>
            <p className="text-foreground font-medium mb-2">Main Pre-training:</p>
            <p className="text-muted-foreground leading-relaxed">
              The vast majority of training (~570M tokens) was performed on the <span className="text-foreground font-medium">rxcodex-dataset-v1</span>, a large and diverse collection of conversational and informational text.
            </p>
          </div>
          <div>
            <p className="text-foreground font-medium mb-2">Specialized Training:</p>
            <p className="text-muted-foreground leading-relaxed">
              The model was briefly trained on specialized math datasets to observe its ability to learn domain-specific knowledge.
            </p>
          </div>
          <div>
            <p className="text-foreground font-medium mb-2">Final Fine-Tuning:</p>
            <p className="text-muted-foreground leading-relaxed">
              The final stage of training was done on the <span className="text-foreground font-medium">rxcodex-finetune-dataset-v1</span>, a high-quality instruction and conversation dataset designed to align the model's behavior.
            </p>
          </div>
        </div>
      </section>

      {/* Training Procedure */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Training Procedure</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          All data was pre-processed using a "concatenate and chunk" strategy to create full-length, 1024-token sequences, ensuring high training efficiency.
        </p>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
          <li><strong>Total Tokens Trained:</strong> ~693 Million</li>
          <li><strong>Training Regime:</strong> fp16 mixed precision</li>
          <li><strong>Optimizer:</strong> torch.optim.AdamW</li>
          <li><strong>Learning Rate:</strong> 3e-4 for pre-training, lowered to 5e-5 and 5e-6 during fine-tuning</li>
          <li><strong>Gradient Accumulation:</strong> 16 steps</li>
        </ul>
      </section>

      {/* Challenges & Breakthroughs */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Challenges & Breakthroughs</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The journey was defined by a series of critical challenges that led to our most important learnings.
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium text-foreground mb-3">The "Zero Loss" Bug</h3>
            <p className="text-muted-foreground leading-relaxed">
              The project almost failed at the very beginning. Our initial attempts, using a custom-written model class, were plagued by a bug where the training loss would immediately drop to zero. After weeks of debugging data pipelines and tokenizer configurations, the breakthrough came when we <span className="text-foreground font-medium">abandoned the custom code entirely and rebuilt the model using the official, battle-tested GPT2LMHeadModel</span> from the transformers library. This was a crucial lesson: rely on standard, robust tools for the foundation.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-foreground mb-3">The Fine-Tuning Dilemma</h3>
            <p className="text-muted-foreground leading-relaxed">
              During the final fine-tuning phase, we observed the model's validation loss begin to increase after an initial drop. This was a classic case of overfitting. The model was memorizing the new data too aggressively. The solution was to <span className="text-foreground font-medium">drastically lower the learning rate</span>, allowing the model to learn the new information more gently without overwriting its existing knowledge. This experience was a key lesson in the delicate art of fine-tuning.
            </p>
          </div>
        </div>
      </section>

      {/* Results & Qualitative Analysis */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Results & Qualitative Analysis</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The final model, while small, demonstrates a range of impressive emergent abilities.
        </p>
        <ul className="list-disc list-inside space-y-3 text-muted-foreground ml-4">
          <li><strong className="text-foreground">Emergent Chain-of-Thought:</strong> The most significant result is the model's spontaneous development of a "Chain-of-Thought" reasoning process. When faced with a complex question, it often defaults to creating a Step 1... Step 2... plan before attempting an answer.</li>
          <li><strong className="text-foreground">Developing Persona:</strong> The model developed a distinct, helpful, and sometimes creative personality, using phrases like "Oh, little buddy!" and "Sure, I can help you with that!".</li>
          <li><strong className="text-foreground">Factual Recall:</strong> While still unstable, the model correctly answered several factual questions during testing.</li>
          <li><strong className="text-foreground">Early Coding Ability:</strong> The model learned to generate correctly formatted code blocks and could produce plausible Python code snippets.</li>
        </ul>
      </section>

      {/* Future Work */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Future Work: The Road Ahead</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The Rx_Codex_V1_Tiny project has provided an invaluable foundation. The lessons learned will directly inform the next, more ambitious models in the Rx_Codex_V1 family.
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
          <li><strong className="text-foreground">Rx_Codex_V1_Tiny_V2:</strong> The next project will be a short, experimental run to build and validate a new, more powerful custom tokenizer with a larger vocabulary and full emoji support.</li>
          <li><strong className="text-foreground">Rx_Codex_V1_Small:</strong> Once the new tokenizer and long-context architecture are perfected, we will begin building the next model in the family: a 125 Million parameter model trained on over 1 Billion tokens.</li>
        </ul>
      </section>

      {/* Conclusion */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Conclusion</h2>
        <p className="text-muted-foreground leading-relaxed">
          <span className="text-foreground font-medium">Rx_Codex_V1_Tiny is more than just a model; it's a proof of concept</span>. It proves that with persistence, a clear plan, and a willingness to learn from failure, it is possible to build a capable foundational model from the ground up. It represents the first successful step for Rx Codex Ai and our mission to contribute to the global AI landscape from Bangladesh. The journey has just begun.
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
              onClick={() => navigate('/research')}
              className="text-muted-foreground hover:bg-transparent mb-8 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:text-foreground transition-colors" />
            </Button>
            
            {/* Date */}
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
              AUGUST 24, 2025
            </p>
            
            {/* Title */}
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Rx Codex V1 Tiny Research Paper
            </h1>
            
            {/* Description */}
            <p className="text-lg text-muted-foreground mb-0 max-w-2xl leading-relaxed">
              Our Research Paper for Rx_Codex_V1_Tiny, Introducing Rx Codex V1 Tiny our most successful AI Model Ever
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-12">
            <div className="relative aspect-[16/9] max-w-4xl mx-auto rounded-2xl overflow-hidden">
              <img 
                src="/lovable-uploads/078e1354-7027-46ca-a893-fba511725070.png" 
                alt="Rx Codex V1 Tiny Research" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            {researchContent}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ResearchPaper;