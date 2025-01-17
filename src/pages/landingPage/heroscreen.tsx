import { useState, useEffect } from "react";
import { Image } from "@nextui-org/react";
import hybridlash from "../../assets/images/White Emerald Floral.png";
const HomeScreen = () => {
  // State to hold the remaining time
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Function to calculate the remaining time
  function calculateTimeLeft() {
    const targetDate = new Date("February 8, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    const time = {
      months: Math.floor(difference / (1000 * 60 * 60 * 24 * 30)),
      days: Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };

    return difference > 0 ? time : { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); 
  }, []);

  return (
    <div className="w-[100%] h-auto px-1 max-w-[100%] mx-auto md:max-w-[1200px]">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Text Section */}
          <div className="md:mx-0 md:w-[50%]">
            <div>
              <h1 className="text-center md:text-auto md:text-[3.5rem] text-[2.25rem] md:max-w-[600px] font-bold">
                Adeyemi <strong className="text-pink-600">&</strong> Faith
              </h1>
              <p className="text-sm text-center">WE ARE GETTING MARRIED FEB 8, 2025</p>
            </div>

            {/* Countdown Timer */}
            <div className="flex flex-row mx-auto justify-between w-[70%]">
              <div className="hidden md:flex flex-col w-12 h-12 rounded-full p-1  my-4 bg-pink-100">
                <h1 className="text-[0.85rem] mx-auto">{timeLeft.months}</h1>
                <p className="text-[0.5rem] mx-auto">Months</p>
              </div>
              <div className="flex flex-col w-12 h-12 rounded-full p-1 my-4 bg-pink-100">
                <h1 className="text-[0.85rem] mx-auto">{timeLeft.days}</h1>
                <p className="text-[0.5rem] mx-auto">Days</p>
              </div>
              <div className="flex flex-col w-12 h-12 rounded-full p-1 my-4 bg-pink-100">
                <h1 className="text-[0.85rem] mx-auto">{timeLeft.hours}</h1>
                <p className="text-[0.5rem] mx-auto">Hours</p>
              </div>
              <div className="flex flex-col w-12 h-12 rounded-full p-1 my-4 bg-pink-100">
                <h1 className="text-[0.85rem] mx-auto">{timeLeft.minutes}</h1>
                <p className="text-[0.5rem] mx-auto">Minutes</p>
              </div>
              <div className="flex flex-col w-12 h-12 rounded-full p-1 my-4 bg-pink-100">
                <h1 className="text-[0.85rem] mx-auto">{timeLeft.seconds}</h1>
                <p className="text-[0.5rem] mx-auto">Seconds</p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-[95%] mx-auto md:mx-0 md:w-[50%] flex justify-center items-center">
            <Image
              className="md:max-w-[600px] md:h-[500px] h-[300px] z-10"
              sizes="cover"
              src={hybridlash}
            />
          </div>
        </div>
    </div>
  );
};

export default HomeScreen;
