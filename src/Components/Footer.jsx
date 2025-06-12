import {
  GitBranchIcon,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div class="relative h-full w-full bg-white"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_.5px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_.4px,transparent_1px)] bg-[size:28px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <footer className=" pr-5 pl-5 md:pr-50 pt-10 pb-10 md:pl-50 flex flex-col gap-6 items-center justify-between mt-10">
        {/* <h1 className="md:text-6xl text-5xl font-bold">Ochepo Emmanuel</h1> */}
        <span className="md:text-3xl text-xl">ochepoemmanuel14@gmail.com</span>
        <div>
          <ul className="flex items-center md:gap-7 cursor-pointer text-blue-500">
            {[<Github />, <Linkedin />, <Instagram />, <Twitter />].map((text) => (
              <li
                key={text}
                className="cursor-pointer bg-white p-3 rounded-lg border-transparent hover:translate-y-1.5 hover:bg-blue-500 hover:text-white transition duration-300">
                {text}
              </li>
            ))}
          </ul>
        </div>
        <small className="text-lg">Made by @ Ochepo Emmanuel</small>
      </footer>
    </div>
  );
};

export default Footer;
