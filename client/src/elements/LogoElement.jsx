import React from "react";

function LogoElement(props) {
  const { src, alt, width, height, className } = props;
  return (
    <div>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    </div>
  );
}

export default LogoElement;
