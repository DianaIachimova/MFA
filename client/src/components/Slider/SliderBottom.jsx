import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import { getSliderBottomData } from "../../store/actions/sliderBottomData.action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Slider = () => {
  const dispatch = useDispatch();
  const sliderBottomData = useSelector((state) => state.sliderBottom);
  const [loaded, setLoaded] = React.useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    created() {
      setLoaded(true);
    },
  });

  useEffect(() => {
    dispatch(getSliderBottomData);
  }, []);

  if (!sliderBottomData.length) {
    return null;
  }

  return (
    <div ref={sliderRef} className="keen-slider relative h-full">
      {sliderBottomData.map((item) => (
        <img
          key={item._id}
          src={item.imgUrl}
          alt="slider"
          className="keen-slider__slide object-cover h-full"
        />
      ))}

      {loaded && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
          />

          <Arrow
            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
          />
        </>
      )}
    </div>
  );
};

function Arrow(props) {
  return (
    <svg
      onClick={props.onClick}
      className={`w-8 h-8 absolute top-1/2 transform -translate-y-1/2 fill-white cursor-pointer ${
        props.left ? "left-5" : "left-auto right-5"
      } `}
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}

      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

export default Slider;
