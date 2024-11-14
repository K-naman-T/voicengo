"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export const WaveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const waves = Array.from({ length: 3 }, (_, i) => ({
      y: canvas.height / 2,
      length: 0.01 - i * 0.002,
      amplitude: 90 - i * 20,
      frequency: 0.01,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      waves.forEach((wave, i) => {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);
        
        for (let x = 0; x < canvas.width; x++) {
          const dx = x * wave.length;
          const y = wave.y + Math.sin(dx - wave.frequency) * wave.amplitude;
          ctx.lineTo(x, y);
        }

        ctx.strokeStyle = `hsla(var(--primary), ${0.05 - i * 0.01})`;
        ctx.stroke();
        wave.frequency += 0.02;
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 opacity-50"
    />
  );
};

export const GridBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const points = Array.from({ length: 50 }, () => {
      const point = document.createElement("div");
      point.className = "absolute w-1 h-1 rounded-full bg-primary/20";
      containerRef.current?.appendChild(point);
      return point;
    });

    gsap.to(points, {
      scale: "random(0.5, 1.5)",
      opacity: "random(0.3, 0.7)",
      duration: "random(1, 2)",
      repeat: -1,
      yoyo: true,
      stagger: {
        amount: 2,
        grid: "auto",
        from: "random",
      },
    });

    return () => points.forEach(point => point.remove());
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10"
      style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, var(--primary-color) 1px, transparent 0)",
        backgroundSize: "40px 40px",
        opacity: 0.1,
      }}
    />
  );
}; 