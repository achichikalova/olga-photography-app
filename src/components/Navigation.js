import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo7.png";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="logo">
        <NavLink to="/">
          <img src={Logo} alt="logo" />
        </NavLink>
      </div>
      <nav className="nav">
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "link")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "link")}
          to="/about"
        >
          About Me
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "link")}
          to="/services"
        >
          Services
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "link")}
          to="/contact"
        >
          Contact Me
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "link")}
          to="/galleries"
        >
          Galleries
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
