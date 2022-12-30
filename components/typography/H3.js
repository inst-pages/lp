import React from "react";

const H3 = ({ className, children, light }) => {
  return (
    <h3
      className={`font-header capitalize ${
        light
          ? "text-white hover:text-gray-200 dark:text-white"
          : "text-gray-900 hover:text-red-600 dark:text-white dark:hover:text-gray-400"
      } ${className}`}
    >
      {children}
    </h3>
  );
};

export default H3;
