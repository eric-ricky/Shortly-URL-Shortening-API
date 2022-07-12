import React from "react";
import "./hero.scss";

import heroImage from "../../images/illustration-working.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__inner-content">
          <h1 className="heading">
            More than just <br /> shorter links
          </h1>

          <p className="subheading">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>

          <a href="#" className="btn">
            Get Started!
          </a>
        </div>

        <div className="hero__inner-image">
          <img src={heroImage} alt="helo" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
