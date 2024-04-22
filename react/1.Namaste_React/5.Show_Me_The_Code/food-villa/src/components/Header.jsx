import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const handleBtnClick = () => {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  };

  return (
    <>
      {/* NavBar */}
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="nav-list">
          <p>
            <Link className="link" to="/">
              Home
            </Link>
          </p>
          <p>
            <Link className="link" to="/about">
              About
            </Link>
          </p>
          <p>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </p>
          <p>
            <Link className="link" to="/grocery">
              Grocery
            </Link>
          </p>
          <p className="link">Cart</p>
          <button className="login-btn" onClick={handleBtnClick}>
            {btnName}
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
