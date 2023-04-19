import React from "react";
import Pricing from "./Pricing";
import img1 from "../../assets/port2.png";
import img2 from "../../assets/port3.png";

import "./Cards.css";


function Cards() {
  return (
    <body>
      <div className="card-container">
        <div className="card-section">
          <div className="card">
            <div className="card-front">
              <img src={img1} alt="card-front" />
            </div>
            <div className="card-back">
              <h3>Card Title</h3>
              <p>Card description goes here.</p>
              <a href="#">Learn More</a>
            </div>
          </div>
          <div className="card">
            <div className="card-front">
              <img src={img2} alt="card-front" />
            </div>
            <div className="card-back">
              <h3>Card Title</h3>
              <p>Card description goes here.</p>
              <a href="#">Learn More</a>
            </div>
          </div>
          <div className="card">
            <div className="card-front">
              {/* <img src={img1} alt="card-front" /> */}
            </div>
            <div className="card-back">
              <h3>Card Title</h3>
              <p>
              <Pricing />
              </p>
              <a href="#">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Cards;
