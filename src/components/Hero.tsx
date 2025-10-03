import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleButtonClick = () => {
    window.open('https://www.chat.rxcodexai.com', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <iframe
        src="https://my.spline.design/futuristicraysbackground-fhWJMMH9maD6d8HME2FDDUIz/"
        className="absolute inset-0 w-full h-full border-0"
        style={{ pointerEvents: 'none' }}
      />

      <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 bg-gradient-to-r from-orange-300 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-shift bg-300%">
          Rx Codex AI
        </h1>

        <p className="text-2xl md:text-4xl text-gray-300 mb-12 font-light">
          Advanced AI Models from Bangladesh
        </p>

        <Button
          onClick={handleButtonClick}
          className="glow-button text-white px-8 py-4 text-lg rounded-lg font-medium animate-glow-pulse pointer-events-auto cursor-pointer"
        >
          Try Rx Codex
        </Button>
      </div>
    </section>
  );
};

export default Hero;