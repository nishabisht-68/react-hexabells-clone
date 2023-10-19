import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import BuzzFeed from "./components/Buzz Feed/BuzzFeed";
import Home from "../src/components/Home/Home";
import About from "../src/components/About/About";
import Expertise from "./components/Expertise/Expertise";
import Services from "./components/Services/Services";
import ContactUs from "./components/Contact Us/ContactUs";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>

<Router>
    <Navbar />
    <Routes>
      <Route path="/react-hexabells-clone" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/expertise" element={<Expertise />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/buzzfeed" element={<BuzzFeed />} />
    </Routes>
    <Footer />

 

</Router>

   </>
  );
}

export default App;


