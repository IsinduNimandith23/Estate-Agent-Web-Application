import { useState } from "react";
import PropTypes from "prop-types";
import "./styles.css";

const SearchBar = ({ onHousingTypeChange, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="container1">
      <div className="search-container">
        <h1 className="heading">Believe in Finding it</h1>
        <p className="text">Search properties for sale</p>
        <div className="search-area">
          <input
            className="search-bar"
            type="text"
            placeholder="e.g 'York"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <button
            className="button"
            onClick={() => onHousingTypeChange("Sale")}
          >
            For Sale
          </button>
          <button
            className="button"
            onClick={() => onHousingTypeChange("Rent")}
          >
            For Rent
          </button>
        </div>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  onHousingTypeChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;