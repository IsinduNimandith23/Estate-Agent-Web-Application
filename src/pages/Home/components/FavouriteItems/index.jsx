import PropTypes from "prop-types";
import "./styles.css";

const FavouriteItems = ({ favouriteProperties, onRemoveFromFavorites, onRemoveAllFavorites, onDropToFavorites, }) => {
  const handleRemoveFromFavorites = (property) => {
    onRemoveFromFavorites(property);
  };

  const handleRemoveAllFavorites = () => {
    onRemoveAllFavorites();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedProperty = JSON.parse(e.dataTransfer.getData("text/plain"));
    onDropToFavorites && onDropToFavorites(droppedProperty);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="right-items-container" onDrop={handleDrop} onDragOver={handleDragOver}>
      <div className="available-items">Favorites
        <button className="remove-all-btn" onClick={handleRemoveAllFavorites}>
          Clear All
        </button>
      </div>
      <div className="row">
        {favouriteProperties.map((property) => (
          <div className="item-col" key={property.id}>
            <p className="details">Type: {property.type}</p>
            <p className="details">Price: ${property.price}</p>
            <p className="details">Bedrooms: ${property.bedrooms}</p>
            <p className="details">Location: {property.location}</p>
            <p className="details">
              Added: {property.added.month} {property.added.day}, {property.added.year}
            </p>
            <button
              className="remove-from-fav-btn"
              onClick={() => handleRemoveFromFavorites(property)}
            >
              Remove from Favourites
            </button>
          </div>
      ))}
    </div>
    </div>
  );
};

FavouriteItems.propTypes = {
  favouriteProperties: PropTypes.array.isRequired,
  onRemoveFromFavorites: PropTypes.func.isRequired,
  onRemoveAllFavorites: PropTypes.func.isRequired,
  onDropToFavorites: PropTypes.func,
};

export default FavouriteItems;
