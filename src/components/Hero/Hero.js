import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Hero.style.scss";

const Hero = () => {
  const hero = useSelector((state) => state.home);

  const [offsetY, setOffsetY] = useState(0);

  const handleScrollY = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScrollY);
    return () => window.removeEventListener("scroll", handleScrollY);
  }, []);

  return (
    hero && (
      <div data-scroll-section>
        <section id="start" className="content-full">
          <div className="hero p-v-6">
            <div
              className="text-block smooth-scroll"
              style={{ transform: `translateY(-${offsetY * 0.3}px)` }}
            >
              <h1 className="author">{hero.heroHeader?.heroTitle.value}</h1>
              <div
                className="content-standard presentation"
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
