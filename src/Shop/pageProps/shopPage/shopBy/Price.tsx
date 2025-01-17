import { useState } from "react";
import { Range } from "react-range";
import NavTitle from "./NavTitle";
import PriceSlider from "./priceSlider";

const Price = () => {
  const [priceRange, setPriceRange] = useState([1000, 1000000]);

  const handlePriceChange = (values: number[]) => {
    setPriceRange(values);
  };

  return (
    <div className="cursor-pointer">
      <NavTitle title="Shop by Price" icons={false} />
      {/* <div className="my-4">
        <Range
          step={1000}
          min={1000}
          max={1000000}
          values={priceRange}
          onChange={handlePriceChange}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                height: "6px",
                width: "100%",
                background: "#ddd",
                borderRadius: "3px",
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                height: "24px",
                width: "24px",
                backgroundColor: "#999",
                borderRadius: "50%",
              }}
            />
          )}
        />
        <div className="flex justify-between mt-2">
          <span>₦{priceRange[0].toLocaleString()}</span>
          <span>₦{priceRange[1].toLocaleString()}</span>
        </div>
      </div> */}

      <PriceSlider />
    </div>
  );
};

export default Price;
