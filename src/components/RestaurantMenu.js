import { useParams } from "react-router-dom";
import {
  MENU_ITEM_TYPE_KEY,
  swiggy_menu_api_URL,
} from "../utils/constant";

import useRestaurantMenu from "../utils/useRestaurantMenu";

import ShimmerCard from "./ShimmerCard";

const RestaurantMenu = () => {
  const { id } = useParams();

  const [resInfo, menuItems] = useRestaurantMenu(
    id,
    swiggy_menu_api_URL,
  );

  return resInfo === null ? (
    <ShimmerCard />
  ) : (
    <div className="Menu">
      <h1>{resInfo.name}</h1>
      <p>
        {resInfo.cuisines.join(", ")} - {resInfo.costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {menuItems.map((item) => {
          return (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} - {item?.card?.info?.price / 100 || 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
