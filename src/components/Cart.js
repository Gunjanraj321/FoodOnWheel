import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./ItemList";
import { clearCart } from "../utils/cartSlice"; // Update the path accordingly

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
//   console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 rounded-md bg-green-400 text-red-500 font-bold"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && <h1>Cart is Empty. Add some food to your cart</h1>}
        <Itemlist items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
