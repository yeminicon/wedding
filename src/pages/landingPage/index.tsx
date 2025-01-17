import React from "react";
import HomeScreen from "./heroscreen";
import Numbers from "./numbersUpdate";
import Service from "./service";
import WeddingGallery from "./gallery";
import WeddingGuestForm from "./orderprocess";
import BridesmaidsGroomsmen from "./appointment";
import Location from "./ready";
// import backgroundimage from "../../assets/images/pen-and-ink-flower-drawings-17.jpg";

const Home: React.FC = () => {
  return (
    <div
      className="p-4 bg-cover bg-center"
      style={{
        backgroundColor: "white",
        // backgroundImage: `url(${backgroundimage})`,
        minHeight: "100vh", 
      }}
    >
      <HomeScreen />
      <Numbers />
      <Service />
      <WeddingGallery />
      <WeddingGuestForm />
      <BridesmaidsGroomsmen />
      <Location />
    </div>
  );
};

export default Home;
