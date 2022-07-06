import React from "react";
import Olga from "../assets/images/about.jpg";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <div className="intro">
        <span>
          Hey,
          <br />
          I'm Olga
        </span>
      </div>
      <div className="about-info">
        <article>
          <p>Hi there!</p>
          <p>
            I'm so glad you're here! I'm Olga, a lifestyle photographer. I'm
            married and have two kids. I'm a nature lover.
          </p>
          <p>
            Photography is my life. When I go outside, I always take my camera
            with me. I like people, smiles, and sincerity. I love to hang out
            with my boys while I'm not shooting!
          </p>
          <p>
            Each of you is unique — this is what I want to show through my
            pictures, so I have an individual approach to each shooting. Don't
            be shy. Just be yourself, and we'll take some fantastic pictures.
          </p>
        </article>
        <img src={Olga} alt="my photo" />
      </div>
    </div>
  );
};

export default About;
