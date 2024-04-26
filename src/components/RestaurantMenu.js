import { useParams, useSearchParams } from "react-router-dom";
import { MENU_ITEM_TYPE_KEY, swiggy_menu_api_URL } from "../utils/constant";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import ShimmerCard from "./ShimmerCard";
import { useState } from "react";

const RestaurantMenu = () => {
  const { id } = useParams();
  
  const [resInfo, menuItems, categories] = useRestaurantMenu(
    id,
    swiggy_menu_api_URL
  );
  const [showIndex, setShowIndex] = useState(null);

  return resInfo === null ? (
    <ShimmerCard />
  ) : (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{resInfo.name}</h1>
      <p className="font-bold my-3 text-lg">
        {resInfo.cuisines.join(", ")} - {resInfo.costForTwoMessage}
      </p>
      {/* Accordion categfories */}
      {categories.map((category, index) => (
        // controlled component
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItem={index === showIndex ? true : false}
          setShowIndex={()=>setShowIndex(index)}
        />
      ))}

      {/* <h2>Menu</h2>
      <ul>
        {menuItems.map((item) => {
          return (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} - {item?.card?.info?.price / 100 || 100}
            </li>
          );
        })}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
