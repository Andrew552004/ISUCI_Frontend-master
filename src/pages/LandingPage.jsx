import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";

const LandingPage = () => {
  return (
    <div className="landing-page-background">
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
      <About></About>
      <footer className="bg-[#3F3F49] p-4 text-white text-center">
        <p>&copy; 2024 ISUCI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
