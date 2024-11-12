import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestuarantMenu from "../utils/useRestuarantMenu";

const RestaurantMenu = (props) => {
  const { resId } = useParams();
  const resData = useRestuarantMenu(resId);
  const renderMenu = () => {
    const cards = resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    const itemCards = cards.flatMap(card => card?.card?.card?.itemCards || []);
  
    if (!itemCards.length) {
      return <p>No menu available</p>;
    }
  
    return (
      <ul className="menu-list">
        {itemCards.map((item) => {
          const { id, imageId, name, price } = item.card.info;
          return imageId ? (
            <li key={id}>
              <span>
                <img 
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`} 
                  height="200px" 
                  width="200px" 
                  alt={name || "Menu item image"} 
                />
              </span>
              <span className="menu-item-name">{name}</span>
              <span className="menu-item-price">
                ₹{price ? (price / 100).toFixed(2) : "Price not available"}
              </span>
            </li>
          ) : null;
        })}
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
