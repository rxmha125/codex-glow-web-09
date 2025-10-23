import responsiveMockup from '@/assets/responsive-chat-mockup.png';
import { Monitor, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Responsive = () => {
  return (
    <section className="pt-8 lg:pt-12 pb-16 lg:pb-24">
      <div className="container mx-auto px-4">
        <h2 className="text-xs sm:text-sm tracking-[0.25em] uppercase text-muted-foreground max-w-fit mb-12">
          [ RESPONSIVE ]
        </h2>

        <div className="w-full h-px bg-white/10 mb-8"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight bg-gradient-to-r from-white via-white to-blue-200 bg-clip-text text-transparent">
                Responsive chat interface
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed tracking-wide">
                Awesome AI experience with modern animations & dark themed UI
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                variant="glass"
                size="lg"
                className="px-8 py-6 text-lg rounded-full font-medium"
              >
                <Monitor className="w-5 h-5 mr-2" />
                Rx Codex WEB
              </Button>

              <Button
                variant="glass"
                size="lg"
                className="px-8 py-6 text-lg rounded-full font-medium"
              >
                <Smartphone className="w-5 h-5 mr-2" />
                ANDROID
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={responsiveMockup}
              alt="Responsive AI chat interface mockup showing modern dark theme UI on laptop and mobile devices with interactive animations"
              className="max-w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Responsive;