import { useState } from "react";
import SearchBar from "./components/SearchBar";
import AdvancedSearchBar from "./components/AdvancedSearchBar";
import Line from "./components/Line";
import AvailableItems from "./components/AvailableItems";
import FavouriteItems from "./components/FavouriteItems";
import "./home.css";
import { properties } from "./../../data/properties.json";

const Home = () => {
  const [favouriteProperties, setFavouriteProperties] = useState([]);
  const [housingType, setHousingType] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProperty, setFilteredProperties] = useState(properties);
  const [filterVisible, setFilterVisible] = useState(false);

  const handleFilterProperties = (filteredList) => {
    setFilteredProperties(filteredList);
  };

  const handleAddToFavorites = (property) => {
    if (!isPropertyInFavorites(property)) {
      setFavouriteProperties((prevFavourites) => [...prevFavourites, property]);
    } else {
      alert("Property already added to Favourites");
    }
  };

  const handleRemoveFromFavorites = (propertyToRemove) => {
    setFavouriteProperties((prevFavourites) =>
      prevFavourites.filter((property) => property.id !== propertyToRemove.id)
    );
  };

  const handleRemoveAllFavorites = () => {
    setFavouriteProperties([]);
  };

  const isPropertyInFavorites = (property) => {
    return favouriteProperties.some(
      (favProperty) => favProperty.id === property.id
    );
  };

  const handleHousingTypeChange = (type) => {
    setHousingType(type);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleDropToFavorites = (droppedProperty) => {
    if (!isPropertyInFavorites(droppedProperty)) {
      setFavouriteProperties((prevFavourites) => [
        ...prevFavourites,
        droppedProperty,
      ]);
    } else {
      alert("Property already added to Favourites");
    }
  };

  return (
    <div className="home-container">
      <SearchBar
        onHousingTypeChange={handleHousingTypeChange}
        onSearch={handleSearch}
      />
      <button
        className="advance-search-btn"
        onClick={() => setFilterVisible(!filterVisible)}
      >
        Show Advance Search
      </button>
      {filterVisible ? (
        <AdvancedSearchBar handleFilterSubmit={handleFilterProperties} />
      ) : null}
      <Line />
      <div className="item-grid">
        <AvailableItems
          filterList={filteredProperty}
          setFilterList={setFilteredProperties}
          housingType={housingType}
          searchQuery={searchQuery}
          onAddToFavorites={handleAddToFavorites}
        />
        <FavouriteItems
          favouriteProperties={favouriteProperties}
          onRemoveFromFavorites={handleRemoveFromFavorites}
          onRemoveAllFavorites={handleRemoveAllFavorites}
          onDropToFavorites={handleDropToFavorites}
        />
      </div>
    </div>
  );
};

export default Home;
