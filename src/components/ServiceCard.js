import React from "react";
import { Link } from "react-router-dom";
import "./ServiceCard.scss";
import { motion } from "framer-motion";

const ServiceCard = ({ title, price, includes, additional }) => {
  const includesList = includes.map((item) => {
    return <li>{item}</li>;
  });

  const theme = title.toLowerCase();

  return (
    <motion.div
      className="service"
      initial={{ y: "-100vw" }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 1, bounce: 0.3 }}
    >
      <Link to={`/services/${theme}`} className="service-card">
        <h2>{title}</h2>
        <ul>{includesList}</ul>
        <h3>
          Price ${price}
          <span>{additional && "*"}</span>
        </h3>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
