import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    console.log("Restaurant Menu");
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=603438&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
    );

    const json = await data.json();

    console.log(json);

    setResInfo(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants[0]?.info
    );
  };

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{resInfo.name}</h1>
      <p>
        {resInfo.cuisines.join(", ")} - {resInfo.costForTwo}
      </p>
      <h2>Menu</h2>
      <ul>
        <li>Biriyani</li>
        <li>BUrgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
