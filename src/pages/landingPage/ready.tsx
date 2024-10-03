import { Button } from "@nextui-org/react";
import React from "react";

const Ready: React.FC = () => {
  return (
    <div className="w-[95%]  rounded-lg mx-auto flex flex-col items-center justify-center py-16 px-10 md:px-0 bg-gradient-to-r from-blue-900 to-blue-500 p-10 text-white">
      <div className="text-center md:max-w-[800px] px-5">
        <h1 className="text-2xl md:text-5xl font-bold mb-4">
          Ready to Book Your Appointment with Us?
        </h1>
        <p className="text-sm md:text-xl mb-6">
          Discover the ultimate beauty experience! Whether you're looking for a new look or a refreshing touch-up, our expert team is here to give you the best care possible. We offer a range of premium services tailored just for you.
        </p>
        <p className="text-[0.75rem] md:text-lg mb-6">
          Don’t wait! Our appointments fill up fast. Get started today and let us bring out the best in you.
        </p>
        <Button className="w-[200px] h-[50px] text-lg font-medium bg-white text-blue-600 hover:bg-gray-100 transition-all">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Ready;
