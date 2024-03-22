import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import "./footer.css";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { TfiYoutube } from "react-icons/tfi";

export default function Footer({ selectedColor }) {
  return (
    <div className="footer__section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: [0.4, 0, 0.2, 1], duration: 1 }}
          className="footer__wrapper"
        >
          <div className="footer__copyright">
            <div>
              <p>
                <span>Copyright © 2024</span>{" "}
              </p>
            </div>
            <div>
              <p>
                Designed by <span style={{ color: selectedColor }}>Ivan Radko</span>
              </p>
            </div>
            <div>
              <p>All Rights Reserved</p>
            </div>
          </div>
          <div className="about__icons-wrapper">
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ease: "easeOut", duration: 0.8, delay: 0.7 }}
              href="https://www.linkedin.com/in/ivan-radko/"
            >
              <BsLinkedin size={20} color={"white"} />
            </motion.a>
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ease: "easeOut", duration: 0.8, delay: 0.7 }}
              href="https://github.com/RadkoIvanUa"
            >
              <FaGithub size={20} color={"white"} />
            </motion.a>

            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ease: "easeOut", duration: 0.8, delay: 0.6 }}
              href="https://www.facebook.com/ivan.radko.5"
            >
              <BsFacebook size={20} color={"white"} />
            </motion.a>

            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ease: "easeOut", duration: 0.8, delay: 0.8 }}
              href="https://www.instagram.com/ivan_radko_/"
            >
              <BsInstagram size={20} color={"white"} />
            </motion.a>
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ease: "easeOut", duration: 0.8, delay: 0.8 }}
              href="https://www.youtube.com/channel/UCrzPRpvqlmKNoomqQa0eYgQ"
            >
              <TfiYoutube size={20} color={"white"} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

Footer.propTypes = {
  selectedColor: PropTypes.string,
};
