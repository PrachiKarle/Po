import React from "react";

const About = () => {
  return (
    <>
      <div
        className="row m-0 p-5"
        style={{ }}
        id="about"
      >

        <div className="col-md-6 col-12 pt-5 pb-0 px-3 fw-bold" >
          <p>
            {" "}
            <b>Name: </b> Prachi Karle{" "}
          </p>
          <p>
            {" "}
            <b>Address: </b> Maharashtra, India
          </p>
          <p>
            {" "}
            <b>Language: </b> English, Hindi{" "}
          </p>
          <p>
            {" "}
            <b>Hobby: </b> Travelling, Listening Music
          </p>
          <p>
            {" "}
            <b>Skills: </b> C++, HTML, CSS, Javascript, React, Git & Github
          </p>
        </div>

        <div
          className="col-md-6 col-12 p-4 fw-bold "
          id="about_box"
        >
          I recently completed a six-month internship at Cloud Infotechs in
          Pune, where I worked as a Frontend Developer. This experience allowed
          me to gain extensive knowledge and practical skills in frontend
          development. I am passionate about creating seamless user interfaces
          and continually improving my technical abilities. In my free time, I
          enjoy traveling and listening to music. These hobbies help me stay
          creative and motivated in both my personal and professional life. I am
          excited to bring my skills and enthusiasm to new challenges in the
          tech industry.
        </div>
      </div>
    </>
  );
};

export default About;
