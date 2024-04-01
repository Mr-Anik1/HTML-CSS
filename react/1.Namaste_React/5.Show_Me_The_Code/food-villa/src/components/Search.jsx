import { useState } from "react";

export const filterData = ({ searchText, restaurants }) => {
  const data = restaurants.filter((restaurant) => {
    return restaurant.data?.name
      .toLowerCase()
      .includes(searchText.trim().toLowerCase());
  });

  return data;
};

export const Search = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchClick = () => {
    handleSearch(searchText);
  };

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Food or Restaurant"
          value={searchText}
          onChange={handleInputChange}
        />
        <button className="search-btn" onClick={handleSearchClick}>
          Search
        </button>
      </div>
    </>
  );
};
