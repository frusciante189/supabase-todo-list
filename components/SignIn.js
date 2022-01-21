import React from "react";
import SignForm from "./SignForm";
import SignUpForm from "./SignUpForm";

const SignIn = () => {
  return (
    <section className="">
      <div className="min-h-full lg:flex lg:justify-between">
        <SignUpForm />
        <div className="relative grid w-full flex-1 place-items-center overflow-hidden bg-zinc-900 xl:px-24 lg:px-20 sm:px-6 px-4 py-12 lg:rounded-tl-md">
          <div className="absolute inset-0">
            <img
              src="https://cdn.rareblocks.xyz/collection/clarity/images/sign-up/4/background-pattern.png"
              alt=""
              className="w-full h-full -rotate-90 transform scale-150 object-cover object-top opacity-10"
            />
          </div>
          <div className="relative max-w-sm mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl bg-zinc-800">
              <svg
                className="h-5 w-auto fill-white"
                viewBox="0 0 33 23"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M32.0011 4.7203L30.9745 0C23.5828 0.33861 18.459 3.41404 18.459 12.4583V22.8687H31.3725V9.78438H26.4818C26.4819 6.88236 28.3027 5.17551 32.0011 4.7203Z"></path>
                <path d="M13.5421 4.7203L12.5155 0C5.12386 0.33861 0 3.41413 0 12.4584V22.8687H12.914V9.78438H8.02029C8.02029 6.88236 9.84111 5.17551 13.5421 4.7203Z"></path>
              </svg>
            </div>
            <blockquote className="mt-14">
              <p className="lg:text-3xl text-2xl font-medium text-white select-none">
                “You made it so simple. My new site is so much faster and easier
                to work with than my old site. I just choose the page, make the
                change.”
              </p>
            </blockquote>
            <div className="mt-12 flex items-center">
              <img
                src="https://pbs.twimg.com/profile_images/1475418418312536068/HmbUY9x9_400x400.jpg"
                alt=""
                className="object-cover w-14 h-14 flex-shrink-0 rounded-full"
              />
              <div className="ml-4">
                <p className="font-semibold text-white text-lg">Frus</p>
                <p className="text-lg mt-px text-zinc-300">React Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
