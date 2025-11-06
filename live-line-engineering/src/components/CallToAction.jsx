import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Ready to Upgrade Your Property?
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Contact us today for a free consultation and discover how Live Line
          Engineering can transform your home or business.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition"
          aria-label="Navigate to contact page for free consultation"
        >
          Get a Free Consultation
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
