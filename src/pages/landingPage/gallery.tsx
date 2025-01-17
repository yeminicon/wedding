import React from "react";

// Import your images
import img1 from "../../assets/images/introx-removebg-preview.png";
import img2 from "../../assets/images/intro11.jpg";
import img3 from "../../assets/images/intro12.jpg";
import img4 from "../../assets/images/intro13.jpg";
import img5 from "../../assets/images/intro7.jpg";
import img6 from "../../assets/images/intro8.jpg";

const WeddingGallery = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="w-[95%] md:max-w-[1200px] mx-auto my-10 md:mb-20">
      <h1 className="text-center text-3xl font-bold mb-8 text-pink-600 md:my-5">Wedding Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group"
          >
            <img
              src={img}
              alt={`Wedding ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">Wedding {index + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeddingGallery;
