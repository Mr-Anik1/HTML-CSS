import MenuItemCard from "./MenuItemCard";

const RegularCategoriesItemCards = ({
  regularCard,
  cloudinaryImageId,
  showItems,
  setShowIndex,
}) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="menu-main">
      <div className="menu-header" onClick={handleClick}>
        <span>
          {regularCard?.title} ({regularCard?.categories[0]?.itemCards?.length})
        </span>
        <span className="down-arrow">⬇️</span>
      </div>

      {showItems && (
        <div className={`menu-main-card-container`}>
          {regularCard?.categories[0]?.itemCards?.map((item) => (
            <MenuItemCard
              key={item?.card?.info?.id}
              item={item}
              dummyImage={cloudinaryImageId}
            />
          ))}
        </div>
      )}

      {/* <div className={`menu-main-card-container  ${showItems ? "" : "hidden"}`}>
        {regularCard?.categories[0]?.itemCards?.map((item) => (
          <MenuItemCard
            key={item?.card?.info?.id}
            item={item}
            dummyImage={cloudinaryImageId}
          />
        ))}
      </div> */}
    </div>
  );
};

const RegularItemCards = ({
  regularCard,
  cloudinaryImageId,
  showItems,
  setShowIndex,
}) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className={"menu-main"}>
      <div className={"menu-header"} onClick={handleClick}>
        <span>
          {regularCard?.title} ({regularCard?.itemCards?.length})
        </span>
        <span className="down-arrow">⬇️</span>
      </div>

      {showItems && (
        <div className={`menu-main-card-container`}>
          {regularCard?.itemCards?.map((item) => (
            <MenuItemCard
              key={item?.card?.info?.id}
              item={item}
              dummyImage={cloudinaryImageId}
            />
          ))}
        </div>
      )}

      {/* <div className={`menu-main-card-container  ${showItems ? "" : "hidden"}`}>
        {regularCard?.itemCards?.map((item) => (
          <MenuItemCard
            key={item?.card?.info?.id}
            item={item}
            dummyImage={cloudinaryImageId}
          />
        ))}
      </div> */}
    </div>
  );
};

export { RegularCategoriesItemCards, RegularItemCards };
