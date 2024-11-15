"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import Image from 'next/image';

const backgroundImages = [
  {
    src: "https://www.prideindia.org/wp-content/uploads/2017/06/Milind_Case-5.jpg",
    alt: "Rural Education in India - Children studying together"
  },
  {
    src:"https://cdn.prod.website-files.com/65704935a8e57f2063618550/66cea2cebd97263aaa4a062d_Pinkishe%20Foundation%20Website%20Hero%20Image1.webp",
    alt: "Women Empowerment in Rural India"
  },
  {
    src: "https://ik.imagekit.io/bhavishya/web-final/LandingPage/hero2.png?updatedAt=1680110938984",
    alt: "Community Development in Indian Villages"
  },
  {
    src: "https://give.do/blog/wp-content/uploads/2022/09/Aarti-for-Girls-1-1024x575.jpg",
    alt: "Healthcare Initiatives in Rural India"
  }
];

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? backgroundImages.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out
            ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="absolute inset-0 bg-black/30 z-10" />
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            quality={85}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 
              ${index === currentIndex 
                ? 'bg-white w-6' 
                : 'bg-white/50 hover:bg-white/75'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-8 right-8 flex gap-2 z-20 md:right-12">
        <button
          onClick={prevSlide}
          className="h-10 w-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="h-10 w-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <FadeIn>
              <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white">
                Transforming Lives Through Community Empowerment
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-slate-200 mb-8">
                Join us in our mission to create lasting change through sustainable development 
                and community-driven initiatives across India.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                  Make a Difference
                  <ArrowRight className="ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-white border-white/20 hover:bg-white/10 w-full sm:w-auto"
                >
                  Learn More
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
};