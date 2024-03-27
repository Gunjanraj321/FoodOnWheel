import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./shimmer";
import RestaurantCard from "./restaurantCard";
import { swiggy_api_URL } from "../utils/constant";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filterRes, setFilterRes] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(swiggy_api_URL);

    const json = await data.json();

    const restaurantData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setResList(restaurantData);
    setFilterRes(restaurantData);
  };

  const handleSearch = () => {
    const filteredRestaurant = filterRes.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setResList(filteredRestaurant);
  };
  const handleFilter = () => {
    const filteredList = filterRes.filter((res) => res.info.avgRating >= 4);
    setResList(filteredList);
  };

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={handleSearch}>search</button>
        </div>

        <button className="filter-btn" onClick={handleFilter}>
          Top Rated Restraunt
        </button>
      </div>

      <div className="res-container">
        {resList.map((restaurant) => (
          <Link to = {"/restaurants/"+ restaurant?.info?.id} key={restaurant?.info?.id} ><RestaurantCard resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
