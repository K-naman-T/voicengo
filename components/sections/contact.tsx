"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FadeIn } from "@/components/animations/fade-in";
import { Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-16">Get Involved</h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <FadeIn delay={0.2}>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <MapPin className="text-primary" />
                  <span>123 Impact Street, Global City, 10001</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-primary" />
                  <span>contact@publicvoice.org</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <form className="space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Email Address" />
              <Textarea placeholder="Your Message" className="min-h-[120px]" />
              <Button className="w-full">Send Message</Button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};