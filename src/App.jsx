import "../node_modules/modern-normalize/modern-normalize.css";
import "./reset.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Client from "./components/client/Client";
import Contact from "./components/contacts/Contact";
import Footer from "./components/footer/Footer";
import Cursor from "./components/cursor/Cursor";

import { TbSquareRoundedArrowUpFilled } from "react-icons/tb";
import { ToastContainer } from "react-toastify";
import { Link } from "react-scroll";
import { useEffect, useState, useRef } from "react";

function App() {
  const [scroll, setScroll] = useState(false);
  const [upScroll, setUpScroll] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [selectedColor, setSelectedColor] = useState("rgb(0, 123, 255)");
  const [colorForCursor, setColorForCursor] = useState("0, 123, 255");
  const [cursor, setCursor] = useState(true);
  const [isParticleOn, setIsParticleOn] = useState(true);

  const windowSize = useRef([window.innerWidth]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleUpScroll);
  }, []);

  useEffect(() => {
    if (windowSize.current[0] < 768) {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    setColorForCursor(selectedColor.replace(/^rgb\((\d+,\s*\d+,\s*\d+)\)$/, "$1"));
  }, [selectedColor]);

  const handleScroll = () => {
    setScroll(window.scrollY > 50);
  };
  const handleUpScroll = () => {
    setUpScroll(window.scrollY > 400);
  };

  // eslint-disable-next-line no-unused-vars
  const handlePatricle = () => {
    setIsParticleOn(!isParticleOn);
  };

  // eslint-disable-next-line no-unused-vars
  const cursorSwither = () => {
    setCursor(!cursor);
  };

  return (
    <>
      {cursor && <Cursor colorForCursor={colorForCursor} />}

      <div id="home"></div>

      <header>
        <Header className={scroll ? "header stickyadd" : "header"} selectedColor={selectedColor} />
      </header>

      <main>
        <Hero selectedColor={selectedColor} isParticleOn={isParticleOn} />
        <About selectedColor={selectedColor} />
        <Services selectedColor={selectedColor} />

        <Portfolio selectedColor={selectedColor} />
        <Client selectedColor={selectedColor} />
        <Contact selectedColor={selectedColor} />
      </main>

      <footer>
        <Footer selectedColor={selectedColor} />
      </footer>

      <div className={upScroll ? "up__scroll show" : "up__scroll hidden"}>
        <Link className="header__nav-logo" to={"hero"} spy={true}>
          <TbSquareRoundedArrowUpFilled color={selectedColor} size={40} className="up__scroll-icon" />
        </Link>
      </div>

      <ToastContainer style={{ zIndex: 1000000 }} />

      {/* <Settings setSelectedColor={setSelectedColor} cursorSwither={cursorSwither} setIsParticleOn={handlePatricle} /> */}
    </>
  );
}

export default App;
