import React from "react";
import "./Footer.scss";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="icons">
        <a
          href="https://www.instagram.com/olya.schastlivceva/"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineInstagram className="icon" />
        </a>
        <a
          href="https://www.facebook.com/olyaschastlivceva.ca"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF className="icon" />
        </a>
        <a
          href="https://www.pinterest.ca/olyaschastlivceva/"
          target="_blank"
          rel="noreferrer"
        >
          <FaPinterestP className="icon" />
        </a>
      </div>
      <p>All content Copyright © 2022 Olga Photography</p>
    </footer>
  );
};

export default Footer;
