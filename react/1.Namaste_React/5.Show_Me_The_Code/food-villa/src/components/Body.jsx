import React, { useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constants";
import { filteredRating, filteredSearch } from "./FilteredData";
import RatingSearch from "./RatingSearch";
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
import Shimmer from "./Shimmer";

// Body Component
const Body = () => {
  // State Variable - Super Powerful variable
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [ratingRestaurants, setRatingRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  // Handle Function
  const handleSearch = (searchText) => {
    // Need to filter the search data
    const searchedData = filteredSearch({
      searchText,
      restaurants: ratingRestaurants,
    });
    // Update the state - filteredRestaurant
    setFilteredRestaurant(searchedData);
  };

  const handleRatingSearch = (rating) => {
    // Filtered restaurants by using ratings.
    const ratingData = filteredRating({ rating, restaurants: allRestaurants });
    // Update states
    setRatingRestaurants(ratingData);
    setFilteredRestaurant(ratingData);
  };

  // Fetch restaurant and food data with API call
  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);

    const json = await data.json();

    // Update States
    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setRatingRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  /**
   * @useEffect
   * 
   
  - Page loads -> Render -> API call(500ms) -> Render

  - This useEffect hook is utilized to perform side effects in function components.

  - It ensures that the data fetching operation occurs after the initial rendering of the page.

  - The fetchData function is invoked within the useEffect hook, triggering the API call.

  - An empty dependency array [] indicates that the effect should run only once after the initial render.
  
   * 
   */
  useEffect(() => {
    fetchData();
  }, []);

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body-component">
        <div className="top-body">
          {/* Filtered By Rating */}
          <RatingSearch handleRatingSearch={handleRatingSearch} />

          {/* Search Bar */}
          <Search handleSearch={handleSearch} />
        </div>

        {/* Restaurant Card */}
        <div className="restaurant-list">
          {filteredRestaurant.map((restaurant) => (
            <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
