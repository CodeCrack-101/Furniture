import React from "react";
import Home from "./Component/Home/Home";
import Products from "./Component/Products/Products";
import Contact from './Component/Contact/Contact'
import About from './Component/About/About'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Service from './Component/Services/Service'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/product" element={<Products/>} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About/>} />
      </Routes>
      <Routes>
        <Route path="/service" element={<Service/>} />
      </Routes>
    </Router>
  );
};

export default App;
