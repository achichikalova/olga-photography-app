import React from "react";
import "./ServiceCard.scss";

const ServiceCard = ({ title, price, includes, additional }) => {
  const includesList = includes.map((item) => {
    return <li>{item}</li>;
  });

  return (
    <div className="service-card">
      <h2>{title}</h2>
      <ul>{includesList}</ul>
      <h3>
        Price ${price}
        <span>{additional && "*"}</span>
      </h3>
    </div>
  );
};

export default ServiceCard;
