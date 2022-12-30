import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollIndicator = ({ className = "", color = "black" }) => {
  const { scrollYProgress  } = useScroll()
  const opacity = useTransform(
    scrollYProgress,
    // Map scrollYProgress from these values:
    [0, 1],
    // Into these values:
    [1, 0]
  )

  return (
        <motion.div
          className={`rounded-3xl h-16 w-10 border-2 text-${color} border-${color} flex justify-center items-center ${className}`}
          style={{opacity: opacity}}
        >
          <div className="animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 -my-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 -my-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </motion.div>
  );
};

export default ScrollIndicator;
