"use client";

import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/fade-in";
import { Quote } from "lucide-react";
import { WaveBackground } from "@/components/animations/background-effects";

const testimonials = [
  {
    quote: "The vocational training program by Public Voice changed my life. I now run my own tailoring business and can support my family independently.",
    author: "Priya Sharma",
    role: "Program Beneficiary",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&auto=format&fit=crop&crop=face",
  },
  {
    quote: "Working with the HIV/AIDS prevention program has shown me how dedicated The Public Voice is to community health and awareness.",
    author: "Dr. Rajesh Kumar",
    role: "Healthcare Partner",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&auto=format&fit=crop&crop=face",
  },
  {
    quote: "The transparency provided by Donor Protocol's blockchain system gives us complete confidence in our contributions to Public Voice.",
    author: "Sarah Chen",
    role: "Regular Donor",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&auto=format&fit=crop&crop=face",
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <WaveBackground />
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