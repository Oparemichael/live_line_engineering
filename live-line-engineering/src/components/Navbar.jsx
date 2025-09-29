import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white px-6 py-4 flex items-center justify-between">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Live Line Engineering</div>
        <div>
          <a href="#home" className="px-3 hover:underline">Home</a>
          <a href="#about" className="px-3 hover:underline">About</a>
          <a href="#services" className="px-3 hover:underline">Services</a>
          <a href="#contact" className="px-3 hover:underline">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
