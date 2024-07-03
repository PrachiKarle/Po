import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Education from "./Education";

const Header = () => {
  return (
    <>
      <Navbar />
      <Home/>
      <About/>
      <Education/>
      <Project/>
      <Contact/>
      <Footer />
    </>
  );
};

export default Header;
