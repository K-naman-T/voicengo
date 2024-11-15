"use client";

import { useState } from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { Card } from "@/components/ui/card";
import { GridBackground } from "@/components/animations/background-effects";
import { Heart, GraduationCap, ActivityIcon, Users, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";

const areas = [
  {
    icon: Heart,
    title: "Healthcare & HIV/AIDS Prevention",
    description: "Providing essential medical services, HIV/AIDS awareness, and prevention programs targeting vulnerable communities.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: ActivityIcon,
    title: "Action Research",
    description: "Sickle Cell Control and Treatment for Comprehensive Tribal health program. Program consists of Survey, Health Promotion, Testing and Case management.",
    image: "/images/Action.jpeg",
  },
  {
    icon: GraduationCap,
    title: "Skill Development Centers",
    description: "Operating Vocational skill training Centers Pan India, offering courses in Cutting & Tailoring, Fashion Designing, Beauty Parlors, Handicraft, Computer Awareness, and more.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Users,
    title: "Community Development",
    description: "Working with J.J. slum dwellers in Delhi and surrounding areas to create sustainable development opportunities.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800",
  },
];

export const FocusAreas = () => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    description: string;
  } | null>(null);

  return (
    <>
      <section className="py-20 relative overflow-hidden">
        <GridBackground />
        <div className="container mx-auto px-4 relative">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-6">
              Our Focus Areas
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              Discover the key areas where we're making a difference in communities across India.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {areas.map((area, index) => (
              <FadeIn key={index} delay={index * 0.2}>
                <Card 
                  className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedImage({
                    src: area.image,
                    title: area.title,
                    description: area.description
                  })}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={area.image}
                      alt={area.title}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <area.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{area.title}</h3>
                    </div>
                    <p className="text-muted-foreground line-clamp-3">{area.description}</p>
                    <Button 
                      variant="ghost" 
                      className="mt-4 w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      Learn More
                    </Button>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Dialog 
        open={selectedImage !== null} 
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-5xl w-full p-0 overflow-hidden bg-background/80 backdrop-blur-lg">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4 z-50 bg-background/80 hover:bg-background"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-4 w-4" />
            </Button>
            
            {selectedImage && (
              <div className="grid md:grid-cols-2">
                <div className="relative h-[300px] md:h-[600px]">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col">
                  <h3 className="text-2xl font-bold mb-4">{selectedImage.title}</h3>
                  <p className="text-muted-foreground">{selectedImage.description}</p>
                  <div className="mt-8">
                    <h4 className="font-semibold mb-4">Key Achievements</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span>Over 1000+ beneficiaries reached</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span>15 states covered across India</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span>90% success rate in program implementation</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-auto pt-8">
                    <Button className="w-full">Get Involved</Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};