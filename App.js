import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./public/assets/logo.png";
import "./app.css";
import responseData from './public/json/List.json';

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header-items">
        <ul className="items-list">
          <li>Home</li>
          <li>About</li>
          <li>Orders</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ItemCard = (props) => {
  console.log(props.data);
  return (
    <div className="items-body">
      {props.data.map((restaurant) => (
        <div className="item-card" key={restaurant.info.id}>
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.info.cloudinaryImageId}`} // Update with actual image URL
            alt={`${restaurant.info.name} food`}
          />
          <h3>{restaurant.info.name}</h3>
          <p>{restaurant.info.cuisines.join(",") || "Default Food Name"}</p>
          <p>Price: {restaurant.info.costForTwo || "Price not available"}</p>
          <p>Ratings: {restaurant.info.avgRating || "No ratings available"}</p>
        </div>
      ))}
    </div>
  );
};

const Body = () => {
  return (
    <div>
      <div className="search-body">
        <input type="search" placeholder="Search items" />
      </div>
      <p className="item-head">Restaurants</p>
        <ItemCard data = {responseData.data.cards[0].card.card.gridElements.infoWithStyle.restaurants}/>
    </div>
  );
};

const AppLayout = () => {
  console.log(responseData.data.cards[0].card.card.gridElements.infoWithStyle.restaurants);
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
