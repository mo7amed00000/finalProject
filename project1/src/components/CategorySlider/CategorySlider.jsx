import React from "react";
import Slider from "react-slick";
import { useQuery } from "react-query";
import axios from "axios";
export default function CategorySlider() {

    
  async function getAllCategory() {
    return await axios.get("https://ecommerce.routemisr.com/api/v1/categories");
  }
  const {data} = useQuery("CategorySlider", getAllCategory);

//   console.log(data);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };
  return (
    <section className="py-10">
      <Slider {...settings}>
        {data?.data.data.map(function (item , idx) {
          return <div key={idx}>
            <img src={item.image} className="w-full h-[200px]" alt="" />
            <h2 className=" text-2xl font-bold text-center">{item.name}</h2>
          </div>;
        })}
      </Slider>
      
    </section>
  );
}
