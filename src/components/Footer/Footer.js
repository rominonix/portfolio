import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Footer.style.scss";

const Footer = () => {
  const settings = useSelector((state) => state.settings);
  let office;
  if (settings.office) {
    office = settings.office;
  }

  const [offsetY, setOffsetY] = useState(0);

  const handleScrollY = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScrollY);
    return () => window.removeEventListener("scroll", handleScrollY);
  }, []);

  return (
    <footer>
      {settings.office && (
        <div
          className="content-standard smooth-scroll "
          style={{ transform: `translateY(-${offsetY * 0.03}px)` }}
        >
          <div className="footer-grid p-h-6 p-v-5">
            <div>
              <h2 className="footer-ingress">Stay in touch!</h2>
            </div>

            <div className="contact-section">
              <h2 className="footer-mail">{office.mail?.value}</h2>
              <h2 className="footer-phone">{office.phone?.value}</h2>

              <h2>{office.city?.value}</h2>
            </div>

            <div className="social-section p-h-5">
              {settings.socialMediaSection?.socialMedia.map((social) => {
                return (
                  <a
                    key={social.id}
                    className="icon-item"
                    href={social.socialLink.value}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img src={social.socialIcon.value} alt="social icons" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
