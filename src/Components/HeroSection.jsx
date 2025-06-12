import React from "react";
import { Hand, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="w-full font-poppins bg-gradient-to-tr from-[#f2f8ff] via-[#ecf5ff] to-[#e7f0fd] bg-gray-100 relative">
      <section className="md:pl-50 md:pr-50 p-10 pt-18  text-black">
        <h1 className="md:text-8xl text-6xl font-bold text-black-600 mb-11">
          Ochepo Emmanuel
        </h1>
        <div className="grid">
          <span className="text-3xl pb-8 text-blue-400">
            UI/UX Specialized Frontend Developer.
          </span>
          <span className="text-xl">
            I'm a UI/UX Specialized Frontend Developer. I design and develop
            modern Web Apps with pixel-perfection in mind.
          </span>
        </div>
        <div>
          <button className="md:cursor-pointer w-full pt-4 pb-4 md:w-2/8 flex gap-3 justify-center bg-blue-600 md:pl-15 md:pr-15 md:pt-5 md:pb-5 rounded-sm text-white mt-8 text-lg">
            Lets Talk{" "}
            <span className="flex items-center">
              <Mail size={20} />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
