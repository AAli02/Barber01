import React from "react";

const pricing = {
  Haircut: 35,
  "Haircut and Beard": 45,
  "Hot Leather Shave": 35,
  "Deluxe Package": 65,
  Children: 25,
  Beard: 20,
};

function Pricing() {
  return (
    <div>
      <h2>Our Prices:</h2>
      <ul>
        {Object.entries(pricing).map(([service, price]) => (
          <li key={service}>
            {service}: ${price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pricing;