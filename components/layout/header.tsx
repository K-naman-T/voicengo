"use client";

import Link from "next/link";
import { useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const impactItems = [
  {
    title: "Projects",
    href: "/#projects",
    description: "Explore our ongoing and completed projects across India."
  },
  {
    title: "NGO Partners",
    href: "/#partners",
    description: "Our network of NGO partners working together for change."
  },
  {
    title: "CSR Partners",
    href: "/#partners",
    description: "Corporate partners supporting our mission through CSR initiatives."
  },
  {
    title: "Impact Stats",
    href: "/#impact",
    description: "See the measurable impact of our work across communities."
  }
];

const aboutItems = [
  { 
    title: "About Us", 
    href: "/#about",
    description: "Learn about our organization and mission"
  },
  { 
    title: "Vision & Mission", 
    href: "/#vision-mission",
    description: "Our vision and mission for a better future"
  },
  { 
    title: "Our Team", 
    href: "/#team",
    description: "Meet our dedicated team members"
  },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = href.replace('/', '');
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center space-x-2">
          <Heart className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Public Voice</span>
        </Link>

        <div className="hidden md:flex items-center space-x-4">
          <nav>
            <ul className="flex space-x-4">
              {aboutItems.map((item) => (
                <li key={item.title}>
                  <Link 
                    href={item.href} 
                    onClick={(e) => handleScroll(e, item.href)} 
                    className="text-sm font-medium hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Button 
            asChild 
            className="ml-4"
            onClick={(e) => handleScroll(e as any, '/#donate')}
          >
            <Link href="/#donate">Donate Now</Link>
          </Button>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-primary">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/80 p-4">
          <nav>
            <ul className="flex flex-col space-y-2">
              {aboutItems.map((item) => (
                <li key={item.title}>
                  <Link 
                    href={item.href} 
                    onClick={(e) => {
                      handleScroll(e, item.href);
                      setIsMenuOpen(false); // Close menu on item click
                    }} 
                    className="block text-sm font-medium hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}