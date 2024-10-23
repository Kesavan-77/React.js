import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
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
      filtered.sort((a, b) => b.info.avgRating - a.info.avgRating);
    } else if (filterValue === "low-rated") {
      filtered = restaurants.filter((res) => res.info.avgRating < 4);
      filtered.sort((a, b) => a.info.avgRating - b.info.avgRating);
    } else {
      filtered = restaurants;
    }
    setFilteredRestaurants(filtered);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    console.log(jsonData);
    const fetchedRestaurants = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    
    // Update both restaurants and filtered restaurants
    setRestaurants(fetchedRestaurants);
    setFilteredRestaurants(fetchedRestaurants);
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
