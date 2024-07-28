import React from "react";
import { useNavigate } from "react-router-dom";
const Project = () => {
  return (
    <>
      <div className="row m-0 p-5" id="project">
        <div className="col-12 m-0 p-0">
          {/* //projects title */}
          <div className="row m-0 p-0">
            <h1 className="fw-bold text-center" style={{ color: "#212226" }}>
              Projects
            </h1>
            <div className="col-12  text-center m-0 p-3 px-5 ">
              <h6 className="fw-normal mx-5 px-5" style={{ color: "#4D5055" }}>
                Listed below are some of the most representative projects I've
                worked on.They range from basic web design for presentation
                sites to advanced web development for online shops
              </h6>
            </div>
          </div>
          {/* Project info */}
          <div className="row m-0 py-0 px-5">
            {/* HTML Project */}
            <div className="col-12 py-5 m-0 img1">
              <a
                href="https://prachicloudinfotechsmediaportal.netlify.app/"
                className="text-decoration-none"
              >
                <img
                  src="Image/mediaportal.jpeg"
                  height="100%"
                  width="100%"
                  alt=""
                />
              </a>

              <h6 style={{ color: "#4D5055", marginTop: "1%" }}>
                <b className="text-dark">Project : </b> Website for Media Portal
                using HTML.
              </h6>
            </div>
            {/* CSS Project */}
            <div className="col-12 py-5 m-0 img1">
              <a
                href="https://cloudinfotechsprachi.netlify.app/"
                className="text-decoration-none"
              >
                <img
                  src="Image/UMINEX.jpeg"
                  height="100%"
                  width="100%"
                  alt=""
                />
              </a>
              <h6 style={{ color: "#4D5055", marginTop: "1%" }}>
                <b className="text-dark">Project : </b> Website for Online
                Electronics Products Purchasing site using CSS.
              </h6>
            </div>
            {/* Bootstrap Project */}
            <div className="col-12 py-5 m-0 img1">
              <a
                href="https://prachicloudinfotech.netlify.app/"
                className="text-decoration-none"
              >
                <img
                  src="Image/sailor.jpeg"
                  height="100%"
                  width="100%"
                  alt=""
                />
              </a>
              <h6 style={{ color: "#4D5055", marginTop: "1%" }}>
                <b className="text-dark">Project : </b> Website using Bootstrap.
              </h6>
            </div>
            {/* React Project */}
            <div className="col-12 py-5 m-0 img1">
              <a
                href="https://redbytes.netlify.app/"
                className="text-decoration-none"
              >
                <img src="Image/react.jpeg" height="100%" width="100%" alt="" />
              </a>
              <h6 style={{ color: "#4D5055", marginTop: "1%" }}>
                <b className="text-dark">Project : </b> Website for Mobile
                Application Development Company using React.
              </h6>
            </div>
          </div>
        </div>
      </div>

      {/* More project on github */}

      <div className="row m-0 p-5">
        <div className="col-12 m-0 p-0 text-center">
          <h4 className="text-dark text-center fw-bold my-3">
            Discover More Project on Github
          </h4>
          <button
            className="btn btn-dark px-5 py-2"
            style={{ borderRadius: "50px" }}
          >
            {" "}
            <a
              href="https://github.com/PrachiKarle"
              className="text-decoration-none text-light"
            >
              Discover
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Project;
