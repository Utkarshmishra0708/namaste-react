import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => dispatch(clearCart());

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4 text-orange-400">Cart</h1>
      <div className="w-full md:w-6/12 mx-auto">
        <button
          className="mb-4 px-4 py-2 bg-orange-500 rounded-lg hover:bg-orange-600"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 ? (
          <h2 className="text-gray-300">
            Cart is empty, add items to the cart!
          </h2>
        ) : (
          <ItemList items={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
