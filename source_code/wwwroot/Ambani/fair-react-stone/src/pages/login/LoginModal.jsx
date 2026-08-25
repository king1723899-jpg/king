import React from "react";
import Login from "./login";
import Modal from "../../components/Modal/Modal";

const LoginModal = ({ onClose }) => {
  return (
    <Modal open={true} onClose={onClose}>
      <div className="login-modal-content">
        <div className="login-form-section">
          <Login />
        </div>
        <div className="login-image-section">
          <img
            src="/assets/images/logos/log_one.png"
            className="login-image"
            alt="login"
          />
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;


