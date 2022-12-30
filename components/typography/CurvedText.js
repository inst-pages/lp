import React from "react";

const CurvedText = ({
  textClasses = "",
  className="",
  width = "350",
  height = "50",
  x=0,
  children,
  id
}) => {
  return (
    <svg width={width} height={height} className={className}>
      <path
        d={`M 10 ${Number(height) - 10} Q ${Number(width) /2} 0 ${Number(width) - 10} ${
          Number(height) - 10
        }`}
        stroke="transparent"
        fill="transparent"
        id={id}
      />

      <text x={x} className={textClasses} width={width}>
        <textPath xlinkHref={`#${id}`}>{children}</textPath>
      </text>
    </svg>
  );
};

export default CurvedText;
