import Hero from "../components/Hero"
import Services from "../components/Services";
import Testimonials from "../components/Testimonial";
import CallToAction from "../components/CallToAction";

const Home = () => {
    return (
        <div>
            <Hero />
            <Services />
            <Testimonials />
            <CallToAction />
        </div>
    );
};

export default Home;