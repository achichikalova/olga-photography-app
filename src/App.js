import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Galleries from "./pages/Galleries";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/services" element={<Services />} />
      </Routes>
      <Routes>
        <Route path="/services/:theme" element={<Gallery />} />
      </Routes>
      <Routes>
        <Route path="/galleries" element={<Galleries />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
