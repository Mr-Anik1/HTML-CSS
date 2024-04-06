import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  // Destructuring Each Restaurant
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla: { slaString },
  } = resData?.info;

  return (
    <>
      <div className="card">
        <img src={CDN_URL + cloudinaryImageId} alt={name} />
        <div className="card-text">
          <h1>{name}</h1>
          <h2>
            <span className="cost-two">{costForTwo}</span>
          </h2>
          <h3>
            ⭐️ <span className="stars">{avgRating}</span> stars . {slaString}
          </h3>
          <h4>{cuisines.join(", ")}</h4>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
