"use client";

import { useState } from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { Card } from "@/components/ui/card";
import { GridBackground } from "@/components/animations/background-effects";
import { Linkedin, Mail, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const team = [
  {
    name: "Mohd Asif",
    role: "President",
    bio: "I hold a Master's in Commerce from Delhi University and bring 25 years of business experience. I founded Public Voice in 2003, a pan-India voluntary organization focused on health, education, women's empowerment, and environmental sustainability, driving positive change nationwide.",
    linkedin: "#",
    email: "asif@publicvoice.org",
    achievements: ["25+ years in business", "International trade expert", "Community leadership"]
  },
  {
    name: "S. Mohd. Rehber Abidi",
    role: "Treasurer",
    bio: "As a doctor, I've always believed everyone deserves basic healthcare. I've worked with social organizations since college. Now, as Treasurer at Public Voice (a government-registered organization), I'm driven to create a healthier India. We partner with governments to implement impactful projects, benefiting under-resourced communities nationwide.",
    linkedin: "#",
    email: "rehber@publicvoice.org",
    achievements: ["MBBS, MD qualified", "Healthcare expert", "Financial management"]
  },
  {
    name: "R. Ganapathy",
    role: "Member",
    bio: "I'm honored to join VOICE NGO as Director of Education, contributing to initiatives in health, education, women's empowerment, agriculture, and sustainability. My Indian Air Force background has instilled dedication, discipline, and resilience, which I bring to empowering communities. With over 20 years of coaching experience, I'm eager to work with a passionate team to advance educational opportunities and positively shape lives, striving for a sustainable, equitable future for all.",
    linkedin: "#",
    email: "#",
    achievements: ["20+ years coaching experience", "Indian Air Force veteran", "Education specialist"]
  },
  {
    name: "R. Ganapathy",
    role: "Member",
    bio:"As an advocate at the Delhi Court, I'm honored to join this esteemed NGO, aligning my skills and passion with meaningful action. I'm committed to addressing critical social issues in health, education, women's empowerment, agriculture, and sustainability. I look forward to working with a dedicated team to drive change, amplify voices, and contribute to a better, more sustainable future for all.",
    linkedin: "#",
    email: "#",
    achievements: ["Delhi Court advocate", "Legal expertise", "Social justice advocate"]
  }
];

export const Team = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="team" className="py-20 relative overflow-hidden">
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
              <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm h-full">
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
                  
                  <div className="relative flex-grow mb-6">
                    <p className={cn(
                      "text-muted-foreground transition-all duration-300",
                      !expandedCards.includes(index) && "line-clamp-3"
                    )}>
                      {member.bio}
                    </p>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full mt-2 hover:bg-primary/10 hover:text-primary"
                      onClick={() => toggleCard(index)}
                    >
                      {expandedCards.includes(index) ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                      <span className="ml-2">
                        {expandedCards.includes(index) ? "Show less" : "Read more"}
                      </span>
                    </Button>
                  </div>
                  
                  <div className="space-y-4 mt-auto">
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