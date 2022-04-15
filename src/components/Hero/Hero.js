import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
// import romina from '../../Svg/Icons/Romi.svg'

// import { ReactComponent as Cora } from "../../../Svg/Icons/red.svg";



import "./Hero.style.scss";

const Hero = () => {
  const hero = useSelector((state) => state.home);
 

  const [offsetY, setOffsetY] = useState(0);

  

  // const cora = "m263.42 235.15c-66.24 0-120 53.76-120 120 0 134.76 135.93 170.09 228.56 303.31 87.574-132.4 228.56-172.86 228.56-303.31 0-66.24-53.76-120-120-120-48.048 0-89.402 28.37-108.56 69.188-19.161-40.817-60.514-69.188-108.56-69.188z"

  
  const handleScrollY = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScrollY);
    return () => window.removeEventListener("scroll", handleScrollY);
  }, []);
  
  return (
    hero && (
      <div data-scroll-section>
        <section id="start" className="content-full">
         {/* <img src={romina} alt="" /> */}

         {/* <span className="cora-animation">
                  <Anime
                    initial={[
                      {
                        targets: "#cora",
                        keyframes: [
                          {
                            translateX: 180
                          },
                          {
                            translateY: 50
                          },
                          {
                            translateX: 0
                          },
                          {
                            translateY: 0
                          }
                        ],
                        easing: "cubicBezier(.84,0,.25,.99)",
                        duration: 3000,
                        loop: true,
                        autoplay: true,
                        d: [
                          { value: [cora] },
                          
                        ],
                      },
                    ]}
                  >
                    <Cora style={{width: '100px'}} />
                  </Anime>
                </span> */}



          <div className="hero p-v-6">
            <div className="text-block smooth-scroll"
            style={{ transform: `translateY(-${offsetY * 0.3}px)` }}
            >
              <h1 className="author">{hero.heroHeader?.heroTitle.value}</h1>
              <div className="content-standard presentation"
              style={{ transform: `translateY(-${offsetY * 0.06}px)` }}
              >
                <h1 className="programmer">
                  {hero.heroHeader?.heroProgrammer.value}
                </h1>
                <h1 className="and">{hero.heroHeader?.heroAnd.value}</h1>
                <h1 className="design">
                  {hero.heroHeader?.heroDesigner.value}
                </h1>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  );
};

export default Hero;
