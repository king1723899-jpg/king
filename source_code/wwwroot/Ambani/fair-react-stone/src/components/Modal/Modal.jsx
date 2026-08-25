import React from "react";

const Modal = ({ open, onClose, children }) => {
  return (
    <>
      <div
        onClick={onClose}
        className={`modal-overlay ${open ? "modal-open" : "modal-closed"}`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`modal-container ${open ? "modal-content-open" : "modal-content-closed"}`}
        >
          {/* Close Button absolutely positioned over content */}
          <button
            onClick={onClose}
            className="modal-close-btn"
          >
            ✕
          </button>
          {/* <div className="mobile-login-close-btn" onClick={onClose}>
            <i className="fas fa-times"></i>
          </div> */}
          {/* Modal content, no extra padding here */}
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
