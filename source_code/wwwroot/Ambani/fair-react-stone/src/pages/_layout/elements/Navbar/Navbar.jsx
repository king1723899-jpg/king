
import NavLogo from "./NavLogo";
import NavSearch from "./NavSearch";
import NavButton from "./NavButton";
import { useNavigate } from "react-router-dom";
const Navbar = () => { 
  const navigate = useNavigate();
  const handleLogoClick = () => {
    // Navigate to match page
    navigate("/match/888");
  };
  return (
    <div className="new-navbar-wrapper">
      <div className="new-navbar-container">
        {/* Logo and mobile button row/column */}
        <div className="new-navbar-left">
          <div className="new-navbar-logo" onClick={handleLogoClick} style={{ cursor: "pointer" }}>
            <NavLogo />
          </div>
          <div className="new-navbar-mobile-button">
            <NavButton />
          </div>
        </div>

        {/* Search box section */}
        <div className="new-navbar-search">
          <NavSearch
            searchQuery={""}
            setSearchQuery={""}
          />
        </div>

        {/* Desktop NavButton */}
        <div className="new-navbar-desktop-button">
          <NavButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
