import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Logo from "../images/logo.svg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const hasWindow = typeof window !== "undefined";
  const initialScreenWidth = hasWindow ? window.screen.width : null;

  const [screenWidth, setScreenWidth] = useState(initialScreenWidth);

  useEffect(() => {
    if (hasWindow) {
      const handleResize = () => setScreenWidth(window.screen.width);

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  return (
    <header className="header">
      <div className="container row">
        <a href="#home" className="logo">
          <img src={Logo} alt="Logo" />
        </a>

        {screenWidth <= 600 ? (
          <>
            {showMenu && (
              <nav className="nav">
                <ul className="nav__items">
                  <li className="nav__item">
                    <a href="#" className="nav__link">
                      Features
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="#" className="nav__link">
                      Pricing
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="#" className="nav__link">
                      Resources
                    </a>
                  </li>
                </ul>

                <div className="nav__btns">
                  <p className="nav__btn">Login</p>
                  <p className="btn nav__btn">Sign Up</p>
                </div>
              </nav>
            )}

            <div
              className="mobile-menu"
              onClick={() => setShowMenu((menu) => !menu)}
            >
              <Icon icon="charm:menu-hamburger" />
            </div>
          </>
        ) : (
          <>
            <nav className="nav">
              <ul className="nav__items">
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Features
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Pricing
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Resources
                  </a>
                </li>
              </ul>

              <div className="nav__btns">
                <p className="nav__btn">Login</p>
                <p className="btn nav__btn">Sign Up</p>
              </div>
            </nav>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
