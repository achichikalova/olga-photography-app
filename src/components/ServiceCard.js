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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: false }}
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
