import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./About.style.scss";

const About = () => {
  const about = useSelector((state) => state.home);

  const [offsetY, setOffsetY] = useState(0);

  const handleScrollY = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScrollY);
    return () => window.removeEventListener("scroll", handleScrollY);
  }, []);

  return (
    about && (
      <section id="about" className="content-full">
        <div className="about p-t-5 p-b-6 p-h-6">
          <h1
            className="about-title smooth-scroll-title"
            style={{ transform: `translateY(-${offsetY * 0.02}px)` }}
          >
            {about.aboutSection?.aboutTitle.value}
          </h1>
          <div className="about-grid">
            <div
              className="scroll-about"
              style={{ transform: `translateY(-${offsetY * 0.05}px)` }}
            >
              <h2 className="subtitle m-b-z">
                {about.aboutSection?.aboutSubtitle.value}
              </h2>
              <p className="description">
                {about.aboutSection?.aboutDescription.value}
              </p>
            </div>
            <div
              className="about-img scroll-about-img"
              style={{ transform: `translateY(-${offsetY * 0.03}px)` }}
            >
              <img
                className="image"
                src={about.aboutSection?.aboutImg.value}
                alt="portrait"
              />
            </div>
            <div
              className="about-contact scroll-about"
              style={{ transform: `translateY(-${offsetY * 0.04}px)` }}
            >
              <h3 className="ingress m-b-z">
                {about.aboutSection?.aboutContactTitle.value}
              </h3>
              <h4 className="about-mail">
                {about.aboutSection?.aboutEmail.value}
              </h4>
              <div className="about-link">
                {about.aboutSection?.socialLinks.map((link) => {
                  return (
                    <a
                      className="link-item"
                      href={link.socialLink.value}
                      rel="noreferrer"
                      target="_blank"
                      key={link.id}
                    >
                      <img
                        className="icons"
                        src={link.aboutIcon.value}
                        alt="social icons"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default About;
