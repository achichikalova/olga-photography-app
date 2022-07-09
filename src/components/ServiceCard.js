import React from "react";

const ServiceCard = ({ title, price, includes, additional }) => {
  const includesList = includes.map((item) => {
    return <li>{item}</li>;
  });

  return (
    <div className="service-card">
      <h2>
        {title}/${price}
        <span>{additional && "*"}</span>
      </h2>
      <h3>
        ${price}
        <span>{additional && "*"}</span>
      </h3>
      <ul>{includesList}</ul>
      <button></button>
    </div>
  );
};

export default ServiceCard;
