import {  Button, Image } from "@nextui-org/react";
import YoutubeEmbed from "../../components/youtube";


const HomeScreen = () => {
  return (
    <div className="w-[100%] h-auto px-5 shadow-sm max-w-[100%] mx-auto md:max-w-[1200px]">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className=" w-[95%] bg-red mx-auto md:mx-0 md:w-[50%]">
          <h1 className=" md:text-[2.5rem] text-[1.25rem] md:max-w-[600px] font-bold">
            Maintain your radiant <strong className="text-[#a3a900]">beauty</strong> with luxurious
            care, no matter the season
          </h1>

          <div className="flex flex-row mt-5">
            <div className="mr-3">
              <div className="w-14 h-14  rounded-full">
                <Image
                  sizes="cover"
                  className="w-14 h-14 rounded-full z-[-100]"
                  src="https://scontent.flos5-1.fna.fbcdn.net/v/t39.30808-1/438059812_447009597713499_8430484131108912418_n.jpg?stp=dst-jpg_s200x200&_nc_cat=1&ccb=1-7&_nc_sid=50d2ac&_nc_eui2=AeH-XEGhTG05FUtpBnQrrsVTc62arYBNh9dzrZqtgE2H11LhLrDMekbsoWv0bQYLSdcLw8hz3crkezKsGbrK3wex&_nc_ohc=8iG2uWZG-8oQ7kNvgGdXlbg&_nc_ht=scontent.flos5-1.fna&_nc_gid=AZB8jmxaAZCI5TLz3nW-z22&oh=00_AYCD5IsZINjciGZ2zLT0_3-q9-Av0aiPJfqBvPAqzvYZuQ&oe=670413EC"
                />
              </div>
              <div className="w-14 h-14 mt-[-35px] rounded-full">
              <Image
                  sizes="cover"
                  className="w-14 h-14  rounded-full z-[-100]"
                  src="https://scontent.flos5-1.fna.fbcdn.net/v/t39.30808-1/438059812_447009597713499_8430484131108912418_n.jpg?stp=dst-jpg_s200x200&_nc_cat=1&ccb=1-7&_nc_sid=50d2ac&_nc_eui2=AeH-XEGhTG05FUtpBnQrrsVTc62arYBNh9dzrZqtgE2H11LhLrDMekbsoWv0bQYLSdcLw8hz3crkezKsGbrK3wex&_nc_ohc=8iG2uWZG-8oQ7kNvgGdXlbg&_nc_ht=scontent.flos5-1.fna&_nc_gid=AZB8jmxaAZCI5TLz3nW-z22&oh=00_AYCD5IsZINjciGZ2zLT0_3-q9-Av0aiPJfqBvPAqzvYZuQ&oe=670413EC"
                />
              </div>
            </div>
            <div className="flex items-center">
              <p className="md:max-w-[500px] text-[#898686] font-medium">
                At Lashnetic beauty place, we are committed to providing exceptional care, ensuring
                your radiant glow shines through, anytime, anywhere.
              </p>
            </div>
          </div>
          <div className="flex flex-row py-10 items-center">
            <Button variant="bordered" className="bg-blue-700 text-white">
              Book An Appointment
            </Button>
            <p className=" ml-3 underline">See terms of service</p>
          </div>
        </div>
        <div className=" w-[95%] mx-auto md:mx-0 md:w-[50%] shadow-md flex justify-center items-center bg-[#abaaaa]">
          <YoutubeEmbed />
         
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
