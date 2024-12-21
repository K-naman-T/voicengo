import { AboutUs } from "@/components/sections/about-us";
import { Contact } from "@/components/sections/contact";
import { FocusAreas } from "@/components/sections/focus-areas";
import { Hero } from "@/components/sections/hero";
import { ImpactStats } from "@/components/sections/impact-stats";
import { Team } from "@/components/sections/team";

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <FocusAreas />
      <AboutUs />
      <Team />    
      <Contact />
    </>
  );
}