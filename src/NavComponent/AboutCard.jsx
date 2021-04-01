import React from "react";

const AboutCard = (props) => {
  return (
    <>
      <div className="cardx m-2">
        <div className="header">
          <img src={props.imgsrc} alt="" />
          <h2>{props.title}</h2>
        </div>
        <div className="wave-container">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
        <div className="icons">
          <a href=".//" className="link">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href=".//" className="link">
            <i className="fab fa-instagram"></i>
          </a>
          <a href=".//" className="link">
            <i className="fab fa-twitter"></i>
          </a>
          <a href=".//" className="link">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
        <div className="more">
          <h2>Cusat Student</h2>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
