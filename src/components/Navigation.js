import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="logo">
        <NavLink to="/">Olga Schastlivceva</NavLink>
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
          to="/portfolio"
        >
          Recent Work
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
