"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { CountUp } from "@/components/animations/count-up";

const stats = [
  { value: 50000, label: "Lives Impacted", suffix: "+" },
  { value: 120, label: "Communities Served", suffix: "+" },
  { value: 25, label: "Countries Reached", suffix: "+" },
  { value: 2, label: "Funds Raised", prefix: "$", suffix: "M+" },
];

export const ImpactStats = () => {
  return (
    <section id="impact" className="py-20">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-16">Our Impact</h2>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  <CountUp
                    value={stat.value}
                    prefix={stat.prefix}
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