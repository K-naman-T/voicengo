"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import gsap from "gsap";
import Image from 'next/image';

export const Hero = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    gsap.to(textRef.current, {
      backgroundPositionX: "200%",
      duration: 5,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <section className="pt-24 pb-16 px-4 min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Community Impact"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Dark Overlay Layer */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content Layer */}
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl">
          <FadeIn>
            <h1 
              ref={textRef}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] bg-clip-text text-transparent"
            >
              Empowering Communities, Transforming Lives
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-slate-200 md:text-2xl mb-8 text-muted-foreground">
              Join us in creating lasting change through sustainable development and community empowerment.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <Button size="lg" className="group">
              Make a Difference 
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};