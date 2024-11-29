"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { CountUp } from "@/components/animations/count-up";
import { GridBackground } from "@/components/animations/background-effects";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const stats = [
  { 
    value: 150000, 
    label: "Lives Impacted", 
    suffix: "+",
    icon: "👥"
  },
  { 
    value: 50000, 
    label: "Skill Trained", 
    suffix: "+",
    icon: "🎓"
  },
  { 
    value: 15, 
    label: "Indian States Reached", 
    suffix: "+",
    icon: "🗺️"
  },
  { 
    value: 5000, 
    label: "Women Empowered", 
    suffix: "+",
    icon: "💪"
  },
];

export const ImpactStats = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <section id="impact" className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 -z-20 bg-gradient-to-b from-background to-background/80"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          opacity: 0.15,
        }}
      />
      <GridBackground />
      
      <div className="container mx-auto px-4 relative" ref={ref}>
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-4">Our Impact</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Through dedication and community support, we've achieved significant milestones 
            in our mission to empower communities across India.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="text-center backdrop-blur-sm p-4 md:p-6 rounded-lg border border-primary/10 hover:border-primary/20 transition-colors">
                <div className="text-3xl md:text-4xl mb-3">{stat.icon}</div>
                <div className="text-2xl md:text-4xl font-bold text-primary mb-2">
                  {hasAnimated ? (
                    <CountUp
                      value={stat.value}
                      suffix={stat.suffix}
                      duration={2}
                      separator=","
                    />
                  ) : (
                    <span>0{stat.suffix}</span>
                  )}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};