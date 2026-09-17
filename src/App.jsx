import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";
import JDProductionz from "./pages/JDProductionz";
import PFT from "./pages/PFT";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Support from "./pages/Support.jsx";

const App = () => {
  const [isBlurred, setIsBlurred] = useState(false);

  return (
    <main className="bg-black">
      <Navbar isBlurred={isBlurred} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Highlights />
            </>
          }
        />

        <Route path="/jdproductionz" element={<JDProductionz />} />
        <Route path="/pft" element={<PFT />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
