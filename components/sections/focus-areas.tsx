"use client";

import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/fade-in";
import { Heart, BookOpen, Users } from "lucide-react";

const areas = [
  {
    icon: Heart,
    title: "Healthcare Access",
    description: "Providing essential medical services and healthcare education to underserved communities worldwide.",
  },
  {
    icon: BookOpen,
    title: "Education & Training",
    description: "Empowering individuals through quality education, vocational training, and skill development programs.",
  },
  {
    icon: Users,
    title: "Community Development",
    description: "Building sustainable communities through infrastructure development and social empowerment initiatives.",
  },
];

export const FocusAreas = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Focus Areas
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300 bg-card/50 backdrop-blur-sm">
                <area.icon className="w-12 h-12 text-primary mb-4" />
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