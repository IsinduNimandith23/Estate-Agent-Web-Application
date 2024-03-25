import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  return (
    <>
    <div className="phantom"></div>
      <footer className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <h4>Company Information</h4>
            <p>This is the company information</p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="home">Home</Link>
              </li>
              <li>
                <Link to="/property-details">Products</Link>
              </li>
              <li>
                <Link to="/search">About Us</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Information</h4>
            <p>Colombo, Sri Lanka</p>
            <p>+94 77072960</p>
            <p>myProperties@gmail.com</p>
          </div>
        </div>
      </footer>
    </>
  );
};
