import React from "react";
import { Icon } from "@iconify/react";
import { FooterData } from "../config/data";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__inner-brand">
          <a href="#">Shortly</a>
        </div>

        {FooterData?.map((item, i) => (
          <div key={i} className={`${item.title}`}>
            <div className="footer__title">{item.title}</div>
            <div className="footer__links">
              {item.data?.map((data, i) => (
                <p key={i}>{data}</p>
              ))}
            </div>
          </div>
        ))}

        <div className="footer__inner-social">
          <p className="icon">
            <Icon icon="dashicons:facebook" />
          </p>
          <p className="icon">
            <Icon icon="entypo-social:twitter" />
          </p>
          <p className="icon">
            <Icon icon="fa6-brands:pinterest" />
          </p>
          <p className="icon">
            <Icon icon="fa6-brands:instagram" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
