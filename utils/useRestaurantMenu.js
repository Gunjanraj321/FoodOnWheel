import { useEffect, useState } from "react";
import { swiggy_menu_api_URL } from "./constant";

const useRestaurantMenu = (
  id,
  swiggy_menu_api_URL,
) => {
  const [resInfo, setResInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(swiggy_menu_api_URL + id);
      const json = await response.json();

      const restaurantData = json.data.cards[2].card.card.info || [];
      
      const { itemCards } =
        json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
      console.log("menu opt",itemCards);
      
      setResInfo(restaurantData);
      console.log("res data",restaurantData);
     
      setMenuItems(itemCards);
      // console.log(itemCards);

    } catch (err) {
      setMenuItems([]);
      setResInfo(null);
      console.log(err);
    }
  };

  return [resInfo, menuItems];
};

export default useRestaurantMenu;
