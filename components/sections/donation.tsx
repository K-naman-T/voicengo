"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FadeIn } from "@/components/animations/fade-in";
import { GridBackground } from "@/components/animations/background-effects";
import { Heart } from "lucide-react";

export const Donation = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.1)",
        }}
      />
      <GridBackground />
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Support Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              Through our partnership with Donor Protocol, your contributions are securely managed using blockchain technology, ensuring transparency and maximum impact. Every donation helps us continue our mission since 1860.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Card className="max-w-md mx-auto p-6 bg-card/50 backdrop-blur-sm">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {[25, 50, 100, 250].map((amount) => (
                  <Button
                    key={amount}
                    variant="outline"
                    className="w-full hover:bg-primary hover:text-primary-foreground"
                  >
                    ${amount}
                  </Button>
                ))}
              </div>
              <div className="relative">
                <Input
                  type="number"
                  placeholder="Custom amount"
                  className="pl-6"
                />
                <span className="absolute left-2 top-1/2 -translate-y-1/2">$</span>
              </div>
              <Button className="w-full" size="lg">
                <Heart className="w-4 h-4 mr-2" /> Donate Now
              </Button>
              <p className="text-sm text-center text-muted-foreground">
                Secured by Donor Protocol. All donations are tax-deductible.
              </p>
            </div>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
};