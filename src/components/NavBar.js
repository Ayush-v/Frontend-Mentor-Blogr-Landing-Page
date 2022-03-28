import React, { useState } from "react";

import logo from "../images/logo.svg";
import menu from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";
import iconarrow from "../images/icon-arrow-light.svg";
import iconarrowDark from "../images/icon-arrow-dark.svg";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <header className="flex justify-between p-8 mx-auto max-w-screen-xl">
        <div className="flex justify-between w-full items-center gap-6">
          <img src={logo} alt="logo" />
          <nav className={openNav ? "hidden md:block" : "responsive-navbar"}>
            <ul
              id="primary-navigation"
              className={"flex gap-6 flex-col md:flex-row items-center"}
            >
              <li className="flex gap-2 items-center relative group cursor-pointer hover:underline">
                <span>Product</span>
                <img
                  src={iconarrow}
                  alt="icon"
                  className="self-center hidden md:block"
                />
                <img
                  src={iconarrowDark}
                  alt="icon"
                  className="self-center md:hidden"
                />
                <ul className="drop-down group-hover:visible group-focus:visible">
                  <li>Overview</li>
                  <li>Pricing</li>
                  <li>Marketplace</li>
                  <li>Features</li>
                  <li>Integrations</li>
                </ul>
              </li>
              <li className="flex gap-2 items-center relative cursor-pointer hover:underline group">
                <span>Company</span>
                <img
                  src={iconarrow}
                  alt="arrow"
                  className="self-center md:block hidden"
                />
                <img
                  src={iconarrowDark}
                  alt="arrow"
                  className="self-center md:hidden"
                />
                <ul className="drop-down group-hover:visible group-focus:visible">
                  <li>About</li>
                  <li>Team</li>
                  <li>Blog</li>
                  <li>Careers</li>
                </ul>
              </li>
              <li className="flex gap-2 items-center relative cursor-pointer hover:underline group">
                <span>Connect</span>
                <img
                  src={iconarrow}
                  alt="arrow"
                  className="self-center md:block hidden"
                />
                <img
                  src={iconarrowDark}
                  alt="arrow"
                  className="self-center md:hidden"
                />
                <ul className="drop-down group-hover:visible group-focus:visible">
                  <li>Contact</li>
                  <li>Newsletter</li>
                  <li>LinkedIn</li>
                </ul>
              </li>
            </ul>
          </nav>
          <div className={openNav ? "hidden md:block" : "responsive-login"}>
            <button className="text-red-400 md:text-white">Login</button>
            <button className="bg-red-400 py-2 px-6 rounded-full md:bg-white md:text-red-400">
              Sign up
            </button>
          </div>
        </div>
        <button
          className="md:hidden"
          onClick={() => {
            setOpenNav(!openNav);
          }}
        >
          <img src={openNav ? menu : close} alt="menu" />
        </button>
      </header>
    </>
  );
};

export default NavBar;
