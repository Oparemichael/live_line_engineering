import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-12">
      <div className="container mx-auto flex flex-col items-center">
        {/* Social Icons */}
        <div className="flex space-x-6 mb-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-300">
          © {new Date().getFullYear()} Live Line Engineering, All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
