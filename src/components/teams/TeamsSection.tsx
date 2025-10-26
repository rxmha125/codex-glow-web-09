import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import teamMemberImage from "@/assets/team-member.jpg";

const TeamsSection = () => {
  // Team member positions
  const teamsData = [
    { 
      position: "Founder & CEO", 
      name: "Rx MHA", 
      description: "I'm Rx, the Founder & CEO of Rx Codex AI. We're dedicated to advancing AI development right here in Bangladesh—pushing boundaries and making waves in the tech scene." 
    },
    { 
      position: "Web Development", 
      name: "Rx MHA", 
      description: "I'm also the web developer, crafting and refining the interfaces for all Rx Codex AI sites. Yep, including this one you're on right now—making sure it's smooth and user-friendly." 
    },
    { 
      position: "Management", 
      name: "Rx MHA", 
      description: "I handle all the management too. Guess what? Same guy pulling the strings behind the scenes to keep everything running like clockwork." 
    },
    { 
      position: "Researcher", 
      name: "Rx MHA", 
      description: "As the researcher, I dive deep into AI architectures, designing innovative models and chasing those groundbreaking inventions that could change the game." 
    },
    { 
      position: "AI Architect", 
      name: "Rx MHA", 
      description: "I'm the core AI architect—the one who builds the final models, writes the code, handles training, and assembles everything needed. Basically, I turn ideas into reality. Haha, yep, same guy again." 
    },
    { 
      position: "Designing", 
      name: "Rx MHA", 
      description: "I take care of the designs too - graphics, web UIs, and whatever else pops up. Keeping things visually sharp and on-brand, all by yours truly." 
    }
  ];

  // Create team member cards with semantic HTML
  const teamCards = teamsData.map((member, index) => (
    <article key={index} itemScope itemType="https://schema.org/Person">
      <Card className="h-96 w-80 shrink-0 rounded-2xl border border-white/10 bg-white/5 card-shadow-responsive overflow-hidden relative">
        <CardHeader className="text-center pb-2 pt-4">
          <CardTitle className="text-white text-lg font-semibold" itemProp="jobTitle">
            {member.position}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="px-6 py-3 pb-16 flex flex-col items-center">
          <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-white/20 mb-3">
            <img 
              src={teamMemberImage} 
              alt={`Rx MHA - ${member.position} at Rx Codex AI`}
              className="w-full h-full object-cover"
              itemProp="image"
            />
          </div>
          
          <h4 className="text-white text-base font-semibold mb-2" itemProp="name">
            {member.name}
          </h4>
          
          <p className="text-white/70 text-xs text-center leading-relaxed mb-3" itemProp="description">
            {member.description}
          </p>
          <meta itemProp="worksFor" content="Rx Codex AI" />
        </CardContent>
        
        <CardFooter className="absolute bottom-4 left-6 right-6">
          <div className="flex flex-col items-center w-full">
            <div className="flex items-center text-white/60 text-xs">
              <span className="flex items-center">
                Team Card |
                <img src="/lovable-uploads/ecca2066-2f6c-41b4-b1d7-eddaafc991d2.png" alt="Rx Codex Logo" className="w-5 h-5 object-contain mx-1" />
                Rx Codex AI
              </span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </article>
  ));

  return (
    <section className="py-16 lg:py-24 overflow-x-hidden">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-xs sm:text-sm tracking-[0.25em] uppercase text-white/70 max-w-fit mb-12">
          [ TEAMS ]
        </h2>
        
        {/* Ticker Container - Full viewport width on desktop */}
        <div className="relative overflow-hidden -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-16 xl:-mx-24 2xl:-mx-32">
          {/* Side fade masks */}
          <div className="fade-mask-left" />
          <div className="fade-mask-right" />
          
          {/* Ticker Track */}
          <div className="flex w-max gap-6 animate-ticker hover:[animation-play-state:paused] pl-4 sm:pl-6 md:pl-8 lg:pl-16 xl:pl-24 2xl:pl-32 scrollbar-transparent" style={{
            '--ticker-duration': '40s'
          } as React.CSSProperties}>
            {/* First set of cards */}
            {teamCards}
            {/* Duplicate set for seamless loop */}
            {teamCards}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;
