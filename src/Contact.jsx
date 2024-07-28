import React from "react";

const Contact = () => {
  return (
    <>
      <div
        className="row m-0 p-5"
        style={{ backgroundColor: "#F7F9FB" }}
        id="contact"
      >
        <div className="col-12 text-center">
          <h2 className="text-dark fw-bold">Contact details</h2>
          <h6 style={{color:"#95989A"}}>Below are the details to reach out to me!</h6>
        </div>

        <div className="col-md-6 col-12 m-auto mt-4">
            <form action="" className="w-100">
                <div className="form-group mb-2">
                    <label htmlFor="name">Name</label> <br />
                    <input type="text" id="mail" className="form-control" />
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="mail">Email</label><br />
                    <input type="text" id="mail" className="form-control" />
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="detail">Detail</label><br />
                    <textarea name="" id="detail" className="form-control"></textarea>
                </div>

                <div className="form-group my-4 text-center">
                    <button className="btn btn-dark px-5 py-2 " style={{borderRadius:"50px"}}>Submit</button>
                </div>
            </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
