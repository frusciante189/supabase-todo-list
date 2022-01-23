import Image from "next/image";
import React from "react";
import { BiTimeFive } from "react-icons/bi";
import WP from "../public/Assets/desk.jpg";
import Link from "next/link";

const contact = () => {
  return (
    <section className="lg:px-6 sm:px-4 px-2 bg-zinc-50">
      <div className="flex flex-col">
        <Image src={WP} width={1920} height={650} objectFit="cover" />
        <div className="grid md:grid-cols-3 grid-cols-1 mt-3 gap-x-2">
          <Link href="mailto:frusthedev@gmail.com">
            <div className="md:h-60 h-32 flex flex-col space-y-5 items-start pt-16 pl-16 justify-start hover:scale-[1.03] transition-all duration-200 transform bg-zinc-50 hover:bg-zinc-200">
              <p className="inline-flex items-center font-light">
                <BiTimeFive size={20} className="mr-2 fill-teal-500" />
                Avg Response Time
                <span className="ml-2 font-medium">2 Days</span>
              </p>
              <div className="text-left">
                <p className="text-3xl text-zinc-800">Hire me</p>
                <span className="text-zinc-500 mt-2">Available</span>
              </div>
            </div>
          </Link>
          <Link href="mailto:frusthedev@gmail.com">
            <div className="md:h-60 h-32 flex flex-col items-center justify-center hover:scale-[1.03] transition-all duration-200 transform bg-zinc-50 hover:bg-zinc-200">
              <p className="text-zinc-800 text-3xl">frusthedev@gmail.com</p>
              <p className="text-zinc-500 mt-2">Say hello</p>
            </div>
          </Link>
          <Link href="https://twitter.com/frusdev">
            <div className="md:h-60 h-32 flex flex-col items-center justify-center hover:scale-[1.03] transition-all duration-200 transform bg-zinc-50 hover:bg-zinc-200">
              <p className="text-zinc-800 text-3xl">@frusthedev</p>
              <p className="text-zinc-500 mt-2">Ask me anything</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default contact;
