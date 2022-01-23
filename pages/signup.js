import Link from "next/link";
import React from "react";
import SignWithGithub from "../components/UI/SignWithGithub";
import SignWithGoogle from "../components/UI/SignWithGoogle";

const signup = () => {
  return (
    <section className="lg:py-20 sm:py-16 py-12 bg-zinc-50 dark:bg-zinc-900 relative">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://cdn.rareblocks.xyz/collection/clarity/images/features/6/background-pattern.png"
          alt=""
          className="h-full w-full rotate-180 object-cover transform object-bottom opacity-10"
        />
      </div>
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
        <div className="max-w-md mx-auto lg:max-w-xl mt-10 relative ">
          <div className="absolute inset-x-[0.375rem] top-8 -bottom-4">
            <div className="gradient mx-auto w-full h-full rotate-180 rounded-3xl blur-xl filter opacity-80"></div>
          </div>
          <div className="relative lg:rounded-3xl border-2 rounded-2xl bg-zinc-100 overflow-hidden">
            <div className="sm:px-10 sm:py-12 pt-7 px-6">
              <div className="text-center">
                <h1 className="text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-semibold">
                  Make your business successful fast
                </h1>
                <p className="text-zinc-600 text-lg mt-6">
                  Sign up for Rareblocks today & start growing your business
                </p>
                <div className="space-y-4 mt-4">
                  <SignWithGoogle type="Sign up" />
                  <SignWithGithub type="Sign up" />
                </div>
                <a className="mt-8 text-center text-sm text-zinc-600 block">
                  or sign up with email
                </a>
              </div>
              <form action="#" className="mt-8">
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="font-medium text-zinc-800"
                    >
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        placeholder="Email address"
                        className="block w-full rounded-xl border border-zinc-400 bg-zinc-100 p-4 caret-zinc-800"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="font-medium text-zinc-800"
                    >
                      Password
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="password"
                        placeholder="Password (min. 8 character)"
                        className="block w-full rounded-xl border border-zinc-400 bg-zinc-100 p-4 caret-zinc-800"
                      />
                    </div>
                  </div>
                  <div>
                    <button className="flex w-full items-center justify-center rounded-xl border border-transparent py-4 px-8 bg-zinc-900 text-zinc-100 font-semibold hover:bg-zinc-800 transition-colors duration-200 transform focus:outline-2 outline-transparent focus:ring-2 focus:ring-offset-2 focus:ring-zinc-800">
                      Sign Up
                    </button>
                  </div>
                </div>
              </form>
              <svg
                className="mx-auto mt-8 w-auto h-4 text-zinc-400"
                viewBox="0 0 172 16"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 88 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 123 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 158 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 95 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 130 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 165 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 102 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 137 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 172 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 109 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 144 1)"
                ></line>
              </svg>
              <p className="text-center mt-5 text-zinc-800">
                Already joined?{" "}
                <Link href="/">
                  <a className="font-semibold">Login now</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default signup;
