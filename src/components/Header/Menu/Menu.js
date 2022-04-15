import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Menu.style.scss";
import { Link } from "react-router-dom";
import ReactAnime from "react-animejs";
import { ReactComponent as Circle } from "../../../Svg/Icons/circle.svg";
import {ReactComponent as MenuButton} from "../../../Svg/Icons/menu.svg"

const Menu = () => {
  const menu = useSelector((state) => state.menu);

  const [showMenu, setShowMenu] = useState(false);

  const { Anime, stagger } = ReactAnime;

  // const handleMenu = () => {
  //   setShowMenu(true)
  //   console.log('holi')
  // }

  const circleMenu = "M4.49974 38.5C19.2614 61.5 -17.5 115 30 95C77.5 75 86.4994 113 111.499 91.5C118.409 84.3805 108.816 54.5214 116.499 40.5C130.198 15.5001 76.4993 -10 50.9994 6.00002C25.4994 22.0001 -10.2619 15.5 4.49974 38.5Z",
  // "M15.602 28L17.744 18.76H18.738L19.844 25.816L19.984 27.16L20.712 25.844L25.094 18.76H26.186L24.044 28H23.386L24.982 21.098L25.416 19.432H25.402L20.124 28H19.494L18.192 19.432L17.87 21.098L16.274 28H15.602ZM26.8813 28L29.0233 18.76H35.1973L35.0293 19.404H29.5693L28.7433 22.974H33.0973L32.9433 23.632H28.6033L27.7493 27.356H33.4473L33.2933 28H26.8813ZM35.2758 28L37.4178 18.76H38.2718L41.3518 25.998L41.7858 27.244H41.7998L42.0238 26.082L43.7318 18.76H44.3898L42.2478 28H41.4078L38.3138 20.748L37.8938 19.516H37.8798L37.6418 20.678L35.9478 28H35.2758ZM48.9282 28.14C48.1069 28.14 47.4302 27.9767 46.8982 27.65C46.3662 27.3233 46.0022 26.8567 45.8062 26.25C45.6102 25.634 45.6102 24.906 45.8062 24.066L47.0522 18.76H47.7522L46.4922 24.234C46.3242 24.934 46.3242 25.5267 46.4922 26.012C46.6602 26.4973 46.9542 26.866 47.3742 27.118C47.8036 27.37 48.3309 27.496 48.9562 27.496C49.7962 27.496 50.4636 27.2347 50.9582 26.712C51.4529 26.18 51.8076 25.4473 52.0222 24.514L53.3522 18.76H54.0522L52.6802 24.71C52.4376 25.7647 52.0036 26.6 51.3782 27.216C50.7622 27.832 49.9456 28.14 48.9282 28.14Z",
  // "M23.7716 2.45319C20.8121 3.74199 18.4711 6.33518 15.9651 8.29299C11.9378 11.4393 7.8039 9.74467 3.86406 11.7146C-2.70307 14.9981 6.41493 20.2466 5.34909 24.6284C4.60924 27.67 3.90467 40.3416 9.45301 40.3416C11.1376 40.3416 19.888 38.496 21.5 38C27.4096 36.1817 34.795 40.3416 41.5318 40.3416C44.0297 40.3416 46.5047 40.3738 48.9971 40.5122C53.3157 40.7521 58.0547 41.1804 61.9209 38.7061C65.6031 36.3495 63.5607 31.4877 64.7706 28.1001C65.9256 24.8661 72.4676 17.6863 67.9413 14.3335C57.3577 6.49375 60.2023 5.30285 44.2209 5.30285C39.2369 5.30285 35.5135 1.66065 30.8556 1.33941C28.4649 1.17454 25.9808 1.49108 23.7716 2.45319Z",
  
   circleMenu2= "M10.5003 15.5001C-8.49925 19.5 3.50024 111.5 46.4996 96.0001C89.4989 80.5001 83.9995 114.5 109 93C115.909 85.8805 109.816 75.5215 117.5 61.5001C123.707 50.1718 118.075 31.1259 105.5 23.5C90.323 14.2965 78.9999 -6.50004 57 5.5C35.0001 17.5 29.4999 11.5001 10.5003 15.5001Z"
  //  "M14.1362 21.7021L16.2782 12.4621H17.2722L18.3782 19.5181L18.5182 20.8621L19.2462 19.5461L23.6282 12.4621H24.7202L22.5782 21.7021H21.9202L23.5162 14.8001L23.9502 13.1341H23.9362L18.6582 21.7021H18.0282L16.7262 13.1341L16.4042 14.8001L14.8082 21.7021H14.1362ZM25.4155 21.7021L27.5575 12.4621H33.7315L33.5635 13.1061H28.1035L27.2775 16.6761H31.6315L31.4775 17.3341H27.1375L26.2835 21.0581H31.9815L31.8275 21.7021H25.4155ZM33.81 21.7021L35.952 12.4621H36.806L39.886 19.7001L40.32 20.9461H40.334L40.558 19.7841L42.266 12.4621H42.924L40.782 21.7021H39.942L36.848 14.4501L36.428 13.2181H36.414L36.176 14.3801L34.482 21.7021H33.81ZM47.4624 21.8421C46.6411 21.8421 45.9644 21.6788 45.4324 21.3521C44.9004 21.0255 44.5364 20.5588 44.3404 19.9521C44.1444 19.3361 44.1444 18.6081 44.3404 17.7681L45.5864 12.4621H46.2864L45.0264 17.9361C44.8584 18.6361 44.8584 19.2288 45.0264 19.7141C45.1944 20.1995 45.4884 20.5681 45.9084 20.8201C46.3377 21.0721 46.8651 21.1981 47.4904 21.1981C48.3304 21.1981 48.9977 20.9368 49.4924 20.4141C49.9871 19.8821 50.3417 19.1495 50.5564 18.2161L51.8864 12.4621H52.5864L51.2144 18.4121C50.9717 19.4668 50.5377 20.3021 49.9124 20.9181C49.2964 21.5341 48.4797 21.8421 47.4624 21.8421Z"
  // "M60.4548 32.4083C64.1369 30.0517 62.2902 21.3875 63.5 18C67.0184 8.14853 66.3899 1.99512 52.0002 1.99512C47.0162 1.99512 41.6581 5.82124 37.0002 5.50001C24.2516 4.62079 16.3771 -0.747323 3.88243 5.49999C-2.68469 8.78356 4.94806 17.4205 3.88222 21.8023C3.14237 24.8439 2.43853 34.0438 7.98687 34.0438C9.67147 34.0438 20.888 30.996 22.5 30.5C28.4096 28.6816 33.3289 34.0438 40.0656 34.0438C42.5635 34.0438 47.5076 30.3615 50 30.5C54.3186 30.7399 56.5886 34.8826 60.4548 32.4083Z"
  
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
        <button
          className="menu-button"
          onClick={() => {
            setShowMenu(true);
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

              // initial={[
              //   {
              //     targets: "#circle-menu > path",
              //     easing: "cubicBezier(.37,.31,.2,.91)",
              //     duration: 8000,
              //     loop: true,
              //     autoplay: true,
              //     d: [
              //       { value: [circleMenu, circleMenu2] },
              //       { value: circleMenu },
              //       { value: circleMenu2 },
              //     ],
              //   },
              // ]}
            >
              <Circle />
              {/* <MenuButton/> */}
            </Anime>
          </span>
          menu
        </button>

        {/* <div className="top-menu">menu
          <span className="circle-animation">
            <Anime
              initial={[
                {
                  targets: "#circle > path",
                  easing: "cubicBezier(.84,0,.25,.99)",
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
        </div> */}

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
                  {/* <span className="circle-animation">
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
                </span> */}
                  <Link to={menuItem.url}>{menuItem.label}</Link>
                </li>
              );
            })}
            <button
              onClick={() => {
                setShowMenu(false);
                console.log("ahhaha");
              }}
            >
              X
            </button>
          </ul>
        )}
      </nav>
    )
  );
};

export default Menu;
