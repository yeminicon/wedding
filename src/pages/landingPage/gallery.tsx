import img1 from "../../assets/images/IMG_8134[1].jpg";
import img2 from "../../assets/images/IMG_8136[1].jpg";
import img3 from "../../assets/images/IMG_8135[1].jpg";
import img4 from "../../assets/images/IMG_8137[1].jpg";
import { Button, Image } from "@nextui-org/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [img1, img2, img3, img4];

const Gallery = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 slides on desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint (768px or below)
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
        },
      },
    ],
  };

  return (
    <div className="w-[95%] max-w-[400px] my-10 md:max-w-[1200px] rounded-lg p-5 mx-auto">
      <div className="w-[100%]md:w-[500px] mx-auto flex flex-col my-10 p-2 items-center">
        <h1 className="text-[1.25rem] md:w-[250px] text-black font-bold text-center">
          Experience the Ultimate Salon Transformation
        </h1>

        <div className="flex flex-col md:flex-row w-[480px] justify-between mt-4">
          <h2 className="w-[70%] mx-auto md:mx-0 md:w-[220px] p-1 font-medium text-gray-700">
            From ordinary to extraordinary, we create stunning looks that make heads turn.
          </h2>
          <p className="w-[70%] mx-auto md:mx-0 md:w-[220px] p-1 font-light text-gray-600">
            Your beauty journey starts here. Let us pamper you in our salon with style, precision,
            and a touch of glam!
          </p>
        </div>

        <Button size="sm" variant="bordered" className="mt-6 bg-blue-800 text-white">
          Discover More
        </Button>
      </div>

      <div className="mt-8">
        <Slider {...sliderSettings}>
          {images.map((img, index) => (
            <div key={index}>
              <Image
                className="w-[350px] h-[350px] md:w-[250px] md:h-[250px] rounded-lg object-cover"
                src={img}
                alt={`Gallery image ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
