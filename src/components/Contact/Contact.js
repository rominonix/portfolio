import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import Form from "../Form/Form";
import "./Contact.style.scss";


const Contact = () => {
  const contact = useSelector((state) => state.home);

  const [offsetY, setOffsetY] = useState(0);

  const handleScrollY = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScrollY);
    return () => window.removeEventListener("scroll", handleScrollY);
  }, []);

  return (
    contact && (
      <section id='contact' className='content-full'>
        <div className='contact p-h-6 p-v-5'>
          <h1 className='contact-title smooth-scroll'
          style={{ transform: `translateY(-${offsetY * 0.01}px)` }}
          >
            {contact.contactSection?.contactTitle.value}
          </h1>
          <div className='contact-grid smooth-scroll'
          style={{ transform: `translateY(-${offsetY * 0.02}px)` }}
          >
            <div className='p-r-6'>
              <h2 className='contact-subtitle m-b-z'>{contact.contactSection?.contactSubtitle.value}</h2>
              <p>{contact.contactSection?.contactDescription.value}</p>
            </div>
            <div className='p-t-6'>
              <Form />
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default Contact;
