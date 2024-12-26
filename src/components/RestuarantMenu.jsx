import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestuarantMenu from "../utils/useRestuarantMenu";
import ItemCategory from "./ItemCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resData = useRestuarantMenu(resId);
  const [showItem, setShowItem] = useState(0);

  const renderMenu = () => {
    const cards = resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    var categories = cards.filter((c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    return (
      <ul className="mt-5 flex flex-col items-center justify-center gap-5">
        {categories.map((category, index) => {
          return(
          <ItemCategory data={category.card.card} showItem={index===showItem} setShowItem = {()=>setShowItem (index==showItem ? -1 : index)} />
        )
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