import React, { useState } from "react";
import { BsGridFill } from "react-icons/bs";
import { ImList } from "react-icons/im";
import { GoTriangleDown } from "react-icons/go";
import { Input } from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";

interface ProductBannerProps {
  handleShowSideBar: () => void;
  showSideBar: boolean;
  handleItemToShow: (text: number) => void;
  handleSearchWord: (text: string) => void;
  searchWord: string;
}

const ProductBanner: React.FC<ProductBannerProps> = ({
  handleShowSideBar,
  handleItemToShow,
  handleSearchWord,
  showSideBar,
  searchWord,
}) => {
  //   const [selected, setSelected] = useState("");
  const [girdViewActive, setGridViewActive] = useState(true);

  // const [listViewActive, setListViewActive] = useState(false);

  return (
    <div className="w-full flex md:w-[1100px] flex-row md:flex-row md:items-center justify-between">
      <div className="flex items-center md:gap-4">
        {showSideBar ? (
          <span
            onClick={handleShowSideBar}
            className={`${"border-[1px] border-gray-300 text-[#737373]"} w-8 h-8 text-lg flex items-center justify-center cursor-pointer gridView`}
          >
            <BsGridFill />
          </span>
        ) : (
          <span
            onClick={handleShowSideBar}
            className={`${"border-[1px] border-gray-300 text-[#737373]"} w-8 h-8 text-base flex items-center justify-center cursor-pointer listView`}
          >
            <ImList />
          </span>
        )}
      </div>

      <div className="flex items-center gap-2 md:gap-6 mt-1 md:mt-0">
        {/* <div className="flex items-center gap-2 text-base text-[#767676] relative">
          <label className="block">Sort by:</label>
          <select
            // onChange={(e) => setSelected(e.target.value)}
            id="countries"
            className="w-32 md:w-52 border-[1px] border-gray-200 py-1 px-4 cursor-pointer text-primeColor text-base block dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-primeColor"
          >
            <option value="Best Sellers">Best Sellers</option>
            <option value="New Arrival">New Arrival</option>
            <option value="Featured">Featured</option>
            <option value="Final Offer">Final Offer</option>
          </select>
          <span className="absolute text-sm right-2 md:right-4 top-2.5">
            <GoTriangleDown />
          </span>
        </div> */}
        <div className="flex items-center gap-2 text-base text-[#767676] relative">
          <Input
          className="w-[100%] ml-2 md:ml-0   md:w-[250px] p-0 text-[]"
            startContent={<CiSearch />}
            placeholder="Search for product by name"
            value={searchWord}
            onChange={(e) => handleSearchWord(e.target.value)}
            variant="bordered"
          />
        </div>
        {/* <div className="flex items-center gap-2 text-[#767676] relative">
          <label className="block">Show:</label>
          <select
            onChange={(e) => handleItemToShow(+e.target.value)}
            id="countries"
            className="w-16 md:w-20 border-[1px] border-gray-200 py-1 px-4 cursor-pointer text-primeColor text-base block dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-primeColor"
          >
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
            <option value="48">48</option>
          </select>
          <span className="absolute text-sm right-3 top-2.5">
            <GoTriangleDown />
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default ProductBanner;
