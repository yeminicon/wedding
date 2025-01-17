import React from "react";
import { BiCaretDown } from "react-icons/bi";
import { IconType } from "react-icons/lib";

interface NavTitleProps {
  title: string;
  icons: boolean;
}

const NavTitle:React.FC<NavTitleProps> = ({ title, icons }) => {
  return (
    <div className="flex items-center justify-between pb-5">
      {icons ? (
        <>
          <h3 className="font-bold lg:text-xl text-primeColor">{title}</h3>
          {icons && <BiCaretDown />}
        </>
      ) : (
        <>
          <h3 className="font-bold lg:text-xl text-primeColor">{title}</h3>
        </>
      )}
    </div>
  );
};

export default NavTitle;
