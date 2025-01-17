import first from "../../assets/images/intro00-removebg-preview.png";
import dateImg from "../../assets/images/intro0-removebg-preview.png";
import yes from "../../assets/images/yesImagNew.jpg";
import { Button } from "@nextui-org/react";
import backgroundimage  from"../../assets/images/pen-and-ink-flower-drawings-17.jpg"

const Service = () => {
  const FirstTime = [
    {
      title: "First Time We Meet",
      img: first,
      date: "19 Jan 2018",
      note: "We first met during a study session with friends back in 2016. What started as a casual interaction blossomed into a connection filled with laughter, shared dreams, and unforgettable moments.",
    },
    {
      title: "Our First Date",
      img: dateImg,
      date: "22 May 2017",
      note: "Our first date was nothing short of magical. From the moment we sat down, every conversation felt like a page turning in a beautiful story. We laughed, shared our dreams, and realized how perfectly we fit together. It was the beginning of a journey filled with love and endless possibilities.",
    },
    {
      title: "She Said Yes!",
      img: yes,
      date: "19 June 2024",
      note: "On this unforgettable day, under a sky full of hope and love, she said the words that changed our lives forever—'Yes!' It was a moment filled with overwhelming joy, happy tears, and a promise of a lifetime together. The beginning of forever has never felt so perfect.",
    }
  ];

  return (
    <div className="w-[100%] md:max-w-[1000px] my-10 rounded-lg md:p-20 p-10 mx-auto">
      <h1 className="text-center font-bold text-[1.5rem] text-pink-600 md:text-[3rem]">Our Sweet Story</h1>

      <div className="mb-10">
        {FirstTime.map((time, index) => (
          <div
            key={index}
            className={`flex my-10 h-[100%] ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } flex-col`}
          >
            {/* Image Section */}
            <div className="md:w-[380px] max-h-[500px] h-[100%] overflow-hidden">
              <img src={time.img} alt={time.title} />
            </div>

            {/* Text Section */}
            <div className="md:w-[400px] my-auto border-4 p-5 md:ml-[-70px] bg-white h-[200px]">
              <h1>{time.title}</h1>
              <p>{time.date}</p>
              <hr />
              <p>{time.note.slice(0,120)}...</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div style={{
         backgroundImage: `url(${backgroundimage})`,
      }} className="w-full text-center bg-gray-100 p-10 rounded-lg">
        <h1 className="text-2xl text-pink-600 font-bold mb-4">Come and Celebrate our Love</h1>
        <Button variant="bordered" className=" bg-pink-600">Save the Date</Button>
      </div>
    </div>
  );
};

export default Service;
