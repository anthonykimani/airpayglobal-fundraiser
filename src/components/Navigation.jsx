import { useState } from "react";
import AirPayLogo from "../assets/svg/airpay-logo.svg";
import WecLogo from '../assets/svg/wec-logo.svg';

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  // handle toggle menu
  const handleToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <section className="text-[#14183E]">
      <nav className="flex justify-between md:justify-around items-center px-3 pt-3 ">
        <div className="flex items-center">
          <img src={AirPayLogo} alt="airpay-logo" />
          <img src={WecLogo} alt="wec-logo-logo" />
        </div>

        {/* desktop menu */}
        <ul className="hidden md:flex">
          <li className="mx-8 list-none font-bold">Home</li>
          <li className="mx-8 list-none">Donations</li>
          <li className="mx-8 list-none">About Us</li>
          <li className="mx-8 list-none">Conferences</li>
        </ul>

        <button className="hidden md:block rounded-sm border bg-[#007BFF] text-white font-semibold border-none px-10 py-3 my-2">
          Make Donation
        </button>

        {showMenu ? (
          <i
            className="block md:hidden bx bx-x bx-md"
            onClick={handleToggle}
          ></i>
        ) : (
          <i
            className="block md:hidden bx bx-menu bx-md"
            onClick={handleToggle}
          ></i>
        )}
      </nav>
      {/* Mobile Menu */}
      {showMenu ? (
        <ul className="absolute flex flex-col md:hidden h-screen w-screen bg-white ">
          <li className="m-3 list-none">Home</li>
          <li className="m-3 list-none">Features</li>
          <li className="m-3 list-none">Contact Us</li>
        </ul>
      ) : null}
    </section>
  );
};

export default Navigation;
