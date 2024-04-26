import { useEffect, useState } from "react";
import { MENU_ITEM_TYPE_KEY } from "./constant";

const useRestaurantMenu = (id, swiggy_menu_api_URL) => {
  const [resInfo, setResInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, [id, swiggy_menu_api_URL]); // Run effect when id or swiggy_menu_api_URL changes

  const fetchData = async () => {
    try {
      const response = await fetch(swiggy_menu_api_URL + id);
      const json = await response.json();

      // Ensure data is available before accessing nested properties
      const restaurantData = json?.data?.cards[2]?.card?.card?.info || [];
      const itemCards =
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
          ?.card?.itemCards || [];
      const categoryCards = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c?.card?.["card"]?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
      // console.log(categoryCards)

      setResInfo(restaurantData);
      setMenuItems(itemCards);
      setCategories(categoryCards);
    } catch (err) {
      // Handle errors more gracefully, e.g., display an error message
      console.error("Error fetching restaurant menu:", err);
      setMenuItems([]);
      setResInfo(null);
      setCategories([]);
    }
  };

  return [resInfo, menuItems, categories];
};

export default useRestaurantMenu;
