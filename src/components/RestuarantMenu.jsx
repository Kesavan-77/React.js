import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestuarantMenu from "../utils/useRestuarantMenu";

const RestaurantMenu = (props) => {
  const { resId } = useParams();
  const resData = useRestuarantMenu(resId);

  const renderMenu = () => {
    const cards = resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    var categories = cards.filter((c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    categories = categories[0]?.card?.card?.itemCards || [];
    console.log(categories);
    return (
      <ul className="mt-5 flex flex-col items-center justify-center gap-5">
        {categories.map((item) => {
          const { id, imageId, name, price } = item?.card?.info;
          return imageId ? (
            <li
              key={id}
              className="flex items-center justify-between p-4 w-2/4 bg-slate-50 shadow-lg rounded"
            >
              <span className="flex items-center gap-4">
                <span>
                  <img
                    className="w-20"
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
                    height="200px"
                    width="200px"
                    alt={name || "Menu item image"}
                  />
                </span>
                <span>{name}</span>
              </span>
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
    <div className="center">
      <h1 className="mt-5 text-2xl font-semibold text-red-700 text-center">
        {resData?.data?.cards[2]?.card?.card?.info?.name}
      </h1>
      <div>
        {renderMenu()}
      </div>
    </div>
  );
};

export default RestaurantMenu;
