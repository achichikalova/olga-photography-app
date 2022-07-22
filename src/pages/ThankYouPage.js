import React from "react";
import { BsCheckLg } from "react-icons/bs";
import { MdKeyboardBackspace } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./ThankYouPage.scss";

const ThankYouPage = () => {
  return (
    <div className="thanks">
      <h1>Thanks for contacting me!</h1>
      <BsCheckLg className="icon" />
      <p>
        I will be in touch with you shortly. Thanks in advance for your
        patience.
        <br />
        <br />
        Have a great day!
      </p>
      <NavLink to="/" className="back">
        <MdKeyboardBackspace /> Back to Home Page
      </NavLink>
    </div>
  );
};

export default ThankYouPage;
