import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSpring, animated } from "react-spring";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscChromeClose } from "react-icons/vsc";

import "./header.css";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Header({ className, selectedColor }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [homeActive, setHomeActive] = useState(true);
  const [aboutActive, setAboutActive] = useState(false);
  const [servicesActive, setSevicesActive] = useState(false);
  const [portfolioActive, setPortfolioActive] = useState(false);
  const [clientActive, setClientActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);
  const [isHoveredHome, setIsHoveredHome] = useState(false);
  const [isHoveredAbout, setIsHoveredAbout] = useState(false);
  const [isHoveredServices, setIsHoveredServices] = useState(false);
  const [isHoveredPortfolio, setIsHoveredPortfolio] = useState(false);
  const [isHoveredClient, setIsHoveredClient] = useState(false);
  const [isHoveredContact, setIsHoveredContact] = useState(false);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  const iconAnimation = useSpring({
    transform: `rotate(${isMenuOpen ? 90 : 0}deg)`,
    config: { duration: 250 },
  });

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const headerStyle = {
    backgroundImage: `linear-gradient(to right, ${selectedColor}, ${selectedColor} 50%, #ffffff 50%)`,
  };

  const mobileNavLinkStyle = {
    color: `${selectedColor}`,
  };

  const defaultHeaderStyle = {
    color: "#000000",
    backgroundImage: `linear-gradient(to right, ${selectedColor}, ${selectedColor} 50%, #ffffff 50%)`,
  };

  const headerNavLinkBeforeStyle = {
    content: '""',
    background: `${selectedColor}`,
    display: "block",
    position: "absolute",
    bottom: "-1px",
    left: "0",
    width: 0,
    height: "3px",
    transition: "all 0.3s ease-in-out",
  };

  return (
    <div className={className}>
      <div className="container">
        <nav className="header__nav">
          <Link className="header__nav-logo" to={"hero"} activeClass="active" spy={true}>
            Ivan Radko
          </Link>
          <ul className="header__nav-list">
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "Inertia", stiffness: 100, delay: 0.2 }}
              className="header__nav-item"
            >
              <Link
                className="header__nav-link"
                to={"hero"}
                activeClass="active"
                spy={true}
                style={className === "header stickyadd" ? headerStyle : defaultHeaderStyle}
                onMouseEnter={() => setIsHoveredHome(true)}
                onMouseLeave={() => setIsHoveredHome(false)}
              >
                Home
                <span
                  style={{
                    ...headerNavLinkBeforeStyle,
                    width: isHoveredHome ? "100%" : "0",
                  }}
                ></span>
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "Inertia", stiffness: 100, delay: 0.4 }}
              className="header__nav-item"
            >
              <Link
                className="header__nav-link"
                to={"about"}
                spy={true}
                activeClass="active"
                offset={screenWidth >= 1980 ? 0 : 5}
                style={className === "header stickyadd" ? headerStyle : defaultHeaderStyle}
                onMouseEnter={() => setIsHoveredAbout(true)}
                onMouseLeave={() => setIsHoveredAbout(false)}
              >
                About Me
                <span
                  style={{
                    ...headerNavLinkBeforeStyle,
                    width: isHoveredAbout ? "100%" : "0",
                  }}
                ></span>
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "Inertia", stiffness: 100, delay: 0.6 }}
              className="header__nav-item"
            >
              <Link
                activeClass="active"
                className="header__nav-link"
                to={"services"}
                spy={true}
                offset={screenWidth >= 1980 ? 0 : 5}
                style={className === "header stickyadd" ? headerStyle : defaultHeaderStyle}
                onMouseEnter={() => setIsHoveredServices(true)}
                onMouseLeave={() => setIsHoveredServices(false)}
              >
                Skills
                <span
                  style={{
                    ...headerNavLinkBeforeStyle,
                    width: isHoveredServices ? "100%" : "0",
                  }}
                ></span>
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "Inertia", stiffness: 100, delay: 0.8 }}
              className="header__nav-item"
            >
              <Link
                activeClass="active"
                className="header__nav-link"
                spy={true}
                offset={screenWidth >= 1980 ? 0 : 5}
                to={"portfolio"}
                style={className === "header stickyadd" ? headerStyle : defaultHeaderStyle}
                onMouseEnter={() => setIsHoveredPortfolio(true)}
                onMouseLeave={() => setIsHoveredPortfolio(false)}
              >
                Portfolio
                <span
                  style={{
                    ...headerNavLinkBeforeStyle,
                    width: isHoveredPortfolio ? "100%" : "0",
                  }}
                ></span>
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "Inertia", stiffness: 100, delay: 1 }}
              className="header__nav-item"
            >
              <Link
                activeClass="active"
                className="header__nav-link"
                spy={true}
                offset={screenWidth >= 1980 ? 5 : 6}
                to={"client"}
                style={className === "header stickyadd" ? headerStyle : defaultHeaderStyle}
                onMouseEnter={() => setIsHoveredClient(true)}
                onMouseLeave={() => setIsHoveredClient(false)}
              >
                My Leisure
                <span
                  style={{
                    ...headerNavLinkBeforeStyle,
                    width: isHoveredClient ? "100%" : "0",
                  }}
                ></span>
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "Inertia", stiffness: 100, delay: 1.2 }}
              className="header__nav-item"
            >
              <Link
                activeClass="active"
                className="header__nav-link"
                spy={true}
                offset={screenWidth >= 1980 ? 5 : 6}
                to={"contact"}
                style={className === "header stickyadd" ? headerStyle : defaultHeaderStyle}
                onMouseEnter={() => setIsHoveredContact(true)}
                onMouseLeave={() => setIsHoveredContact(false)}
              >
                Contact
                <span
                  style={{
                    ...headerNavLinkBeforeStyle,
                    width: isHoveredContact ? "100%" : "0",
                  }}
                ></span>
              </Link>
            </motion.li>
          </ul>

          {/* mobile  */}
          <animated.button
            style={{
              border: 0,
              backgroundColor: "transparent",
              ...iconAnimation,
            }}
            type="button"
            onClick={handleMenuClick}
            className="burger"
          >
            {isMenuOpen ? <VscChromeClose size={40} color={"white"} /> : <RxHamburgerMenu size={40} color={"white"} />}
          </animated.button>
        </nav>
      </div>

      <nav className={isMenuOpen ? "mobile__header-nav" : "mobile__header-nav ishidden"}>
        <div className="container">
          <ul className="mobile__header-nav-list">
            <li className="mobile__header-nav-item">
              <Link
                className="mobile__header-nav-link"
                to={"hero"}
                onClick={() => {
                  setIsMenuOpen(false);
                  setHomeActive(true);
                  setAboutActive(false);
                  setSevicesActive(false);
                  setPortfolioActive(false);
                  setClientActive(false);
                  setContactActive(false);
                }}
                style={homeActive ? mobileNavLinkStyle : null}
              >
                Home
              </Link>
            </li>
            <li className="mobile__header-nav-item">
              <Link
                onClick={() => {
                  setIsMenuOpen(false);
                  setHomeActive(false);
                  setAboutActive(true);
                  setSevicesActive(false);
                  setPortfolioActive(false);
                  setClientActive(false);
                  setContactActive(false);
                }}
                className="mobile__header-nav-link"
                to="section about"
                spy={true}
                offset={-40}
                style={aboutActive ? mobileNavLinkStyle : null}
              >
                About Me
              </Link>
            </li>
            <li className="mobile__header-nav-item">
              <Link
                className="mobile__header-nav-link"
                to="services"
                spy={true}
                offset={-40}
                onClick={() => {
                  setIsMenuOpen(false);
                  setHomeActive(false);
                  setAboutActive(false);
                  setSevicesActive(true);
                  setPortfolioActive(false);
                  setClientActive(false);
                  setContactActive(false);
                }}
                style={servicesActive ? mobileNavLinkStyle : null}
              >
                Skills
              </Link>
            </li>
            <li className="mobile__header-nav-item">
              <Link
                className="mobile__header-nav-link"
                to="portfolio"
                spy={true}
                offset={-40}
                onClick={() => {
                  setIsMenuOpen(false);
                  setHomeActive(false);
                  setAboutActive(false);
                  setSevicesActive(false);
                  setPortfolioActive(true);
                  setClientActive(false);
                  setContactActive(false);
                }}
                style={portfolioActive ? mobileNavLinkStyle : null}
              >
                Portfolio
              </Link>
            </li>
            <li className="mobile__header-nav-item">
              <Link
                className="mobile__header-nav-link"
                to="client"
                spy={true}
                offset={-40}
                onClick={() => {
                  setIsMenuOpen(false);
                  setHomeActive(false);
                  setAboutActive(false);
                  setSevicesActive(false);
                  setPortfolioActive(false);
                  setClientActive(true);
                  setContactActive(false);
                }}
                style={clientActive ? mobileNavLinkStyle : null}
              >
                My Leisure
              </Link>
            </li>
            <li className="mobile__header-nav-item">
              <Link
                className="mobile__header-nav-link"
                to="contact"
                spy={true}
                offset={-40}
                onClick={() => {
                  setIsMenuOpen(false);
                  setHomeActive(false);
                  setAboutActive(false);
                  setSevicesActive(false);
                  setPortfolioActive(false);
                  setClientActive(false);
                  setContactActive(true);
                }}
                style={contactActive ? mobileNavLinkStyle : null}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string,
  selectedColor: PropTypes.string,
};
