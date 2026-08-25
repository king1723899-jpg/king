import React, { useState, useEffect, useRef } from "react";
import RulesModal from "./Rules/RulesModal";
import matchService from "../../../../services/match.service";

const NavSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Track dropdown visibility
  const dropdownRef = useRef(null); // Ref for the dropdown container

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    const eventName = typeof window !== "undefined" && "PointerEvent" in window ? "pointerdown" : "mousedown";
    document.addEventListener(eventName, handleClickOutside);
    return () => {
      document.removeEventListener(eventName, handleClickOutside);
    };
  }, []);

  // Fetch suggestions when searchQuery changes
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchQuery.trim() === "") {
        setSuggestions([]);
        setIsDropdownOpen(false);
        return;
      }

      setIsLoading(true);
      try {
        const response = await matchService.getMatchListSuggestion({ 
          name: searchQuery 
        });
        setSuggestions(response.data.data);
        setIsDropdownOpen(true); // Open dropdown when suggestions are fetched
      } catch (error) {
        console.error("Error fetching suggestions:", error);
        setSuggestions([]);
      } finally {
        setIsLoading(false);
      }
    };

    const debounceTimer = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  const handleMatchClick = (match) => {
    if (match) {
      window.location.href = `/odds/${match.matchId}`;
    }
  };

  return (
    <div className="nav-search-container">
      <div className="nav-search-main">
        <div className="nav-search-input-wrapper" ref={dropdownRef}>
          <input
            type="text"
            placeholder="Search Events"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => searchQuery && setIsDropdownOpen(true)} // Open dropdown when input is focused
            className="nav-search-input"
          />
          <span className="nav-search-icon">
            {isLoading ? "⌛" : "🔍"}
          </span>

          {/* Suggestions dropdown (conditionally rendered) */}
          {isDropdownOpen && suggestions.length > 0 && (
            <div className="nav-search-suggestions">
              <ul className="suggestions-list">
                {suggestions.map((match) => (
                  <li 
                    key={match.matchId}
                    onClick={() => handleMatchClick(match)}
                    className="suggestion-item"
                  >
                    {match.name}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* No results message */}
          {isDropdownOpen && searchQuery && suggestions.length === 0 && !isLoading && (
            <div className="nav-search-suggestions">
              <div className="no-results">No matches found</div>
            </div>
          )}
        </div>
      </div>

      <div className="nav-search-rules d-hidden md:d-flex mt-1 justify-content-center align-items-center ">
        <RulesModal />
      </div>
    </div>
  );
};

export default NavSearch;
