import responsiveMockup from '@/assets/responsive-chat-mockup.png';
import { Monitor, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Responsive = () => {
  return (
    <section className="relative pt-8 lg:pt-12 pb-16 lg:pb-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[hsl(222,84%,3%)] to-transparent pointer-events-none z-20"></div>

      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 pointer-events-none"></div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[hsl(222,84%,3%)] to-transparent pointer-events-none z-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-xs sm:text-sm tracking-[0.25em] uppercase text-muted-foreground max-w-fit mb-12">
          [ RESPONSIVE ]
        </h2>

        <div className="relative w-full h-px mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/30 to-blue-500/20 blur-sm"></div>
        </div>

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
                className="group relative bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-6 text-base border border-white/20 hover:border-white/30 shadow-lg transition-all duration-300 overflow-hidden rounded-2xl"
                size="lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <Monitor className="w-5 h-5 mr-2" />
                <span className="relative z-10">Rx Codex WEB</span>
              </Button>

              <Button
                className="group relative bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-6 text-base border border-white/20 hover:border-white/30 shadow-lg transition-all duration-300 overflow-hidden rounded-2xl"
                size="lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <Smartphone className="w-5 h-5 mr-2" />
                <span className="relative z-10">ANDROID</span>
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img
              src={responsiveMockup}
              alt="Responsive AI chat interface mockup showing modern dark theme UI on laptop and mobile devices with interactive animations"
              className="relative max-w-full h-auto transform transition-transform duration-500 group-hover:scale-[1.02] drop-shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Responsive;