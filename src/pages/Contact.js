import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { GiSmartphone } from "react-icons/gi";
import { VscLocation } from "react-icons/vsc";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="get-in-touch">
        <div className="info">
          <h3>Get In Touch</h3>
          <p>
            Looking to book a lifestyle session?
            <br />
            I'd love to hear from you!
            <br />
            Fill out the contact form below, and let's chat!
          </p>
          <div className="icons">
            <a
              href="https://www.instagram.com/olya.schastlivceva/"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineInstagram className="icon" />
            </a>
            <a
              href="https://www.facebook.com/olyaschastlivceva.ca"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF className="icon" />
            </a>
            <a
              href="https://www.pinterest.ca/olyaschastlivceva/"
              target="_blank"
              rel="noreferrer"
            >
              <FaPinterestP className="icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <form
          action="https://formsubmit.co/4cebbdcab72bb31c13b206b70bd6ec87"
          method="POST"
        >
          <input
            type="hidden"
            name="_subject"
            value="New email from your website!"
          />
          <input type="text" name="_honey" style={{ display: "none" }} />
          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you for choosing me, I will be in touch with you soon."
          />
          <input type="hidden" name="_captcha" value="true" />
          <input type="hidden" name="_template" value="basic" />

          <input type="text" name="name" placeholder="Your Name" required />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <input type="tel" name="phone" placeholder="Phone number" required />
          <textarea
            type="text"
            name="message"
            placeholder="Your message here..."
            required
          />
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="contact-info">
        <h3>Call/Text Me</h3>
        <p>
          <GiSmartphone className="icon" /> 4317741265
        </p>
        <h3>Location</h3>
        <p>
          <VscLocation className="icon" /> Leduc, Alberta
        </p>
      </div>
    </div>
  );
};

export default Contact;
