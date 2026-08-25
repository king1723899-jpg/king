import React from "react";
import Modal from "../../../components/Modal/Modal";
import ReusableAccordian from "./ReusableAccordian";
import "bootstrap/dist/css/bootstrap.min.css";

const itemArray = [
  {
    title: "Football Fancy",
    content: [
      "Company reserves the right to suspend/void any id/bets if the same is found to be illegitimate. For example incase of vpn/robot-use/multiple entry from same IP/ multiple bets at same time (Punching) and others. Note : only winning bets will be voided...",
      "Tournament Total Goals, Team Total Goals goals.scored in 90 minutes or in extra-time will count.Goals scored in penalty shootouts do not count.",
      "Tournament Corners - Only corners taken in 90 minutes count.",
      "Tournament Penalties Missed/Converted - Penalties taken in 90 minutes, extra-time and penalty shootouts all count. If a penalty has to be re-taken the previous disallowed penalty(ies) do not count.",
    ],
    defaultExpanded: false,
  },
  {
    title: "Football Fancy",
    content: [
      "Company reserves the right to suspend/void any id/bets if the same is found to be illegitimate. For example incase of vpn/robot-use/multiple entry from same IP/ multiple bets at same time (Punching) and others. Note : only winning bets will be voided...",
      "Company reserves the right to suspend/void any id/bets if the same is found to be illegitimate. For example incase of vpn/robot-use/multiple entry from same IP/ multiple bets at same time (Punching) and others. Note : only winning bets will be voided...",
    ],
    defaultExpanded: false,
  },
];

const RulesModal = ({ onClose }) => {
  return (
    <Modal open={true} onClose={onClose}>
      <div className="rules-modal-content">
        <div className="rules-modal-header">
          <h6 className="rules-modal-title">Rules</h6>
          <button className="rules-modal-close-btn" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="rules-modal-body">
          <ReusableAccordian items={itemArray} />
        </div>
      </div>
    </Modal>
  );
};

export default RulesModal;
