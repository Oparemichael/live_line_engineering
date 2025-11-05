import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Solar System Installation",
    img: "/images/Solar-panel.png",
    desc: "Install solar systems to reduce energy costs and environmental impact."
  },
  {
    title: "Electric Fence & Gate Automation",
    img: "/images/electric-fence.png",
    desc: "Secure your property with advanced electric fencing and gate automation."
  },
  {
    title: "Smart Home Solutions",
    img: "/images/smart-home.png",
    desc: "Integrate lighting, security, and automation for a smarter living experience."
  }
];

const Services = () => {
  return (
    <section className="p-8 text-center">
      <h3 className="text-2xl font-bold mb-4">Our Services</h3>
      <p className="mb-6 text-gray-600">Comprehensive Solutions for Your Needs</p>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-6 m-3 p-2 rounded-2xl">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow rounded overflow-hidden">
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-40 object-cover rounded-2xl"
            />
            <div className="p-4">
              <h4 className="font-semibold">{service.title}</h4>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Explore More Button */}
      <div className="mt-10 flex items-center justify-center space-x-3">
        {/* Text */}
        <span className="text-blue-800 text-lg font-semibold">
          Explore Our Services
        </span>

        {/* Circle Button */}
      <Link
        to="/services"
        className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white transition"
      >
        &gt;
      </Link>
      </div>
    </section>
  );
};

export default Services;
