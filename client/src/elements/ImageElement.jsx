import React from "react";

function ImageElement(props) {
  const { src, alt, width, height, redirectUrl } = props;

  return (
    <a className="ml-3" href={redirectUrl} target="_blank">
      <img src={src} alt={alt} width={width} height={height} />
    </a>
  );
}

export default ImageElement;
