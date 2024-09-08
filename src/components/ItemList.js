import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div data-testid="foodItems"
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span>
                - ₹
                {(item?.card?.info?.defaultPrice ||
                  item?.card?.info?.finalPrice ||
                  item?.card?.info?.price) / 100}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex justify-center items-end">
              <button
                className="py-1 px-2 bg-black text-white shadow-lg rounded-lg text-sm"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img
              className="w-20 h-20 rounded-lg"
              src={CDN_URL + item?.card?.info?.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
