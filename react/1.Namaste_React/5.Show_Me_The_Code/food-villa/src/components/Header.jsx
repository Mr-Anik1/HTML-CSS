import { useState } from "react";
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
          <a href="#home">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="nav-list">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#cart">Cart</a>
          <button className="login-btn" onClick={handleBtnClick}>
            {btnName}
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
