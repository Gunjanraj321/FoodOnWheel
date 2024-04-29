import { useDispatch } from "react-redux";
import { CON_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const Itemlist = ({ items }) => {

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action when some add item to cart
    dispatch(addItem(item))
  }

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>

          <div className="w-3/12 p-2">
            <div className="absolute">
              <button className=" px-1 mx-2 bg-black shadow-lg rounded-md text-white"
              onClick={()=>handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img
              src={CON_URL + item.card.info.imageId}
              className="w-full rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Itemlist;
