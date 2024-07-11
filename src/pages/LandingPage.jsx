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
    </div>
  );
};

export default LandingPage;
