import React from 'react';


const Header = () => {
return (
<header className="p-4 flex justify-center mt-6">
<nav className="bg-blue-900 text-white px-6 py-3 rounded-2xl shadow-lg max-w-3xl w-full flex justify-between items-center">
<div className="text-lg font-bold">Live Line Engineering</div>
<div className="space-x-4">
<a href="#home" className="hover:underline">Home</a>
<a href="#about" className="hover:underline">About</a>
<a href="#services" className="hover:underline">Services</a>
<a href="#contact" className="hover:underline">Contact</a>
</div>
</nav>
</header>
);
};


export default Header;