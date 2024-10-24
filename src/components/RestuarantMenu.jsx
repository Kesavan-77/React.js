import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = (props) => {
  const [resData, setResData] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  async function fetchRestaurantData() {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch menu data");
      }
      const jsonData = await response.json();
      setResData(jsonData);
      console.log(jsonData);
    } catch (err) {
      console.log(err);
    }
  }

  const renderMenu = () => {
    const itemCards =
      resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards;

    if (!itemCards) {
      return <p>No menu available</p>;
    }

    return (
      <ul className="menu-list">
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            <span className="menu-item-name">{item.card.info.name}</span>
            <span className="menu-item-price">₹{item.card.info.price / 100}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="restaurant-menu">
      <h1 className="restaurant-name">{resData?.data?.cards[2]?.card?.card?.info?.name}</h1>
      <div>
        <h3 className="menu-header">Menu</h3>
        {renderMenu()}
      </div>
    </div>
  );
};

export default RestaurantMenu;
