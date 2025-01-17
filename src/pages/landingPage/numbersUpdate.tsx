import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import brideImage from "../../assets/images/intro8.jpg";
import groomImage from "../../assets/images/intro6.jpg";

const Numbers = () => {
  const Couple = [
    {
      name: "Faith Faleti",
      about:
        "Faith is a radiant bride-to-be who exudes grace, charm, and a warm, vibrant personality. Coming from a close-knit family of four, she has always been the embodiment of love and positivity. Faith combines intellect with a deeply creative spirit. Beyond her talents and interests, Faith's heart is her most remarkable trait. Her kindness, compassion, and unwavering support for her loved ones shine brightly, making her not just an incredible partner but an inspiration to everyone around her. As she steps into this new chapter of her life, Faith is destined to continue radiating joy, love, and light wherever she goes. With a calm demeanor and a sharp sense of humor, Adeyemi lights up any room he enters. His resilience, drive, and compassionate nature make him a partner of extraordinary caliber. As he prepares to embark on this beautiful journey with Faith, Adeyemi's unwavering dedication and zest for life promise a future filled with adventure, growth, and boundless love. Together, they make a couple destined to inspire and uplift everyone around them.",
      image: brideImage,
      socials: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Adeyemi Akinyele",
      about:
        "Adeyemi is a dynamic and passionate groom with a remarkable blend of intellect, creativity, and warmth. A forward-thinker with an unyielding curiosity for technology and innovation, he has carved out an impressive career as a software engineer. His work is not just a profession but a calling, where he thrives on solving complex problems and building innovative solutions that shape the future.",
      image: groomImage,
      socials: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
  ];

  return (
    <div className="w-[95%] mx-auto md:max-w-[1000px] p-10">
      <div className="flex flex-col gap-10">
        {Couple.map((person, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center my-5 gap-6 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image Section */}
            <div className="w-[200px] h-[200px] overflow-hidden rounded-full flex items-center justify-center">
              <img
                src={person.image}
                alt={person.name}
                className="w-[200px] h-[200px] border-1 rounded-full overflow-hidden p-2"
              />
            </div>

            {/* Information Section */}
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-bold mb-2">{person.name}</h1>
              <p className="text-gray-600 mb-4 ">{person.about.slice(0,100)}..</p>

              {/* Social Media Icons */}
              <div className="flex justify-center md:justify-start gap-4">
                <a
                  href={person.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition transform hover:scale-125 text-blue-600"
                >
                  <FaFacebook color="black" size={24} />
                </a>
                <a
                  href={person.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition transform hover:scale-125 text-blue-400"
                >
                  <FaTwitter color="black" size={24} />
                </a>
                <a
                  href={person.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition transform hover:scale-125 text-pink-600"
                >
                  <FaInstagram color="black" size={24} />
                </a>
                <a
                  href={person.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition transform hover:scale-125 text-blue-700"
                >
                  <FaLinkedin color="black" size={24} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Numbers;
