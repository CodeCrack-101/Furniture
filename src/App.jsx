import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Component/Home/Home";
import Products from "./Component/Products/Products";
import Contact from './Component/Contact/Contact';
import About from './Component/About/About';
import Service from './Component/Services/Service';
import Boss from './Component/Category/Boss-chair';
import Bosss from './Component/Category/Boss-mesh-chair';
import BosssWork from './Component/Category/Boss-mesh-work-chair';
import Longe from './Component/Category/lounge-chair';
import Visiter from './Component/Category/Visiter-chair';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />

        {/* Separate category routes */}
        <Route path="/category/boss-chair" element={<Boss />} />
        <Route path="/category/boss-mesh-chair" element={<Bosss />} />
        <Route path="/category/boss-mesh-work-chair" element={<BosssWork />} />
        <Route path="/category/lounge-chair" element={<Longe/>} />
        <Route path="/category/visitor-chair" element={<Visiter/>} />

        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
