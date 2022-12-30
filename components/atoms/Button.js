import React from "react";

const Button = ({ children, className, light, ...rest }) => {
  return (
    <button
      {...rest}
      className={`${
        className ? className : ""
      } px-8 py-2 text-lg font-serif tracking-wide ${
        light
          ? "bg-white text-amber-600 hover:bg-amber-300 focus:ring-amber-500"
          : "bg-amber-600 text-white hover:bg-amber-500 focus:ring-amber-300"
      } transform rounded-full uppercase transition-colors  duration-200  focus:outline-none focus:ring  focus:ring-opacity-80`}
    >
      {children}
    </button>
  );
};

export default Button;
