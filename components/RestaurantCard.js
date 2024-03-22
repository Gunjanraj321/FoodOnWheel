import { CON_URL } from "../utils/constant";


const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    avgRating,
    cloudinaryImageId,
    costForTwo,
    cuisines,
  } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CON_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      {/* <h4>{deliveryTime} minutes</h4> */}
    </div>
  );
};

export default RestaurantCard;
