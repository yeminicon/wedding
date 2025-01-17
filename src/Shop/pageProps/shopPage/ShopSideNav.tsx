import React from "react";
import Brand from "../shopPage/shopBy/Brand";
import Category from "../shopPage/shopBy/Category";
import Color from "../shopPage/shopBy/Color";
import Price from "../shopPage/shopBy/Price";

const ShopSideNav = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <Category icons={false} />
      <Brand />
      <Color />
      <Price />
    </div>
  );
};

export default ShopSideNav;
