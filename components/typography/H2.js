import React from "react";

const H2 = ({ className, children, light }) => {
  return (
    <h2
      className={`font-sans text-xl capitalize ${
        light
          ? "text-white hover:text-gray-200 dark:text-white"
          : "text-gray-900 hover:text-red-600 dark:text-white dark:hover:text-gray-400"
      } ${className}`}
    >
      {children}
    </h2>
  );
};

export default H2;
