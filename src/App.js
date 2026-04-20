import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BusinessServices from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import BusinessCTA from "./components/Businesscta";
import Footer from "./components/Footer";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/contactUs";
import ServicesPage from "./Pages/ServicesPages";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


// COMPONENT IMPORTS


export default function App() {

  return (
    <Router>
      {/* COMMON NAVBAR */}
      <Navbar/>
<ScrollToTop/>
    <Routes>
           <Route
             path="/"
             element={
               <>
               <HeroSection/>
               <BusinessServices/>
               <WhyChooseUs/>
               <BusinessCTA/>
              
               </>
             }
           />
   
           {/* Add other routes later */}
           
       
           <Route path="/about" element={<AboutPage/>} />
                      <Route path="/contact" element={<ContactPage/>} />
                       <Route path="/services" element={<ServicesPage/>} />



   
          
         </Routes>
         <Footer/>
   
    </Router>
  );
}
