import React from "react";
import NavBar from "../NavBar";

const MainSection = () => {
  return (
    <>
      <div className="app text-white relative overflow-hidden rounded-bl-[90px]">
        <NavBar />
        <div className="flex flex-col justify-center items-center text-center gap-8 py-32 mx-2.5 z-10">
          <h1 className="text-4xl sm:text-5xl font-medium">
            A modern publishing platform
          </h1>
          <p>Grow your audience and build your online brand</p>

          <div className="flex gap-6">
            <button className="bg-white text-red-400 p-3 rounded-3xl">
              Start for free
            </button>
            <button className="px-4 border rounded-3xl">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
