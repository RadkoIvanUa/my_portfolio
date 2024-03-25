import { useRef } from "react";
import PropTypes from "prop-types";
import "./hero.css";

import { SlMouse } from "react-icons/sl";
import { Link } from "react-scroll";
import { isDesktop, isTablet } from "react-device-detect";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import ParticlesComponent from "../particles/Particles";

export default function Hero({ selectedColor, isParticleOn }) {
  const windowSize = useRef([window.innerWidth]);

  const [text] = useTypewriter({
    words: ["My name is Ivan", " I`m a Front-End Developer"],
    delaySpeed: 2000,
    loop: false,
  });

  return (
    <div>
      {isParticleOn ? <ParticlesComponent selectedColor={selectedColor} /> : null}

      <motion.div className="hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            viewport={{ once: true }}
            transition={{ ease: [0.4, 0, 0.2, 1], duration: 1.5, delay: 1.5 }}
            style={{
              margin: "auto 0",
            }}
          >
            <p className="hero__text">Welcome</p>
            <h1 className="hero__title">
              {text}
              <Cursor cursorColor="white" />
            </h1>
            <p className="hero__subtitle">from Kyiv, Ukraine.</p>

            <div className="hero__btn-container">
              <button className="hero__btn">
                <a href={import.meta.env.VITE_CV_URL} download={true}>
                  Download CV
                </a>
              </button>
              <button className="hero__btn">
                <a href={import.meta.env.VITE_CERTEFICATE_URL} download={true}>
                  Certeficate
                </a>
              </button>
            </div>
          </motion.div>
        </div>

        <Link to={"about"} activeClass="active" spy={true} smooth={true} duration={500}>
          <motion.button
            animate={{ y: [10, 0, 10], x: [isTablet || isDesktop ? -30 : 0] }}
            transition={{
              duration: 1,

              times: [0, 1],
              repeat: Infinity,
              repeatDelay: 0.5,
            }}
            className="hero__scroll"
            type="button"
          >
            <SlMouse size={windowSize.current[0] < 768 ? 50 : 60} color="white" />
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}

Hero.propTypes = {
  className: PropTypes.string,
  selectedColor: PropTypes.string,
  isParticleOn: PropTypes.bool,
};
