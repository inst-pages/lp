import React from "react";

/**
 * @param {string} className - A string containing tailwind css classes. Text color and font are set by default.
 * @param {component} children
 * @param {boolean} light - Toggle dark or light mode when used on dark backgrounds
 */
const Par = ({ className, children, light = false, size = "md" }) => {
  if (children == "null" || !children) return null;

  return (
    <p
      className={`font-mono text-${size} ${
        light
          ? "text-white dark:text-gray-100"
          : "text-gray-500 dark:text-gray-100"
      } ${className}`}
    >
      {children}
    </p>
  );
};

export default Par;
