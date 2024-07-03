import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />}></Route>
            <Route path="#about" element={<About />} />
            <Route path="#project" element={<Project/>} />
            <Route path="#contact" element={<Contact/>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};
export default App;
