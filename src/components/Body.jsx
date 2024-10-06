import { useState } from "react";
import responseData from "../../public/json/List.json";
import ItemCard from "./ItemCard";

const Body = () => {
  const restaurants =
    responseData.data.cards[0].card.card.gridElements.infoWithStyle.restaurants;
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);
  const [searchTerm, setSearchTerm] = useState("");

  // Search handler
  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);
    const filtered = restaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchValue)
    );
    setFilteredRestaurants(filtered);
  };

  // Filter restaurants based on rating
  const handleFilterOption = (event) => {
    const filterValue = event.target.value;
    let filtered;

    if (filterValue === "top-rated") {
      filtered = restaurants.filter((res) => res.info.avgRating >= 4);
      filtered.sort((a,b)=> b.info.avgRating - a.info.avgRating);
    } else if (filterValue === "low-rated") {
      filtered = restaurants.filter((res) => res.info.avgRating < 4);
      filtered.sort((a,b)=> a.info.avgRating - b.info.avgRating);
    } else {
      filtered = restaurants;
    }

    setFilteredRestaurants(filtered);
  };

  return (
    <div>
      <div className="search-body">
        <input
          type="search"
          placeholder="Search items"
          value={searchTerm}
          onChange={handleSearch}
        />
        <select onChange={handleFilterOption}>
          <option value="">Select</option>
          <option value="top-rated">Top rated</option>
          <option value="low-rated">Low rated</option>
        </select>
      </div>
      <p className="item-head">Restaurants</p>
      <ItemCard data={filteredRestaurants} />
    </div>
  );
};

export default Body;
