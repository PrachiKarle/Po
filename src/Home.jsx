import React from "react";

const Home = () => {
  return (
    <>
      <div
        className="container-fluid p-5 text-center text-light"
        style={{ backgroundColor: "#212226", height: "90vh" }}
      >
        <h2 className="mt-5">Hello !</h2>
        <h1 className="display-4 fw-bold text-light">
          I'm <b>Prachi Karle</b>
        </h1>
        <h2 className="text-light">
          I love to create beautiful and efficient websites
        </h2>

        <button
          className="btn btn-primary px-5 py-3 mt-2 fw-bold"
          style={{ borderRadius: "50px" }}
        >
          <a
            href="https://github.com/PrachiKarle"
            style={{ borderRadius: "50px" }}
          ></a>
          Discover
        </button>
        <button
          className="btn btn-outline-light px-5 py-3 mt-2 mx-3 fw-bold"
          style={{ borderRadius: "50px" }}
        >
          <a
            href="#contact"
            style={{ borderRadius: "50px" }}
          ></a>
          <i className="bi bi-person-fill"></i>Contact Me
        </button>
      </div>
    </>
  );
};
export default Home;
