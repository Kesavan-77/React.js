import { Link } from "react-router-dom";
import { FOOD_IMG_SRC_URL } from "../utils/Constant";
import Shimmer from "./Shimmer";

const ItemCard = ({ data }) => {
  return data.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="items-body">
      {data.map(({ info }) => {
        const {
          id,
          cloudinaryImageId,
          name = "Restaurant Name",
          cuisines = ["Cuisine not available"],
          costForTwo = "Price not available",
          avgRating = "No ratings available",
        } = info;

        return (
          <div className="item-card" key={id}>
            <Link to={`/restuarant/${id}`}>
              <img
                src={FOOD_IMG_SRC_URL + cloudinaryImageId}
                alt={`${name} food`}
                loading="lazy"
              />
              <h3>{name}</h3>
              <p>{cuisines.join(", ")}</p>
              <p>Price: {costForTwo}</p>
              <p>Ratings: {avgRating}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ItemCard;
