import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import MenuItemCard from "./MenuItemCard";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  // Here I use custom hook useRestaurantMenu for fetch Data.
  const resInfo = useRestaurantMenu(resId);

  // When data is not loading.
  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    cloudinaryImageId,
    costForTwo,
    costForTwoMessage,
    cuisines,
    avgRating,
    totalRatingsString,
    sla: { slaString, lastMileTravelString },
    labels,
  } = resInfo?.cards[2]?.card?.card?.info;

  // Menu items
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <>
      <div className="menu-body">
        <h1>{name}</h1>
        {/* Card Design */}
        <div className="menu-card">
          <div className="menu-card-text">
            <h3>
              ⭐️ <span className="menu-stars">{avgRating}</span> (
              {totalRatingsString}) .{" "}
              <span className="menu-cost-two">{costForTwoMessage}</span>
            </h3>

            <h4>{cuisines.join(", ")}</h4>

            <h5>{labels[1].message}</h5>
          </div>

          <img src={CDN_URL + cloudinaryImageId} alt={name} />
        </div>

        {/* Menu Design */}
        <div className="menu-main">
          <h2 className="menu-items">Menu {itemCards.length} items</h2>

          <div className="menu-main-card-container">
            {itemCards.map((item) => (
              <MenuItemCard
                key={item?.card?.info?.id}
                item={item}
                dummyImage={cloudinaryImageId}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
