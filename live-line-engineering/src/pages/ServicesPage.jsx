import React from "react";
import Services from "../components/Services";

const ServicesPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
          Our Services
        </h1>

        {/* Services Component */}
        <Services />
      </div>
    </div>
  );
};

export default ServicesPage;
