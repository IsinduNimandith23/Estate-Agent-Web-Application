import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./styles.css";
import propertiesData from "../../../../data/properties.json";
import DetailComponent from "../DetailsComponent";

const AvailableItems = ({
  housingType,
  searchQuery,
  onAddToFavorites,
  filterList,
  setFilterList,
}) => {
  const [selectedProperty, setSelectedProperty] = useState(null);

  useEffect(() => {
    const filtered = propertiesData.properties.filter((property) => {
      const matchesHousingType =
        housingType === "All" || property.housing === housingType;
      const query = searchQuery || "";
      const matchesSearchQuery =
        query.trim().toLowerCase() === "" ||
        property.type.toLowerCase().includes(query.trim().toLowerCase()) ||
        property.location.toLowerCase().includes(query.trim().toLowerCase());
      return matchesHousingType && matchesSearchQuery;
    });

    setFilterList(filtered);
  }, [housingType, searchQuery, setFilterList]);

  const handleAddToFavorites = (property) => {
    onAddToFavorites(property);
  };

  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
  };

  const handleCloseDetail = () => {
    setSelectedProperty(null);
  };

  const handleDragStart = (e, property) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(property));
  };

  return (
    <div className="left-items-container">
      <div className="search-bar-container"></div>
      <div className="available-items">Available</div>
      <div className="row">
        {filterList.map((property) => (
          <div
            className="item-col"
            key={property.id}
            draggable
            onDragStart={(e) => handleDragStart(e, property)}
          >
            <p className="details">Type: {property.type}</p>
            <p className="details">Bedroom: {property.bedrooms}</p>
            <p className="details">Price: ${property.price}</p>
            <p className="details">Location: {property.location}</p>
            <p className="details">
              Added: {property.added.month} {property.added.day},{" "}
              {property.added.year}
            </p>
            <button
              className="add-to-fav-btn"
              onClick={() => handleAddToFavorites(property)}
            >
              Add to Favourites
            </button>
            <button
              className="view-details-btn"
              onClick={() => handlePropertyClick(property)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
      {selectedProperty && (
        <DetailComponent
          property={selectedProperty}
          onClose={handleCloseDetail}
        />
      )}
    </div>
  );
};

AvailableItems.propTypes = {
  housingType: PropTypes.string.isRequired,
  searchQuery: PropTypes.string.isRequired,
  onAddToFavorites: PropTypes.func.isRequired,
  filterList: PropTypes.array.isRequired,
  setFilterList: PropTypes.func.isRequired,
};

export default AvailableItems;
