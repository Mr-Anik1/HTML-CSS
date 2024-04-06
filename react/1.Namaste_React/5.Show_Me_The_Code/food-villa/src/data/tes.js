const fetchData = async () => {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING"
  );

  const json = await data.json();

  // * optional chaining
  setListOfRestaurants(
    json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  );
  setFilteredRestaurant(
    json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  );
};

// Destructuring Each Restaurant
const {
  image,
  name,
  cuisines,
  avgRating,
  costForTwo,
  sla: { deliveryTime },
} = resData?.info;

// In Body
{
  filteredRestaurant.map((restaurant) => (
    <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
  ));
}
