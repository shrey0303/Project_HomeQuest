import { BsFillHousesFill, BsHouseFill } from "react-icons/bs";
import { HiOfficeBuilding, HiHome, HiMap, HiKey } from "react-icons/hi";
import { MdNotifications, MdAccountBox, MdFavorite } from "react-icons/md";

export const USER_MENU_LINKS = [
  {
    icon: MdAccountBox,
    name: "account",
  },
  {
    icon: MdNotifications,
    name: "notifications",
  },
  {
    icon: BsFillHousesFill,
    name: "listings",
  },
  {
    icon: MdFavorite,
    name: "favorites",
  },
];

export const THEME_OPTIONS = ["light", "dark"];

export const LISTING_STEPS = [
  "category",
  "location",
  "Information",
  "details",
  "submit",
];

export const HOUSING_TYPE_ID = "667b9f04df5cefbf8afb4e00";

export const ROOM_AND_SALOONS = [
  {
    name: "1BHK",
    value: "1BHK",
  },
  {
    name: "2BHK",
    value: "2BHK",
  },
  {
    name: "3BHK",
    value: "3BHK",
  },
  {
    name: "4BHK",
    value: "4BHK",
  },
  
  {
    name: "5BHK",
    value: "5BHK",
  }
];

export const HEATING_SYSTEMS = [
  {
    name: "Heat Pump",
    value: "heat pump",
  },
  {
    name: "Forced Air System",
    value: "forced air system",
  },
  {
    name: "Radiator System",
    value: "radiator system",
  },
  {
    name: "Radiant Heating",
    value: "radiant heating",
  },
];

export const HOME_LINKS = [
  {
    icon: BsHouseFill,
    name: "Sale",
    param: "?category=sale",
  },
  {
    icon: HiKey,
    name: "Rent",
    param: "?category=rent",
  },
  {
    icon: HiHome,
    name: "House",
    param: "?category=sale&type=667b9f04df5cefbf8afb4e00",
  },
  {
    icon: HiOfficeBuilding,
    name: "Workplace",
    param: "?category=sale&type=667b9f04df5cefbf8afb4e01",
  },
  {
    icon: HiMap,
    name: "Land",
    param: "?category=sale&type=667b9f04df5cefbf8afb4e02",
  },
];

export const SORT_OPTIONS = [
  { name: "Newest", value: "date-desc" },
  { name: "Oldest", value: "date-asc" },
  { name: "Highest Price", value: "price-desc" },
  { name: "Lowest Price", value: "price-asc" },
];
