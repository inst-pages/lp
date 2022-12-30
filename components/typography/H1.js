import React from "react";

const H1 = ({ className, children, light }) => {
  return (
    <h1
      className={`font-header text-3xl font-medium capitalize tracking-wide lg:text-4xl ${
        light
          ? "text-white hover:text-gray-200 dark:text-white"
          : "text-gray-900 hover:text-red-600 dark:text-white dark:hover:text-gray-400"
      } ${className}`}
    >
      {children}
    </h1>
  );
};

export default H1;
