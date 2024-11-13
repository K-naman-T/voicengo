"use client";

import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/fade-in";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The Public Voice NGO transformed our community through their healthcare initiatives. We now have access to quality medical care that was once out of reach.",
    author: "Sarah Johnson",
    role: "Community Leader",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&crop=face",
  },
  {
    quote: "Thanks to their education programs, I was able to complete my studies and secure a better future for my family. Their impact goes beyond just education.",
    author: "Michael Chen",
    role: "Program Beneficiary",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop&crop=face",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-16">Voices of Change</h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <Card className="p-6 bg-card/50 backdrop-blur-sm">
                <Quote className="w-10 h-10 text-primary mb-4" />
                <p className="text-lg mb-6 text-muted-foreground">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};