import React from "react";

const Content = () => {
  return (
    <section className="bg-zinc-50 lg:py-20 sm:py-16 py-12">
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center xl:gap-x-24 gap-12">
          <div className="relative lg:mb-12">
            <img
              src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg"
              alt=""
              className="absolute xl:-right-4 xl:-bottom-12 right-0 -bottom-8"
            />
            <div className="pr-6 pl-12">
              <img
                src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/girl-working-on-laptop.jpg"
                alt=""
                className="relative"
              />
            </div>
            <div className="absolute left-2 bottom-8 xl:bottom-20 pr-12">
              <div className="xl:max-w-md sm:max-w-sm max-w-xs rounded-lg bg-teal-700">
                <div className="sm:py-8 sm:px-5 py-3 px-4">
                  <div className="flex items-start">
                    <blockquote className="sm:ml-5 ml-3">
                      <p className="font-medium text-zinc-100 md:text-lg sm:text-base text-sm">
                        “You made it so simple. My new site is so much faster
                        and easier to work with than my old site.”
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:text-left text-center">
            <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl lg:leading-tight">
              We make things easy for projects.
            </h2>
            <p className="mt-9 text-xl leading-relaxed">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia conse duis enim velit mollit.
              Exercitation veniam.
            </p>
            <p className="mt-6 text-xl leading-relaxed">
              Velit officia conse duis enim velit mollit. Exercit ation veniam
              consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
