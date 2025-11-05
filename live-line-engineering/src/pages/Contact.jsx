import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 mt-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-12">
          We’d love to hear from you. Reach out to us through any of the channels below.
        </p>

        <div className="grid md:grid-cols-4 gap-8 text-left">
          {/* Location */}
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
            <FaMapMarkerAlt className="text-blue-900 text-3xl mb-4" />
            <h2 className="text-xl font-semibold mb-2">Location</h2>
            <p className="text-gray-600 text-center">Accra, Kwabenya</p>
          </div>

          {/* Phone */}
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
            <FaPhoneAlt className="text-blue-900 text-3xl mb-4" />
            <h2 className="text-xl font-semibold mb-2">Phone</h2>
            <a
              href="tel:+233550557276"
              className="text-gray-600 hover:text-blue-700 transition"
            >
              +233 550 55 7276
            </a>
          </div>

          {/* Email */}
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
            <FaEnvelope className="text-blue-900 text-3xl mb-4" />
            <h2 className="text-xl font-semibold mb-2">Email</h2>
            <a
              href="mailto:livelinesolutionsi1@gmail.com"
              className="text-gray-600 hover:text-blue-700 transition"
            >
              livelinesolutionsi1
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
            <FaWhatsapp className="text-green-600 text-3xl mb-4" />
            <h2 className="text-xl font-semibold mb-2">WhatsApp</h2>
            <a
              href="https://wa.me/c/233550557276"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-600 transition"
            >
              Chat with us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
