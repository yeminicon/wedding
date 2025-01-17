import React from "react";
import { FaClock, FaMapPin, FaPhone } from "react-icons/fa";
// Tailwind Heroicons (for icons)

const Location = () => {
  const locations = [
    {
      title: "Church Wedding",
      date: "Monday, 25 Sep, 2023",
      time: "1:00 PM – 4:30 PM",
      address: "Assemlies of God church, Kilobade close off Atala Road",
      phone: "+2348144616094",
    },
    {
      title: "The Reception",
      date: "Monday, 25 Sep, 2023",
      time: "1:00 PM – 4:30 PM",
      address: "Immaculate Hall and Events Center, Adesan Road, Mowe",
      phone: "+2348144616094",
    },
    
    
  ];

  return (
    <div className="w-[95%] md:max-w-[1000px] mx-auto my-10">
      <h1 className="text-3xl font-bold text-center text-pink-600 mb-8">
        When & Where
      </h1>
      <div className="flex flex-wrap gap-6 justify-between">
        {locations.map((location, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center border-l-4 border-pink-500 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {location.title}
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              <FaClock className="w-5 h-5 inline-block text-pink-500 mr-2" />
              {location.date} | {location.time}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              <FaMapPin className="w-5 h-5 inline-block text-pink-500 mr-2" />
              {location.address}
            </p>
            <p className="text-sm text-gray-500">
              <FaPhone className="w-5 h-5 inline-block text-pink-500 mr-2" />
              {location.phone}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Location;
