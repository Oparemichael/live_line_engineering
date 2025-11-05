import Header from "../components/Header";
import Hero from "../components/Hero"
import Products from "../components/Products";
import ProductCard from "../components/ProductCard";
import Services from "../components/Services";
import Testimonials from "../components/Testimonial";

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Products />
            <ProductCard />
            <Services />
            <Testimonials />
        </div>
    );
};

export default Home;