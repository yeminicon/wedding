import { Button } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import SwiperCore from "swiper";
import React, { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/virtual";
import { FaHandsHelping } from "react-icons/fa";

const Appointment = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleSlideChange = (swiper: SwiperCore) => {
    setCurrentIndex(swiper.realIndex);
  };

  const listOfProduct = [
    {
      name: "BrowsClassic",
      title: "Lashnetic Brows",
      price: 300000,
      spec: "washed face",
    },
    {
      name: "Brows Pro 1",
      title: "Lashnetic Brows pro 1",
      price: 500000,
      spec: "washed face",
    },
    {
      name: "BraidClassic",
      title: "Lashnetic Braids",
      price: 300000,
      spec: "washed face",
    },
    {
      name: "Massage Classic",
      title: "Lashnetic Massage",
      price: 300000,
      spec: "washed face",
    },
    {
      name: "Nails Classic",
      title: "Lashnetic nails",
      price: 700000,
      spec: "washed face",
    },
    {
      name: "Nails Classic pro 1",
      title: "Lashnetic nails pro 1",
      price: 1200000,
      spec: "washed face",
    },
    {
      name: "BrowsClassic pro +1",
      title: "Lashnetic Brows pro +1",
      price: 700000,
      spec: "washed face",
    },
    {
      name: "Classic pro",
      title: "Lashnetic Brows",
      price: 3200000,
      spec: "washed face",
    },
    {
      name: "Full makeup ",
      title: "Lashnetic ",
      price: 2300000,
      spec: "washed face",
    },
  ];
  return (
    <div className="w-[95%] md:max-w-[1200px] mx-auto p-5">
      <div className="flex md:flex-row flex-col mb-5 justify-between">
        <h1 className="md:w-[200px] w-full  text-[1.25rem] font-bold">
          Ready to book your beauty experience?
        </h1>
        <p className="md:w-[500px] w-full text-[1rem] text-[#8d8c8c]">
          Not sure where to start? We've made it easy! Choose from our curated selection of beauty
          solutions and find the perfect plan tailored just for you.
        </p>
      </div>

      <div className=" w-[200px] mb-5 mx-auto">
        <Button variant="bordered" className="bg-blue-900 text-white p-5">
          {" "}
          Book an Appointment
        </Button>
      </div>

      <div className="hidden md:flex flex-row space-x-4 overflow-x-auto my-10">
        <Swiper
          modules={[Navigation, EffectFade]}
          spaceBetween={16}
          navigation
          effect="slide"
          loop
          slidesPerView={4.2}
          pagination={{ clickable: true }}
          onSlideChange={handleSlideChange}
        >
          {listOfProduct.length > 0 ? (
            listOfProduct.map((product, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`mx-2 shadow-lg flex flex-col  h-[100%] ${
                    currentIndex === index ? "bg-vendor-yellow-100" : "bg-white"
                  } rounded-lg py-5 px-4`}
                  onClick={() => console.log(product.name)}
                >
                  {currentIndex === index ? (
                    <div className="flex items-center justify-between w-full">
                      <h3 className="text-black font-bold text-base">{product.name}</h3>
                      {/* <p className="text-vendor-gray--500 text-base font-normal">
                      {product.name}
                    </p> */}
                    </div>
                  ) : (
                    <p className="text-black text-xs font-medium">{product.name}</p>
                  )}
                  <div className="my-5">
                    {" "}
                    <h1 className="text-[0.75rem] font-bold my-1">{product.title}</h1>
                    <p className="text-[0.65rem]">{product.title} includes the variations...</p>
                  </div>
                  <div className="mb-5">
                    {" "}
                    <p className="text-[0.75rem] my-1">
                      $ {product.price}.00{" "}
                      <em className="text-[0.5rem] text-[#abaaaa]">per appointment</em>
                    </p>
                    <p>
                      with a discount of 10% on first order <strong>New</strong>
                    </p>
                  </div>{" "}
                  <div className="flex flex-row justify-between items-center p-1">
                    <p className="text-[0.75rem] my-1">{product.spec}</p>
                    <Button variant="bordered" size="sm" className=" text-[0.5rem]">
                      Book
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </Swiper>
        {/* <h1>Products for Category: {categoryId}</h1> */}
      </div>
      <div className="flex md:hidden flex-row space-x-4 overflow-x-auto my-10">
        <Swiper
          modules={[Navigation, EffectFade]}
          spaceBetween={16}
          navigation
          effect="slide"
          loop
          slidesPerView={1.2}
          pagination={{ clickable: true }}
          onSlideChange={handleSlideChange}
        >
          {listOfProduct.length > 0 ? (
            listOfProduct.map((product, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`mx-2 shadow-lg flex flex-col justify-between h-[100%] md:h-[300px]  ${
                    currentIndex === index ? "bg-vendor-yellow-100" : "bg-white"
                  } rounded-lg py-5 px-4`}
                  onClick={() => console.log(product.name)}
                >
                  {currentIndex === index ? (
                    <div className="flex items-center justify-between w-full">
                      <h3 className="text-black font-bold text-base">{product.name}</h3>
                      {/* <p className="text-vendor-gray--500 text-base font-normal">
                      {product.name}
                    </p> */}
                    </div>
                  ) : (
                    <p className="text-black text-xs font-medium">{product.name}</p>
                  )}
                  <div className="my-5">
                    {" "}
                    <h1 className="text-[0.75rem] font-bold my-1">{product.title}</h1>
                    <p className="text-[0.65rem]">{product.title} includes the variations...</p>
                  </div>
                  <div className="mb-5">
                    {" "}
                    <p className="text-[0.75rem] my-1">
                      $ {product.price}.00{" "}
                      <em className="text-[0.5rem] text-[#abaaaa]">per appointment</em>
                    </p>
                    <p className="text-[0.75rem]">
                      with a discount of 10% on first order <strong>New</strong>
                    </p>
                  </div>{" "}
                  <div className="flex flex-row justify-between items-center p-1">
                    <p className="text-[0.75rem] my-1">{product.spec}</p>
                    <Button variant="bordered" size="sm" className="bg-blue-900 text-white p-5">
                      Book now
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </Swiper>

        {/* <h1>Products for Category: {categoryId}</h1> */}
      </div>
      <div className="w-[300px] mx-auto flex flex-row bg-blue-900 text-white rounded-full h-[40px] justify-center items-center">
        <FaHandsHelping />
        <p className="text-[0.75rem] ml-3">All appointment can be reschedule</p>
      </div>
    </div>
  );
};
export default Appointment;
