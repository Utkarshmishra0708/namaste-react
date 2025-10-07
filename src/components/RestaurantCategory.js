import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => setShowIndex();

  return (
    <div className="w-full md:w-6/12 mx-auto my-4 bg-gray-800 shadow-lg rounded-xl overflow-hidden">
      <div
        className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-700 transition-colors"
        onClick={handleClick}
      >
        <span className="font-bold text-lg text-orange-400">
          {data?.title} ({data.itemCards.length})
        </span>
        <span className="text-gray-300">{showItems ? "⬆️" : "⬇️"}</span>
      </div>

      {showItems && (
        <div className="p-4 bg-gray-900 rounded-b-xl">
          <ItemList items={data.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
