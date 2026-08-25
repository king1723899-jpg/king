import React from "react";
import Button from "@mui/material/Button";
import HeaderDropdown from "./HeaderDropdown";
import { isMobile } from "react-device-detect";
import {  useAppSelector } from '../../../../redux/hooks'
import { selectBalance } from '../../../../redux/actions/balance/balanceSlice'
import { useNavigate } from 'react-router-dom'
const NavButton = () => {
  const balance = useAppSelector(selectBalance)
  const handleSignup = () => {};
  const navigate = useNavigate();
  const handleWithdraw = () => {
    navigate('/withdraw');
  };
  const handleDeposit = () => {
    navigate('/deposit');
  };
  return (
    <div className="new-header-right">
      {/* Deposit Button */}
      <div className="main-navbutton-container-flex" >
        <Button
          variant="contained"
          className="d-none d-lg-flex me-2" // Added margin-right
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "darkgreen",
            color: "#fff",
            borderBottom: "4px solid #8b0000",
            padding: "0.25rem 0.5rem",
            borderRadius: "5px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#5a0000",
              borderBottom: "4px solid darkgreen",
            },
          }}
        onClick={handleDeposit} 
        >
          <img
            src="/icon/deposit-icon.png"
            alt="Deposit Icon"
            className="btn-logged-header-img"
          />
          <span>Deposit</span>
        </Button>

        {/* Withdrawal Button */}
        <Button
          type="btn"
          className="new-withdrawal-btn d-none d-lg-flex me-2" // Added margin-right
          sx={{
            display: "flex",
            alignItems: "center",
            // gap: "0.5rem",
            background: "#8b0000",
            color: "#fff",
            borderBottom: "4px solid darkgreen",
            padding: "0.15rem 0.5rem",
            borderRadius: "5px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#5a0000",
              borderBottom: "4px solid #8b0000",
            },
          }}
          onClick={handleWithdraw}
        >
          <img
            src="/icon/withdrawal-icon.png"
            alt="Withdrawal Icon"
            className="btn-logged-header-img"
          />
          <span>withdrawl</span>
        </Button>

      </div>

      {/* Expo Buttons - Aligned with other buttons */}
      {/* Expo Buttons - Absolutely positioned but still in correct spot */}
      <div
        className="new-header-expo-buttons"
      >
        <div className="main-div-expo-button-relatve">
          <span className="centered-absolute-text">Bal</span>
          <img
            src="/icon/expobutton.png"
            alt="Expo Icon 1"
            className="new-Expo-image-button"
          />
          <span className="centered-absolute-text-number balance-text-responsive" style={{ bottom: -20 }}>{(((balance.balance > 0 ? balance.balance : 0) - (balance.exposer > 0 ? balance.exposer : 0)) ?? 0).toFixed(2)}</span>
        </div>
        <div className="main-div-expo-button-relatve">
          <span className="centered-absolute-text">Exp</span>
          <img
            src="/icon/expobutton.png"
            alt="Expo Icon 1"
            className="new-Expo-image-button"
          />
          <span className="centered-absolute-text-number balance-text-responsive" style={{ bottom: -20 }}>{(balance.exposer > 0 ? balance.exposer : 0).toFixed(2)}</span>
        </div>

      </div>

      <div>
        <HeaderDropdown isMobile={isMobile} />
      </div>
    </div>
  );
};

export default NavButton;
