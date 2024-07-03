import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md px-5 py-3" style={{position:"sticky", top:"0px",backgroundColor:"#212226"}}>
        <a href="#" className="text-decoration-none display-4" style={{color:"#FFFFFF",fontSize:"24px",fontWeight:"900" }}>
          <img src="Image/logo.png" style={{height:'60px' ,width:"50px"}} alt="" /> Prachi 
        </a>

        <button
          className="navbar-toggler bg-light text-dark"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse m-auto" id="nav">
          <ul className="navbar-nav ms-md-auto ms-0">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#education" className="nav-link">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a href="#project" className="nav-link">
                Project
              </a>
            </li>
            <li className="nav-itevm">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
