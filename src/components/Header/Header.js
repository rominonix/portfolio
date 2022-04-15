import React from "react";
import Menu from "./Menu/Menu";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.style.scss";

const Header = () => {
  const settings = useSelector((state) => state.settings);
  const home = useSelector((state) => state.home);
  const [navbar, setNavbar] = useState(false);

  const changeHeaderBg = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHeaderBg);
    return () => {
      window.removeEventListener("scroll", changeHeaderBg);
    };
  });

  const toHero = () => {
    let start = document.getElementById("start");
    if (home.startLabel === "Start") {
      start.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className={navbar ? "header active" : "header"}>
      <div className="content-full">
        <div className="row justify-between">
          <div className="col-2">
            <Link to="/">
              <img
                className="logo m-l-5"
                src={settings.logo?.value}
                alt="logotype"
                onClick={() => {
                  home.startLabel = home.label;
                  toHero();
                }}
              />
            </Link>
          </div>
          <div className="col-22">
            <Menu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
