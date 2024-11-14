"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { CountUp } from "@/components/animations/count-up";
import { GridBackground } from "@/components/animations/background-effects";

const stats = [
  { value: 150000, label: "Lives Impacted", suffix: "+" },
  { value: 50, label: "Delhi Communities Served", suffix: "+" },
  { value: 15, label: "Indian States Reached", suffix: "+" },
  { value: 5000, label: "Women Empowered", suffix: "+" },
];

export const ImpactStats = () => {
  return (
    <section id="impact" className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.1)",
        }}
      />
      <GridBackground />
      <div className="container mx-auto px-4 relative">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-16">Our Impact</h2>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="text-center backdrop-blur-sm p-6 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">
                  <CountUp
                    value={stat.value}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};