"use client";

import { useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Hero } from "@/components/sections/hero";
import { ImpactStats } from "@/components/sections/impact-stats";
import { FocusAreas } from "@/components/sections/focus-areas";
import { Testimonials } from "@/components/sections/testimonials";
import { Donation } from "@/components/sections/donation";
import { Contact } from "@/components/sections/contact";
import { AnimatedBackground } from "@/components/animations/animated-background";

export default function Home() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gradient">The Public Voice</h1>
          <div className="flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList className="hidden md:flex">
                <NavigationMenuItem>
                  <NavigationMenuLink className="px-3 py-2 hover:text-primary transition-colors" href="#mission">
                    Mission
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="px-3 py-2 hover:text-primary transition-colors" href="#impact">
                    Impact
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="px-3 py-2 hover:text-primary transition-colors" href="#donate">
                    Donate
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="px-3 py-2 hover:text-primary transition-colors" href="#contact">
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "light" ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <ImpactStats />
        <FocusAreas />
        <Testimonials />
        <Donation />
        <Contact />
      </main>

      <footer className="py-8 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 The Public Voice NGO. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}