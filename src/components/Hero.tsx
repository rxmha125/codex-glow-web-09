import { Button } from '@/components/ui/button';
import { useEffect, useState, useRef } from 'react';
interface Particle {
  id: number;
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const containerRef = useRef<HTMLElement>(null);
  const animationFrameRef = useRef<number>();
  useEffect(() => {
    setIsVisible(true);

    // Initialize particles - increased from 50 to 100
    const initialParticles: Particle[] = Array.from({
      length: 100
    }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      baseX: Math.random() * window.innerWidth,
      baseY: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.1,
      vy: (Math.random() - 0.5) * 0.1,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.6 + 0.2
    }));
    setParticles(initialParticles);
  }, []);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  useEffect(() => {
    const animateParticles = () => {
      setParticles(prevParticles => prevParticles.map(particle => {
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Very smooth attraction force towards mouse when close
        const attractionRange = 150;
        let attractionX = 0;
        let attractionY = 0;
        if (distance < attractionRange && distance > 0) {
          const force = (attractionRange - distance) / attractionRange;
          const ultraSmoothForce = Math.pow(force, 3); // Cubic easing for ultra smooth movement
          attractionX = dx / distance * ultraSmoothForce * 0.15;
          attractionY = dy / distance * ultraSmoothForce * 0.15;
        }

        // Ultra gentle return to base position
        const returnForceX = (particle.baseX - particle.x) * 0.0005;
        const returnForceY = (particle.baseY - particle.y) * 0.0005;

        // Update velocity with ultra smooth acceleration
        let newVx = particle.vx + attractionX + returnForceX;
        let newVy = particle.vy + attractionY + returnForceY;

        // Very gentle damping for ultra smooth movement
        newVx *= 0.996;
        newVy *= 0.996;

        // Limit maximum velocity for ultra stability
        const maxVelocity = 1.5;
        const velocityMagnitude = Math.sqrt(newVx * newVx + newVy * newVy);
        if (velocityMagnitude > maxVelocity) {
          newVx = newVx / velocityMagnitude * maxVelocity;
          newVy = newVy / velocityMagnitude * maxVelocity;
        }

        // Update position
        let newX = particle.x + newVx;
        let newY = particle.y + newVy;

        // Very soft boundary bounce
        if (newX < 0 || newX > window.innerWidth) {
          newVx *= -0.9;
          newX = Math.max(0, Math.min(window.innerWidth, newX));
        }
        if (newY < 0 || newY > window.innerHeight) {
          newVy *= -0.9;
          newY = Math.max(0, Math.min(window.innerHeight, newY));
        }
        return {
          ...particle,
          x: newX,
          y: newY,
          vx: newVx,
          vy: newVy
        };
      }));
      animationFrameRef.current = requestAnimationFrame(animateParticles);
    };
    animationFrameRef.current = requestAnimationFrame(animateParticles);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePosition]);
  const handleButtonClick = () => {
    window.open('https://www.chat.rxcodexai.com', '_blank');
  };
  return <section id="home" ref={containerRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-dark-gradient"></div>

      {/* Interactive particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map(particle => <div key={particle.id} className="absolute bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 rounded-full" style={{
        left: `${particle.x}px`,
        top: `${particle.y}px`,
        width: `${particle.size}px`,
        height: `${particle.size}px`,
        opacity: particle.opacity,
        transform: 'translate(-50%, -50%)',
        boxShadow: `0 0 ${particle.size * 3}px rgba(168, 85, 247, ${particle.opacity * 0.8})`,
        transition: 'none'
      }} />)}
      </div>

      <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 bg-gradient-to-r from-orange-300 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-shift bg-300%">Rx Codex AI</h1>

        <p className="text-2xl md:text-4xl text-gray-300 mb-12 font-light">
          Advanced AI Models from Bangladesh
        </p>

        <Button onClick={handleButtonClick} className="bg-white/5 backdrop-blur-md border border-white/20 text-white hover:bg-white/10 hover:border-white/30 px-8 py-5 text-lg rounded-full font-medium transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_24px_rgba(0,0,0,0.4)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(255,255,255,0.1)] pointer-events-auto cursor-pointer">Try Rx Codex</Button>
      </div>
    </section>;
};
export default Hero;