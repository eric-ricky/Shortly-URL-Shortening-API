import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import "./styles.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
