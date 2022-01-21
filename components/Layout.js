import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Provider from "../context/context";

const Layout = ({ children }) => {
  return (
    <Provider>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <svg className="fixed top-0 left-0 z-50 w-full h-full opacity-25 pointer-events-none translate-y-0 overflow-hidden inline-block align-middle filter contrast-[30%] brightness-[70%]">
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".8"
            numOctaves="4"
            stitchTiles="stitch"
          ></feTurbulence>
          <feColorMatrix type="saturate" values="0"></feColorMatrix>
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)"></rect>
      </svg>
    </Provider>
  );
};

export default Layout;
