import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo (Always left) */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Nav (Always right on large screens) */}
        <ul className="hidden md:flex items-center gap-10 text-lg">
          {["Home", "About", "Contact", "My Blog"].map((link) => (
            <li
              key={link}
              className="cursor-pointer border-b-2 border-transparent hover:border-black transition duration-300"
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Hamburger Button (Mobile only) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden flex flex-col gap-4 text-lg px-6 bg-white transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 py-4 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {["Home", "About", "Contact", "My Blog"].map((link) => (
          <li
            key={link}
            className="cursor-pointer border-b-2 border-transparent hover:border-black transition duration-300"
          >
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
