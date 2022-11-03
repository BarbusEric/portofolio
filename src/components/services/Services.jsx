import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Website Design.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mobile Design.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Interaction Design.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>UX Design.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive UI.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>SEO.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creativity.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Site Performance.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Shopping Cart.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>React hooks.</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
      </div>
    </section>
  );
};

export default Services;
