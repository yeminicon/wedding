import { Avatar } from "@nextui-org/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {};

const Testimonial = (props: Props) => {
  const listComment = [
    {
      name: "Akinyele Adeyemi",
      position: "Eco-conscious",
      testimony:
        "I love it there at lashnetics, a place of comfort. Forget it, that place is beauty with brilliant workers. I recommend it.",
    },
    {
      name: "Tomiwa Adewale",
      position: "Beauty Enthusiast",
      testimony:
        "Lashnetics is an amazing place. They always get it right with my lashes and makeup!",
    },
    {
      name: "Funmi Olanrewaju",
      position: "Fashion Blogger",
      testimony:
        "Every time I visit Lashnetics, I leave feeling like a queen. The service is top-notch!",
    },
    {
      name: "Jessica Oladele",
      position: "Model",
      testimony:
        "I never knew I could get my desired look every time until I found Lashnetics. Highly recommend!",
    },
    {
      name: "Oluwaseun Bello",
      position: "Influencer",
      testimony:
        "Hands down the best beauty service in town! Lashnetics has the best technicians.",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 testimonials at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
        },
      },
    ],
  };

  return (
    <div className="w-[95%] md:max-w-[1200px] mx-auto my-10 p-10">
      <div className="flex flex-col md:flex-row mb-5 justify-between items-center mx-auto">
        <h1 className="md:w-[300px] text-[1.25rem] font-bold">
          Words of <strong className="text-[#9d8b00]">Delight</strong> from Our Customers
        </h1>

        <p className="md:w-[500px] text-[0.5rem] md:text-[1rem]">
          Make your first payment, and your inverter will be delivered, with an assigned technician
          to oversee its installation.
        </p>
      </div>

      <div className="mt-8">
        <Slider {...sliderSettings}>
          {listComment.map((comment, index) => (
            <div key={index} className="  mx-5 p-5 shadow-lg rounded-lg">
              <div className="flex flex-row items-center">
                <Avatar
                  src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                  className="w-10 h-10 bg-blue-200 rounded-full"
                />
                <div className="ml-4">
                  <h1 className="text-[0.75rem]">{comment.name}</h1>
                  <p className="text-[0.75rem]">{comment.position}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-[0.75rem]">{comment.testimony}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
