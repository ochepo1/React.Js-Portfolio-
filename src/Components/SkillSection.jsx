import React from "react";

const SkillSection = () => {
  return (
    <section className=" md:pb-16 pt-8 md:pr-50 md:pl-50 p-10 md:pt-15">
      <div>
        <h1 className="font-bold pb-4 md:text-4xl text-3xl grid">Technical Skill Set</h1>
        <span className="text-gray-400">
          Constantly keeping myself updated with the latest tech in frontend
          space!
        </span>
      </div>
      <div className="grid md:grid-cols-2 justify-between gap-4 md:gap-16 pt-9">
        <div className="border-1 border-gray-300 p-6 rounded-2xl grid gap-4">
          <div className="flex items-center gap-3 text-lg">
            <span className="text-2xl font-bold text-blue-500">HTML</span>
            <div className=" flex gap-4 text-center text-xl font-normal">
              <span>.</span>
              <span>6 Years</span>
            </div>
          </div>
          <span>
            I always prefer semantic markup and keep accesibility in mind while
            writing my html. I keep the structure consistent so that it can be
            targeted well with CSS & can be scaled further.
          </span>
          <div className="flex gap-6">
            <span className="bg-gray-200  text-sm p-1 rounded-full border-1 font-light border-amber-400 border-dashed">
              HTML5
            </span>
            <span className="bg-gray-200  text-sm p-1 rounded-full border-1 font-light border-amber-400 border-dashed">
              SEMANTIC
            </span>
          </div>
        </div>
        <div className="border-1 border-gray-300 p-6 rounded-2xl grid gap-4">
          <div className="flex items-center gap-3 text-lg">
            <span className="text-2xl font-bold text-blue-700">CSS/SASS</span>
            <div className=" flex gap-4 text-center text-xl font-normal">
              <span>.</span>
              <span>6 Years</span>
            </div>
          </div>
          <span>
            I write modular & scalable CSS to design pixel-perfect websites,
            with strong layout debugging skills. Can leverage the benefits of
            frameworks like Bootstrap and Tailwind to create aesthetic and
            beautiful layouts from absolutely scratch.
          </span>
          <div className="flex gap-6">
            <span className="bg-gray-200  text-sm p-1 rounded-full border-1 font-light border-amber-400 border-dashed">
              BOOTSTARP
            </span>
            <span className="bg-gray-200  text-sm p-1 rounded-full border-1 font-light border-amber-400 border-dashed">
              TAILWIND
            </span>
            <span className="bg-gray-200  text-sm p-1 rounded-full border-1 font-light border-amber-400 border-dashed">
              CSS-IN-JS
            </span>
          </div>
        </div>
        <div className="border-1 border-gray-300 p-6 rounded-2xl grid gap-4">
          <div className="flex items-center gap-3 text-lg">
            <span className="text-2xl font-bold text-blue-700">Javascript</span>
            <div className=" flex gap-4 text-center text-xl font-normal">
              <span>.</span>
              <span>2 Years</span>
            </div>
          </div>
          <span>
            Skilled in DOM manipulation, event handling, APIs, ES6/ES7, async
            operations, and promises. Proficient in utilizing a wide range of
            modern JavaScript frameworks and tools.
          </span>
          <div className="flex gap-6">
            <span className="bg-gray-200  text-sm p-1 rounded-full border-1 font-light border-amber-400 border-dashed">
              ES6
            </span>
            <span className="bg-gray-200  text-sm p-1 rounded-full border-1 font-light border-amber-400 border-dashed">
              REACT JS
            </span>
          </div>
        </div>
        <div className="border-1 border-gray-300 p-6 rounded-2xl grid gap-4">
          <div className="flex items-center gap-3 text-lg">
            <span className="text-2xl font-bold text-blue-700">Node.js</span>
            <div className=" flex gap-4 text-center text-xl font-normal">
              <span>.</span>
              <span>1 Years</span>
            </div>
          </div>
          <span>
            Developing scalable backend services for Web Apps, SaaS platforms,
            and APIs using Node.js. Skilled in Express.js, database management,
            and creating custom HTML/Markdown to DITA parsers.
          </span>
          <div className="flex gap-6">
            <span className="bg-gray-200  text-sm p-1 rounded-full border-1 font-light border-amber-400 border-dashed">
              ES6
            </span>
            <span className="bg-gray-200  text-sm p-1 rounded-full border-1 font-light border-amber-400 border-dashed">
              MONGODB
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
