import React from "react";
import "../App.css";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { SlSocialInstagram } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-logo">
          {/* <img src="/img/icon-header.png" alt="" /> */}
          <span>ESA Week2024</span>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <div className="cont-info">
            <div className="dial">
              <div className="dial-icon">
                <IoCallOutline />
                <p>Call</p>
              </div>
              <p>
                Husein <br /> +62 878-3011-9787
              </p>
            </div>
            <div className="mail">
              <div className="mail-icon">
                <CiMail />
                <p>Mail</p>
              </div>
              <p>esafbsunnes@gmail.com</p>
            </div>
            <div className="social">
              <div className="social-icon">
                <SlSocialInstagram />
                <p>Social</p>
              </div>
              <p>@esaweekunnes</p>
            </div>
          </div>
        </div>
        <div className="footer-map">
          <h4>Find Us</h4>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1979.8405017489151!2d110.3932199!3d-7.0467216!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b003d807565%3A0xfbbb55ede3fdc206!2sBuilding%20B3%2C%20FBS%20UNNES!5e0!3m2!1sid!2sid!4v1719330660277!5m2!1sid!2sid"
              width="419"
              height="193"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="credit">
        <p>©2024esaweek</p>
      </div>
    </div>
  );
};

export default Footer;
