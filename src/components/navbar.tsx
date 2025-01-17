import { Button } from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full shadow-lg sticky bg-white top-0 z-40 ">
      <div className="w-[100%]  sticky top-0 px-5 h-[70px] shadow-sm max-w-[400px] mx-auto md:max-w-[1200px] bg-white ">
        <div className="w-full flex flex-row justify-between h-[80px]  items-center">
          <div className="flex flex-row ">
            <div>
              <div className=" font-extrabold text-[1.35rem] mt-[-5px]">A</div>
              <div className="mt-[-25px] ml-2 font-extrabold text-[1.25rem]">F</div>
            </div>
            <Link to="/">
              <h1 className="font-bold text-[1.25rem] text-pink-600 ml-1"> Igbagboyemi</h1>
            </Link>
          </div>

          <div className="hidden w-[40%]   md:flex md:flex-row   justify-between md:items-center md:space-x-8">
            <ul className="flex space-x-4 w-[350px] justify-between">
              <li className="text-black hover:text-[#F5F6FA] font-bold">
                <Link to="/">Home</Link>
              </li>
              <li className="text-black hover:text-[#F5F6FA] font-bold">
                <Link to="/#">Couple</Link>
              </li>
              <li className="text-black hover:text-[#F5F6FA] font-bold">
                <Link to="/#">Story</Link>
              </li>
              <li className="text-black hover:text-[#F5F6FA] font-bold">
                <Link to="/#">Gallery</Link>
              </li>

              <li className="text-black hover:text-[#F5F6FA] font-bold">
                <Link to="/#">RSVP</Link>
              </li>
              <li className="text-black hover:text-[#F5F6FA] font-bold">
                <Link to="/contact">Event</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-row">
            {/* <Button variant="bordered" className="hidden md:flex">
              Attend
            </Button> */}
            <Button
              onPress={() => navigate("/bookme")}
              variant="bordered"
              className="bg-pink-600 ml-3 text-white"
            >
             Save the Date
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
