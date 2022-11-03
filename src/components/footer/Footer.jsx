import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import IMG from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        <img src={IMG} alt="img logo" />
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/barbus.eric.5/" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com/ericbarbus/">
          <FiInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Made by Bărbuș Eric-George</small>
      </div>
    </footer>
  );
};

export default Footer;
