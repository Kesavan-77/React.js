import {FOOD_IMG_SRC_URL} from '../utils/Constant';

const ItemCard = ({ data }) => {
  return (
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
            <img
              src={FOOD_IMG_SRC_URL + cloudinaryImageId}
              alt={`${name} food`}
              loading="lazy"
            />
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <p>Price: {costForTwo}</p>
            <p>Ratings: {avgRating}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ItemCard;
