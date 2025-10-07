import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white shadow-lg sticky top-0 z-50">
      <div className="logo-container">
        <Link to="/">
          <h1 className="text-3xl font-bold text-orange-400">NAMASTE FOOD</h1>
        </Link>
      </div>
      <div className="flex items-center space-x-6">
        <span>Online Status: {onlineStatus ? "🟢" : "🔴"}</span>
        <Link to="/" className="hover:text-orange-400">
          Home
        </Link>
        <Link to="/about" className="hover:text-orange-400">
          About Us
        </Link>
        <Link to="/contact" className="hover:text-orange-400">
          Contact
        </Link>
        <Link to="/grocery" className="hover:text-orange-400">
          Grocery
        </Link>
        <Link to="/cart" className="font-bold hover:text-orange-400">
          Cart ({cartItems.length} items)
        </Link>
        <button
          className="px-3 py-1 bg-orange-500 rounded-lg hover:bg-orange-600"
          onClick={() => setbtnName(btnName === "Login" ? "Logout" : "Login")}
        >
          {btnName}
        </button>
        <span className="font-semibold">{loggedInUser}</span>
      </div>
    </div>
  );
};

export default Header;
