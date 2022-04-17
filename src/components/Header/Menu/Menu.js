import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Menu.style.scss";
import { Link } from "react-router-dom";
import ReactAnime from "react-animejs";
import { ReactComponent as Circle } from "../../../Svg/Icons/circle.svg";
// import { ReactComponent as MenuButton } from "../../../Svg/Icons/menu.svg";

const Menu = () => {
  const menu = useSelector((state) => state.menu);

  const [showMenu, setShowMenu] = useState(false);
  const [showCircle, setShowCircle] = useState(true)

  const { Anime } = ReactAnime;

  const circle =
      "M1.49923 33.4999C-0.500114 72.4999 32.4994 57 40.3799 78.4997C48.2605 99.9995 126.999 89.9998 119.999 37.4999C112.999 -15 3.49856 -5.5002 1.49923 33.4999Z",
    circle1 =
      "M2.49957 40C13.4993 84.4999 10.4999 109 63.9999 96.5C117.5 84 137 77 100.5 31.5C64 -14 -8.50017 -4.49997 2.49957 40Z";

  const navigator = () => {
    let project = document.getElementById("project");
    let about = document.getElementById("about");
    let contact = document.getElementById("contact");
    try {
      if (menu.selectedMenuLabel === "Projects") {
        project.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      if (menu.selectedMenuLabel === "About") {
        about.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      if (menu.selectedMenuLabel === "Contact") {
        contact.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    menu && (
      <nav>
        { showCircle && <button
          className="menu-button"
          onClick={() => {
            setShowMenu(true);
            setShowCircle(false)
          }}
        >
          <span className="circle-animation">
            <Anime
              initial={[
                {
                  targets: "#circle > path",
                  easing: "cubicBezier(.37,.31,.2,.91)",
                  duration: 8000,
                  loop: true,
                  autoplay: true,
                  d: [
                    { value: [circle, circle1] },
                    { value: circle },
                    { value: circle1 },
                  ],
                },
              ]}
            >
              <Circle />
            </Anime>
          </span>
          menu
        </button>}

        {showMenu && (
          <ul className="main-menu">
            {menu.map((menuItem) => {
              return (
                <li
                  key={menuItem.id}
                  className="main-item"
                  onClick={() => {
                    menu.selectedMenuLabel = menuItem.label;
                    navigator();
                  }}
                >
                  <Link to={menuItem.url}>{menuItem.label}</Link>
                </li>
              );
            })}
            <button
              className="close-menu"
              onClick={() => {
                setShowMenu(false);
                setShowCircle(true)
              }}
            ></button>
          </ul>
        )}
      </nav>
    )
  );
};

export default Menu;
