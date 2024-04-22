import React, { useState, useEffect } from "react";
import { userData } from "../utils/constant";

const UserClass = () => {
  const [userInfo, setUserInfo] = useState({
    name: "Gunjan Kumar",
    location: "Hazaribagh",
    avatar_url: "https://avatars.githubusercontent.com",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(userData);
        const json = await response.json();
        setUserInfo(json);
        console.log(json);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();

  }, []); // Empty dependency array to run effect only once

  const { name, location, login, avatar_url } = userInfo;

  return (
    <div className="user-card">
      <img src={avatar_url} alt="User Avatar" /> {/* Fixed src attribute */}
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h3>Contact: {login}</h3>
    </div>
  );
};

export default UserClass;
