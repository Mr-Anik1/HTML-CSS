{
  baseCard.map((regularCard) =>
    regularCard?.card?.card?.itemCards ? (
      <div className="menu-main" key={regularCard?.card?.card?.title}>
        <h2 className="menu-items">
          {regularCard?.card?.card?.title}{" "}
          {regularCard?.card?.card?.itemCards.length} items
        </h2>

        <div className="menu-main-card-container">
          {regularCard?.card?.card?.itemCards.map((item) => (
            <MenuItemCard
              key={item?.card?.info?.id}
              item={item}
              dummyImage={cloudinaryImageId}
            />
          ))}
        </div>
      </div>
    ) : (
      <div className="menu-main" key={regularCard?.card?.card?.title}>
        <h2 className="menu-items">
          {regularCard?.card?.card?.title}{" "}
          {regularCard?.card?.card?.categories[0]?.itemCards.length} items
        </h2>

        <div className="menu-main-card-container">
          {regularCard?.card?.card?.categories[0]?.itemCards.map((item) => (
            <MenuItemCard
              key={item?.card?.info?.id}
              item={item}
              dummyImage={cloudinaryImageId}
            />
          ))}
        </div>
      </div>
    )
  );
}
