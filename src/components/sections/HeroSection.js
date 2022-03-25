import React from "react";
import ills from "../../images/illustration-editor-desktop.svg";
import ills2 from "../../images/illustration-editor-mobile.svg";

const HeroSection = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col my-24 mx-auto overflow-hidden">
        <h1 className="text-4xl md:text-5xl">Designed for the future</h1>
        <div className="flex flex-col-reverse justify-betwwen gap-20 md:gap-40 items-center text-center md:text-left lg:flex-row md:ml-24 my-20 md:relative mx-auto">
          <div className="md:max-w-[50%] mx-10 sm:mx-0">
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-medium">
                Introducing an extensible editor
              </h3>
              <p className="text-xl">
                Blogr features an exceedingly intuitive interface which lets you
                focus on one thing: creating content. The editor supports
                management of multiple blogs and allows easy manipulation of
                embeds such as images, videos, and Markdown. Extensibility with
                plugins and themes provide easy ways to add functionality or
                change the looks of a blog.
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-20">
              <h3 className="text-3xl font-medium">
                Robust content management
              </h3>
              <p className="text-xl">
                Flexible content management enables users to easily move through
                posts. Increase the usability of your blog by adding customized
                categories, sections, format, or flow. With this functionality,
                you’re in full control.
              </p>
            </div>
          </div>
          <div className="lg:h-full lg:w-full">
            <img
              src={ills}
              alt="illustration"
              className="hidden lg:block lg:absolute lg:-top-28 lg:-right-60 lg:max-w-[50%]"
            />
            <img src={ills2} alt="illustration" className="lg:hidden" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
