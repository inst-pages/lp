import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const HorizontalScroll = ({ className = "", width=1 }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["center center", "start end"]
  });
  const x = useTransform(
    scrollYProgress,
    // Map scrollYProgress from these values:
    [0, 1],
    // Into these values:
    [1200 * width, 0]
  );
  return (
    <div ref={targetRef} className="w-full h-40">
      <motion.div
        className={`rounded-full h-40 w-40 border-2 bg-yellow-200 blur-3xl flex justify-center items-center ${className}`}
        style={{ x }}
      ></motion.div>
    </div>
  );
};

export default HorizontalScroll;
