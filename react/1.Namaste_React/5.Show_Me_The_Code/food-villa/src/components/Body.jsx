import { useState } from "react";
import restaurantList from "../data/fakeData";
import RestaurantCard from "./RestaurantCard";
import { filterData, Search } from "./Search";

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);

  const handleSearch = (searchText) => {
    // Need to filter the data
    const searchedData = filterData({
      searchText,
      restaurants: restaurantList,
    });
    // Update the state - restaurants
    setRestaurants(searchedData);
  };

  return (
    <>
      <div className="body-component">
        {/* Search Bar */}
        <Search handleSearch={handleSearch} />

        {/* Restaurant Card */}
        <div className="restaurant-list">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant?.data?.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
