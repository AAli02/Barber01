import React from "react";
import "./Info.css";
import img1 from "../../assets/port2.png";
import img2 from "../../assets/port3.png";

const Info = () => {
  return (
    <div className="info-section">
      <div className="row">
        <div className="col">
          <img src={img1} alt="img1" className="col-img" />
        </div>
        <div className="col">
          <div className="col-text">
            <h2>Title</h2>
            <p>
              Elliot’s Barbershop is determined to offer the traditional
              services of a classic barbershop. What makes us different is we
              stay updated with the newest curriculum of barbering. To satisfy
              every customer that may want a classic look or new hairstyle.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <img src={img2} alt="img2" className="col-img" />
        </div>
        <div className="col">
          <div className="col-text">
            <h2>Title</h2>
            <p>
              Relax in our chairs and experience a straight razor shave – this
              is 30 minute service, I’ll give you a super close clean shaven
              look and apply three hot towels. Finished with our moisturizing
              cream to leave the skin feeling like new.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
