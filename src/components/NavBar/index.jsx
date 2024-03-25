import  { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav>
        <Link to="/" className="title">Website</Link>
        <div className="menu" onClick={() => {
            setMenuOpen(!menuOpen);
        }}>
            <span></span>
            <span></span>
            <span></span>
            </div>
        <ul className={menuOpen ? "open" : ""}>
            <li><NavLink to="/property-details">PropertyDetails</NavLink></li>
            <li><NavLink to="/search">Search</NavLink></li>
        </ul>
    </nav>
  )
};
