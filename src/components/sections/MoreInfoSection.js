import React from "react";

import illustration from "../../images/illustration-laptop-mobile.svg";

const MoreInfoSection = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center text-center py-20 max-w-screen-xl mx-auto">
        <img src={illustration} alt="illus" />
        <div className="mx-10 md:text-left">
          <div>
            <h1 className="text-3xl font-medium my-8">Free, open, simple</h1>
            <p className="text-xl">
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </div>
          <div>
            <h1 className="text-3xl font-medium my-8">Powerful tooling</h1>
            <p className="text-xl">
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreInfoSection;
