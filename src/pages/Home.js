import React from "react";
import Carousel from "framer-motion-carousel";
import "./Home.scss";
import Family from "../assets/images/family/9.jpg";
import Family2 from "../assets/images/family/10.jpg";
import Couple from "../assets/images/couple/8.jpg";
import Couple2 from "../assets/images/couple/10.jpg";
import Individual from "../assets/images/individual/7.jpg";
import Individual2 from "../assets/images/individual/4.jpg";

const Home = () => {
  const carousel = [Family2, Couple, Individual, Couple2, Individual2];
  return (
    <section className="home">
      <div className="carousel">
        <Carousel
          interval={10000}
          renderDots={({ activeIndex, setActiveIndex }) => <div />}
        >
          {carousel.map((item, i) => {
            return <img src={item} alt="carousel" key={i} draggable="false" />;
          })}
        </Carousel>
      </div>
      <div className="info">
        <div className="quote">
          <p>
            "Each of you is <em>unique</em> —
            <br />
            this is what I want to show
            <br />
            through my pictures."
          </p>
        </div>
        <img src={Family} alt="" />
      </div>
    </section>
  );
};

export default Home;
