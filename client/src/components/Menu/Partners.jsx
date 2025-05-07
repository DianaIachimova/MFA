import React from "react";
import { useSelector } from "react-redux";
import ImageElement from "../../elements/ImageElement";

const Partners = () => {
  const partners = useSelector((state) => state.menu.partners);

  return (
    <div className="flex items-center">
      {partners.map((item) => (
        <ImageElement
          key={item._id}
          src={item.imgUrl}
          width={item.width}
          height={item.height}
          redirectUrl={item.redirectUrl}
          alt={item.alt}
        />
      ))}
    </div>
  );
};

export default Partners;
