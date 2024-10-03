import { Button } from "@nextui-org/react";

const Navbar = () => {
  return (
    <div className="w-full shadow-lg sticky bg-white top-0 z-10 ">
    <div className="w-[100%]  sticky top-0 px-5 h-[70px] shadow-sm max-w-[400px] mx-auto md:max-w-[1200px] bg-white ">
      <div className="w-full flex flex-row justify-between h-[80px]  items-center">
        <div className="flex flex-row">
          <div>
            <div className=" font-extrabold text-[1.35rem] mt-[-5px]">L</div>
            <div className="mt-[-22px] ml-2 font-extrabold text-[1.25rem]">b</div>
          </div>
          <h1 className="font-bold text-[1.25rem] ml-1"> Lashnetic</h1>
        </div>
        <div className="flex flex-row">
          {/* <ul className="md:flex space-x-4 mt-2 mr-5 hidden">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:underline">
                Login
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul> */}

          <Button variant="bordered" className="hidden md:flex">
            Login
          </Button>
          <Button variant="bordered" className="bg-blue-600 ml-3 text-white">
            Get Started
          </Button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
