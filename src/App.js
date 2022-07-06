import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
