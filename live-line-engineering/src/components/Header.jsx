import React from "react";
import { Link } from "react-router-dom";  // 👈 import Link

const Header = () => {
  return (
    <header className="p-4 flex justify-center mt-6">
      <nav className="bg-blue-900 text-white px-6 py-3 rounded-2xl shadow-lg m-5 w-full flex justify-between items-center">
        <div className="text-lg font-bold">Live Line Engineering</div>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/services" className="hover:underline">Services</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
