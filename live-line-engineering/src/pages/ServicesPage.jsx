import React from "react";
import { FaBolt, FaPaintRoller, FaBuilding, FaDraftingCompass } from "react-icons/fa";
import CallToAction from "../components/CallToAction";

const services = [
  {
    title: "Electrical Services",
    icon: <FaBolt className="text-blue-900 text-4xl mb-4" />,
    items: [
      "Residential and commercial wiring",
      "Power distribution and panel installations",
      "Electrical maintenance and troubleshooting",
      "Lighting and energy-saving solutions",
      "Generator and solar system setups",
    ],
  },
  {
    title: "Epoxy Works",
    icon: <FaPaintRoller className="text-blue-900 text-4xl mb-4" />,
    items: [
      "Epoxy floor coating (industrial, decorative, and commercial)",
      "Epoxy resin tables and countertops",
      "Artistic custom designs for interiors and branding",
    ],
  },
  {
    title: "Building & Construction",
    icon: <FaBuilding className="text-blue-900 text-4xl mb-4" />,
    items: [
      "Structural design and construction",
      "Renovation and finishing works",
      "Plumbing, tiling, and painting services",
      "Smart home electrical integration",
    ],
  },
  {
    title: "Building Planning & Design",
    icon: <FaDraftingCompass className="text-blue-900 text-4xl mb-4" />,
    items: [
      "Architectural planning and 3D layout",
      "Electrical and mechanical schematics",
      "Project cost estimation and supervision",
    ],
  },
];

const ServicesPage = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 mt-12">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-12">Our Services</h1>

        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-8 text-left hover:shadow-xl transition"
            >
              <div className="flex flex-col items-center md:items-start">
                {service.icon}
                <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <CallToAction />
    </section>
  );
};

export default ServicesPage;
