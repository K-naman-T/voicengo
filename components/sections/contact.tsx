"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FadeIn } from "@/components/animations/fade-in";
import { Mail, MapPin, Phone, Loader2 } from "lucide-react";
import { WaveBackground } from "@/components/animations/background-effects";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    setIsLoading(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <WaveBackground />
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-4">Get Involved</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Have questions or want to contribute? Reach out to us and become part of our mission 
            to create positive change.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
              <div className="space-y-6">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="text-primary h-5 w-5" />
                  </div>
                  <span>5216 Basant Road, Pahar Ganj New DELHI - 110055</span>
                </a>
                
                <a 
                  href="mailto:shandeepang@gmail.com"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="text-primary h-5 w-5" />
                  </div>
                  <span>shandeepang@gmail.com</span>
                </a>
                
                <a 
                  href="tel:+919082869501"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="text-primary h-5 w-5" />
                  </div>
                  <span>+91 90828 69501</span>
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input 
                placeholder="Your Name" 
                required 
                disabled={isLoading}
              />
              <Input 
                type="email" 
                placeholder="Email Address" 
                required
                disabled={isLoading}
              />
              <Textarea 
                placeholder="Your Message" 
                className="min-h-[120px]" 
                required
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};