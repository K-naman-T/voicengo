"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FadeIn } from "@/components/animations/fade-in";
import { Heart } from "lucide-react";

export const Donation = () => {
  return (
    <section id="donate" className="py-20">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Make a Difference Today</h2>
            <p className="text-lg text-muted-foreground">
              Your contribution helps us continue our mission of empowering communities and transforming lives.
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