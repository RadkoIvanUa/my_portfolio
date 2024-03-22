import "./about.css";
import aboutImg from "../../img/about/about_photo.png";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function About({ selectedColor }) {
  return (
    <section className="section about" id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: [0.4, 0, 0.2, 1], duration: 1 }}
          className="about__img-wrapper"
        >
          <img className="about__img" src={aboutImg} width={450} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: [0.4, 0, 0.2, 1], duration: 1, delay: 0.3 }}
        >
          <h2 className="about__title section__title">
            <span>About</span> Me
          </h2>
          <h3 className="about__subtitle">
            Hello! <span style={{ color: selectedColor }}>I`m Ivan</span>
          </h3>
          <div className="about__text section__text">
            <p>
              Front-end developer with a solid understanding of HTML, CSS, and JavaScript. Interested in developing interactive interfaces
              using the React framework with the Redux library. I have good knowledge of Git, Webpack, and Parcel for effective management
              and project building. I understand the basic principles of the Scrum methodology and the Agile manifesto, which helps me work
              in a team and ensure rapid development iteration.
            </p>
            <p>
              For the last six months I have been working as a freelancer. I was engaged in the development and improvement of the admin
              panel for a medical facility, and was getting onto the creation of the admin panel from scratch for a real estate website
              using Next.js, under the guidance of an experienced developer
            </p>
            <p>In my spare time, I create background music (link to YouTube in the footer of the site)</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

About.propTypes = {
  selectedColor: PropTypes.string,
};
