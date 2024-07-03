import React, { useEffect, useState } from "react";

const Footer = () => {
  const [state,setState]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY > 80){
        setState(true);
      }
      else{
        setState(false);
      }
    })
  })
  return (
    <>
      <div className="row m-0 p-5 text-light fw-bold text-center" style={{backgroundColor:"#24262A"}}>
        <h6 style={{color:"#9DA6AC"}}>
          {" "}
          Copyright ©2024 All rights reserved  <br />
          Designed by{" "} <b >Prachi</b>
        </h6>
      </div>

      {
        state?
        <div className="bg-primary d-flex justify-content-center align-items-center p-4
        " style={{borderRadius:"50%",height:"20px" ,width:"30px",position:"fixed" ,bottom:"10px",right:"10px"}}>
          <i className="bi bi-arrow-up text-light fw-bold"></i>
        </div>:null
      }
      
    </>
  );
};

export default Footer;
