import React from "react";
import ServiceCard from "../components/ServiceCard";
import "./Services.scss";
import { GiArrowDunk } from "react-icons/gi";

const servicesData = [
  {
    title: "Individual",
    price: 200,
    includes: [
      "up to 1 - 1.5 hour",
      "1 location",
      "1 outfit",
      "20+ edited pictures",
      "up 5-7 days editing time",
    ],
  },
  {
    title: "Couple",
    price: 250,
    includes: [
      "up to 1 - 1.5 hour",
      "1 location",
      "1 outfit",
      "20+ edited pictures",
      "up 5-7 days editing time",
    ],
  },
  {
    title: "Family",
    price: 250,
    includes: [
      "up 1.5 hour",
      "1 location",
      "1 outfit",
      "25+ edited pictures",
      "up 5-7 days editing time",
    ],
  },
  {
    title: "Newborn",
    price: 250,
    includes: [
      "up 2 hour",
      "lifestyle photoshoot *",
      "up to 2 outfits",
      "25-30 edited pictures",
      "up 5-7 days editing time",
    ],
  },
];

const Services = () => {
  const services = servicesData.map((service, index) => {
    return <ServiceCard {...service} key={index} />;
  });

  return (
    <section className="services">
      <div className="title">
        <h1>Packages</h1>
        <span>
          click on a package to see gallery! <GiArrowDunk className="icon" />
        </span>
      </div>
      <div className="service">{services}</div>
      <p>
        Photoshoot includes assistance in choosing outfits, location, idea. All
        pictures will be deployed to an online gallery.
      </p>
      <p>* Lifestyle photoshoot at your place.</p>
    </section>
  );
};

export default Services;
