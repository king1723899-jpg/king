import React from "react";

const Modal = ({ open, onClose, children }) => {
  return (
    <>
      <div
        onClick={onClose}
        className={`new-modal-overlay ${
          open ? "new-modal-visible" : "new-modal-hidden"
        }`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`new-modal-container ${
            open ? "new-modal-open" : "new-modal-closed"
          }`}
        >
          <button onClick={onClose} className="new-modal-close-button">
            ✕
          </button>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
