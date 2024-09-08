import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  //console.log(resData);

  const {
    name,
    cloudinaryImageId,
    costForTwo,
    cuisines,
    avgRatingString,
    sla,
  } = resData?.info;

  return (
    <div data-testid="resCard" className="m-4 p-4 w-[250px] items-center rounded-lg hover:scale-95 transition-transform duration-300 ease-in-out relative">
      <div className="w-[220px] h-[150px] overflow-hidden rounded-lg relative">
        <img
          className="object-cover w-[220px] h-[150px] rounded-lg"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-black"></div>
        <div className="absolute bottom-0 left-0 text-white p-2">
          <h4 className="p-2 font-extrabold font-sans text-2xl">
            {costForTwo}
          </h4>
        </div>
      </div>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} stars</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export const withVegLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="border border-black bg-gray-100 text-black-500 m-2 p-2 rounded-lg">
          🟢 VEG
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
