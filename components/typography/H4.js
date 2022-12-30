import React from "react";

const H4 = ({ className, children, light }) => {
  return (
    <h2
      className={`font-header capitalize ${
        light
          ? "text-white hover:text-gray-200 dark:text-white"
          : "text-gray-900 hover:text-red-600 dark:text-white dark:hover:text-gray-400"
      } ${className}`}
    >
      {children}
    </h2>
  );
};

export default H4;
