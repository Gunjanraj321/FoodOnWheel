import { useState, useEffect } from "react";

const useResData = (API_URL) => {
  const [resList, setResList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        const error = response.status;
        throw new Error(error);
      } else {
        const json = await response.json();

        const restaurantData =
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        setFilteredRestaurant(restaurantData);
        setResList(restaurantData)
      }
    } catch (error) {
        console.log(error);
    }
  }
  return [resList , filteredRestaurant];
};

export default useResData;
