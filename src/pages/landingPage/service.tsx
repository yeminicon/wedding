import React from "react";
import { FaWallet } from "react-icons/fa";

const Service = () => {
  return (
    <div className="w-[95%] md:max-w-[1200px] my-10 bg-blue-900 flex md:flex-row flex-col rounded-lg md:p-20 p-10 mx-auto">
   
      <Section title="Why Choose Lashnectics for Your Beauty Solutions">
        <Feature
          title="Exquisite Environment"
          description="Step into our luxurious sanctuary, where elegance meets comfort. At Lashnectics, we’ve designed every detail to ensure you indulge in an ambiance that rejuvenates your spirit. Bask in the soothing colors, plush seating, and a serene atmosphere that whispers relaxation."
        />
        <Feature
          title="Expert Touch"
          description="Our team of seasoned beauty professionals is dedicated to crafting an extraordinary experience for you. With years of expertise, we combine skill with a passion for beauty, ensuring that every treatment is not just a service but an art form. Let us pamper you with precision and care!"
        />
      </Section>

      {/* Salon with an Extra Touch */}
      <Section title="Lashnetic beauty Salon with an Extra Touch options">
        <Feature
          title="Luxurious Massage Options"
          description="Indulge in a variety of massage therapies designed to melt away your stress. From calming Swedish techniques to invigorating deep tissue treatments, each massage is tailored to meet your needs, ensuring you leave feeling refreshed, relaxed, and radiant."
        />
        <Feature
          title="Exclusive Salon Services"
          description="Experience our salon services that go beyond the ordinary. Whether you're looking for a stunning new haircut, vibrant color, or a perfect manicure, our talented stylists are here to transform your vision into reality. Enjoy a glass of bubbly while you relax and let us work our magic!"
        />
      </Section>
    </div>
  );
};

// Section component to encapsulate each section's title and features
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h1 className="text-white text-[1.25rem] w-[100%] md:w-[90%] font-bold mb-4">{title}</h1>
    <ul className="list-disc pl-5 text-white  w-[100%] md:w-[90%]">{children}</ul>
  </div>
);

const Feature = ({ title, description }: { title: string; description: string }) => (
  <li className="mb-4">
    <div>
      <div className="w-16 h-16 m-2 rounded-full bg-blue-500 flex justify-center items-center">
        <FaWallet />
      </div>
      <h2 className="text-[1rem] font-semibold ">{title}</h2>
      <p className="text-gray-200 text-[0.75rem] ">{description}</p>
    </div>
  </li>
);

export default Service;
