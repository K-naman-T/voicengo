"use client";

import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/fade-in";
import { Heart, BookOpen, Users } from "lucide-react";
import { GridBackground } from "@/components/animations/background-effects";

const areas = [
  {
    icon: Heart,
    title: "Healthcare & HIV/AIDS Prevention",
    description: "Providing essential medical services, HIV/AIDS awareness, and prevention programs targeting vulnerable communities.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: BookOpen,
    title: "Women Empowerment",
    description: "Offering vocational training, technical education, and empowerment programs to help women achieve economic independence.",
    image: "https://images.unsplash.com/photo-1489389944381-3471b5b30f04?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Users,
    title: "Community Development",
    description: "Working with J.J. slum dwellers in Delhi and surrounding areas to create sustainable development opportunities.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800",
  },
];

export const FocusAreas = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <GridBackground />
      <div className="container mx-auto px-4 relative">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Focus Areas
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm group overflow-hidden">
                <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20" />
                </div>
                <area.icon className="w-12 h-12 text-primary mb-4 transition-transform group-hover:scale-110" />
                <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                <p className="text-muted-foreground">{area.description}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};