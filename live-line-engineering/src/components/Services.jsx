import solarImg from "../images/solar-panel.png";
import fenceImg from "../images/electric-fence.png";
import smartImg from "../images/smart-home.png";

const services = [
  {
    title: "Solar System Installation",
    img: "/images/solar-panel.png",
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
    <section className="p-8">
      <h3 className="text-2xl font-bold mb-4">Our Services</h3>
      <p className="mb-6 text-gray-600">Comprehensive Solutions for Your Needs</p>
      <div className="grid md:grid-cols-3 gap-6 rounded-2xl">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow rounded overflow-hidden">
            <img src={service.img} alt={service.title} className="w-full h-40 object-cover rounded-2xl" />
            <div className="p-4">
              <h4 className="font-semibold">{service.title}</h4>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
