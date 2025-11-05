import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h1 className="text-5xl font-bold text-blue-900 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="bg-blue-900 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
