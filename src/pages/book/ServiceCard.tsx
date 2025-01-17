import React from "react";

interface ServiceCardProps {
  name: string;
  price: number;
  time: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ name, price, time, image }) => {
  return (
    <div className="py-4 md:p-4 w-[95%] md:w-[100%] mx-auto border rounded-lg shadow-sm">
      <img src={image} alt={name} className="w-[200px] mx-auto h-[200px] object-cover mb-4" />
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600">Price: N{price}</p>
      <p className="text-gray-600">Time: {time}</p>
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg">Book Now</button>
    </div>
  );
};

export default ServiceCard;
