import React from "react";
import HomeScreen from "./heroscreen";
import Numbers from "./numbersUpdate";
import Service from "./service";
import Appointment from "./appointment";
import OrderProcess from "./orderprocess";
import Gallery from "./gallery";
import Testimonial from "./testimonial";
import Faq from "./faq";
import Ready from "./ready";

const Home: React.FC = () => {
  return (
    <div className="p-4">
      <HomeScreen />
      <Numbers />
      <Service />
      <Appointment />
      <OrderProcess />
      <Gallery />
      <Testimonial />
      <Faq />
      <Ready />
    </div>
  );
};

export default Home;
