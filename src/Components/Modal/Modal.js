import React from "react";
import "./style.css"; // Import your CSS file for styling

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleModalClick = (e) => {
    e.stopPropagation(); // Prevent modal closing when clicked inside
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={handleModalClick}>
        <div className="modal-header">
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
