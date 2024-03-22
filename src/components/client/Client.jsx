import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import "swiper/css";
import "swiper/css/pagination";
import "./client.css";
import { motion } from "framer-motion";
import clientsList from "./clients_list";
import PropTypes from "prop-types";

const swiperSlideStyle = {
  padding: 20,
  borderRadius: 5,
  backgroundColor: "rgb(34, 34, 34)",
  height: 400,
};

const breakpoints = {
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },

  1024: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
};

export default function Client({ selectedColor }) {
  return (
    <section className="client__section section" id="client">
      <div className="container">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: [0.4, 0, 0.2, 1], duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="section__title">
              <span>Work - Life</span> Balance
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: [0.4, 0, 0.2, 1], duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={breakpoints}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              style={{
                "--swiper-pagination-color": `${selectedColor}`,
                "--swiper-pagination-bullet-inactive-color": "#fff",
              }}
            >
              {/* DARK */}
              <ul>
                {clientsList.map((client) => (
                  <li key={client.img} className="slide__photo-item">
                    <SwiperSlide style={swiperSlideStyle} className="client__swiper-slide">
                      <img src={client.img} className="client__slide-img" alt="" />
                    </SwiperSlide>
                  </li>
                ))}
              </ul>
            </Swiper>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

Client.propTypes = {
  selectedColor: PropTypes.string,
};
