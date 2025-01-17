import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="md:max-w-[1200px] mx-auto px-10 py-10 md:pt-10 md:py-0 bg-white shadow-sm z-10 mb-20 w-[95%] ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0 md:space-x-12">
        <div className="text-center md:text-left">
          {/* <div className="flex flex-row md:mb-0 mb-5">
            <div>
              <div className=" font-extrabold text-[1.35rem] mt-[-5px]">L</div>
              <div className="mt-[-25px] ml-2 font-extrabold text-[1.25rem]">B</div>
            </div>
            <Link to="/">
              <h1 className="font-bold text-[1.25rem] ml-1"> Lashnetic</h1>
            </Link>
          </div> */}
<div className="flex flex-row ">
            <div>
              <div className=" font-extrabold text-[1.35rem] mt-[-5px]">A</div>
              <div className="mt-[-25px] ml-2 font-extrabold text-[1.25rem]">F</div>
            </div>
            <Link to="/">
              <h1 className="font-bold text-[1.25rem] text-pink-600 ml-1"> Igbagboyemi</h1>
            </Link>
          </div>

          <div className="flex justify-center md:justify-start mt-3 space-x-4 text-blue-600 mb-4">
            <FaFacebook color="black" size={20} />

            <FaInstagram color="black" size={20} />
            <FaYoutube color="black" size={20} />
            <FaWhatsapp
              onClick={() => window.open("/https://wa.me/+2348144616094")}
              color="black"
              size={20}
            />
          </div>
          <p className="text-gray-600">Igbagboyemi'25</p>
        </div>

        {/* Legal */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold mb-2">Legal</h2>
          <h1 className="text-lg text-pink-600 font-bold mb-4">Celebrate our Love</h1>
        </div>

        {/* Contact */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold mb-2">Contact</h2>
          <p className="text-gray-600 mt-3 ">+2348144616094</p>
        </div>

        {/* Location */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold mb-2">Location</h2>
          <p className="text-gray-600 mt-3 ">Immaculate Hall and Events Center, Adesan Road, Mowe</p>
        </div>
      </div>

      <p className="text-gray-600 text-center">Copyright © {currentYear} | Techpower</p>
    </footer>
  );
};

export default Footer;
