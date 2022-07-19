import React from "react";
import { Link } from "react-router-dom";
import "./ServiceCard.scss";

const ServiceCard = ({ title, price, includes, additional }) => {
  const includesList = includes.map((item) => {
    return <li>{item}</li>;
  });

  const theme = title.toLowerCase();

  return (
    <div className="service">
      <Link to={`/services/${theme}`} className="service-card">
        <h2>{title}</h2>
        <ul>{includesList}</ul>
        <h3>
          Price ${price}
          <span>{additional && "*"}</span>
        </h3>
      </Link>
    </div>
  );
};

export default ServiceCard;
