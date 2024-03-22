/* eslint-disable react/prop-types */
import "./modal.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";

export default function ModalWindow({
  isModalOpen,
  onCloseModal,
  largeImageURL,
  description,
  client,
  title,
  category,
  website,
  video,
  selectedColor,
}) {
  const [open, setOpen] = useState(false);
  const [isModalCloseHovered, setIsModalCloseHovered] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      setOpen(true);
    }
  }, [isModalOpen]);

  useEffect(() => {
    onCloseModal();
  }, [onCloseModal]);

  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxHeight: "80%",
    border: "none",
    bgcolor: "background.paper",
    borderRadius: 2,
    boxShadow: 24,
    outline: "none",
    overflowY: "auto",
    overflowX: "hidden",
  };

  return (
    <div>
      <Modal
        disableEnforceFocus
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        style={{ zIndex: 11000 }}
      >
        <Fade in={open}>
          <Box sx={style} className="modal">
            <div className="modal__img-thumb">
              {video ? (
                <ReactPlayer width={"100%"} height={"100%"} controls={true} url={video} playing={true} />
              ) : (
                <img src={largeImageURL} alt="" width="800px" />
              )}
            </div>

            <Box className="modal__bottom-content">
              <h4 className="modal__category">{category}</h4>
              <h3 className="modal__title">{title}</h3>

              <div className="modal__client">
                <h4 className="modal__client-name">{client !== "" && client ? <span>Client: {client}</span> : null}</h4>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <a href={website} style={{ color: selectedColor }} target="_blank" rel="noreferrer" className="modal__client-website">
                    Visit live page
                  </a>
                  <CgWebsite size={22} color="#fff" />
                </div>
              </div>
              <p className="modal__description section__text">{description}</p>
            </Box>
          </Box>
        </Fade>
      </Modal>

      {open ? (
        <IoIosCloseCircleOutline
          size={40}
          className="modal__close"
          onClick={handleClose}
          onMouseEnter={() => {
            setIsModalCloseHovered(true);
          }}
          onMouseLeave={() => {
            setIsModalCloseHovered(false);
          }}
          style={{ color: isModalCloseHovered ? selectedColor : null }}
        />
      ) : null}
    </div>
  );
}

Modal.propTypes = {
  selectedColor: PropTypes.string,
};
