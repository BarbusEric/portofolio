import React from "react";
import "./portofolio.css";
import IMG1 from "../../assets/portofolio1.png";
import IMG2 from "../../assets/portofolio2.png";
import IMG3 from "../../assets/portofolio3.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "News",
    github: "https://github.com/BarbusEric/reactproject",
    demo: "https://be-project-react.netlify.app",
  },
  {
    id: 2,
    image: IMG2,
    title: "Weather",
    github: "https://github.com/BarbusEric/weatherproject",
    demo: "https://weather-barbuseric.netlify.app",
  },
  {
    id: 3,
    image: IMG3,
    title: "IT School clone",
    github: "https://github.com/BarbusEric/itschoolclone",
    demo: "https://clona-barbuseric.netlify.app",
  },
];

export const Portofolio = () => {
  return (
    <section id="section">
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portofolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portofolio__item">
              <div className="portofolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portofolio__item-cta">
                <a href={demo} className="btn" target="_blank">
                  Demo
                </a>
                <a href={github} className="btn btn-primary" target="_blank">
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portofolio;
