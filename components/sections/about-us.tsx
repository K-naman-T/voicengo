"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Heart, Scale, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const visionMission = [
  {
    icon: Globe,
    title: "Who We Are",
    content: "Voice (Public Voice) is an Indian origin, 21 year old Humanitarian NGO headquartered in Delhi. Working on International Cultural exchange, Women empowerment, Reducing Health disparity and promoting education quality.",
    highlight: "21 years of impact",
    color: "from-blue-500/20 to-transparent"
  },
  {
    icon: Scale,
    title: "Our Vision",
    content: "Public voice visualizes a society where peace, equality, social justice and economic Wellbeing Prevails.",
    highlight: "Equality & Justice",
    color: "from-purple-500/20 to-transparent"
  },
  {
    icon: Heart,
    title: "Our Mission",
    content: "Awaken the underprivileged towards self reliance and sustainable development.",
    highlight: "Sustainable Change",
    color: "from-rose-500/20 to-transparent"
  }
];

export const AboutUs = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10 bg-grid-pattern" />
      <div className="container mx-auto px-4 relative">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Us</h2>
            <p className="text-lg text-muted-foreground">
              We work with secular principles and perspectives, giving importance to human values 
              for individuals and the community as a whole.
            </p>
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {visionMission.map((item, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <Card className="relative h-full bg-background/60 backdrop-blur-sm hover:shadow-xl transition-all duration-500 group">
                <div className={`absolute inset-0 bg-gradient-to-b ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`} />
                <CardContent className="relative p-8">
                  <div className="mb-6">
                    <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-500">
                      <item.icon className="w-8 h-8" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                    <div className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                      {item.highlight}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6}>
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="group hover:bg-primary hover:text-primary-foreground"
            >
              Learn More About Our Work
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};