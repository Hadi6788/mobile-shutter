import React from "react";
// import Slider from "./components/Slider";

import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faqs from "./pages/Faqs";
import Shop from "./pages/Shop";
import LoginPage from "./pages/loginPage";
import Accounts from "./pages/account"
export default function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/account" element={<Accounts/>} />
      </Routes>
    </Router>
    
      {/* <Gadezone /> */}
      {/* <Accounts />
      <LoginPage/> */}
  
    </>
  )

  }
