import React from "react";

import logo from "../images/logo.svg";

const Footer = () => {
  return (
    <div className="footer bg-slate-900 text-white">
      <div className="flex flex-col sm:flex-row sm:justify-around justify-center items-center gap-20 text-center py-20 rounded-tr-[90px] max-w-screen-xl mx-auto">
        <img src={logo} alt="Blogs" className="sm:ml-10 sm:self-start" />

        <div className="flex flex-col gap-10 sm:flex-row sm:justify-evenly w-full">
          <div className="flex flex-col gap-1">
            <h6 className="mb-6 text-xl font-medium">Product</h6>
            <div className="text-lg text-stone-400  cursor-pointer">
              <p className="hover:underline">Overview</p>
              <p className="hover:underline">Pricing</p>
              <p className="hover:underline">Marketplace</p>
              <p className="hover:underline">Features</p>
              <p className="hover:underline">Integrations</p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h6 className="mb-6 text-xl font-medium">Company</h6>
            <div className="text-lg text-stone-400 cursor-pointer">
              <p className="hover:underline">About</p>
              <p className="hover:underline">Team</p>
              <p className="hover:underline">Blog</p>
              <p className="hover:underline">Careers</p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h6 className="mb-6 text-xl font-medium">Connect</h6>
            <div className="text-lg text-stone-400 cursor-pointer">
              <p className="hover:underline">Contact</p>
              <p className="hover:underline">Newsletter</p>
              <p className="hover:underline">LinkedIn</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
