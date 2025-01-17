import React, { useState } from "react";
import Breadcrumbs from "./pageProps/Breadcrumbs";

import ProductBanner from "./pageProps/shopPage/ProductBanner";
// import Navbar from "../../components/Navbar/navbar";
import ListOfProduct from "./pageProps/shopPage/listOfProduct";
import Category from "./pageProps/shopPage/shopBy/Category";
import Brand from "./pageProps/shopPage/shopBy/Brand";
import Price from "./pageProps/shopPage/shopBy/Price";
import Color from "./pageProps/shopPage/shopBy/Color";
// import Footer from "../../components/Footer/footer";
import { Button } from "@nextui-org/react";
import { GoTriangleDown } from "react-icons/go";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Shop = () => {
  const [itemToShow, setItemToShow] = useState(10);
  const [showSideBar, setShowSideBar] = useState(false);
  const [searchWord, setSearchWord] = useState("");

  const handleItemToShow = (value: number) => {
    setItemToShow(value);
  };

  const handleShowSideBar = () => {
    setShowSideBar(!showSideBar);
  };
  const handleSearchWord = (value: string) => {
    setSearchWord(value);
  };

  return (
    <>
      <div className="max-w-[1200px] w-[100%] mx-auto md:p-10 p-10 px-4">
        <Breadcrumbs title="Products" prevLocation="shop" />
        <div className="w-full h-full flex pb-20 gap-10">
          <div className="w-[95%] mx-auto md:mx-0 mdl:w-[90%] lgl:w-[75%] h-full flex flex-col gap-10">
            <ProductBanner
              handleShowSideBar={handleShowSideBar}
              showSideBar={showSideBar}
              handleItemToShow={handleItemToShow}
              handleSearchWord={handleSearchWord}
              searchWord={searchWord}
            />
            <div className="flex md:flex-row flex-col justify-between">
              {showSideBar ? (
                ""
              ) : (
                <>
                  <div className="flex md:hidden">
                    <div className="ml-[150px] flex justify-end items-center gap-2 text-base text-[#767676] relative">
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
                    </div>
                  </div>
                  <div className="w-[30%]  max-w-[300px] h-[100%] hidden md:flex flex-col gap-6 md:p-1">
                    <Price />
                    {/* <Category /> */}
                    <Brand />
                    <Color />
                  </div>
                </>
              )}

              <ListOfProduct itemPerPageNo={itemToShow} keyword={searchWord} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
