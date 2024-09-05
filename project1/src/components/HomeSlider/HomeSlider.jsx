import React from "react";
import Slider from "react-slick";
import slider1 from "./../../assets/images/slider1.jpg";
import slider2 from "./../../assets/images/slider2.jpg";
import slider3 from "./../../assets/images/slider3.jpg";
import slider4 from "./../../assets/images/slider4.jpg";
import slider5 from "./../../assets/images/slider5.jpg";

export default function HomeSlider() {
  var settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    // centerMode:false,
    centerPadding:100,
  };
  return (
    <section className="p-5">
      <div className=" flex items-center justify-center ml-[250px]">
        <div className=" w-1/4 justify-center">
          <Slider {...settings}>
            <div className="">
              <img src={slider1} className="w-full  h-[460px] " alt="" />
            </div>

            <div>
              <img src={slider2} className="w-full  h-[450px] " alt="" />
            </div>

            <div>
              <img src={slider3} className="w-full  h-[230px] " alt="" />
            </div>
          </Slider>
        </div>
        <div className="flex flex-col w-1/2">
            <div>
                <img src={slider4} alt="" className="h-[230px]" />
            </div>
            <div>
                <img src={slider5} alt="" className="h-[230px]" />
            </div>
        </div>
      </div>
    </section>
  );
}
