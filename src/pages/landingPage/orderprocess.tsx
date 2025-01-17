import flower from "../../assets/images/23_maret_12.jpg"
const WeddingGuestForm = () => {
  return (
    <div className="w-[95%] md:max-w-[700px] rounded-full mx-auto "  style={{
      backgroundImage: `url(${flower})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat"
    }}>
    <div className="relative bg-white shadow-lg border-4  rounded-full max-w-lg mx-auto my-10 p-20">
      {/* Floral Decoration */}
      {/* <div className="absolute top-[-20px] left-[-20px] w-20 h-20">
        <img
          src="/path-to-flower1.png" // Replace with your floral image path
          alt="flower decoration"
          className="w-full h-full object-cover"
        />
      </div> */}
      {/* <div className="absolute bottom-[-20px] right-[-20px] w-20 h-20">
        <img
          src="/path-to-flower2.png" // Replace with your floral image path
          alt="flower decoration"
          className="w-full h-full object-cover"
        />
      </div> */}

      {/* Form Header */}
      <h1 className="text-3xl font-bold text-center text-pink-600 mb-4">
        Wedding Guest Form
      </h1>
      <p className="text-center text-gray-600 mb-8">
        We are excited to celebrate with you! Please let us know your details.
      </p>

      {/* Form */}
      <form>
        {/* Are You Attending */}
        <div className="mb-6">
          <label className="block font-medium text-gray-700 mb-2">
            Are you attending?
          </label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="attendance"
                value="yes"
                className="w-4 h-4 text-pink-600 border-gray-300 focus:ring-pink-500"
              />
              Yes, I will be there
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="attendance"
                value="no"
                className="w-4 h-4 text-pink-600 border-gray-300 focus:ring-pink-500"
              />
              Sorry, I can’t come
            </label>
          </div>
        </div>

        {/* Name */}
        <div className="mb-6">
          <label className="block font-medium text-gray-700 mb-2">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block font-medium text-gray-700 mb-2">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Number of Guests */}
        <div className="mb-6">
          <label className="block font-medium text-gray-700 mb-2">
            Number of Guests
          </label>
          <input
            type="number"
            name="guests"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
            placeholder="Enter number of guests"
            min="0"
          />
        </div>

        {/* What Will You Be Attending */}
        <div className="mb-6">
          <label className="block font-medium text-gray-700 mb-2">
            What Will You Be Attending
          </label>
          <select
            name="attendance_type"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
          >
            <option value="ceremony">Ceremony</option>
            <option value="reception">Reception</option>
            <option value="both">Both</option>
          </select>
        </div>

        {/* Meal Preferences */}
        <div className="mb-6">
          <label className="block font-medium text-gray-700 mb-2">
            Meal Preferences
          </label>
          <textarea
            name="meal_preferences"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
            placeholder="Let us know your meal preferences"
            rows="3"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full py-3 bg-pink-600 text-white rounded-md font-medium hover:bg-pink-700 transition duration-300"
          >
            Submit Now
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default WeddingGuestForm;
