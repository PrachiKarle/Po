import React from "react";

const Home = () => {
  return (
    <>
      <div
        className="container-fluid p-5 text-center text-dark"
        style={{ height: "90vh" }}
      >
        <h2 className="mt-5">Hello !</h2>
        <h1 className="display-4 fw-bold">
          I'm <b>Prachi Karle</b>
        </h1>
        <h5 className="text-dark text-center m-auto w-75">
        I am passionate about creating beautiful, user-friendly websites and have a strong foundation in solving coding problems and data structure questions. I bring a unique blend of frontend development expertise and algorithmic thinking to every project.
        </h5>

        <button
          className="btn btn-dark px-5 py-3 mt-5 fw-bold"
          style={{ borderRadius: "50px" }}
        >
          <a
            href="https://github.com/PrachiKarle"
            style={{ borderRadius: "50px" }} className="text-decoration-none text-light"
          >Discover Project</a>
          
        </button>
        <button
          className="btn btn-dark px-5 py-3 mt-5 mx-3 fw-bold"
          style={{ borderRadius: "50px" }}
        >
          <a
            href="https://github.com/PrachiKarle23"
            style={{ borderRadius: "50px" }}  className="text-decoration-none text-light"
          >
            Coding With DSA
          </a>
        </button>
      </div>
    </>
  );
};
export default Home;
