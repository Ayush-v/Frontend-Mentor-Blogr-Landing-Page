import React, { useState } from "react";

import logo from "../images/logo.svg";
import menu from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";
import iconarrow from "../images/icon-arrow-dark.svg";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <header className="flex flex-row justify-between p-8 mx-auto max-w-screen-xl items-center">
        <div className="flex justify-between w-full">
          <div className="flex gap-12 items-center">
            <img src={logo} alt="logo" className="w-auto h-8 self-center" />

            <nav
              className={
                openNav ? "bg-white text-black test" : "hidden md:block"
              }
            >
              <ul className="flex gap-5 flex-col justify-center items-center">
                <li className="flex gap-2 items-center">
                  <span>Product</span>
                  <img src={iconarrow} alt="arrow" className="self-center" />
                </li>
                <li className="flex gap-2 items-center">
                  <span>Company</span>
                  <img src={iconarrow} alt="arrow" className="self-center" />
                </li>
                <li className="flex gap-2 items-center">
                  <span>Connect</span>
                  <img src={iconarrow} alt="arrow" className="self-center" />
                </li>
              </ul>

              <div className="h-[1px] bg-gray-300 md:hidden mx-6 my-4"></div>

              <div className="md:block flex flex-col mt-3 gap-3">
                <button className="font-semibold">Login</button>
                <button className="bg-red-400 py-2 px-6 font-medium text-white rounded-full mx-auto">
                  Sign Up
                </button>
              </div>
            </nav>
          </div>
        </div>
        <button
          className="md:hidden"
          onClick={() => {
            setOpenNav(!openNav);
          }}
        >
          <img src={openNav ? close : menu} alt="menu" />
        </button>
      </header>
    </>
  );
};

export default NavBar;
