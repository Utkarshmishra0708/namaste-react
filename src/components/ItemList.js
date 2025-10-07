import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => dispatch(addItem(item));

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item?.card?.info?.id}
          className="flex justify-between p-4 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
        >
          <div className="flex-1 pr-4">
            <h3 className="font-bold text-lg">{item?.card?.info?.name}</h3>
            <p className="text-gray-300 text-sm">
              {item?.card?.info?.description}
            </p>
            <p className="font-semibold mt-1">
              ₹
              {(item?.card?.info?.defaultPrice ||
                item?.card?.info?.finalPrice ||
                item?.card?.info?.price) / 100}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-20 h-20 rounded-lg mb-2 object-cover"
              src={CDN_URL + item?.card?.info?.imageId}
              alt={item?.card?.info?.name}
            />
            <button
              className="px-3 py-1 bg-orange-500 rounded-lg text-white hover:bg-orange-600"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
