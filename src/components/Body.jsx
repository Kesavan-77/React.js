import { useState, useEffect, useContext } from "react";
import ItemCard from "./ItemCard";
import { RESTUARANT_URL } from "../utils/Constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import ThemeContext from "../utils/ThemeContext";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);
  const [searchTerm, setSearchTerm] = useState("");
  const onlineStatus = useOnlineStatus();
  const {theme, setTheme} = useContext(ThemeContext);

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

  //theme handler
  const handleThemeOption = (event)=>{
    setTheme(event.target.value);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTUARANT_URL);
    const jsonData = await data.json();
    const fetchedRestaurants = jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    
    // Update both restaurants and filtered restaurants
    setRestaurants(fetchedRestaurants);
    setFilteredRestaurants(fetchedRestaurants);
  };

  if(!onlineStatus){
    return (
      <div class="offline-message">
        <h1>Please connect to your internet and try again</h1>
      </div>
    );
  }

  return (
      <div className="p-2 px-4 md:px-20">
        <div className="mt-8 flex items-center justify-center">
          <input
            className="w-72 mx-4 px-5 p-2 rounded-lg border-2 border-gray-300"
            type="search"
            placeholder="Search items"
            value={searchTerm}
            onChange={handleSearch}
          />
          <select onChange={handleFilterOption} className="px-5 p-2 rounded-lg border-2 border-gray-300 hover:cursor-pointer">
            <option value="">Select</option>
            <option value="top-rated">Top rated</option>
            <option value="low-rated">Low rated</option>
          </select>
          <select onChange={handleThemeOption} className="px-5 p-2 rounded-lg border-2 border-gray-300 hover:cursor-pointer">
            <option value="light">Theme</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        {/* <p className="mt-5 text-3xl">Restaurants</p> */}
        <ItemCard data={filteredRestaurants} />
      </div>
  );
};

export default Body;
