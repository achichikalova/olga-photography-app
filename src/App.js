import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Galleries from "./pages/Galleries";
import Contact from "./pages/Contact";
import ThankYouPage from "./pages/ThankYouPage";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:theme" element={<Gallery />} />
        <Route path="/galleries" element={<Galleries />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thanks" element={<ThankYouPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
