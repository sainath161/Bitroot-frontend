import React, { useState } from "react";
import Modal from "./Modal";
import { convertDate } from "../functions/convertDate";
import ImageSlider from "../ImageSlider";
import "./style.css";

const ModalWindow = ({ date, title, content, author, url }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  date = convertDate(date);

  return (
    <div className="modal-window">
      <div onClick={openModal}>
        <ImageSlider srcUrl={url.large} />
        <div className="dots-container">
          <span className="dot cyan"></span>
          <span className="dot orange"></span>
        </div>

        <h2>{title}</h2>
        <p>{content}</p>
        <div className="bottom">
          <div className="author">
            {/* <img src={author.avatar} alt="Author Avatar" className="avatar" /> */}
            <p>{author.name}</p>
            <p>-</p>
            <p>{author.role}</p>
          </div>
          <p>{date}</p>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <img src={url.small} alt="" className="modal-img" />
        <h2>{title}</h2>
        <p>{content}</p>
        <div className="bottom">
          <div className="author">
            <img src={author.avatar} alt="Author Avatar" className="avatar" />
            <p>{author.name}</p>
            <p>-</p>
            <p>{author.role}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalWindow;
