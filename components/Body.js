import { useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./shimmer";
import RestaurantCard from "./restaurantCard";
import { swiggy_api_URL } from "../utils/constant";
import useResData from "../utils/useResData";
import { filterData } from "../utils/Helper";

const Body =  () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, FilterRes] = useResData(swiggy_api_URL);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);

  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, restaurants);
      setFilteredRestaurants(filteredData);
    } else {
      setFilteredRestaurants(restaurants);
    }
  };

  if (!allRestaurants || !FilterRes) return <Shimmer/>;

  return  (
    <div className="Body">
      <div className="search">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            searchData(e.target.value, allRestaurants);
          }}
        />
        <button
          onClick={() => {
            searchData(searchText, allRestaurants);
          }}
        >
          search
        </button>
      </div>

      {
        allRestaurants?.length === 0 && FilterRes?.length === 0 ? (
          <Shimmer />
        ) : (
          <div className="res-container">
          {(filteredRestaurants === null ? FilterRes : filteredRestaurants).map(
            (restaurant) => (
              <Link
                to={"/restaurants/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
                <RestaurantCard resData={restaurant} />
              </Link>
            )
          )}
        </div>
        )}
    </div>
  );
};

export default Body;
