"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  element: HTMLDivElement;
}

export const ParticleField = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particles = useRef<Particle[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const particleCount = 50;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const element = document.createElement("div");
      element.className = "absolute w-1 h-1 rounded-full bg-primary/30";
      container.appendChild(element);

      particles.current.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        element,
      });
    }

    // Animation loop
    const animate = () => {
      particles.current.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off walls
        if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1;
        if (particle.y < 0 || particle.y > window.innerHeight) particle.vy *= -1;

        gsap.set(particle.element, {
          x: particle.x,
          y: particle.y,
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      particles.current.forEach((particle) => particle.element.remove());
      particles.current = [];
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    />
  );
}; 