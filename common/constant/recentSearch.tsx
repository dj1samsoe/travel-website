import { FiSearch } from "react-icons/fi";
import { RiMapPin2Line } from "react-icons/ri";

const iconSize = 24;

export const RECENT_SEARCH = [
  {
    icon: <RiMapPin2Line size={iconSize} />,
    building: "Burj Khalifa",
    location: "Dubai, UAE",
  },
  {
    icon: <RiMapPin2Line size={iconSize} />,
    building: "Museum of Tomorrow",
    location: "Rio de Janeiro, Brazil",
  },
  {
    icon: <FiSearch size={iconSize} />,
    building: "Restaurant in Canada",
    location: null,
  },
  {
    icon: <FiSearch size={iconSize} />,
    building: "Hotels in Canada",
    location: null,
  },
  {
    icon: <RiMapPin2Line size={iconSize} />,
    building: "Ngorongoro Conservation Area",
    location: "Nothern Tanzania",
  },
];
