import React from "react";

import NavbarCom from "./Navbar";
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import Pricing from "./Pricing";
import Contact from "./Contact";
import { BrowserRouter, Routes , Route, } from "react-router-dom";
import FAQs from "./FAQs";

function NavHome () {
    return (
        <BrowserRouter>
        <NavbarCom   />
        <Routes>
        
        {/* <Route path="/" element={<NavbarCom />} /> */}
        {/* <Route index element={<NavbarCom />} /> */}
        <Route path="/home" element = {<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>

        </BrowserRouter>
        
    );
}

export default NavHome;