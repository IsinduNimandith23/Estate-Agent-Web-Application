import { useState } from "react";
import PropTypes from "prop-types";
import "./styles.css";
import { properties } from "./../../../../data/properties.json";

function AdvancedSearchBar({ handleFilterSubmit }) {
  const [type, setType] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [location, setLocation] = useState("");
  const [available, setAvailable] = useState("");

  const tempFilteredList = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    properties.map((item) => {
      if(item.type !== type && type != "All") return;
      if(item.price < minPrice && minPrice != "") return;
      if(item.price > maxPrice && maxPrice != "") return;
      if(item.bedrooms != bedrooms && bedrooms != "") return;
      if(!item.location.includes(location)  && location != "") return;
      if(item.housing != available && available != "All") return;

      tempFilteredList.push(item);
    });
    handleFilterSubmit(tempFilteredList);
    e.target.reset();
  };

  return (
    <div className="form-container">
      <div className="header">
        <form onSubmit={handleSubmit}>
          <label>Type: </label>
          <select
          value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
            id="type">
            <option value="All">All</option>
            <option value="House">House</option>
            <option value="Flat">Flat</option>
            <option value="Terraced">Terraced</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="House Share">House Share</option>
            <option value="Apartment">Apartment</option>
          </select>
          <div>
            {" "}
            <br />
            <label>Price Range: </label> <br />
            <input
              type="text"
              placeholder="Min Price"
              onChange={(e) => {
                setMinPrice(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Max Price"
              onChange={(e) => {
                setMaxPrice(e.target.value);
              }}
              value={maxPrice}
            />
            <div>
              <label>Bedrooms: </label>
              <input
                type="text"
                placeholder="e.g. 3"
                onChange={(e) => {
                  setBedrooms(e.target.value);
                }}
                value={bedrooms}
              />
              <div>
                <label>From Date: </label>
                <br />
                <br />
                <input
                  type="date"
                  placeholder="Date"
                  onChange={(e) => {
                    setFromDate(e.target.value);
                  }}
                  value={fromDate}
                />
              </div>
              <div>
                <label>Location: </label>
                <input
                  type="text"
                  placeholder="e.g. London"
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                  value={location}
                />
              </div>
              <div>
                <label>Avalability: </label>
                <select
                  id="avalability"
                  onChange={(e) => {
                    setAvailable(e.target.value);
                  }}
                  value={available}>
                  <option value="All">All</option>
                  <option value="Sale">For Sale</option>
                  <option value="Rent">For Rent</option>
                </select>{" "}
                <br />
                <button type="submit" className="advance-search-submit-btn">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

AdvancedSearchBar.propTypes = {
  handleFilterSubmit: PropTypes.func.isRequired,
};


export default AdvancedSearchBar;
