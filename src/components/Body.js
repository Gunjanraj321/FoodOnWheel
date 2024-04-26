import { useState } from "react";
import { Link } from "react-router-dom";
import ShimmerCard from "./ShimmerCard";
import { swiggy_api_URL } from "../utils/constant";
import useResData from "../utils/useResData";
import { filterData } from "../utils/Helper";
import RestaurantCard ,{ withPromotedLabel } from "./RestaurantCard";

const Body =  () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, FilterRes] = useResData(swiggy_api_URL);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, restaurants);
      setFilteredRestaurants(filteredData);
    } else {
      setFilteredRestaurants(restaurants);
    }
  };

  if (!allRestaurants || !FilterRes) return <ShimmerCard/>;

  return  (
    <div className="">
      <div className="search m-4 p-4 rounded-lg">
        <input
          type="text"
          className="border border-solid border-black rounded-lg"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            searchData(e.target.value, allRestaurants);
          }}
        />
        <button className="px-4 mx-4 bg-green-300 rounded-md"
          onClick={() => {
            searchData(searchText, allRestaurants);
          }}
        >
          🔍
        </button>
      </div>

      {
        allRestaurants?.length === 0 && FilterRes?.length === 0 ? (
          <ShimmerCard />
        ) : (
          <div className="flex flex-wrap">
          {(filteredRestaurants === null ? FilterRes : filteredRestaurants).map(
            (restaurant) => (
              <Link
                to={"/restaurants/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
                {
                  restaurant?.info?.promoted ? <RestaurantCardPromoted  resData={restaurant} /> : <RestaurantCard resData={restaurant} />
                }
                
              </Link>
            )
          )}
        </div>
        )}
    </div>
  );
};

export default Body;
