import { CON_URL } from "../utils/constant";


const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    avgRating,
    cloudinaryImageId,
    costForTwo,
    cuisines,
    sla
  } = resData?.info;

  const delivaeryTime = sla.slaString;

  return (
    <div className="m-4 p-4 w-[200px] flex-wrap rounded-lg bg-slate-200 shadow-lg hover:bg-yellow-100">
      <img
        className="w-44 h-28 rounded-lg"
        alt="res-logo"
        src={CON_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4 className="font-sans">{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4 className="">{delivaeryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
