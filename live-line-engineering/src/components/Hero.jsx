import solarHome from "/images/solarHome.jpg";


const Hero = () => {
return (
<section className="relative h-[70vh] w-full">
<img src={solarHome} alt="Solar Home" className="w-full h-full object-cover  rounded-2xl" />
<div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
<h2 className="text-white text-4xl font-bold text-center">
Powering Your Future with Innovative Solutions
</h2>
</div>
</section>
);
};


export default Hero;