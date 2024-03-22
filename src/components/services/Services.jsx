import "./services.css";
import { DiScrum } from "react-icons/di";
import { SiSass } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";
import { FaDocker } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";

import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function Services({ selectedColor }) {
  return (
    <section className="services__section section" id="services">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: [0.4, 0, 0.2, 1], duration: 1 }}
        >
          <h2 className="servises__title section__title">
            <span>My</span> Skills
          </h2>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0, y: 300 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: [0.4, 0, 0.2, 1], duration: 1, delay: 0.3 }}
          className="services__list"
        >
          <li className="services__list-item">
            <div className="services__item-icon">
              <FaHtml5 size={60} color={selectedColor} />
            </div>
            <h3 className="servises__item-title">HTML</h3>
          </li>
          <li className="services__list-item">
            <div className="services__item-icon">
              <FaCss3Alt size={60} color={selectedColor} />
            </div>
            <h3 className="servises__item-title">CSS</h3>
          </li>
          <li className="services__list-item">
            <div className="services__item-icon">
              <TbBrandJavascript size={60} color={selectedColor} />
            </div>
            <h3 className="servises__item-title">JavaScript</h3>
          </li>
          <li className="services__list-item">
            <div className="services__item-icon">
              <SiSass size={60} color={selectedColor} />
            </div>
            <h3 className="servises__item-title">SASS</h3>
          </li>

          <li className="services__list-item">
            <div className="services__item-icon">
              <FaReact size={60} color={selectedColor} />
            </div>
            <h3 className="servises__item-title">React.js</h3>
          </li>
          <li className="services__list-item">
            <div className="services__item-icon">
              <SiNextdotjs size={60} color={selectedColor} />
            </div>
            <h3 className="servises__item-title">Next.js</h3>
          </li>
          <li className="services__list-item">
            <div className="services__item-icon">
              <TbBrandReactNative size={60} color={selectedColor} />
            </div>
            <h3 className="servises__item-title">React Native</h3>
          </li>
          <li className="services__list-item">
            <div className="services__item-icon">
              <SiRedux size={60} color={selectedColor} />
            </div>
            <h3 className="servises__item-title">Redux</h3>
          </li>
          <li className="services__list-item">
            <div className="services__item-icon">
              <FaDocker size={60} color={selectedColor} />
            </div>
            <h3 className="servises__item-title">Docker</h3>
          </li>
          <li className="services__list-item">
            <div className="services__item-icon">
              <TbApi size={60} color={selectedColor} />
            </div>
            <h3 className="servises__item-title">REST API</h3>
          </li>
          <li className="services__list-item">
            <div className="services__item-icon">
              <FaGitAlt size={60} color={selectedColor} />
            </div>
            <h3 className="servises__item-title">Git</h3>
          </li>
          <li className="services__list-item">
            <div className="services__item-icon">
              <DiScrum size={60} color={selectedColor} />
            </div>
            <h3 className="servises__item-title">Scrum</h3>
          </li>
        </motion.ul>
      </div>
    </section>
  );
}
Services.propTypes = {
  selectedColor: PropTypes.string,
};
