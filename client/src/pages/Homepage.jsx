import Slider from "../components/Slider/Slider";
import Products from "../components/Products/Products";
import SliderBottom from "../components/Slider/SliderBottom";

const Homepage = () => {
  return (
    <div>
      <div className="h-[700px]">
        <Slider />
      </div>

      <Products />

      <div className="w-11/12 m-auto pt-10">
        <SliderBottom />
      </div>
    </div>
  );
};

export default Homepage;
