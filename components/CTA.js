import React from "react";
import Frus from "../public/Assets/frus.png";

const CTA = () => {
  return (
    <section className="bg-zinc-50 lg:py-14 sm:py-10 py-6 flex-1">
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl">
            Get full access to Celebration
          </h2>
          <p className="max-w-md mx-auto mt-4 leading-relaxed text-zinc-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className="mt-12">
          <div className="xl:max-w-md max-w-sm bg-white mx-auto rounded-2xl -rotate-3 hover:rotate-3 transition-all ease-in-out transform duration-300">
            <div className="sm:px-10 sm:py-12 px-5 py-6">
              <img
                src="https://cdn.rareblocks.xyz/collection/clarity/images/cta/3/crowny-logo.svg"
                alt=""
                className="w-auto h-7"
              />
              <blockquote className="mt-6">
                <p className="text-lg leading-relaxed text-slate-800">
                  “You made it so simple. My new site is so much faster and
                  easier to work with than my old site. I just choose the page,
                  make the change.”
                </p>
              </blockquote>
              <div className="flex mt-8 items-center">
                <div className="flex items-center">
                  <img
                    src="https://pbs.twimg.com/profile_images/1475418418312536068/HmbUY9x9_400x400.jpg"
                    alt=""
                    className="object-cover flex-shrink-0 h-11 w-11 rounded-full"
                  />
                  <div className="ml-3">
                    <p className="text-lg font-bold text-slate-800">Frus</p>
                    <p className="mt-[2px] text-slate-800">React Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form action="#" className="max-w-xl mx-auto mt-12">
          <div className="flex items-center sm:flex-row flex-col sm:justify-center sm:space-x-4 space-y-4 sm:space-y-0">
            <div className="w-full min-w-0 flex-1 sm:px-0 px-4">
              <input
                type="text"
                className="block w-full rounded-md border border-zinc-300 bg-zinc-100 p-4 transition-all duration-200 ease-in-out transform focus:outline-none focus:ring focus:ring-teal-700 accent-teal-600 text-zinc-800"
                placeholder="Enter email to get started"
              />
            </div>
            <button
              className="inline-flex items-center justify-center w-auto bg-teal-600 border border-transparent rounded-md p-4 font-semibold text-zinc-100
        hover:bg-teal-700 transition-colors ease-in-out duration-200 transform"
            >
              Get instant access
              <svg
                className="ml-3 -mr-1 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </form>
        <div className="mt-8 flex items-center justify-center px-8">
          <svg
            className="h-5 w-5 flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            ></path>
          </svg>
          <span className="ml-2 text-sm text-zinc-600">
            Your data is complely secured with us. We don’t share with anyone.
          </span>
        </div>
      </div>
    </section>
  );
};

export default CTA;
