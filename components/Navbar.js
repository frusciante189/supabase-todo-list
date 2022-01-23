import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="py-4 bg-zinc-50">
      <div className="container w-full mx-auto lg:px-8 sm:px-6 px-4">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/">
              <a className="flex items-center text-2xl tracking-widest font-medium text-zinc-800">
                <span className="text-pink-700 font-extrabold text-2xl mr-1">
                  /
                </span>
                Frus
              </a>
            </Link>
          </div>
          <div className="lg:hidden flex">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <nav className="hidden lg:flex lg:items-center lg:justify-center space-x-16">
            <Link href="/">
              <a className="font-semibold text-zinc-900 hover:text-zinc-400 transition-all ease-in-out duration-200 transform">
                About
              </a>
            </Link>
            <Link href="/contact">
              <a className="font-semibold text-zinc-900 hover:text-zinc-400 transition-all ease-in-out duration-200 transform">
                Contact
              </a>
            </Link>
            <Link href="/">
              <a className="font-semibold text-zinc-900 hover:text-zinc-400 transition-all ease-in-out duration-200 transform">
                Resources
              </a>
            </Link>
          </nav>
          <nav className="hidden lg:flex">
            <Link href="/signup">
              <a className="inline-flex items-center justify-center border rounded-md border-transparent bg-zinc-900 py-2 px-6 font-semibold leading-7 text-zinc-100 hover:bg-zinc-700 transition-all ease-in-out duration-200 transform">
                Try for free
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
