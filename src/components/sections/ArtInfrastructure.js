import React from "react";

import mockup from "../../images/illustration-phones.svg";

const ArtInfrastructure = () => {
  return (
    <>
      <div className="art bg-blue-900  rounded-tr-[90px] rounded-bl-[90px]">
        <div className="flex flex-col md:flex-row justify-between items-center text-center w-full max-w-screen-xl mx-auto">
          <img src={mockup} alt="phones" className="-translate-y-28 mt-4" />

          <div className="mx-10 pb-20 lg:text-left">
            <h1 className="text-5xl mb-6 text-white">
              State of the Art Infrastructure
            </h1>
            <p className="text-xl mb-6 text-white">
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtInfrastructure;
