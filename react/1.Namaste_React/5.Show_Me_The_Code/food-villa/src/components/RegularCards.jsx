import { useState } from "react";
import MenuItemCard from "./MenuItemCard";

const RegularCategoriesItemCards = ({ regularCard, cloudinaryImageId }) => {
  // Accordion
  const [isOpen, setIsOpen] = useState(false); // Initial state closed

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-main">
      <div className="menu-header" onClick={handleToggle}>
        <span>
          {regularCard?.title} ({regularCard?.categories[0]?.itemCards?.length})
        </span>
        <span className="down-arrow">⬇️</span>
      </div>

      <div className={`menu-main-card-container  ${isOpen ? "" : "hidden"}`}>
        {regularCard?.categories[0]?.itemCards?.map((item) => (
          <MenuItemCard
            key={item?.card?.info?.id}
            item={item}
            dummyImage={cloudinaryImageId}
          />
        ))}
      </div>
    </div>
  );
};

const RegularItemCards = ({ regularCard, cloudinaryImageId }) => {
  // Accordion
  const [isOpen, setIsOpen] = useState(false); // Initial state closed

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={"menu-main"}>
      <div className={"menu-header"} onClick={handleToggle}>
        <span>
          {regularCard?.title} ({regularCard?.itemCards?.length})
        </span>
        <span className="down-arrow">⬇️</span>
      </div>

      {/* 

Another way:-> when isOpen is true then run the code otherwise not.

{isOpen && (
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

*/}
      <div className={`menu-main-card-container  ${isOpen ? "" : "hidden"}`}>
        {regularCard?.itemCards?.map((item) => (
          <MenuItemCard
            key={item?.card?.info?.id}
            item={item}
            dummyImage={cloudinaryImageId}
          />
        ))}
      </div>
    </div>
  );
};

export { RegularCategoriesItemCards, RegularItemCards };
