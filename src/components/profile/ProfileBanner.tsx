import { useState, useEffect, useRef } from 'react';
import profileBanner from '@/assets/profile-banner.jpg';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

const ProfileBanner = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize particles
    const initialParticles: Particle[] = [];
    for (let i = 0; i < 20; i++) {
      initialParticles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }
    setParticles(initialParticles);

    // Animate particles
    const interval = setInterval(() => {
      setParticles(prev => prev.map(p => ({
        ...p,
        x: (p.x + p.vx + 100) % 100,
        y: (p.y + p.vy + 100) % 100,
      })));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative h-[220px] sm:h-[280px] bg-muted overflow-hidden group"
    >
      {/* Background image */}
      <img 
        src={profileBanner} 
        alt="Profile banner - Rx Codex AI branding"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-purple-500/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-primary/40"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              transition: 'left 0.05s linear, top 0.05s linear',
            }}
          />
        ))}
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-4 left-4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl" />
    </div>
  );
};

export default ProfileBanner;
