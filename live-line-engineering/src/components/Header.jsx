import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // 👈 icons for menu toggle

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="p-4 flex justify-center mt-3">
      <nav className="bg-blue-900 text-white px-6 py-3 rounded-2xl shadow-lg m-5 w-full flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-lg font-bold">Live Line Engineering</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/services" className="hover:underline">Services</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-800 text-white px-6 py-4 rounded-b-2xl shadow-lg w-full absolute top-20 left-0">
          <div className="flex flex-col space-y-4">
            <Link to="/" onClick={toggleMenu} className="hover:underline">Home</Link>
            <Link to="/about" onClick={toggleMenu} className="hover:underline">About</Link>
            <Link to="/services" onClick={toggleMenu} className="hover:underline">Services</Link>
            <Link to="/contact" onClick={toggleMenu} className="hover:underline">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
