import React from "react";
import CTA from "./CTA";
import Quote from "./Quote";

const Hero = () => {
  return (
    <div className="min-h-full lg:flex lg:justify-between">
      <CTA />
      <Quote />
    </div>
  );
};

export default Hero;
