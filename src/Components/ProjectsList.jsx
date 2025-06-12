import { Github, Presentation } from "lucide-react";
import React from "react";

const ProjectsList = () => {
  return (
    <section className="md:pr-50 md:pl-50 pr-10 pl-10 pt-9 pb-15">
      <div className="pb-14">
        <h1 className="font-bold pb-4 md:text-5xl text-3xl grid">Projects</h1>
        <span>
          A few of my public web-design projects that I kind of handled single
          handedly
        </span>
      </div>
      <div className="grid md:grid-cols-2 gap-16 justify-between">
        <div className="border-2 border-gray-400 p-6 rounded-xl">
          <h1 className="text-2xl font-bold pb-5">Url Shortner</h1>
          <span className="text-gray-500">
            Users can generate short URLs with either random strings or custom
            keywords, and set expiration periods for each shortened URL. The
            frontend and backend were created using the MERN stack.
          </span>
          <div className="grid grid-cols-2 gap-4 md:gap-7 items-center justify-center pt-7">
            <button className="text-sm flex min-h-2 items-center  justify-center gap-1 md:gap-3 bg-blue-500 text-white pr-3 md:pr-5 pl-3 md:pl-5 pt-2 rounded-lg cursor-pointer pb-3">
              <Presentation className="text-xs" /> Live Site
            </button>
            <button className="text-xs flex items-center justify-center gap-1 md:gap-3 bg-blue-500 text-white pr-3 md:pr-5 pl-3 md:pl-5 pt-2 rounded-lg cursor-pointer pb-3">
              <Github /> Github
            </button>
          </div>
        </div>
        <div className="border-2 border-gray-400 rounded-xl p-6">
          <h1 className="text-2xl font-bold pb-5">Url Shortner</h1>
          <span className="text-gray-500">
            Users can generate short URLs with either random strings or custom
            keywords, and set expiration periods for each shortened URL. The
            frontend and backend were created using the MERN stack.
          </span>
          <div className="grid grid-cols-2 gap-4 md:gap-7 items-center justify-center pt-7">
            <button className="text-sm flex min-h-2 items-center  justify-center gap-1 md:gap-3 bg-blue-500 text-white pr-3 md:pr-5 pl-3 md:pl-5 pt-2 rounded-lg cursor-pointer pb-3">
              <Presentation className="text-xs" /> Live Site
            </button>
            <button className="text-xs flex items-center justify-center gap-1 md:gap-3 bg-blue-500 text-white pr-3 md:pr-5 pl-3 md:pl-5 pt-2 rounded-lg cursor-pointer pb-3">
              <Github /> Github
            </button>
          </div>
        </div>
        <div className="border-2 border-gray-400 rounded-xl p-6">
          <h1 className="text-2xl font-bold pb-5">Url Shortner</h1>
          <span className="text-gray-500">
            Users can generate short URLs with either random strings or custom
            keywords, and set expiration periods for each shortened URL. The
            frontend and backend were created using the MERN stack.
          </span>
          <div className="grid grid-cols-2 gap-4 md:gap-7 items-center justify-center pt-7">
            <button className="text-sm flex min-h-2 items-center  justify-center gap-1 md:gap-3 bg-blue-500 text-white pr-3 md:pr-5 pl-3 md:pl-5 pt-2 rounded-lg cursor-pointer pb-3">
              <Presentation className="text-xs" /> Live Site
            </button>
            <button className="text-xs flex items-center justify-center gap-1 md:gap-3 bg-blue-500 text-white pr-3 md:pr-5 pl-3 md:pl-5 pt-2 rounded-lg cursor-pointer pb-3">
              <Github /> Github
            </button>
          </div>
        </div>
        <div className="border-2 border-gray-400 rounded-xl p-6">
          <h1 className="text-2xl font-bold pb-5">Url Shortner</h1>
          <span className="text-gray-500">
            Users can generate short URLs with either random strings or custom
            keywords, and set expiration periods for each shortened URL. The
            frontend and backend were created using the MERN stack.
          </span>
          <div className="grid grid-cols-2 gap-4 md:gap-7 items-center justify-center pt-7">
            <button className="text-sm flex min-h-2 items-center  justify-center gap-1 md:gap-3 bg-blue-500 text-white pr-3 md:pr-5 pl-3 md:pl-5 pt-2 rounded-lg cursor-pointer pb-3">
              <Presentation className="text-xs" /> Live Site
            </button>
            <button className="text-xs flex items-center justify-center gap-1 md:gap-3 bg-blue-500 text-white pr-3 md:pr-5 pl-3 md:pl-5 pt-2 rounded-lg cursor-pointer pb-3">
              <Github /> Github
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsList;
