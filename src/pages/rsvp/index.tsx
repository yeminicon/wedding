import React from "react";

const RSVPPage = () => {
  return (
    <div className="w-[95%] md:max-w-[800px] mx-auto my-10 bg-white shadow-lg rounded-lg p-8">
      {/* RSVP Header */}
      <h1 className="text-3xl font-bold text-center text-pink-600 mb-6">RSVP</h1>
      <p className="text-center text-gray-700 mb-8">
        We are so excited to celebrate our special day with you! Kindly let us know if you'll be joining us by filling out the form below.
      </p>

      {/* RSVP Form */}
      <form className="space-y-6">
        {/* Are you attending? */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Are you attending?
          </label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="attendance"
                value="yes"
                className="text-pink-600 focus:ring-pink-500"
              />
              <span>Yes, I will be there</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="attendance"
                value="no"
                className="text-pink-600 focus:ring-pink-500"
              />
              <span>Sorry, I can’t come</span>
            </label>
          </div>
        </div>

        {/* Your Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-pink-500 focus:border-pink-500"
            required
          />
        </div>

        {/* Your Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-pink-500 focus:border-pink-500"
            required
          />
        </div>

        {/* Number of Guests */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Number of Guests
          </label>
          <input
            type="number"
            name="guests"
            min="1"
            placeholder="Enter number of guests"
            className="w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-pink-500 focus:border-pink-500"
          />
        </div>

        {/* What Will You Be Attending */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            What will you be attending?
          </label>
          <select
            name="event"
            className="w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-pink-500 focus:border-pink-500"
          >
            <option value="reception">The Reception</option>
            <option value="ceremony">The Ceremony</option>
            <option value="both">Both Events</option>
          </select>
        </div>

        {/* Meal Preferences */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Meal Preferences
          </label>
          <input
            type="text"
            name="meal"
            placeholder="Enter your meal preferences"
            className="w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-pink-500 focus:border-pink-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-pink-600 text-white rounded-lg py-2 px-4 hover:bg-pink-700 transition duration-300"
        >
          Submit Now
        </button>
      </form>

      {/* RSVP Information */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-pink-600 mb-4">RSVP Information</h2>
        <p className="text-gray-700">
          Kindly RSVP by <span className="font-bold">Monday, 18 Sep, 2023</span>. If you have any questions or need assistance, feel free to reach out to us at:
        </p>
        <p className="text-gray-700 mt-2">
          <strong>Email:</strong> weddingplanner@example.com
        </p>
        <p className="text-gray-700">
          <strong>Phone:</strong> +1 234-567-8910
        </p>
      </div>
    </div>
  );
};

export default RSVPPage;
