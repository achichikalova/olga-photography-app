import React from "react";
import "./Footer.scss";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="icons">
        <AiOutlineInstagram className="icon" />
        <FaFacebookF className="icon" />
        <FaPinterestP className="icon" />
      </div>
      <p>All content Copyright © 2022 Olga Photography</p>
    </footer>
  );
};

export default Footer;
