import React from "react";
import "./App.css";
import { resList } from "./fakeData";
import { logo } from "./images";

const Header = () => {
  return (
    <>
      {/* NavBar */}
      <div className="navbar">
        <div className="logo">
          <a href="#home">
            <img src={logo} alt="logo" srcset="" />
          </a>
        </div>
        <div className="nav-list">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#cart">Cart</a>
        </div>
      </div>
    </>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;

  const { image, name, cuisines, avgRating, costForTwo, deliveryTime } =
    resData?.data;

  return (
    <>
      <div className="card">
        <img className="res-logo" src={image} alt={name} />
        <div className="card-text">
          <h1>{name}</h1>
          <h2>
            <span className="cost-two">${costForTwo}</span> for two
          </h2>
          <h3>
            ⭐️ <span className="stars">{avgRating}</span> stars .{" "}
            {deliveryTime}
          </h3>
          <h4>{cuisines.join(", ")}</h4>
        </div>
      </div>
    </>
  );
};

const Body = () => {
  return (
    <>
      <div className="body-component">
        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search Food or Restaurant" />
          <button>Search</button>
        </div>

        {/* Restaurant Card */}
        <div className="restaurant-list">
          {resList.map((restaurant) => (
            <RestaurantCard key={restaurant?.data?.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <div className="footer-component">
        <p>&copy; 2024 Anik. All rights reserved.</p>
      </div>
    </>
  );
};

function App() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default App;
