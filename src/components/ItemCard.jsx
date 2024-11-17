import { Link } from "react-router-dom";
import { FOOD_IMG_SRC_URL } from "../utils/Constant";
import Shimmer from "./Shimmer";

const ItemCard = ({ data }) => {
  return data.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mt-8 flex flex-wrap gap-5 justify-center">
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
          <div className="w-64  bg-neutral-50 rounded-lg p-3" key={id}>
            <Link to={`/restuarant/${id}`}>
              <img
              className="rounded-lg h-64"
                src={FOOD_IMG_SRC_URL + cloudinaryImageId}
                alt={`${name} food`}
                loading="lazy"
              />
              <h3 className="mt-2 text-xl font-semibold">{name}</h3>
              <p className="mt-2 text-green-800">{cuisines.join(", ")}</p>
              <p className="mt-2 text-blue-800 font-semibold">Price: {costForTwo}</p>
              <p className="mt-2 text-yellow-600 font-semibold">Ratings: {avgRating}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ItemCard;
