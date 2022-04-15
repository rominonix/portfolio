import React, { useState, useEffect } from "react";
import ReactAnime from "react-animejs";
import Hero from "../../components/Hero/Hero";
import FeaturedProject from "../../components/FeaturedProjects/FeaturedProjects";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Header from "../../components/Header/Header";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import { ReactComponent as Cora } from "../../Svg/Icons/red.svg";
import "./Home.style.scss";

const Home = () => {
  const [loading, setLoading] = useState(false);

  const { Anime } = ReactAnime;

  const cora =
      "m263.42 235.15c-66.24 0-120 53.76-120 120 0 134.76 135.93 170.09 228.56 303.31 87.574-132.4 228.56-172.86 228.56-303.31 0-66.24-53.76-120-120-120-48.048 0-89.402 28.37-108.56 69.188-19.161-40.817-60.514-69.188-108.56-69.188z",
    cora1 =
      "M63.0674 181.885C96.7099 207.803 105.569 236.428 107.823 255.181C124.201 235.294 146.427 219.045 192.05 194.35C255.805 159.841 278.603 90.3547 228.314 62.7458C199.654 47.0109 169.442 50.7811 137.069 86.727C112.121 50.7809 72.1438 28.236 33.5393 58.0661C-1.39142 85.0574 9.86003 140.895 63.0674 181.885Z";

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-wrapper">
          <span>
            <Anime
              initial={[
                {
                  targets: "#cora",
                  keyframes: [
                    {
                      translateX: 300,
                    },
                    {
                      translateX: -300,
                    },
                  ],
                  easing: "cubicBezier(.84,0,.25,.99)",
                  duration: 3000,
                  loop: true,
                  autoplay: true,
                  d: [
                    { value: [cora, cora1] },
                    { value: cora },
                    { value: cora1 },
                  ],
                },
              ]}
            >
              <Cora style={{ width: "100px" }} />
            </Anime>
          </span>
          <h1>Hej! Hola! Hello!</h1>
          <h4>Loading...</h4>
        </div>
      ) : (
        <section className="home">
          <div className="content-full" id="main-container">
            <Header />
            <Hero />
            <FeaturedProject />
            <About />
            <Skills />
            <Contact />
            <Footer />
          </div>
        </section>
      )}
    </>
  );
};

export default Home;
