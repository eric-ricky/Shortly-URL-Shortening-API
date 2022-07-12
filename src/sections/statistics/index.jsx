import "./statistics.scss";
import React, { useState } from "react";
import ShortenForm from "../../components/ShortenForm";

import brandRecognitionIcon from "../../images/icon-brand-recognition.svg";
import detailedRecordIcon from "../../images/icon-detailed-records.svg";
import fullyCustomizableIcon from "../../images/icon-fully-customizable.svg";
import bgShortenDesktop from "../../images/bg-shorten-desktop.svg";
import bgShortenMobile from "../../images/bg-shorten-mobile.svg";
import Link from "../../components/Link";

const statisticsData = [
  {
    title: " Brand Recognition",
    body: " Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    icon: brandRecognitionIcon,
  },
  {
    title: "Detailed Records",
    body: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    icon: detailedRecordIcon,
  },
  {
    title: "Fully Customizable",
    body: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    icon: fullyCustomizableIcon,
  },
];

const Statistics = () => {
  const [outputs, setOutputs] = useState([]);

  const getOutput = (output) => {
    console.log(output);
    setOutputs((initial) => {
      return [output, ...initial];
    });
  };

  return (
    <section className="statistics">
      <div className="container">
        <div className="form-container">
          <ShortenForm getOutput={getOutput} />
          <img
            src={bgShortenDesktop}
            className="desktop"
            alt="bg-shorten-desktop"
          />
          <img
            src={bgShortenMobile}
            className="mobile"
            alt="bg-shorten-desktop"
          />
        </div>

        <div className="form-output">
          {outputs?.map((output, i) => (
            <Link
              key={i}
              originalLink={output.original}
              shortenedLink={output.shortened}
            />
          ))}
        </div>

        <div className="statistics__inner">
          <div className="statistics__inner-header">
            <div className="title"> Advanced Statistics</div>
            <div className="subtitle">
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </div>
          </div>

          <div className="statistics__inner-content">
            {statisticsData?.map((data, i) => (
              <div key={i} className="card">
                <div className="card__header">
                  <img src={data.icon} alt={data.title} />
                </div>

                <div className="card__content">
                  <p className="card__content-title">{data.title}</p>
                  <p className="card__content-body">{data.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
