

// Replace these paths with the actual image URLs
import leslieImage from "../../assets/images/korede.jpg";
import jennyImage from "../../assets/images/tommy.jpg";
import robertImage from "../../assets/images/auchi.png";
import jeromeImage from "../../assets/images/intro8.jpg";
import estherImage from "../../assets/images/intro8.jpg";
import bessieImage from "../../assets/images/intro8.jpg";

const BridesmaidsGroomsmen = () => {
  const people = [
    { name: "Oloko  Korede", role: "Best man", img: leslieImage },
    { name: "Akintayo OluwaTomison", role: "Grooms man", img: jennyImage },
    { name: "Onubedo Orachi", role: "Grooms man", img: robertImage },
    { name: "Faketi Jummy", role: "Chief Bridesmaid", img: jeromeImage },
    { name: "Esther Howard", role: "Bridesmaid", img: estherImage },
    { name: "Bessie Cooper", role: "Bridesmaid", img: bessieImage },
  ];

  return (
    <div className="w-[95%] md:max-w-[1200px] mx-auto my-10">
      <h1 className="text-3xl font-bold text-center text-pink-600 mb-8">
        Bridesmaids & Groomsmen
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {people.map((person, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
          >
            {/* Profile Image */}
            <img
              src={person.img}
              alt={person.name}
              className="w-[13rem] h-[13rem] rounded-full mb-4 object-cover border-4 border-pink-300"
            />
            <h2 className="text-lg font-semibold text-gray-800">{person.name}</h2>
            <p className="text-sm text-gray-500">{person.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BridesmaidsGroomsmen;
