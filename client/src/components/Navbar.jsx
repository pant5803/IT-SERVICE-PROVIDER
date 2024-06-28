import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

import { useAuth } from "../store/auth";
const Navbar = () => {
  // const { token } = useContext(mernContext);
  const { token } = useAuth();
  const istoken = !!token;
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <Link className="navbar-brand" to="/" style={{ marginLeft: "2rem" }}>
          LogoName
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item" style={{ marginLeft: "48rem" }}>
              <Link
                style={{ fontSize: "1.3rem", marginLeft: "1rem" }}
                className="nav-link"
                to="/Home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={{ fontSize: "1.3rem", marginLeft: "1rem" }}
                className="nav-link"
                to="/About"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={{ fontSize: "1.3rem", marginLeft: "1rem" }}
                className="nav-link"
                to="/Contact"
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={{ fontSize: "1.3rem", marginLeft: "1rem" }}
                className="nav-link"
                to="/Service"
              >
                Services
              </Link>
            </li>
            {istoken ? (
              <li className="nav-item">
                <Link
                  style={{ fontSize: "1.3rem", marginLeft: "1rem" }}
                  className="nav-link"
                  to="/Logout"
                >
                  Logout
                </Link>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    style={{ fontSize: "1.3rem", marginLeft: "1rem" }}
                    className="nav-link"
                    to="/Login"
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    style={{ fontSize: "1.3rem", marginLeft: "1rem" }}
                    className="nav-link"
                    to="/Register"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
