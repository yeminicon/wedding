import React, { useState } from "react";
import Slider from "react-slider";

const PriceSlider = () => {
  const [values, setValues] = useState([1000, 1000000]);

  const handleChange = (newValues: number[]) => setValues(newValues);

  return (
    <div className="p-5 border border-gray-300 rounded-md shadow-sm">
      <h2 className="text-xl font-semibold mb-2">Price Range</h2>
      <p className="text-sm text-gray-600 mb-4">Use the slider to select a price range:</p>

      <Slider
        className="w-full h-2 bg-gray-300 rounded focus:outline-none"
        thumbClassName="h-6 w-6 bg-blue-500 rounded-full cursor-pointer focus:outline-none"
        trackClassName="h-2 bg-blue-500"
        value={values}
        onChange={handleChange}
        min={1000}
        max={1000000}
      />

      <div className="flex justify-between mt-4">
        <div className="flex flex-col">
          <label htmlFor="minPrice" className="text-sm text-gray-600 mb-1">
            Min Price:
          </label>
          <input
            type="number"
            id="minPrice"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
            value={values[0]}
            onChange={(e) => handleChange([+e.target.value, values[1]])}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="maxPrice" className="text-sm text-gray-600 mb-1">
            Max Price:
          </label>
          <input
            type="number"
            id="maxPrice"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
            value={values[1]}
            onChange={(e) => handleChange([values[0], +e.target.value])}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceSlider;
