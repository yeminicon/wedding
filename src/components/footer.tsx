import React from "react";
import { FaFacebook, FaInstagram, FaPhone, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full px-6 py-10 bg-white shadow-sm z-10 mb-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0 md:space-x-12">
        
        {/* Brand and Socials */}
        <div className="text-center md:text-left">
        <div className="flex flex-row md:mb-0 mb-5">
          <div>
            <div className=" font-extrabold text-[1.35rem] mt-[-5px]">L</div>
            <div className="mt-[-25px] ml-5 md:mt-[-22px] md:ml-3 font-extrabold text-[1.25rem]">b</div>
          </div>
          <h1 className="font-bold text-[1.25rem] ml-1"> Lashnetic</h1>
        </div>
          <div className="flex justify-center md:justify-start space-x-4 text-blue-600 mb-4">
            <FaFacebook size={20} />
            <FaTwitter size={20} />
            <FaInstagram size={20} />
            <FaYoutube size={20} />
            <FaPhone size={20} />
          </div>
          <p className="text-gray-600">© {currentYear} | Techpower</p>
        </div>

        {/* Legal */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold mb-2">Legal</h2>
          <p className="text-gray-600">Terms of Use</p>
          <p className="text-gray-600">Privacy Policy</p>
        </div>

        {/* Contact */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold mb-2">Contact</h2>
          <p className="text-gray-600">+2348064774505</p>
          <p className="text-gray-600">support@lashnetics.com</p>
        </div>

        {/* Location */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold mb-2">Location</h2>
          <p className="text-gray-600">10 Ademolu Street, Agege</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
