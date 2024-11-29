"use client";

import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

interface CountUpProps {
  value: number;
  duration?: number;
  suffix?: string;
  separator?: string;
}

export const CountUp = ({ 
  value, 
  duration = 2, 
  suffix = "", 
  separator = ""
}: CountUpProps) => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  const { number } = useSpring({
    from: { number: 0 },
    number: value,
    delay: 200,
    config: { duration: duration * 1000 },
  });

  if (!isClient) {
    return <span>0{suffix}</span>;
  }

  return (
    <animated.span>
      {number.to((n) => {
        const formatted = Math.floor(n).toLocaleString('en-US', {
          useGrouping: true,
          maximumFractionDigits: 0
        });
        return `${formatted}${suffix}`;
      })}
    </animated.span>
  );
};