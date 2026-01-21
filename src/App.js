import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import ErrorPage from "./pages/errorPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Products from "./pages/Products/Furnace";
import AllProducts from "./components/AllProducts";
import Furnace from "./pages/Products/Furnace";
import FurnaceParts from "./pages/Products/FurnaceParts";
import Footer from "./components/Footer";
import Manufacturing from "./pages/Products/Manufacturing";
import Ceramic from "./pages/Products/Ceramic";
import Conveyor from "./pages/Products/Conveyor";
import Leath from "./pages/Products/Leath";

import MetalToolRoom from "./pages/Products/MetalToolRoom";
import GearWork from "./pages/Products/GearWork";
import FurnaceDetail from "./pages/Products/FurnaceDetail";

import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/allproducts" element={<AllProducts />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/services/furnace" element={<Furnace />} />
            <Route path="/furnace/:id" element={<FurnaceDetail />} />
            <Route path="/services/ceramic_roller" element={<Ceramic />} />
            <Route path="/services/conveyorBelt" element={<Conveyor />} />
            <Route path="/services/MetalToolRoom" element={<MetalToolRoom />} />
            <Route path="/services/Manufacturing" element={<Manufacturing />} />

            {/* <Route path="/services/fabricationWork" element={<Fabrication />} /> */}
            {/* <Route path="/services/dcmotor&panel" element={<DcMotor />} /> */}
            <Route path="/services/leath" element={<Leath />} />
            <Route path="/services/FurnaceParts" element={<FurnaceParts />} />
            <Route path="/services/GearWork" element={<GearWork />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
