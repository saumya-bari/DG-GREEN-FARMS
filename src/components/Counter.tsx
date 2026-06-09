
"use client"

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  target: number | string;
  suffix?: string;
  duration?: number;
}

export default function Counter({ target, suffix = "", duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (!isInView || typeof target !== "number") return;
    
    let start = 0;
    const end = target;
    const totalFrames = Math.round(duration / 16);
    const increment = end / totalFrames;
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [isInView, target, duration]);
  
  if (typeof target === "string") {
    return <span ref={ref}>{target}{suffix}</span>;
  }

  return <span ref={ref}>{count}{suffix}</span>;
}
