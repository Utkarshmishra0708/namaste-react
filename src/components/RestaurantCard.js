import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cloudinaryImageId,
    costForTwo,
    cuisines,
    avgRatingString,
    sla,
  } = resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] bg-gray-800 text-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
      <div className="w-full h-40 overflow-hidden rounded-lg relative">
        <img
          className="object-cover w-full h-full rounded-lg"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-black"></div>
      </div>
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4 className="text-sm">{cuisines.join(", ")}</h4>
      <h4 className="text-sm">{avgRatingString} stars</h4>
      <h4 className="text-sm">{sla.slaString}</h4>
      <h4 className="text-sm font-semibold mt-1">{costForTwo}</h4>
    </div>
  );
};

export const withVegLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded-md text-sm font-semibold z-10">
          🟢 VEG
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
