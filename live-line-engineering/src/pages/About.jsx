import React from "react";
import logo from "/images/logo.jpg";
const About = () => {
  return (
    <div className="px-6 py-6 mx-auto text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
      <img src={logo} alt="Solar Home" className="w-full h-full object-cover  rounded-2xl" />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      </div>
      </section>
      <section className="text-center mb-12 mt-10">
        <p className="text-lg">
          Live Line Engineering is dedicated to delivering optimal solar energy
          systems, innovative technologies, and efficient solutions. Our
          commitment to quality and customer satisfaction sets us apart.
        </p>
      </section>
    <div className="px-6 py-12 max-w-5xl mx-auto text-gray-800">
      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Our Mission</h2>
          <p>
            To empower homes and businesses with sustainable and efficient
            energy solutions, enhancing security and convenience through
            innovative technologies.
          </p>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Our Vision</h2>
          <p>
            To be the leading provider of integrated solar, automation, and
            smart home solutions, recognized for our expertise, reliability, and
            commitment to customer success.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Values</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Integrity</li>
          <li>Customer Focus</li>
          <li>Innovation</li>
          <li>Collaboration</li>
        </ul>
      </section>

      {/* Team */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Team</h2>
        <p>
          Our team comprises experienced engineers, technicians, and project
          managers who are passionate about delivering high-quality solutions.
          We work collaboratively to ensure seamless project execution and
          exceptional results.
        </p>
      </section>

      {/* Expertise */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Expertise</h2>
        <p>
          With over two decades in the industry, we have successfully completed
          numerous projects, ranging from residential solar systems to
          large-scale commercial installations. Our expertise spans across solar
          energy, automation, and smart home technologies.
        </p>
      </section>

      {/* History */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Company History</h2>
        <p>
          Founded in 2003, Live Line Engineering has grown from a small startup
          to a leading provider of integrated solutions. Our journey has been
          marked by continuous innovation, customer-centric approaches, and a
          dedication to excellence.
        </p>
      </section>

      {/* Commitment */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Commitment to Customer Satisfaction and Quality
        </h2>
        <p>
          At Live Line Engineering, customer satisfaction is our top priority.
          We are dedicated to providing personalized service, ensuring that each
          project meets the unique needs of our clients. Our quality assurance
          processes guarantee reliable and efficient solutions. We strive to
          exceed customer expectations through our professionalism, integrity,
          and commitment to excellence.
        </p>
      </section>
    </div>
    </div>
  );
};

export default About;
