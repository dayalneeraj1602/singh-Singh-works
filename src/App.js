import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
// import errorPage from './pages/errorPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Products from "./pages/Products/Furnace";
import AllProducts from "./components/AllProducts";
import Furnace from "./pages/Products/Furnace";
import FurnaceParts from "./pages/Products/FurnaceParts";
import Manufacturing from "./pages/Products/Manufacturing";
import MetalToolRoom from "./pages/Products/MetalToolRoom";
import MetalFabricationWork from "./pages/Products/MetalFabricationWork";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services/furnace" element={<Furnace />} />
          <Route path="/services/FurnaceParts" element={<FurnaceParts />} />
          <Route path="/services/Manufacturing" element={<Manufacturing />} />
          <Route path="/services/MetalToolRoom" element={<MetalToolRoom />} />
          <Route
            path="/services/MetalFabricationWork"
            element={<MetalFabricationWork />}
          />

          {/* <Route path='*' element={<errorPage/> } /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
