import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

export const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-4 min-h-[90vh] flex items-center relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
        }}
      />
      <div className="container mx-auto relative">
        <div className="max-w-3xl">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Empowering Communities, Transforming Lives
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Join us in creating lasting change through sustainable development and community empowerment.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <Button size="lg">
              Make a Difference <ArrowRight className="ml-2" />
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};