import { LOGO_URL } from "../utils/constant";
import { useState , useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  let btnName = "Login";
  const [btnNameReact, setBtnNameReact] = useState("Login");

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-1 mb-2 sm:bg-green-100">
      <div className="logoContainer">
        <img className="w-40 m-3" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 space-x-5">
          <li> Online : {onlineStatus ? "✅" : "⭕"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>Cart</li>
          <button
            className="bg-green-200 hover:bg-green-300 "
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
