import { FaWhatsapp } from "react-icons/fa";

const WhatsAppContact = () => {
  return (
    <div className="flex flex-col items-center mt-6">
      <h1 className="font-bold text-[#1da81d]">WhatsApp Connect</h1>
      <a
        href="https://wa.me/+2348064774505"
        className="flex items-center mt-4 text-white"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={24} className="mr-2 text-[#1da81d]" />
        Chat with us on WhatsApp
      </a>
    </div>
  );
};

export default WhatsAppContact;
