import responsiveMockup from '@/assets/responsive-chat-mockup.png';

const Responsive = () => {
  return (
    <section className="pt-8 lg:pt-12 pb-16 lg:pb-24">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-xs sm:text-sm tracking-[0.25em] uppercase text-muted-foreground max-w-fit mb-12">
          [ RESPONSIVE ]
        </h2>
        
        {/* Separator line */}
        <div className="w-full h-px bg-white/10 mb-2"></div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Responsive chat interface
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Awesome AI experience with modern animations & dark themed UI
            </p>
          </div>
          
          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img 
              src={responsiveMockup} 
              alt="Responsive chat interface mockup showing laptop and mobile devices"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Responsive;