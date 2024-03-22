import "./portfolio.css";
import { useEffect, useState } from "react";
import galery_filter from "../../helpers/galery_filter";
import portfolioItems from "./portfolio_items";
import ModalWindow from "../modal/Modal";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function Portfolio({ selectedColor }) {
  const [largeImageURL, setLargeImageURL] = useState();
  const [description, setDescription] = useState();
  const [client, setClient] = useState();
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [website, setWebsite] = useState();
  const [linkToVideo, setLinkToVideo] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // CATEGORY
  // const [isAllActive, setIsAllActive] = useState(true);
  // const [isWebActive, setIsWebActive] = useState(false);
  // const [isLogoActive, setIsLogoActive] = useState(false);
  // const [isPackagingActive, setIsPackagingActive] = useState(false);
  // const [isSocialActive, setIsSocialActive] = useState(false);
  // const [isPrintActive, setIsPrintActive] = useState(false);
  // const [isIllustrationActive, setIsIllustrationActive] = useState(false);

  // hover

  // const [isAllHovered, setIsAllHovered] = useState(false);
  // const [isWebHovered, setIsWebHovered] = useState(false);
  // const [isLogoHovered, setIsLogoHovered] = useState(false);
  // const [isPackagingHovered, setIsPackagingHovered] = useState(false);
  // const [isSocialHovered, setIsSocialHovered] = useState(false);
  // const [isPrintHovered, setIsPrintHovered] = useState(false);
  // const [isIllustrationHovered, setIsIllustrationHovered] = useState(false);

  // ------------------------

  const handleModalOpen = (e) => {
    const largeImageURL = e.target.dataset.src;
    const itemDescription = e.target.dataset.description;
    const client = e.target.dataset.client;
    const title = e.target.dataset.title;
    const category = e.target.dataset.category;
    const website = e.target.dataset.website;
    const linkToVideo = e.target.dataset.video;

    if (!largeImageURL) {
      return;
    }

    setLargeImageURL(largeImageURL);
    setDescription(itemDescription);
    setClient(client);
    setTitle(title);
    setCategory(category);
    setWebsite(website);
    setLinkToVideo(linkToVideo);
    setIsModalOpen(true);
  };

  const hendleModalClose = () => setIsModalOpen(false);

  useEffect(() => {
    galery_filter();
  }, []);

  // const activeCategoryStyle = {
  //   color: "#fff",
  //   background: selectedColor,
  // };

  // const hoveredCategoryStyle = {
  //   color: "#fff",
  //   background: selectedColor,
  // };

  return (
    <section className="portfolio__section section" id="portfolio">
      <div className="container">
        <motion.h3
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: [0.4, 0, 0.2, 1], duration: 1 }}
          viewport={{ once: true }}
          className="portfolio__title section__title"
        >
          <span>My</span> Works
        </motion.h3>
        <div>
          <div className="wrapper">
            <motion.nav
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: [0.4, 0, 0.2, 1], duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="items"></div>
            </motion.nav>

            <motion.ul
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: [0.4, 0, 0.2, 1], duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="gallery"
              onClick={handleModalOpen}
            >
              {portfolioItems.map((item, index) => (
                <li key={index} className="image__thumb image" data-name={item.category}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <img
                      src={item.link}
                      data-src={item.link}
                      data-description={item.description}
                      data-client={item.client}
                      data-title={item.title}
                      data-category={item.category}
                      data-website={item.website}
                      data-video={item.video}
                      alt=""
                      width="300px"
                    />
                    <div
                      className="overlay"
                      data-src={item.link}
                      data-description={item.description}
                      data-client={item.client}
                      data-title={item.title}
                      data-category={item.category}
                      data-website={item.website}
                      data-video={item.video}
                    >
                      <p
                        className="overlay__title"
                        data-src={item.link}
                        data-description={item.description}
                        data-client={item.client}
                        data-title={item.title}
                        data-category={item.category}
                        data-website={item.website}
                        data-video={item.video}
                      >
                        {item.title}
                      </p>
                      <p
                        className="overlay__category"
                        data-src={item.link}
                        data-description={item.description}
                        data-client={item.client}
                        data-title={item.title}
                        data-category={item.category}
                        data-website={item.website}
                        data-video={item.video}
                      >
                        {item.category}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
              <ModalWindow
                largeImageURL={largeImageURL}
                isModalOpen={isModalOpen}
                onCloseModal={hendleModalClose}
                description={description}
                client={client}
                title={title}
                category={category}
                website={website}
                video={linkToVideo}
                selectedColor={selectedColor}
              />
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}

Portfolio.propTypes = {
  selectedColor: PropTypes.string,
};
