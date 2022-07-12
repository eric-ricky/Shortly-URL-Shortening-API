import "./boost.scss";
import React from "react";

import bgBoostDesktop from "../../images/bg-boost-desktop.svg";
import bgBoostMobile from "../../images/bg-boost-mobile.svg";

const Boost = () => {
  return (
    <section className="boost">
      <div className="container boost__inner">
        <div className="boost__inner-content">
          <div className="title">Boost your links today</div>

          <div className="btn-container">
            <a href="#" className="btn">
              Get Started
            </a>
          </div>
        </div>
      </div>

      <img src={bgBoostDesktop} className="desktop" alt="bg-boost-desktop" />
      <img src={bgBoostMobile} className="mobile" alt="bg-boost-desktop" />
    </section>
  );
};

export default Boost;
