import { CDN_URL } from "../utils/constants";

const MenuItemCard = ({ item, dummyImage }) => {
  let { name, price, defaultPrice, description, imageId } = item?.card?.info;

  // If image won't found, it will use dummyImage
  if (!imageId) {
    imageId = dummyImage;
  }

  return (
    <>
      <div className="menu-card menu-item-card">
        {/* Left */}
        <div className="menu-card-left">
          <h2 className="menu-name">{name}</h2>
          <h3 className="menu-price">
            ₹{price ? price / 100 : defaultPrice ? defaultPrice / 100 : ""}
          </h3>
          <h4 className="menu-description">{description}</h4>
        </div>

        {/* Right */}
        <div className="menu-card-right">
          <img src={CDN_URL + imageId} alt="Menu Card Image" />
          <button className="add-btn">Add + </button>
        </div>
      </div>
    </>
  );
};

export default MenuItemCard;
