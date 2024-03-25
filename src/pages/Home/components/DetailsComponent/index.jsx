import PropTypes from "prop-types";
import "./styles.css";


const DetailComponent = ({ property, onClose }) => {
    return (
      <div className="detail-container">
        <div className="details-component">
          <h2 className="details-type">{property.type}</h2><br />
          {property.picture && <img src={property.picture} alt={`Property ${property.id}`} className="property-image" />}
          <p className="details-text">Housing: {property.housing}</p><br />
          <p className="details-text">Added: {property.added.month} {property.added.day}, {property.added.year}</p><br />
          <p className="details-text">Price: ${property.price}</p><br />
          <p className="details-text">Bedrooms: {property.bedrooms}</p><br />
          <p className="details-text">Description: {property.description}</p><br />
          <p className="details-text">Tenure: {property.tenure}</p><br />
          <p className="details-text">Location: {property.location}</p><br />
          <p className="details-text"> <iframe
                    title="Google Maps"
                    src={property.map}
                    width="100%"
                    height="400"
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex="0"
                  ></iframe></p>
        </div>
        <button className="details-close-btn" onClick={onClose}>Close</button>
      </div>
    );
  };
  
  DetailComponent.propTypes = {
    property: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
  };
  
  export default DetailComponent;