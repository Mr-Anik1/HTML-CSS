import { useState } from "react";
import restaurantList from "../data/fakeData";
import { filteredRating, filteredSearch } from "./FilteredData";
import RatingSearch from "./RatingSearch";
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";

// Body Component
const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [filteredRestaurant, setFilteredRestaurant] = useState(restaurantList);

  const handleSearch = (searchText) => {
    // Need to filter the data
    const searchedData = filteredSearch({
      searchText,
      restaurants,
    });
    // Update the state - filteredRestaurant
    setFilteredRestaurant(searchedData);
  };

  const handleRatingSearch = (rating) => {
    // Filtered restaurants by using ratings.
    const ratingData = filteredRating({ rating, restaurants: restaurantList });
    // Update states
    setRestaurants(ratingData);
    setFilteredRestaurant(ratingData);
  };

  return (
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
            <RestaurantCard key={restaurant?.data?.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
