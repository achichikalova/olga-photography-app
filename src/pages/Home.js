import React from "react";
import "./Home.scss";
import Family from "../assets/images/family/9.jpg";
import Parallax from "../assets/images/couple/8.jpg";

const Home = () => {
  return (
    <section className="home">
      <div className="parallax">
        <img src={Parallax} alt="parallax" />
      </div>
      <div className="info">
        <div className="quote">
          {/* <p>
            "LIVE FOR
            <br />
            THE <em>MOMENTS</em>
            <br />
            YOU CAN'T PUT
            <br />
            INTO <em>WORDS</em>"
          </p> */}
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
