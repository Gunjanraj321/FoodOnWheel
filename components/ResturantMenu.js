import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_ITEM_TYPE_KEY, swiggy_menu_api_URL } from "../utils/constant";

import Shimmer from "./shimmer";
const RestaurantMenu = () => {
  const { id } = useParams();
  const [resInfo, setResInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, [id]);

  const fetchMenu = async () => {
    try {
      const response = await fetch(swiggy_menu_api_URL + id);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const json = await response.json();

      // console.log(json);
// const{name,cuisines} = resInfo?.cards[2]?.card?.card?.info;
const itemCards = json?.data?.cards.find(x=> x.groupedCard)?.
                            groupedCard?.cardGroupMap?.REGULAR?.
                            cards?.map(x => x.card?.card)?.
                            filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.
                            map(x=> x.itemCards).flat().map(x=> x.card?.info) || [];      // const { itemCards } =
      console.log(itemCards);
      const uniqueItemsData = [];
      itemCards.forEach((item)=>{
        if(!uniqueItemsData.find(x => x.id === item.id)){
          uniqueItemsData.push(item);
        }
      })
      setMenuItems(uniqueItemsData)

      const restaurantData = json?.data?.cards[2]?.card?.card?.info;

      if (restaurantData && restaurantData.id === id) {
        setResInfo(restaurantData);
      } else {
        throw new Error(`Restaurant with ID ${id} not found`);
      }
    } catch (error) {
      console.log(error);
    }
  };


  return !resInfo ? <Shimmer /> :  (
    <div className="Menu">
      <h1>{resInfo.name}</h1>
      <p>
        {resInfo.cuisines.join(", ")} - {resInfo.costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {menuItems.map((item) => {
          return (
            <li key={item?.id}>
              {item?.name} - {item?.price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
