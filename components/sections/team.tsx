"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Card } from "@/components/ui/card";
import { GridBackground } from "@/components/animations/background-effects";
import { Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
  
const team = [
  {
    name: "Mohd Asif",
    role: "President",
    bio: "Master's degree in Commerce from Delhi University with 25 years of business experience in petrochemical products import.",
    linkedin: "#",
    email: "asif@publicvoice.org",
    achievements: ["25+ years in business", "International trade expert", "Community leadership"]
  },
  {
    name: "S. Mohd. Rehber Abidi",
    role: "Treasurer",
    bio: "MBBS and MD qualified surgeon at E.S.I. Hospital with extensive experience in social healthcare organizations.",
    linkedin: "#",
    email: "rehber@publicvoice.org",
    achievements: ["MBBS, MD qualified", "Healthcare expert", "Financial management"]
  }
];

export const Team = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <GridBackground />
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-4">Our Team</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Meet the dedicated individuals who work tirelessly to make our mission a reality.
          </p>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-primary">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 flex-grow">{member.bio}</p>
                  
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {member.achievements.map((achievement, i) => (
                        <span 
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-2 pt-4 border-t">
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="hover:bg-primary/10 hover:text-primary"
                        asChild
                      >
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4 mr-2" />
                          LinkedIn
                        </a>
                      </Button>
                      <Button 
                        size="sm" 
                        variant="ghost"
                        className="hover:bg-primary/10 hover:text-primary"
                        asChild
                      >
                        <a href={`mailto:${member.email}`}>
                          <Mail className="h-4 w-4 mr-2" />
                          Email
                        </a>
                      </Button>
                    </div>
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