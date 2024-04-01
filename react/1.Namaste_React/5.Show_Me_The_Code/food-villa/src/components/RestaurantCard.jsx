const RestaurantCard = (props) => {
  const { resData } = props;

  const { image, name, cuisines, avgRating, costForTwo, deliveryTime } =
    resData?.data;

  return (
    <>
      <div className="card">
        <img src={image} alt={name} />
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

export default RestaurantCard;
