import { Link } from "react-router-dom";
import "./tooplate-style.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Navbar = () => {
  return (
    <div id="page-wraper">
      <div className="responsive-nav">
        <i className="fa fa-bars" id="menu-toggle"></i>
        <div id="menu" className="menu">
          <i className="fa fa-times" id="menu-close"></i>
          <div className="container">
            <div className="image">
              <a href="#">
                <img
                  src="assets/images/logo-image.jpg"
                  alt="Blugoon by Tooplate"
                />
              </a>
            </div>
            <div className="author-content">
              <h4>Blugoon</h4>
              <span>Free Bootstrap Theme</span>
            </div>
            <nav className="main-nav" role="navigation">
              <ul className="main-menu">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
