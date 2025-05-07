import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getSliderTopData } from "../../store/actions/sliderTopData.action";
import { useId } from "react";

const Slider = () => {
  const dispatch = useDispatch();
  const sliderTopData = useSelector((state) => state.sliderTop);

  const [loaded, setLoaded] = React.useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  useEffect(() => {
    dispatch(getSliderTopData);
  }, []);

  const id = useId();

  if (!sliderTopData.length) {
    return null;
  }

  return (
    <div ref={sliderRef} className="keen-slider relative h-full">
      {sliderTopData.map((item, key) => (
        <img
          key={item.imgUrl}
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
