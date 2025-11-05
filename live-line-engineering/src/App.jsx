import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";   // 👈 fix typo: Hearder → Header
import Footer from "./components/Footer";   // 👈 import your Footer
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServicesPage from "./pages/ServicesPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header always visible */}
      <Header />

      {/* Main content area */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Footer always visible */}
      <Footer />
    </div>
  );
}

export default App;
