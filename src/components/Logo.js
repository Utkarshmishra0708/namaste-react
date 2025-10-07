import { FaUtensils } from "react-icons/fa";

const Logo = () => {
  return (
    <div className="flex items-center gap-2 font-bold text-xl md:text-2xl text-gray-800">
      <FaUtensils className="text-orange-500 text-2xl md:text-3xl" />
      NAMASTE <span className="text-orange-500">FOOD</span>
    </div>
  );
};

export default Logo;
