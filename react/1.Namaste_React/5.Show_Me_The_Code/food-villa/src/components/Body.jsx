import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SWIGGY_API } from "../utils/constants";
import { filteredRating, filteredSearch } from "./FilteredData";
import RatingSearch from "./RatingSearch";
import { RestaurantCard, withPromotedLabel } from "./RestaurantCard";
import Search from "./Search";
import Shimmer from "./Shimmer";

// Body Component
const Body = () => {
  // State Variable - Super Powerful variable
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [ratingRestaurants, setRatingRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  // When a restaurant has promoted label, we have to create RestaurantCardPromoted card.
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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

    const restaurantsData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    // Update states with the restaurants data
    setAllRestaurants(restaurantsData);
    setRatingRestaurants(restaurantsData);
    setFilteredRestaurant(restaurantsData);
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

  // If allRestaurants is an empty array OR allRestaurants doesn't exist, then return shimmer.
  return allRestaurants?.length === 0 || !allRestaurants ? (
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
            // key should be in the parent jsx; here the link is the parent of <RestaurantCard/>.
            <Link
              key={restaurant?.info?.id}
              to={`/restaurants/${restaurant?.info?.id}`}
              className="restaurant-card-link"
            >
              {/* If the restaurant is promoted then return RestaurantCardPromoted otherwise return RestaurantCard */}
              {restaurant?.info?.promoted ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
