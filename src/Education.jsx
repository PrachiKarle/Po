import React from "react";

const Education = () => {
  return (
    <>
      <div className="row m-0 p-0" id="education">
        <div className="col-12 m-0 px-3 py-5">
          <div className="row m-0 p-5">
            {/* degree */}
            <div className="col-lg-4 col-md-6 col-12 p-3">
              <div
                className="w-100 h-100 p-4"
                style={{ border: "1px solid #4D5055" }}
              >
                <h4
                  className="fw-bold"
                  style={{ lineHeight: "40px", color: "#4D5055" }}
                >
                  2021 - 2025
                </h4>
                <h2
                  className="fw-bold"
                  style={{ lineHeight: "40px", color: "#24262A" }}
                >
                  Bachelor of Engineering
                </h2>
                <h6 className="fw-bold" style={{ color: "#4D5055" }}>
                  Shri Chattrapati Shivaji Maharaj College Of Engineering
                  Ahmednagar.
                </h6>

                <h6 className="fw-bold" style={{ color: "#4D5055" }}>
                  Grade :{" "}
                </h6>
              </div>
            </div>

            {/* hsc */}
            <div className="col-lg-4 col-md-6 col-12 p-3">
              <div
                className="w-100 h-100 p-4"
                style={{ border: "1px solid #4D5055" }}
              >
                <h4
                  className="fw-bold"
                  style={{ lineHeight: "40px", color: "#4D5055" }}
                >
                  2020 - 2021
                </h4>
                <h2
                  className="fw-bold"
                  style={{ lineHeight: "40px", color: "#24262A" }}
                >
                  Higher Secondary Education
                </h2>
                <h6 className="fw-bold" style={{ color: "#4D5055" }}>
                  New Arts,Commerce & Science College Ahmednagar, Maharashtra.
                </h6>

                <h6 className="fw-bold" style={{ color: "#4D5055" }}>
                  Percentage : 85.33%
                </h6>
              </div>
            </div>

            {/* ssc */}
            <div className="col-lg-4 col-md-6 col-12 p-3">
              <div
                className="w-100 h-100 p-4"
                style={{ border: "1px solid #4D5055" }}
              >
                <h4
                  className="fw-bold"
                  style={{ lineHeight: "40px", color: "#4D5055" }}
                >
                  2018 - 2019
                </h4>
                <h2
                  className="fw-bold"
                  style={{ lineHeight: "40px", color: "#24262A" }}
                >
                  Secondary School Certificate
                </h2>
                <h6 className="fw-bold" style={{ color: "#4D5055" }}>
                  Shri Nrusinha Vidayalaya Ahmednagar, Maharashtra.
                </h6>

                <h6 className="fw-bold" style={{ color: "#4D5055" }}>
                  Percentage : 87.60%
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
