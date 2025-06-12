import React, { useState } from 'react';
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="p-4 shadow-md md:flex md:justify-between items-center bg-white">
      <div className="flex justify-between items-center">
        <img src={logo} alt="logo" className="h-10 w-auto" />

        {/* Hamburger Button */}
        <button 
          className="md:hidden text-2xl" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰☰
        </button>
      </div>

      {/* Navigation Links */}
      <ul 
        className={`mt-4 md:mt-0 md:flex gap-14 text-lg mr-2 ${
          menuOpen ? 'block' : 'hidden'
        } md:block`}
      >
        {['Home', 'About', 'Contact', 'My Blog'].map((text) => (
          <li
            key={text}
            className="cursor-pointer border-b-2 border-transparent hover:border-black hover:border-b-2 transition duration-300"
          >
            {text}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
