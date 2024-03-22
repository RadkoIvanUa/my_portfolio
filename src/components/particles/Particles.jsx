import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import "../hero/hero.css";

const ParticlesComponent = ({ selectedColor }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particleOptions = {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 1000,
        },
      },
      color: {
        value: selectedColor,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: 5,
        random: true,
      },
      move: {
        enable: true,
        speed: 1,
      },
      opacity: {
        value: 0.5,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 120,
        color: "#fff",
        opacity: 0.4,
      },
    },

    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: ["connect", "grab"], // Режим "connect" для створення сліду за курсором
        },
      },
    },
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: [0.4, 0, 0.2, 1], duration: 1.5, delay: 1 }}
        style={{
          position: "absolute",
          zIndex: 1,
          width: "100%",
          height: "100vh",

          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          canvasClassName="particles"
          options={particleOptions}
        />
      </motion.div>
    </>
  );
};

ParticlesComponent.propTypes = {
  selectedColor: PropTypes.string,
};

export default ParticlesComponent;
