import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { GiSmartphone } from "react-icons/gi";
import { VscLocation } from "react-icons/vsc";
import { MdOutlineMail } from "react-icons/md";
import { motion } from "framer-motion";
import Olya from "../assets/images/contact_me.jpg";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="get-in-touch">
        <div className="info">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            Get In Touch
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
            <br />
            Looking to book a lifestyle session?
            <br />
            I'd love to hear from you!
            <br />
            Fill out the contact form below or email me and let's chat.
          </motion.p>
          <div className="icons">
            <a
              href="https://www.instagram.com/olya.schastlivceva/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <AiOutlineInstagram className="icon" />
            </a>
            <a
              href="https://www.facebook.com/olyaschastlivceva.ca"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF className="icon" />
            </a>
            <a
              href="https://www.pinterest.ca/olyaschastlivceva/"
              target="_blank"
              rel="noreferrer"
              aria-label="Pinterest"
            >
              <FaPinterestP className="icon" />
            </a>
            <a
              href="mailto:olyaschastlivcevaphotographer@gmail.com"
              rel="noreferrer"
              aria-label="Email"
            >
              <MdOutlineMail className="icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <form
          action="https://formsubmit.co/olyaschastlivcevaphotographer@gmail.com"
          method="POST"
        >
          <input
            type="hidden"
            name="_subject"
            value="New email from your website!"
          />
          <input type="text" name="_honey" style={{ display: "none" }} />
          <input type="hidden" name="_captcha" value="true" />
          <input type="hidden" name="_template" value="basic" />
          <input
            type="hidden"
            name="_next"
            value="https://olya-schastlivceva.web.app/thanks"
          ></input>
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
      <motion.div
        className="contact-info"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="info">
          <div className="location">
            <h3>My Location</h3>
            <p>
              <VscLocation className="icon" /> Leduc, Alberta
            </p>
          </div>
          <div className="phone">
            <h3>Text Me</h3>
            <p>
              <GiSmartphone className="icon" /> 4317741265
            </p>
          </div>
        </div>
        <img src={Olya} alt="Smiling beautiful woman" />
      </motion.div>
    </div>
  );
};

export default Contact;
