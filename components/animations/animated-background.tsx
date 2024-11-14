"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface AnimatedBackgroundProps {
  variant?: "circles" | "dots" | "grid";
  color?: string;
  density?: number;
  speed?: number;
}

export const AnimatedBackground = ({
  variant = "circles",
  color = "primary",
  density = 20,
  speed = 10
}: AnimatedBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = Array.from({ length: density }).map(() => {
      const element = document.createElement("div");
      
      if (variant === "circles") {
        element.className = `absolute rounded-full bg-${color}/5 backdrop-blur-3xl`;
        const size = Math.random() * 200 + 100;
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
      } else if (variant === "dots") {
        element.className = `absolute w-1 h-1 rounded-full bg-${color}/20`;
      }
      
      containerRef.current?.appendChild(element);
      return element;
    });

    elements.forEach((element) => {
      gsap.set(element, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      });

      gsap.to(element, {
        x: `random(0, ${window.innerWidth})`,
        y: `random(0, ${window.innerHeight})`,
        duration: `random(${speed}, ${speed * 2})`,
        repeat: -1,
        ease: "power1.inOut",
        yoyo: true,
      });
    });

    return () => {
      elements.forEach((element) => element.remove());
    };
  }, [variant, color, density, speed]);

  if (variant === "grid") {
    return (
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--${color}) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
          opacity: 0.1,
        }}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
    />
  );
}; 