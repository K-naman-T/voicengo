"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface CountUpProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

export const CountUp = ({ value, duration = 2, prefix = "", suffix = "" }: CountUpProps) => {
  const ref = useRef(null);
  const [inViewRef, inView] = useInView({ once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setCurrentValue(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <motion.span ref={inViewRef} className="tabular-nums">
      {prefix}
      {inView ? currentValue.toLocaleString() : "0"}
      {suffix}
    </motion.span>
  );
};