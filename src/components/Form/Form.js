import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import './Form.style.scss'

const Form = ({ data }) => {
  const [input, setInput] = useState("");
  const contact = useSelector((state) => state.page);
  return (
    contact && (
      <form>
            {contact.contactSection?.contactTitle.value}
        <div className="contact-form">
          <div>
            <label htmlFor="">
              {contact.contactSection?.contactForm.value[0].label}
            </label>
            <input type="text" placeholder="YOUR NAME"/>
          </div>

          <div>
            <label htmlFor="">{contact.contactSection?.contactForm.value[1].label}</label>
            <input className="email" type="text" placeholder="E-MAIL" />
          </div>

          <div>
            <label htmlFor="">{contact.contactSection?.contactForm.value[2].label}</label>
            <input type="text"  placeholder="SUBJECT"/>
          </div>
        
          <div>
            <label htmlFor="">{contact.contactSection?.contactForm.value[4].label}</label>
            <textarea placeholder="YOUR MESSAGE"></textarea>
          </div>
          <button className="send-button">Send</button>

        </div>
      </form>
    )
  );
};
export default Form;
