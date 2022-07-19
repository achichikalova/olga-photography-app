import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
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
        <input type="email" name="email" placeholder="Email Address" required />
        <input type="tel" name="phone" placeholder="Phone number" />
        <textarea
          type="text"
          name="message"
          placeholder="Your message here..."
          required
        />
        <button type="submit">Send</button>
      </form>
      <div className="contact-info">
        <h3>Call Me</h3>
        <p>4317741265</p>
        <h3>Location</h3>
        <p>Leduc, Alberta</p>
      </div>
      <div className="get-in-touch">
        <h3>Get In Touch</h3>
        <h5>
          Looking to book a lifestyle session? I'd love to hear from you! Fill
          out the contact form above and let's chat!
        </h5>
        <div className="social">
          <AiOutlineInstagram className="icon" />
          <FaFacebookF className="icon" />
          <FaPinterestP className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
